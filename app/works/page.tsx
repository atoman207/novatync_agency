import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Works from "@/components/Works";
import { getPortfolioFromDb } from "@/lib/portfolio/db";
import { buildPortfolioData } from "@/lib/portfolio/utils";

export const metadata: Metadata = {
  title: "実績・事例",
  description: "NOVATYNCがこれまでに制作したプロジェクトを、スタック別にご紹介します。",
};

export const dynamic = "force-dynamic";

export default async function WorksPage() {
  let portfolio;

  try {
    portfolio = await getPortfolioFromDb();
  } catch {
    portfolio = buildPortfolioData([]);
  }

  return (
    <>
      <PageHeader
        en="Works"
        ja="実績・事例"
        desc="NOVATYNCがこれまで制作してきたサイトを、スタック別に一覧でご紹介します。"
      />
      <div className="page-content">
        <Works portfolio={portfolio} />
      </div>
    </>
  );
}
