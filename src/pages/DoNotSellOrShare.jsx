import React from 'react';

const contentHtml = `
    <h1>Do Not Sell or Share My Personal Information (CPRA) / Ne pas vendre/partager mes renseignements (CPRA)</h1>
    <p class="meta"><strong>Effective / Date d’entrée en vigueur:</strong> August 10, 2025<br>
    <strong>Contact:</strong> <a href="mailto:privacy@pawa-data.com">privacy@pawa-data.com</a> • 628 Fleet Street, Suite 2803, Toronto, Ontario, Canada</p>

    <h2 id="en">EN — California Consumer Privacy Rights (CPRA)</h2>
    <p>This page applies only to California residents. PaWa Data Solutions <strong>does not sell</strong> personal information. If activities ever qualify as “selling” or “sharing” (for cross-context behavioral advertising) under the CPRA, you can use the options below to opt out.</p>

    <h3>1) Your rights</h3>
    <ul>
      <li>Opt-out of sale/sharing of personal information.</li>
      <li>Limit use of sensitive personal information (if collected).</li>
      <li>Know, access, correct, delete data, and be free from discrimination for exercising rights.</li>
    </ul>

    <h3>2) How to exercise</h3>
    <ul>
      <li><strong>Cookie Settings / Privacy Preferences:</strong> <a href="#">https://www.pawa-data.com/privacy-preferences</a> (insert your link)</li>
      <li><strong>Global Privacy Control (GPC):</strong> we honor recognized browser opt-out signals.</li>
      <li><strong>Web form:</strong> <a href="#">https://www.pawa-data.com/privacy-request</a> (insert your link)</li>
      <li><strong>Email:</strong> <a href="mailto:privacy@pawa-data.com">privacy@pawa-data.com</a> (subject: “CPRA Request”).</li>
      <li><strong>Authorized agents:</strong> may submit requests with proof of authorization and identity.</li>
    </ul>

    <h3>3) What we collect and disclose (overview)</h3>
    <p>We operate a B2B website and typically collect identifiers (e.g., email, IP), usage data, and business contact details. We do not knowingly sell/share the personal information of consumers under 16.</p>

    <h3>4) Verification &amp; response</h3>
    <p>We may request information to verify your identity and will respond within CPRA timelines.</p>

    <hr>

    <h2 id="fr">FR-CA — Droits des consommateurs californiens (CPRA)</h2>
    <p>Cette page vise uniquement les résidents de Californie. PaWa Data Solutions <strong>ne vend pas</strong> de renseignements personnels. Si certaines activités constituaient une « vente » ou un « partage » (publicité comportementale inter-contextes) selon la CPRA, vous pourrez exercer les options ci-dessous.</p>

    <h3>1) Vos droits</h3>
    <ul>
      <li>Vous opposer à la vente/au partage de renseignements personnels.</li>
      <li>Limiter l’utilisation de renseignements personnels sensibles (s’ils sont collectés).</li>
      <li>Droit de savoir, d’accès, de correction, de suppression; absence de discrimination pour l’exercice de ces droits.</li>
    </ul>

    <h3>2) Comment exercer</h3>
    <ul>
      <li><strong>Paramètres des témoins / Préférences de confidentialité :</strong> <a href="#">https://www.pawa-data.com/privacy-preferences</a> (insérez votre lien)</li>
      <li><strong>Global Privacy Control (GPC) :</strong> signaux reconnus honorés.</li>
      <li><strong>Formulaire Web :</strong> <a href="#">https://www.pawa-data.com/privacy-request</a> (insérez votre lien)</li>
      <li><strong>Courriel :</strong> <a href="mailto:privacy@pawa-data.com">privacy@pawa-data.com</a> (objet : « Demande CPRA »).</li>
      <li><strong>Mandataires autorisés :</strong> avec preuve d’autorisation et d’identité.</li>
    </ul>

    <h3>3) Renseignements traités (aperçu)</h3>
    <p>Site B2B : identifiants (courriel, IP), données d’utilisation et coordonnées professionnelles. Aucune vente/partage connus pour les moins de 16 ans.</p>

    <h3>4) Vérification &amp; réponse</h3>
    <p>Nous pourrions demander des informations pour vérifier votre identité et répondre dans les délais prévus par la CPRA.</p>
`;

const contentCss = `
  .dns-content {font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6;color:#111;}
  .dns-content h1{font-size:2rem;margin:0 0 1rem; font-weight: bold;}
  .dns-content h2{font-size:1.25rem;margin:2rem 0 .5rem; font-weight: bold;}
  .dns-content h3{font-size:1rem;margin:1.25rem 0 .5rem; font-weight: bold;}
  .dns-content p,.dns-content li{font-size:1rem}
  .dns-content .meta{color:#555;margin-bottom:1.25rem}
  .dns-content a{color:#0a66c2;text-decoration:none}
  .dns-content a:hover{text-decoration:underline}
  .dns-content code{background:#f4f4f4;padding:.1rem .25rem;border-radius:4px}
  .dns-content hr{border:none;border-top:1px solid #eee;margin:2rem 0}
`;

export default function DoNotSellOrShare() {
  return (
    <>
      <style>{contentCss}</style>
      <div className="max-w-4xl mx-auto px-5 py-12">
        <div className="dns-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </>
  );
}