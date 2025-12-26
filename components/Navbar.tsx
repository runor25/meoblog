'use client';

import React from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/70 backdrop-blur-xl animate-fade-in-down" style={{ animationDuration: '0.6s' }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-white hover:text-emerald-400 transition-colors group">
            <ShieldCheck className="h-6 w-6 text-emerald-500 group-hover:rotate-12 transition-transform duration-300" />
            <span>ZeroTech<span className="text-emerald-500">.</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link href="/" className="hover:text-emerald-400 transition-colors hover:scale-105 transform">Home</Link>
            <Link href="/guides" className="hover:text-emerald-400 transition-colors hover:scale-105 transform">Guides</Link>
            <Link href="/guides" className="hover:text-emerald-400 transition-colors hover:scale-105 transform">Reviews</Link>
            <Link href="/guides" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-full font-semibold text-xs transition-all shadow-lg shadow-emerald-900/20 hover:scale-105 active:scale-95 hover:shadow-emerald-500/30">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900/95 backdrop-blur-md px-4 py-4 space-y-4 animate-fade-in">
            <Link href="/" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-emerald-400">Home</Link>
            <Link href="/guides" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-emerald-400">Guides</Link>
            <Link href="/guides" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-emerald-400">Reviews</Link>
            <Link href="/guides" onClick={() => setIsOpen(false)} className="block w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-md font-semibold text-sm">
              Get Started
            </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;