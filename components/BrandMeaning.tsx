"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function BrandMeaning() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-100/50 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-xs tracking-[0.3em] text-sky-500 mb-4 uppercase"
        >
          Brand Story
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-slate-900 mb-16"
        >
          名前の意味
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
          {/* NOVA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl p-8 md:p-10 flex-1 max-w-xs text-left border border-sky-100 shadow-sm bg-white"
          >
            <div className="text-4xl md:text-5xl font-black gradient-text mb-6 tracking-tight">NOVA</div>
            <div className="space-y-3">
              {["新しい星", "革新", "爆発的成長"].map((w) => (
                <div key={w} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">{w}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Plus */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="text-4xl font-thin text-slate-200 px-8 md:px-12 my-4 md:my-0"
          >
            +
          </motion.div>

          {/* SYNC */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-2xl p-8 md:p-10 flex-1 max-w-xs text-left border border-cyan-100 shadow-sm bg-white"
          >
            <div className="text-4xl md:text-5xl font-black text-cyan-500 mb-6 tracking-tight">SYNC</div>
            <div className="space-y-3">
              {["同期", "繋がり", "チームワーク", "テクノロジーの融合"].map((w) => (
                <div key={w} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">{w}</span>
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
          className="mt-12 flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-3 text-slate-300 text-lg">
            <span className="w-12 h-px bg-slate-200" />
            <span className="text-2xl">↓</span>
            <span className="w-12 h-px bg-slate-200" />
          </div>

          <div className="rounded-2xl px-10 py-8 max-w-lg border border-sky-100 shadow-md bg-white">
            <div className="text-5xl md:text-6xl font-black gradient-text mb-4 tracking-tight">NOVATYNC</div>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed italic">
              「革新を同期し、<br />人・企業・AIを繋ぐ。」
            </p>
            <p className="text-slate-400 text-xs mt-3 tracking-wider">— これが私たちのブランド名です。</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
