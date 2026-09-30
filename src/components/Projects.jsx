import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [activeTabs, setActiveTabs] = useState({ zenora: 'features', gramsetu: 'features' });

  const toggleTab = (projId, tab) => {
    setActiveTabs(prev => ({ ...prev, [projId]: tab }));
  };

  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Selected Work
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Deep-dive into my production-ready AI and full-stack software applications.
          </p>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Large Project Cards */}
        <div className="space-y-16">
          {projects.map((proj, idx) => {
            const activeTab = activeTabs[proj.id] || 'features';
            const isEven = idx % 2 === 0;

            return (
              <div
                key={proj.id}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Left/Right Column: Information & Details */}
                  <div className={`lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      {/* Top Badge */}
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                          <Sparkles className="w-3.5 h-3.5" />
                          {proj.badge}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">0{idx + 1} / 0{projects.length}</span>
                      </div>

                      {/* Project Name */}
                      <h4 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {proj.title}
                      </h4>

                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 mb-4 italic">
                        "{proj.tagline}"
                      </p>

                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                        {proj.description}
                      </p>

                      {/* Interactive Tabs for Project Card */}
                      <div className="flex border-b border-slate-200 dark:border-slate-800 mb-4 text-xs font-semibold">
                        <button
                          onClick={() => toggleTab(proj.id, 'features')}
                          className={`pb-2 px-3 border-b-2 transition-colors ${
                            activeTab === 'features'
                              ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                              : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                          }`}
                        >
                          Key Features
                        </button>
                        <button
                          onClick={() => toggleTab(proj.id, 'tech')}
                          className={`pb-2 px-3 border-b-2 transition-colors ${
                            activeTab === 'tech'
                              ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                              : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                          }`}
                        >
                          Tech Stack ({proj.technologies.length})
                        </button>
                      </div>

                      {/* Tab Content 1: Features */}
                      {activeTab === 'features' && (
                        <div className="grid grid-cols-1 gap-2.5 mb-6">
                          {proj.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tab Content 2: Tech Stack */}
                      {activeTab === 'tech' && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {proj.technologies.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-3 py-1 text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-lg border border-slate-200/80 dark:border-slate-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Project Action Buttons */}
                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-4">
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-xl transition-all shadow-sm hover:shadow group/btn"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>

                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl transition-all shadow-2xs"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>GitHub Repository</span>
                      </a>
                    </div>
                  </div>

                  {/* Left/Right Column: Interactive Live Preview Mockup Representation */}
                  <div className={`lg:col-span-6 bg-slate-100 dark:bg-slate-950 p-6 sm:p-8 flex flex-col justify-center border-t lg:border-t-0 ${isEven ? 'lg:border-l lg:order-2' : 'lg:border-r lg:order-1'} border-slate-200 dark:border-slate-800`}>
                    
                    {/* Mock Browser Header */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md overflow-hidden">
                      <div className="px-4 py-3 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-rose-400" />
                          <span className="w-3 h-3 rounded-full bg-amber-400" />
                          <span className="w-3 h-3 rounded-full bg-emerald-400" />
                        </div>
                        <div className="px-3 py-1 bg-white dark:bg-slate-800 rounded-md text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate max-w-[200px]">
                          {proj.liveUrl.replace('https://', '')}
                        </div>
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          title="Open Live Website"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>

                      {/* Mock UI Showcase Panel */}
                      <div className="p-6 bg-slate-50/50 dark:bg-slate-900/50 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                              {proj.title[0]}
                            </div>
                            <div>
                              <h5 className="font-bold text-slate-900 dark:text-white text-xs">{proj.title.split('–')[0]} App</h5>
                              <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">● Production Active</p>
                            </div>
                          </div>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">
                            v1.0.4
                          </span>
                        </div>

                        {/* Interactive UI Highlights Grid */}
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="p-3 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200/80 dark:border-slate-800">
                            <span className="text-[10px] uppercase font-bold text-blue-600 dark:text-blue-400 block mb-0.5">
                              Core AI Module
                            </span>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">
                              {proj.id === 'zenora' ? 'Gemini API Engine' : 'OpenAI Intelligence'}
                            </span>
                          </div>

                          <div className="p-3 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200/80 dark:border-slate-800">
                            <span className="text-[10px] uppercase font-bold text-blue-600 dark:text-blue-400 block mb-0.5">
                              Database & Auth
                            </span>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">
                              {proj.id === 'zenora' ? 'Firestore & Auth' : 'MongoDB Atlas & JWT'}
                            </span>
                          </div>
                        </div>

                        {/* Live Link Callout Card inside mock */}
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="block p-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-95 transition-opacity shadow-sm"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xs font-bold">Experience Live Application</p>
                              <p className="text-[11px] opacity-90">{proj.liveUrl}</p>
                            </div>
                            <div className="p-1.5 bg-white/20 rounded-lg">
                              <ExternalLink className="w-4 h-4" />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
