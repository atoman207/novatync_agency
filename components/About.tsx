"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const specialties = [
  "AI業務効率化システム",
  "保守性・拡張性を重視したWebアプリ",
  "MVP開発〜本番運用",
  "アジャイル開発",
  "新規サービス立ち上げ",
  "既存システムの改善・リニューアル",
];

const works = [
  "AI業務支援システム",
  "AIチャットボット",
  "RAG検索システム",
  "OCR書類管理システム",
  "企業向け管理システム",
  "会員制Webサービス",
  "SaaSプロダクト",
  "予約管理システム",
  "決済システム",
  "寄付プラットフォーム",
  "コーポレートサイト",
  "メディアサイト",
  "ランディングページ",
];

const commitments = [
  "原則当日中の返信",
  "定期的な進捗共有",
  "納期厳守",
  "保守・運用サポート対応",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const bioRef = useRef(null);
  const bioIn = useInView(bioRef, { once: true, margin: "-60px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-washi">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-shu-50 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Profile header */}
        <div ref={ref} className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mx-auto w-full max-w-[280px]"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-shu-100 bg-white shadow-sm">
              <Image
                src="/mine.png"
                alt="水藤 飛来 — フルスタックAIエンジニア"
                fill
                priority
                className="object-cover object-[center_20%]"
                sizes="280px"
              />
            </div>
            <div className="mt-5 text-center">
              <h3 className="text-sumi font-bold text-xl">水藤 飛来</h3>
              <p className="text-stone-400 text-sm mt-1">Hira Suido</p>
              <p className="text-shu-600 text-sm font-medium mt-2">フルスタックAIエンジニア</p>
              <p className="text-stone-500 text-xs mt-1">代表取締役 CEO / NOVATYNC</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-shu-100 bg-shu-50 px-3 py-1.5 text-xs text-shu-700">
                <span className="font-bold">1名</span>
                <span className="text-stone-400">|</span>
                <span>少数精鋭</span>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-xs tracking-[0.3em] text-shu-600 mb-4 uppercase">
              Profile
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
            >
              プロフィール
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5 text-stone-600 leading-relaxed text-sm md:text-base"
            >
              <p>はじめまして。<br />プロフィールをご覧いただき、ありがとうございます。</p>
              <p>
                フルスタックAIエンジニアとして、要件定義から設計・開発・インフラ構築・運用まで一貫して対応しております。
              </p>
              <p>
                単にシステムを開発するだけではなく、「業務をどう改善するか」「売上や生産性をどう向上させるか」という視点を大切にし、お客様のビジネスに最適なソリューションをご提案いたします。
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bio details */}
        <div ref={bioRef} className="space-y-16">
          {/* Specialties */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={bioIn ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-shu-100 shadow-sm"
          >
            <h3 className="text-xl md:text-2xl font-bold text-sumi mb-4">得意分野</h3>
            <p className="text-stone-600 leading-relaxed text-sm md:text-base mb-4">
              AIを活用した業務効率化システムや、保守性・拡張性を重視したWebアプリケーション開発を得意としております。
            </p>
            <p className="text-stone-600 leading-relaxed text-sm md:text-base mb-4">
              MVP（最小実用製品）の開発から本番運用まで、アジャイル開発を取り入れながらスピーディーに価値をご提供いたします。
            </p>
            <p className="text-stone-600 leading-relaxed text-sm md:text-base mb-6">
              新規サービスの立ち上げから既存システムの改善・リニューアルまで幅広く対応可能です。
            </p>
            <div className="flex flex-wrap gap-2">
              {specialties.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-shu-100 bg-shu-50 px-3 py-1.5 text-xs text-shu-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Works */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={bioIn ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-shu-100 shadow-sm"
          >
            <h3 className="text-xl md:text-2xl font-bold text-sumi mb-6">開発実績</h3>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {works.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-stone-100 bg-stone-50/80 px-4 py-3 text-sm text-stone-700"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-shu-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-stone-500">
              ポートフォリオ：{" "}
              <Link href="/works" className="text-shu-600 hover:text-shu-700 underline underline-offset-2">
                novatync.agency
              </Link>
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={bioIn ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-shu-100 shadow-sm"
          >
            <h3 className="text-xl md:text-2xl font-bold text-sumi mb-4">仕事で大切にしていること</h3>
            <div className="space-y-4 text-stone-600 leading-relaxed text-sm md:text-base mb-6">
              <p>
                お客様が本当に必要としているものを一緒に考えながら開発を進めることを大切にしています。
              </p>
              <p>
                技術だけではなく、事業や運用まで考慮したご提案を行い、「作って終わり」ではなく、長く活用できるシステムをご提供いたします。
              </p>
              <p>また、以下を徹底しております。</p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {commitments.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-shu-100 bg-shu-50/70 px-4 py-3 text-sm text-shu-800"
                >
                  <span className="text-shu-600 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 px-6 py-5 text-sm md:text-base text-stone-600 leading-relaxed space-y-3">
              <p className="font-medium text-sumi">
                「まだ要件が固まっていない」<br />
                「何から始めればよいかわからない」
              </p>
              <p>そのような段階でもお気軽にご相談ください。</p>
              <p>
                ヒアリングから丁寧にサポートし、お客様に最適なシステムをご提案いたします。
              </p>
              <p>
                最後まで責任を持って対応いたしますので、どうぞよろしくお願いいたします。
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-shu-600 px-6 py-3 text-sm font-semibold text-white hover:bg-shu-700 transition-colors"
              >
                お問い合わせはこちら
                <span aria-hidden>→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
