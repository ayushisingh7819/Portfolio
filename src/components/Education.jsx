import React from 'react';
import { GraduationCap, Award, BookOpen, Building } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Academic Qualifications
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Strong foundational science and computer engineering academic track record.
          </p>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-2xl">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full">
                    {item.grade}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.degree}
                </h4>

                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-blue-600" />
                  {item.institution}
                </p>

                <p className="text-xs text-slate-400 font-medium mb-4">
                  {item.period}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-6">
                  {item.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
