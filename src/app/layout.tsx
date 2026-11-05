import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "John Agburu — Illustrator X Graphic Designer",
  description:
    "Portfolio of John Agburu: Graphic designer and Illustrator crafting sharp, functional, impactful, and tailored visual experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full h-full bg-[#eeeeee] text-[#141414] font-sans flex flex-col selection:bg-[#141414] selection:text-[#eeeeee]">
        {/* Main Screen Container (no outer border) */}
        <div className="p-3 sm:p-4 md:p-5 lg:p-6 h-dvh flex flex-col w-full box-border bg-[#eeeeee] overflow-hidden">
          {/* Fixed Navbar Shared Across All Pages */}
          <Navbar />
          {/* Page View Area */}
          <main className="flex-1 min-h-0 relative flex flex-col pt-3 sm:pt-4 md:pt-4 overflow-y-auto lg:overflow-hidden">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
