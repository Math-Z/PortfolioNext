import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollAnim from "@/components/ScrollAnim";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Portfolio",
    icons: {
        icon: "/fav.svg",
    },
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-linear-to-br from-black via-indigo-950 to-slate-900 text-indigo-100 antialiased selection:bg-indigo-500 selection:text-white`}>
      <ScrollAnim/>
      <header className={`border-b border-indigo-900/50 bg-gray-900/70 backdrop-blur-md sticky top-0 z-50`}><Navbar/></header>
      <main className={`mx-auto max-w-7xl p-4 py-12`}>{children}</main>
      </body>
    </html>
  );
}
