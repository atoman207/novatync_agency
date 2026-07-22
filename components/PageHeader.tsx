"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  en: string;
  ja: string;
  desc?: string;
}

export default function PageHeader({ en, ja, desc }: Props) {
  return (
    <section className="page-header relative pt-36 pb-14 overflow-hidden bg-washi grid-bg" data-hero-section>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-shu-100/50 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-[11px] text-stone-400 mb-10 tracking-wider"
        >
          <Link href="/" className="hover:text-sumi transition-colors">HOME</Link>
          <span className="text-stone-300">/</span>
          <span className="text-shu-600">{en.toUpperCase()}</span>
        </motion.nav>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.06 }}
          className="text-[11px] tracking-[0.3em] text-shu-600 mb-4 uppercase font-medium"
        >
          {en}
        </motion.p>

        {/* Page title */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-bold text-sumi tracking-tight leading-[1.05] mb-5"
        >
          {ja}
        </motion.h1>

        {desc && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="text-stone-500 text-base md:text-lg max-w-2xl leading-relaxed"
          >
            {desc}
          </motion.p>
        )}
      </div>
    </section>
  );
}
