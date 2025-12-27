'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="prose prose-lg prose-invert prose-emerald max-w-none 
      prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-100
      prose-h1:text-4xl prose-h1:mb-8 
      prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-slate-800/50
      prose-h3:text-2xl prose-h3:text-emerald-400 prose-h3:mt-10 prose-h3:mb-4
      prose-p:font-serif prose-p:text-slate-300 prose-p:leading-8 prose-p:mb-8 prose-p:text-[1.125rem]
      prose-li:font-serif prose-li:text-slate-300 prose-li:my-3
      prose-ul:my-8 prose-ul:list-disc prose-ul:pl-6 prose-li:marker:text-emerald-500
      prose-ol:my-8 prose-ol:list-decimal prose-ol:pl-6 prose-ol:marker:text-emerald-500 prose-ol:marker:font-bold
      prose-strong:text-white prose-strong:font-bold
      prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline
      prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:bg-slate-900/30 prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:my-10 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-slate-200 prose-blockquote:font-serif
      prose-img:rounded-xl prose-img:shadow-2xl prose-img:shadow-black/50 prose-img:border prose-img:border-slate-800/50">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;