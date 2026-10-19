'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';

export default function PhilosophyScroll() {
  return (
    <section
      id="philosophy"
      className="relative z-10 min-h-[50vh] sm:min-h-[75vh] flex items-center justify-center px-4 sm:px-6 py-14 sm:py-24 text-center overflow-hidden"
    >
      {/* Background soft ambient bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[700px] h-[200px] sm:h-[350px] bg-slate-100/60 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-4 sm:space-y-6"
        >
          {/* Section Pill Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-zinc-100/90 border border-zinc-200/80 text-zinc-700 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
            <BrainCircuit className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-zinc-800" />
            <span>The Psychological Imperative</span>
          </div>

          {/* Primary Statement */}
          <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold font-sans text-zinc-950 tracking-tight leading-[1.2] sm:leading-[1.18] max-w-4xl mx-auto uppercase px-2">
            Most see marketing as visibility.{' '}
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-zinc-950 via-zinc-700 to-zinc-500 bg-clip-text text-transparent">
              We see it as psychology.
            </span>
          </h2>

          {/* Secondary Subtext */}
          <p className="text-zinc-600 text-xs sm:text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed pt-1 sm:pt-2 px-2">
            Attention is never bought with brute ad spend. It is unlocked through
            subconscious desire, neuro-aesthetics, and primal cultural instinct.
          </p>

          <div className="pt-3">
            <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400">
              — The Nth Creative Doctrine
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
