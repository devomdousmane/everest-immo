import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation",
  description: "Conditions générales d'utilisation du site everest-immo.com — Everest Immo, agence immobilière à Dakar.",
  robots: { index: false },
};

export default function CguPage() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h1 className="font-cinzel text-[var(--fg)] text-2xl font-semibold mb-2">Conditions Générales d&apos;Utilisation</h1>
      <p className="text-[var(--muted)] text-xs mb-10">Dernière mise à jour : juin 2026</p>

      <div className="space-y-8 text-[var(--muted)] text-sm leading-relaxed">

        <section>
          <h2 className="font-cinzel text-[var(--fg)] text-base font-medium mb-3">1. Objet</h2>
          <p>Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;accès et l&apos;utilisation du site <strong className="text-[var(--fg)]">everest-immo.com</strong> édité par Everest Immo, agence immobilière sise Malick Sy Médina, Dakar, Sénégal. En accédant au site, vous acceptez sans réserve les présentes CGU.</p>
        </section>

        <section>
          <h2 className="font-cinzel text-[var(--fg)] text-base font-medium mb-3">2. Accès au site</h2>
          <p>Le site est accessible gratuitement à tout utilisateur disposant d&apos;un accès à Internet. Tous les frais liés à cet accès (matériel, logiciels, connexion) sont à la charge de l&apos;utilisateur. Everest Immo se réserve le droit de suspendre, modifier ou interrompre l&apos;accès au site à tout moment, sans préavis ni indemnité.</p>
        </section>

        <section>
          <h2 className="font-cinzel text-[var(--fg)] text-base font-medium mb-3">3. Contenu du site</h2>
          <p>Les informations publiées sur ce site (annonces, prix, superficies, descriptions) sont fournies à titre indicatif et ne constituent pas un contrat. Everest Immo s&apos;efforce de maintenir ces informations à jour mais ne garantit pas leur exactitude, complétude ou actualité. La disponibilité des biens présentés peut évoluer à tout moment.</p>
        </section>

        <section>
          <h2 className="font-cinzel text-[var(--fg)] text-base font-medium mb-3">4. Propriété intellectuelle</h2>
          <p>L&apos;ensemble des éléments du site (textes, photographies, logos, design, structure) est protégé par le droit de la propriété intellectuelle et appartient à Everest Immo ou à ses partenaires. Toute reproduction, représentation, modification ou exploitation, même partielle, sans autorisation écrite préalable est strictement interdite.</p>
        </section>

        <section>
          <h2 className="font-cinzel text-[var(--fg)] text-base font-medium mb-3">5. Responsabilité</h2>
          <p>Everest Immo ne saurait être tenu responsable des dommages directs ou indirects résultant de l&apos;utilisation du site ou de l&apos;impossibilité d&apos;y accéder, d&apos;une interruption de service, ou de l&apos;utilisation faite des informations qui y figurent. Des liens vers des sites tiers peuvent être présents ; Everest Immo n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.</p>
        </section>

        <section>
          <h2 className="font-cinzel text-[var(--fg)] text-base font-medium mb-3">6. Cookies et données</h2>
          <p>Le site utilise des cookies fonctionnels et analytiques. Vous pouvez gérer vos préférences via le bandeau de consentement affiché lors de votre première visite. Pour plus d&apos;informations, consultez notre <a href="/politique-confidentialite" className="text-[var(--gold)] hover:underline">Politique de Confidentialité</a>.</p>
        </section>

        <section>
          <h2 className="font-cinzel text-[var(--fg)] text-base font-medium mb-3">7. Droit applicable</h2>
          <p>Les présentes CGU sont soumises au droit sénégalais. En cas de litige, et à défaut d&apos;accord amiable, les tribunaux compétents de Dakar seront seuls compétents.</p>
        </section>

        <section>
          <h2 className="font-cinzel text-[var(--fg)] text-base font-medium mb-3">8. Contact</h2>
          <p>Pour toute question relative aux présentes CGU :<br />
          Everest Immo — Malick Sy Médina, Dakar, Sénégal<br />
          Email : <a href="mailto:contact@everest-immo.com" className="text-[var(--gold)] hover:underline">contact@everest-immo.com</a><br />
          Tél. : +221 77 643 14 90</p>
        </section>

      </div>
    </div>
  );
}
