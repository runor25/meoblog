import React from 'react';
// import './globals.css'; // REMOVED to prevent build errors
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
      <head>
        {/* Tailwind CSS CDN */}
        <script src="https://cdn.tailwindcss.com?plugins=typography"></script>
        
        {/* Custom CSS (Moved from globals.css) */}
        <style dangerouslySetInnerHTML={{ __html: `
          .bg-noise {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
          }
          body {
            background-color: #020617;
          }
        `}} />

        {/* Custom Tailwind Configuration */}
        <script dangerouslySetInnerHTML={{ __html: `
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  emerald: {
                    400: '#34d399',
                    500: '#10b981',
                    600: '#059669',
                  },
                  slate: {
                    850: '#1e293b', 
                    900: '#0f172a',
                    950: '#020617',
                  }
                },
                fontFamily: {
                  sans: ['var(--font-inter)', 'sans-serif'],
                  serif: ['var(--font-merriweather)', 'serif'],
                  display: ['var(--font-playfair)', 'serif'],
                },
                animation: {
                  'blob': 'blob 7s infinite',
                  'fade-in': 'fadeIn 1s ease-out forwards',
                  'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                  'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
                  'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
                  'shimmer': 'shimmer 2s linear infinite',
                  'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                },
                keyframes: {
                  blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                  },
                  fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                  },
                  fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                  },
                  fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                  },
                  fadeInRight: {
                    '0%': { opacity: '0', transform: 'translateX(20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                  },
                  shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                  }
                },
              },
            },
          }
        `}} />
      </head>
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