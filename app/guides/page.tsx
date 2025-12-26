import React from 'react';
import { getAllPosts } from '../../lib/posts';
import ArticleCard from '../../components/ArticleCard';
import { Shield, Search } from 'lucide-react';

const GuidesPage: React.FC = () => {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400 mb-6 backdrop-blur-sm opacity-0 animate-fade-in-down">
              <Shield className="h-3 w-3 fill-emerald-500" />
              <span className="font-semibold tracking-wide">THE ARCHIVE</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-display tracking-tight opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Protocols</span>
          </h1>
          <p className="text-lg text-slate-300 font-serif leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            The complete collection of setup guides, privacy checklists, and hardware reviews. 
            No fluff, just instructions.
          </p>
        </div>

        {/* Search/Filter Bar (Visual only for now) */}
        <div className="max-w-xl mx-auto mb-16 relative opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-500" />
            </div>
            <input 
                type="text" 
                placeholder="Search for 'cameras', 'routers', or 'renter friendly'..." 
                className="w-full pl-11 pr-4 py-4 bg-slate-900/50 border border-slate-800 rounded-2xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 backdrop-blur-md transition-all shadow-lg hover:bg-slate-900/70"
            />
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <ArticleCard key={post.slug} post={post} style={{ animationDelay: `${400 + index * 100}ms` }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuidesPage;