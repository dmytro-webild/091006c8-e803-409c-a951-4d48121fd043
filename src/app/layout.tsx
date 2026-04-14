import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Al-Quran | Your Path to Spiritual Understanding',
  description: 'A comprehensive digital gateway to study, read, and understand the Holy Quran. Expert resources for Tajweed, Tafsir, and daily spiritual growth.',
  openGraph: {
    "title": "Al-Quran | Spiritual Journey",
    "description": "Digital platform for Quran studies and Islamic knowledge.",
    "siteName": "Al-Quran"
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} ${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
