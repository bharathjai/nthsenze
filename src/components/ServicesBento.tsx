'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  Sparkles,
  Clapperboard,
  TrendingUp,
  Radio,
  Layers,
  ArrowUpRight,
} from 'lucide-react';

const SERVICES = [
  {
    id: '01',
    title: 'Brand Strategy',
    icon: Compass,
    badge: 'Cognitive Architecture',
    desc: 'Clear brand thinking that gives your business a distinct voice, direction, and market presence—minus the jargon overload.',
    tags: ['Positioning', 'Identity Architecture', 'Brand Narrative'],
    visual: 'quadrant',
  },
  {
    id: '02',
    title: 'Content Strategy',
    icon: Sparkles,
    badge: 'Neuro-Attention',
    desc: 'Content engineered with intent. Every word, frame, and concept moves audiences from passive scrolling to genuine conviction.',
    tags: ['Editorial Systems', 'Campaign IP', 'Social Narrative'],
    visual: 'waveform',
  },
  {
    id: '03',
    title: 'Creative & Production',
    icon: Clapperboard,
    badge: 'Cinematic Craft',
    desc: 'Cinematic commercials, photography, and high-impact visuals crafted to make brands impossible to ignore. Trusted by 100+ global brands.',
    tags: ['Ad Films', 'High-End Visuals', 'Creative Direction'],
    visual: 'aperture',
  },
  {
    id: '04',
    title: 'Digital Marketing',
    icon: TrendingUp,
    badge: 'Growth Engineering',
    desc: 'Scroll-stopping creative combined with smarter targeting and higher ROAS. Marketing built to perform, not just appear active.',
    tags: ['Performance Media', 'Growth Engineering', 'Full-Funnel CRO'],
    visual: 'growth',
  },
  {
    id: '05',
    title: 'Media & Activations',
    icon: Radio,
    badge: 'Cultural Resonance',
    desc: 'From high-impact OOH to experiential street activations, we engineer real-world moments that create viral attention.',
    tags: ['OOH Networks', 'Experiential Events', 'PR Activations'],
    visual: 'broadcast',
  },
  {
    id: '06',
    title: 'Tech Solutions',
    icon: Layers,
    badge: 'Next.js & WebGL',
    desc: 'Thoughtful UI/UX, WebGL interactions, and seamless digital journeys that convert casual visitors into brand advocates naturally.',
    tags: ['Next.js / 3D WebGL', 'UI/UX Architecture', 'Interactive Design'],
    visual: 'isometric',
  },
];

function CardMicroVisual({ type }: { type: string }) {
  if (type === 'quadrant') {
    return (
      <div className="relative w-full h-14 rounded-lg bg-zinc-50 border border-zinc-200/60 p-2 flex items-center justify-between overflow-hidden">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border border-zinc-300 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-zinc-900/10 border border-zinc-900 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
            </div>
          </div>
          <div className="text-[10px] font-mono text-zinc-500">
            <div>MARKET FIT : OPTIMAL</div>
            <div className="text-zinc-800 font-semibold">RESONANCE : 99.2%</div>
          </div>
        </div>
        <div className="text-[9px] font-mono px-2 py-0.5 rounded bg-zinc-200/70 text-zinc-700">
          QUADRANT-A
        </div>
      </div>
    );
  }

  if (type === 'waveform') {
    return (
      <div className="relative w-full h-14 rounded-lg bg-zinc-50 border border-zinc-200/60 px-3 flex items-center justify-between overflow-hidden">
        <div className="flex items-end gap-1 h-8">
          {[40, 75, 30, 90, 60, 100, 45, 80, 65, 95, 50, 85].map((h, i) => (
            <div
              key={i}
              className="w-1.5 bg-zinc-300 group-hover:bg-zinc-900 rounded-t transition-colors duration-300"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="text-right">
          <div className="text-[9px] font-mono text-zinc-400">RETENTION RATE</div>
          <div className="text-[11px] font-mono font-bold text-zinc-900">4.8X DWELL TIME</div>
        </div>
      </div>
    );
  }

  if (type === 'aperture') {
    return (
      <div className="relative w-full h-14 rounded-lg bg-zinc-50 border border-zinc-200/60 px-3 flex items-center justify-between overflow-hidden">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full border-2 border-dashed border-zinc-400 flex items-center justify-center animate-spin-slow">
            <div className="w-2 h-2 rounded-full bg-zinc-900" />
          </div>
          <div className="text-[10px] font-mono text-zinc-600">
            <span className="text-zinc-950 font-semibold">4K RAW</span> • 60 FPS
          </div>
        </div>
        <div className="text-[9px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-white font-medium">
          CINEMATIC PIPELINE
        </div>
      </div>
    );
  }

  if (type === 'growth') {
    return (
      <div className="relative w-full h-14 rounded-lg bg-zinc-50 border border-zinc-200/60 px-3 flex items-center justify-between overflow-hidden">
        <div className="flex items-center gap-2">
          <svg className="w-20 h-8 overflow-visible" viewBox="0 0 80 30" fill="none">
            <path
              d="M0 25 C20 25, 30 18, 45 14 C60 10, 68 4, 80 2"
              stroke="#09090B"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="80" cy="2" r="3" fill="#09090B" />
          </svg>
        </div>
        <div className="text-right">
          <div className="text-[9px] font-mono text-emerald-600 font-semibold">+340% ROAS</div>
          <div className="text-[10px] font-mono text-zinc-500">FULL-FUNNEL CRO</div>
        </div>
      </div>
    );
  }

  if (type === 'broadcast') {
    return (
      <div className="relative w-full h-14 rounded-lg bg-zinc-50 border border-zinc-200/60 px-3 flex items-center justify-between overflow-hidden">
        <div className="flex items-center gap-2">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-zinc-900" />
          </div>
          <span className="text-[10px] font-mono text-zinc-700 font-medium">
            OOH + STREET PULSE
          </span>
        </div>
        <div className="text-[9px] font-mono px-2 py-0.5 rounded bg-zinc-200/70 text-zinc-700">
          VIRAL REACH
        </div>
      </div>
    );
  }

  // Isometric WebGL
  return (
    <div className="relative w-full h-14 rounded-lg bg-zinc-50 border border-zinc-200/60 px-3 flex items-center justify-between overflow-hidden">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 border border-zinc-400 rotate-45 flex items-center justify-center">
          <div className="w-2 h-2 bg-zinc-900" />
        </div>
        <span className="text-[10px] font-mono text-zinc-700 font-medium">
          THREE.JS / 60 FPS
        </span>
      </div>
      <div className="text-[9px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-white font-medium">
        ZERO LATENCY
      </div>
    </div>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = service.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group relative flex flex-col justify-between p-5 sm:p-7 lg:p-8 rounded-xl sm:rounded-2xl bg-white/90 hover:bg-white border border-zinc-200/90 hover:border-zinc-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-lg overflow-hidden"
    >
      {/* Subtle Dynamic Cursor Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl sm:rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 0, 0, 0.04), transparent 70%)',
        }}
      />

      <div>
        {/* Header with Icon, Badge & Number */}
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-zinc-100 border border-zinc-200/80 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-950 group-hover:text-white group-hover:border-zinc-950 transition-all duration-200 shadow-2xs">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[9.5px] sm:text-[10px] font-mono font-medium text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-full border border-zinc-200">
              {service.badge}
            </span>
            <span className="text-[11px] sm:text-xs font-mono font-semibold text-zinc-300">
              {service.id}
            </span>
          </div>
        </div>

        {/* Pillar Title */}
        <h3 className="text-base sm:text-lg font-bold font-sans text-zinc-950 tracking-tight mb-2 sm:mb-2.5 flex items-center justify-between">
          <span>{service.title}</span>
          <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-zinc-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </h3>

        {/* Pillar Description */}
        <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 font-normal">
          {service.desc}
        </p>

        {/* Dynamic Micro-Visual Schematic */}
        <div className="mb-4 sm:mb-5">
          <CardMicroVisual type={service.visual} />
        </div>
      </div>

      {/* Pill Tags */}
      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-100">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] sm:text-[11px] font-medium text-zinc-600 bg-zinc-50 px-2 sm:px-2.5 py-0.5 rounded-md border border-zinc-200/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ServicesBento() {
  return (
    <section id="services" className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-zinc-700 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3">
            Our Services
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-sans text-zinc-950 tracking-tight leading-[1.18] mb-2 sm:mb-3">
            A Full Creative{' '}
            <span className="bg-gradient-to-r from-zinc-950 via-zinc-700 to-zinc-500 bg-clip-text text-transparent">
              Engine
            </span>
          </h2>
          <p className="text-zinc-500 text-xs sm:text-base max-w-2xl mx-auto px-2">
            From brand strategy to production to digital growth, we handle
            everything end-to-end, making your brand unmissable.
          </p>
        </div>

        {/* 3x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
