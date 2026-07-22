"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type RecommendState = {
  count: number;
  recommended: boolean;
};

export default function RecommendButton() {
  const [count, setCount] = useState(0);
  const [recommended, setRecommended] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [burst, setBurst] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const response = await fetch("/api/recommend", { cache: "no-store" });
        const data = (await response.json()) as RecommendState & { error?: string };
        if (cancelled) return;
        if (!response.ok) {
          setError(data.error ?? "読み込みに失敗しました");
          return;
        }
        setCount(data.count ?? 0);
        setRecommended(Boolean(data.recommended));
      } catch {
        if (!cancelled) setError("読み込みに失敗しました");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  const onRecommend = async () => {
    if (recommended || submitting || loading) return;
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/recommend", { method: "POST" });
      const data = (await response.json()) as RecommendState & {
        alreadyRecommended?: boolean;
        error?: string;
      };

      if (!response.ok) {
        setError(data.error ?? "送信に失敗しました");
        return;
      }

      setCount(data.count ?? count);
      setRecommended(true);
      if (!data.alreadyRecommended) {
        setBurst(true);
        window.setTimeout(() => setBurst(false), 700);
      }
    } catch {
      setError("送信に失敗しました");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed top-20 right-3 z-[60] flex flex-col items-center gap-1.5 sm:top-24 sm:right-5">
      <motion.button
        type="button"
        onClick={onRecommend}
        disabled={loading || submitting || recommended}
        aria-label={recommended ? "おすすめ済み" : "このサイトをおすすめする"}
        aria-pressed={recommended}
        title={recommended ? "このIPからは既におすすめ済みです" : "Recommend"}
        whileTap={recommended ? undefined : { scale: 0.92 }}
        className={`relative flex h-12 w-12 items-center justify-center rounded-full border shadow-lg transition sm:h-14 sm:w-14 ${
          recommended
            ? "cursor-default border-shu-300 bg-shu-600 text-white shadow-shu-600/30"
            : "border-shu-200 bg-white text-shu-700 hover:border-shu-300 hover:bg-shu-50 shadow-shu-100"
        } disabled:opacity-100`}
      >
        <AnimatePresence>
          {burst && (
            <motion.span
              className="pointer-events-none absolute inset-0 rounded-full bg-shu-400/30"
              initial={{ scale: 0.6, opacity: 0.8 }}
              animate={{ scale: 1.8, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55 }}
            />
          )}
        </AnimatePresence>
        <svg
          viewBox="0 0 24 24"
          className="relative h-6 w-6 sm:h-7 sm:w-7"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M2 10.5a1.5 1.5 0 0 1 1.5-1.5H6v10.25H3.5A1.5 1.5 0 0 1 2 17.75V10.5Zm5.25-1.34c0-1.8 1.01-3.07 2.26-3.98.66-.48 1.4-.86 2.05-1.12.4-.16.76.17.76.6v2.05c0 .9.04 1.58.35 2.04H20a2 2 0 0 1 1.92 2.56l-1.37 4.7A3.5 3.5 0 0 1 17.2 18.75H9.5A2.25 2.25 0 0 1 7.25 16.5V9.16Z" />
        </svg>
      </motion.button>

      <div
        className={`min-w-10 rounded-full px-2.5 py-1 text-center text-xs font-semibold tabular-nums shadow-sm ${
          recommended
            ? "bg-shu-600 text-white"
            : "border border-stone-200 bg-white text-sumi"
        }`}
        aria-live="polite"
      >
        {loading ? "…" : count.toLocaleString("ja-JP")}
      </div>

      <span className="text-[10px] font-medium tracking-wide text-stone-500">
        {recommended ? "Recommended" : "Recommend"}
      </span>

      {error && (
        <p className="max-w-28 rounded-lg bg-rose-50 px-2 py-1 text-center text-[10px] leading-tight text-rose-600">
          {error}
        </p>
      )}
    </div>
  );
}
