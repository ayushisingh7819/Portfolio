import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left info */}
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-extrabold text-slate-900 dark:text-white text-base tracking-tight">
              {personalInfo.name}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {personalInfo.role} • Lovely Professional University (2029)
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 text-slate-400">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                title="LeetCode"
              >
                <LeetCodeIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-xs"
              aria-label="Scroll to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Ayushi Singh. All rights reserved.</p>
          <p>Designed & Engineered with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
