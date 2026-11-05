import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal — John Agburu",
  description: "Thoughts on illustration, graphic design, process, and visual culture.",
};

export default function JournalPage() {
  const articles = [
    {
      date: "OCTOBER 2026",
      title: "Building Visual Identity with Brutalist Editorial Restraint",
      summary: "Why stripping back decorative excess often unlocks the strongest character in digital design.",
      readTime: "4 MIN READ",
    },
    {
      date: "AUGUST 2026",
      title: "The Anatomy of Dynamic Character Silhouettes",
      summary: "Exploring weight, tension, and kinetic gesture in contemporary digital ink work.",
      readTime: "6 MIN READ",
    },
    {
      date: "JUNE 2026",
      title: "Why Typography Is 90% of Graphic Impact",
      summary: "How scale contrast, strict grid alignment, and tight tracking define visual hierarchy.",
      readTime: "3 MIN READ",
    },
  ];

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
          JOURNAL
        </span>
      </div>

      <div className="max-w-3xl mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141414] mb-3 uppercase">
          Journal & Thoughts
        </h1>
        <p className="text-sm sm:text-base text-[#141414]/80 leading-relaxed font-sans">
          Writing on craft, design philosophy, process breakdowns, and aesthetic research.
        </p>
      </div>

      <div className="flex flex-col gap-4 max-w-4xl pb-8">
        {articles.map((item, idx) => (
          <article
            key={idx}
            className="border-[2px] border-[#141414] bg-[#eeeeee] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#B81300] transition-colors"
          >
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-3 font-mono text-xs text-[#B81300]">
                <span>{item.date}</span>
                <span>•</span>
                <span>{item.readTime}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-[#141414]">
                {item.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#141414]/75 font-sans leading-relaxed">
                {item.summary}
              </p>
            </div>
            <span className="font-mono text-xs font-semibold text-[#141414] hover:text-[#B81300] shrink-0 self-start sm:self-auto">
              READ ENTRY →
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}
