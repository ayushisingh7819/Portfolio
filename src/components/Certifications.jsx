import React, { useState } from 'react';
import { ShieldCheck, Eye, X, Download, FileCheck, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications({ activeCert, setActiveCert }) {
  const [internalCert, setInternalCert] = useState(null);

  const currentCert = activeCert || internalCert;
  const handleClose = () => {
    if (setActiveCert) setActiveCert(null);
    setInternalCert(null);
  };

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Credentials & Competency
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Verified technical certificates from Microsoft, Lovely Professional University, and byteXL.
          </p>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group border-l-4 ${cert.color}`}
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{cert.date}</span>
                </div>

                <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h4>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Key Skills Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.details.map((detail, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Certificate Button */}
              <button
                onClick={() => {
                  if (setActiveCert) setActiveCert(cert);
                  else setInternalCert(cert);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-xl transition-all duration-200 shadow-xs"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Certificate</span>
              </button>
            </div>
          ))}
        </div>

        {/* Certificate Modal Lightbox */}
        {currentCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-fade-in overflow-y-auto"
            onClick={handleClose}
          >
            <div
              className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-6 max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                      {currentCert.title}
                    </h3>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                      {currentCert.issuer} • {currentCert.date}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <a
                    href={currentCert.file}
                    download
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                  <button
                    onClick={handleClose}
                    className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body: High Resolution Certificate Display */}
              <div className="p-6 bg-slate-950 flex-1 overflow-y-auto flex items-center justify-center">
                {currentCert.file.endsWith('.pdf') ? (
                  <div className="w-full h-[500px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-inner">
                    <iframe
                      src={currentCert.file}
                      title={currentCert.title}
                      className="w-full h-full border-none"
                    />
                  </div>
                ) : (
                  <div className="w-full max-w-3xl rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl p-2 flex items-center justify-center">
                    <img
                      src={currentCert.file}
                      alt={currentCert.title}
                      className="w-full h-auto max-h-[70vh] object-contain rounded-xl shadow-md"
                    />
                  </div>
                )}
              </div>

              {/* Certificate Metadata Bar */}
              <div className="px-6 py-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-600 dark:text-slate-400 gap-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Credential ID: <strong className="text-slate-900 dark:text-white font-mono">{currentCert.credentialId}</strong></span>
                </div>
                <a
                  href={currentCert.file}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Open Full Resolution File</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Modal Footer Actions */}
              <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex justify-end">
                <button
                  onClick={handleClose}
                  className="px-5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-xl transition-colors"
                >
                  Close Window
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
