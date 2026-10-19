'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import PhilosophyScroll from '@/components/PhilosophyScroll';
import AboutSection from '@/components/AboutSection';
import ServicesBento from '@/components/ServicesBento';
import ProblemSolution from '@/components/ProblemSolution';
import WhyChooseUs from '@/components/WhyChooseUs';
import ClientsAndFootprint from '@/components/ClientsAndFootprint';
import Footer from '@/components/Footer';

// Dynamic import with SSR disabled to guarantee zero WebGL server-side build errors on Vercel
const CameraTunnel3D = dynamic(() => import('@/components/CameraTunnel3D'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 z-0 bg-white" />,
});

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white overflow-x-hidden font-sans">
      {/* 3D WebGL Fly-Through Grey Curved Tunnel Background */}
      <CameraTunnel3D />

      {/* Global Subtle Ambient Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.03),transparent_60%)]" />
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.02),transparent_50%)]" />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Page Content Flow */}
      <div className="relative z-10">
        {/* Section 1: Compact Landing Hero */}
        <div id="home">
          <Hero />
        </div>

        {/* Section 2: Metrics / Stats Bar */}
        <StatsBar />

        {/* Section 3: Philosophy Statement */}
        <PhilosophyScroll />

        {/* Section 4: About Us */}
        <AboutSection />

        {/* Section 5: Services Bento Grid */}
        <ServicesBento />

        {/* Section 6: How We Work / Problem-Solution Dynamic Showcase */}
        <ProblemSolution />

        {/* Section 7: Our Edge / Why Choose Us */}
        <WhyChooseUs />

        {/* Section 8: Brands That Trust Us & Global Footprint */}
        <ClientsAndFootprint />

        {/* Section 9: Footer & Contact */}
        <Footer />
      </div>
    </main>
  );
}
