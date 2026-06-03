import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de confidentialité et de protection des données personnelles — Everest Immo, Dakar.",
  robots: { index: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h1 className="font-cinzel text-[var(--fg)] text-2xl font-semibold mb-2">Politique de Confidentialité</h1>
      <p className="text-[var(--muted)] text-xs mb-10">Dernière mise à jour : juin 2026</p>

      <div className="space-y-8 text-[var(--muted)] text-sm leading-relaxed">

        <section>
          <h2 className="font-cinzel text-[var(--fg)] text-base font-medium mb-3">1. Responsable du traitement</h2>
          <p>
            <strong className="text-[var(--fg)]">Everest Immo</strong><br />
            Malick Sy Médina, Dakar, Sénégal<br />
            Email : <a href="mailto:contact@everest-immo.com" className="text-[var(--gold)] hover:underline">contact@everest-immo.com</a><br />
            Tél. : +221 77 643 14 90
          </p>
        </section>

        <section>
          <h2 className="font-cinzel text-[var(--fg)] text-base font-medium mb-3">2. Données collectées</h2>
          <p className="mb-3">Nous collectons les données suivantes uniquement lorsque vous remplissez le formulaire de contact :</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone (facultatif)</li>
            <li>Contenu du message</li>
          </ul>
          <p className="mt-3">Aucune donnée n&apos;est collectée automatiquement à des fins publicitaires sans votre consentement explicite.</p>
        </section>

        <section>
          <h2 className="font-cinzel text-[var(--fg)] text-base font-medium mb-3">3. Finalités du traitement</h2>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Répondre à vos demandes de contact ou de visite</li>
            <li>Vous envoyer une confirmation de réception de votre message</li>
            <li>Améliorer nos services (données agrégées anonymisées)</li>
          </ul>
        </section>

        <section>
          <h2 className="font-cinzel text-[var(--fg)] text-base font-medium mb-3">4. Base légale</h2>
          <p>Le traitement de vos données repose sur votre consentement explicite (formulaire de contact) et l&apos;intérêt légitime d&apos;Everest Immo à répondre à vos sollicitations professionnelles.</p>
        </section>

        <section>
          <h2 className="font-cinzel text-[var(--fg)] text-base font-medium mb-3">5. Durée de conservation</h2>
          <p>Vos données sont conservées pendant une durée maximale de <strong className="text-[var(--fg)]">3 ans</strong> à compter de notre dernier échange, puis supprimées ou anonymisées.</p>
        </section>

        <section>
          <h2 className="font-cinzel text-[var(--fg)] text-base font-medium mb-3">6. Cookies</h2>
          <p className="mb-3">Notre site utilise les types de cookies suivants :</p>
          <div className="space-y-3">
            <div className="border border-[var(--border)] p-4">
              <p className="font-medium text-[var(--fg)] mb-1">Cookies essentiels</p>
              <p>Indispensables au fonctionnement du site (préférences de thème, session). Ne peuvent pas être désactivés.</p>
            </div>
            <div className="border border-[var(--border)] p-4">
              <p className="font-medium text-[var(--fg)] mb-1">Cookies analytiques</p>
              <p>Nous permettent de mesurer l&apos;audience et d&apos;améliorer le site (ex. Google Analytics). Activés uniquement avec votre consentement.</p>
            </div>
          </div>
          <p className="mt-3">Vous pouvez modifier vos préférences à tout moment via le lien <em>Gérer les cookies</em> en bas de page.</p>
        </section>

        <section>
          <h2 className="font-cinzel text-[var(--fg)] text-base font-medium mb-3">7. Partage des données</h2>
          <p>Vos données ne sont jamais vendues ni cédées à des tiers. Elles peuvent être transmises à nos sous-traitants techniques (hébergeur Vercel/Netlify, service d&apos;envoi d&apos;email Resend) dans le strict cadre de la fourniture du service, soumis à des engagements de confidentialité.</p>
        </section>

        <section>
          <h2 className="font-cinzel text-[var(--fg)] text-base font-medium mb-3">8. Vos droits</h2>
          <p className="mb-3">Conformément à la réglementation applicable, vous disposez des droits suivants sur vos données :</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Droit d&apos;accès</li>
            <li>Droit de rectification</li>
            <li>Droit à l&apos;effacement (&laquo; droit à l&apos;oubli &raquo;)</li>
            <li>Droit d&apos;opposition au traitement</li>
            <li>Droit à la portabilité</li>
          </ul>
          <p className="mt-3">Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@everest-immo.com" className="text-[var(--gold)] hover:underline">contact@everest-immo.com</a></p>
        </section>

        <section>
          <h2 className="font-cinzel text-[var(--fg)] text-base font-medium mb-3">9. Sécurité</h2>
          <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou altération.</p>
        </section>

      </div>
    </div>
  );
}
