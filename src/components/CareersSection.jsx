import React from 'react';
import { Briefcase, MapPin, CheckCircle2, Sparkles, ArrowRight, Building } from 'lucide-react';
import { openPositions } from '../data/companyData';

export default function CareersSection({ onSelectJob, onOpenContact }) {
  return (
    <section id="careers" className="py-24 bg-navy-900/40 relative border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Join Our Global Team</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Careers at Inspac Solutions <br className="hidden sm:inline" />
            <span className="gradient-text">Shape the Future of IT</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Join a professional environment focused on modern tech stacks, data engineering, cloud automation, DevOps, and GRC advisory across <strong className="text-white">Singapore, India, and Australia</strong>.
          </p>
        </div>

        {/* Culture Highlights */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 font-bold mb-2">
              🚀
            </div>
            <h3 className="text-base font-bold text-white">Technology & Innovation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Work with modern technology stacks and enterprise solutions that create measurable business value.</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold mb-2">
              📈
            </div>
            <h3 className="text-base font-bold text-white">Professional Growth</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Continuous learning programs, mentorship, and sponsorship for industry certifications.</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold mb-2">
              🌏
            </div>
            <h3 className="text-base font-bold text-white">Global Opportunities</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Collaborate across Singapore HQ, India Offshore Tech Hub, and Australian client operations.</p>
          </div>
        </div>

        {/* Open Positions List */}
        <div className="mt-16 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">Current Openings</h3>
            <span className="text-xs text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20 font-semibold">
              {openPositions.length} Roles Active
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {openPositions.map((job) => (
              <div
                key={job.id}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-500/10 text-brand-400 border border-brand-500/20">
                      {job.department}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      <span>{job.location}</span>
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs text-slate-400">{job.type}</span>
                  </div>

                  <h4 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors">
                    {job.title}
                  </h4>

                  <p className="text-xs text-slate-300">
                    {job.summary}
                  </p>
                </div>

                <div className="shrink-0 flex items-center space-x-3">
                  <button
                    onClick={() => onSelectJob(job)}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-cyan-500 text-white font-bold text-xs shadow-lg shadow-brand-600/30 hover:scale-105 transition-all flex items-center space-x-2"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
