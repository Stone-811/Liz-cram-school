import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Liz 教育 | 專業兒童教育中心",
  description: "Liz 教育提供優質的數學、英文、作文等綜合學科教學，採用遊戲式學習，讓孩子在快樂中成長。",
  keywords: ["兒童教育", "補習班", "數學", "英文", "作文", "課後輔導"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`${notoSansTC.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
