'use client';

import React from 'react';
import Image from 'next/image';
import { Globe, Radio, ShieldCheck } from 'lucide-react';

const ROW_1_CLIENTS = [
  '/assets/client-35.png',
  '/assets/client-34.png',
  '/assets/client-33.png',
  '/assets/client-32.png',
  '/assets/client-31.png',
  '/assets/client-30.png',
  '/assets/client-29.png',
  '/assets/client-19.png',
  '/assets/client-16.png',
  '/assets/client-17.png',
  '/assets/client-18.png',
  '/assets/client-5.png',
  '/assets/client-9.png',
  '/assets/client-11.png',
];

const ROW_2_CLIENTS = [
  '/assets/client-20.png',
  '/assets/client-23.png',
  '/assets/client-22.png',
  '/assets/client-21.png',
  '/assets/client-25.png',
  '/assets/client-13.png',
  '/assets/client-12.png',
  '/assets/client-15.png',
  '/assets/client-10.png',
  '/assets/client-14.png',
  '/assets/client-2.png',
  '/assets/client-4.png',
  '/assets/client-3.png',
];

function ClientCard({ src }: { src: string }) {
  return (
    <div className="flex-shrink-0 w-36 h-13 sm:w-44 sm:h-16 py-2 sm:py-2.5 px-4 sm:px-6 rounded-xl bg-white hover:bg-zinc-50 flex items-center justify-center shadow-xs border border-zinc-200/80 hover:border-zinc-300 hover:scale-105 transition-all duration-200">
      <div className="relative w-24 sm:w-28 h-7 sm:h-9">
        <Image
          src={src}
          alt="Client Partner"
          fill
          className="object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function ClientsAndFootprint() {
  return (
    <section id="clients" className="relative z-10 py-12 sm:py-20 scroll-mt-20 sm:scroll-mt-24 overflow-hidden">
      {/* ---------------------------------------------------------------------- */}
      {/* 1. BRANDS THAT TRUST US: 2-ROW INFINITE MARQUEE                        */}
      {/* ---------------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-zinc-700 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3">
          Our Clients
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold font-sans text-zinc-950 tracking-tight leading-[1.18] mb-2 sm:mb-3">
          Brands That{' '}
          <span className="bg-gradient-to-r from-zinc-950 via-zinc-700 to-zinc-500 bg-clip-text text-transparent">
            Trust Us
          </span>
        </h2>
        <p className="text-zinc-500 text-xs sm:text-base max-w-2xl mx-auto px-2">
          From high-growth tech to luxury real estate, FMCG, and enterprise leaders, we’ve
          partnered with visionary brands that value depth, clarity, and consistency.
        </p>
      </div>

      {/* 2-Row Infinite Marquee with Soft Edge Fade Masks */}
      <div className="relative w-full overflow-hidden py-2 sm:py-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Track 1: Leftward scroll */}
        <div className="flex gap-3 sm:gap-4 w-max animate-marquee-slow hover:[animation-play-state:paused] mb-3 sm:mb-4">
          {ROW_1_CLIENTS.concat(ROW_1_CLIENTS).map((src, i) => (
            <ClientCard key={`row1-${i}`} src={src} />
          ))}
        </div>

        {/* Track 2: Rightward scroll */}
        <div className="flex gap-3 sm:gap-4 w-max animate-marquee-reverse hover:[animation-play-state:paused]">
          {ROW_2_CLIENTS.concat(ROW_2_CLIENTS).map((src, i) => (
            <ClientCard key={`row2-${i}`} src={src} />
          ))}
        </div>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* 2. FOOTPRINT & KEY CLIENTS: WORLD MAP & HIGH-CONTRAST COPY             */}
      {/* ---------------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 sm:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: High-Contrast Copy */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-zinc-700 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
              Where Ideas Travel, Brands Grow
            </div>

            <h3 className="text-2xl sm:text-4xl font-bold font-sans text-zinc-950 tracking-tight leading-[1.18]">
              Footprint &{' '}
              <span className="bg-gradient-to-r from-zinc-950 via-zinc-700 to-zinc-500 bg-clip-text text-transparent">
                Key Clients
              </span>
            </h3>

            <p className="text-zinc-600 text-xs sm:text-base leading-relaxed font-normal">
              A brand isn’t confined to one place—it lives wherever people
              experience it. From local markets to global digital spaces, we’ve
              built campaigns, identities, and visual assets that cross borders
              and command attention.
            </p>

            <p className="text-zinc-600 text-xs sm:text-base leading-relaxed font-normal">
              Subtle, smart, and built to connect. Whether scaling across
              multinational markets or launching high-conviction niche products,
              our strategic architecture ensures your story resonates in any
              cultural geography.
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2">
              <div className="p-2.5 sm:p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 hover:bg-white transition-colors">
                <div className="text-lg sm:text-2xl font-bold text-zinc-950 mb-0.5">140+</div>
                <div className="text-[9px] sm:text-[11px] text-zinc-500 uppercase tracking-wider font-mono">
                  Global Clients
                </div>
              </div>
              <div className="p-2.5 sm:p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 hover:bg-white transition-colors">
                <div className="text-lg sm:text-2xl font-bold text-zinc-950 mb-0.5">18+</div>
                <div className="text-[9px] sm:text-[11px] text-zinc-500 uppercase tracking-wider font-mono">
                  Industries
                </div>
              </div>
              <div className="p-2.5 sm:p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 hover:bg-white transition-colors">
                <div className="text-lg sm:text-2xl font-bold text-emerald-600 mb-0.5">$420M+</div>
                <div className="text-[9px] sm:text-[11px] text-zinc-500 uppercase tracking-wider font-mono">
                  Revenue Built
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: World Map Terminal Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 lg:p-8 bg-white/95 border border-zinc-200/90 backdrop-blur-xl shadow-lg shadow-zinc-950/5 overflow-hidden group">
              {/* World Grid Visualization Card */}
              <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-xl sm:rounded-2xl bg-zinc-950 border border-zinc-800 p-4 sm:p-6 flex flex-col justify-between overflow-hidden shadow-2xl min-h-[250px] sm:min-h-0">
                {/* SVG Decorative Grid */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="world-grid-aaa"
                      width="28"
                      height="28"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle cx="2" cy="2" r="1.2" fill="#94A3B8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#world-grid-aaa)" />
                </svg>

                {/* Animated Pulsing World Nodes */}
                <div className="absolute top-1/3 left-1/4 flex items-center gap-1.5 sm:gap-2">
                  <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono font-medium text-zinc-300 bg-black/80 px-1.5 sm:px-2 py-0.5 rounded border border-zinc-800 backdrop-blur-sm">
                    APAC // ACTIVE
                  </span>
                </div>

                <div className="absolute top-1/2 right-1/4 flex items-center gap-1.5 sm:gap-2">
                  <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-cyan-500" />
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono font-medium text-zinc-300 bg-black/80 px-1.5 sm:px-2 py-0.5 rounded border border-zinc-800 backdrop-blur-sm">
                    EMEA // ACTIVE
                  </span>
                </div>

                <div className="absolute bottom-1/4 left-1/2 flex items-center gap-1.5 sm:gap-2">
                  <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-zinc-200" />
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono font-medium text-zinc-300 bg-black/80 px-1.5 sm:px-2 py-0.5 rounded border border-zinc-800 backdrop-blur-sm">
                    AMER // 24/7
                  </span>
                </div>

                {/* Card Header */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono font-semibold text-zinc-300">
                    <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400 animate-spin-slow" />
                    <span className="truncate">Global Infrastructure</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded-full">
                    <Radio className="w-2.5 h-2.5 sm:w-3 sm:h-3 animate-pulse" />
                    <span>LIVE</span>
                  </div>
                </div>

                {/* Card Footer Metric */}
                <div className="relative z-10 pt-4 sm:pt-6 flex items-end justify-between gap-2">
                  <div>
                    <div className="text-xl sm:text-3xl font-bold font-sans text-white">
                      120+
                    </div>
                    <div className="text-[10.5px] sm:text-xs text-zinc-400 font-medium">
                      Countries & Regions Reached
                    </div>
                  </div>
                  <div className="px-2 sm:px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 text-[10px] sm:text-xs font-mono font-semibold flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
                    <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-400" />
                    <span>Global Scale</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
