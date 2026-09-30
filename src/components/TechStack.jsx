import React, { useState } from 'react';
import { 
  Layout, Code2, FileCode, FileJson, Palette, Zap, Server, Cpu, Network,
  Database, Cloud, Table, Flame, Terminal, Sparkles, Bot, Brain, GitMerge,
  GitBranch, Code, Send, Globe
} from 'lucide-react';
import { techStack } from '../data/portfolioData';

// Icon mapping helper
const iconMap = {
  Code2: Code2,
  FileCode: FileCode,
  FileJson: FileJson,
  Palette: Palette,
  Zap: Zap,
  Layout: Layout,
  Server: Server,
  Cpu: Cpu,
  Network: Network,
  Database: Database,
  Cloud: Cloud,
  Table: Table,
  Flame: Flame,
  Terminal: Terminal,
  Sparkles: Sparkles,
  Bot: Bot,
  Brain: Brain,
  GitMerge: GitMerge,
  GitBranch: GitBranch,
  Code: Code,
  Send: Send,
  Globe: Globe,
};

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...techStack.map(c => c.category)];

  const filteredCategories = activeCategory === 'All' 
    ? techStack 
    : techStack.filter(c => c.category === activeCategory);

  return (
    <section id="tech" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Skills & Capabilities
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tech Stack
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Modern tools, frameworks, and technologies I use to build robust AI and web products.
          </p>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Stack Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catGroup, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                    {catGroup.category}
                  </h4>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    {catGroup.items.length} Skills
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
                  {catGroup.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2">
                  {catGroup.items.map((item, itemIdx) => {
                    const IconComponent = iconMap[item.icon] || Code;
                    return (
                      <div
                        key={itemIdx}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition-all duration-200 group"
                      >
                        <IconComponent className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                        <span>{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
