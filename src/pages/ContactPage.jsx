import React from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import { 
  Mail, 
  PhoneCall, 
  MapPin, 
  Globe2, 
  Building2, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Check,
  Calendar,
  FileCheck
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ContactPage({ prefillTopic, onToast }) {
  const hubs = [
    {
      country: 'Singapore',
      flag: '🇸🇬',
      role: 'Global Headquarters & Executive Governance',
      title: 'One Raffles Quay Corporate Center',
      address: companyInfo.locations[0]?.address || 'One Raffles Quay, North Tower, Level 28, Singapore 048583',
      phone: companyInfo.phones[0]?.number || '+65 6812 3456',
      email: companyInfo.emails?.marketing || 'contact@inspacsolutions.com',
      hours: 'Mon – Fri: 9:00 AM – 6:30 PM (SGT / UTC+8)',
      focus: 'Global Practice Leadership, Enterprise Architecture & QSA Advisory',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80'
    },
    {
      country: 'India',
      flag: '🇮🇳',
      role: 'Offshore Technology & Engineering Center',
      title: 'RMZ Ecospace Tech Center',
      address: companyInfo.locations[1]?.address || 'RMZ Ecospace, Outer Ring Road, Bengaluru 560103',
      phone: '+91 80 4123 7890',
      email: 'india.desk@inspacsolutions.com',
      hours: '24/7/365 Continuous NOC/SOC Operations',
      focus: 'Full-Stack Engineering, AI Lakehouse Labs & 24/7 Managed SRE',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80'
    },
    {
      country: 'Australia',
      flag: '🇦🇺',
      role: 'Regional Client Operations & Advisory',
      title: 'Barangaroo International Towers',
      address: companyInfo.locations[2]?.address || 'International Towers, Barangaroo, Sydney NSW 2000',
      phone: '+61 2 8901 4567',
      email: 'australia.desk@inspacsolutions.com',
      hours: 'Mon – Fri: 8:30 AM – 5:30 PM (AEST / UTC+10)',
      focus: 'Banking Practice Delivery, FinTech GRC & Local Account Management',
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-900 font-sans min-h-screen selection:bg-cyan-500 selection:text-white space-y-0">
      
      {/* ========================================================================= */}
      {/* 1. LUXURY HERO HEADER (#00587c Theme with Dual Gradient & Office Backdrop) */}
      {/* ========================================================================= */}
      <header className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 bg-[#00587c] text-white overflow-hidden border-b border-cyan-900/40">
        
        {/* Background Backdrop Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80" 
            alt="Inspac Solutions Global Corporate Headquarters" 
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
              <span className="text-white font-bold">Contact Us &amp; Global Offices</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-white/10 text-cyan-300 border border-white/20 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>Tier-1 Executive Advisory Desk</span>
              </span>
              <span className="text-[11px] font-semibold text-slate-200 bg-black/40 px-3 py-1 rounded-full border border-white/15">
                Singapore • India • Australia
              </span>
            </div>
          </div>

          {/* Hero Pitch Headline & Subtext */}
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Connect with Inspac Solutions Advisory
            </h1>
            <p className="text-base sm:text-lg text-slate-200/95 leading-relaxed font-normal">
              Engage directly with our practice directors and solution architects for confidential enterprise consultations, cloud modernization assessments, and formal RFP scoping.
            </p>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all flex items-center space-x-2 cursor-pointer"
            >
              <span>Transmit Project Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <a
              href="#global-hubs"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-sm backdrop-blur-md transition-colors"
            >
              View Global Operating Hubs
            </a>
          </div>

          {/* Bottom 4 Enterprise Contact & Delivery SLA Counters */}
          <div className="pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">&lt; 4 Hours</p>
              <p className="text-xs text-cyan-200/90 font-medium">Business Consultation Response</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">100%</p>
              <p className="text-xs text-cyan-200/90 font-medium">Confidential Mutual NDA Ready</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">3 Hubs</p>
              <p className="text-xs text-cyan-200/90 font-medium">Singapore, India &amp; Australia</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">&lt; 15 min</p>
              <p className="text-xs text-cyan-200/90 font-medium">Managed Clients P1 Incident SLA</p>
            </div>
          </div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. MAIN INTERACTIVE CONTACT SECTION & SIDEBAR */}
      {/* ========================================================================= */}
      <ContactSection 
        prefillTopic={prefillTopic}
        onToast={onToast}
      />

      {/* ========================================================================= */}
      {/* 3. ALL REGIONAL OPERATING HUBS & CAMPUSES */}
      {/* ========================================================================= */}
      <section id="global-hubs" className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-[#00587c] uppercase tracking-wider">
              <Globe2 className="w-3.5 h-3.5 text-cyan-600" />
              <span>International Delivery Network</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Regional Operating Hubs &amp; Centers
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed font-normal">
              Seamlessly orchestrating cross-border enterprise architecture, offshore developer pods, and 24/7/365 infrastructure monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hubs.map((hub, idx) => (
              <div 
                key={idx}
                className="rounded-3xl bg-slate-50 border border-slate-200 hover:border-cyan-500/50 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img 
                      src={hub.image} 
                      alt={hub.country} 
                      className="w-full h-full object-cover object-center filter brightness-[0.7] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <span className="text-2xl p-1 rounded-lg bg-black/40 backdrop-blur-md">{hub.flag}</span>
                      <span className="text-xs font-black text-white bg-black/60 px-2.5 py-1 rounded-md border border-white/10">
                        {hub.country} Center
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-300 bg-black/60 px-2.5 py-1 rounded-md border border-white/10 block truncate">
                        {hub.role}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-[#00587c] transition-colors leading-snug">
                      {hub.title}
                    </h3>
                    
                    <div className="space-y-2 text-xs text-slate-600">
                      <p className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{hub.address}</span>
                      </p>
                      <p className="flex items-center space-x-2">
                        <PhoneCall className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-mono">{hub.phone}</span>
                      </p>
                      <p className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-[#00587c] shrink-0" />
                        <span className="font-semibold text-slate-800">{hub.email}</span>
                      </p>
                      <p className="flex items-center space-x-2 text-slate-500">
                        <Clock className="w-4 h-4 text-purple-500 shrink-0" />
                        <span>{hub.hours}</span>
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-200">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Core Hub Focus:
                      </span>
                      <p className="text-xs text-slate-700 font-medium leading-relaxed">
                        {hub.focus}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href="#contact"
                    className="w-full py-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#00587c] text-slate-700 hover:text-[#00587c] text-xs font-bold transition-all flex items-center justify-center space-x-1.5 shadow-2xs"
                  >
                    <span>Enquire with {hub.country} Desk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CONFIDENTIALITY & DATA GOVERNANCE STRIP */}
      {/* ========================================================================= */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center space-x-2 text-[#00587c]">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span className="text-xs font-extrabold uppercase tracking-wider">
                  Enterprise Confidentiality Protocol
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Data Protection &amp; Reciprocal Non-Disclosure Assurances
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                All client communications, architecture topologies, and audit documentation are governed under Singapore Personal Data Protection Act (PDPA) standards. Mutual non-disclosure agreements (NDAs) are executed prior to any proprietary technical discovery.
              </p>
            </div>

            <div className="shrink-0 flex items-center space-x-3">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-[#00587c] hover:bg-[#004764] text-white font-bold text-xs shadow-md transition-all flex items-center space-x-2 cursor-pointer"
              >
                <FileCheck className="w-4 h-4" />
                <span>Request Standard Mutual NDA</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
