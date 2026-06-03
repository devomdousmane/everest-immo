import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Services",
  description: "Vente, achat et gestion locative de biens immobiliers de prestige à Dakar. Estimation gratuite, accompagnement personnalisé par Everest Immo.",
  alternates: { canonical: "https://everest-immo.com/services" },
  openGraph: {
    title: "Services | Everest Immo",
    description: "Vente, achat et gestion locative de biens d'exception à Dakar. Estimation gratuite.",
    url: "https://everest-immo.com/services",
  },
};

const services = [
  {
    num: "01",
    title: "Vente immobilière",
    desc: "Nous assurons la valorisation optimale de votre bien grâce à une évaluation précise du marché, une mise en scène professionnelle (home staging, photographie) et une diffusion ciblée auprès d'une clientèle premium.",
    points: ["Estimation gratuite et sans engagement", "Photographie et visite virtuelle 3D", "Diffusion sur portails premium et réseau off-market", "Accompagnement jusqu'à la signature notariée"],
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "Recherche & Acquisition",
    desc: "Définissez vos critères, nous faisons le reste. Notre réseau exclusif d'off-market vous donne accès à des biens introuvables sur le marché public. Sélection rigoureuse, visites accompagnées, négociation experte.",
    points: ["Analyse précise de vos besoins", "Accès aux biens off-market", "Accompagnement juridique et fiscal", "Négociation au meilleur prix"],
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&auto=format&fit=crop",
  },
  {
    num: "03",
    title: "Gestion locative",
    desc: "Confiez la gestion de votre patrimoine à des experts. Sélection rigoureuse des locataires, suivi des loyers, gestion des travaux et reporting régulier. Votre investissement entre de bonnes mains.",
    points: ["Sélection et vérification des locataires", "Rédaction du bail et états des lieux", "Encaissement et gestion des impayés", "Suivi des travaux et maintenance"],
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">

      {/* Header */}
      <section className="bg-[var(--ink-900)] py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-5">Notre expertise</p>
            <h1 className="font-cinzel font-bold text-[var(--cream)] leading-tight"
              style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}>
              Des services<br />à la hauteur<br />de vos attentes.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      {services.map((s, i) => (
        <section key={s.num}
          className={`py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)] ${i % 2 === 1 ? "bg-[var(--ink-900)]" : "bg-[var(--bg)]"}`}>
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>

              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <ScrollReveal>
                  <span className="font-cinzel text-[var(--gold)]/40 text-5xl font-bold">{s.num}</span>
                  <h2 className="font-cinzel font-semibold mt-4 mb-6 leading-tight"
                    style={{
                      fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
                      color: i % 2 === 1 ? "var(--cream)" : "var(--fg)",
                    }}>
                    {s.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-8 font-light"
                    style={{ color: i % 2 === 1 ? "rgba(250,250,249,0.6)" : "var(--muted)" }}>
                    {s.desc}
                  </p>
                  <ul className="flex flex-col gap-3 mb-10">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm"
                        style={{ color: i % 2 === 1 ? "rgba(250,250,249,0.7)" : "var(--muted)" }}>
                        <span className="text-[var(--gold)] mt-0.5 shrink-0">—</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact"
                    className="inline-flex items-center gap-3 bg-[var(--gold)] text-white text-xs tracking-[0.2em] uppercase px-7 py-4 min-h-[48px] hover:bg-[var(--gold-light)] transition-colors duration-300 cursor-pointer group">
                    Prendre contact
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </ScrollReveal>
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <ScrollReveal delay={0.15} direction={i % 2 === 1 ? "left" : "right"}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={s.img} alt={s.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-900)]/30 to-transparent" />
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[var(--bg)] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-5">Prêt à commencer ?</p>
            <h2 className="font-cinzel font-semibold text-[var(--fg)] leading-tight mb-8"
              style={{ fontSize: "clamp(1.6rem, 4vw, 3rem)" }}>
              Discutons de votre projet.
            </h2>
            <Link href="/contact"
              className="inline-flex items-center gap-3 bg-[var(--ink-900)] text-[var(--cream)] text-xs tracking-[0.2em] uppercase px-10 py-4 min-h-[52px] hover:bg-[var(--gold)] transition-colors duration-300 cursor-pointer group">
              Estimation gratuite
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
