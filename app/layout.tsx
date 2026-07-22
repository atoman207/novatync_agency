import type { Metadata } from "next";
import Script from "next/script";
import "@fontsource/noto-sans-jp/400.css";
import "@fontsource/noto-sans-jp/500.css";
import "@fontsource/noto-sans-jp/700.css";
import "@fontsource/noto-serif-jp/400.css";
import "@fontsource/noto-serif-jp/600.css";
import "@fontsource/noto-serif-jp/700.css";
import "@fontsource/noto-serif-jp/900.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import ScrollSceneClient from "@/components/ScrollSceneClient";

export const metadata: Metadata = {
  title: {
    default: "NOVATYNC開発会社 | AI × Full Stack × Cloud Innovation",
    template: "%s | NOVATYNC開発会社",
  },
  description:
    "NOVATYNCは、生成AI、Webシステム、クラウド、そして最先端技術を融合し、企業のDXを加速させるITパートナーです。",
  keywords: ["AI開発", "フルスタック", "クラウド", "DX", "Next.js", "React", "NOVATYNC"],
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "64x64" }],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "NOVATYNC開発会社 | AI × Full Stack × Cloud Innovation",
    description: "Creating Tomorrow's Intelligence.",
    siteName: "NOVATYNC開発会社",
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
    <html lang="ja" className="h-full">
      <body className="min-h-full antialiased bg-washi text-sumi">
        <Script id="clear-stale-sw" strategy="beforeInteractive">{`
          (function () {
            if (!("serviceWorker" in navigator)) return;
            navigator.serviceWorker.getRegistrations().then(function (regs) {
              var hadWorker = regs.length > 0;
              return Promise.all(regs.map(function (r) { return r.unregister(); })).then(function () {
                if (!("caches" in window)) return hadWorker;
                return caches.keys().then(function (keys) {
                  return Promise.all(keys.map(function (k) { return caches.delete(k); }));
                }).then(function () { return hadWorker; });
              });
            }).then(function (hadWorker) {
              if (hadWorker) window.location.reload();
            });
          })();
        `}</Script>
        <ScrollSceneClient />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWidgets />
        </div>
      </body>
    </html>
  );
}
