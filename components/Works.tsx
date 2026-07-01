"use client";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import SitePreviewImage from "@/components/SitePreviewImage";
import type { PortfolioData } from "@/lib/portfolio/types";
import { OTHER_FILTER } from "@/lib/portfolio/types";
import {
  getCategoriesForFilter,
  getSiteName,
  isOtherCategory,
} from "@/lib/portfolio/utils";

const ALL_FILTER = "all";

function filterTabClass(isActive: boolean) {
  return isActive
    ? "border-yellow-500 bg-yellow-300 text-slate-900 shadow-md ring-2 ring-yellow-400/60"
    : "border-yellow-300 bg-yellow-100 text-slate-800 hover:bg-yellow-200";
}

type Props = {
  portfolio: PortfolioData;
};

export default function Works({ portfolio }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeFilter, setActiveFilter] = useState(ALL_FILTER);
  const [searchQuery, setSearchQuery] = useState("");

  const { skillCategories, totalProjectCount, otherProjectCount } = portfolio;

  const filteredCategories = useMemo(
    () => getCategoriesForFilter(portfolio, activeFilter, searchQuery),
    [portfolio, activeFilter, searchQuery]
  );

  const visibleProjectCount = useMemo(
    () => filteredCategories.reduce((count, category) => count + category.sites.length, 0),
    [filteredCategories]
  );

  const hasActiveFilters =
    activeFilter !== ALL_FILTER || searchQuery.trim().length > 0;

  return (
    <section id="works" className="section-padding relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-sky-100/40 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-xs tracking-[0.3em] text-sky-500 mb-3 uppercase"
            >
              Works
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-slate-900"
            >
              実績・事例
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25 }}
            className="text-slate-400 text-sm max-w-xs text-right hidden md:block"
          >
            技術スタック別に整理した制作実績をご覧いただけます。
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mb-10 rounded-3xl border border-yellow-300 bg-yellow-50 p-5 md:p-6 shadow-sm"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <label htmlFor="portfolio-search" className="sr-only">
                Search portfolio
              </label>
              <svg
                viewBox="0 0 24 24"
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
              <input
                id="portfolio-search"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="サイト名・URL・スタックで検索"
                className="w-full rounded-2xl border border-yellow-300 bg-white py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-yellow-500 focus:ring-4 focus:ring-yellow-200"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
              <span className="rounded-full border border-yellow-300 bg-yellow-200 px-3 py-1.5 font-medium text-slate-800">
                {visibleProjectCount} / {totalProjectCount} projects
              </span>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={() => {
                    setActiveFilter(ALL_FILTER);
                    setSearchQuery("");
                  }}
                  className="rounded-full border border-yellow-400 bg-white px-3 py-1.5 text-slate-700 transition hover:bg-yellow-100"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
            Skills / Stacks
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveFilter(ALL_FILTER)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${filterTabClass(activeFilter === ALL_FILTER)}`}
            >
              All
              <span className="ml-2 text-xs opacity-80">{totalProjectCount}</span>
            </button>

            {skillCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveFilter(category.id)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${filterTabClass(activeFilter === category.id)}`}
              >
                {category.label}
                <span className="ml-2 text-xs opacity-80">{category.sites.length}</span>
              </button>
            ))}

            <button
              type="button"
              onClick={() => setActiveFilter(OTHER_FILTER)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${filterTabClass(activeFilter === OTHER_FILTER)}`}
            >
              Other
              <span className="ml-2 text-xs opacity-80">{otherProjectCount}</span>
            </button>
          </div>
        </motion.div>

        {filteredCategories.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-200 bg-white px-6 py-16 text-center">
            <p className="text-lg font-semibold text-slate-800">該当するプロジェクトが見つかりませんでした</p>
            <p className="mt-2 text-sm text-slate-500">
              検索キーワードやスタックフィルターを変更してお試しください。
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.05 * categoryIndex }}
              >
                <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-yellow-600">
                      {isOtherCategory(category) ? "Other" : "Skill"}
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">{category.label}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.stacks.map((stack) => (
                      <span
                        key={stack}
                        className="rounded-full border border-yellow-300 bg-yellow-200 px-2.5 py-1 text-xs font-medium text-slate-800"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {category.sites.map((site) => (
                    <a
                      key={site.id}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-yellow-400 hover:shadow-lg"
                    >
                      <SitePreviewImage
                        url={site.url}
                        imageUrl={site.image_url}
                        categoryLabel={category.label}
                      />

                      <div className="p-4">
                        <div className="mb-2 flex items-start justify-between gap-3">
                          <h4 className="text-sm font-semibold text-slate-900 break-all">
                            {getSiteName(site.url)}
                          </h4>
                          <span className="shrink-0 rounded-full border border-yellow-300 bg-yellow-100 px-2 py-0.5 text-[10px] font-medium text-slate-700 transition group-hover:bg-yellow-200">
                            Visit
                          </span>
                        </div>
                        <p className="mb-3 break-all text-xs text-slate-500">{site.url}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {category.stacks.map((stack) => (
                            <span
                              key={`${site.id}-${stack}`}
                              className="rounded bg-yellow-100 px-2 py-0.5 text-[11px] text-slate-700"
                            >
                              {stack}
                            </span>
                          ))}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
