"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { label: "OTHER WORK", href: "/other-work" },
  { label: "JOURNAL", href: "/journal" },
  { label: "RESUME", href: "/resume" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs lg:text-[13px] font-semibold tracking-wider transition-colors duration-200 relative py-1 hover:text-[#B81300] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#141414] ${
                isActive ? "text-[#B81300]" : "text-[#141414]"
              }`}
            >
              {link.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B81300]" />
              )}
            </Link>
          );
        })}

        {/* Contact Action Button */}
        <Link
          href="/contact"
          className="bg-[#141414] text-[#eeeeee] px-5 lg:px-7 py-2 text-xs lg:text-[13px] font-semibold tracking-wider hover:bg-[#B81300] transition-colors duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B81300]"
        >
          CONTACT
        </Link>
      </nav>

      {/* Mobile Menu Controls */}
      <div className="flex md:hidden items-center gap-2">
        <Link
          href="/contact"
          className="bg-[#141414] text-[#eeeeee] px-3 py-1.5 text-[11px] font-mono font-semibold tracking-wider hover:bg-[#B81300] transition-colors"
        >
          CONTACT
        </Link>
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
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 font-semibold tracking-wider text-[#141414] hover:text-[#B81300] border-b border-[#141414]/10"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-1 bg-[#141414] text-[#eeeeee] py-2 text-center font-semibold tracking-wider hover:bg-[#B81300]"
          >
            CONTACT
          </Link>
        </div>
      )}
    </header>
  );
}
