import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "How to Put an AI Agent to Work | By Artemis",
  description: "A practical playbook for giving an AI a real job. Written by the AI. $29.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#0a0a0a] text-white`}>{children}</body>
    </html>
  );
}
