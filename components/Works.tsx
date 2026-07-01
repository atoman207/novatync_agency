"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const works = [
  {
    id: 1,
    title: "AI Customer Service Platform",
    titleJa: "AI カスタマーサービス基盤",
    category: "AI Development",
    categoryJa: "AI開発",
    tags: ["OpenAI", "RAG", "Next.js", "FastAPI", "PostgreSQL"],
    description: "大手企業向けに生成AIを活用した自動応答システムを開発。問い合わせ対応コストを大幅削減し、24時間対応を実現。",
    stat: { label: "対応コスト削減", value: "60%" },
    year: "2025",
    gradient: "from-sky-50 to-cyan-50",
    accentColor: "text-sky-600",
    borderColor: "border-sky-100",
    badgeBg: "bg-sky-50",
    statColor: "text-sky-500",
    icon: "◎",
  },
  {
    id: 2,
    title: "Large-Scale E-Commerce Platform",
    titleJa: "大規模 EC プラットフォーム",
    category: "Web Development",
    categoryJa: "Web開発",
    tags: ["Next.js", "TypeScript", "AWS", "PostgreSQL", "Redis"],
    description: "月間100万ユーザーを支えるECサイトのフルリニューアル。Core Web Vitalsをすべて90点以上に引き上げ、コンバージョン率が向上。",
    stat: { label: "パフォーマンス向上", value: "3×" },
    year: "2025",
    gradient: "from-blue-50 to-sky-50",
    accentColor: "text-blue-600",
    borderColor: "border-blue-100",
    badgeBg: "bg-blue-50",
    statColor: "text-blue-500",
    icon: "▲",
  },
  {
    id: 3,
    title: "Cloud Migration — AWS",
    titleJa: "AWS クラウド移行プロジェクト",
    category: "Cloud",
    categoryJa: "クラウド",
    tags: ["AWS", "Terraform", "Docker", "GitHub Actions", "Kubernetes"],
    description: "オンプレミスから AWS へのフルマイグレーションを3ヶ月で完了。Terraform で IaC を徹底し、可用性 99.9% を達成。",
    stat: { label: "インフラコスト削減", value: "40%" },
    year: "2024",
    gradient: "from-cyan-50 to-blue-50",
    accentColor: "text-cyan-600",
    borderColor: "border-cyan-100",
    badgeBg: "bg-cyan-50",
    statColor: "text-cyan-500",
    icon: "☁",
  },
  {
    id: 4,
    title: "Internal DX Platform",
    titleJa: "社内 DX プラットフォーム",
    category: "Consulting / DX",
    categoryJa: "コンサルティング",
    tags: ["React", "Python", "FastAPI", "Azure", "Power BI"],
    description: "製造業大手の社内業務全体をデジタル化。ペーパーレス化・自動化で月間800時間の手作業を削減し、データドリブンな意思決定を実現。",
    stat: { label: "業務工数削減", value: "50%" },
    year: "2024",
    gradient: "from-indigo-50 to-sky-50",
    accentColor: "text-indigo-600",
    borderColor: "border-indigo-100",
    badgeBg: "bg-indigo-50",
    statColor: "text-indigo-500",
    icon: "⬡",
  },
];

export default function Works() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="works" className="section-padding relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-sky-100/40 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-xs tracking-[0.3em] text-sky-500 mb-3 uppercase">Works</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="text-3xl md:text-5xl font-bold text-slate-900">
              実績・事例
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.25 }} className="text-slate-400 text-sm max-w-xs text-right hidden md:block">
            納品後も伴走し続けることが私たちのスタンスです。
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {works.map((work, i) => (
            <motion.article
              key={work.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15 + i * 0.1 }}
              className={`group relative bg-white rounded-3xl overflow-hidden border ${work.borderColor} hover:shadow-xl transition-all duration-300 cursor-default`}
            >
              {/* Top visual */}
              <div className={`relative h-44 bg-gradient-to-br ${work.gradient} flex items-center justify-center overflow-hidden`}>
                <div className={`absolute w-40 h-40 rounded-full border ${work.borderColor} opacity-40`} />
                <div className={`absolute w-64 h-64 rounded-full border ${work.borderColor} opacity-20`} />

                {/* Stat badge */}
                <div className={`absolute top-4 right-4 bg-white border ${work.borderColor} rounded-xl px-3 py-2 text-center shadow-sm`}>
                  <div className={`text-xl font-black ${work.statColor}`}>{work.stat.value}</div>
                  <div className="text-slate-400 text-[10px] mt-0.5">{work.stat.label}</div>
                </div>

                <span className={`text-5xl ${work.accentColor} opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500`}>
                  {work.icon}
                </span>

                <div className="absolute bottom-4 left-4 text-slate-400 text-xs font-mono">{work.year}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs px-2.5 py-1 rounded-full ${work.badgeBg} border ${work.borderColor} ${work.accentColor}`}>
                    {work.categoryJa}
                  </span>
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-1 leading-tight">{work.titleJa}</h3>
                <p className="text-slate-400 text-xs mb-3 font-light tracking-wide">{work.title}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{work.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {work.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-500">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }} className="text-center text-slate-400 text-xs mt-10">
          ※ 守秘義務により企業名・詳細情報は非公開としております
        </motion.p>
      </div>
    </section>
  );
}
