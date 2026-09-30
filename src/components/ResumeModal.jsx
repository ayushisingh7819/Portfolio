import React, { useState } from 'react';
import { 
  X, Download, FileText, ExternalLink, Mail, Phone, GraduationCap, 
  Code, Award, BookOpen, User, Eye, CheckCircle2, Sparkles, MapPin, 
  ShieldCheck, Heart, Globe
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo, education, projects, achievements, certifications, languages } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [viewMode, setViewMode] = useState('digital'); // 'digital' | 'original'

  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Ayushi_Resume.pdf';
    link.download = 'Ayushi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-4 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 shrink-0">
          
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 text-white rounded-xl shadow-md">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg tracking-tight">
                  Curriculum Vitae
                </h3>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800">
                  Digital & Original PDF
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Ayushi Singh • AI/ML & Full-Stack Developer
              </p>
            </div>
          </div>

          {/* Controls: Mode Switcher & Download Button */}
          <div className="flex items-center gap-2">
            
            {/* View Mode Switcher */}
            <div className="flex items-center bg-slate-200/80 dark:bg-slate-800 p-1 rounded-xl text-xs font-semibold">
              <button
                onClick={() => setViewMode('digital')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'digital'
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Digital CV</span>
              </button>
              <button
                onClick={() => setViewMode('original')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'original'
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Original PDF</span>
              </button>
            </div>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl transition-all shadow-md hover:shadow-blue-500/20 active:scale-95"
              title="Download Ayushi Resume PDF"
            >
              <Download className="w-4 h-4 animate-bounce" />
              <span>Download CV</span>
            </button>

            {/* Close Modal Button */}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-xl hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-100 dark:bg-slate-950">
          
          {viewMode === 'original' ? (
            /* Original PDF Viewer IFrame View */
            <div className="w-full h-[75vh] rounded-xl overflow-hidden border border-slate-300 dark:border-slate-800 bg-white shadow-inner">
              <iframe
                src="/Ayushi_Resume.pdf#toolbar=1"
                title="Ayushi Resume PDF"
                className="w-full h-full border-none"
              />
            </div>
          ) : (
            /* Digital Crafted Resume Document (Replicating exact structure of user's resume image with modern aesthetic finish) */
            <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-xl rounded-xl overflow-hidden text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-sans">
              
              {/* Header Banner - Matching the slate-blue header styling of her resume */}
              <div className="bg-slate-700 dark:bg-slate-800 text-white p-6 sm:p-8 border-b-4 border-blue-500">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif text-white">
                      Ayushi Singh
                    </h1>
                    <p className="text-slate-300 text-xs sm:text-sm uppercase tracking-wider font-semibold mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>VARANASI, INDIA</span>
                      <span className="text-blue-300 font-normal lowercase">(open to internships)</span>
                    </p>
                  </div>
                  <div className="bg-slate-800/80 dark:bg-slate-900/80 p-3 rounded-lg border border-slate-600 dark:border-slate-700 text-xs space-y-1">
                    <div className="text-slate-300 font-medium">Ayushi Singh • B.Tech CSE (AI-ML)</div>
                    <div className="text-blue-300 text-[11px]">CGPA: 8.3/10.0 • LPU Punjab</div>
                  </div>
                </div>
              </div>

              {/* Two Column Grid layout matching user's Resume format */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
                
                {/* LEFT COLUMN: Summary, Education, Projects, Participations, Future Goals */}
                <div className="md:col-span-8 p-6 space-y-6">
                  
                  {/* Summary Paragraph */}
                  <div className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
                    Second-year engineering student with a strong interest in technology, programming, and software development. Eager to learn new skills and apply theoretical knowledge to real-world projects. Passionate about problem-solving, AI, and emerging technologies, with a focus on building practical and impactful solutions.
                  </div>

                  {/* EDUCATION */}
                  <div className="space-y-3">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-slate-300 dark:border-slate-700 pb-1 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      EDUCATION
                    </h2>
                    
                    <div className="space-y-1">
                      <h3 className="font-bold text-blue-700 dark:text-blue-400 text-sm">
                        Bachelor of Technology – Computer Science and Engineering
                      </h3>
                      <p className="font-semibold text-slate-800 dark:text-slate-200 text-xs">
                        Lovely Professional University, Punjab
                      </p>
                      <div className="flex flex-wrap items-center justify-between text-slate-500 dark:text-slate-400 text-xs pt-0.5">
                        <span className="italic">July 2025 – Expected May 2029</span>
                        <span className="font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-800">
                          CGPA: 8.3/10.0
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* PUBLICATIONS AND PROJECTS */}
                  <div className="space-y-4">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-slate-300 dark:border-slate-700 pb-1 flex items-center gap-2">
                      <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      PUBLICATIONS AND PROJECTS
                    </h2>

                    {/* Project 1: Zenora */}
                    <div className="space-y-2 bg-slate-50/70 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                          1. Zenora – AI Powered Academic & Career Platform
                        </h3>
                        <a 
                          href="https://zenoraastudy.netlify.app/" 
                          target="_blank" 
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline shrink-0"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        <span className="font-semibold text-slate-900 dark:text-slate-100">Tech:</span> React.js, Firebase Authentication, Firestore Database, Gemini API, JavaScript, HTML/CSS, Netlify
                      </p>

                      <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        <li>Developed an AI-powered platform designed to help students with academics, career guidance, and skill development.</li>
                        <li>Implemented AI-based academic assistance, career roadmap generation, and smart student support features using Gemini API.</li>
                        <li>Built responsive frontend interfaces with React.js and integrated Firebase for authentication and database management.</li>
                        <li>Deployed the project online using Netlify for real-time accessibility and testing. Still working on this project....</li>
                      </ul>
                    </div>

                    {/* Project 2: GramSetu */}
                    <div className="space-y-2 bg-slate-50/70 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                          2. GramSetu – AI-Powered Farmer-to-Market Platform
                        </h3>
                        <a 
                          href="https://grramsetuu.netlify.app/" 
                          target="_blank" 
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline shrink-0"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        <span className="font-semibold text-slate-900 dark:text-slate-100">Tech:</span> React.js, Vite, Node.js, Express.js, MongoDB Atlas, OpenAI API, REST APIs, JWT Authentication, Tailwind CSS, Netlify & Render.
                      </p>

                      <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        <li>Developed a full-stack agricultural platform using React.js, Node.js, Express.js and MongoDB, integrating JWT authentication, REST APIs, real-time data and interactive maps for farmer-buyer workflows.</li>
                        <li>Integrated AI-powered recommendations and demand–supply analysis to provide market insights, personalized selling recommendations, and data-driven procurement decisions.</li>
                        <li>Designed and deployed the responsive application with Tailwind CSS, MongoDB Atlas, Netlify and Render, integrating frontend, backend, database and AI services into a production-ready workflow.</li>
                      </ul>
                    </div>
                  </div>

                  {/* PARTICIPATIONS */}
                  <div className="space-y-3">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-slate-300 dark:border-slate-700 pb-1 flex items-center gap-2">
                      <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      PARTICIPATIONS
                    </h2>

                    <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      <li>Secured 3rd position in a 24-hour inter-college hackathon among nearly 100 participating teams</li>
                      <li>Achieved a top 7 position in a Web Development Hackathon competing against senior students and experienced teams.</li>
                      <li>Worked on real-world project development, UI design, and team collaboration during hackathons.</li>
                    </ul>
                  </div>

                  {/* FUTURE AMBITIONS AND GOALS */}
                  <div className="space-y-2">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-slate-300 dark:border-slate-700 pb-1 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      FUTURE AMBITIONS AND GOALS
                    </h2>

                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic">
                      I aspire to build a career in AI/ML and software development, continuously strengthening my technical and problem-solving skills while contributing to innovative real-world solutions. In the long term, I aim to pursue an MBA to develop strong managerial and strategic skills and grow into leadership roles.
                    </p>
                  </div>

                </div>

                {/* RIGHT COLUMN SIDEBAR: About me, Details, Key Skills, Hobbies, Languages, Certifications */}
                <div className="md:col-span-4 p-6 bg-slate-50/50 dark:bg-slate-900/60 space-y-6">
                  
                  {/* About me */}
                  <div className="space-y-2">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-1">
                      About me
                    </h2>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      AI/ML Engineer turning complex data into intelligent, scalable solutions through machine learning, efficient problem-solving, web, and app development.
                    </p>
                  </div>

                  {/* Details / Contact */}
                  <div className="space-y-2">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-1">
                      Details
                    </h2>
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="font-semibold text-slate-900 dark:text-white block">Phone no.</span>
                        <a href="tel:9335247487" className="text-slate-600 dark:text-slate-300 hover:text-blue-600">
                          9335247487
                        </a>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900 dark:text-white block">E-mail</span>
                        <a href="mailto:ayushisingh7819@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 break-all">
                          ayushisingh7819@gmail.com
                        </a>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900 dark:text-white block">LinkedIn</span>
                        <a href="http://www.linkedin.com/in/ayushi-singh-792969343" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-all">
                          linkedin.com/in/ayushi-singh-792969343
                        </a>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900 dark:text-white block">Git hub</span>
                        <a href="https://github.com/ayushisingh7819" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-all">
                          github.com/ayushisingh7819
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Key Skills */}
                  <div className="space-y-3">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-1">
                      Key Skills
                    </h2>
                    <div className="space-y-2.5 text-xs">
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white block">Machine Learning</span>
                        <p className="text-slate-600 dark:text-slate-300">
                          Pandas | NumPy | Matplotlib | Seaborn | Python Programming
                        </p>
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white block">Programming & Data Structures</span>
                        <p className="text-slate-600 dark:text-slate-300">
                          Java | DSA(Java)basic – in progress | SQL
                        </p>
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white block">Web Development</span>
                        <p className="text-slate-600 dark:text-slate-300">
                          HTML5, CSS3, JavaScript (ES6+) | React.js | Node.js | Firebase | Hue.js | Typescript | Tailwind and others
                        </p>
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white block">Cloud and Tools</span>
                        <p className="text-slate-600 dark:text-slate-300">
                          Git, GitHub | Jupyter Notebook, Google Colab | VS Code
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hobbies */}
                  <div className="space-y-2">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-1">
                      Hobbies
                    </h2>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300">
                      <li>Chess</li>
                      <li>Travelling</li>
                      <li>Badminton</li>
                      <li>Exploring new technologies</li>
                      <li>Problem solving</li>
                    </ul>
                  </div>

                  {/* Languages */}
                  <div className="space-y-3">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-1">
                      Languages
                    </h2>
                    <div className="space-y-2 text-xs">
                      <div>
                        <div className="flex justify-between font-medium text-slate-800 dark:text-slate-200 mb-1">
                          <span>English</span>
                          <span className="text-[10px] text-slate-500">Fluent</span>
                        </div>
                        <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-slate-700 dark:bg-slate-300 rounded-full w-full" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between font-medium text-slate-800 dark:text-slate-200 mb-1">
                          <span>Hindi</span>
                          <span className="text-[10px] text-slate-500">Native</span>
                        </div>
                        <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-slate-700 dark:bg-slate-300 rounded-full w-full" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between font-medium text-slate-800 dark:text-slate-200 mb-1">
                          <span>Spanish</span>
                          <span className="text-[10px] text-slate-500">Learning</span>
                        </div>
                        <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-slate-700 dark:bg-slate-300 rounded-full w-[65%]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="space-y-2">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-1">
                      Certifications
                    </h2>
                    <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                      <li>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">Microsoft</span> — Manage Secrets in Java Applications: Zero Trust and Zero Secrets
                      </li>
                      <li>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">HACK AI – Season 2</span> — 24-hour AI Hackathon
                      </li>
                      <li>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">Code-A-Thon</span> — 24-hour Hackathon
                      </li>
                    </ul>
                  </div>

                </div>

              </div>

            </div>
          )}

        </div>

        {/* Modal Footer Bar with Direct Download CTA */}
        <div className="px-6 py-3.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Official Ayushi Singh Resume Document • Updated 2026</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-5 py-2 text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download Original CV</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
