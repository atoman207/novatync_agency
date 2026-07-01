import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Works from "@/components/Works";

export const metadata: Metadata = {
  title: "実績・事例 | NOVATYNC",
  description: "NOVATYNCが手がけたAI開発・Web開発・クラウド移行・DXプラットフォームの実績事例をご紹介します。",
};

export default function WorksPage() {
  return (
    <>
      <PageHeader
        en="Works"
        ja="実績・事例"
        desc="NOVATYNCが手がけたプロジェクトの一部をご紹介します。守秘義務により企業名・詳細情報は非公開としております。"
      />
      <div className="page-content">
        <Works />
      </div>
    </>
  );
}
