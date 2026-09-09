import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CareersSection from '../components/CareersSection';
import CareerModal from '../components/CareerModal';
import { hiringProcessSteps, globalOffices } from '../data/careersData';
import { 
  Briefcase, 
  Globe, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  MapPin, 
  Clock, 
  Users, 
  Building2,
  Compass,
  Check,
  Zap,
  Mail,
  ShieldCheck
} from 'lucide-react';

export default function CareersPage({ onOpenContact, onToast }) {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSpontaneousApply = () => {
    if (onOpenContact) {
      onOpenContact('General Talent & Spontaneous CV Submission');
    } else {
      navigate('/contact');
    }
  };

  return (
    <div className="bg-[#f8fafc] text-slate-900 font-sans min-h-screen selection:bg-cyan-500 selection:text-white space-y-0">
      
      {/* ========================================================================= */}
      {/* 1. LUXURY HERO HEADER (#00587c Theme with Dual Gradient & Office Backdrop) */}
      {/* ========================================================================= */}
      <header className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 bg-[#00587c] text-white overflow-hidden border-b border-cyan-900/40">
        
        {/* Background Backdrop Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80" 
            alt="Inspac Global Collaboration & Engineering Culture" 
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
              <span className="text-white font-bold">Careers &amp; Engineering Culture</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-white/10 text-cyan-300 border border-white/20 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>Tier-1 Enterprise Engineering Culture</span>
              </span>
              <span className="text-[11px] font-semibold text-slate-200 bg-black/40 px-3 py-1 rounded-full border border-white/15">
                Singapore • India • Australia
              </span>
            </div>
          </div>

          {/* Hero Pitch Headline & Subtext */}
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Architect the Next Generation of Enterprise Systems
            </h1>
            <p className="text-base sm:text-lg text-slate-200/95 leading-relaxed font-normal">
              Work alongside elite enterprise architects, cloud engineers, and security GRC advisors. 
              Build high-velocity microservices, scalable AI lakehouses, and mission-critical payment infrastructures powering Asia-Pacific's largest financial institutions and global enterprises.
            </p>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#careers"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all flex items-center space-x-2 cursor-pointer"
            >
              <span>Explore Open Requisitions</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <button
              type="button"
              onClick={handleSpontaneousApply}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-sm backdrop-blur-md transition-colors cursor-pointer"
            >
              Spontaneous Application
            </button>
          </div>

          {/* Bottom 4 People & Culture Benchmark Counters */}
          <div className="pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">8 Open Roles</p>
              <p className="text-xs text-cyan-200/90 font-medium">Across All 8 Service Practices</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">100%</p>
              <p className="text-xs text-cyan-200/90 font-medium">Sponsored Certifications (AWS/CISA/SAP)</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">3 Hubs</p>
              <p className="text-xs text-cyan-200/90 font-medium">Singapore HQ, India &amp; Australia</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">4.8 / 5.0</p>
              <p className="text-xs text-cyan-200/90 font-medium">Team CSAT &amp; Glassdoor Rating</p>
            </div>
          </div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. MAIN CAREERS SECTION: CULTURE HIGHLIGHTS & SEARCHABLE JOB REQUISITIONS */}
      {/* ========================================================================= */}
      <CareersSection 
        onSelectJob={(job) => setSelectedJob(job)}
        onOpenContact={onOpenContact}
      />

      {/* ========================================================================= */}
      {/* 3. TRANSPARENT 4-STAGE HIRING JOURNEY */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-[#00587c] uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-cyan-600" />
              <span>Transparent Candidate Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our 4-Stage Interview &amp; Hiring Experience
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed font-normal">
              We respect your time. Our hiring process is fast, transparent, and focused on real-world system design and collaborative problem solving — never abstract puzzles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {hiringProcessSteps.map((step, idx) => (
              <div 
                key={idx}
                className="p-7 rounded-3xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-cyan-500/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group relative"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00587c] to-[#004764] text-white flex items-center justify-center font-black text-base shadow-md shadow-[#00587c]/20">
                      {step.step}
                    </div>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                      {step.timing}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#00587c] transition-colors leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center text-xs font-bold text-[#00587c]">
                  <span>Milestone Feedback Guaranteed</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. GLOBAL HUBS & INNOVATION CAMPUSES */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-[#00587c] uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5 text-cyan-600" />
              <span>Global Presence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Where We Work &amp; Innovate
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed font-normal">
              State-of-the-art innovation hubs designed for high-velocity collaboration, hybrid autonomy, and cross-border project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {globalOffices.map((office, idx) => (
              <div 
                key={idx}
                className="rounded-3xl bg-white border border-slate-200 hover:border-cyan-500/50 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img 
                      src={office.image} 
                      alt={office.city} 
                      className="w-full h-full object-cover object-center filter brightness-[0.7] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[10px] uppercase tracking-wider font-extrabold text-cyan-300 bg-black/60 px-2.5 py-1 rounded-md border border-white/10">
                        {office.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#00587c] transition-colors">
                      {office.city}
                    </h3>
                    
                    <p className="text-xs text-slate-500 flex items-start space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </p>

                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Key Focus Areas:
                      </span>
                      <p className="text-xs text-slate-700 font-medium leading-relaxed">
                        {office.focus}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs font-semibold text-[#00587c]">
                    <span>Hybrid Work Options</span>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. GENERAL / SPONTANEOUS APPLICATION EXECUTIVE BANNER */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#00587c] via-[#004764] to-[#00384f] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8">
            
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-3 max-w-2xl relative z-10">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-400/20 border border-cyan-400/30 text-cyan-300 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>Spontaneous Talent Outreach</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Don't See a Specific Position Matching Your Profile?
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-normal">
                We hire exceptional technologists year-round. If you possess deep domain expertise in cloud architecture, enterprise data lakehouses, cybersecurity GRC, or SAP ERP modernization, our Singapore talent leadership wants to connect with you.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <button
                type="button"
                onClick={handleSpontaneousApply}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 text-slate-950 font-black text-xs sm:text-sm shadow-2xl shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all flex items-center space-x-2 cursor-pointer"
              >
                <span>Submit Spontaneous Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. DEDICATED CAREER APPLICATION MODAL */}
      {/* ========================================================================= */}
      <CareerModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
        onSubmitSuccess={onToast}
      />

    </div>
  );
}
