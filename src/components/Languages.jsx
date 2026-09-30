import React from 'react';
import { Globe2, CheckCircle2, BookOpen } from 'lucide-react';
import { languages } from '../data/portfolioData';

export default function Languages() {
  return (
    <section id="languages" className="py-16 bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Communication & Global Competency
          </h2>
          <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Languages
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Languages spoken and currently being learned.
          </p>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Languages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {languages.map((lang, idx) => {
            const isLearning = lang.status === 'Learning';

            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                      <Globe2 className="w-5 h-5" />
                    </div>
                    {isLearning ? (
                      <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60 flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        Currently Learning
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        {lang.status}
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {lang.name}
                  </h4>

                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {lang.level}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
