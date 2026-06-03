import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "L'Agence",
  description: "Découvrez Everest Immo, agence immobilière haut de gamme à Dakar. Notre histoire, notre équipe et nos valeurs au service de votre projet immobilier.",
  alternates: { canonical: "https://everest-immo.com/agence" },
  openGraph: {
    title: "L'Agence | Everest Immo",
    description: "Agence immobilière de prestige à Dakar depuis plus de 10 ans. Expertise, discrétion et accompagnement sur-mesure.",
    url: "https://everest-immo.com/agence",
  },
};

const team = [
  {
    name: "Alexandre Moreau",
    role: "Fondateur & Directeur",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop&facepad=3&face=1",
    bio: "15 ans d'expérience dans l'immobilier de prestige. Ancien directeur chez Christie's Real Estate France.",
  },
  {
    name: "Isabelle Chen",
    role: "Directrice Commerciale",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop&facepad=3",
    bio: "Spécialiste des marchés Paris intramuros et Neuilly. Trilinguë français, anglais, mandarin.",
  },
  {
    name: "Thomas Laroche",
    role: "Expert Gestion Locative",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop&facepad=3",
    bio: "Gestionnaire certifié, 200+ biens sous gestion. Expert en optimisation de patrimoine locatif.",
  },
];

const values = [
  { title: "Excellence", desc: "Chaque bien, chaque client mérite notre meilleur. Nous ne faisons aucun compromis sur la qualité du service." },
  { title: "Discrétion", desc: "La confidentialité de nos clients est une priorité absolue. Chaque transaction est traitée avec le plus grand soin." },
  { title: "Expertise", desc: "12 ans d'expérience et une connaissance intime des marchés premium pour vous conseiller au mieux." },
  { title: "Réseau", desc: "Un réseau exclusif d'off-market et de partenaires (notaires, architectes, fiscalistes) à votre service." },
];

export default function AgencePage() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="relative bg-[var(--ink-900)] py-24 sm:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=70&auto=format&fit=crop"
            alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-5">Notre histoire</p>
            <h1 className="font-cinzel font-bold text-[var(--cream)] leading-tight"
              style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}>
              L&apos;immobilier<br />comme un art.
            </h1>
            <p className="text-[var(--cream)]/55 text-base font-light mt-6 max-w-xl leading-relaxed">
              Fondée en 2014 à Paris, Everest Immo est née d&apos;une conviction : l&apos;immobilier de prestige mérite une agence à son image — rigoureuse, discrète, ambitieuse.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Histoire */}
      <section className="bg-[var(--bg)] py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-5">Depuis 2014</p>
            <h2 className="font-cinzel font-semibold text-[var(--fg)] leading-tight mb-6"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}>
              12 ans au sommet<br />du marché.
            </h2>
            <div className="space-y-4 text-[var(--muted)] text-sm leading-relaxed font-light">
              <p>Everest Immo a été fondée avec une ambition simple : offrir aux propriétaires et acquéreurs de biens d&apos;exception un service digne de leurs attentes. Loin des agences généralistes, nous nous sommes spécialisés dès le premier jour sur le segment haut de gamme.</p>
              <p>Aujourd&apos;hui, notre équipe de 8 experts accompagne chaque année plus de 50 transactions, pour un volume total de plus de 80 millions d&apos;euros. Notre réputation repose sur trois piliers : la rigueur, la discrétion et la performance.</p>
              <p>Membre de la Fédération Nationale de l&apos;Immobilier et titulaire de la carte professionnelle CPI, Everest Immo opère dans le strict respect de la réglementation et de l&apos;éthique professionnelle.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15} direction="right">
            <div className="relative aspect-square overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80&auto=format&fit=crop"
                alt="Bureaux Everest Immo" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-[var(--ink-900)] py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-14">
            <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-5">Ce qui nous guide</p>
            <h2 className="font-cinzel font-semibold text-[var(--cream)] leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}>
              Nos valeurs.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--gold)]/10">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <div className="bg-[var(--ink-900)] p-8 h-full">
                  <h3 className="font-cinzel text-[var(--gold)] text-base font-medium mb-4">{v.title}</h3>
                  <p className="text-[var(--cream)]/50 text-sm leading-relaxed font-light">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="bg-[var(--bg)] py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-14">
            <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-5">L&apos;équipe</p>
            <h2 className="font-cinzel font-semibold text-[var(--fg)] leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}>
              Des experts à votre service.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.12}>
                <article>
                  <div className="aspect-[3/4] overflow-hidden mb-5 relative">
                    <Image src={member.img} alt={member.name} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <h3 className="font-cinzel text-[var(--fg)] text-base font-medium">{member.name}</h3>
                  <p className="text-[var(--gold)] text-xs tracking-[0.15em] uppercase mt-1 mb-3">{member.role}</p>
                  <p className="text-[var(--muted)] text-sm font-light leading-relaxed">{member.bio}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--ink-900)] py-24 px-4 sm:px-6 lg:px-8 border-t border-[var(--gold)]/20">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-cinzel font-semibold text-[var(--cream)] leading-tight mb-6"
              style={{ fontSize: "clamp(1.6rem, 4vw, 3rem)" }}>
              Travaillons ensemble.
            </h2>
            <Link href="/contact"
              className="inline-flex items-center gap-3 border border-[var(--gold)] text-[var(--gold)] text-xs tracking-[0.2em] uppercase px-10 py-4 min-h-[52px] hover:bg-[var(--gold)] hover:text-[var(--ink)] transition-colors duration-300 cursor-pointer group">
              Nous contacter
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
