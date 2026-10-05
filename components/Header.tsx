"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PreferenceControls from "@/components/PreferenceControls";
import { useI18n } from "@/components/PreferencesProvider";

const navItems = [
  { key: "home", label: "HOME", href: "/#home" },
  { key: "works", label: "WORKS", href: "/#works" },
  { key: "about", label: "ABOUT", href: "/#about" },
  { key: "contact", label: "CONTACT", href: "/#contact" },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hash, setHash] = useState("#home");
  const pathname = usePathname();
  const { lang, t } = useI18n();
  const showJa = lang === "ja";

  useEffect(() => {
    const sync = () => setHash(window.location.hash || "#home");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [pathname]);

  useEffect(() => { setMenuOpen(false); }, [pathname, hash]);

  const isActive = (href: string) => pathname === "/" && href === `/${hash}`;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-chrome backdrop-blur-sm border-b border-gold/25 shadow-sm space:backdrop-blur-md"
      >
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:h-18 sm:px-6 md:px-8 lg:h-20">
          <Link href="/#home" className="flex items-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="NOVATYNC"
              width={180}
              height={48}
              className="h-8 w-auto object-contain sm:h-9 md:h-10 space:invert space:hue-rotate-180"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8 ml-auto">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="nav-link group relative"
              >
                <span className={`text-sm font-medium transition-colors duration-200 ${
                  showJa ? "" : "tracking-widest"
                } ${
                  isActive(item.href) ? "text-accent-strong" : "text-muted group-hover:text-accent-strong"
                }`}>
                  {showJa ? t.nav[item.key] : item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1.5 lg:ml-8">
            <PreferenceControls className="hidden min-[380px]:flex" />

            <button
              className="flex flex-col gap-1.5 p-2 lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={t.header.menu}
            >
              <span className={`block w-5 h-0.5 bg-sumi transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-sumi transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-sumi transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-washi px-6 lg:hidden"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link href={item.href} className="group flex flex-col items-center gap-1">
                  <span className={`text-xl font-light transition-colors sm:text-2xl ${
                    showJa ? "tracking-wide" : "tracking-[0.18em] sm:tracking-widest"
                  } ${
                    isActive(item.href) ? "text-accent-strong" : "text-sumi group-hover:text-accent-strong"
                  }`}>
                    {showJa ? t.nav[item.key] : item.label}
                  </span>
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
              <Link
                href="/#contact"
                className="mt-2 rounded-full bg-shu-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-shu-700 sm:mt-4 sm:px-8 sm:py-3"
              >
                {t.header.contact}
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="min-[380px]:hidden"
            >
              <PreferenceControls />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
