"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Illustration",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex-1 flex flex-col p-4 sm:p-6 md:p-8 overflow-y-auto">
      <div className="flex items-center justify-between border-b-[2px] border-[#141414] pb-4 mb-6">
        <Link
          href="/"
          className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#141414] hover:text-[#B81300] transition-colors flex items-center gap-1.5"
        >
          <span>←</span> BACK TO HOME
        </Link>
        <span className="font-mono text-xs font-semibold text-[#B81300] tracking-widest uppercase">
          CONTACT & INQUIRIES
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl pb-8">
        {/* Left Column: Direct Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141414] mb-3 uppercase">
              Let&apos;s do amazing work together.
            </h1>
            <p className="text-sm sm:text-base text-[#141414]/80 leading-relaxed font-sans">
              Currently accepting selected freelance commissions, full brand identity projects, and creative collaborations worldwide.
            </p>
          </div>

          <div className="border-[2px] border-[#141414] bg-[#eeeeee] p-5 space-y-4">
            <div>
              <span className="font-mono text-xs text-[#B81300] font-bold tracking-widest uppercase block mb-1">
                DIRECT INQUIRY
              </span>
              <a
                href="mailto:john@example.com"
                className="text-base sm:text-lg font-bold text-[#141414] hover:text-[#B81300] transition-colors font-mono"
              >
                john.agburu@gmail.com
              </a>
            </div>

            <div className="border-t border-[#141414]/20 pt-4">
              <span className="font-mono text-xs text-[#141414]/60 font-bold tracking-widest uppercase block mb-2">
                CHANNELS
              </span>
              <div className="flex flex-wrap gap-4 font-mono text-xs font-semibold">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#B81300] underline underline-offset-4"
                >
                  INSTAGRAM ↗
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#B81300] underline underline-offset-4"
                >
                  TWITTER / X ↗
                </a>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#B81300] underline underline-offset-4"
                >
                  BEHANCE ↗
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#B81300] underline underline-offset-4"
                >
                  LINKEDIN ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="border-[2px] border-[#141414] bg-[#eeeeee] p-6">
          {submitted ? (
            <div className="h-full flex flex-col justify-center items-center text-center p-6 space-y-4">
              <span className="font-mono text-3xl text-[#B81300]">✓</span>
              <h2 className="text-xl font-bold uppercase text-[#141414]">
                Message Received
              </h2>
              <p className="text-xs sm:text-sm text-[#141414]/80 font-sans max-w-sm">
                Thank you for reaching out, {formData.name || "friend"}. I will review your project details and get back to you within 24–48 hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 bg-[#141414] text-[#eeeeee] px-5 py-2 font-mono text-xs font-semibold tracking-wider hover:bg-[#B81300] transition-colors"
              >
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="font-mono text-xs font-bold text-[#141414] tracking-widest uppercase mb-2">
                PROJECT INQUIRY FORM
              </h2>

              <div className="space-y-1">
                <label className="block font-mono text-xs font-semibold text-[#141414] uppercase">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="e.g. Maya Lin"
                  className="w-full border-[2px] border-[#141414] bg-[#eeeeee] p-2.5 font-sans text-xs sm:text-sm text-[#141414] placeholder:text-[#141414]/40 focus:outline-none focus:ring-1 focus:ring-[#B81300]"
                />
              </div>

              <div className="space-y-1">
                <label className="block font-mono text-xs font-semibold text-[#141414] uppercase">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="e.g. name@company.com"
                  className="w-full border-[2px] border-[#141414] bg-[#eeeeee] p-2.5 font-sans text-xs sm:text-sm text-[#141414] placeholder:text-[#141414]/40 focus:outline-none focus:ring-1 focus:ring-[#B81300]"
                />
              </div>

              <div className="space-y-1">
                <label className="block font-mono text-xs font-semibold text-[#141414] uppercase">
                  Project Discipline
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                  className="w-full border-[2px] border-[#141414] bg-[#eeeeee] p-2.5 font-sans text-xs sm:text-sm text-[#141414] focus:outline-none focus:ring-1 focus:ring-[#B81300]"
                >
                  <option value="Illustration">Custom Illustration</option>
                  <option value="Brand Identity">Brand Identity & Graphic Design</option>
                  <option value="Typography">Custom Typography / Lettering</option>
                  <option value="Art Direction">Creative Direction</option>
                  <option value="Other">Other Collaboration</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block font-mono text-xs font-semibold text-[#141414] uppercase">
                  Project Brief & Timeline *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project, goals, and anticipated dates..."
                  className="w-full border-[2px] border-[#141414] bg-[#eeeeee] p-2.5 font-sans text-xs sm:text-sm text-[#141414] placeholder:text-[#141414]/40 focus:outline-none focus:ring-1 focus:ring-[#B81300]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#141414] text-[#eeeeee] py-3 font-mono text-xs sm:text-sm font-semibold tracking-wider hover:bg-[#B81300] transition-colors duration-200 mt-2"
              >
                SUBMIT INQUIRY →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
