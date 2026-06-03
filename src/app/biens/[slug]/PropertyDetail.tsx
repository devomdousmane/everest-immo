"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, BedDouble, Maximize2, MapPin, CheckCircle2, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { formatPrice } from "@/lib/properties";
import type { Property } from "@/lib/properties";

export default function PropertyDetail({ property }: { property: Property }) {
  const [activeImg, setActiveImg] = useState(0);

  const prev = () => setActiveImg((i) => (i - 1 + property.images.length) % property.images.length);
  const next = () => setActiveImg((i) => (i + 1) % property.images.length);

  return (
    <div className="pt-20">

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link href="/biens"
          className="inline-flex items-center gap-2 text-[var(--muted)] text-xs tracking-[0.15em] uppercase hover:text-[var(--gold)] transition-colors duration-200 cursor-pointer">
          <ArrowLeft size={14} /> Tous les biens
        </Link>
      </div>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={activeImg}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0">
              <Image src={property.images[activeImg]} alt={`${property.title} — photo ${activeImg + 1}`}
                fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" priority={activeImg === 0} />
            </motion.div>
          </AnimatePresence>

          {property.images.length > 1 && (
            <>
              <button onClick={prev} aria-label="Photo précédente"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 glass flex items-center justify-center text-[var(--cream)] hover:text-[var(--gold)] transition-colors cursor-pointer min-h-[44px] min-w-[44px]">
                <ChevronLeft size={20} />
              </button>
              <button onClick={next} aria-label="Photo suivante"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 glass flex items-center justify-center text-[var(--cream)] hover:text-[var(--gold)] transition-colors cursor-pointer min-h-[44px] min-w-[44px]">
                <ChevronRight size={20} />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {property.images.map((_, i) => (
                  <button key={i} onClick={() => setActiveImg(i)} aria-label={`Photo ${i + 1}`}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === activeImg ? "bg-[var(--gold)] w-4" : "bg-white/40"}`} />
                ))}
              </div>
            </>
          )}

          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-[var(--gold)] text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1.5">{property.status}</span>
            <span className="glass text-[var(--cream)] text-[10px] tracking-[0.15em] uppercase px-3 py-1.5">{property.type}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <p className="flex items-center gap-1.5 text-[var(--muted)] text-xs mb-3">
                <MapPin size={12} />{property.location}
              </p>
              <h1 className="font-cinzel font-bold text-[var(--fg)] leading-tight mb-6"
                style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}>
                {property.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-sm text-[var(--muted)] mb-8 pb-8 border-b border-[var(--border)]">
                <span className="flex items-center gap-1.5"><Maximize2 size={14} />{property.area} m²</span>
                <span className="flex items-center gap-1.5"><BedDouble size={14} />{property.bedrooms} chambres</span>
                <span>{property.rooms} pièces</span>
              </div>
              <h2 className="font-cinzel text-base font-medium text-[var(--fg)] mb-4">Description</h2>
              <p className="text-[var(--muted)] text-sm leading-relaxed mb-10">{property.description}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-cinzel text-base font-medium text-[var(--fg)] mb-5">Prestations</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-[var(--muted)]">
                    <CheckCircle2 size={14} className="text-[var(--gold)] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ScrollReveal delay={0.2} direction="right">
              <div className="lg:sticky lg:top-24 border border-[var(--border)] p-6 sm:p-8">
                <p className="font-cinzel gold-text font-bold mb-1"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                  {formatPrice(property.price, property.status)}
                </p>
                {property.status === "Location" && (
                  <p className="text-[var(--muted)] text-xs mb-6">Charges non comprises</p>
                )}
                <div className="w-full h-px bg-[var(--border)] my-6" />
                <p className="text-[var(--muted)] text-xs mb-8 leading-relaxed">
                  Intéressé par ce bien ? Contactez notre équipe pour organiser une visite ou obtenir plus d&apos;informations.
                </p>
                <div className="flex flex-col gap-3">
                  <Link href="/contact"
                    className="w-full flex items-center justify-center gap-2 bg-[var(--gold)] text-white text-xs tracking-[0.2em] uppercase py-4 min-h-[52px] hover:bg-[var(--gold-light)] transition-colors duration-300 cursor-pointer">
                    Demander une visite
                  </Link>
                  <a href="tel:+221776431490"
                    className="w-full flex items-center justify-center gap-2 border border-[var(--border)] text-[var(--fg)] text-xs tracking-[0.2em] uppercase py-4 min-h-[52px] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors duration-300 cursor-pointer">
                    <Phone size={14} /> +221 77 643 14 90
                  </a>
                </div>
                <p className="text-[var(--muted)] text-[11px] text-center mt-5">
                  Honoraires à la charge de l&apos;acquéreur
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>
    </div>
  );
}
