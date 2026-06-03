"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

// Pages dont le header débute sur un fond sombre (hero plein écran)
const DARK_HERO_PAGES = ["/"];

const links = [
  { href: "/", label: "Accueil" },
  { href: "/biens", label: "Nos Biens" },
  { href: "/services", label: "Services" },
  { href: "/agence", label: "L'Agence" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // La navbar est transparente seulement sur la home au top de page
  const hasDarkHero = DARK_HERO_PAGES.includes(pathname);
  const isTransparent = hasDarkHero && !scrolled;

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isDark = resolvedTheme === "dark";

  // Transparent (home hero) → blanc sur fond sombre
  // Solide (pages intérieures ou après scroll) → couleurs du thème actif
  const linkColor   = isTransparent ? "text-white/70"       : "text-[var(--muted)]";
  const linkHover   = isTransparent ? "hover:text-white"     : "hover:text-[var(--fg)]";
  const iconColor   = isTransparent ? "text-white/70"        : "text-[var(--muted)]";
  const burgerColor = isTransparent ? "text-white"           : "text-[var(--fg)]";

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? "py-5 bg-transparent"
            : "py-3 bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--border)]/40 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <Image src="/logo-evrest-v2.PNG" alt="Everest Immo" width={280} height={90} className="h-20 w-auto" priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
            {links.map((l) => (
              <Link key={l.href} href={l.href}
                className={`nav-link text-sm tracking-[0.15em] uppercase transition-colors duration-200 cursor-pointer ${linkColor} ${linkHover}`}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                aria-label="Changer le thème"
                className={`p-2 min-h-[44px] min-w-[44px] flex items-center justify-center hover:text-[var(--gold)] transition-colors duration-200 cursor-pointer ${iconColor}`}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <Link href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-[var(--gold)] text-white text-xs tracking-[0.2em] uppercase px-5 py-3 min-h-[44px] hover:bg-[var(--gold-light)] transition-colors duration-300 cursor-pointer">
              Estimation
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
              className={`md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer ${burgerColor}`}>
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-[var(--ink-900)] flex flex-col justify-center items-center"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Fermer le menu"
              className="absolute top-6 right-6 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-[var(--cream)] cursor-pointer">
              <X size={24} />
            </button>

            <nav className="flex flex-col items-center gap-8" aria-label="Navigation mobile">
              {links.map((l, i) => (
                <motion.div key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}>
                  <Link href={l.href} onClick={() => setOpen(false)}
                    className="font-cinzel text-2xl text-[var(--cream)] tracking-wider cursor-pointer hover:text-[var(--gold-light)] transition-colors duration-200">
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12">
              <Link href="/contact" onClick={() => setOpen(false)}
                className="border border-[var(--gold)] text-[var(--gold)] text-xs tracking-[0.2em] uppercase px-10 py-4 min-h-[52px] flex items-center hover:bg-[var(--gold)] hover:text-[var(--ink)] transition-colors duration-300 cursor-pointer">
                Estimation gratuite
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
