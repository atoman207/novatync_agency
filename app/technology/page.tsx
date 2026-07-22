import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Technology from "@/components/Technology";

export const metadata: Metadata = {
  title: "テクノロジー",
  description: "NOVATYNCが採用するモダンな技術スタックと開発フロー。React・Next.js・Python・AWS・OpenAIなど。",
};

export default function TechnologyPage() {
  return (
    <>
      <PageHeader
        en="Technology"
        ja="テクノロジー"
        desc="世界基準の技術スタックで、スケーラブルかつ保守性の高いシステムを構築します。"
      />
      <div className="page-content">
        <Technology />
      </div>
    </>
  );
}
