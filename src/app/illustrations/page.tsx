"use client";

import Image from "next/image";
import Link from "next/link";
import { useContactModal } from "@/context/ContactModalContext";
import { useState, useEffect } from "react";


// Mock illustration data – replace src with real assets later
const illustrations = [
  // Interleaved to avoid similar aspect ratios together
  { id: 1, title: "Artwork 1", src: "/assets/art1.png", category: "CHARACTER ART" },
  { id: 5, title: "Artwork 5", src: "/assets/art5.jpg", category: "EDITORIAL & COVERS" },
  { id: 2, title: "Artwork 2", src: "/assets/art2.jpg", category: "EDITORIAL & COVERS" },
  { id: 6, title: "Artwork 6", src: "/assets/art6.jpg", category: "EXPERIMENTAL" },
  { id: 3, title: "Artwork 3", src: "/assets/art3.jpg", category: "EXPERIMENTAL" },
  { id: 7, title: "Artwork 7", src: "/assets/art7.jpg", category: "CHARACTER ART" },
  { id: 4, title: "Artwork 4", src: "/assets/art4.jpg", category: "CHARACTER ART" },
  { id: 8, title: "Artwork 8", src: "/assets/art8.jpg", category: "EDITORIAL & COVERS" },
  { id: 9, title: "Artwork 9", src: "/assets/art9.jpg", category: "EXPERIMENTAL" },
  { id: 10, title: "Artwork 10", src: "/assets/art10.jpg", category: "CHARACTER ART" },
];

export default function IllustrationsPage() {
  const { openContact } = useContactModal();
  const [activeFilter, setActiveFilter] = useState("ALL");
  const filtered = illustrations.filter((item) =>
    activeFilter === "ALL" ? true : item.category === activeFilter);














  const counts = {
    ALL: illustrations.length,
    "CHARACTER ART": illustrations.filter((i) => i.category === "CHARACTER ART").length,
    "EDITORIAL & COVERS": illustrations.filter((i) => i.category === "EDITORIAL & COVERS").length,
    EXPERIMENTAL: illustrations.filter((i) => i.category === "EXPERIMENTAL").length,
  };

  return (
    <div className="flex-1 flex flex-col p-4 sm:p-6 md:p-8 overflow-y-auto">
      {/* Navigation header */}


      {/* Title & Subheading */}
      <div className="max-w-3xl mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141414] mb-3 uppercase">
          ILLUSTRATIONS<span className="text-[#B81300]">.</span>
        </h1>

      </div>



      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="group break-inside-avoid border-[3px] border-[#141414] bg-[#eeeeee] flex flex-col mb-4 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0px_#141414] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-300 cursor-pointer"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-auto object-cover"
            />
            <div className="hidden">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Footer */}
      <section className="bg-[#141414] text-[#eeeeee] py-12 mt-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">COMMISSION BESPOKE ILLUSTRATION OR COVER ART?</h2>
        <p className="mb-6 max-w-xl mx-auto">
          I’m open to collaborations that push visual storytelling to its limits. Let’s create something unforgettable together.
        </p>
        <button
          onClick={openContact}
          className="font-mono text-sm px-6 py-2 bg-[#eeeeee] text-[#141414] hover:bg-[#B81300] hover:text-[#eeeeee] border border-[#141414] transition-colors"
        >
          LET'S WORK TOGETHER →
        </button>
      </section>
    </div>
  );
}
