import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './app/page';
import BlogPostPage from './app/blog/[slug]/page';
import GuidesPage from './app/guides/page';

const InnerApp = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="min-h-screen flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200 relative">
             {/* Global Background Layer */}
            <div className="fixed inset-0 -z-50 w-full h-full bg-slate-950 overflow-hidden">
                {/* Gradient Orbs - Increased opacity for better visibility */}
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-600/20 blur-[100px] animate-blob mix-blend-screen" />
                <div className="absolute top-[10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-600/20 blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
                <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-blue-600/20 blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />
                
                {/* Noise Overlay */}
                <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay"></div>
            </div>

            <Navbar />
            <main className="flex-grow relative z-10">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/guides" element={<GuidesPage />} />
                    <Route path="/blog/:slug" element={<BlogPostPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

const App: React.FC = () => {
  return (
    <Router>
      <InnerApp />
    </Router>
  );
};

export default App;