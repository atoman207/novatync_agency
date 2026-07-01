"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const rows = [
  { label: "会社名",   value: "NOVATYNC" },
  { label: "代表",     value: "水藤 飛来" },
  { label: "事業内容", value: "AI開発・Webシステム開発・クラウド構築・DX支援" },
  { label: "所在地",   value: "Japan" },
  { label: "設立",     value: "2026年" },
  { label: "社員数",   value: "4名" },
  { label: "開発体制", value: "フルリモート" },
  { label: "対応地域", value: "日本・海外" },
];

export default function CompanyInfo() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section-padding relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-sky-50 rounded-full blur-[100px]" />
      </div>

      <div ref={ref} className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-xs tracking-[0.3em] text-sky-500 mb-4 uppercase">Company</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="text-3xl md:text-4xl font-bold">
            会社概要
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
        >
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.055 }}
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-8 px-6 py-4 hover:bg-sky-50 transition-colors ${
                i < rows.length - 1 ? "border-b border-slate-100" : ""
              }`}
            >
              <span className="text-slate-400 text-xs tracking-wider w-24 flex-shrink-0 uppercase font-medium">{row.label}</span>
              <span className="text-slate-800 text-sm">{row.value}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
