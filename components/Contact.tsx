"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  company: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  website: string;
  formStartedAt: number;
};

export default function Contact() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now());

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          formStartedAt,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setSubmitError(result.error ?? "送信に失敗しました。しばらくしてから再度お試しください。");
        return;
      }

      setSubmitted(true);
      reset();
      setFormStartedAt(Date.now());
    } catch {
      setSubmitError("送信に失敗しました。しばらくしてから再度お試しください。");
    }
  };

  return (
    <section id="contact" className="section-padding relative bg-white">
      <div ref={ref} className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6">
        <div className="mb-10 text-center sm:mb-12">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-xs tracking-[0.3em] text-shu-600 mb-4 uppercase">Contact</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-5xl">
            Let&apos;s Build Together.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="text-stone-500 text-sm">
            プロジェクトのご相談からご質問まで、お気軽にどうぞ。
          </motion.p>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-lg sm:p-6 md:p-10">
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} className="py-10 text-center sm:py-12">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-shu-200 bg-shu-50 text-2xl text-shu-600 sm:h-16 sm:w-16 sm:text-3xl">✓</div>
              <h3 className="mb-2 text-lg font-bold text-sumi sm:text-xl">送信完了しました</h3>
              <p className="text-stone-500 text-sm">お問い合わせいただきありがとうございます。<br />担当者より3営業日以内にご連絡いたします。</p>
              <button onClick={() => { setSubmitted(false); setSubmitError(""); }} className="mt-6 text-shu-600 text-sm hover:text-shu-700 transition-colors">別のお問い合わせをする →</button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
              <input
                {...register("website")}
                type="text"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {[
                { id: "company", label: "会社名",        placeholder: "NOVATYNC株式会社",    required: false },
                { id: "name",    label: "担当者名",       placeholder: "山田 太郎",            required: true  },
                { id: "email",   label: "メールアドレス", placeholder: "contact@example.com", required: true, type: "email" },
                { id: "phone",   label: "電話番号",       placeholder: "03-0000-0000",         required: false },
              ].map((field) => (
                <div key={field.id}>
                  <label className="mb-1.5 block text-xs font-semibold tracking-wider text-stone-700">
                    {field.label}{field.required && <span className="text-shu-600 ml-1">*</span>}
                  </label>
                  <input
                    {...register(field.id as keyof FormData, {
                      required: field.required ? `${field.label}は必須です` : false,
                      ...(field.type === "email" && { pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "有効なメールアドレスを入力してください" } }),
                    })}
                    type={field.type || "text"}
                    placeholder={field.placeholder}
                    className="w-full rounded-xl border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-sumi placeholder-stone-400 transition-all focus:border-shu-500 focus:outline-none focus:ring-2 focus:ring-shu-200 sm:px-4 sm:py-3"
                  />
                  {errors[field.id as keyof FormData] && (
                    <p className="mt-1 text-xs text-rose-500">{errors[field.id as keyof FormData]?.message}</p>
                  )}
                </div>
              ))}

              <div>
                <label className="mb-1.5 block text-xs font-semibold tracking-wider text-stone-700">
                  お問い合わせ内容 <span className="text-shu-600">*</span>
                </label>
                <textarea
                  {...register("message", {
                    required: "お問い合わせ内容は必須です",
                    minLength: {
                      value: 10,
                      message: "お問い合わせ内容を10文字以上で入力してください",
                    },
                  })}
                  rows={5}
                  placeholder="プロジェクトの概要、ご要望などをご記入ください。"
                  className="w-full resize-none rounded-xl border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-sumi placeholder-stone-400 transition-all focus:border-shu-500 focus:outline-none focus:ring-2 focus:ring-shu-200 sm:px-4 sm:py-3"
                />
                {errors.message && <p className="mt-1 text-xs text-rose-500">{errors.message.message}</p>}
              </div>

              {submitError && (
                <p className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="contact-submit-btn w-full rounded-xl bg-shu-700 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-shu-800 disabled:cursor-wait sm:py-4"
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <><svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>送信中...</>
                  ) : "送信する"}
                </span>
              </button>

              <p className="text-center text-xs text-stone-500">送信いただいた情報は、プライバシーポリシーに従って管理されます。</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
