import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Career from "@/components/Career";

export const metadata: Metadata = {
  title: "採用情報",
  description: "NOVATYNCで一緒に未来を創る仲間を募集しています。フロントエンド・バックエンド・AI・クラウドエンジニア募集中。",
};

export default function CareerPage() {
  return (
    <>
      <PageHeader
        en="Career"
        ja="採用情報"
        desc="チームNOVATYNCで一緒に未来を創りませんか。全ポジション、正社員・業務委託でのご応募を歓迎しています。"
      />
      <div className="page-content">
        <Career />
      </div>
    </>
  );
}
