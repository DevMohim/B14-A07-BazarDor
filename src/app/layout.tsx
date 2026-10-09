import type { Metadata } from "next";
import { Suspense } from "react";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import { Toaster } from "react-hot-toast";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
});

export const metadata: Metadata = {
  title: "BazarDor | Home page",
  description: "বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বাজারদর দেখুন।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="bn" className={hindSiliguri.className}>
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <Suspense fallback={<div className="h-16" />}>
          <Navbar />
        </Suspense>

        <main>{children}</main>

        <Suspense fallback={<div className="h-24" />}>
          <Footer />
        </Suspense>

        <Toaster />
      </body>
    </html>
  );
}
