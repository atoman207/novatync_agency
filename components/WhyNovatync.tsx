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

      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-14 md:mb-16">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-xs tracking-[0.3em] text-shu-600 mb-4 uppercase">Why NOVATYNC</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl font-bold sm:text-3xl md:text-5xl"
          >
            私たちを選ぶ理由
          </motion.h2>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-4 sm:mb-14 sm:grid-cols-3 sm:gap-5 md:mb-16 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
              className="rounded-2xl border border-stone-100 bg-white p-6 text-center transition-all hover:border-shu-200 hover:shadow-lg sm:p-7 md:p-8"
            >
              <div className="mb-2 text-4xl font-black leading-none gradient-text sm:text-5xl md:text-6xl">
                {inView && <CountUp to={s.value} suffix={s.suffix} />}
              </div>
              <div className="mb-1 text-base font-semibold text-sumi sm:text-lg">{s.label}</div>
              <div className="text-stone-400 text-xs">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2.5 sm:gap-3"
        >
          {capabilities.map((cap, i) => (
            <motion.span
              key={cap}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.055 }}
              className="cursor-default rounded-full border border-stone-200 bg-white px-4 py-1.5 text-xs text-stone-500 transition-all duration-200 hover:border-shu-300 hover:text-shu-600 hover:shadow-sm sm:px-5 sm:py-2 sm:text-sm"
            >
              {cap}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
