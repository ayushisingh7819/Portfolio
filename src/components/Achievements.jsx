import React from 'react';
import { Trophy, CheckCircle2, Eye } from 'lucide-react';
import { achievements } from '../data/portfolioData';

export default function Achievements({ onOpenCert }) {
  return (
    <section id="achievements" className="py-20 bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Recognition & Honors
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Achievements
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Competitive hackathon standings and university technical recognitions.
          </p>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Horizontal Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((ach, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600" />

              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 rounded-2xl border border-amber-200/60 dark:border-amber-900/40">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 text-xs font-bold bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800">
                    {ach.badge}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {ach.title}
                </h4>

                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-4">
                  {ach.event} • {ach.organization} ({ach.date})
                </p>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  {ach.description}
                </p>
              </div>

              {/* Bottom Row: Verified Badge & View Certificate Button */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Hackathon Honor</span>
                </div>

                {ach.hasCertificate && (
                  <button
                    onClick={() => onOpenCert(ach.certificateData)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-xl transition-all shadow-2xs"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
