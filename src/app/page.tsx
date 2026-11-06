import Image from "next/image";
import Link from "next/link";
import HeroTitleSvg from "@/components/landing/HeroTitleSvg";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col gap-2.5 sm:gap-3 md:gap-3.5 min-h-0 h-full overflow-y-auto lg:overflow-hidden select-none">
      {/* Upper Hero Section (fills height with ~20px padding) */}
      <section
        aria-label="John Agburu Portfolio Hero"
        className="shrink-0 lg:shrink lg:flex-[54] min-h-[300px] sm:min-h-[340px] lg:min-h-0 bg-[#141414] border-[2px] md:border-[2.5px] border-[#141414] relative overflow-hidden flex items-center p-5"
      >
        {/* Unified Hero Text & Tagline Lockup Container */}
        <div className="@container relative w-full sm:w-auto h-auto sm:h-full max-w-[95%] sm:max-w-none aspect-[900/446] shrink-0 z-10">
          {/* Razor-sharp pure vector SVG of 'john agburu' */}
          <HeroTitleSvg className="w-full h-full object-contain object-left pointer-events-none" />

          {/* 'ILLUSTRATOR X / GRAPHIC DESIGNER' tagline locked to exact guidelines */}
          <div className="absolute left-[60.8%] bottom-[54.9%] flex flex-col items-start font-sans font-bold text-[#eeeeee] z-20 pointer-events-none select-none">
            <span className="text-[clamp(11px,2.9cqw,30px)] tracking-wider leading-[1.18] whitespace-nowrap">
              ILLUSTRATOR X
            </span>
            <span className="text-[clamp(11px,2.9cqw,30px)] tracking-wider leading-[1.18] whitespace-nowrap">
              GRAPHIC DESIGNER
            </span>
          </div>
        </div>

        {/* Right: John's Illustrated Portrait — hover swaps greyscale → colour */}
        <div className="absolute right-0 sm:right-4 md:right-8 lg:right-10 bottom-0 h-full max-h-[500px] aspect-[353/500] pointer-events-auto z-10 group/portrait">
          {/* Greyscale — default, fades out on hover */}
          <Image
            src="/assets/portrait.png"
            alt="Illustrated Portrait of John Agburu"
            fill
            priority
            sizes="(max-width: 640px) 190px, (max-width: 1024px) 280px, 360px"
            className="object-contain object-bottom transition-opacity duration-500 ease-in-out group-hover/portrait:opacity-0"
          />
          {/* Colour — hidden by default, fades in on hover */}
          <Image
            src="/assets/portrait-colour.png"
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 640px) 190px, (max-width: 1024px) 280px, 360px"
            className="object-contain object-bottom transition-opacity duration-500 ease-in-out opacity-0 group-hover/portrait:opacity-100"
          />
        </div>
      </section>

      {/* Lower Deck: 3 Equal-Width Columns (Desktop ~46% viewport height) */}
      <section
        aria-label="Portfolio Sections and Overview"
        className="shrink-0 lg:shrink lg:flex-[46] min-h-[280px] lg:min-h-0 grid grid-cols-1 lg:grid-cols-3 gap-2.5 sm:gap-3 md:gap-3.5"
      >
        {/* Column 1: ABOUT */}
        <article className="border-[2px] md:border-[2.5px] border-[#141414] bg-[#eeeeee] p-4 sm:p-5 md:p-5 lg:p-5 flex flex-col justify-between overflow-y-auto lg:overflow-hidden">
          <header className="shrink-0 mb-2">
            <h2 className="font-mono text-xs sm:text-[13px] font-bold tracking-wider text-[#141414] uppercase">
              ABOUT
            </h2>
          </header>

          <div className="font-sans text-xs sm:text-[13px] md:text-[13.5px] lg:text-[12px] xl:text-[13.5px] text-[#141414] leading-relaxed flex flex-col gap-2 sm:gap-2.5 xl:gap-3 my-auto py-1">
            <p>
              My name is John and I&apos;m a graphic designer and Illustrator.
            </p>
            <p>
              I thrive in making any idea whatsoever look great while keeping
              them sharp, functional, impactful, and professional, tailored to
              what each project needs.
            </p>
            <p className="font-medium text-[#141414]">
              Let&apos;s do amazing work together!
            </p>
          </div>

          <div className="hidden lg:block h-1" aria-hidden="true" />
        </article>

        {/* Column 2: ILLUSTRATIONS (Interactive Button Card) */}
        <Link
          href="/illustrations"
          aria-label="View Illustrations detailed showcase"
          className="border-[2px] md:border-[2.5px] border-[#141414] bg-[#eeeeee] p-2.5 sm:p-3 md:p-3 flex flex-col min-h-[220px] lg:min-h-0 group cursor-pointer transition-all duration-300 hover:border-[#B81300] hover:shadow-[4px_4px_0px_#141414] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B81300]"
        >
          <header className="flex items-center justify-between shrink-0 mb-2">
            <h2 className="font-mono text-xs sm:text-[13px] font-bold tracking-wider text-[#141414] group-hover:text-[#B81300] transition-colors uppercase">
              ILLUSTRATIONS
            </h2>
            <span
              className="font-mono text-[11px] font-semibold text-[#B81300] opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-[-4px] group-hover:translate-x-0 flex items-center gap-1"
              aria-hidden="true"
            >
              EXPLORE <span>→</span>
            </span>
          </header>

          {/* Red visual frame with dancer artwork */}
          <div className="flex-1 min-h-0 relative overflow-hidden bg-[#B81300] border border-[#141414]/15 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/assets/illustrations-preview.png"
                alt="Stylized character dancer illustration"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-contain object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </div>
        </Link>

        {/* Column 3: PROJECTS (Interactive Button Card) */}
        <Link
          href="/projects"
          aria-label="View Projects detailed showcase"
          className="border-[2px] md:border-[2.5px] border-[#141414] bg-[#eeeeee] p-2.5 sm:p-3 md:p-3 flex flex-col min-h-[220px] lg:min-h-0 group cursor-pointer transition-all duration-300 hover:border-[#141414] hover:shadow-[4px_4px_0px_#141414] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141414]"
        >
          <header className="flex items-center justify-between shrink-0 mb-2">
            <h2 className="font-mono text-xs sm:text-[13px] font-bold tracking-wider text-[#141414] group-hover:tracking-widest transition-all uppercase">
              PROJECTS
            </h2>
            <span
              className="font-mono text-[11px] font-semibold text-[#141414] opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-[-4px] group-hover:translate-x-0 flex items-center gap-1"
              aria-hidden="true"
            >
              VIEW <span>→</span>
            </span>
          </header>

          {/* Dark visual frame with Poutique artwork */}
          <div className="flex-1 min-h-0 relative overflow-hidden bg-[#141414] border border-[#141414]/15 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/assets/projects-preview.png"
                alt="Poutique design project"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
