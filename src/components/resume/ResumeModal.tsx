"use client";

import React, { useState } from "react";
import { useResumeModal } from "@/context/ResumeModalContext";

export default function ResumeModal() {
  const { isResumeOpen, closeResume } = useResumeModal();
  const [copied, setCopied] = useState(false);

  if (!isResumeOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("thenavypill@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPdf = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-portal"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-3 md:p-4 bg-[#141414]/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={closeResume}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      {/* Modal Card - Sized to display 100% of contents without scrolling on desktop, perfectly proportioned to 1-page resume (A4 / 1:1.41) */}
      <div
        id="resume-printable-document"
        className="relative h-[96vh] w-auto aspect-[1/1.41] flex flex-col bg-[#eeeeee] border-[2px] border-[#141414] shadow-[6px_6px_0px_#141414] text-[#141414] overflow-hidden select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Section */}
        <div className="px-4 sm:px-5 pt-3 sm:pt-4 pb-2.5 sm:pb-3 border-b-[2px] border-[#141414] bg-[#eeeeee] shrink-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h1
                id="resume-modal-title"
                className="font-sans font-bold text-lg sm:text-xl tracking-tight text-[#141414] uppercase leading-none"
              >
                JOHN AGBURU
              </h1>
              <p className="font-mono text-[11px] sm:text-xs text-[#141414]/70 mt-0.5 font-medium">
                Designer &amp; Illustrator
              </p>
            </div>

            {/* [ ESC / CLOSE ] X Button (Hidden on Print / PDF) */}
            <button
              type="button"
              onClick={closeResume}
              className="no-print shrink-0 font-mono text-[10px] sm:text-[11px] font-bold border border-[#141414] bg-[#eeeeee] px-2 py-0.5 hover:bg-[#141414] hover:text-[#eeeeee] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B81300] cursor-pointer"
              aria-label="Close resume modal"
            >
              [ ESC / CLOSE ] ×
            </button>
          </div>

          {/* Bio + Contact Info Row */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2 items-start">
            <p className="sm:col-span-8 font-sans text-[10px] sm:text-[10.5px] leading-relaxed text-[#141414]/85">
              Designer and illustrator solving visual problems through branding,
              digital products, and illustration. I turn ideas into clear,
              considered visual systems—from identity and interface design to
              original artwork and visual concepts.
            </p>

            <div className="sm:col-span-4 sm:border-l sm:border-[#141414]/20 sm:pl-3 flex flex-col justify-center">
              <span className="font-sans font-bold text-[10.5px] sm:text-[11px] uppercase text-[#141414]">
                Contact
              </span>
              <div className="flex items-center gap-1 mt-0.5">
                <a
                  href="mailto:thenavypill@gmail.com"
                  className="font-mono text-[10px] sm:text-[10.5px] text-[#141414] hover:text-[#B81300] hover:underline transition-colors break-all leading-tight"
                >
                  thenavypill@gmail.com
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  className="no-print p-0.5 hover:bg-[#141414]/10 transition-colors shrink-0"
                  aria-label="Copy email"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                </button>
              </div>
              {copied && (
                <span className="no-print font-mono text-[9px] text-[#B81300] mt-0.5 font-semibold">
                  Copied!
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Content Body: Designed to fit in 1 single view without scrolling on desktop screens */}
        <div className="flex-1 min-h-0 overflow-y-auto sm:overflow-hidden p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 bg-[#eeeeee]">
          {/* Left Column: WORK EXPERIENCE (7 cols) */}
          <div className="sm:col-span-8 flex flex-col gap-1.5 sm:gap-2">
            <h2 className="font-mono font-bold text-[10.5px] sm:text-[11px] tracking-wider uppercase text-[#141414] mb-0.5">
              WORK EXPERIENCE
            </h2>

            {/* 1. NOVUSPIRE */}
            <div className="border border-[#141414] bg-[#eeeeee] p-2 sm:p-2.5 flex flex-col gap-1">
              <div>
                <h3 className="font-sans font-bold text-[10.5px] sm:text-[11px] uppercase text-[#141414] leading-tight">
                  ILLUSTRATOR/JUNIOR DESIGNER
                </h3>
                <span className="font-mono text-[9px] sm:text-[9.5px] font-bold text-[#B81300] tracking-wide uppercase block">
                  NOVUSPIRE
                </span>
              </div>
              <p className="font-sans text-[9.5px] sm:text-[10px] text-[#141414]/85 leading-snug">
                Designed and delivered brand identities, product interfaces, and
                original illustration systems across client projects,
                translating early-stage concepts into polished, production-ready
                digital experiences.
              </p>
              <div className="flex flex-wrap gap-1 pt-0.5">
                {[
                  "Brand Identity",
                  "Editorial Systems",
                  "Custom Illustrations",
                  "UI Design",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#141414]/70 px-1 py-0.2 font-mono text-[8px] sm:text-[8.5px] text-[#141414] bg-[#eeeeee]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 2. GLOBAL WINDSOR GROUP */}
            <div className="border border-[#141414] bg-[#eeeeee] p-2 sm:p-2.5 flex flex-col gap-1">
              <div>
                <h3 className="font-sans font-bold text-[10.5px] sm:text-[11px] uppercase text-[#141414] leading-tight">
                  GRAPHIC DESIGNER
                </h3>
                <span className="font-mono text-[9px] sm:text-[9.5px] font-bold text-[#B81300] tracking-wide uppercase block">
                  GLOBAL WINDSOR GROUP
                </span>
              </div>
              <p className="font-sans text-[9.5px] sm:text-[10px] text-[#141414]/85 leading-snug">
                Designed social media and merchandise visuals, translating
                advertising concepts into polished layouts, promotional
                materials, posters, flyers, and other marketing assets.
              </p>
              <div className="flex flex-wrap gap-1 pt-0.5">
                {[
                  "Social Media Design",
                  "Editorial Systems",
                  "Vector Illustrations",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#141414]/70 px-1 py-0.2 font-mono text-[8px] sm:text-[8.5px] text-[#141414] bg-[#eeeeee]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 3. DIGICARV */}
            <div className="border border-[#141414] bg-[#eeeeee] p-2 sm:p-2.5 flex flex-col gap-1">
              <div>
                <h3 className="font-sans font-bold text-[10.5px] sm:text-[11px] uppercase text-[#141414] leading-tight">
                  GRAPHIC ILLUSTRATOR
                </h3>
                <span className="font-mono text-[9px] sm:text-[9.5px] font-bold text-[#B81300] tracking-wide uppercase block">
                  DIGICARV
                </span>
              </div>
              <p className="font-sans text-[9.5px] sm:text-[10px] text-[#141414]/85 leading-snug">
                Developed visual concepts and hand-drawn illustration assets
                for digital branding, helping shape how logos and brand materials
                were presented, applied, and used across different contexts.
              </p>
              <div className="flex flex-wrap gap-1 pt-0.5">
                {["Brand Identity", "Custom Illustrations"].map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#141414]/70 px-1 py-0.2 font-mono text-[8px] sm:text-[8.5px] text-[#141414] bg-[#eeeeee]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 4. NERVOKK MEDIA */}
            <div className="border border-[#141414] bg-[#eeeeee] p-2 sm:p-2.5 flex flex-col gap-1">
              <div>
                <h3 className="font-sans font-bold text-[10.5px] sm:text-[11px] uppercase text-[#141414] leading-tight">
                  GRAPHIC DESIGNER
                </h3>
                <span className="font-mono text-[9px] sm:text-[9.5px] font-bold text-[#B81300] tracking-wide uppercase block">
                  NERVOKK MEDIA
                </span>
              </div>
              <p className="font-sans text-[9.5px] sm:text-[10px] text-[#141414]/85 leading-snug">
                Created original visual concepts, character designs, and
                illustrations for YouTube content, contributing across the
                production process from visual development to writing and video
                editing.
              </p>
              <div className="flex flex-wrap gap-1 pt-0.5">
                {[
                  "Brand Identity",
                  "Custom Illustrations",
                  "Social Media Design",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#141414]/70 px-1 py-0.2 font-mono text-[8px] sm:text-[8.5px] text-[#141414] bg-[#eeeeee]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 5. INDEPENDENT DESIGNER & ILLUSTRATOR */}
            <div className="border border-[#141414] bg-[#eeeeee] p-2 sm:p-2.5 flex flex-col gap-0.5">
              <h3 className="font-sans font-bold text-[10.5px] sm:text-[11px] uppercase text-[#141414] leading-tight">
                INDEPENDENT DESIGNER &amp; ILLUSTRATOR
              </h3>
              <p className="font-sans text-[9.5px] sm:text-[10px] text-[#141414]/85 leading-snug">
                Delivered brand identities, character designs, illustrations,
                and editorial artwork for clients, translating individual creative
                briefs into cohesive and distinctive visual outcomes.
              </p>
            </div>
          </div>

          {/* Right Column: SKILLS, TOOLS & DOWNLOAD (4 cols) */}
          <div className="sm:col-span-4 flex flex-col justify-between gap-2.5">
            <div className="flex flex-col gap-2">
              {/* SKILLS BOX */}
              <div className="border border-[#141414] bg-[#eeeeee] p-2.5 flex flex-col">
                <h3 className="font-mono font-bold text-[10.5px] sm:text-[11px] tracking-wider uppercase text-[#141414] mb-1.5">
                  SKILLS
                </h3>
                <ul className="font-sans text-[9.5px] sm:text-[10px] text-[#141414]/85 space-y-1 leading-tight">
                  <li>• Brand Identity</li>
                  <li>• UI / Product Design</li>
                  <li>• Graphic Design</li>
                  <li>• Illustration</li>
                  <li>• Character Design</li>
                  <li>• Visual Concept Development</li>
                  <li>• Art Direction</li>
                  <li>• Layout &amp; Composition</li>
                </ul>
              </div>

              {/* TOOLS BOX */}
              <div className="border border-[#141414] bg-[#eeeeee] p-2.5 flex flex-col">
                <h3 className="font-mono font-bold text-[10.5px] sm:text-[11px] tracking-wider uppercase text-[#141414] mb-1">
                  TOOLS
                </h3>
                <p className="font-sans text-[9px] sm:text-[9.5px] text-[#141414]/85 leading-snug">
                  Figma • Procreate • Illustrator • Affinity
                </p>
              </div>
            </div>

            {/* Download Button (Hidden in final printed / downloaded PDF via 'no-print') */}
            <div className="no-print pt-1">
              <button
                type="button"
                onClick={handleDownloadPdf}
                className="w-full border-[1.5px] border-[#141414] bg-[#eeeeee] py-2 px-2.5 font-mono font-bold text-[10px] sm:text-[11px] uppercase tracking-wider text-[#141414] shadow-[3px_3px_0px_#141414] hover:bg-[#141414] hover:text-[#eeeeee] hover:shadow-[1px_1px_0px_#141414] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all flex items-center justify-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B81300]"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                DOWNLOAD PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
