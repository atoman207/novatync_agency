import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import CompanyInfo from "@/components/CompanyInfo";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "フルスタックAIエンジニア・水藤飛来のプロフィール。要件定義から設計・開発・インフラ・運用まで一貫対応。AI業務効率化・Web/SaaS開発。",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        en="About"
        ja="会社について"
        desc="フルスタックAIエンジニアとして、要件定義から運用まで一貫対応。業務改善と事業成長につながるソリューションをご提案します。"
      />
      <div className="page-content">
        <About />
        <CompanyInfo />
      </div>
    </>
  );
}
