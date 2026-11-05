import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Illustrations — John Agburu",
  description: "Curated illustration collection by John Agburu.",
};

export default function IllustrationsPage() {
  return (
    <div className="flex-1 flex flex-col p-4 sm:p-6 md:p-8 overflow-y-auto">
      {/* Navigation header */}
      <div className="flex items-center justify-between border-b-[2px] border-[#141414] pb-4 mb-6">
        <Link
          href="/"
          className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#141414] hover:text-[#B81300] transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#141414]"
        >
          <span>←</span> BACK TO HOME
        </Link>
        <span className="font-mono text-xs font-semibold text-[#B81300] tracking-widest uppercase">
          01 / ILLUSTRATIONS
        </span>
      </div>

      {/* Title & Introduction */}
      <div className="max-w-3xl mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141414] mb-3 uppercase">
          Illustrations
        </h1>
        <p className="text-sm sm:text-base text-[#141414]/80 leading-relaxed font-sans">
          Character design, editorial visual art, dynamic motion studies, and high-impact graphic illustrations crafted with bold lines and expressive silhouettes.
        </p>
      </div>

      {/* Feature Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pb-8">
        {/* Featured piece */}
        <div className="border-[2px] border-[#141414] bg-[#B81300] p-4 flex flex-col justify-between aspect-[4/3] relative overflow-hidden group">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/assets/illustrations-preview.png"
              alt="Dynamic dancer character study"
              fill
              className="object-contain object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
          <div className="absolute bottom-3 left-3 bg-[#141414] text-[#eeeeee] px-3 py-1 font-mono text-xs font-semibold tracking-wider">
            DANCER STUDY — 2026
          </div>
        </div>

        {/* Info Box */}
        <div className="border-[2px] border-[#141414] bg-[#eeeeee] p-6 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs text-[#B81300] font-semibold tracking-widest uppercase">
              APPROACH
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mt-2 mb-4 text-[#141414]">
              Sharp, Functional & Impactful
            </h2>
            <p className="text-xs sm:text-sm text-[#141414]/80 leading-relaxed space-y-3 font-sans">
              Every illustration begins with a clear structural foundation. Balancing crisp silhouettes, high contrast, and dynamic posture ensures each artwork captures immediate attention while communicating character and tone.
            </p>
          </div>

          <div className="border-t border-[#141414]/20 pt-4 mt-6 flex items-center justify-between font-mono text-xs">
            <span className="text-[#141414]/60">STATUS: OPEN FOR COMMISSIONS</span>
            <Link
              href="/contact"
              className="font-semibold text-[#141414] hover:text-[#B81300] underline underline-offset-4"
            >
              INQUIRE →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
