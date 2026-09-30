import React from 'react';
import { Calendar, GraduationCap, Award, Briefcase, Sparkles } from 'lucide-react';
import { journeyTimeline } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Timeline & Growth
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My Journey
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Key academic milestones, hackathons, and current career trajectory.
          </p>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Clean Professional Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-32 space-y-10">
            {journeyTimeline.map((item, idx) => {
              let Icon = Calendar;
              if (item.type === 'Education') Icon = GraduationCap;
              if (item.type === 'Hackathon' || item.type === 'Achievement') Icon = Award;
              if (item.type === 'Opportunity') Icon = Briefcase;

              return (
                <div key={idx} className="relative pl-8 group">
                  
                  {/* Timeline Dot Icon */}
                  <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 ${
                    item.current
                      ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                      : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 group-hover:border-blue-500'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Year Tag (Left aligned on Desktop) */}
                  <div className="sm:absolute sm:-left-32 sm:top-1.5 sm:text-right sm:w-24 mb-1 sm:mb-0">
                    <span className="inline-block px-2.5 py-1 text-xs font-bold rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/50">
                      {item.year}
                    </span>
                  </div>

                  {/* Timeline Item Card */}
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {item.type}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
                      {item.institution}
                    </p>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
