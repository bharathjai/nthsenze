'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatItemProps {
  end: number;
  suffix?: string;
  tag: string;
  label: string;
  desc: string;
}

function StatCounter({ end, suffix = '+', tag, label, desc }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Smooth cubic ease out
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative group p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-white/85 hover:bg-white border border-zinc-200/90 hover:border-zinc-300 backdrop-blur-xl transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 overflow-hidden"
    >
      {/* Specular hairline top accent */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-zinc-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Editorial Index Tag */}
      <div className="text-[9.5px] sm:text-[10px] font-mono font-medium tracking-widest uppercase text-zinc-400 mb-2 sm:mb-3">
        {tag}
      </div>

      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans text-zinc-950 tracking-tight mb-1.5 sm:mb-2 flex items-baseline">
        <span>{count.toLocaleString()}</span>
        <span className="text-zinc-500 ml-1">{suffix}</span>
      </div>

      <div className="text-sm sm:text-lg font-semibold text-zinc-900 mb-0.5 sm:mb-1">{label}</div>
      <div className="text-xs sm:text-sm text-zinc-500 font-normal leading-relaxed">{desc}</div>
    </motion.div>
  );
}

export default function StatsBar() {
  return (
    <section id="stats" className="relative z-10 py-8 sm:py-12 px-4 sm:px-6 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
        <StatCounter
          end={2700}
          tag="[ 01 // DELIVERED IP ]"
          label="Creatives Delivered"
          desc="Campaigns, brand systems, and high-impact digital collateral."
        />
        <StatCounter
          end={1300}
          tag="[ 02 // CINEMATIC CRAFT ]"
          label="Videos Produced"
          desc="Cinematic commercials, narrative films, and high-retention digital media."
        />
        <StatCounter
          end={140}
          tag="[ 03 // GLOBAL TRUST ]"
          label="Happy Clients"
          desc="Corporate leaders, venture-backed scaleups, and luxury brands worldwide."
        />
      </div>
    </section>
  );
}
