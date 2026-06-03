"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MoveDown, MapPin, Maximize2, BedDouble } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PropertyCard from "@/components/PropertyCard";
import { properties, formatPrice } from "@/lib/properties";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "500+", label: "Biens vendus" },
  { value: "98%", label: "Clients satisfaits" },
  { value: "12", label: "Années d'expertise" },
  { value: "48h", label: "Délai de réponse" },
];

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: "Vente",
    desc: "Valorisation optimale, mise en marché premium, accompagnement jusqu'à la signature.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    title: "Recherche",
    desc: "Accès aux biens off-market, sélection rigoureuse selon vos critères précis.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>
      </svg>
    ),
    title: "Gestion",
    desc: "Gestion locative complète et sereine : locataires, suivi administratif, quittances.",
  },
];

const testimonials = [
  {
    text: "Everest Immo a vendu notre appartement en moins de trois semaines, au prix demandé. Une équipe professionnelle et à l'écoute. Je recommande sans hésitation.",
    name: "Sophie L.",
    role: "Propriétaire vendeuse",
    initials: "SL",
  },
  {
    text: "Grâce à leur réseau off-market, j'ai trouvé le bien idéal que je cherchais depuis des mois. Une expérience client irréprochable du début à la fin.",
    name: "Marc R.",
    role: "Acquéreur",
    initials: "MR",
  },
];

const categories = [
  {
    label: "Appartements",
    type: "Appartement",
    desc: "Du F3 au F5, dans les quartiers les plus prisés de Dakar",
    image: "/everst-immo/Appartement%20F3%20Corniche%20Ouest%20waterfront/PHOTO-2026-05-16-19-09-40.jpg",
  },
  {
    label: "Duplex",
    type: "Duplex",
    desc: "Des adresses d'exception sur deux niveaux, avec vue mer",
    image: "/everst-immo/Appartement%20Av%20bourguiba%20F4/PHOTO-2026-05-16-18-38-26.jpg",
  },
  {
    label: "Vente",
    type: "Vente",
    isStatus: true,
    desc: "Investissez dans les quartiers les plus recherchés",
    image: "/everst-immo/Appartement%20Gilbraltar%20F4/PHOTO-2026-05-16-18-44-00.jpg",
  },
  {
    label: "Location",
    type: "Location",
    isStatus: true,
    desc: "Des biens de standing pour une location haut de gamme",
    image: "/everst-immo/Appartement%20Fann%20mermoz%20F3/PHOTO-2026-05-16-18-52-13.jpg",
  },
];

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      </motion.div>
    </div>
  );
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 600], [0, -120]);
  const bgY = useTransform(scrollY, [0, 600], [0, 80]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax GSAP sur les sections .gsap-parallax
      gsap.utils.toArray<HTMLElement>(".gsap-parallax").forEach((el) => {
        const bg = el.querySelector<HTMLElement>(".parallax-bg");
        if (!bg) return;
        gsap.to(bg, {
          yPercent: 25,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      // Ligne dorée animée au scroll
      gsap.utils.toArray<HTMLElement>(".gold-line").forEach((el) => {
        gsap.fromTo(el, { scaleX: 0 }, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 80%", end: "top 30%", scrub: true },
        });
      });

      // Stats compteur
      gsap.utils.toArray<HTMLElement>(".stat-number").forEach((el) => {
        ScrollTrigger.create({
          trigger: el, start: "top 85%", once: true,
          onEnter: () => gsap.from(el, { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }),
        });
      });

      // Cartes catégories : entrée en cascade
      gsap.utils.toArray<HTMLElement>(".cat-card").forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: i * 0.1,
            scrollTrigger: { trigger: el, start: "top 95%", once: true } }
        );
      });

      // Bien spotlight : texte glisse depuis la gauche
      gsap.utils.toArray<HTMLElement>(".spotlight-text").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 75%", once: true } }
        );
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const featured = properties.filter((p) => p.featured);
  const spotlight = properties[1]; // Corniche Ouest waterfront

  return (
    <div ref={heroRef}>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
          <Image
            src="/everst-immo/Appartement%20F3%20Corniche%20Ouest%20waterfront/PHOTO-2026-05-16-19-09-41.jpg"
            alt="Bien immobilier d'exception à Dakar"
            fill priority sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[var(--ink-900)]/40 via-[var(--ink-900)]/60 to-[var(--ink-900)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent z-20" />

        <motion.div style={{ y: titleY, opacity: heroOpacity }}
          className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-28 pt-24 sm:pt-36">
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
            className="text-[var(--gold-light)] text-xs tracking-[0.35em] uppercase mb-6">
            Agence immobilière d&apos;exception · Dakar
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-cinzel font-bold text-[var(--cream)] leading-[1.03] mb-8"
            style={{ fontSize: "clamp(1.8rem, 5vw, 5rem)", letterSpacing: "-0.02em" }}>
            Votre bien,<br />
            <span className="gold-text">notre sommet.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }}
            className="text-[var(--cream)]/65 text-base sm:text-lg font-light max-w-lg mb-10 leading-relaxed">
            Everest Immo accompagne chaque projet avec rigueur, discrétion et l&apos;ambition d&apos;atteindre le sommet de vos attentes.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4">
            <Link href="/biens"
              className="inline-flex items-center justify-center gap-3 bg-[var(--gold)] text-white text-xs tracking-[0.2em] uppercase px-8 py-4 min-h-[52px] hover:bg-[var(--gold-light)] transition-colors duration-300 cursor-pointer group">
              Découvrir nos biens
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-3 border border-[var(--cream)]/25 text-[var(--cream)] text-xs tracking-[0.2em] uppercase px-8 py-4 min-h-[52px] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors duration-300 cursor-pointer">
              Estimation gratuite
            </Link>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <MoveDown size={18} className="text-[var(--gold)]/60" />
          </motion.div>
        </motion.div>
      </section>


      {/* ── CATÉGORIES ── */}
      <section className="bg-[var(--ink-900)] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-4">Explorer par catégorie</p>
              <h2 className="font-cinzel font-semibold text-[var(--cream)] leading-tight"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}>
                Trouvez le bien<br />qui vous correspond.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href={`/biens`}
                className="cat-card group relative overflow-hidden aspect-[4/3] sm:aspect-[3/4] block cursor-pointer w-full">
                {/* Image avec parallax framer-motion */}
                <ParallaxImage src={cat.image} alt={cat.label} />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-900)] via-[var(--ink-900)]/40 to-transparent z-10 group-hover:via-[var(--ink-900)]/20 transition-all duration-500" />
                {/* Ligne or animée */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--gold)] z-20 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                {/* Contenu */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                  <p className="text-[var(--gold)] text-[10px] tracking-[0.3em] uppercase mb-2">Catégorie</p>
                  <h3 className="font-cinzel text-[var(--cream)] text-xl font-semibold mb-2 group-hover:text-[var(--gold)] transition-colors duration-300">
                    {cat.label}
                  </h3>
                  <p className="text-[var(--cream)]/50 text-xs leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500">
                    {cat.desc}
                  </p>
                  <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[var(--gold)] text-xs tracking-[0.15em] uppercase">Explorer</span>
                    <ArrowRight size={12} className="text-[var(--gold)]" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ── SERVICES ── */}
      <section className="bg-[var(--bg)] py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-16 text-center sm:text-left">
            <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-4">Ce que nous faisons</p>
            <h2 className="font-cinzel font-semibold text-[var(--fg)] leading-tight"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}>
              Un accompagnement<br />à la hauteur de vos ambitions.
            </h2>
          </ScrollReveal>
          <div className="border border-[var(--border)] divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)] sm:grid sm:grid-cols-3">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <div className="bg-[var(--bg)] p-8 sm:p-10 group cursor-pointer flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="w-10 h-10 flex items-center justify-center border border-[var(--border)] text-[var(--gold)] group-hover:border-[var(--gold)] transition-colors duration-300 mb-6">
                    {s.icon}
                  </div>
                  <h3 className="font-cinzel text-lg font-medium text-[var(--fg)] mb-3 group-hover:text-[var(--gold)] transition-colors duration-300">{s.title}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed font-light">{s.desc}</p>
                  <div className="mt-6 w-6 h-px bg-[var(--gold)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* ── SPOTLIGHT BIEN (plein écran parallax) ── */}
      <section className="gsap-parallax relative min-h-[500px] h-[85vh] overflow-hidden flex items-end">
        <div className="parallax-bg absolute inset-0 z-0">
          <Image
            src="/everst-immo/Appartement%20F3%20Corniche%20Ouest%20waterfront/PHOTO-2026-05-16-19-09-42.jpg"
            alt={spotlight.title}
            fill sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--ink-900)] via-[var(--ink-900)]/30 to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[var(--ink-900)]/80 to-transparent" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16 md:pb-24 w-full">
          <div className="spotlight-text max-w-xl">
            <p className="text-[var(--gold)] text-[10px] tracking-[0.35em] uppercase mb-4">Bien en vedette</p>
            <div className="gold-line w-12 h-px bg-[var(--gold)] mb-6 origin-left" />
            <h2 className="font-cinzel font-bold text-[var(--cream)] leading-tight mb-4"
              style={{ fontSize: "clamp(1.6rem, 4vw, 3rem)" }}>
              {spotlight.title}
            </h2>
            <div className="flex flex-wrap gap-5 text-[var(--cream)]/60 text-xs mb-6">
              <span className="flex items-center gap-1.5"><MapPin size={12} />{spotlight.location}</span>
              <span className="flex items-center gap-1.5"><Maximize2 size={12} />{spotlight.area} m²</span>
              <span className="flex items-center gap-1.5"><BedDouble size={12} />{spotlight.bedrooms} chambres</span>
            </div>
            <p className="text-[var(--cream)]/50 text-sm leading-relaxed mb-8 max-w-md font-light">
              {spotlight.description.slice(0, 120)}…
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-cinzel gold-text font-bold" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
                {formatPrice(spotlight.price, spotlight.status)}
              </span>
              <Link href={`/biens/${spotlight.slug}`}
                className="inline-flex items-center gap-2 border border-[var(--gold)] text-[var(--gold)] text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-[var(--gold)] hover:text-white transition-all duration-300 cursor-pointer group">
                Voir le bien
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ── BIENS FEATURED (parallax) ── */}
      <section className="gsap-parallax relative bg-[var(--ink-900)] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="parallax-bg absolute inset-0 z-0 opacity-8">
          <Image
            src="/everst-immo/Appartement%20Rp%20virage%20F4/PHOTO-2026-05-16-18-48-50.jpg"
            alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" />
        </div>
        <div className="absolute inset-0 z-0 bg-[var(--ink-900)]/80" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <ScrollReveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-4">Sélection exclusive</p>
              <h2 className="font-cinzel font-semibold text-[var(--cream)] leading-tight"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}>
                Nos biens<br />d&apos;exception.
              </h2>
            </div>
            <Link href="/biens"
              className="self-start text-[var(--gold)] text-xs tracking-[0.2em] uppercase border-b border-[var(--gold)] pb-1 hover:text-[var(--gold-light)] transition-colors duration-300 cursor-pointer whitespace-nowrap">
              Voir tout le catalogue
            </Link>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p, i) => <PropertyCard key={p.id} property={p} index={i} />)}
          </div>
        </div>
      </section>


      {/* ── BANDE PARALLAX IMAGE IMMERSIVE ── */}
      <section className="gsap-parallax relative h-[50vh] overflow-hidden">
        <div className="parallax-bg absolute inset-0 z-0">
          <Image
            src="/everst-immo/Appartement%20F4%20sotrac/PHOTO-2026-05-16-19-51-11.jpg"
            alt="Immobilier de prestige Dakar"
            fill sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-[var(--ink-900)]/60" />
        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
          <ScrollReveal>
            <p className="text-[var(--cream)]/40 text-xs tracking-[0.4em] uppercase mb-4">Sotrac Mermoz · Dakar</p>
            <p className="font-cinzel text-[var(--cream)] font-light italic"
              style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)" }}>
              &ldquo;L&apos;immobilier d&apos;exception demande<br />une agence d&apos;exception.&rdquo;
            </p>
            <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mt-4">— Everest Immo</p>
          </ScrollReveal>
        </div>
      </section>


      {/* ── STATS ── */}
      <section className="bg-[var(--bg)] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 border border-[var(--border)] divide-x divide-y divide-[var(--border)]">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.08}>
                <div className="bg-[var(--bg)] px-4 py-8 sm:px-8 sm:py-12 text-center">
                  <p className="stat-number font-cinzel gold-text font-bold mb-2"
                    style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>{s.value}</p>
                  <p className="text-[var(--muted)] text-xs tracking-[0.25em] uppercase font-light">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* ── GRILLE IMMERSIVE 3 BIENS EN PARALLAX ── */}
      <section className="bg-[var(--ink-900)] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-14 text-center">
            <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-4">Quartiers d'exception</p>
            <h2 className="font-cinzel font-semibold text-[var(--cream)] leading-tight"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}>
              Dakar sous un autre angle.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-[480px]">
            {[properties[0], properties[2], properties[4]].map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 0.15} className="h-full">
                <Link href={`/biens/${p.slug}`}
                  className="group relative overflow-hidden block cursor-pointer h-64 md:h-full">
                  <ParallaxImage src={p.image} alt={p.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-900)]/90 via-transparent to-transparent z-10 group-hover:from-[var(--ink-900)] transition-all duration-500" />
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                    <span className="text-[var(--gold)] text-[10px] tracking-[0.25em] uppercase mb-2">{p.type} · {p.status}</span>
                    <h3 className="font-cinzel text-[var(--cream)] text-base font-semibold mb-1 group-hover:text-[var(--gold)] transition-colors duration-300">{p.title}</h3>
                    <p className="flex items-center gap-1 text-[var(--cream)]/50 text-xs mb-3"><MapPin size={10} />{p.location}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--cream)] text-sm font-medium">{formatPrice(p.price, p.status)}</span>
                      <span className="w-7 h-7 border border-[var(--gold)]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight size={12} className="text-[var(--gold)]" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* ── TÉMOIGNAGES (parallax) ── */}
      <section className="gsap-parallax relative bg-[var(--ink-900)] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-[var(--gold)]/10">
        <div className="parallax-bg absolute inset-0 z-0 opacity-5">
          <Image
            src="/everst-immo/Appartement%20Gilbraltar%20F4/PHOTO-2026-05-16-18-44-01.jpg"
            alt="" fill sizes="100vw" className="object-cover" aria-hidden="true" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <ScrollReveal className="mb-14">
            <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-4">Ils nous font confiance</p>
            <h2 className="font-cinzel font-semibold text-[var(--cream)] leading-tight"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}>
              La parole de nos clients.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.15}>
                <blockquote className="glass p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-5" aria-label="5 étoiles sur 5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} className="w-3.5 h-3.5 text-[var(--gold)] fill-current" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-[var(--cream)]/75 text-sm leading-relaxed font-light flex-1 mb-6">&ldquo;{t.text}&rdquo;</p>
                  <footer className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--gold)]/15 border border-[var(--gold)]/25 flex items-center justify-center">
                      <span className="font-cinzel text-[var(--gold)] text-xs">{t.initials}</span>
                    </div>
                    <div>
                      <p className="text-[var(--cream)] text-sm font-medium">{t.name}</p>
                      <p className="text-[var(--cream)]/40 text-xs">{t.role}</p>
                    </div>
                  </footer>
                </blockquote>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* ── CTA FINAL ── */}
      <section className="bg-[var(--bg)] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-6">Commençons ensemble</p>
            <h2 className="font-cinzel font-semibold text-[var(--fg)] leading-tight mb-8"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}>
              Votre prochaine étape<br />commence ici.
            </h2>
            <p className="text-[var(--muted)] text-sm leading-relaxed mb-10 max-w-md mx-auto">
              Estimation gratuite, mise en vente ou recherche de bien. Prenez contact et nous vous répondrons sous 48h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[var(--ink-900)] text-[var(--cream)] text-xs tracking-[0.2em] uppercase px-10 py-4 min-h-[52px] hover:bg-[var(--gold)] transition-colors duration-300 cursor-pointer group">
                Nous contacter
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link href="/biens"
                className="inline-flex items-center justify-center border border-[var(--border)] text-[var(--fg)] text-xs tracking-[0.2em] uppercase px-10 py-4 min-h-[52px] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors duration-300 cursor-pointer">
                Voir les biens
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
