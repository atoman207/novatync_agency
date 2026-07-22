"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "HOME",       ja: "ホーム",       href: "/"           },
  { label: "SERVICE",    ja: "サービス",     href: "/service"    },
  { label: "WORKS",      ja: "実績",         href: "/works"      },
  { label: "TECHNOLOGY", ja: "テクノロジー", href: "/technology" },
  { label: "ABOUT",      ja: "会社概要",     href: "/about"      },
  { label: "CAREER",     ja: "採用情報",     href: "/career"     },
  { label: "CONTACT",    ja: "お問い合わせ", href: "/contact"    },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-washi/95 backdrop-blur-sm border-b border-gold/25 shadow-sm"
      >
        <div className="max-w-screen-2xl mx-auto px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="NOVATYNC"
              width={180}
              height={48}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 ml-auto">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="nav-link group relative"
              >
                <span className={`nav-label text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href) ? "text-shu-700" : "text-stone-500 group-hover:text-shu-700"
                }`}>
                  <span className="nav-label-en tracking-widest">{item.label}</span>
                  <span className="nav-label-ja text-shu-600 font-medium">{item.ja}</span>
                </span>
                {isActive(item.href) && (
                  <span className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-shu-600/70 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <span className={`block w-5 h-0.5 bg-sumi transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-sumi transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-sumi transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-washi flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link href={item.href} className="group flex flex-col items-center gap-1">
                  <span className={`text-2xl font-light tracking-widest transition-colors ${
                    isActive(item.href) ? "text-shu-700" : "text-sumi group-hover:text-shu-700"
                  }`}>
                    {item.label}
                  </span>
                  <span className="text-xs text-shu-600/80 tracking-wider">{item.ja}</span>
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
              <Link
                href="/contact"
                className="mt-4 px-8 py-3 rounded-full text-white text-sm font-medium bg-shu-600 hover:bg-shu-700 transition-colors"
              >
                お問い合わせ
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
