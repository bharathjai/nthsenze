'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Star, ShieldCheck, ChevronDown } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();

  // Scroll-linked spatial zoom & flythrough dampening
  const scale = useTransform(scrollY, [0, 400], [1, 1.15]);
  const opacity = useTransform(scrollY, [0, 360], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, -35]);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-between items-center pt-20 sm:pt-24 pb-4 sm:pb-6 px-4 sm:px-6 overflow-hidden select-none"
    >
      {/* Subtle Ambient Radial Highlight behind typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[300px] sm:h-[400px] bg-gradient-to-tr from-slate-200/50 via-zinc-100/60 to-transparent rounded-full blur-[80px] sm:blur-[100px] pointer-events-none -z-10" />

      {/* Spacer for vertical balance */}
      <div className="hidden sm:block h-2" />

      {/* Center Content Container (Strictly sized to fit single viewport) */}
      <motion.div
        style={{ scale, opacity, y }}
        className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center my-auto py-2 sm:py-0 w-full"
      >
        {/* Top Eyebrow Shimmer Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="group inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/95 hover:bg-white border border-zinc-200/90 text-zinc-800 text-[10px] sm:text-xs font-medium tracking-wide mb-3 sm:mb-4 shadow-2xs backdrop-blur-md transition-all duration-300 hover:border-zinc-300 hover:shadow-xs cursor-default max-w-[92vw] sm:max-w-none"
        >
          <div className="flex items-center justify-center w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-zinc-100 border border-zinc-200/80 text-zinc-800 group-hover:bg-zinc-950 group-hover:text-white transition-colors duration-200 flex-shrink-0">
            <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
          </div>
          <span className="text-zinc-800 font-semibold tracking-wider uppercase text-[9.5px] sm:text-[10.5px] truncate">
            Where Brands Discover Their Next Dimension
          </span>
          <ArrowRight className="w-3 h-3 text-zinc-400 group-hover:text-zinc-950 group-hover:translate-x-0.5 transition-all flex-shrink-0 hidden xs:inline" />
        </motion.div>

        {/* Primary Hero Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-zinc-950 leading-[1.18] sm:leading-[1.16] mb-2.5 sm:mb-3 max-w-3xl mx-auto font-sans px-2"
        >
          Your Brand Has More Potential.{' '}
          <span className="block mt-0.5 sm:mt-1 bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-500 bg-clip-text text-transparent">
            We Switch On Its Nth Senze.
          </span>
        </motion.h1>

        {/* Subtitle Body Copy in readable off-black */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-zinc-600 text-xs sm:text-sm md:text-[15px] max-w-lg sm:max-w-xl mx-auto leading-relaxed font-normal mb-5 sm:mb-6 px-3"
        >
          We help ambitious brands become unforgettable through consumer psychology,
          high-impact creative, and tastefully controlled chaos.
        </motion.p>

        {/* Primary CTA & Secondary Action (Full width on small phones, inline on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto mb-5 sm:mb-7 px-4 sm:px-0"
        >
          <a
            href="#services"
            className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-zinc-950 hover:bg-black shadow-[0_8px_20px_-4px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ring-1 ring-white/20"
          >
            <span>Let’s Build Your Brand</span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-300 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-zinc-700 hover:text-zinc-950 bg-white/90 hover:bg-white border border-zinc-200/90 hover:border-zinc-300 shadow-2xs backdrop-blur-md transition-all duration-200 hover:scale-[1.01]"
          >
            <Sparkles className="w-3.5 h-3.5 text-zinc-500" />
            <span>Discover Agency</span>
          </a>
        </motion.div>

        {/* AAA Social Proof & Trust Strip (Mobile Optimized) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-3 sm:px-4 py-1.5 rounded-full bg-zinc-100/85 border border-zinc-200/80 backdrop-blur-sm text-[10.5px] sm:text-xs text-zinc-600 max-w-[95vw] sm:max-w-none"
        >
          {/* Avatar Stack */}
          <div className="flex items-center -space-x-1.5">
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-zinc-800 border-2 border-white flex items-center justify-center text-[7px] sm:text-[8px] font-bold text-white">
              N
            </div>
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-zinc-700 border-2 border-white flex items-center justify-center text-[7px] sm:text-[8px] font-bold text-white">
              S
            </div>
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-zinc-600 border-2 border-white flex items-center justify-center text-[7px] sm:text-[8px] font-bold text-white">
              +
            </div>
          </div>

          <div className="flex items-center gap-1 font-semibold text-zinc-900">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="ml-0.5">4.9/5 Rating</span>
          </div>

          <span className="text-zinc-300">•</span>
          <span className="font-medium text-zinc-600">
            140+ Brands
          </span>

          <span className="hidden md:inline text-zinc-300">•</span>
          <span className="hidden md:inline-flex items-center gap-1 font-medium text-zinc-700">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-700" />
            Top 1% Creative Agency
          </span>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Waypoint Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-10 flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-700 transition-colors cursor-pointer pb-1 sm:pb-0"
        onClick={() => {
          const statsSection = document.getElementById('stats');
          if (statsSection) statsSection.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase">Scroll To Explore</span>
        <div className="w-3.5 h-6 sm:w-4 sm:h-7 rounded-full border border-zinc-300 flex items-start justify-center p-0.5 sm:p-1">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-zinc-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
