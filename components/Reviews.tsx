"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

type Review = {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  body: string;
  avatar: string;
};

/**
 * Avatar images are hosted on Unsplash (real portrait photos, linked online).
 * Cropped to faces for consistent circular avatars.
 */
const reviews: Review[] = [
  {
    id: "1",
    name: "佐藤 健太",
    role: "CTO",
    company: "テックフロンティア株式会社",
    rating: 5,
    body: "生成AIの導入で社内の問い合わせ対応を自動化できました。要件整理から本番運用まで、スピードと品質のバランスが非常に高いです。",
    avatar:
      "https://images.unsplash.com/photo-1548783300-70b41bc84f56?auto=format&fit=crop&w=200&h=200&q=80&crop=faces",
  },
  {
    id: "2",
    name: "鈴木 美咲",
    role: "プロダクトマネージャー",
    company: "クラウドワークス合同会社",
    rating: 5,
    body: "フルスタックでの開発力とコミュニケーションの丁寧さが印象的でした。リリース後の改善提案まで伴走してもらえ、安心して任せられます。",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80&crop=faces",
  },
  {
    id: "3",
    name: "田中 翔",
    role: "代表取締役",
    company: "ノーザングリーン株式会社",
    rating: 5,
    body: "スタートアップ特有のスピード感に合わせてくれる開発体制が助かりました。UIも洗練されていて、顧客からの評価も上がっています。",
    avatar:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=200&h=200&q=80&crop=faces",
  },
  {
    id: "4",
    name: "伊藤 あかり",
    role: "マーケティング部長",
    company: "ブランディングラボ",
    rating: 5,
    body: "デザインと実装が一体で進むので、手戻りがほとんどありませんでした。世界水準の体験設計を、現実的なスケジュールで届けてくれます。",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80&crop=faces",
  },
  {
    id: "5",
    name: "渡辺 直樹",
    role: "情報システム部長",
    company: "東日本ロジスティクス",
    rating: 4,
    body: "社内レガシーシステムのクラウド移行を依頼しました。セキュリティとコスト最適化まで含めた提案があり、経営層への説明もスムーズでした。",
    avatar:
      "https://images.unsplash.com/photo-1484995978482-cf913162930c?auto=format&fit=crop&w=200&h=200&q=80&crop=faces",
  },
  {
    id: "6",
    name: "山本 莉子",
    role: "UXデザイナー",
    company: "モビールスタジオ",
    rating: 5,
    body: "Figmaのデザインシステムをそのまま実装品質に落とし込んでくれます。細部へのこだわりが強く、プロダクトの完成度が一段上がりました。",
    avatar:
      "https://images.unsplash.com/photo-1505440484611-23c171ad6e96?auto=format&fit=crop&w=200&h=200&q=80&crop=faces",
  },
  {
    id: "7",
    name: "中村 悠人",
    role: "エンジニアリングマネージャー",
    company: "データブリッジ株式会社",
    rating: 5,
    body: "コード品質が高く、レビュー文化も丁寧です。LLMを使った社内ツール開発では、PoCから本番まで一貫した支援を受けられました。",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80&crop=faces",
  },
  {
    id: "8",
    name: "小林 恵",
    role: "事業企画",
    company: "リテールネクスト",
    rating: 5,
    body: "業務課題のヒアリングが深く、単なる受託ではなくパートナーとして一緒に考えてくれます。納品後の運用相談にも迅速に応えてくれました。",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80&crop=faces",
  },
  {
    id: "9",
    name: "加藤 大輝",
    role: "CEO",
    company: "スマートファクトリー合同会社",
    rating: 4,
    body: "IoTデータの可視化ダッシュボードを短期間で構築。現場の使いやすさを優先したUIが好評で、導入定着率が想定以上でした。",
    avatar:
      "https://images.unsplash.com/photo-1532236204992-f5e85c024202?auto=format&fit=crop&w=200&h=200&q=80&crop=faces",
  },
  {
    id: "10",
    name: "吉田 真由",
    role: "人事責任者",
    company: "ピープルテック株式会社",
    rating: 5,
    body: "採用サイトと応募管理の仕組みを刷新してもらいました。応募完了率が改善し、採用チームの工数も大幅に削減できています。",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80&crop=faces",
  },
];

const PAGE_SIZE = 3;

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-3.5 w-3.5 ${i < rating ? "text-gold-500" : "text-stone-200"}`}
          fill="currentColor"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, delay: (index % PAGE_SIZE) * 0.05 }}
      className="rounded-2xl border border-stone-100 bg-white p-6 shadow-sm"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="relative h-12 w-12 overflow-hidden rounded-full border border-stone-200 bg-stone-100">
          <Image
            src={review.avatar}
            alt={`${review.name}のアバター`}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-sumi">{review.name}</p>
          <p className="truncate text-xs text-stone-400">
            {review.role} / {review.company}
          </p>
        </div>
        <Stars rating={review.rating} />
      </div>
      <p className="text-sm leading-relaxed text-stone-600">{review.body}</p>
    </motion.article>
  );
}

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visibleReviews = reviews.slice(0, visibleCount);
  const hasMore = visibleCount < reviews.length;
  const canCollapse = visibleCount > PAGE_SIZE;

  return (
    <section id="reviews" className="section-padding relative overflow-hidden bg-washi-deep">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-shu-100/40 blur-[110px]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="mb-4 text-xs uppercase tracking-[0.3em] text-shu-600"
          >
            Reviews
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-3 text-2xl font-bold sm:text-3xl md:text-5xl"
          >
            お客様の声
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-sm text-stone-500 md:text-base"
          >
            実際にプロジェクトをご依頼いただいたお客様からの評価です。
          </motion.p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4">
          <AnimatePresence initial={false} mode="popLayout">
            {visibleReviews.map((review, index) => (
              <ReviewCard key={review.id} review={review} index={index} />
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.35 }}
          className="mt-8 flex flex-col items-center gap-3"
        >
          <p className="text-xs text-stone-400">
            {visibleCount} / {reviews.length} 件表示中
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {hasMore && (
              <button
                type="button"
                onClick={() => setVisibleCount((count) => Math.min(count + PAGE_SIZE, reviews.length))}
                className="rounded-xl bg-shu-700 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-shu-800"
              >
                See More
              </button>
            )}
            {canCollapse && (
              <button
                type="button"
                onClick={() => setVisibleCount(PAGE_SIZE)}
                className="rounded-xl border border-stone-200 bg-white px-7 py-3 text-sm font-semibold text-stone-600 transition hover:border-shu-200 hover:text-shu-700"
              >
                See Less
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
