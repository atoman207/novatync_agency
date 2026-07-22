"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ServiceModal, { type ServiceDetail } from "./ServiceModal";

function devicon(path: string) {
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;
}

function simpleIcon(slug: string, hex?: string) {
  return `https://cdn.simpleicons.org/${slug}${hex ? `/${hex}` : ""}`;
}

function lucide(name: string) {
  return `https://cdn.jsdelivr.net/npm/lucide-static@0.469.0/icons/${name}.svg`;
}

/** OpenAI's mark ships colorless from third-party CDNs, so it's inlined here. */
function OpenAIMark({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="#74AA9C" style={{ display: "block" }}>
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  );
}

type StackIcon = { name: string; src?: string; isOpenAI?: boolean; wide?: boolean };

type Service = ServiceDetail & {
  description: string;
  stacks: StackIcon[];
  iconSrc: string;
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
    stacks: [
      { name: "OpenAI", isOpenAI: true },
      { name: "Claude", src: simpleIcon("anthropic", "D4A27F") },
      { name: "Gemini", src: simpleIcon("googlegemini", "8E75F0") },
      { name: "LangChain", src: simpleIcon("langchain") },
      { name: "Hugging Face", src: simpleIcon("huggingface", "FFD21E") },
      { name: "Python", src: devicon("python/python-original.svg") },
    ],
    iconSrc: lucide("sparkles"),
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
    stacks: [
      { name: "React", src: devicon("react/react-original.svg") },
      { name: "Next.js", src: simpleIcon("nextdotjs", "000000") },
      { name: "Vue", src: devicon("vuejs/vuejs-original.svg") },
      { name: "Nuxt", src: devicon("nuxtjs/nuxtjs-original.svg") },
      { name: "Laravel", src: devicon("laravel/laravel-original.svg") },
      { name: "Node.js", src: devicon("nodejs/nodejs-original.svg") },
    ],
    iconSrc: lucide("code-xml"),
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
    stacks: [
      { name: "AWS", src: devicon("amazonwebservices/amazonwebservices-original-wordmark.svg"), wide: true },
      { name: "Azure", src: devicon("azure/azure-original.svg") },
      { name: "Docker", src: devicon("docker/docker-original.svg") },
      { name: "Terraform", src: devicon("terraform/terraform-original.svg") },
      { name: "Kubernetes", src: devicon("kubernetes/kubernetes-plain.svg") },
      { name: "GitHub Actions", src: simpleIcon("githubactions", "2088FF") },
    ],
    iconSrc: lucide("cloud"),
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
    stacks: [
      { name: "Flutter", src: devicon("flutter/flutter-original.svg") },
      { name: "React Native", src: devicon("react/react-original.svg") },
      { name: "Expo", src: simpleIcon("expo", "000020") },
      { name: "iOS", src: devicon("apple/apple-original.svg") },
      { name: "Android", src: devicon("android/android-original.svg") },
    ],
    iconSrc: lucide("smartphone"),
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
    stacks: [
      { name: "Figma", src: devicon("figma/figma-original.svg") },
      { name: "Storybook", src: simpleIcon("storybook", "FF4785") },
      { name: "Adobe XD", src: devicon("xd/xd-plain.svg") },
      { name: "Sketch", src: devicon("sketch/sketch-original.svg") },
      { name: "Illustrator", src: devicon("illustrator/illustrator-plain.svg") },
    ],
    iconSrc: lucide("palette"),
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
    stacks: [
      { name: "GitHub", src: simpleIcon("github", "181717") },
      { name: "Notion", src: simpleIcon("notion", "000000") },
      { name: "Jira", src: simpleIcon("jira", "0052CC") },
      { name: "Miro", src: simpleIcon("miro", "050038") },
      { name: "Slack", src: devicon("slack/slack-original.svg") },
    ],
    iconSrc: lucide("briefcase-business"),
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.iconSrc}
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5 object-contain opacity-80"
                  style={{ filter: "invert(28%) sepia(42%) saturate(900%) hue-rotate(100deg) brightness(90%)" }}
                  draggable={false}
                />
              </div>
              <h3 className="text-sumi font-bold text-lg mb-1">{s.title}</h3>
              <p className="text-stone-400 text-[11px] mb-2 tracking-wide">{s.titleJa}</p>
              <p className="text-stone-500 text-sm leading-relaxed mb-5">{s.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {s.stacks.map((stack) => (
                  <span
                    key={stack.name}
                    title={stack.name}
                    className={`flex h-9 w-9 items-center justify-center rounded-lg border ${s.tagBorder} ${s.tagBg} transition-transform hover:scale-110`}
                  >
                    {stack.isOpenAI ? (
                      <OpenAIMark />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={stack.src}
                        alt={stack.name}
                        className={stack.wide ? "h-4 w-7 object-contain" : "h-5 w-5 object-contain"}
                        draggable={false}
                      />
                    )}
                  </span>
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
