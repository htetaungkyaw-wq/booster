import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Booster",
  description: "Performance marketing hero section for Booster.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
