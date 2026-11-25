"use client";

import Image from "next/image";
import Link from "next/link";
import { useContactModal } from "@/context/ContactModalContext";
import { motion } from "motion/react";

export default function MaivebrainCaseStudyPage() {
  const { openContact } = useContactModal();

  const archiveCards = [
    {
      label: "[SCHEMATICS & WIREFRAME TAXONOMY]",
      title: "CLINICAL INTERFACE ARCHITECTURE & IA",
      description:
        "Designed as a low-cognitive-friction triaging flow. The patient intake funnel navigates responsive diagnostic questionnaires, clinical specialty routing, and immediate therapist calendar synchronicity with zero unnecessary steps.",
      image: "/assets/case-study-archive-1.png",
      tag: "UI / UX FRAMEWORK",
    },
    {
      label: "[TYPOGRAPHY & DESIGN SYSTEM]",
      title: "ACCESSIBLE CLINICAL TYPE SYSTEM & DATA MATRICES",
      description:
        "High-contrast typographic hierarchy strictly conforming to WCAG 2.2 AAA readability standards. Built using monospaced diagnostic telemetry tags paired with high-legibility geometric headings for complex neurological lab results.",
      image: "/assets/case-study-archive-2.png",
      tag: "DESIGN SYSTEM",
    },
    {
      label: "[RESPONSIVE TELEHEALTH PLATFORM]",
      title: "SECURE PATIENT PORTAL & CLINICIAN DASHBOARD",
      description:
        "Encrypted telehealth consultation cockpit with integrated biometric trend charting, longitudinal assessment timelines, and real-time session notes engineered for minimal practitioner cognitive fatigue.",
      image: "/assets/case-study-archive-1.png",
      tag: "PORTAL DASHBOARD",
    },
    {
      label: "[DESIGN SPECIFICATIONS & QA]",
      title: "COMPONENT APPARATUS & ACCESSIBILITY SPEC",
      description:
        "Comprehensive component library with tokenized micro-interactions, fail-safe patient input validations, multi-state scheduling selectors, and semantic medical iconography.",
      image: "/assets/case-study-archive-2.png",
      tag: "SPECIFICATION",
    },
  ];

  return (
    <div className="flex-1 flex flex-col pl-0 pr-1 sm:p-4 md:p-6 lg:p-8 overflow-y-auto">
      {/* Top Breadcrumb & Metadata Stamp Line */}
      <div className="flex items-center justify-between border-b-[2px] border-[#141414] pb-2.5 mb-4 font-mono text-[10px] sm:text-[11px] tracking-wider text-[#141414]">
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
          <Link
            href="/projects"
            className="font-bold hover:text-[#B81300] transition-colors"
          >
            [PROJECTS ARCHIVE
          </Link>
          <span>//</span>
          <span className="font-bold text-[#B81300]">CASE_01]</span>
          <span className="hidden sm:inline">//</span>
          <span className="hidden sm:inline text-[#141414]/60">
            UI/UX // /PROJECTS/MAIVEBRAIN.COM
          </span>
        </div>
        <Link
          href="/projects"
          className="font-bold uppercase hover:text-[#B81300] transition-colors text-[10px] sm:text-[11px] shrink-0"
        >
          [ ← BACK ]
        </Link>
      </div>

      {/* Meta Tag Pills & Huge Title Block */}
      <div className="flex flex-col gap-2 mb-6">
        <div className="flex items-center gap-2 flex-wrap font-mono text-[9.5px] sm:text-[10px] font-bold text-[#141414]">
          <span className="border border-[#141414] px-2 py-0.5 bg-[#eeeeee]">
            CLIENT: MAIVEBRAIN INC
          </span>
          <span className="border border-[#141414] px-2 py-0.5 bg-[#eeeeee]">
            YEAR: 2025
          </span>
          <span className="border border-[#141414] px-2 py-0.5 bg-[#eeeeee]">
            ROLE: LEAD WEB UI/UX
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pt-1 border-b-[2px] border-[#141414] pb-4">
          <h1 className="font-mono text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-[#141414] leading-none">
            MAIVEBRAIN.COM
          </h1>

          <a
            href="https://maivebrain.com"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start sm:self-auto font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 border-[2px] border-[#141414] bg-[#eeeeee] text-[#141414] hover:bg-[#141414] hover:text-[#eeeeee] shadow-[3px_3px_0px_#141414] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer"
          >
            [VIEW LIVE SITE→]
          </a>
        </div>
      </div>

      {/* Context & The Architectural Challenge (2 Columns with dividing line) */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b-[2px] border-[#141414] pb-8 mb-8">
        {/* Left Column: Context & Overview */}
        <div className="md:pr-8 md:border-r-[2px] md:border-[#141414] pb-6 md:pb-0 flex flex-col gap-3">
          <h2 className="font-mono text-base sm:text-lg font-black uppercase tracking-tight text-[#141414]">
            CONTEXT &amp; OVERVIEW
          </h2>
          <p className="font-sans text-xs sm:text-[13.5px] font-bold text-[#141414] leading-relaxed">
            Maivebrain sought to redefine specialized neurological therapy and mental wellness by establishing an unapologetically precise, structured digital platform.
          </p>
          <p className="font-sans text-xs sm:text-[13px] text-[#141414]/75 leading-relaxed">
            NavyPill was commissioned to architect a comprehensive digital product ecosystem spanning responsive patient triage funnels, accessible telemetry data visualization, and an intuitive telehealth scheduling portal that commands clinical trust in London, Abuja, and New York.
          </p>
        </div>

        {/* Right Column: The Architectural Challenge */}
        <div className="md:pl-8 pt-6 md:pt-0 flex flex-col gap-3">
          <h2 className="font-mono text-base sm:text-lg font-black uppercase tracking-tight text-[#141414]">
            THE ARCHITECTURAL CHALLENGE
          </h2>
          <p className="font-sans text-xs sm:text-[13.5px] font-bold text-[#141414] leading-relaxed">
            Traditional medical websites suffer from high cognitive load, confusing diagnostic routing, and sterile, disorienting clinical templates.
          </p>
          <p className="font-sans text-xs sm:text-[13px] text-[#141414]/75 leading-relaxed">
            The core challenge lay in designing a high-empathy clinical product with razor-sharp neo-brutalist structure while meeting rigorous HIPAA/GDPR health accessibility regulations and WCAG 2.2 AAA visual clarity. The digital interface had to distill complex therapeutic intake into effortless patient journeys.
          </p>
        </div>
      </section>

      {/* Main Hero Showcase Banner (Framed with Neo-Brutalist Offset Shadow) */}
      <div className="mb-10 sm:mb-12 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl border-[2.5px] border-[#141414] bg-[#eeeeee] shadow-[8px_8px_0px_#141414] overflow-hidden"
        >
          <div className="relative w-full aspect-[16/9.5] sm:aspect-[16/9] bg-[#141414] overflow-hidden">
            <Image
              src="/assets/case-study-hero.png"
              alt="Maivebrain Hero UI and Packaging Engineering"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-cover object-center"
            />
          </div>

          {/* Bottom Specification Stamp Bar */}
          <div className="p-2 sm:p-2.5 border-t-[2px] border-[#141414] bg-[#eeeeee] flex items-center font-mono text-[9px] sm:text-[10px] font-bold tracking-wider text-[#141414] uppercase overflow-x-auto whitespace-nowrap">
            <span className="text-[#B81300] mr-1.5">■</span>
            <span>SPECIFICATION: RESPONSIVE CLINICAL WEB UI // REACT + NEXT.JS // WCAG 2.2 AAA // TELEHEALTH SCHEDULING SYSTEM</span>
          </div>
        </motion.div>
      </div>

      {/* Visual Archive Section Bar */}
      <div className="border-b-[2px] border-[#141414] pb-2 mb-6">
        <span className="font-mono text-[11px] font-bold text-[#B81300] tracking-widest uppercase">
          VISUAL ARCHIVE
        </span>
      </div>

      {/* 2x2 Showcase Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pb-10">
        {archiveCards.map((card, idx) => (
          <div key={idx} className="flex flex-col gap-3 font-mono">
            {/* Image Box */}
            <div className="relative w-full aspect-[16/9.8] border-[2px] border-[#141414] bg-[#141414] shadow-[4px_4px_0px_#141414] overflow-hidden group">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-102 transition-transform duration-500 ease-out"
              />
              <div className="absolute top-2 left-2 z-10 font-mono text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#141414]/90 text-[#eeeeee] border border-[#eeeeee]/30">
                {card.label}
              </div>
            </div>

            {/* Title & Description */}
            <div className="flex flex-col gap-1.5 pt-1">
              <h3 className="font-mono text-sm sm:text-base font-black uppercase tracking-tight text-[#141414]">
                {card.title}
              </h3>
              <p className="font-sans text-xs text-[#141414]/80 leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Outcome & Impact Section */}
      <section className="border-t-[2px] border-[#141414] pt-6 mb-8">
        <div className="flex items-center justify-between font-mono text-xs font-bold mb-4">
          <div className="flex items-center gap-2">
            <span className="text-[#B81300]">■</span>
            <span className="tracking-wider uppercase text-[#141414]">OUTCOME &amp; IMPACT</span>
          </div>
          <span className="text-[#141414]/50 tracking-widest text-[10px]">
            [METRICS VERIFIED]
          </span>
        </div>

        {/* Impact Quote Box with Red Accent Border */}
        <div className="border-[2px] border-[#141414] border-l-[6px] border-l-[#B81300] bg-[#eeeeee] p-5 sm:p-6 shadow-[4px_4px_0px_#141414] font-mono flex flex-col gap-2">
          <p className="text-sm sm:text-base md:text-lg font-black uppercase tracking-tight text-[#141414] leading-snug">
            &quot;TRIAGE CONVERSION INCREASED BY 240% IN THE FIRST 60 DAYS OF DEPLOYMENT, WITH PATIENT BOOKING DROP-OFF REDUCED TO SUB-3% ACROSS CLINICAL HUBS IN LONDON AND ABUJA.&quot;
          </p>
          <span className="text-[10px] sm:text-[11px] text-[#141414]/65 font-bold tracking-wider uppercase mt-1">
            COMMISSION SIGNED OFF: MAIVEBRAIN CLINICAL DIRECTORS // EVALUATION COMPLETED Q4 2025
          </span>
        </div>
      </section>

      {/* Conversion Banner: Interested in a Similar Website or Digital Project? */}
      <section className="bg-[#141414] text-[#eeeeee] border-[2.5px] border-[#141414] p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 shadow-[6px_6px_0px_#141414]">
        <div className="max-w-xl">
          <h2 className="font-mono text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight">
            INTERESTED IN A SIMILAR WEBSITE OR DIGITAL PROJECT?
          </h2>
        </div>

        <button
          type="button"
          onClick={openContact}
          className="self-start md:self-auto shrink-0 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-3 bg-[#B81300] text-[#eeeeee] border border-[#eeeeee]/30 hover:bg-[#eeeeee] hover:text-[#141414] hover:border-[#141414] shadow-[3px_3px_0px_#eeeeee] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer"
        >
          [ • LET&apos;S WORK TOGETHER → ]
        </button>
      </section>

      {/* Previous / Next Case Study Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 border-[2px] border-[#141414] bg-[#eeeeee] mb-6 font-mono">
        {/* Prev Case Study (Inactive / Mock) */}
        <div className="p-3.5 sm:p-4 border-b sm:border-b-0 sm:border-r border-[#141414] flex flex-col justify-center">
          <span className="text-[9px] text-[#141414]/55 tracking-wider uppercase font-bold">
            ← PREVIOUS CASE STUDY // PROJ_04
          </span>
          <span className="text-xs sm:text-[13px] font-bold text-[#141414] uppercase mt-0.5">
            ZERO-STATE STUDIO REVIEW
          </span>
          <span className="text-[9px] text-[#141414]/50 uppercase mt-0.5">
            ARCHITECTURAL MONOGRAM &amp; EDITORIAL JOURNAL
          </span>
        </div>

        {/* Center: Return to All Projects */}
        <Link
          href="/projects"
          className="p-3.5 sm:p-4 border-b sm:border-b-0 sm:border-r border-[#141414] flex flex-col items-center justify-center text-center hover:bg-[#141414] hover:text-[#eeeeee] transition-colors cursor-pointer group"
        >
          <span className="text-base sm:text-lg mb-0.5 group-hover:scale-110 transition-transform">
            ☵
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest">
            [RETURN TO ALL PROJECTS]
          </span>
        </Link>

        {/* Next Case Study */}
        <div className="p-3.5 sm:p-4 flex flex-col justify-center sm:text-right">
          <span className="text-[9px] text-[#141414]/55 tracking-wider uppercase font-bold">
            NEXT CASE STUDY // PROJ_02 →
          </span>
          <span className="text-xs sm:text-[13px] font-bold text-[#141414] uppercase mt-0.5">
            KROMA KINETIC SYNTHESIZER
          </span>
          <span className="text-[9px] text-[#141414]/50 uppercase mt-0.5">
            AUDIO PRO AUDIO HARDWARE &amp; MODULAR INTERFACE DESIGN
          </span>
        </div>
      </div>

      {/* Case Study Footer Attribution Line */}
      <footer className="flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-[#141414]/20 pt-4 pb-6 font-mono text-[9.5px] sm:text-[10px] text-[#141414]/65">
        <div>
          © NAVYPILL • ILLUSTRATOR X GRAPHIC DESIGNER // [ALL RIGHTS RESERVED]
        </div>
        <button
          type="button"
          onClick={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="hover:text-[#B81300] uppercase font-bold transition-colors cursor-pointer"
        >
          ↑ BACK TO TOP
        </button>
      </footer>
    </div>
  );
}
