"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y       = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      id="home"
      data-hero-section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundColor: "#0c1a2e",
      }}
    >
      {/* Gradient overlay — heavier on left for text, lighter on right to show image */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/65 to-slate-900/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-transparent" />

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg-dark opacity-25 pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-sky-600/12 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-cyan-500/10 rounded-full blur-[80px]" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-screen-2xl mx-auto px-8 pt-32 pb-24 w-full"
      >
        <div className="max-w-2xl flex flex-col gap-8">

          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block glass-dark px-4 py-1.5 rounded-full text-xs tracking-widest text-sky-300 font-medium">
              AI × Full Stack × Cloud Innovation
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.06] tracking-tight">
              <span className="gradient-text">Build the</span>
              <br />
              <span className="text-white">Future.</span>
            </h1>
            <p className="text-lg md:text-xl font-light text-white/75 mt-5 leading-relaxed">
              AIが企業を変える。
              <br />
              <span className="text-white/90">私たちは、その未来を開発する。</span>
            </p>
          </motion.div>

          {/* Body copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-sm md:text-base text-white/55 leading-relaxed space-y-2 max-w-lg"
          >
            <p>NOVATYNCは、生成AI・Webシステム・クラウドを融合し、企業のDXを加速させるITパートナーです。</p>
            <p className="text-white/70">
              AIを「事業へ組み込む」。世界基準のソフトウェアを日本から創ります。
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/service" className="group relative px-7 py-3.5 rounded-xl text-sm font-medium text-white overflow-hidden">
              <div className="absolute inset-0 gradient-border rounded-xl" />
              <div className="absolute inset-[1px] bg-slate-900 rounded-[11px] group-hover:bg-sky-950 transition-colors" />
              <span className="relative">サービスを見る</span>
            </Link>
            <Link href="/works" className="px-7 py-3.5 rounded-xl text-sm font-medium text-white/70 hover:text-white border border-white/15 hover:border-sky-400/40 transition-all">
              実績を見る
            </Link>
            <Link href="/contact" className="px-7 py-3.5 rounded-xl text-sm font-medium text-sky-300 hover:text-sky-200 transition-colors">
              お問い合わせ →
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-3 text-xs text-white/30 tracking-widest"
          >
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="w-px h-8 bg-gradient-to-b from-transparent via-sky-400/40 to-transparent"
            />
            SCROLL
          </motion.div>
        </div>
      </motion.div>

      {/* Fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none z-10" />
    </section>
  );
}
