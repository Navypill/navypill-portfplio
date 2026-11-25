import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal — John Agburu",
  description: "Thoughts on illustration, graphic design, process, and visual culture.",
};

export default function JournalPage() {
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
        <span className="font-mono text-xs font-semibold text-[#141414] tracking-widest uppercase">
          JOURNAL
        </span>
      </div>

      {/* Under Construction Notice Box */}
      <div className="flex-1 min-h-[340px] flex items-center justify-center p-4">
        <div className="max-w-lg w-full border-[2.5px] border-[#141414] bg-[#eeeeee] p-6 sm:p-8 shadow-[6px_6px_0px_#141414] flex flex-col items-start gap-4">
          <div className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest text-[#B81300] uppercase">
            <span>[ SYSTEM NOTICE ]</span>
            <span>//</span>
            <span>STATUS: 404_PENDING</span>
          </div>

          <h1 className="font-mono text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#141414]">
            UNDER CONSTRUCTION<span className="text-[#B81300]">.</span>
          </h1>

          <p className="font-sans text-sm text-[#141414]/80 leading-relaxed">
            Writing, case study deep dives, and visual process breakdowns are currently being curated and will be published here soon.
          </p>

          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase px-4 py-2 border-[1.5px] border-[#141414] bg-[#141414] text-[#eeeeee] hover:bg-[#B81300] hover:border-[#B81300] shadow-[2px_2px_0px_#141414] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 transition-all"
            >
              ← RETURN HOME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
