"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref     = useRef<HTMLSpanElement>(null);
  const count   = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [count, to]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v + suffix;
    });
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { value: 8,   suffix: "+",  label: "Years Experience", sub: "豊富な開発実績" },
  { value: 100, suffix: "%",  label: "Remote Development", sub: "フルリモート体制" },
  { value: 1,   suffix: "名", label: "Elite Team", sub: "少数精鋭チーム" },
];

const capabilities = [
  "Full Stack", "AI / LLM", "Cloud", "UI/UX",
  "Enterprise", "Startup", "Mobile", "Consulting",
];

export default function WhyNovatync() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-shu-50 blur-[80px]" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-xs tracking-[0.3em] text-shu-600 mb-4 uppercase">Why NOVATYNC</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold"
          >
            私たちを選ぶ理由
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
              className="bg-white rounded-2xl p-8 text-center border border-stone-100 hover:border-shu-200 hover:shadow-lg transition-all"
            >
              <div className="text-5xl md:text-6xl font-black gradient-text mb-2 leading-none">
                {inView && <CountUp to={s.value} suffix={s.suffix} />}
              </div>
              <div className="text-sumi font-semibold text-lg mb-1">{s.label}</div>
              <div className="text-stone-400 text-xs">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {capabilities.map((cap, i) => (
            <motion.span
              key={cap}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.055 }}
              className="px-5 py-2 rounded-full bg-white border border-stone-200 text-sm text-stone-500 hover:text-shu-600 hover:border-shu-300 hover:shadow-sm transition-all duration-200 cursor-default"
            >
              {cap}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
