import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/view/components/Header";
import Footer from "@/view/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CivicData Lab",
  description:
    "CivicData Lab is a platform to explore, search, and analyze public datasets with powerful filters and insights.",
  keywords: [
    "Civic Data",
    "Open Data",
    "Datasets",
    "Data Explorer",
    "Public Data",
    "Analytics",
  ],
  authors: [{ name: "CivicData Lab Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
