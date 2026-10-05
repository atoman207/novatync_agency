"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/components/PreferencesProvider";

export default function CompanyInfo() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { t }  = useI18n();
  const rows   = t.company.rows;

  return (
    <section className="section-padding relative overflow-hidden bg-band">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-shu-50 rounded-full blur-[100px]" />
      </div>

      <div ref={ref} className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-xs tracking-[0.3em] text-accent mb-4 uppercase">Company</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="text-3xl md:text-4xl font-bold">
            {t.company.title}
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-surface rounded-2xl border border-line shadow-sm overflow-hidden"
        >
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.055 }}
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-8 px-6 py-4 hover:bg-shu-50 transition-colors ${
                i < rows.length - 1 ? "border-b border-line-soft" : ""
              }`}
            >
              <span className="text-faint text-xs tracking-wider w-24 flex-shrink-0 uppercase font-medium">{row.label}</span>
              <span className="text-sumi text-sm">{row.value}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
