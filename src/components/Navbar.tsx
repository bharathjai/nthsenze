'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'How We Work', href: '#how-we-work' },
  { name: 'Services', href: '#services' },
  { name: 'Our Edge', href: '#why-us' },
  { name: 'Clients', href: '#clients' },
  { name: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        { name: 'Home', id: 'home' },
        { name: 'About Us', id: 'about' },
        { name: 'How We Work', id: 'how-we-work' },
        { name: 'Services', id: 'services' },
        { name: 'Our Edge', id: 'why-us' },
        { name: 'Clients', id: 'clients' },
        { name: 'Contact Us', id: 'contact' },
      ];

      const scrollPos = window.scrollY + 240;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sections[i].name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 h-16 sm:h-20 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-white/85 border-b border-black/[0.06] shadow-xs'
          : 'backdrop-blur-md bg-white/60 border-b border-black/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 md:px-10 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#home" className="flex items-center gap-3 group relative z-10">
          <div className="relative w-30 sm:w-36 h-8 sm:h-9 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/assets/logo.png"
              alt="The Nth Senze"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 px-3 py-1.5 rounded-full bg-black/[0.03] border border-black/[0.06] backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.name)}
                className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-all duration-200 rounded-full ${
                  isActive
                    ? 'text-zinc-950 bg-white font-semibold shadow-xs border border-black/[0.06]'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-black/[0.03]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-zinc-950 hover:bg-black shadow-md shadow-zinc-950/10 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 overflow-hidden ring-1 ring-white/20"
          >
            <span className="relative z-10">Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-black/[0.04] active:bg-black/[0.08] border border-black/[0.08] text-zinc-700 hover:text-zinc-950 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown with Safe Height & Scrolling */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 sm:top-20 bg-white/95 backdrop-blur-2xl border-b border-zinc-200/90 px-5 py-5 flex flex-col gap-2 shadow-2xl max-h-[calc(100dvh-4rem)] overflow-y-auto">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${
                  isActive
                    ? 'text-zinc-950 bg-zinc-100 font-semibold'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50'
                }`}
              >
                <span>{link.name}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-zinc-950" />}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-3 rounded-xl text-sm font-semibold text-white bg-zinc-950 hover:bg-black shadow-md flex items-center justify-center gap-2"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-300" />
          </a>
        </div>
      )}
    </header>
  );
}
