import React from 'react';
import { ShieldCheck, Twitter, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 text-slate-400">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-white">
              <ShieldCheck className="h-5 w-5 text-emerald-500" />
              <span>ZeroTech Security</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Democratizing home security for the modern nomad. No drills, no contracts, just peace of mind.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 font-semibold text-white">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400">Latest Guides</a></li>
              <li><a href="#" className="hover:text-emerald-400">Gear Reviews</a></li>
              <li><a href="#" className="hover:text-emerald-400">Setup Tutorials</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Connect</h3>
            <div className="flex gap-4">
                <a href="#" className="hover:text-emerald-400"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="hover:text-emerald-400"><Github className="h-5 w-5" /></a>
                <a href="#" className="hover:text-emerald-400"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-900 pt-8 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} ZeroTech Security. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;