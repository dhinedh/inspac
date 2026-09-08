import React from 'react';
import AboutSection from '../components/AboutSection';
import { 
  Building2, 
  Globe2, 
  ShieldCheck, 
  Award, 
  Users, 
  Target, 
  Eye, 
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Mail,
  MapPin
} from 'lucide-react';
import { companyInfo } from '../data/companyData';
import { Link } from 'react-router-dom';

export default function AboutPage({ onOpenContact }) {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Dedicated Page Hero Header */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-400">
            <Building2 className="w-3.5 h-3.5" />
            <span>Corporate Overview & Global Governance</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            About Inspac Solutions Pte Ltd
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Delivering innovative technology consulting, enterprise software engineering, GRC frameworks, and PCI-DSS compliance services across Singapore, India, and Australia.
          </p>

          <div className="pt-2 flex items-center justify-center space-x-3 text-xs font-mono text-slate-400">
            <span>Incorporated in Singapore</span>
            <span>•</span>
            <span className="text-brand-300 font-bold">UEN: {companyInfo.uen}</span>
          </div>
        </div>
      </section>

      {/* Main Interactive About Section */}
      <AboutSection onOpenContact={onOpenContact} />

      {/* Vision, Mission & Core Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <h2 className="text-3xl font-extrabold text-white">Our Strategic Vision & Core Values</h2>
          <p className="text-xs sm:text-sm text-slate-400">Guiding principles behind our global operations and technical advisory.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/30 text-brand-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              To empower businesses with smart, cost-effective, and highly scalable IT solutions that eliminate operational bottlenecks, ensure strict regulatory compliance, and drive sustainable digital growth across international markets.
            </p>
          </div>

          {/* Vision Card */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              To be the most trusted technology advisory partner in the Asia-Pacific region, recognized for combining technical excellence in Data Science, Cloud, and DevOps with robust GRC and PCI-DSS security governance.
            </p>
          </div>

        </div>
      </section>

      {/* Deep Regional Footprint Detail */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center">
            Global Footprint & Regional Capability Summary
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {companyInfo.locations.map(loc => (
              <div key={loc.id} className="p-6 rounded-2xl bg-navy-950/80 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">{loc.country}</h3>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20">
                    {loc.role}
                  </span>
                </div>

                <p className="text-xs text-slate-300">{loc.address}</p>

                <div className="pt-2 border-t border-slate-800 space-y-1 text-xs">
                  <p className="text-slate-400">📞 {loc.phone}</p>
                  <p className="text-slate-400">✉️ {loc.email}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-lg shadow-brand-600/30 transition-all"
            >
              <span>Connect With Regional Executive Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
