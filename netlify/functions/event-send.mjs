// Sends a reminder or thank-you email to the guests who RSVP'd for the event
// (Netlify form "event-rsvp"), through Resend, from the same sender as the RSVP
// confirmation (submission-created.mjs). Driven by scripts/event-email.mjs.
//
// Guard rails:
// - Only a caller holding a Netlify personal access token with access to THIS
//   site can use it: the token must be able to read this site's forms, checked
//   against the Netlify API on every call.
//   No new secret is needed; the Resend key never leaves the function.
// - It can only write to addresses that RSVP'd (or, in test mode, to exactly one
//   address with "[TEST]" in the subject), so it can never become an open relay.
// - dryRun (the default) sends nothing and returns the recipients and the first
//   rendered message, so the owner can approve the exact list and text first.
// - Each real send carries a Resend Idempotency-Key, so repeating the same send
//   does not email anyone twice.

const FORM = 'event-rsvp';
const API = 'https://api.netlify.com/api/v1';

const escape = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const json = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
const firstNameOf = (name) => String(name || '').trim().split(/\s+/)[0] || 'there';

// Plain text in, simple branded HTML out: blank lines make paragraphs, bare URLs become links.
function toHtml(text) {
  const paras = text.trim().split(/\n{2,}/).map((p) => {
    const body = escape(p)
      .replace(/https?:\/\/[^\s<]+/g, (u) => `<a href="${u}" style="color:#0b1c2e">${u.length > 60 ? u.replace(/^https?:\/\//, '').slice(0, 48) + '…' : u}</a>`)
      .replace(/\n/g, '<br>');
    return `<p style="margin:0 0 14px">${body}</p>`;
  });
  return `<div style="font-family:Inter,system-ui,-apple-system,Segoe UI,Helvetica,Arial,sans-serif;color:#1d2b3a;max-width:560px;margin:0 auto;line-height:1.6;font-size:15px">${paras.join('\n')}</div>`;
}

async function netlify(token, path) {
  const res = await fetch(`${API}${path}`, { headers: { Authorization: `Bearer ${token}` } });
  if (!res.ok) throw Object.assign(new Error(`Netlify ${res.status}`), { status: res.status });
  return res.json();
}

async function rsvps(token, siteId) {
  const forms = await netlify(token, `/sites/${siteId}/forms`);
  const form = forms.find((f) => f.name === FORM);
  if (!form) return [];
  const out = new Map();
  for (let page = 1; page < 50; page++) {
    const subs = await netlify(token, `/forms/${form.id}/submissions?per_page=100&page=${page}`);
    for (const s of subs) {
      const email = String(s.data?.email || s.email || '').trim().toLowerCase();
      if (email && !out.has(email)) out.set(email, { email, first: firstNameOf(s.data?.name || s.name) });
    }
    if (subs.length < 100) break;
  }
  return [...out.values()];
}

export default async (request, context) => {
  if (request.method !== 'POST') return json({ error: 'POST only' }, 405);
  const token = (request.headers.get('authorization') || '').replace(/^Bearer\s+/i, '');
  const siteId = context?.site?.id || process.env.SITE_ID;
  if (!token || !siteId) return json({ error: 'unauthorized' }, 401);
  // GET /sites/:id answers even for a bad token, so check against the site's
  // forms, which need a token that really has access to this site.
  try {
    const forms = await netlify(token, `/sites/${siteId}/forms`);
    if (!Array.isArray(forms)) return json({ error: 'unauthorized' }, 401);
  } catch {
    return json({ error: 'unauthorized' }, 401);
  }

  let body;
  try { body = await request.json(); } catch { return json({ error: 'bad json' }, 400); }
  const { subject, text, only, testTo, idempotencyKey } = body || {};
  const dryRun = body?.dryRun !== false;
  if (!subject || !text) return json({ error: 'subject and text are required' }, 400);

  let list;
  if (testTo) {
    if (!/^\[TEST\]/.test(subject)) return json({ error: 'test sends need a subject starting with [TEST]' }, 400);
    list = [{ email: String(testTo).trim().toLowerCase(), first: body.testFirst || 'Test' }];
  } else {
    try { list = await rsvps(token, siteId); } catch (e) { return json({ error: 'could not read RSVPs', status: e.status }, 502); }
    if (Array.isArray(only) && only.length) {
      const want = new Set(only.map((e) => String(e).trim().toLowerCase()));
      const unknown = [...want].filter((e) => !list.some((r) => r.email === e));
      if (unknown.length) return json({ error: 'not on the RSVP list', unknown }, 400);
      list = list.filter((r) => want.has(r.email));
    }
  }

  const render = (r) => {
    const t = text.replaceAll('{first}', r.first);
    return { to: [r.email], subject, text: t, html: toHtml(t) };
  };
  if (dryRun) return json({ dryRun: true, count: list.length, recipients: list, sample: list[0] ? render(list[0]) : null });

  const key = process.env.RESEND_API_KEY;
  if (!key) return json({ error: 'RESEND_API_KEY not set' }, 500);
  if (!idempotencyKey) return json({ error: 'idempotencyKey is required for a real send' }, 400);
  const from = process.env.EVENT_FROM_EMAIL || 'PaWa Data Solutions <events@pawadata.com>';
  const replyTo = process.env.EVENT_REPLY_TO || 'hello@pawadata.com';

  const results = [];
  for (let i = 0; i < list.length; i += 100) {
    const chunk = list.slice(i, i + 100).map((r) => ({ from, reply_to: replyTo, ...render(r) }));
    const res = await fetch('https://api.resend.com/emails/batch', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', 'Idempotency-Key': `${idempotencyKey}-${i}` },
      body: JSON.stringify(chunk),
    });
    const out = await res.json().catch(() => ({}));
    results.push({ status: res.status, ids: (out.data || []).map((d) => d.id), error: res.ok ? undefined : out });
  }
  console.log(`event-send "${subject}": ${list.length} recipient(s), statuses ${results.map((r) => r.status).join(',')}`);
  return json({ dryRun: false, count: list.length, results });
};

export const config = { path: '/api/event-send' };
