import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "L'Agence",
  description: "Découvrez Everest Immo, agence immobilière professionnelle à Dakar, Sénégal. Expertise locale, accompagnement personnalisé pour vos projets immobiliers.",
  alternates: { canonical: "https://everest-immo.com/agence" },
  openGraph: {
    title: "L'Agence | Everest Immo",
    description: "Agence immobilière à Dakar depuis 2023. Expérience, efficacité et professionnalisme au service de votre projet immobilier au Sénégal.",
    url: "https://everest-immo.com/agence",
  },
};

const partners = [
  {
    name: "Vytimo · Listing",
    role: "Partenaire stratégique",
    desc: "Vytimo est une agence immobilière nouvelle génération : vente, location, achat et mise en relation de biens. Elle accompagne également les professionnels avec la création de sites sur mesure et des agents IA immobiliers.",
    logo: "/Listing-logo.svg",
    href: "https://vytimo.com",
  },
];

const values = [
  { title: "Expérience", desc: "Forts de plusieurs années dans le domaine immobilier sénégalais, nous maîtrisons chaque étape de votre projet." },
  { title: "Efficacité", desc: "Des processus clairs et rapides pour concrétiser votre projet sans tracas, dans les meilleurs délais." },
  { title: "Professionnalisme", desc: "Une équipe dédiée, disponible et compétente qui place vos intérêts au cœur de chaque transaction." },
  { title: "Expertise locale", desc: "Une connaissance approfondie du marché immobilier sénégalais pour vous guider vers les meilleures opportunités." },
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
            <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-5">Qui sommes-nous</p>
            <h1 className="font-cinzel font-bold text-[var(--cream)] leading-tight"
              style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}>
              Expérience,<br />efficacité et<br />professionnalisme.
            </h1>
            <p className="text-[var(--cream)]/55 text-base font-light mt-6 max-w-xl leading-relaxed">
              Bienvenue chez Everest Immobilier — une équipe de professionnels expérimentés, basée à Dakar, dédiée à vous accompagner dans chaque étape de votre projet immobilier au Sénégal.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Histoire */}
      <section className="bg-[var(--bg)] py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-5">Depuis 2023</p>
            <h2 className="font-cinzel font-semibold text-[var(--fg)] leading-tight mb-6"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}>
              Notre seul but :<br />la réussite de votre projet.
            </h2>
            <div className="space-y-4 text-[var(--muted)] text-sm leading-relaxed font-light">
              <p>Fondée en 2023 à Dakar, Everest Immo est née d&apos;une conviction forte : l&apos;immobilier sénégalais mérite une agence à son image — rigoureuse, disponible et véritablement à l&apos;écoute de ses clients.</p>
              <p>Que vous cherchiez la maison de vos rêves, souhaitiez vendre votre propriété actuelle ou investir dans le marché immobilier local, nos agents possèdent une parfaite connaissance du secteur immobilier sénégalais et sauront vous guider pour assurer un processus sans tracas et une issue heureuse à votre projet.</p>
              <p>Notre agence réunit toutes les conditions de fiabilité garantissant le succès de votre projet immobilier — des maisons de départ confortables aux résidences luxueuses, en passant par les biens locatifs à court ou long terme.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15} direction="right">
            <div className="relative aspect-square overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80&auto=format&fit=crop"
                alt="Bureaux Everest Immo Dakar" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-[var(--ink-900)] py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-14">
            <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-5">Ce qui nous définit</p>
            <h2 className="font-cinzel font-semibold text-[var(--cream)] leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}>
              Nos valeurs.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[var(--gold)]/10 divide-y divide-x divide-[var(--gold)]/10">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <div className="bg-[var(--ink-900)] p-8">
                  <h3 className="font-cinzel text-[var(--gold)] text-base font-medium mb-4">{v.title}</h3>
                  <p className="text-[var(--cream)]/50 text-sm leading-relaxed font-light">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="bg-[var(--bg)] py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-14">
            <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-5">Ils nous accompagnent</p>
            <h2 className="font-cinzel font-semibold text-[var(--fg)] leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}>
              Nos partenaires.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 0.12}>
                <a href={p.href} target="_blank" rel="noopener noreferrer"
                  className="group block border border-[var(--border)] p-8 hover:border-[var(--gold)]/50 transition-all duration-300 cursor-pointer">
                  <div className="h-16 flex items-center mb-6">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      width={180}
                      height={64}
                      className="h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <p className="text-[var(--gold)] text-[10px] tracking-[0.25em] uppercase mb-2">{p.role}</p>
                  <p className="text-[var(--muted)] text-sm font-light leading-relaxed">{p.desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-[var(--gold)] text-xs tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Visiter</span>
                    <ArrowRight size={12} />
                  </div>
                </a>
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
            <p className="text-[var(--cream)]/50 text-sm font-light mb-8 max-w-md mx-auto leading-relaxed">
              Venez découvrir nos différentes offres de services qui sauront satisfaire tous vos besoins immobiliers.
            </p>
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
