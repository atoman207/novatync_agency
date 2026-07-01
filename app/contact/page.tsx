import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "お問い合わせ | NOVATYNC",
  description: "プロジェクトのご相談・ご質問はこちらから。担当者より3営業日以内にご連絡いたします。",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        en="Contact"
        ja="お問い合わせ"
        desc="プロジェクトのご相談から技術的なご質問まで、お気軽にご連絡ください。"
      />
      <div className="page-content">
        <Contact />
      </div>
    </>
  );
}
