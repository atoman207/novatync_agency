"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  { title: "Innovation",          desc: "常に最先端技術を探求し、革新的なソリューションを提供します。",               icon: "⚡", border: "border-shu-100",     dot: "bg-shu-400",     from: "from-shu-50",    to: "to-white"  },
  { title: "Quality",             desc: "世界基準のコード品質とデザインにこだわり続けます。",                           icon: "✦", border: "border-gold-200",    dot: "bg-gold-400",    from: "from-gold-50",   to: "to-white"  },
  { title: "Trust",               desc: "お客様との長期的な信頼関係を何より大切にします。",                             icon: "◈", border: "border-ai-100",      dot: "bg-ai-400",      from: "from-ai-50",     to: "to-white"  },
  { title: "Speed",               desc: "スタートアップの機動力でスピーディーに価値を届けます。",                       icon: "▸", border: "border-shu-100",     dot: "bg-shu-300",     from: "from-shu-50",    to: "to-white"  },
  { title: "Ownership",           desc: "全員がオーナーシップを持ち、事業に責任感を持って取り組みます。",               icon: "◎", border: "border-emerald-100", dot: "bg-emerald-400", from: "from-emerald-50",to: "to-white"  },
  { title: "Continuous Learning", desc: "技術は常に進化します。学び続けることが私たちの強みです。",                     icon: "∞", border: "border-ai-200",      dot: "bg-ai-500",      from: "from-ai-50",     to: "to-white"  },
];

export default function Mission() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section-padding relative overflow-hidden bg-washi-deep">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-shu-100/40 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Mission */}
        <div className="mb-24 text-center">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-xs tracking-[0.3em] text-shu-600 mb-4 uppercase">Mission</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-sumi max-w-2xl mx-auto leading-tight"
          >
            AIで企業の可能性を<span className="gradient-text"> 最大化する。</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-stone-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed"
          >
            企業の業務改善だけではなく、新しい価値を創り、<br />世界へ挑戦できるソフトウェアを生み出す。
          </motion.p>
        </div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-24 rounded-3xl p-10 md:p-16 text-center border border-shu-100 relative overflow-hidden bg-white shadow-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-shu-50/60 to-gold-50/30" />
          <p className="relative text-xs tracking-[0.3em] text-gold-600 mb-4 uppercase">Vision</p>
          <p className="relative text-2xl md:text-4xl font-bold text-sumi leading-relaxed">
            世界中の企業が、<br />
            <span className="gradient-text">AIを当たり前に使う</span>
            <span className="text-sumi">未来を創る。</span>
          </p>
        </motion.div>

        {/* Values */}
        <div>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }} className="text-xs tracking-[0.3em] text-shu-600 mb-4 uppercase text-center">Value</motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.07 }}
                className={`rounded-2xl p-6 border ${v.border} hover:shadow-md transition-all duration-300 bg-white`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${v.from} ${v.to} border ${v.border} flex items-center justify-center text-lg mb-4`}>
                  {v.icon}
                </div>
                <h3 className="text-sumi font-semibold mb-2">{v.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
