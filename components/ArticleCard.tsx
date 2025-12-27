import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { Post } from '../types';

interface ArticleCardProps {
  post: Post;
  style?: React.CSSProperties;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ post, style }) => {
  return (
    <article 
      style={style} 
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-slate-900/40 border border-slate-800 transition-all duration-500 hover:border-emerald-500/30 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.2)] hover:-translate-y-2 backdrop-blur-md opacity-0 animate-fade-in-up"
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent z-20 pointer-events-none" />

      <div className="aspect-[16/9] w-full overflow-hidden bg-slate-800 relative">
        <div className="absolute inset-0 bg-emerald-900/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Image 
          src={post.metadata.coverImage} 
          alt={post.metadata.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="flex flex-1 flex-col p-6 z-10 relative">
        <div className="mb-4 flex items-center gap-4 text-xs font-medium text-emerald-400">
            <span className="flex items-center gap-1 bg-emerald-950/50 px-2 py-1 rounded-md border border-emerald-900/50 backdrop-blur-sm">
                <Tag className="h-3 w-3" />
                {post.metadata.category}
            </span>
            <span className="flex items-center gap-1 text-slate-500">
                <Calendar className="h-3 w-3" />
                {post.metadata.date}
            </span>
        </div>

        <h3 className="mb-2 text-xl font-bold text-white group-hover:text-emerald-400 transition-colors font-display tracking-tight">
          <Link href={`/blog/${post.slug}`} className="focus:outline-none">
            <span className="absolute inset-0" />
            {post.metadata.title}
          </Link>
        </h3>
        
        <p className="mb-6 line-clamp-3 text-sm text-slate-400 leading-relaxed font-serif">
          {post.metadata.excerpt}
        </p>

        <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-emerald-500">
          Read Guide <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;