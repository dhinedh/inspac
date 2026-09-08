import React, { useState } from 'react';
import CareersSection from '../components/CareersSection';
import CareerModal from '../components/CareerModal';
import { Briefcase, Globe, Award, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CareersPage({ onOpenContact, onToast }) {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Join Our Global Engineering & Consulting Team</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Careers at Inspac Solutions
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Build your career working on cutting-edge cloud infrastructure, predictive data science, enterprise ERPs, and PCI-DSS compliance advisory across Singapore, India, and Australia.
          </p>
        </div>
      </section>

      {/* Main Careers Section */}
      <CareersSection 
        onSelectJob={(job) => setSelectedJob(job)}
        onOpenContact={onOpenContact}
      />

      {/* General Application Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-brand-400" />
              <span>Don't See a Specific Position Matching Your Profile?</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We welcome high-caliber professionals passionate about technology consulting, data science, DevOps, and GRC auditing. Send us your general CV.
            </p>
          </div>

          <button
            onClick={() => onOpenContact('General Talent CV Submission')}
            className="px-8 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-lg shadow-brand-600/30 hover:scale-105 transition-all shrink-0 flex items-center space-x-2"
          >
            <span>Submit Spontaneous Application</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Modal */}
      <CareerModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
        onSubmitSuccess={onToast}
      />
    </div>
  );
}
