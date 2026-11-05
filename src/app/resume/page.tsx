import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — John Agburu",
  description: "Curriculum Vitae and background of John Agburu, Graphic Designer and Illustrator.",
};

export default function ResumePage() {
  const experiences = [
    {
      role: "Lead Illustrator & Graphic Designer",
      company: "Independent Practice",
      period: "2023 — PRESENT",
      details: "Delivering brand identities, bespoke character illustrations, editorial layouts, and digital visual direction for global creative clients.",
    },
    {
      role: "Senior Graphic Designer",
      company: "Studio Vanguard",
      period: "2021 — 2023",
      details: "Led creative teams producing high-impact campaigns, typography systems, and publication designs across print and digital media.",
    },
    {
      role: "Visual Designer",
      company: "Pixel & Ink Co.",
      period: "2019 — 2021",
      details: "Crafted brand guidelines, iconography suites, merchandise graphics, and digital product assets.",
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
          CURRICULUM VITAE
        </span>
      </div>

      <div className="max-w-3xl mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141414] mb-3 uppercase">
            Resume / CV
          </h1>
          <p className="text-sm sm:text-base text-[#141414]/80 leading-relaxed font-sans">
            Background, client experience, core proficiencies, and creative competencies.
          </p>
        </div>

        <Link
          href="/contact"
          className="bg-[#141414] text-[#eeeeee] px-4 py-2 font-mono text-xs font-semibold tracking-wider hover:bg-[#B81300] transition-colors shrink-0 self-start sm:self-auto text-center"
        >
          WORK WITH JOHN →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl pb-8">
        {/* Experience Timeline */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="font-mono text-xs font-bold text-[#B81300] tracking-widest uppercase">
            EXPERIENCE
          </h2>
          {experiences.map((item, i) => (
            <div
              key={i}
              className="border-[2px] border-[#141414] bg-[#eeeeee] p-5 space-y-2"
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="font-bold text-[#141414]">{item.company}</span>
                <span className="text-[#141414]/60">{item.period}</span>
              </div>
              <h3 className="text-base font-bold text-[#141414]">{item.role}</h3>
              <p className="text-xs sm:text-sm text-[#141414]/80 leading-relaxed font-sans">
                {item.details}
              </p>
            </div>
          ))}
        </div>

        {/* Skills & Capabilities */}
        <div className="space-y-4">
          <h2 className="font-mono text-xs font-bold text-[#B81300] tracking-widest uppercase">
            SKILLS & FOCUS
          </h2>
          <div className="border-[2px] border-[#141414] bg-[#eeeeee] p-5 space-y-4">
            <div>
              <h3 className="font-mono text-xs font-bold uppercase text-[#141414] mb-2">
                Illustration
              </h3>
              <ul className="text-xs text-[#141414]/80 space-y-1 font-sans">
                <li>• Character Design & Concept Art</li>
                <li>• Digital Ink & Silhouette Studies</li>
                <li>• Editorial & Cover Art</li>
                <li>• Storyboarding & Visual Development</li>
              </ul>
            </div>

            <div className="border-t border-[#141414]/20 pt-4">
              <h3 className="font-mono text-xs font-bold uppercase text-[#141414] mb-2">
                Graphic Design
              </h3>
              <ul className="text-xs text-[#141414]/80 space-y-1 font-sans">
                <li>• Brand Identity & Systems</li>
                <li>• Display & Custom Typography</li>
                <li>• Editorial & Publication Layout</li>
                <li>• Packaging & Merchandising</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
