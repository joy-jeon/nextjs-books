import React from "react";
import "../styles/global.css";
import "../styles/theme.css";
import { Ropa_Sans } from "next/font/google";
import { Metadata } from "next";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const ropaSans = Ropa_Sans({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | 뉴욕 타임즈 베스트셀러",
    default: "뉴욕 타임즈 베스트셀러",
  },
  description: "Vercel 로 배포한 뉴욕 타임즈 베스트셀러",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
