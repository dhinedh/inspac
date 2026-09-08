import React, { useState } from 'react';
import TrainingSection from '../components/TrainingSection';
import TrainingModal from '../components/TrainingModal';
import { GraduationCap, Award, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TrainingPage({ onOpenContact }) {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Practical Executive & Technical Learning</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Corporate Training Programs
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Practical, industry-aligned up-skilling programs designed to develop technical skills in Data Science, Cloud Engineering, DevOps CI/CD, GRC, and PCI-DSS Auditing.
          </p>
        </div>
      </section>

      {/* Main Training Section */}
      <TrainingSection 
        onSelectCourse={(course) => setSelectedCourse(course)}
        onOpenContact={onOpenContact}
      />

      {/* Corporate Learning Methodology */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Why Train With Inspac Solutions?</h2>
            <p className="text-xs sm:text-sm text-slate-400">Our instructors are active enterprise consultants delivering real-world project experience.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="p-6 rounded-2xl bg-navy-950/80 border border-slate-800 space-y-2">
              <span className="text-brand-400 font-bold text-base block mb-1">01. Hands-on Lab Environment</span>
              <p className="leading-relaxed">Work directly with real cloud sandboxes, Terraform scripts, and simulated PCI-DSS audit evidence.</p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-950/80 border border-slate-800 space-y-2">
              <span className="text-cyan-400 font-bold text-base block mb-1">02. Tailored Corporate Curriculum</span>
              <p className="leading-relaxed">We customize course modules to align with your organization's specific tech stack and security policies.</p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-950/80 border border-slate-800 space-y-2">
              <span className="text-emerald-400 font-bold text-base block mb-1">03. Global Certification Readiness</span>
              <p className="leading-relaxed">Prepares candidates for CISA, AWS/GCP Certified Engineer, and PCI-DSS internal audit qualifications.</p>
            </div>
          </div>

          <div className="pt-2 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg shadow-purple-600/30 transition-all"
            >
              <span>Enquire Corporate Training Schedule</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      <TrainingModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onOpenContact={onOpenContact}
      />
    </div>
  );
}
