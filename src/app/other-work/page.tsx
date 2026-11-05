import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Other Work — John Agburu",
  description: "Explorations, motion graphics, experiments, and visual studies by John Agburu.",
};

export default function OtherWorkPage() {
  return (
    <div className="flex-1 flex flex-col p-4 sm:p-6 md:p-8 overflow-y-auto">
      <div className="flex items-center justify-between border-b-[2px] border-[#141414] pb-4 mb-6">
        <Link
          href="/"
          className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#141414] hover:text-[#B81300] transition-colors flex items-center gap-1.5"
        >
          <span>←</span> BACK TO HOME
        </Link>
        <span className="font-mono text-xs font-semibold text-[#141414] tracking-widest uppercase">
          OTHER WORK
        </span>
      </div>

      <div className="max-w-3xl mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141414] mb-3 uppercase">
          Other Work & Archive
        </h1>
        <p className="text-sm sm:text-base text-[#141414]/80 leading-relaxed font-sans">
          Experimental sketches, poster designs, logotypes, merchandise drops, and ongoing creative R&D.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8">
        {[
          { title: "Poster Series 01", tag: "PRINT", desc: "Silkscreen typographic exploration on heavy paper." },
          { title: "Monogram Studies", tag: "IDENTITY", desc: "Geometric monogram systems for apparel." },
          { title: "Motion Snippets", tag: "ANIMATION", desc: "Frame-by-frame vector loop studies." },
        ].map((item, i) => (
          <div
            key={i}
            className="border-[2px] border-[#141414] bg-[#eeeeee] p-5 flex flex-col justify-between min-h-[180px] hover:border-[#B81300] transition-colors"
          >
            <div>
              <span className="font-mono text-[11px] font-semibold text-[#B81300] tracking-widest uppercase">
                {item.tag}
              </span>
              <h3 className="text-lg font-bold mt-1 text-[#141414]">{item.title}</h3>
              <p className="text-xs text-[#141414]/75 mt-2 leading-relaxed">{item.desc}</p>
            </div>
            <span className="font-mono text-[11px] font-medium text-[#141414]/50 mt-4">
              ARCHIVE // 2025–2026
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
