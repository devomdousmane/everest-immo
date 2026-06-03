"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

export const timeline = [
  {
    year: "2023",
    title: "Fondation à Dakar",
    desc: "Everest Immo ouvre ses portes à Dakar avec une ambition claire : offrir un service immobilier professionnel, efficace et accessible à tous.",
    image: "/everst-immo/Appartement%20F3%20Corniche%20Ouest%20waterfront/PHOTO-2026-05-16-19-09-41.jpg",
  },
  {
    year: "2023",
    title: "Premiers biens d'exception",
    desc: "Nos premiers biens en vente et location sont mis en ligne — Corniche Ouest, Fann Mermoz, Gibraltar. Une sélection rigoureuse qui pose les bases de notre réputation.",
    image: "/everst-immo/Appartement%20Fann%20mermoz%20F3/PHOTO-2026-05-16-18-52-13.jpg",
  },
  {
    year: "2024",
    title: "Expansion du portefeuille",
    desc: "Notre catalogue s'élargit avec des duplex, appartements F4 et F5 dans les quartiers les plus prisés de Dakar : Sotrac Mermoz, RP Virage, Av. Bourguiba.",
    image: "/everst-immo/Appartement%20F4%20sotrac/PHOTO-2026-05-16-19-51-11.jpg",
  },
  {
    year: "2025",
    title: "Partenariat stratégique",
    desc: "Everest Immo s'associe avec Vytimo, agence nouvelle génération, pour offrir une visibilité maximale à nos biens et accélérer la mise en relation acheteurs/vendeurs.",
    image: "/everst-immo/Appartement%20Gilbraltar%20F4/PHOTO-2026-05-16-18-44-00.jpg",
  },
  {
    year: "2026",
    title: "Au sommet de vos attentes",
    desc: "Aujourd'hui, Everest Immo est votre partenaire de confiance pour vendre, acheter ou louer un bien immobilier au Sénégal — avec la même exigence qu'au premier jour.",
    image: "/everst-immo/Appartement%20Rp%20virage%20F4/PHOTO-2026-05-16-18-48-50.jpg",
  },
];

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const lineScale = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index !== 0 ? "mt-20 sm:mt-28" : ""}`}>
      {/* Image avec parallax */}
      <div className={`relative overflow-hidden aspect-[4/3] ${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
          <Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-900)]/50 to-transparent" />
        <div className="absolute top-4 left-4 bg-[var(--gold)] text-white font-cinzel text-sm font-bold px-4 py-2">
          {item.year}
        </div>
      </div>

      {/* Texte */}
      <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
        <ScrollReveal direction={isEven ? "right" : "left"}>
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              style={{ scaleX: lineScale }}
              className="h-px bg-[var(--gold)] origin-left w-12 shrink-0"
            />
            <span className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase">{item.year}</span>
          </div>
          <h3 className="font-cinzel font-semibold text-[var(--cream)] mb-4 leading-tight"
            style={{ fontSize: "clamp(1.3rem, 3vw, 1.9rem)" }}>
            {item.title}
          </h3>
          <p className="text-[var(--cream)]/55 text-sm leading-relaxed font-light">{item.desc}</p>
        </ScrollReveal>
      </div>

      {/* Connecteur vertical entre items */}
      {index < timeline.length - 1 && (
        <div className="hidden lg:block absolute -bottom-14 left-1/2 -translate-x-1/2 w-px h-14 bg-[var(--gold)]/20" />
      )}
    </div>
  );
}

export default function AgenceTimeline() {
  return (
    <section className="bg-[var(--ink-900)] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="mb-16 text-center">
          <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-5">Notre parcours</p>
          <h2 className="font-cinzel font-semibold text-[var(--cream)] leading-tight"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}>
            De 2023 à aujourd&apos;hui.
          </h2>
        </ScrollReveal>
        <div className="relative">
          {timeline.map((item, i) => (
            <TimelineItem key={item.year + item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
