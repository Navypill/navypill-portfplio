"use client";

import React, { useEffect, useRef } from "react";

export interface ArtworkItem {
  id: string | number;
  title: string;
  imageUrl?: string;
  src?: string;
  category?: string;
}

interface FullscreenLightboxProps {
  items: ArtworkItem[];
  activeIndex: number | null;
  onClose: () => void;
  onChangeIndex: (newIndex: number) => void;
}

export function FullscreenLightbox({
  items,
  activeIndex,
  onClose,
  onChangeIndex,
}: FullscreenLightboxProps) {
  const touchStartX = useRef<number | null>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const isOpen = activeIndex !== null && items[activeIndex] !== undefined;
  const current = isOpen ? items[activeIndex] : null;

  // Body scroll lock & keyboard shortcuts (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    if (!isOpen || activeIndex === null) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChangeIndex((activeIndex + 1) % items.length);
      if (e.key === "ArrowLeft") onChangeIndex((activeIndex - 1 + items.length) % items.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, activeIndex, items.length, onClose, onChangeIndex]);

  // Keep active bottom thumbnail scrolled into view
  useEffect(() => {
    if (activeIndex !== null && thumbRefs.current[activeIndex]) {
      thumbRefs.current[activeIndex]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeIndex]);

  if (!isOpen || !current || activeIndex === null) return null;

  const currentImageSrc = current.imageUrl || current.src || "";
  const handleNext = () => onChangeIndex((activeIndex + 1) % items.length);
  const handlePrev = () => onChangeIndex((activeIndex - 1 + items.length) % items.length);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Fullscreen Artwork Viewer"
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const diff = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(diff) > 45) {
          if (diff < 0) {
            handleNext();
          } else {
            handlePrev();
          }
        }
        touchStartX.current = null;
      }}
      className="fixed inset-0 z-50 bg-[#141414]/90 backdrop-blur-xs text-[#eeeeee] select-none animate-in fade-in duration-200"
    >
      {/* Inline keyframe for crisp 240ms image entrance on open & slide switch */}
      <style>{`
        @keyframes lightboxArtIn {
          from { opacity: 0; transform: scale(0.985); }
          to   { opacity: 1; transform: scale(1); }
        }
        .animate-lightbox-art {
          animation: lightboxArtIn 240ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-lightbox-art { animation: none !important; }
        }
      `}</style>

      {/* Top Header Bar / Floating Indicators */}
      {/* Top-Left: Counter */}
      <div className="fixed top-4 left-4 z-30 flex items-center gap-2">
        <div className="font-mono text-xs font-bold tracking-widest px-3 py-1.5 border border-[#eeeeee]/40 bg-transparent text-[#eeeeee]">
          {String(activeIndex + 1).padStart(2, "0")}/{String(items.length).padStart(2, "0")}
        </div>
      </div>

      {/* Top-Right: ESC / Close Button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close artwork viewer"
        className="fixed top-4 right-4 z-30 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1.5 border border-[#eeeeee]/60 bg-transparent text-[#eeeeee] hover:bg-[#eeeeee] hover:text-[#141414] hover:border-[#141414] hover:shadow-[3px_3px_0px_#141414] active:shadow-none transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B81300]"
      >
        [ ESC / CLOSE ] ×
      </button>

      {/* Navigation Buttons: Previous */}
      <div className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous artwork"
          className="font-mono text-xs sm:text-sm font-bold px-3 sm:px-4 py-3 sm:py-3.5 border border-[#eeeeee]/60 bg-transparent text-[#eeeeee] hover:bg-[#eeeeee] hover:text-[#141414] hover:border-[#141414] hover:shadow-[4px_4px_0px_#141414] active:shadow-none transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B81300]"
        >
          [ ← ]
        </button>
      </div>

      {/* Navigation Buttons: Next */}
      <div className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30">
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next artwork"
          className="font-mono text-xs sm:text-sm font-bold px-3 sm:px-4 py-3 sm:py-3.5 border border-[#eeeeee]/60 bg-transparent text-[#eeeeee] hover:bg-[#eeeeee] hover:text-[#141414] hover:border-[#141414] hover:shadow-[4px_4px_0px_#141414] active:shadow-none transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B81300]"
        >
          [ → ]
        </button>
      </div>

      {/* Main Artwork Stage */}
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        className="w-screen h-screen flex flex-col items-center justify-center p-2 sm:p-4 pt-14 pb-20 sm:pt-16 sm:pb-24 cursor-default"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-[calc(100vw-1rem)] sm:max-w-[calc(100vw-6rem)] max-h-[calc(100vh-6.5rem)] sm:max-h-[calc(100vh-7.5rem)] flex items-center justify-center cursor-default"
        >
          <img
            key={current.id}
            src={currentImageSrc}
            alt={current.title}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className="animate-lightbox-art max-w-[calc(100vw-1rem)] sm:max-w-[calc(100vw-6rem)] max-h-[calc(100vh-6.5rem)] sm:max-h-[calc(100vh-7.5rem)] w-auto h-auto object-contain border-[3px] border-[#141414] bg-[#eeeeee] shadow-[6px_6px_0px_#141414] sm:shadow-[8px_8px_0px_#141414]"
          />
        </div>
      </div>

      {/* Bottom Floating Thumbnail Strip */}
      <div className="fixed bottom-4 left-0 right-0 z-30 px-4 flex justify-center pointer-events-none">
        <div className="pointer-events-auto max-w-[94vw] sm:max-w-[85vw] md:max-w-3xl flex items-center gap-2 overflow-x-auto p-2 bg-[#eeeeee] border-[2px] border-[#141414] shadow-[5px_5px_0px_#141414]">
          {items.map((item, idx) => {
            const isCurrent = idx === activeIndex;
            const itemSrc = item.imageUrl || item.src || "";
            return (
              <button
                key={item.id}
                ref={(el) => {
                  thumbRefs.current[idx] = el;
                }}
                type="button"
                onClick={() => onChangeIndex(idx)}
                aria-label={`View artwork ${idx + 1}`}
                className={`relative shrink-0 w-11 h-11 sm:w-14 sm:h-14 overflow-hidden border-[2px] transition-all cursor-pointer ${isCurrent
                  ? "border-[#B81300] shadow-[2px_2px_0px_#141414] scale-105 opacity-100"
                  : "border-[#141414] opacity-50 hover:opacity-100 hover:border-[#141414] hover:scale-100"
                  }`}
              >
                <img
                  src={itemSrc}
                  alt={item.title}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
