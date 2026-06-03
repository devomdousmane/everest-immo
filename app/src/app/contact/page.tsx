"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, AlertCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const subjects = [
  "Estimation gratuite",
  "Vendre un bien",
  "Acheter un bien",
  "Gestion locative",
  "Autre demande",
];

const infos = [
  { icon: Phone, label: "Téléphone", value: "+221 77 643 14 90", href: "tel:+221776431490" },
  { icon: Mail, label: "Email", value: "contact@everest-immo.com", href: "mailto:contact@everest-immo.com" },
  { icon: MapPin, label: "Adresse", value: "Malick Sy Médina\nDakar, Sénégal", href: null },
  { icon: Clock, label: "Horaires", value: "Lun–Ven : 9h–19h\nSam : 10h–17h", href: null },
];

type FormState = {
  nom: string;
  email: string;
  telephone: string;
  sujet: string;
  message: string;
};

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>({
    nom: "", email: "", telephone: "", sujet: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur lors de l'envoi.");
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full px-4 py-3.5 min-h-[52px] bg-transparent border border-[var(--border)] text-[var(--fg)] text-sm placeholder:text-[var(--muted)]/50 focus:border-[var(--gold)] focus:outline-none transition-colors duration-200";

  return (
    <div className="pt-20">

      {/* Header */}
      <section className="bg-[var(--ink-900)] py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-5">Parlons de votre projet</p>
            <h1 className="font-cinzel font-bold text-[var(--cream)] leading-tight"
              style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}>
              Votre prochaine<br />étape commence ici.
            </h1>
            <p className="text-[var(--cream)]/50 text-sm font-light mt-6 max-w-md leading-relaxed">
              Estimation gratuite, mise en vente ou recherche de bien — prenez contact et nous vous répondrons sous 48h.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[var(--bg)] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-start gap-4 py-16 border border-[var(--gold)]/30 px-10">
                  <div className="w-10 h-10 bg-[var(--gold)] flex items-center justify-center">
                    <Send size={18} className="text-white" />
                  </div>
                  <h2 className="font-cinzel text-[var(--fg)] text-xl font-medium">Message envoyé !</h2>
                  <p className="text-[var(--muted)] text-sm leading-relaxed max-w-sm">
                    Merci pour votre message. Un email de confirmation vous a été envoyé. Notre équipe vous contactera sous 48h ouvrées.
                  </p>
                  <button onClick={() => { setSent(false); setForm({ nom: "", email: "", telephone: "", sujet: "", message: "" }); }}
                    className="mt-4 text-[var(--gold)] text-xs tracking-[0.2em] uppercase border-b border-[var(--gold)] pb-0.5 cursor-pointer hover:text-[var(--gold-light)] transition-colors">
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Formulaire de contact" className="flex flex-col gap-5">

                  {error && (
                    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3 border border-red-400/40 bg-red-500/10 text-red-400 text-sm px-4 py-3">
                      <AlertCircle size={16} className="shrink-0 mt-0.5" />
                      {error}
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="nom" className="block text-xs tracking-[0.2em] uppercase text-[var(--muted)] mb-2">Nom *</label>
                      <input id="nom" name="nom" type="text" required autoComplete="name"
                        value={form.nom} onChange={handleChange}
                        placeholder="Jean Dupont" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs tracking-[0.2em] uppercase text-[var(--muted)] mb-2">Email *</label>
                      <input id="email" name="email" type="email" required autoComplete="email"
                        value={form.email} onChange={handleChange}
                        placeholder="jean@exemple.fr" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="telephone" className="block text-xs tracking-[0.2em] uppercase text-[var(--muted)] mb-2">Téléphone</label>
                    <input id="telephone" name="telephone" type="tel" autoComplete="tel"
                      value={form.telephone} onChange={handleChange}
                      placeholder="+33 6 00 00 00 00" className={inputClass} />
                  </div>

                  <div>
                    <label htmlFor="sujet" className="block text-xs tracking-[0.2em] uppercase text-[var(--muted)] mb-2">Sujet *</label>
                    <select id="sujet" name="sujet" required
                      value={form.sujet} onChange={handleChange}
                      className={`${inputClass} bg-[var(--bg)] cursor-pointer appearance-none`}>
                      <option value="">Choisissez un sujet</option>
                      {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs tracking-[0.2em] uppercase text-[var(--muted)] mb-2">Message *</label>
                    <textarea id="message" name="message" rows={5} required
                      value={form.message} onChange={handleChange}
                      placeholder="Décrivez votre projet en quelques mots..."
                      className={`${inputClass} min-h-0 resize-none`} />
                  </div>

                  <button type="submit" disabled={loading}
                    className="self-start inline-flex items-center gap-3 bg-[var(--ink-900)] text-[var(--cream)] text-xs tracking-[0.2em] uppercase px-10 py-4 min-h-[52px] hover:bg-[var(--gold)] transition-colors duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed group">
                    {loading ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Envoi en cours…
                      </>
                    ) : (
                      <>
                        Envoyer ma demande
                        <Send size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>

                  <p className="text-[var(--muted)] text-xs">* Champs obligatoires</p>
                </form>
              )}
            </ScrollReveal>
          </div>

          {/* Infos */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.15} direction="right">
              <div className="flex flex-col gap-8">
                {infos.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-5">
                    <div className="w-10 h-10 border border-[var(--border)] flex items-center justify-center text-[var(--gold)] shrink-0">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-[var(--muted)] text-[10px] tracking-[0.25em] uppercase mb-1">{label}</p>
                      {href ? (
                        <a href={href} className="text-[var(--fg)] text-sm hover:text-[var(--gold)] transition-colors duration-200 cursor-pointer whitespace-pre-line">
                          {value}
                        </a>
                      ) : (
                        <p className="text-[var(--fg)] text-sm whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 border-t border-[var(--border)] pt-10">
                <p className="text-[var(--muted)] text-xs mb-4">Nous intervenons principalement dans :</p>
                <div className="flex flex-wrap gap-2">
                  {["Dakar", "Thiès", "Saint-Louis", "Saly", "Mbour", "Ziguinchor"].map((z) => (
                    <span key={z} className="border border-[var(--border)] text-[var(--muted)] text-xs px-3 py-1">{z}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

    </div>
  );
}
