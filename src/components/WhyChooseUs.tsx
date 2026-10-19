'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, Quote, ArrowRight, Activity, Zap } from 'lucide-react';

const PILLARS = [
  {
    num: '01',
    title: 'Emotion-First Marketing',
    desc: 'Connecting with human instinct before rational justification.',
    metric: '98.8% Recall',
  },
  {
    num: '02',
    title: 'Thinking Like Customers',
    desc: 'Empathetic immersion into real user pain points and desires.',
    metric: 'Zero Clutter',
  },
  {
    num: '03',
    title: 'Street-Level Insights',
    desc: 'Real cultural context shaped into stories audiences naturally embrace.',
    metric: 'Viral Resonance',
  },
  {
    num: '04',
    title: 'In-House Expertise',
    desc: 'Zero outsourced dilution—direct senior creative and strategic craft.',
    metric: 'Direct Senior Craft',
  },
  {
    num: '05',
    title: 'Boutique Scale. Global Mindset',
    desc: 'Agile high-touch execution paired with enterprise ambition.',
    metric: 'Worldwide Reach',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 scroll-mt-20 sm:scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Neural-Brain Architecture Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] rounded-full bg-slate-200/60 blur-[70px] pointer-events-none" />

          {/* Brain Graphic Container in sleek dark obsidian card */}
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-square rounded-2xl sm:rounded-3xl overflow-hidden p-4 sm:p-6 bg-zinc-950 border border-zinc-800 shadow-2xl flex items-center justify-center group">
            {/* Ambient Radial Blue Flare */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.14),transparent_70%)] pointer-events-none" />

            {/* Neural Brain Illustration */}
            <Image
              src="/assets/brain-illustration.png"
              alt="Neural Brain Architecture"
              width={380}
              height={380}
              className="object-contain drop-shadow-2xl relative z-10 transition-transform duration-700 group-hover:scale-105"
              priority
            />

            {/* Floating Telemetry Micro-HUD Badge 1: Top-Right */}
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-black/85 border border-zinc-800 backdrop-blur-md shadow-lg">
              <span className="relative flex h-1.5 sm:h-2 w-1.5 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 sm:h-2 w-1.5 sm:w-2 bg-emerald-500" />
              </span>
              <div className="text-[9px] sm:text-[10px] font-mono text-zinc-300">
                <span className="text-zinc-500 hidden xs:inline">COGNITION : </span>
                <span className="text-white font-semibold">99.4%</span>
              </div>
            </div>

            {/* Floating Telemetry Micro-HUD Badge 2: Bottom-Left */}
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 z-20 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-black/85 border border-zinc-800 backdrop-blur-md shadow-lg">
              <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
              <div className="text-[9px] sm:text-[10px] font-mono text-zinc-300">
                <span className="text-zinc-500 hidden xs:inline">RETENTION : </span>
                <span className="text-white font-semibold">4.8X AVG</span>
              </div>
            </div>

            {/* Floating Telemetry Micro-HUD Badge 3: Top-Left (Visible on screens >= 380px) */}
            <div className="hidden xs:flex absolute top-3 sm:top-4 left-3 sm:left-4 z-20 items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-[9px] font-mono text-zinc-400">
              <Activity className="w-3 h-3 text-cyan-400" />
              <span>NTH-AI SENSORY</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Narrative, Quote Block & 5 Interactive Hover Pills */}
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-zinc-700 text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
            Our Edge
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold font-sans text-zinc-950 tracking-tight leading-[1.18]">
            Why Brands{' '}
            <span className="bg-gradient-to-r from-zinc-950 via-zinc-700 to-zinc-500 bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>

          {/* Quote Block */}
          <div className="relative p-5 sm:p-6 rounded-2xl bg-zinc-50 border-l-4 border-l-zinc-950 border border-zinc-200/80 shadow-2xs">
            <Quote className="w-5 h-5 text-zinc-500 mb-2 opacity-80" />
            <p className="text-zinc-800 text-sm sm:text-base italic font-normal leading-relaxed">
              “Ideas rooted in culture, guided by human behaviour, and shaped into
              stories people naturally connect with. A boutique team with global
              ambition and zero tolerance for boredom.”
            </p>
          </div>

          {/* 5 Interactive Hover-Pill Rows */}
          <div className="space-y-2.5 pt-1">
            {PILLARS.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group relative flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-white hover:bg-zinc-50 border border-zinc-200/90 hover:border-zinc-300 transition-all duration-200 hover:translate-x-1 cursor-default shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-zinc-400 group-hover:text-zinc-900 transition-colors">
                    {pillar.num}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-zinc-900 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-zinc-950">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-zinc-500 font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline text-[10px] font-mono text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
                    {pillar.metric}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-950 opacity-0 group-hover:opacity-100 transition-all -translate-x-1.5 group-hover:translate-x-0" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
