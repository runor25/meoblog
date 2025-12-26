import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '../lib/posts';
import ArticleCard from '../components/ArticleCard';
import { ArrowDown, CheckCircle2, Lock, ArrowRight, Shield } from 'lucide-react';

const HomePage = () => {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 md:pt-32 md:pb-40">
            {/* Subtle glow specifically for Hero center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full -z-10 pointer-events-none animate-pulse-slow"></div>

            <div className="container mx-auto px-4 text-center">
                <div 
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400 mb-8 backdrop-blur-sm shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)] opacity-0 animate-fade-in-down"
                    style={{ animationDelay: '0ms' }}
                >
                    <Shield className="h-3 w-3 fill-emerald-500" />
                    <span className="font-semibold tracking-wide">ZERO DRILLS. ZERO CONTRACTS.</span>
                </div>
                
                <h1 
                    className="mx-auto max-w-5xl text-5xl font-extrabold tracking-tight text-white sm:text-7xl mb-8 leading-[1.1] font-display opacity-0 animate-fade-in-up"
                    style={{ animationDelay: '150ms' }}
                >
                    Smart Security for the <br className="hidden md:block"/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-cyan-400">Setup Averse</span>.
                </h1>
                
                <p 
                    className="mx-auto max-w-2xl text-lg text-slate-300 mb-10 leading-relaxed font-serif opacity-0 animate-fade-in-up"
                    style={{ animationDelay: '300ms' }}
                >
                    You’re not lazy, you’re efficient. We review the gear that respects your time, your deposit, and your privacy. No PhD required.
                </p>
                
                <div 
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: '450ms' }}
                >
                    <Link href="/guides" className="flex items-center justify-center h-12 px-8 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95">
                        Start Reading
                    </Link>
                    <Link href="/guides" className="flex items-center justify-center h-12 px-8 rounded-full border border-slate-700 hover:border-slate-500 text-slate-300 font-medium hover:bg-slate-800/50 transition-all backdrop-blur-sm">
                        View Top Gear
                    </Link>
                </div>

                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
                    <div 
                        className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50 backdrop-blur-md hover:bg-slate-900/50 transition-all duration-500 hover:-translate-y-1 shadow-lg opacity-0 animate-fade-in-up"
                        style={{ animationDelay: '600ms' }}
                    >
                        <Lock className="h-8 w-8 text-emerald-500 mb-4" />
                        <h3 className="text-white font-bold text-lg mb-2 font-display">Zero Setup</h3>
                        <p className="text-slate-400 text-sm leading-relaxed font-serif">Wireless gear that installs in minutes using simple adhesives. No power drills necessary.</p>
                    </div>
                    <div 
                        className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50 backdrop-blur-md hover:bg-slate-900/50 transition-all duration-500 hover:-translate-y-1 shadow-lg opacity-0 animate-fade-in-up"
                        style={{ animationDelay: '700ms' }}
                    >
                        <CheckCircle2 className="h-8 w-8 text-emerald-500 mb-4" />
                        <h3 className="text-white font-bold text-lg mb-2 font-display">Renter Approved</h3>
                        <p className="text-slate-400 text-sm leading-relaxed font-serif">Hardware selected specifically for apartments and rentals. Keep your security deposit safe.</p>
                    </div>
                    <div 
                        className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50 backdrop-blur-md hover:bg-slate-900/50 transition-all duration-500 hover:-translate-y-1 shadow-lg opacity-0 animate-fade-in-up"
                        style={{ animationDelay: '800ms' }}
                    >
                        <ArrowDown className="h-8 w-8 text-emerald-500 mb-4" />
                        <h3 className="text-white font-bold text-lg mb-2 font-display">Cost Effective</h3>
                        <p className="text-slate-400 text-sm leading-relaxed font-serif">Avoid predatory 3-year contracts. We focus on systems with low or no monthly fees.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Recent Guides Grid */}
        <section className="py-24 border-t border-slate-800/50 bg-slate-950/30 backdrop-blur-sm">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight font-display">Latest Guides</h2>
                        <p className="text-slate-400 font-serif">Fresh protocols for the modern home.</p>
                    </div>
                    <Link href="/guides" className="hidden md:flex items-center gap-2 text-emerald-400 font-medium hover:text-emerald-300 transition-colors">
                        View all <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.slice(0, 3).map((post, index) => (
                        <ArticleCard key={post.slug} post={post} style={{ animationDelay: `${200 + index * 100}ms` }} />
                    ))}
                </div>
                
                 <div className="mt-12 text-center md:hidden">
                    <Link href="/guides" className="inline-flex items-center gap-2 text-emerald-400 font-medium hover:text-emerald-300">
                        View all guides <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    </div>
  );
};

export default HomePage;