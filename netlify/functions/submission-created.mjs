// Netlify runs a function with this exact name on every form submission
// (https://docs.netlify.com/forms/notifications/#event-triggered-functions).
// It sends the RSVP confirmation for the event form and ignores every other
// form: the contact and job-application forms already notify the owner
// through Netlify's own email hook, and their senders get no auto-reply.
//
// Inert until RESEND_API_KEY is set in the site's environment: with no key it
// logs and returns, and the submission itself is unaffected either way.

const EVENT = {
  form: 'event-rsvp',
  title: 'AI, Data & Connections',
  when: 'Thursday, December 3, 2026, 4:30 PM to 7:30 PM EST',
  where: "Little Anthony's, 121 Richmond Street West, Toronto, ON M5H 2K1",
  url: 'https://pawadata.com/events/ai-data-connections/',
  ics: 'https://pawadata.com/events/ai-data-connections/event.ics',
};

const escape = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export default async (request) => {
  const { payload } = await request.json();
  if (payload?.form_name !== EVENT.form) return new Response('ignored', { status: 200 });

  const key = process.env.RESEND_API_KEY;
  const from = process.env.EVENT_FROM_EMAIL || 'PaWa Data Solutions <events@pawadata.com>';
  const replyTo = process.env.EVENT_REPLY_TO || 'hello@pawadata.com';
  const { name, email } = payload.data || {};
  if (!key) {
    console.log(`RSVP from ${email}: RESEND_API_KEY not set, no confirmation sent.`);
    return new Response('no sender configured', { status: 200 });
  }
  if (!email) return new Response('no email', { status: 200 });

  const firstName = String(name || '').trim().split(/\s+/)[0] || 'there';
  const text = `Hi ${firstName},

Thank you for your RSVP. We have your place for ${EVENT.title}, the executive networking happy hour hosted by PaWa Data Solutions and WisdomAI.

When: ${EVENT.when}
Where: ${EVENT.where}
Add to calendar: ${EVENT.ics}
Event page: ${EVENT.url}

If your plans change, just reply to this email. We look forward to seeing you.

PaWa Data Solutions and WisdomAI`;

  const html = `<div style="font-family:Inter,system-ui,-apple-system,Segoe UI,Helvetica,Arial,sans-serif;color:#1d2b3a;max-width:560px;margin:0 auto;line-height:1.6">
<p style="font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#c9a45c;margin:24px 0 8px">RSVP confirmed</p>
<h1 style="font-size:24px;margin:0 0 16px;color:#0b1c2e">${escape(EVENT.title)}</h1>
<p>Hi ${escape(firstName)},</p>
<p>Thank you for your RSVP. We have your place for the executive networking happy hour hosted by <strong>PaWa Data Solutions</strong> and <strong>WisdomAI</strong>.</p>
<table style="border-collapse:collapse;margin:20px 0" cellpadding="0" cellspacing="0">
<tr><td style="padding:6px 16px 6px 0;color:#7a8692;font-size:13px;vertical-align:top">When</td><td style="padding:6px 0"><strong>${escape(EVENT.when)}</strong></td></tr>
<tr><td style="padding:6px 16px 6px 0;color:#7a8692;font-size:13px;vertical-align:top">Where</td><td style="padding:6px 0">${escape(EVENT.where)}</td></tr>
</table>
<p><a href="${EVENT.ics}" style="display:inline-block;background:#c9a45c;color:#102033;text-decoration:none;font-weight:600;padding:12px 20px;border-radius:6px">Add to calendar</a></p>
<p style="font-size:14px;color:#5f6b78">If your plans change, just reply to this email. Event page: <a href="${EVENT.url}" style="color:#0b1c2e">${EVENT.url}</a></p>
<p>We look forward to seeing you.<br>PaWa Data Solutions and WisdomAI</p>
</div>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to: [email], reply_to: replyTo, subject: `You're confirmed: ${EVENT.title}, December 3`, text, html }),
  });
  if (!res.ok) {
    console.error(`Resend ${res.status}: ${await res.text()}`);
    return new Response('send failed', { status: 200 });
  }
  console.log(`RSVP confirmation sent to ${email}`);
  return new Response('sent', { status: 200 });
};
