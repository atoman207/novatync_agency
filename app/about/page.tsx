import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import CompanyInfo from "@/components/CompanyInfo";

export const metadata: Metadata = {
  title: "会社概要 | NOVATYNC",
  description: "NOVATYNCの会社情報、チームメンバー、CEOメッセージ。AI・フルスタック・クラウドの少数精鋭チーム。",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        en="About"
        ja="会社について"
        desc="NOVATYNCは、AI・Web・クラウド技術を軸に、企業の課題を解決する少数精鋭のITパートナーです。"
      />
      <div className="page-content">
        <About />
        <CompanyInfo />
      </div>
    </>
  );
}
