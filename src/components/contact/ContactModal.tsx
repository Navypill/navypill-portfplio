"use client";

import React, { useState } from "react";
import { useContactModal } from "@/context/ContactModalContext";

export default function ContactModal() {
  const { isContactOpen, closeContact } = useContactModal();
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  if (!isContactOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("thenavypill@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/xnpdjlvn', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: data,
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        const result = await res.json();
        setError(result.error || 'Submission failed');
      }
    } catch (e) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    {
      name: "INSTAGRAM",
      handle: "[navypill]",
      href: "https://www.instagram.com/navypill",
    },
    {
      name: "BEHANCE",
      handle: "[navypill]",
      href: "https://www.behance.net/navypill",
    },
    {
      name: "TWITTER/X",
      handle: "[navypill]",
      href: "https://x.com/navypill",
    },
    {
      name: "LINKEDIN",
      handle: "[in/navypill]",
      href: "https://www.linkedin.com/in/navypill/",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-[#141414]/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={closeContact}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      {/* Modal Box matching design image */}
      <div
        className="relative w-full max-w-[800px] lg:max-w-[800px] flex flex-col bg-[#eeeeee] border-[2px] md:border-[2.5px] border-[#141414] shadow-[8px_8px_0px_#141414] text-[#141414] overflow-hidden select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 sm:px-6 py-3.5 sm:py-4 border-b-[2px] md:border-b-[2.5px] border-[#141414] flex items-center justify-between shrink-0 bg-[#eeeeee]">
          <h2
            id="contact-modal-title"
            className="font-sans font-bold text-sm sm:text-base tracking-tight text-[#141414] uppercase leading-none"
          >
            LET&apos;S WORK TOGETHER
          </h2>

          <button
            type="button"
            onClick={closeContact}
            className="font-mono text-[10px] sm:text-sm font-bold border border-[#141414] bg-[#eeeeee] px-2.5 py-1 hover:bg-[#141414] hover:text-[#eeeeee] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B81300]"
            aria-label="Close contact modal"
          >
            [ ESC / CLOSE ] ×
          </button>
        </div>

        {/* Modal Body: 2 Columns */}
        <div className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-12 gap-6 bg-[#eeeeee]">
          {/* Left Column: DIRECT CONTACT (5 cols) */}
          <div className="sm:col-span-5 flex flex-col gap-4 font-mono">
            <h3 className="font-bold text-sm sm:text-xs tracking-wider uppercase text-[#141414]">
              DIRECT CONTACT
            </h3>

            {/* EMAIL */}
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-[#141414]/60 uppercase tracking-wider">
                EMAIL:
              </span>
              <div className="flex items-center gap-1.5 flex-wrap">
                <a
                  href="mailto:thenavypill@gmail.com"
                  className="text-sm text-[#141414] hover:text-[#B81300] hover:underline transition-colors font-medium break-all"
                >
                  thenavypill@gmail.com
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="border border-[#141414] px-1.5 py-0.5 text-[9px] font-bold hover:bg-[#141414] hover:text-[#eeeeee] transition-colors cursor-pointer shrink-0"
                >
                  {copied ? "[COPIED!]" : "[COPY]"}
                </button>
              </div>
            </div>

            {/* LOCATION */}
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] text-[#141414]/60 uppercase tracking-wider">
                LOCATION:
              </span>
              <span className="text-sm font-bold text-[#141414]">
                Abuja, Nigeria (UTC+1)
              </span>
              <span className="text-[9.5px] font-bold text-[#B81300] tracking-wider uppercase">
                [REMOTE // AVAILABLE GLOBALLY]
              </span>
            </div>

            {/* SOCIALS */}
            <div className="flex flex-col gap-1.5 pt-1">
              <span className="text-[10px] text-[#141414]/60 uppercase tracking-wider mb-0.5">
                SOCIALS:
              </span>
              <div className="flex flex-col gap-1.5">
                {socials.map((social) => (
                  <div
                    key={social.name}
                    className="flex items-center justify-between text-[10px]"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-[#141414] px-2 py-0.5 font-bold hover:bg-[#141414] hover:text-[#eeeeee] transition-colors"
                    >
                      {social.name}
                    </a>
                    <span className="text-[#141414]/60 text-[10px] font-medium">
                      {social.handle}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: SEND A QUICK MESSAGE (7 cols) */}
          <div className="sm:col-span-7 flex flex-col font-mono">
            <h3 className="font-bold text-sm sm:text-xs tracking-wider uppercase text-[#141414] mb-3">
              SEND A QUICK MESSAGE
            </h3>

            {submitted ? (
              <div className="border border-[#141414] p-5 flex flex-col items-center justify-center text-center gap-2 my-auto bg-[#eeeeee]">
                <span className="text-2xl text-[#B81300] font-bold">✓</span>
                <span className="text-xs font-bold uppercase text-[#141414]">
                  MESSAGE SENT
                </span>
                <p className="font-sans text-sm text-[#141414]/80 leading-relaxed max-w-xs">
                  Thanks for reaching out! I will review your note and get back to
                  you promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 border border-[#141414] px-2.5 py-1 text-[10px] font-bold hover:bg-[#141414] hover:text-[#eeeeee] transition-colors"
                >
                  [SEND ANOTHER]
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                {/* NAME */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-[10px]">
                    <label
                      htmlFor="contact-name"
                      className="text-[#141414]/60 uppercase tracking-wider"
                    >
                      NAME:
                    </label>
                    <span className="text-[#B81300] font-bold">[REQ*]</span>
                  </div>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Enter your full name / organization..."
                    className="border border-[#141414] bg-[#eeeeee] px-2.5 py-1.5 font-mono text-sm text-[#141414] placeholder:text-[#141414]/40 focus:outline-none focus:ring-1 focus:ring-[#141414]"
                  />
                </div>

                {/* EMAIL */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-[10px]">
                    <label
                      htmlFor="contact-email"
                      className="text-[#141414]/60 uppercase tracking-wider"
                    >
                      EMAIL:
                    </label>
                    <span className="text-[#B81300] font-bold">[REQ*]</span>
                  </div>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="client@studio.com..."
                    className="border border-[#141414] bg-[#eeeeee] px-2.5 py-1.5 font-mono text-sm text-[#141414] placeholder:text-[#141414]/40 focus:outline-none focus:ring-1 focus:ring-[#141414]"
                  />
                </div>

                {/* MESSAGE */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-[10px]">
                    <label
                      htmlFor="contact-message"
                      className="text-[#141414]/60 uppercase tracking-wider"
                    >
                      MESSAGE:
                    </label>
                  </div>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Briefly articulate project scope, delivery targets, budget tier, or editorial parameters..."
                    className="border border-[#141414] bg-[#eeeeee] px-2.5 py-1.5 font-mono text-sm text-[#141414] placeholder:text-[#141414]/40 focus:outline-none focus:ring-1 focus:ring-[#141414] resize-none"
                  />
                </div>

                {/* ERROR MESSAGE */}
                {error && (
                  <div className="text-xs text-[#B81300] mb-2">
                    {error}
                  </div>
                )}
                {/* SUBMIT BUTTON */}
                <div className="flex justify-end pt-1">
                  <button
                    type="submit"
                    disabled={loading}
                    className="border-[1.5px] border-[#141414] bg-[#eeeeee] px-4 py-2 font-mono font-bold text-sm uppercase tracking-wider text-[#141414] shadow-[3px_3px_0px_#141414] hover:bg-[#141414] hover:text-[#eeeeee] hover:shadow-[1px_1px_0px_#141414] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B81300]"
                  >
                    {loading ? 'SENDING...' : 'SEND MESSAGE →'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
