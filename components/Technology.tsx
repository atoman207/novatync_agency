"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techStack = [
  { name: "React",       color: "#0ea5e9", icon: "⚛" },
  { name: "Next.js",     color: "#0f172a", icon: "▲" },
  { name: "TypeScript",  color: "#3178C6", icon: "TS" },
  { name: "Python",      color: "#f59e0b", icon: "🐍" },
  { name: "FastAPI",     color: "#009688", icon: "⚡" },
  { name: "Node.js",     color: "#339933", icon: "⬡" },
  { name: "Laravel",     color: "#FF2D20", icon: "🔷" },
  { name: "Java",        color: "#ED8B00", icon: "☕" },
  { name: "AWS",         color: "#FF9900", icon: "☁" },
  { name: "Azure",       color: "#0089D6", icon: "◈" },
  { name: "Docker",      color: "#2496ED", icon: "🐳" },
  { name: "PostgreSQL",  color: "#4169E1", icon: "🐘" },
  { name: "MongoDB",     color: "#47A248", icon: "🍃" },
  { name: "Redis",       color: "#DC382D", icon: "◉" },
  { name: "OpenAI",      color: "#0ea5e9", icon: "◎" },
  { name: "Claude",      color: "#b45309", icon: "✦" },
  { name: "Gemini",      color: "#4285F4", icon: "◆" },
  { name: "GitHub",      color: "#0f172a", icon: "⊛" },
  { name: "Terraform",   color: "#7B42BC", icon: "◇" },
  { name: "Kubernetes",  color: "#326CE5", icon: "⚓" },
];

const devFlow = [
  { step: "01", title: "Requirement", desc: "要件定義・ヒアリング", icon: "📋" },
  { step: "02", title: "Architecture", desc: "設計・技術選定",       icon: "🏗" },
  { step: "03", title: "Design",       desc: "UI/UX設計",            icon: "🎨" },
  { step: "04", title: "Development",  desc: "フロント・バックエンド開発", icon: "💻" },
  { step: "05", title: "Testing",      desc: "品質保証・テスト",     icon: "✅" },
  { step: "06", title: "Deployment",   desc: "リリース・本番展開",   icon: "🚀" },
  { step: "07", title: "Maintenance",  desc: "運用・保守・改善",     icon: "🔧" },
];

export default function Technology() {
  const ref     = useRef(null);
  const inView  = useInView(ref, { once: true, margin: "-60px" });
  const flowRef = useRef(null);
  const flowIn  = useInView(flowRef, { once: true, margin: "-60px" });

  return (
    <section id="technology" className="section-padding relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none grid-bg opacity-60" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-shu-100/40 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="mb-16 text-center">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-xs tracking-[0.3em] text-shu-600 mb-4 uppercase">Technology</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="text-3xl md:text-5xl font-bold text-sumi mb-4">
            私たちが使う技術
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="text-stone-500 text-sm">
            世界基準のスタックで、スケーラブルな開発を実現します。
          </motion.p>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-5 sm:grid-cols-5 lg:grid-cols-10 gap-3 mb-24">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.025 }}
              className="bg-white rounded-xl p-3 flex flex-col items-center gap-2 group hover:scale-110 transition-all duration-200 cursor-default border border-stone-100 hover:border-shu-200 hover:shadow-md"
            >
              <span className="text-xl leading-none" style={{ color: tech.color }}>{tech.icon}</span>
              <span className="text-[10px] text-stone-400 text-center leading-tight group-hover:text-stone-700 transition-colors">{tech.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Development Flow */}
        <div ref={flowRef}>
          <motion.p initial={{ opacity: 0 }} animate={flowIn ? { opacity: 1 } : {}} className="text-xs tracking-[0.3em] text-shu-600 mb-4 uppercase text-center">Development Flow</motion.p>
          <motion.h3 initial={{ opacity: 0, y: 18 }} animate={flowIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="text-2xl md:text-3xl font-bold text-sumi text-center mb-12">
            開発フロー
          </motion.h3>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-2">
              {devFlow.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 28 }}
                  animate={flowIn ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
                  className="relative flex lg:flex-col items-start lg:items-center gap-4 lg:gap-3"
                >
                  {i < devFlow.length - 1 && (
                    <div className="lg:hidden absolute left-5 top-12 w-px h-full bg-gradient-to-b from-gold-300 to-transparent" />
                  )}
                  <div className="relative z-10 w-11 h-11 rounded-full bg-white border border-shu-200 flex items-center justify-center flex-shrink-0 hover:border-shu-400 hover:shadow-md transition-all">
                    <span className="text-lg">{step.icon}</span>
                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-white border border-gold-300 flex items-center justify-center shadow-sm">
                      <span className="text-[8px] text-shu-600 font-bold leading-none">{i + 1}</span>
                    </div>
                  </div>
                  <div className="lg:text-center">
                    <div className="text-xs text-shu-600 font-mono mb-0.5">{step.step}</div>
                    <div className="text-sumi text-sm font-semibold">{step.title}</div>
                    <div className="text-stone-400 text-xs mt-0.5 leading-tight">{step.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
