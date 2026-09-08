import React from 'react';
import ComplianceAssessmentTool from '../components/ComplianceAssessmentTool';
import { 
  ShieldCheck, 
  CreditCard, 
  FileCheck, 
  Lock, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CompliancePage({ onOpenContact }) {
  return (
    <div className="space-y-12 pb-16">
      
      {/* Page Header */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>PCI-DSS v4.0 & Governance Advisory</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            PCI Compliance & GRC Hub
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ensure complete payment security, tokenization, cardholder data isolation, and 100% audit readiness under PCI-DSS v4.0 and ISO 27001 standards.
          </p>
        </div>
      </section>

      {/* Main Interactive Diagnostic Tool */}
      <ComplianceAssessmentTool onOpenContact={onOpenContact} />

      {/* Compliance Frameworks Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold text-white">Supported Compliance Frameworks</h2>
          <p className="text-xs sm:text-sm text-slate-400">Our senior GRC consultants assist organizations with gap analysis, control implementation, and audit sign-off.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
            <CreditCard className="w-8 h-8 text-brand-400" />
            <h3 className="text-lg font-bold text-white">PCI-DSS 4.0</h3>
            <p className="text-xs text-slate-300">Payment Card Industry Data Security Standard scoping, tokenization, CDE isolation, and AOC attestation support.</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
            <FileCheck className="w-8 h-8 text-cyan-400" />
            <h3 className="text-lg font-bold text-white">ISO / IEC 27001</h3>
            <p className="text-xs text-slate-300">Information Security Management System (ISMS) policies, risk treatment plans, and internal audit preparation.</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
            <Lock className="w-8 h-8 text-emerald-400" />
            <h3 className="text-lg font-bold text-white">Singapore PDPA & GDPR</h3>
            <p className="text-xs text-slate-300">Data protection governance, privacy impact assessments (PIA), and cross-border data transfer controls.</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
            <ShieldCheck className="w-8 h-8 text-indigo-400" />
            <h3 className="text-lg font-bold text-white">NIST Cybersecurity</h3>
            <p className="text-xs text-slate-300">Identify, Protect, Detect, Respond, and Recover framework implementation for enterprise infrastructure.</p>
          </div>

        </div>

        {/* Audit Preparation Banner */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-brand-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>Preparing for an Upcoming External QSA or GRC Audit?</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Book a confidential pre-audit review with Inspac Solutions auditors to identify control gaps before your official assessment.
            </p>
          </div>

          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-cyan-500 text-white font-bold text-xs shadow-lg shadow-brand-600/30 hover:scale-105 transition-all shrink-0 flex items-center space-x-2"
          >
            <span>Book Pre-Audit Review</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
