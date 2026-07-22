import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "サービス",
  description: "AI開発・Web開発・クラウド・モバイル・UI/UX・コンサルティング。NOVATYNCが提供する6つのサービス。",
};

export default function ServicePage() {
  return (
    <>
      <PageHeader
        en="Service"
        ja="サービス"
        desc="AIからクラウドまで、お客様の課題を解決するソリューションを幅広く提供しています。カードをクリックすると詳細をご確認いただけます。"
      />
      <div className="page-content">
        <Services />
      </div>
    </>
  );
}
