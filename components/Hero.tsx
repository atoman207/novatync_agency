"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import HeroSphereClient from "@/components/HeroSphereClient";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <section
      id="home"
      data-hero-section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-ai-950"
    >
      <div className="absolute inset-0">
        <Image
          src="/hero-japan-engineer.png"
          alt="日本のフルスタック・AIエンジニアが開発に取り組む様子"
          fill
          priority
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay — darker for readable text over image */}
      <div className="absolute inset-0 bg-gradient-to-r from-ai-950/95 via-ai-900/80 to-ai-900/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-ai-950/50 via-transparent to-ai-950/55" />

      <motion.div
        style={{ y }}
        className="relative z-10 max-w-screen-2xl mx-auto px-8 pt-32 pb-24 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-center">
          <div className="max-w-2xl flex flex-col gap-8">
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block glass-dark px-4 py-1.5 rounded-full text-xs tracking-widest text-gold-300 font-medium">
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
              <p className="text-lg md:text-xl font-light text-white mt-5 leading-relaxed">
                AIが企業を変える。
                <br />
                <span className="text-white">私たちは、その未来を開発する。</span>
              </p>
            </motion.div>

            {/* Body copy */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="text-sm md:text-base text-white/85 leading-relaxed space-y-2 max-w-lg"
            >
              <p>NOVATYNCは、生成AI・Webシステム・クラウドを融合し、企業のDXを加速させるITパートナーです。</p>
              <p className="text-white">
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
                <div className="absolute inset-[1px] bg-ai-900 rounded-[11px] group-hover:bg-shu-950 transition-colors" />
                <span className="relative">サービスを見る</span>
              </Link>
              <Link href="/works" className="px-7 py-3.5 rounded-xl text-sm font-medium text-white border border-white/35 hover:border-gold-300 hover:bg-white/10 transition-all">
                実績を見る
              </Link>
              <Link href="/contact" className="px-7 py-3.5 rounded-xl text-sm font-semibold text-gold-200 hover:text-white transition-colors">
                お問い合わせ →
              </Link>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-3 text-xs text-white/60 tracking-widest"
            >
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                className="w-px h-8 bg-gradient-to-b from-transparent via-gold-400/40 to-transparent"
              />
              SCROLL
            </motion.div>
          </div>

          {/* 3D Earth + orbiting stack icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="relative h-[420px] sm:h-[500px] lg:h-[640px] w-full overflow-visible"
          >
            <HeroSphereClient />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
