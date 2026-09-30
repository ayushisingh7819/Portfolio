import React from 'react';
import { User, Award, Code, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About({ onOpenResume }) {
  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Background & Mindset
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h3>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Main About Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Passionate AI/ML & Full-Stack Engineer
              </h4>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                {personalInfo.aboutText}
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                {personalInfo.aboutMeRightCol}
              </p>

              {/* Core Interests List */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>AI/ML System Integration</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Modern React Frontend Engineering</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Node.js & Express REST Backend</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>DSA — Currently Learning & Practicing</span>
                </div>
              </div>

              {/* CV Action Buttons inside About */}
              {onOpenResume && (
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={onOpenResume}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-sm"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>View Digital CV</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {stat.label}
                  </div>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
