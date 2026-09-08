import React from 'react';
import ContactSection from '../components/ContactSection';
import { Mail, PhoneCall, MapPin, Globe2, Building2, Clock, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ContactPage({ prefillTopic, onToast }) {
  return (
    <div className="space-y-12 pb-16">
      
      {/* Header */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400">
            <Mail className="w-3.5 h-3.5" />
            <span>Singapore HQ & Global Offices</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Contact Inspac Solutions
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our executive consulting team for enterprise IT requirements, PCI-DSS compliance audits, or custom corporate training schedules.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection 
        prefillTopic={prefillTopic}
        onToast={onToast}
      />

      {/* All Regional Hubs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold text-white">Our Regional Operating Hubs</h2>
          <p className="text-xs sm:text-sm text-slate-400">Delivering global resource and smart solutions across APAC.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {companyInfo.locations.map(loc => (
            <div key={loc.id} className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl">{loc.country === 'Singapore' ? '🇸🇬' : loc.country === 'India' ? '🇮🇳' : '🇦🇺'}</span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-brand-500/10 text-brand-400 border border-brand-500/20">
                  {loc.role}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">{loc.country} Office</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{loc.address}</p>

              <div className="pt-3 border-t border-slate-800 space-y-2 text-xs">
                <p className="text-slate-300 flex items-center space-x-2">
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{loc.phone}</span>
                </p>
                <p className="text-slate-300 flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{loc.email}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
