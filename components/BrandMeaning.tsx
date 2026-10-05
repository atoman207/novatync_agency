"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/components/PreferencesProvider";

export default function BrandMeaning() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useI18n();

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-shu-100/40 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-xs tracking-[0.3em] text-accent mb-4 uppercase"
        >
          Brand Story
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 text-2xl font-bold text-sumi sm:mb-12 sm:text-3xl md:mb-16 md:text-5xl"
        >
          {t.brand.title}
        </motion.h2>

        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:flex-row md:gap-0">
          {/* NOVA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xs flex-1 rounded-2xl border border-shu-100 bg-surface p-6 text-left shadow-sm sm:p-8 md:p-10"
          >
            <div className="mb-4 text-3xl font-black tracking-tight gradient-text sm:mb-6 sm:text-4xl md:text-5xl">NOVA</div>
            <div className="space-y-3">
              {t.brand.nova.map((w) => (
                <div key={w} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-shu-400 flex-shrink-0" />
                  <span className="text-ink-soft text-sm">{w}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Plus */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="my-2 px-6 text-3xl font-thin text-ghost sm:my-4 sm:px-8 sm:text-4xl md:my-0 md:px-12"
          >
            +
          </motion.div>

          {/* SYNC */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-xs flex-1 rounded-2xl border border-gold-200 bg-surface p-6 text-left shadow-sm sm:p-8 md:p-10"
          >
            <div className="mb-4 text-3xl font-black tracking-tight text-accent-alt sm:mb-6 sm:text-4xl md:text-5xl">SYNC</div>
            <div className="space-y-3">
              {t.brand.sync.map((w) => (
                <div key={w} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                  <span className="text-ink-soft text-sm">{w}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Result */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-col items-center gap-5 sm:mt-12 sm:gap-6"
        >
          <div className="flex items-center gap-3 text-ghost text-lg">
            <span className="w-12 h-px bg-line" />
            <span className="text-2xl">↓</span>
            <span className="w-12 h-px bg-line" />
          </div>

          <div className="max-w-lg rounded-2xl border border-shu-100 bg-surface px-6 py-6 shadow-md sm:px-8 sm:py-7 md:px-10 md:py-8">
            <div className="mb-3 text-4xl font-black tracking-tight gradient-text sm:mb-4 sm:text-5xl md:text-6xl">NOVATYNC</div>
            <p className="text-sm italic leading-relaxed text-muted sm:text-base md:text-lg">
              {t.brand.quote[0]}<br />{t.brand.quote[1]}
            </p>
            <p className="text-faint text-xs mt-3 tracking-wider">{t.brand.note}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
