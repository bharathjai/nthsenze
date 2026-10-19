'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone, Instagram, Linkedin, Twitter, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'How We Work', href: '#how-we-work' },
    { label: 'Services', href: '#services' },
    { label: 'Our Edge', href: '#why-us' },
    { label: 'Clients', href: '#clients' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/thenthsenze' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/thenthsenze' },
    { icon: Twitter, label: 'X (Twitter)', href: 'https://twitter.com/thenthsenze' },
  ];

  return (
    <footer id="contact" className="relative z-10 border-t border-zinc-200 bg-zinc-50/80 text-zinc-900 overflow-hidden scroll-mt-24">
      {/* Top subtle highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />

      {/* ---------------------------------------------------------------------- */}
      {/* PRE-FOOTER LUXURY CALL TO ACTION BANNER                                */}
      {/* ---------------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-10 sm:pb-14">
        <div className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-14 bg-white border border-zinc-200/90 shadow-xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-2.5 sm:space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-zinc-900" />
              <span>Initiate Collaboration</span>
            </div>
            <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold font-sans text-zinc-950 tracking-tight leading-[1.2]">
              Ready to Step Into the{' '}
              <span className="bg-gradient-to-r from-zinc-950 via-zinc-700 to-zinc-500 bg-clip-text text-transparent">
                Nth Dimension?
              </span>
            </h3>
            <p className="text-zinc-600 text-xs sm:text-sm md:text-base max-w-xl font-normal leading-relaxed">
              Whether launching a new enterprise brand or redefining an established industry leader, we craft the psychological spark that makes you unmissable.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto flex-shrink-0">
            <a
              href="mailto:hello@thenthsenze.com?subject=Brand%20Transformation%20Brief"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-zinc-950 hover:bg-black shadow-lg shadow-zinc-950/20 hover:scale-[1.02] active:scale-[0.98] transition-all ring-1 ring-white/20 text-center"
            >
              <span>Schedule Strategy Call</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-300" />
            </a>
            <div className="text-[10px] sm:text-[11px] font-mono text-zinc-400 text-center">
              Response within 24h
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* MAIN FOOTER DIRECTORY                                                 */}
      {/* ---------------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-zinc-200">
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <Image
                src="/assets/logo.png"
                alt="The Nth Senze"
                width={160}
                height={38}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-sm">
              Where brands discover their next dimension. We engineer psychological depth, creative chaos, and brand resonance that turns audiences into believers.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              {socialLinks.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-9 h-9 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:border-zinc-300 hover:bg-zinc-100 transition-all duration-200 shadow-2xs"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-zinc-600 hover:text-zinc-950 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-300 group-hover:bg-zinc-900 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Location */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono">
              Get in Touch
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-zinc-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-zinc-700 mt-0.5 shrink-0" />
                <span>Chennai, India · Working with global clients worldwide</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-zinc-700 shrink-0" />
                <a
                  href="mailto:hello@thenthsenze.com"
                  className="hover:text-zinc-950 transition-colors"
                >
                  hello@thenthsenze.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-zinc-700 shrink-0" />
                <a
                  href="tel:+919884000000"
                  className="hover:text-zinc-950 transition-colors"
                >
                  +91 (0) 98840 NTHSZ
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="mailto:hello@thenthsenze.com?subject=Brand%20Inquiry"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-zinc-950 hover:bg-black text-white shadow-md shadow-zinc-950/10 hover:scale-[1.02] transition-all duration-200 ring-1 ring-white/20"
              >
                <span>Initiate Brand Brief</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} The Nth Senze. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#home" className="hover:text-zinc-800 transition-colors">
              Privacy & Legal
            </Link>
            <span className="text-zinc-300">•</span>
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Vercel Edge Ready</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
