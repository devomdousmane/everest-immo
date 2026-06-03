"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import ScrollReveal from "@/components/ScrollReveal";
import { properties } from "@/lib/properties";
import type { Metadata } from "next";

const types = ["Tous", "Appartement", "Duplex", "Villa", "Penthouse"] as const;
const statuses = ["Tous", "Vente", "Location"] as const;

export default function BiensPage() {
  const [typeFilter, setTypeFilter] = useState<string>("Tous");
  const [statusFilter, setStatusFilter] = useState<string>("Tous");

  const filtered = properties.filter((p) => {
    const matchType = typeFilter === "Tous" || p.type === typeFilter;
    const matchStatus = statusFilter === "Tous" || p.status === statusFilter;
    return matchType && matchStatus;
  });

  return (
    <div className="pt-24">

      {/* Header */}
      <section className="bg-[var(--ink-900)] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[var(--gold)]/20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-5">Catalogue exclusif</p>
            <h1 className="font-cinzel font-bold text-[var(--cream)] leading-tight"
              style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}>
              Nos biens<br />d&apos;exception.
            </h1>
            <p className="text-[var(--cream)]/50 text-sm font-light mt-6 max-w-md leading-relaxed">
              Une sélection rigoureuse de propriétés haut de gamme. Vente et location, dans les quartiers les plus prisés.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filtres */}
      <section className="bg-[var(--bg)] border-b border-[var(--border)] sticky top-[60px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center gap-3">
          <SlidersHorizontal size={14} className="text-[var(--muted)] shrink-0" />

          <div className="flex flex-wrap gap-2">
            {statuses.map((s) => (
              <button key={s} onClick={() => setStatusFilter(s)}
                className={`text-xs tracking-[0.15em] uppercase px-4 py-2 min-h-[36px] border transition-colors duration-200 cursor-pointer ${
                  statusFilter === s
                    ? "border-[var(--gold)] bg-[var(--gold)] text-white"
                    : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
                }`}>
                {s}
              </button>
            ))}
          </div>

          <div className="w-px h-4 bg-[var(--border)] hidden sm:block" />

          <div className="flex flex-wrap gap-2">
            {types.map((t) => (
              <button key={t} onClick={() => setTypeFilter(t)}
                className={`text-xs tracking-[0.15em] uppercase px-4 py-2 min-h-[36px] border transition-colors duration-200 cursor-pointer ${
                  typeFilter === t
                    ? "border-[var(--gold)] text-[var(--gold)]"
                    : "border-transparent text-[var(--muted)] hover:text-[var(--fg)]"
                }`}>
                {t}
              </button>
            ))}
          </div>

          <span className="ml-auto text-[var(--muted)] text-xs">{filtered.length} bien{filtered.length > 1 ? "s" : ""}</span>
        </div>
      </section>

      {/* Grille */}
      <section className="bg-[var(--bg)] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-center py-20 text-[var(--muted)]">
              <p className="font-cinzel text-lg mb-2">Aucun bien trouvé</p>
              <p className="text-sm">Modifiez vos filtres pour voir plus de résultats.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filtered.map((p, i) => <PropertyCard key={p.id} property={p} index={i} />)}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
