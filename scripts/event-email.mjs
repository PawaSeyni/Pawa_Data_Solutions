#!/usr/bin/env node
// Preview, test or send one of the event emails in ops/events/ai-data-connections/
// to the guests who RSVP'd, through the site's /api/event-send function (which
// holds the Resend key). Uses the Netlify CLI login on this machine for auth.
//
//   node scripts/event-email.mjs 1-one-week-before            # preview: recipients + rendered text, sends nothing
//   node scripts/event-email.mjs 1-one-week-before --test you@example.com   # one [TEST] copy to that address
//   node scripts/event-email.mjs 1-one-week-before --send      # real send to every RSVP (only after the owner's yes)
//   node scripts/event-email.mjs 3-thank-you-attended --only a@x.com,b@y.com --send   # a subset of the RSVP list
//
// Files: first line "Subject: ...", optional "Send:" / "Fill in before sending:" notes,
// a blank line, then the body with {first} for the guest's first name. A real send
// is refused while the body still holds a [bracketed] placeholder.

import { readFileSync, existsSync } from 'node:fs';
import { homedir } from 'node:os';
import path from 'node:path';

const SITE = process.env.EVENT_SITE_URL || 'https://pawadata.com';
const DIR = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../ops/events/ai-data-connections');

const [name, ...rest] = process.argv.slice(2);
const flag = (f) => rest.includes(f);
const arg = (f) => (rest.includes(f) ? rest[rest.indexOf(f) + 1] : undefined);
if (!name) {
  console.error('usage: node scripts/event-email.mjs <email-file> [--test addr | --send] [--only a,b]');
  process.exit(1);
}

const file = path.join(DIR, name.endsWith('.txt') ? name : `${name}.txt`);
if (!existsSync(file)) throw new Error(`no such email: ${file}`);
const raw = readFileSync(file, 'utf8');
const [head, ...bodyParts] = raw.split(/\n\s*\n/);
const subjectLine = head.split('\n').find((l) => l.startsWith('Subject:'));
if (!subjectLine) throw new Error('first block must contain "Subject: ..."');
let subject = subjectLine.replace(/^Subject:\s*/, '').trim();
const text = bodyParts.join('\n\n').trim() + '\n';

const cfg = JSON.parse(readFileSync(path.join(homedir(), 'Library/Preferences/netlify/config.json'), 'utf8'));
const token = cfg.users?.[cfg.userId]?.auth?.token;
if (!token) throw new Error('Netlify CLI is not logged in on this machine');

const testTo = arg('--test');
const send = flag('--send') || Boolean(testTo);
if (testTo) subject = `[TEST] ${subject}`;
if (flag('--send') && /\[[^\]]+\]/.test(text)) throw new Error('the body still has a [placeholder]; fill it in before sending');
const only = arg('--only')?.split(',').map((s) => s.trim()).filter(Boolean);

const res = await fetch(`${SITE}/api/event-send`, {
  method: 'POST',
  headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({
    subject,
    text,
    only,
    testTo,
    dryRun: !send,
    idempotencyKey: send ? `${name}-${testTo ? 'test-' + Date.now() : 'live'}` : undefined,
  }),
});
const out = await res.json().catch(async () => ({ error: await res.text() }));
if (!res.ok) {
  console.error(res.status, out);
  process.exit(1);
}
if (out.dryRun) {
  console.log(`PREVIEW (nothing sent): ${out.count} recipient(s)`);
  for (const r of out.recipients) console.log(`  ${r.first} <${r.email}>`);
  if (out.sample) console.log(`\nSubject: ${out.sample.subject}\n\n${out.sample.text}`);
} else {
  console.log(`SENT "${subject}" to ${out.count} recipient(s):`, JSON.stringify(out.results));
}
