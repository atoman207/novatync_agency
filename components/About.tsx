"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const team = [
  { name: "水藤 飛来", nameEn: "Hira Suido",  role: "Founder / CEO", skills: ["Full Stack", "AI Engineer", "Cloud Arch."], gradient: "from-sky-500 to-cyan-600",    initials: "HS" },
  { name: "エンジニア",  nameEn: "Engineer",    role: "Full Stack",    skills: ["React", "Next.js", "Node.js"],              gradient: "from-blue-500 to-sky-600",   initials: "FS" },
  { name: "エンジニア",  nameEn: "Engineer",    role: "Backend / AI",  skills: ["Python", "FastAPI", "LLM"],                 gradient: "from-cyan-500 to-blue-600",  initials: "BE" },
  { name: "エンジニア",  nameEn: "Engineer",    role: "Frontend",      skills: ["Vue", "React", "UI/UX"],                    gradient: "from-sky-400 to-indigo-500", initials: "FE" },
];

export default function About() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const ceoRef = useRef(null);
  const ceoIn  = useInView(ceoRef, { once: true, margin: "-60px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-50 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Intro */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-xs tracking-[0.3em] text-sky-500 mb-4 uppercase">About</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              会社紹介
            </motion.h2>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-4 leading-relaxed">
              <p className="text-slate-600">NOVATYNCは、AI・Web・クラウド技術を軸に、企業の課題を解決するIT企業です。</p>
              <p className="text-slate-700">受託開発だけではなく、事業パートナーとして、長期的な価値提供を目指しています。</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-64 lg:h-80"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-50 to-slate-50 border border-sky-100 overflow-hidden shadow-sm">
              <div className="absolute inset-4 rounded-2xl border border-sky-100/60" />
              {[
                { text: "AI Engineer",     pos: "top-6 left-6",     delay: 0.5 },
                { text: "Full Stack Dev",  pos: "top-6 right-6",    delay: 0.6 },
                { text: "Cloud Architect", pos: "bottom-6 left-6",  delay: 0.7 },
                { text: "UI/UX Designer",  pos: "bottom-6 right-6", delay: 0.8 },
              ].map((el) => (
                <motion.div
                  key={el.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: el.delay }}
                  className={`absolute ${el.pos} bg-white border border-sky-100 shadow-sm px-3 py-1.5 rounded-lg text-xs text-slate-500`}
                >
                  {el.text}
                </motion.div>
              ))}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-4xl font-black gradient-text tracking-tight">4名</div>
                <div className="text-slate-400 text-xs mt-1">少数精鋭</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team */}
        <div className="mb-24">
          <motion.h3 initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="text-2xl font-bold text-slate-800 mb-10 text-center">Team</motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((m, i) => (
              <motion.div
                key={`${m.role}-${i}`}
                initial={{ opacity: 0, y: 36 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-sky-200 hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="relative mx-auto w-16 h-16 mb-4">
                  <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${m.gradient} flex items-center justify-center text-white font-bold text-xl`}>{m.initials}</div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white" />
                </div>
                <h4 className="text-slate-900 font-bold text-base">{m.name}</h4>
                <p className="text-slate-400 text-xs mb-3">{m.nameEn}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-xs mb-4">{m.role}</span>
                <div className="flex flex-wrap gap-1 justify-center">
                  {m.skills.map((sk) => (
                    <span key={sk} className="text-xs px-2 py-0.5 rounded bg-slate-50 text-slate-500 border border-slate-100">{sk}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CEO Message */}
        <div ref={ceoRef}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={ceoIn ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-10 md:p-16 border border-sky-100 shadow-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50/60 to-transparent" />
            <div className="relative">
              <motion.p initial={{ opacity: 0 }} animate={ceoIn ? { opacity: 1 } : {}} transition={{ delay: 0.2 }} className="text-xs tracking-[0.3em] text-sky-500 mb-6 uppercase">CEO Message</motion.p>
              <motion.h3 initial={{ opacity: 0, y: 18 }} animate={ceoIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="text-2xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                技術ではなく、<br /><span className="gradient-text">価値を届ける</span>会社へ。
              </motion.h3>
              <motion.div initial={{ opacity: 0, y: 18 }} animate={ceoIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base max-w-3xl">
                <p>私たちはAIやクラウドを「導入すること」を目的とは考えていません。本当に重要なのは、その技術が企業やユーザーにどのような価値をもたらすかです。</p>
                <p>NOVATYNCは、生成AI、Webシステム、クラウド、UI/UXを融合し、お客様の事業成長を支えるソリューションを提供します。</p>
                <p className="text-slate-700">現在、私たちは4名の少数精鋭チームとして活動しています。だからこそ、一人ひとりが高い技術力と責任感を持ち、企画・設計・開発・運用までを一貫して担当しています。</p>
                <p>小さな組織だからこそ意思決定は速く、お客様と近い距離で伴走できることが私たちの強みです。これからも日本発のテクノロジーカンパニーとして、世界に通用するソフトウェアを創り続けます。</p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={ceoIn ? { opacity: 1 } : {}} transition={{ delay: 0.5 }} className="mt-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-600 flex items-center justify-center text-white font-bold text-sm">HS</div>
                <div>
                  <div className="text-slate-900 font-semibold text-sm">水藤 飛来</div>
                  <div className="text-slate-400 text-xs">代表取締役 CEO</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
