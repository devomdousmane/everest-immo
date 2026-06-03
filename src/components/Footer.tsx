import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Share2 } from "lucide-react";

const footerLinks = [
  { label: "Nos Biens", href: "/biens" },
  { label: "Services", href: "/services" },
  { label: "L'Agence", href: "/agence" },
  { label: "Contact", href: "/contact" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "CGU", href: "/cgu" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--ink-900)] border-t border-[var(--gold)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <Image src="/logo-evrest-v2.PNG" alt="Everest Immo" width={280} height={90} className="h-12 sm:h-14 w-auto mb-5" />
            <p className="text-[var(--cream)]/40 text-sm font-light leading-relaxed max-w-xs">
              L&apos;immobilier d&apos;exception, au sommet de vos attentes. Votre partenaire de confiance depuis 12 ans.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { Icon: Share2, href: "#", label: "Instagram" },
                { Icon: Share2, href: "#", label: "LinkedIn" },
                { Icon: Share2, href: "#", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-[var(--gold)]/20 text-[var(--cream)]/40 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300 cursor-pointer">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Liens du footer">
            <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-6">Navigation</p>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="text-[var(--cream)]/50 text-sm hover:text-[var(--gold)] transition-colors duration-200 cursor-pointer">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic">
            <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-6">Contact</p>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="tel:+221776431490"
                  className="flex items-center gap-3 text-[var(--cream)]/50 text-sm hover:text-[var(--gold)] transition-colors duration-200 cursor-pointer">
                  <Phone size={14} className="shrink-0" />
                  +221 77 643 14 90
                </a>
              </li>
              <li>
                <a href="mailto:contact@everest-immo.com"
                  className="flex items-center gap-3 text-[var(--cream)]/50 text-sm hover:text-[var(--gold)] transition-colors duration-200 cursor-pointer">
                  <Mail size={14} className="shrink-0" />
                  contact@everest-immo.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-[var(--cream)]/50 text-sm">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                Malick Sy Médina<br />Dakar, Sénégal
              </li>
            </ul>
          </address>

        </div>

        <div className="border-t border-[var(--gold)]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[var(--cream)]/25 text-xs">© 2026 Everest Immo. Tous droits réservés.</p>
          <p className="text-[var(--cream)]/25 text-xs">
            Site réalisé par{" "}
            <a href="https://vytimo.com" target="_blank" rel="noopener noreferrer"
              className="text-[var(--gold)]/60 hover:text-[var(--gold)] transition-colors duration-200 cursor-pointer">
              Vytimo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
