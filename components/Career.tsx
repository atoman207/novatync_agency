"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const positions = [
  {
    role: "Frontend Engineer",
    type: "正社員 / 業務委託",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    desc: "世界基準のUIを構築するフロントエンドエンジニアを募集しています。",
    badgeBg: "bg-sky-50", badgeBorder: "border-sky-200", badgeText: "text-sky-600",
    dot: "bg-sky-500",
    border: "border-sky-100", hover: "hover:border-sky-300",
    skillBg: "bg-sky-50", skillText: "text-sky-600",
  },
  {
    role: "Backend Engineer",
    type: "正社員 / 業務委託",
    skills: ["Python", "FastAPI", "Node.js", "PostgreSQL"],
    desc: "スケーラブルなバックエンドシステムを設計・開発するエンジニアを募集しています。",
    badgeBg: "bg-emerald-50", badgeBorder: "border-emerald-200", badgeText: "text-emerald-600",
    dot: "bg-emerald-500",
    border: "border-emerald-100", hover: "hover:border-emerald-300",
    skillBg: "bg-emerald-50", skillText: "text-emerald-600",
  },
  {
    role: "AI Engineer",
    type: "正社員 / 業務委託",
    skills: ["LLM", "RAG", "OpenAI", "Python"],
    desc: "生成AIを事業へ統合するAIエンジニアを募集しています。",
    badgeBg: "bg-cyan-50", badgeBorder: "border-cyan-200", badgeText: "text-cyan-600",
    dot: "bg-cyan-500",
    border: "border-cyan-100", hover: "hover:border-cyan-300",
    skillBg: "bg-cyan-50", skillText: "text-cyan-600",
  },
  {
    role: "Cloud Engineer",
    type: "正社員 / 業務委託",
    skills: ["AWS", "Azure", "Terraform", "Docker"],
    desc: "クラウドインフラの設計・運用を担当するエンジニアを募集しています。",
    badgeBg: "bg-blue-50", badgeBorder: "border-blue-200", badgeText: "text-blue-600",
    dot: "bg-blue-500",
    border: "border-blue-100", hover: "hover:border-blue-300",
    skillBg: "bg-blue-50", skillText: "text-blue-600",
  },
  {
    role: "UI/UX Designer",
    type: "業務委託",
    skills: ["Figma", "Design System", "Prototyping"],
    desc: "世界水準のユーザー体験をデザインするUIデザイナーを募集しています。",
    badgeBg: "bg-pink-50", badgeBorder: "border-pink-200", badgeText: "text-pink-600",
    dot: "bg-pink-500",
    border: "border-pink-100", hover: "hover:border-pink-300",
    skillBg: "bg-pink-50", skillText: "text-pink-600",
  },
];

export default function Career() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="career" className="section-padding relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none grid-bg opacity-40" />
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-sky-50 rounded-full blur-[100px]" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-xs tracking-[0.3em] text-sky-500 mb-4 uppercase">Career</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="text-3xl md:text-5xl font-bold mb-4">
            Join Us.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="text-slate-500 text-sm md:text-base">
            未来を一緒につくる仲間を募集しています。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {positions.map((pos, i) => (
            <motion.div
              key={pos.role}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.07 }}
              className={`bg-white rounded-2xl p-6 border ${pos.border} ${pos.hover} hover:shadow-md transition-all duration-300 cursor-default`}
            >
              <div className={`inline-flex items-center gap-2 mb-4 text-xs px-3 py-1 rounded-full ${pos.badgeBg} border ${pos.badgeBorder} ${pos.badgeText}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${pos.dot}`} />
                {pos.type}
              </div>
              <h3 className="text-slate-900 font-bold text-lg mb-2">{pos.role}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{pos.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {pos.skills.map((sk) => (
                  <span key={sk} className={`text-xs px-2 py-0.5 rounded border border-transparent ${pos.skillBg} ${pos.skillText}`}>{sk}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-sm"
          >
            応募・お問い合わせ
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
