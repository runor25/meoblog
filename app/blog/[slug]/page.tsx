import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getPostBySlug, getAllPosts } from '../../../lib/posts';
import MarkdownRenderer from '../../../components/MarkdownRenderer';
import { ChevronLeft, Share2, User, Clock, Calendar } from 'lucide-react';
import { TocItem } from '../../../types';

// Helper to extract headings for Table of Contents
const extractHeadings = (markdown: string): TocItem[] => {
    const headingRegex = /^(#{2,3})\s+(.*)$/gm;
    let match;
    const headings: TocItem[] = [];
    let idCounter = 0;

    while ((match = headingRegex.exec(markdown)) !== null) {
        const level = match[1].length; // 2 or 3
        const text = match[2];
        const id = `heading-${idCounter++}`;
        headings.push({ id, text, level });
    }
    return headings;
};

// Estimate read time
const calculateReadTime = (content: string): string => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const time = Math.ceil(words / wordsPerMinute);
    return `${time} min read`;
};

// Generate static params for all posts at build time
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Define Params type to be compatible with Next.js 15+ (Promise) or 14 (Object)
type Params = Promise<{ slug: string }> | { slug: string };

export default async function BlogPostPage({ params }: { params: Params }) {
  // CRITICAL FIX: Await params before accessing properties.
  // This resolves the "Digest: 769976000" error in Next.js 15+.
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  const post = getPostBySlug(slug);

  if (!post) {
    return (
        <div className="flex h-[50vh] flex-col items-center justify-center text-center opacity-0 animate-fade-in">
            <h1 className="text-4xl font-bold text-white mb-4">404</h1>
            <p className="text-slate-400 mb-8">Article not found.</p>
            <Link href="/" className="text-emerald-400 hover:underline">Return Home</Link>
        </div>
    );
  }

  const toc = extractHeadings(post.content);
  const readTime = calculateReadTime(post.content);

  return (
    <div className="min-h-screen pb-24">
        {/* Post Header */}
        <div className="relative h-[60vh] w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/30 z-10" />
            <div className="absolute inset-0 bg-emerald-900/20 mix-blend-overlay z-10" />
            <Image 
                src={post.metadata.coverImage} 
                alt={post.metadata.title}
                fill
                priority
                className="object-cover animate-fade-in scale-105"
                style={{ animationDuration: '1.5s' }}
                sizes="100vw"
            />
            <div className="absolute bottom-0 left-0 w-full z-20 pb-12 pt-24 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                <div className="container mx-auto px-4 md:px-6">
                    <Link href="/guides" className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 mb-6 transition-colors font-medium backdrop-blur-sm bg-slate-900/50 px-3 py-1.5 rounded-full border border-emerald-500/20 opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                        <ChevronLeft className="h-4 w-4" /> Back to Guides
                    </Link>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight max-w-4xl tracking-tight drop-shadow-lg font-display opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                        {post.metadata.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                        {post.metadata.author && (
                             <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-slate-800/80 flex items-center justify-center text-emerald-500 border border-slate-700 shadow-sm">
                                    <User className="h-4 w-4" />
                                </div>
                                <span className="font-medium">{post.metadata.author}</span>
                            </div>
                        )}
                       <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-emerald-500" />
                            <span>{post.metadata.date}</span>
                       </div>
                       <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-emerald-500" />
                            <span>{readTime}</span>
                       </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Content Layout */}
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
                
                {/* Main Content */}
                <main className="lg:w-2/3 pt-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                    <div className="p-8 md:p-12 rounded-2xl bg-slate-900/30 border border-slate-800/50 backdrop-blur-md shadow-xl transition-all hover:bg-slate-900/40">
                        <MarkdownRenderer content={post.content} />

                        {/* Share & Author Footer */}
                        <div className="mt-16 pt-8 border-t border-slate-800/50">
                            <div className="flex items-center justify-between">
                                <h4 className="text-white font-bold font-display">Share this article</h4>
                                <div className="flex gap-4">
                                    <button className="p-2 rounded-full bg-slate-800/50 text-slate-400 hover:text-white hover:bg-emerald-600 transition-all hover:scale-110">
                                        <Share2 className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Sidebar (TOC) */}
                <aside className="hidden lg:block lg:w-1/3 pt-12 opacity-0 animate-fade-in-right" style={{ animationDelay: '800ms' }}>
                    <div className="sticky top-24 space-y-8">
                        {/* Table of Contents - Glassmorphism */}
                        <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 shadow-xl backdrop-blur-md transition-all hover:border-emerald-500/20">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-display">
                                Table of Contents
                            </h3>
                            <nav>
                                <ul className="space-y-3 relative border-l border-slate-700/50 ml-2">
                                    {toc.length > 0 ? toc.map((item, index) => (
                                        <li key={index} style={{ paddingLeft: `${(item.level - 1) * 16}px` }} className="relative group">
                                            {/* 
                                              CRITICAL FIX: 
                                              Using <span> instead of <a> because we cannot pass `onClick` 
                                              (e.preventDefault) in a Server Component.
                                            */}
                                            <span 
                                                className={`text-sm block transition-all py-1 font-serif cursor-default ${index === 0 ? 'text-emerald-400 font-bold' : 'text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-1'}`}
                                            >
                                                {item.text}
                                            </span>
                                        </li>
                                    )) : (
                                        <li className="text-slate-500 text-sm pl-4">No sections found.</li>
                                    )}
                                </ul>
                            </nav>
                        </div>

                        {/* CTA Box - Glassmorphism */}
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/80 to-slate-900/80 border border-emerald-900/50 shadow-lg backdrop-blur-md group hover:shadow-emerald-900/20 transition-all">
                            <h4 className="font-bold text-white mb-2 font-display">Need Gear?</h4>
                            <p className="text-sm text-slate-400 mb-4 leading-relaxed font-serif">
                                Don't buy the wrong stuff. Check out our curated list of security essentials for 2025.
                            </p>
                            <button className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-bold transition-all shadow-lg shadow-emerald-900/20 group-hover:scale-[1.02] active:scale-95">
                                View Gear List
                            </button>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </div>
  );
}