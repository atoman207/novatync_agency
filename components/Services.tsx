"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ServiceModal, { type ServiceDetail } from "./ServiceModal";

type Service = ServiceDetail & {
  description: string;
  tags: string[];
  icon: React.ReactNode;
  tagAccent: string;
  tagBg: string;
  tagBorder: string;
};

const services: Service[] = [
  {
    title: "AI Development",
    titleJa: "AI開発",
    description: "生成AIの設計・実装から、LLMの事業統合まで対応します。",
    overview: "ChatGPT・Claude・Geminiなどの最新LLMを活用し、RAGシステム・AIエージェント・カスタムモデルの開発・統合を行います。PoC（概念実証）から本番環境まで一貫して対応します。",
    steps: ["要件定義・PoC設計", "LLM選定・アーキテクチャ設計", "RAG／ファインチューニング実装", "本番システムへの統合", "モニタリング・継続改善"],
    features: ["RAGシステム構築", "AIエージェント開発", "Fine-tuning", "プロンプトエンジニアリング", "ベクトルDB設計", "MLOps構築", "LLM評価基盤"],
    tags: ["ChatGPT", "LLM", "RAG", "OpenAI", "Claude", "Gemini", "Agent"],
    icon: (<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>),
    accent: "text-shu-600",
    border: "border-shu-100",
    threeColor: "#16a34a",
    tagAccent: "text-shu-600", tagBg: "bg-shu-50", tagBorder: "border-shu-100",
  },
  {
    title: "Web Development",
    titleJa: "Web開発",
    description: "最新フレームワークでパフォーマンスと保守性を両立したWebアプリを構築します。",
    overview: "React・Next.jsをはじめとするモダンフレームワークを軸に、フロントエンドからバックエンドAPIまでフルスタックで開発します。Core Web Vitals・SEO・アクセシビリティを高い基準で実装します。",
    steps: ["要件定義・技術選定", "UI/UXデザイン", "フロントエンド開発", "バックエンドAPI開発", "テスト・品質保証", "デプロイ・運用"],
    features: ["SPA / SSR / SSG", "API設計・開発", "DB設計", "E2Eテスト", "パフォーマンス最適化", "SEO対策", "アクセシビリティ対応"],
    tags: ["React", "Next.js", "Vue", "Nuxt", "Laravel", "Node.js"],
    icon: (<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>),
    accent: "text-gold-700",
    border: "border-gold-200",
    threeColor: "#84cc16",
    tagAccent: "text-gold-700", tagBg: "bg-gold-50", tagBorder: "border-gold-200",
  },
  {
    title: "Cloud",
    titleJa: "クラウド",
    description: "AWS・AzureのインフラからCI/CDパイプラインまで、クラウドネイティブな環境を構築します。",
    overview: "AWS・Azureを中心にクラウドネイティブなインフラを設計・構築します。Terraformを用いたIaC化、Dockerコンテナ化、GitHub ActionsによるCI/CDパイプラインで安定した運用体制を確立します。",
    steps: ["現状分析・要件定義", "アーキテクチャ設計", "IaC実装（Terraform）", "CI/CDパイプライン構築", "監視・アラート設定", "移行・本番展開"],
    features: ["AWS / Azure設計", "Terraform IaC", "Docker / Kubernetes", "CI/CD構築", "コスト最適化", "セキュリティ設計", "障害対応体制"],
    tags: ["AWS", "Azure", "Docker", "Terraform", "CI/CD", "Kubernetes"],
    icon: (<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>),
    accent: "text-ai-600",
    border: "border-ai-100",
    threeColor: "#10b981",
    tagAccent: "text-ai-600", tagBg: "bg-ai-50", tagBorder: "border-ai-100",
  },
  {
    title: "Mobile",
    titleJa: "モバイル開発",
    description: "iOS・Androidのクロスプラットフォームアプリ開発でモバイル体験を最大化します。",
    overview: "FlutterおよびReact Nativeを使用し、iOS・Android両対応のクロスプラットフォームアプリを開発します。ネイティブ品質のUXと高いパフォーマンスを両立させます。",
    steps: ["要件定義・画面設計", "UIデザイン", "クロスプラットフォーム開発", "テスト（iOS / Android）", "ストア申請・リリース", "運用・アップデート対応"],
    features: ["Flutter / React Native", "Push通知", "オフライン対応", "In-App Purchase", "ストア申請サポート", "パフォーマンス最適化"],
    tags: ["Flutter", "React Native", "iOS", "Android"],
    icon: (<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>),
    accent: "text-emerald-600",
    border: "border-emerald-100",
    threeColor: "#34d399",
    tagAccent: "text-emerald-600", tagBg: "bg-emerald-50", tagBorder: "border-emerald-100",
  },
  {
    title: "UI/UX Design",
    titleJa: "UI/UX デザイン",
    description: "ユーザー中心のデザインプロセスで、世界水準の体験を設計します。",
    overview: "Figmaを軸にしたデザインシステムの構築から、ユーザーリサーチ・プロトタイピング・ユーザビリティテストまで包括的に対応します。アクセシビリティ（WCAG 2.1）準拠のデザインを提供します。",
    steps: ["ユーザーリサーチ", "情報アーキテクチャ設計", "ワイヤーフレーム作成", "UIデザイン・プロトタイプ", "ユーザビリティテスト", "デザインシステム納品"],
    features: ["Figmaデザインシステム", "プロトタイピング", "ユーザーリサーチ", "アクセシビリティ対応", "Storybook連携", "コンポーネントライブラリ"],
    tags: ["Figma", "Design System", "Storybook", "Accessibility"],
    icon: (<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>),
    accent: "text-teal-600",
    border: "border-teal-100",
    threeColor: "#4ade80",
    tagAccent: "text-teal-600", tagBg: "bg-teal-50", tagBorder: "border-teal-100",
  },
  {
    title: "Consulting",
    titleJa: "コンサルティング",
    description: "技術戦略からCTO支援まで、事業の根幹から伴走するコンサルティングを提供します。",
    overview: "DX推進・技術アーキテクチャ設計・チーム組成支援・CTO支援まで、技術と事業を橋渡しするコンサルティングを提供します。単なる提案に留まらず、実行フェーズまで共に走ります。",
    steps: ["現状分析・課題定義", "技術戦略立案", "ロードマップ策定", "実行支援・チーム組成", "KPI設計・効果測定", "継続的な改善サポート"],
    features: ["DX推進支援", "技術アーキテクチャ設計", "CTO支援", "エンジニアチーム組成", "コードレビュー", "採用・育成支援", "技術選定コンサル"],
    tags: ["DX", "Architecture", "Tech Lead", "CTO Support"],
    icon: (<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>),
    accent: "text-lime-600",
    border: "border-lime-100",
    threeColor: "#a3e635",
    tagAccent: "text-lime-600", tagBg: "bg-lime-50", tagBorder: "border-lime-100",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [selected, setSelected] = useState<ServiceDetail | null>(null);

  return (
    <section id="service" className="section-padding relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-shu-100/30 rounded-full blur-[100px]" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-xs tracking-[0.3em] text-shu-600 mb-4 uppercase">Service</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="text-3xl md:text-5xl font-bold text-sumi mb-3">
            What I Do
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }} className="text-stone-400 text-sm">
            カードをクリックすると詳細を確認できます
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.07 }}
              onClick={() => setSelected(s)}
              className={`bg-white rounded-2xl p-7 border ${s.border} group hover:scale-[1.025] hover:shadow-lg transition-all duration-300 cursor-pointer`}
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br from-stone-50 to-stone-100 border ${s.border} flex items-center justify-center mb-5 ${s.accent} group-hover:scale-110 transition-transform duration-300`}>
                {s.icon}
              </div>
              <h3 className="text-sumi font-bold text-lg mb-1">{s.title}</h3>
              <p className="text-stone-400 text-[11px] mb-2 tracking-wide">{s.titleJa}</p>
              <p className="text-stone-500 text-sm leading-relaxed mb-5">{s.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {s.tags.map((tag) => (
                  <span key={tag} className={`text-xs px-2.5 py-0.5 rounded-md ${s.tagBg} ${s.tagAccent} border ${s.tagBorder}`}>{tag}</span>
                ))}
              </div>
              <div className={`text-xs ${s.accent} flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
                詳細を見る <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ServiceModal service={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
