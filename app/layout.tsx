import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Merriweather, Playfair_Display } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const merriweather = Merriweather({ weight: ['300', '400', '700', '900'], subsets: ['latin'], variable: '--font-merriweather' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'ZeroTech Security',
  description: 'Minimalist, content-first static blog engine for smart home security guides.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} ${playfair.variable} text-slate-200 antialiased overflow-x-hidden bg-slate-950`}>
        <div className="fixed inset-0 -z-50 w-full h-full bg-slate-950 overflow-hidden">
             {/* Gradient Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-600/20 blur-[100px] animate-blob mix-blend-screen" />
            <div className="absolute top-[10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-600/20 blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
            <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-blue-600/20 blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />
             {/* Noise Overlay */}
            <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay"></div>
        </div>
        
        <Navbar />
        <main className="flex-grow min-h-screen relative z-10 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}