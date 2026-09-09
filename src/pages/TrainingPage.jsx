import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TrainingSection from '../components/TrainingSection';
import TrainingModal from '../components/TrainingModal';
import { trainingFaqs } from '../data/trainingData';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Clock, 
  Users, 
  ShieldCheck, 
  Check, 
  ChevronDown, 
  Building, 
  Zap,
  TrendingUp,
  FileText
} from 'lucide-react';

export default function TrainingPage({ onOpenContact }) {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  const handleEnquireAll = () => {
    if (onOpenContact) {
      onOpenContact('Corporate Training & Enterprise Cohort Inquiries');
    } else {
      navigate('/contact');
    }
  };

  return (
    <div className="bg-[#f8fafc] text-slate-900 font-sans min-h-screen selection:bg-cyan-500 selection:text-white space-y-0">
      
      {/* ========================================================================= */}
      {/* 1. LUXURY HERO HEADER (#00587c Theme with Dual Gradient & Classroom Lab) */}
      {/* ========================================================================= */}
      <header className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 bg-[#00587c] text-white overflow-hidden border-b border-cyan-900/40">
        
        {/* Background Backdrop Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=2000&q=80" 
            alt="Corporate Training & Executive Masterclass" 
            className="w-full h-full object-cover object-center transform scale-105 filter brightness-[0.25] contrast-[1.2]"
          />
          {/* Brand #00587c Dual Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00587c]/95 via-[#004764]/92 to-[#00384f]/95 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#00587c]/80 via-transparent to-[#00384f]/95" />
          <div className="absolute inset-0 backdrop-blur-[1px]" />
        </div>

        {/* Ambient Radiant Glowing Orbs & Micro-Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-[1]" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none z-[1]" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none z-[1]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          {/* Top Breadcrumb & Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav className="flex items-center space-x-2 text-xs text-cyan-200/90 font-medium">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-white font-bold">Corporate Training Programs</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-white/10 text-cyan-300 border border-white/20 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>Executive Capability Acceleration</span>
              </span>
              <span className="text-[11px] font-semibold text-slate-200 bg-black/40 px-3 py-1 rounded-full border border-white/15">
                Singapore IBF &amp; Global Certification Aligned
              </span>
            </div>
          </div>

          {/* Hero Pitch Headline & Subtext */}
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Corporate Training &amp; Executive Masterclasses
            </h1>
            <p className="text-base sm:text-lg text-slate-200/95 leading-relaxed font-normal">
              Practical, practitioner-led corporate up-skilling programs in Multi-Cloud DevSecOps, Enterprise AI Lakehouses, SAP S/4HANA Modernization, and PCI-DSS 4.0 Audit Readiness. Designed for high-performance engineering teams across Singapore, India, and Australia.
            </p>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#training"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all flex items-center space-x-2 cursor-pointer"
            >
              <span>Explore 8 Masterclasses</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <button
              type="button"
              onClick={handleEnquireAll}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-sm backdrop-blur-md transition-colors cursor-pointer"
            >
              Request Department Cohort Proposal
            </button>
          </div>

          {/* Bottom 4 Enterprise Training Benchmark Counters */}
          <div className="pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">8 Programs</p>
              <p className="text-xs text-cyan-200/90 font-medium">Enterprise Tech &amp; Compliance</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">95% Pass Rate</p>
              <p className="text-xs text-cyan-200/90 font-medium">First-Time Certification Success</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">70%+ Labs</p>
              <p className="text-xs text-cyan-200/90 font-medium">Dedicated Ephemeral Cloud Pods</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">5,000+ Alumni</p>
              <p className="text-xs text-cyan-200/90 font-medium">Trained Across APAC Hubs</p>
            </div>
          </div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. MAIN TRAINING SECTION: PILLARS & SEARCHABLE CATALOG */}
      {/* ========================================================================= */}
      <TrainingSection 
        onSelectCourse={(course) => setSelectedCourse(course)}
        onOpenContact={onOpenContact}
      />

      {/* ========================================================================= */}
      {/* 3. BUSINESS IMPACT & UP-SKILLING ROI STRIP */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-[#00587c] uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5 text-cyan-600" />
              <span>Measurable Enterprise ROI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Why Global Enterprises Choose Inspac Training
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed font-normal">
              Generic training bootcamps teach syntax. Inspac masterclasses teach enterprise production architecture, failure recovery, and regulatory compliance directly in sandbox environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-cyan-500/50 shadow-xs hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#00587c] flex items-center justify-center font-black">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Accelerate Onboarding Velocity
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Slash new developer ramp-up time from 6 months to 3 weeks by providing turnkey architectures, standardized design tokens, and GitOps blueprints.
              </p>
              <div className="pt-2 flex items-center text-xs font-bold text-emerald-600">
                <Check className="w-4 h-4 mr-1.5" />
                <span>Up to 70% Faster Team Productivity</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#00587c] via-[#004764] to-[#00384f] text-white shadow-xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-6 -mr-6 w-40 h-40 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-cyan-300 flex items-center justify-center font-black border border-white/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                De-Risk Regulatory Audits
              </h3>
              <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed">
                Train your in-house security, DevOps, and DBA teams to author and collect PCI-DSS 4.0 and ISO 27001 audit workpapers that pass external QSA assessments on the first attempt.
              </p>
              <div className="pt-2 flex items-center text-xs font-bold text-cyan-300">
                <Check className="w-4 h-4 mr-1.5" />
                <span>Zero Non-Compliance Penalties</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-cyan-500/50 shadow-xs hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Lower External Contractor Reliance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Retain valuable institutional domain knowledge by up-skilling your existing engineers in Kubernetes, Snowflake, and Next.js rather than paying high contractor rates.
              </p>
              <div className="pt-2 flex items-center text-xs font-bold text-emerald-600">
                <Check className="w-4 h-4 mr-1.5" />
                <span>Average S$350k+ Annual Cost Savings</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FREQUENTLY ASKED TRAINING QUESTIONS */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Corporate Training Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal">
              Practical details regarding cohort customization, cloud sandboxes, and corporate subsidies.
            </p>
          </div>

          <div className="space-y-3">
            {trainingFaqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-xs sm:text-sm font-bold text-slate-900 hover:text-[#00587c] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ml-3 ${
                      isOpen ? 'rotate-180 text-[#00587c]' : ''
                    }`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. HIGH-CONVERTING BOTTOM EXECUTIVE CTA (#00587c Theme) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-[#00587c] via-[#004764] to-[#00384f] text-white relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-400/15 border border-cyan-400/30 text-cyan-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Singapore Corporate Training Directorate</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Ready to up-skill your enterprise engineering teams?
          </h2>

          <p className="text-xs sm:text-base text-slate-200/90 max-w-2xl mx-auto leading-relaxed font-normal">
            Schedule a 30-minute curriculum discovery consultation with our Practice Directors to review course syllabi, customize lab sandboxes, and evaluate corporate cohort dates.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={handleEnquireAll}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 text-slate-950 font-black text-xs sm:text-sm shadow-2xl shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Request Corporate Training Prospectus
            </button>
            
            <Link
              to="/contact"
              className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-xs sm:text-sm backdrop-blur-md transition-colors"
            >
              Contact Training Advisory Desk
            </Link>
          </div>

          <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <span>● Dedicated Cloud Sandboxes Included</span>
            <span>● Verifiable Digital Credential Badges</span>
            <span>● Volume Corporate Cohort Pricing</span>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. DEDICATED TRAINING MODAL */}
      {/* ========================================================================= */}
      <TrainingModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onOpenContact={onOpenContact}
      />

    </div>
  );
}
