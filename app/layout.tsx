import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const serifJP = Noto_Serif_JP({
  weight: ["400", "600", "700", "900"],
  variable: "--font-serif",
  display: "swap",
  preload: false,
});

const sansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "NOVATYNC | AI × Full Stack × Cloud Innovation",
  description:
    "NOVATYNCは、生成AI、Webシステム、クラウド、そして最先端技術を融合し、企業のDXを加速させるITパートナーです。",
  keywords: ["AI開発", "フルスタック", "クラウド", "DX", "Next.js", "React", "NOVATYNC"],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "NOVATYNC | AI × Full Stack × Cloud Innovation",
    description: "Creating Tomorrow's Intelligence.",
    siteName: "NOVATYNC",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`h-full ${serifJP.variable} ${sansJP.variable}`}>
      <body className="min-h-full antialiased bg-white text-slate-900">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
