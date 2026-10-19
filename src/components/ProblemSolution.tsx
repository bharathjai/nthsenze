'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    problemLabel: 'Problem 01',
    problemTitle: 'Have you ever looked at your marketing and felt... “something is missing”?',
    problemDesc:
      'The posts are going out. The ads are running. But the brand still doesn’t feel memorable, distinctive, or culturally resonant.',
    solutionLabel: 'The Solution',
    solutionTitle: 'The Missing Layer',
    solutionDesc:
      'Understanding what makes people pause, trust, remember, and respond. Not just what triggers an algorithmic scroll.',
    image: '/assets/problem-1.png',
    alt: 'The Missing Layer Analytics',
  },
  {
    id: 2,
    problemLabel: 'The Opportunity',
    problemTitle: 'Why do some brands instantly click with people?',
    problemDesc:
      'Even before the product is explained. Even before the pricing is revealed. They possess an instinctive magnetic gravity.',
    solutionLabel: 'The Shift',
    solutionTitle: 'The answer is rarely visibility alone.',
    solutionDesc:
      'It is familiarity. Emotion. Cultural instinct. The invisible layer people feel but cannot fully explain. We engineer that exact feeling.',
    image: '/assets/problem-2.png',
    alt: 'Sensory Cultural Connection',
  },
];

export default function ProblemSolution() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev + 1));
  };

  const slide = SLIDES[currentSlide];

  return (
    <section id="how-we-work" className="relative z-10 pt-14 sm:pt-24 pb-14 sm:pb-20 px-4 sm:px-6 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Header Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8 px-1">
          <div>
            <div className="text-[10px] sm:text-xs font-semibold text-zinc-500 tracking-wider uppercase mb-1">
              The Critical Shift
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-sans text-zinc-950 tracking-tight">
              The Problem{' '}
              <span className="bg-gradient-to-r from-zinc-950 via-zinc-700 to-zinc-500 bg-clip-text text-transparent">
                is...
              </span>
            </h2>
          </div>

          {/* Interactive Slide Tabs & Navigation Arrows */}
          <div className="flex items-center gap-3">
            {/* Direct Switch Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-zinc-100 border border-zinc-200">
              {SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`px-3 py-1 rounded-full text-xs font-mono font-medium transition-all duration-200 ${
                    currentSlide === idx
                      ? 'bg-zinc-950 text-white shadow-xs'
                      : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60'
                  }`}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 flex items-center justify-center text-zinc-800 transition-all hover:scale-105 active:scale-95 shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 flex items-center justify-center text-zinc-800 transition-all hover:scale-105 active:scale-95 shadow-2xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Master Glassmorphic Card */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-white/95 border border-zinc-200/90 backdrop-blur-xl p-5 sm:p-10 lg:p-14 shadow-lg shadow-zinc-950/5 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-center"
            >
              {/* Left Column: Problem & Solution Copy */}
              <div className="lg:col-span-6 space-y-7">
                {/* Problem Block */}
                <div>
                  <div className="text-[11px] font-bold text-zinc-500 tracking-wider uppercase mb-1.5">
                    {slide.problemLabel}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-sans text-zinc-950 leading-snug mb-2.5">
                    {slide.problemTitle}
                  </h3>
                  <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
                    {slide.problemDesc}
                  </p>
                </div>

                <div className="h-px bg-zinc-100" />

                {/* Solution Block */}
                <div>
                  <div className="text-[11px] font-bold text-zinc-900 tracking-wider uppercase mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-zinc-800" />
                    <span>{slide.solutionLabel}</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-zinc-950 mb-1.5 font-sans">
                    {slide.solutionTitle}
                  </h4>
                  <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
                    {slide.solutionDesc}
                  </p>
                </div>
              </div>

              {/* Right Column: Framed Image Illustration */}
              <div className="lg:col-span-6 relative aspect-[16/11] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm group">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
