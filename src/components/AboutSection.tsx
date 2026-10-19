'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, ShieldCheck, HeartHandshake } from 'lucide-react';

const ABOUT_HIGHLIGHTS = [
  {
    num: '01',
    icon: Compass,
    title: 'Emotion-First Science',
    desc: 'Data backed by human behavioural psychology, not robotic assumptions.',
    metric: '98.6% Recall Index',
  },
  {
    num: '02',
    icon: ShieldCheck,
    title: 'Full Spectrum In-House',
    desc: 'Strategy, cinematic film, brand collateral, and performance media executed seamlessly.',
    metric: '100% In-House Pipeline',
  },
  {
    num: '03',
    icon: HeartHandshake,
    title: 'Boutique Craft, Global Reach',
    desc: 'Personalized senior attention paired with global enterprise ambition.',
    metric: '140+ Global Brands',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-14 bg-white/90 border border-zinc-200/90 backdrop-blur-xl shadow-lg shadow-zinc-950/5 overflow-hidden"
        >
          {/* Subtle Top Specular Accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-zinc-700 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                We are the Nth Senze
              </div>

              <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold font-sans text-zinc-950 tracking-tight leading-[1.2] sm:leading-[1.18]">
                About Us —{' '}
                <span className="bg-gradient-to-r from-zinc-950 via-zinc-700 to-zinc-500 bg-clip-text text-transparent">
                  We Senze What Works
                </span>
              </h2>

              <p className="text-zinc-700 text-xs sm:text-base leading-relaxed">
                A brand isn’t a logo or tagline—it’s an emotional feeling. We craft ideas and
                experiences that hit people in the heart, not just the algorithm.
                Subtle, smart, and tastefully controlled chaos.
              </p>

              <p className="text-zinc-500 text-xs sm:text-base leading-relaxed font-normal">
                At Nth Senze, we go beyond surface-level marketing to understand what
                truly drives attention, emotion, and trust. We combine strategy,
                creativity, and human instinct to build brands that don’t just exist—they
                connect, resonate, and stay.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-zinc-950 hover:bg-black shadow-md shadow-zinc-950/15 hover:scale-[1.02] active:scale-[0.98] transition-all ring-1 ring-white/20"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-300" />
                </a>
              </div>
            </div>

            {/* Right Highlights Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 gap-3 sm:gap-3.5">
              {ABOUT_HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.num}
                    className="group relative p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-zinc-50/80 hover:bg-white border border-zinc-200/80 hover:border-zinc-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 shadow-2xs group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-200">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                          {item.metric}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-400">
                          {item.num}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-zinc-950 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
