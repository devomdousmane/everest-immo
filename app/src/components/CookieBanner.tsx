"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Cookie } from "lucide-react";

type ConsentState = {
  analytics: boolean;
  decided: boolean;
};

const STORAGE_KEY = "everest-cookie-consent";

export function useCookieConsent() {
  const [consent, setConsent] = useState<ConsentState | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try { setConsent(JSON.parse(stored)); } catch { setConsent(null); }
    } else {
      setConsent({ analytics: false, decided: false });
    }
  }, []);

  const save = (analytics: boolean) => {
    const state: ConsentState = { analytics, decided: true };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    setConsent(state);
    if (analytics) enableAnalytics();
  };

  return { consent, save };
}

function enableAnalytics() {
  // Insérer ici l'initialisation de Google Analytics / Plausible / etc.
  // Exemple GA4 :
  // window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
}

export default function CookieBanner() {
  const { consent, save } = useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);

  const visible = consent !== null && !consent.decided;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-label="Gestion des cookies"
          aria-live="polite"
          className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--ink-900)] border-t border-[var(--gold)]/20 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

            {!showDetails ? (
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <Cookie size={20} className="text-[var(--gold)] shrink-0 mt-0.5 sm:mt-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-[var(--cream)] text-sm font-medium mb-1">Nous utilisons des cookies</p>
                  <p className="text-[var(--cream)]/50 text-xs leading-relaxed">
                    Des cookies essentiels assurent le bon fonctionnement du site. Avec votre accord, des cookies analytiques nous aident à l&apos;améliorer.{" "}
                    <Link href="/politique-confidentialite" className="text-[var(--gold)] hover:underline">En savoir plus</Link>
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button onClick={() => setShowDetails(true)}
                    className="text-[var(--cream)]/50 text-xs tracking-[0.15em] uppercase hover:text-[var(--cream)] transition-colors cursor-pointer">
                    Personnaliser
                  </button>
                  <button onClick={() => save(false)}
                    className="border border-[var(--border)] text-[var(--cream)]/70 text-xs tracking-[0.15em] uppercase px-5 py-2.5 hover:border-[var(--cream)]/40 transition-colors cursor-pointer">
                    Refuser
                  </button>
                  <button onClick={() => save(true)}
                    className="bg-[var(--gold)] text-white text-xs tracking-[0.15em] uppercase px-5 py-2.5 hover:bg-[var(--gold-light)] transition-colors cursor-pointer">
                    Tout accepter
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <p className="text-[var(--cream)] text-sm font-medium">Préférences de cookies</p>
                  <button onClick={() => setShowDetails(false)} aria-label="Fermer" className="text-[var(--cream)]/40 hover:text-[var(--cream)] transition-colors cursor-pointer">
                    <X size={16} />
                  </button>
                </div>

                <div className="space-y-3">
                  {/* Essentiels — toujours activés */}
                  <div className="flex items-start justify-between gap-4 border border-[var(--border)] p-4">
                    <div>
                      <p className="text-[var(--cream)] text-xs font-medium mb-1">Cookies essentiels</p>
                      <p className="text-[var(--cream)]/40 text-xs">Indispensables au fonctionnement du site. Ne peuvent pas être désactivés.</p>
                    </div>
                    <span className="shrink-0 text-[var(--gold)] text-xs tracking-[0.1em] uppercase mt-0.5">Toujours actifs</span>
                  </div>

                  {/* Analytiques */}
                  <div className="flex items-start justify-between gap-4 border border-[var(--border)] p-4">
                    <div>
                      <p className="text-[var(--cream)] text-xs font-medium mb-1">Cookies analytiques</p>
                      <p className="text-[var(--cream)]/40 text-xs">Mesurent l&apos;audience et nous aident à améliorer le site. Aucune donnée revendue.</p>
                    </div>
                    <ToggleSwitch id="analytics-toggle" defaultChecked={false} onChange={() => {}} />
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 justify-end">
                  <button onClick={() => save(false)}
                    className="border border-[var(--border)] text-[var(--cream)]/70 text-xs tracking-[0.15em] uppercase px-5 py-2.5 hover:border-[var(--cream)]/40 transition-colors cursor-pointer">
                    Enregistrer mes choix
                  </button>
                  <button onClick={() => save(true)}
                    className="bg-[var(--gold)] text-white text-xs tracking-[0.15em] uppercase px-5 py-2.5 hover:bg-[var(--gold-light)] transition-colors cursor-pointer">
                    Tout accepter
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ToggleSwitch({ id, defaultChecked, onChange }: { id: string; defaultChecked: boolean; onChange: (v: boolean) => void }) {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <button
      id={id}
      role="switch"
      aria-checked={checked}
      onClick={() => { const v = !checked; setChecked(v); onChange(v); }}
      className={`relative shrink-0 w-10 h-5 rounded-full transition-colors duration-300 cursor-pointer focus:outline-none ${checked ? "bg-[var(--gold)]" : "bg-[var(--border)]"}`}>
      <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${checked ? "translate-x-5" : "translate-x-0"}`} />
    </button>
  );
}
