"use client";

import Image from "next/image";
import Link from "next/link";
import { useContactModal } from "@/context/ContactModalContext";

export default function ProjectsPage() {
  const { openContact } = useContactModal();

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
          02 / PROJECTS
        </span>
      </div>

      {/* Title & Introduction */}
      <div className="max-w-3xl mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141414] mb-3 uppercase">
          Projects
        </h1>
        <p className="text-sm sm:text-base text-[#141414]/80 leading-relaxed font-sans">
          Identity systems, art direction, publication layouts, and commercial graphic design engineered with bespoke typography and conceptual rigor.
        </p>
      </div>

      {/* Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pb-8">
        {/* Featured Project */}
        <div className="border-[2px] border-[#141414] bg-[#141414] p-3 flex flex-col justify-between aspect-[4/3] relative overflow-hidden group">
          <div className="relative w-full h-full">
            <Image
              src="/assets/projects-preview.png"
              alt="Poutique brand visual identity"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
          <div className="absolute bottom-3 left-3 bg-[#141414] text-[#eeeeee] px-3 py-1 font-mono text-xs font-semibold tracking-wider">
            POUTIQUE BRAND IDENTITY — 2026
          </div>
        </div>

        {/* Project Details */}
        <div className="border-[2px] border-[#141414] bg-[#eeeeee] p-6 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs text-[#141414]/70 font-semibold tracking-widest uppercase">
              CASE STUDY
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mt-2 mb-4 text-[#141414]">
              Poutique — Editorial Cosmetics
            </h2>
            <div className="text-xs sm:text-sm text-[#141414]/80 leading-relaxed space-y-3 font-sans">
              <p>
                A high-fashion beauty and cosmetic brand identity project blending expressive high-contrast display serif typography with bold editorial macro photography.
              </p>
              <p>
                Deliverables included logotype craftsmanship, packaging typography guidelines, digital campaign art direction, and editorial social assets.
              </p>
            </div>
          </div>

          <div className="border-t border-[#141414]/20 pt-4 mt-6 flex items-center justify-between font-mono text-xs">
            <span className="text-[#141414]/60">DISCIPLINE: BRANDING &amp; TYPOGRAPHY</span>
            <button
              type="button"
              onClick={openContact}
              className="font-semibold text-[#141414] hover:text-[#B81300] underline underline-offset-4 cursor-pointer"
            >
              START A PROJECT →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
