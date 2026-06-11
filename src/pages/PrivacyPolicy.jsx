
import React from 'react';

const policyHtml = `
    <h1>Privacy Policy — PaWa Data Solutions</h1>
    <p class="meta"><strong>Effective date:</strong> August 10, 2025<br>
    <strong>Website:</strong> <a href="/">pawadata.com</a><br>
    <strong>Contact:</strong> <a href="mailto:privacy@pawadata.com">privacy@pawadata.com</a> • 628 Fleet Street, Suite 2803, Toronto, Ontario, Canada</p>

    <div class="toc">
      <strong>On this page:</strong>
      <ul>
        <li><a href="#who">1) Who we are</a></li>
        <li><a href="#collect">2) What we collect</a></li>
        <li><a href="#use">3) How we use information</a></li>
        <li><a href="#legal">4) Legal bases (EU/UK)</a></li>
        <li><a href="#cookies">5) Cookies &amp; similar tech</a></li>
        <li><a href="#sharing">6) Sharing</a></li>
        <li><a href="#transfers">7) International transfers</a></li>
        <li><a href="#retention">8) Data retention</a></li>
        <li><a href="#security">9) Security</a></li>
        <li><a href="#rights">10) Your rights</a></li>
        <li><a href="#children">11) Children’s privacy</a></li>
        <li><a href="#dnt">12) Do Not Track / GPC</a></li>
        <li><a href="#automated">13) Automated decisions</a></li>
        <li><a href="#changes">14) Changes</a></li>
        <li><a href="#contact">15) How to contact us</a></li>
      </ul>
    </div>

    <h2 id="who">1) Who we are</h2>
    <p>PaWa Data Solutions (“we,” “us,” “our”) operates this website (the “Site”). This policy explains how we collect, use, disclose, and protect personal information when you visit the Site, contact us, or book a meeting.</p>

    <h2 id="collect">2) What we collect</h2>
    <h3>Information you provide</h3>
    <ul>
      <li>Contact form: name, work email, phone, company, and message contents.</li>
      <li>Job applications (Careers page): name, email, phone, location, the role and experience level you select, your résumé, and any links or cover letter you provide.</li>
    </ul>
    <h3>Information collected automatically</h3>
    <ul>
      <li>Our hosting provider (Netlify) may log standard technical data such as IP address, device/browser details, and request timestamps to operate and secure the Site.</li>
      <li>This Site does <strong>not</strong> use cookies or third-party analytics.</li>
    </ul>

    <h2 id="use">3) How we use information</h2>
    <ul>
      <li>Operate, maintain, and improve the Site and user experience.</li>
      <li>Respond to inquiries and provide requested information.</li>
      <li>Review and respond to job applications submitted through the Careers page.</li>
      <li>Safeguard the Site, detect/prevent abuse and security incidents.</li>
      <li>Comply with legal, tax, and regulatory obligations.</li>
    </ul>

    <h2 id="legal">4) Legal bases (EU/UK)</h2>
    <p>Where the GDPR/UK GDPR applies, we process data under: <strong>Contract</strong>, <strong>Legitimate Interests</strong> (site operations, security, B2B relationship management balanced with your rights), and <strong>Legal Obligation</strong>.</p>

    <h2 id="cookies">5) Cookies &amp; similar technologies</h2>
    <p>This Site does not use cookies, tracking pixels, or third-party analytics. If we ever introduce optional marketing or analytics cookies, we will present a preferences banner first.</p>

    <h2 id="sharing">6) Sharing your information</h2>
    <p>We do not sell personal information. We share limited data with:</p>
    <ul>
      <li><strong>Service providers (processors):</strong> <strong>Netlify</strong> provides hosting/CDN and processes our contact and job-application form submissions; submission notifications are delivered to our email. These providers are bound to use data only per our instructions.</li>
      <li><strong>Business transfers:</strong> in mergers, acquisitions, or financing.</li>
      <li><strong>Legal/safety:</strong> to comply with law or protect rights, security, and safety.</li>
    </ul>

    <h2 id="transfers">7) International transfers</h2>
    <p>Your information may be processed in countries other than your own. Where required, we use safeguards such as Standard Contractual Clauses or equivalent mechanisms for cross-border transfers.</p>

    <h2 id="retention">8) Data retention</h2>
    <ul>
      <li>Contact &amp; sales inquiries: up to <strong>24 months</strong> after last interaction.</li>
      <li>Job applications: up to <strong>24 months</strong>, unless you ask us to delete them sooner.</li>
      <li>Transaction/tax records (if any): <strong>7 years</strong> or as required by law.</li>
    </ul>

    <h2 id="security">9) Security</h2>
    <p>We employ administrative, technical, and physical safeguards (least-privilege access, encryption in transit, hardened hosting, and monitoring). No method is 100% secure; please use strong passwords and secure your devices.</p>

    <h2 id="rights">10) Your rights</h2>
    <p>Depending on where you live, you may have rights to access, correct, delete, or object to certain processing, and to data portability.</p>
    <ul>
      <li><strong>EEA/UK (GDPR):</strong> access, rectify, erase, restrict, object, portability, and lodge a complaint with your local authority.</li>
      <li><strong>Canada (PIPEDA &amp; provincial laws):</strong> access and correction; you may contact the Office of the Privacy Commissioner of Canada if unresolved.</li>
      <li><strong>California (CPRA):</strong> right to know, delete, correct, and opt out of “sale”/“sharing” of personal information; we do not “sell” personal information as defined.</li>
    </ul>

    <h2 id="children">11) Children’s privacy</h2>
    <p>Our Site is not intended for children under 16, and we do not knowingly collect data from them.</p>

    <h2 id="dnt">12) Do Not Track / GPC</h2>
    <p>We honor the Global Privacy Control (GPC) signal. For more on Do Not Track, visit <a href="https://allaboutdnt.com">https://allaboutdnt.com</a>.</p>

    <h2 id="automated">13) Automated decisions</h2>
    <p>We do not use automated decision-making that has a legal or significant effect on you.</p>

    <h2 id="changes">14) Changes to this policy</h2>
    <p>We may update this policy. The “effective date” at the top indicates the latest revision. We encourage you to review it periodically.</p>

    <h2 id="contact">15) How to contact us</h2>
    <p>For questions about this policy or your data, please contact us at <a href="mailto:privacy@pawadata.com">privacy@pawadata.com</a>.</p>
`;

const policyCss = `
  .policy-content {font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6;color:#111;}
  .policy-content h1{font-size:2rem;margin:0 0 1rem; font-weight: bold;}
  .policy-content h2{font-size:1.25rem;margin:2rem 0 .5rem; font-weight: bold;}
  .policy-content h3{font-size:1rem;margin:1.25rem 0 .5rem; font-weight: bold;}
  .policy-content p,.policy-content li{font-size:1rem}
  .policy-content .meta{color:#555;margin-bottom:1.25rem}
  .policy-content .toc{background:#f6f6f6;border:1px solid #eee;border-radius:8px;padding:12px;margin:16px 0}
  .policy-content a{color:#0a66c2;text-decoration:none}
  .policy-content a:hover{text-decoration:underline}
  .policy-content code{background:#f4f4f4;padding:.1rem .25rem;border-radius:4px}
  .policy-content hr{border:none;border-top:1px solid #eee;margin:2rem 0}
`;

export default function PrivacyPolicy() {
  return (
    <>
      <style>{policyCss}</style>
      <div className="max-w-4xl mx-auto px-5 py-12">
        <div className="policy-content" dangerouslySetInnerHTML={{ __html: policyHtml }} />
      </div>
    </>
  );
}
