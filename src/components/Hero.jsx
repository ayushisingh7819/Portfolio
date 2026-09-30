import React from 'react';
import { ArrowRight, Mail, Sparkles, CheckCircle2, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Soft background subtle blue gradient tint */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-500/5 dark:bg-indigo-400/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-blue-900/60 bg-blue-50/70 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-xs font-medium shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-400"></span>
              </span>
              <span>{personalInfo.role}</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Hi! I am <span className="text-blue-600 dark:text-blue-400">{personalInfo.name}</span>.
              </h1>
              
              {/* Internship Availability Highlight - Open to Web Development & Full Stack Internships */}
              <div className="pt-1">
                <p className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400 inline-flex items-center gap-2 bg-blue-50/80 dark:bg-blue-950/50 px-3.5 py-1.5 rounded-xl border border-blue-200/80 dark:border-blue-900/50">
                  <Sparkles className="w-4 h-4 shrink-0 text-blue-600 dark:text-blue-400" />
                  <span>Open to Web Development & Full Stack Internships</span>
                </p>
              </div>

              <h2 className="text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-300 pt-1">
                {personalInfo.tagline}
              </h2>
            </div>

            {/* Short Bio Description */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* View CV Digital Modal Trigger */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl transition-all duration-200 shadow-2xs hover:-translate-y-0.5 cursor-pointer"
                title="View Digital CV Interactive Preview"
              >
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>View Digital CV</span>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 w-full flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition-all duration-200"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-300 dark:hover:border-amber-700 hover:bg-amber-50/50 dark:hover:bg-amber-950/30 transition-all duration-200"
                  aria-label="LeetCode Profile"
                  title="LeetCode Profile"
                >
                  <LeetCodeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Perfect Circular Profile Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-[280px] sm:max-w-[320px] w-full aspect-square">
              
              {/* Outer circular gradient glow border */}
              <div className="w-full h-full rounded-full p-2 bg-gradient-to-tr from-blue-600 via-indigo-400 to-sky-300 dark:from-blue-500 dark:to-indigo-600 shadow-xl dark:shadow-blue-950/40 transition-transform duration-300 group-hover:scale-105">
                
                {/* Inner image container: 50% border radius, object-fit cover */}
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-900 border-4 border-white dark:border-slate-900 shadow-inner">
                  <img
                    src="/ayushi-singh.jpg"
                    alt="Ayushi Singh - AI/ML & Full-Stack Developer"
                    className="w-full h-full rounded-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    style={{ borderRadius: '50%', objectFit: 'cover' }}
                  />
                </div>

              </div>

              {/* Status Pill Badge under photo */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-full text-[11px] font-semibold text-slate-800 dark:text-slate-200 shadow-md flex items-center gap-1.5 whitespace-nowrap">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>LPU CSE (AI-ML) • CGPA 8.3</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
