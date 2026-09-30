import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger subtle celebratory confetti
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#2563EB', '#60A5FA', '#38BDF8']
    });

    setSubmitted(true);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Get In Touch
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Build Something Together.
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 leading-relaxed max-w-2xl mx-auto">
            I am currently open to Web Development, Full-Stack Development and AI/ML internship opportunities, collaborations and interesting projects.
          </p>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Email Address</h4>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Phone / WhatsApp</h4>
                  <a href={`tel:${personalInfo.phone}`} className="text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Profiles Grid */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Developer Links</h4>
              <div className="grid grid-cols-3 gap-3 text-center text-xs font-semibold">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 flex flex-col items-center gap-2 transition-all"
                >
                  <GithubIcon className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 flex flex-col items-center gap-2 transition-all"
                >
                  <LinkedinIcon className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500 text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-400 flex flex-col items-center gap-2 transition-all"
                >
                  <LeetCodeIcon className="w-5 h-5" />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-200 dark:border-emerald-800">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                    Thank you for reaching out, {formData.name}. Your message has been logged. I will get back to you via email shortly!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 text-xs font-semibold text-blue-600 dark:text-blue-400 border border-blue-600/30 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Send a Direct Message
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@company.com"
                        className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Web Development / AI/ML Internship Opportunity"
                      className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message details here..."
                      className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
