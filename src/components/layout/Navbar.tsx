"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useResumeModal } from "@/context/ResumeModalContext";
import { useContactModal } from "@/context/ContactModalContext";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openResume } = useResumeModal();
  const { openContact } = useContactModal();

  return (
    <header className="shrink-0 h-11 sm:h-12 md:h-14 bg-[#eeeeee] flex items-center justify-between px-0 z-30 select-none">
      {/* Brand Logo (Glyphs) */}
      <Link
        href="/"
        className="group relative flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141414] py-1"
        aria-label="John Agburu Home"
      >
        <div className="relative h-6 sm:h-7 md:h-8 w-24 sm:w-28 md:w-32 transition-transform duration-200 group-hover:scale-105">
          <Image
            src="/assets/logo.png"
            alt="NAVY Logo"
            fill
            priority
            sizes="(max-width: 768px) 112px, 128px"
            className="object-contain object-left"
          />
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono">
        <Link
          href="/other-work"
          className={`text-xs lg:text-[13px] font-semibold tracking-wider transition-colors duration-200 relative py-1 hover:text-[#B81300] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#141414] ${
            pathname === "/other-work" ? "text-[#B81300]" : "text-[#141414]"
          }`}
        >
          OTHER WORK
          {pathname === "/other-work" && (
            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B81300]" />
          )}
        </Link>

        <Link
          href="/journal"
          className={`text-xs lg:text-[13px] font-semibold tracking-wider transition-colors duration-200 relative py-1 hover:text-[#B81300] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#141414] ${
            pathname === "/journal" ? "text-[#B81300]" : "text-[#141414]"
          }`}
        >
          JOURNAL
          {pathname === "/journal" && (
            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B81300]" />
          )}
        </Link>

        {/* RESUME Trigger: opens modal seamlessly without extra page load */}
        <button
          type="button"
          onClick={openResume}
          className="text-xs lg:text-[13px] font-semibold tracking-wider transition-colors duration-200 relative py-1 text-[#141414] hover:text-[#B81300] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#141414] cursor-pointer"
        >
          RESUME
        </button>

        {/* Contact Action Button: opens modal */}
        <button
          type="button"
          onClick={openContact}
          className="bg-[#141414] text-[#eeeeee] px-5 lg:px-7 py-2 text-xs lg:text-[13px] font-semibold tracking-wider hover:bg-[#B81300] transition-colors duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B81300] cursor-pointer"
        >
          CONTACT
        </button>
      </nav>

      {/* Mobile Menu Controls */}
      <div className="flex md:hidden items-center gap-2">
        <button
          type="button"
          onClick={openContact}
          className="bg-[#141414] text-[#eeeeee] px-3 py-1.5 text-[11px] font-mono font-semibold tracking-wider hover:bg-[#B81300] transition-colors cursor-pointer"
        >
          CONTACT
        </button>
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1.5 border border-[#141414] text-[#141414] font-mono text-xs hover:bg-[#141414] hover:text-[#eeeeee] transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-3 right-3 bg-[#eeeeee] border-[2px] border-[#141414] p-4 flex flex-col gap-3 font-mono text-xs z-50 md:hidden shadow-xl">
          <Link
            href="/other-work"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 font-semibold tracking-wider text-[#141414] hover:text-[#B81300] border-b border-[#141414]/10"
          >
            OTHER WORK
          </Link>
          <Link
            href="/journal"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 font-semibold tracking-wider text-[#141414] hover:text-[#B81300] border-b border-[#141414]/10"
          >
            JOURNAL
          </Link>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              openResume();
            }}
            className="py-1.5 text-left font-semibold tracking-wider text-[#141414] hover:text-[#B81300] border-b border-[#141414]/10 cursor-pointer"
          >
            RESUME
          </button>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              openContact();
            }}
            className="mt-1 bg-[#141414] text-[#eeeeee] py-2 text-center font-semibold tracking-wider hover:bg-[#B81300] cursor-pointer"
          >
            CONTACT
          </button>
        </div>
      )}
    </header>
  );
}
