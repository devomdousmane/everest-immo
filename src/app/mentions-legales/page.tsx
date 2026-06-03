import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h1 className="font-cinzel text-[var(--fg)] text-2xl font-semibold mb-10">Mentions légales</h1>
      <div className="space-y-8 text-[var(--muted)] text-sm leading-relaxed">
        <section>
          <h2 className="font-cinzel text-[var(--fg)] text-base font-medium mb-3">Éditeur du site</h2>
          <p>Everest Immo<br />
          Malick Sy Médina, Dakar, Sénégal<br />
          Tél. : +221 77 643 14 90<br />
          Email : contact@everest-immo.com</p>
        </section>
        <section>
          <h2 className="font-cinzel text-[var(--fg)] text-base font-medium mb-3">Hébergement</h2>
          <p>Vercel Inc. — 340 Pine Street, Suite 1200, San Francisco, CA 94104, USA</p>
        </section>
        <section>
          <h2 className="font-cinzel text-[var(--fg)] text-base font-medium mb-3">Propriété intellectuelle</h2>
          <p>L&apos;ensemble des contenus de ce site (textes, images, vidéos, logo) sont protégés par le droit d&apos;auteur et appartiennent à Everest Immo. Toute reproduction sans autorisation est interdite.</p>
        </section>
        <section>
          <h2 className="font-cinzel text-[var(--fg)] text-base font-medium mb-3">Données personnelles</h2>
          <p>Les données collectées via le formulaire de contact sont utilisées uniquement pour traiter votre demande. Vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression. Pour l&apos;exercer : contact@everest-immo.com</p>
        </section>
      </div>
    </div>
  );
}
