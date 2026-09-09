import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Building2, 
  Send, 
  CheckCircle2, 
  Sparkles,
  Globe,
  Clock,
  Shield,
  ShieldCheck,
  Check,
  Calendar,
  AlertCircle,
  ArrowRight,
  User,
  Building,
  Phone
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ContactSection({ prefillTopic, onToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    topic: 'General Enterprise Consultation',
    timeline: 'Immediate (< 30 Days)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefillTopic) {
      setFormData(prev => ({ ...prev, topic: prefillTopic }));
    }
  }, [prefillTopic]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onToast) {
      onToast(`Thank you ${formData.name}! Your inquiry regarding "${formData.topic}" has been transmitted. Our Singapore practice advisory desk will contact you within 4 business hours.`);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-slate-50 relative border-t border-b border-slate-200">
      
      {/* Background ambient radiance */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-400/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-[#00587c]">
            <Mail className="w-3.5 h-3.5 text-cyan-600" />
            <span>Connect with Practice Leadership</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Schedule an Enterprise Consultation or <br />
            <span className="bg-gradient-to-r from-[#00587c] via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Request a Formal Scope Proposal
            </span>
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Whether you need a confidential PCI-DSS 4.0 gap assessment, cloud DevSecOps architecture review, custom corporate training cohort, or 24/7 managed infrastructure support, our practice leads are here to help.
          </p>
        </div>

        {/* Grid Layout: Contact Information Sidebar + Modern Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contacts & Operating Hubs (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Singapore Corporate Headquarters Flagship Card */}
            <div className="rounded-3xl p-7 sm:p-8 bg-gradient-to-br from-[#00587c] via-[#004764] to-[#00384f] text-white shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-6 -mr-6 w-36 h-36 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/15 pb-4 relative z-10">
                <div>
                  <h3 className="text-xl font-black text-white">Singapore Headquarters</h3>
                  <span className="text-xs text-cyan-300 font-medium">Global HQ, Governance &amp; Advisory</span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-white/15 text-cyan-200 border border-white/20">
                  UEN: {companyInfo.uen || '202412345K'}
                </span>
              </div>

              <div className="space-y-4 text-xs text-slate-200 relative z-10">
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-cyan-300 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-white font-bold block text-[13px]">Corporate Address</span>
                    <span className="text-slate-200/90 leading-relaxed block mt-0.5">{companyInfo.locations[0].address}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-emerald-300 shrink-0 mt-0.5">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-white font-bold block text-[13px]">Direct Consultation Lines</span>
                    <div className="space-y-1 mt-0.5">
                      <a href={`tel:${companyInfo.phones[0].number}`} className="hover:text-cyan-300 block font-mono text-xs transition-colors">
                        🇸🇬 {companyInfo.phones[0].number} (Main Office)
                      </a>
                      <a href={`tel:${companyInfo.phones[1].number}`} className="hover:text-cyan-300 block font-mono text-xs transition-colors">
                        🇸🇬 {companyInfo.phones[1].number} (Executive Desk)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-cyan-300 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-white font-bold block text-[13px]">Direct Email Inquiries</span>
                    <a href={`mailto:${companyInfo.emails.marketing}`} className="hover:text-white text-cyan-300 font-semibold block transition-colors mt-0.5">
                      {companyInfo.emails.marketing}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-purple-300 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-white font-bold block text-[13px]">Advisory Desk Operating Hours</span>
                    <span className="text-slate-200/90 block mt-0.5">Monday – Friday: 9:00 AM – 6:30 PM (SGT / UTC+8)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-cyan-200 font-medium relative z-10">
                <span>Direct NDA Execution Available</span>
                <span className="text-white font-bold">4-Hour SLA Response</span>
              </div>
            </div>

            {/* Regional Hubs Quick Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#00587c]">
                  Global Operating Centers
                </h4>
                <span className="text-[10px] font-bold text-slate-400">3 Hubs Active</span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="font-bold text-slate-900 block">🇮🇳 India Technology Center</span>
                    <span className="text-[11px] text-slate-500">Bengaluru / Chennai (ODC &amp; Engineering)</span>
                  </div>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full text-[10px] font-extrabold border border-emerald-200">
                    24/7/365 NOC
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="font-bold text-slate-900 block">🇦🇺 Australia Regional Hub</span>
                    <span className="text-[11px] text-slate-500">Barangaroo, Sydney (Client Coverage)</span>
                  </div>
                  <span className="text-[#00587c] bg-cyan-50 px-2 py-0.5 rounded-full text-[10px] font-extrabold border border-cyan-200">
                    AEST Support
                  </span>
                </div>
              </div>
            </div>

            {/* 24/7 Mission-Critical Escalation Card */}
            <div className="p-6 rounded-3xl bg-amber-50/80 border border-amber-200/90 text-amber-900 space-y-2">
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-900">
                  Critical SLA Emergency Escalation
                </h4>
              </div>
              <p className="text-xs text-amber-800 leading-relaxed font-normal">
                For active production clients holding 24/7 Managed Services contracts, please use your dedicated PagerDuty bridge or direct bridge PIN for sub-15 minute P1 emergency response.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Proposal Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl relative">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                  
                  <div className="space-y-1.5 pb-2 border-b border-slate-100">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#00587c]">
                        Fast-Track Client Intake
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                      Send a Direct Project Inquiry
                    </h3>
                    <p className="text-slate-500 text-xs">
                      Complete the details below for a tailored architecture review, scoping call, or corporate proposal.
                    </p>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Full Legal Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. David Tan"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#00587c] focus:ring-1 focus:ring-[#00587c] focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Corporate Work Email <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          placeholder="david.tan@enterprise.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#00587c] focus:ring-1 focus:ring-[#00587c] focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Direct Phone / WhatsApp Contact
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          placeholder="+65 9123 4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#00587c] focus:ring-1 focus:ring-[#00587c] focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Company / Enterprise Entity
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="Acme Financial Pte Ltd"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#00587c] focus:ring-1 focus:ring-[#00587c] focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Practice Topic & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Practice Focus / Inquiry Topic <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-[#00587c] focus:ring-1 focus:ring-[#00587c] focus:outline-none transition-all font-medium"
                      >
                        <option value="General Enterprise Consultation">General Enterprise Consultation</option>
                        <option value="Digital Engineering & Microservices">Digital Engineering &amp; Microservices</option>
                        <option value="Cloud Transformation & DevSecOps">Cloud Transformation &amp; DevSecOps</option>
                        <option value="Enterprise AI & Data Lakehouse">Enterprise AI &amp; Modern Data Lakehouse</option>
                        <option value="Cybersecurity & PCI-DSS 4.0 Audit">Cybersecurity &amp; PCI-DSS 4.0 Audit</option>
                        <option value="SAP S/4HANA & Enterprise ERP">SAP S/4HANA &amp; Enterprise ERP</option>
                        <option value="Intelligent Process Automation">Intelligent Automation &amp; RPA</option>
                        <option value="Quality Engineering & Playwright">Quality Engineering &amp; Assurance</option>
                        <option value="24/7 Managed SRE & Infrastructure">24/7 Managed Infrastructure &amp; NOC/SOC</option>
                        <option value="Corporate Training Program">Corporate Training &amp; Upskilling</option>
                        <option value="Formal RFP / Vendor Tender">Formal RFP / Scope Tender</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Estimated Project Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-[#00587c] focus:ring-1 focus:ring-[#00587c] focus:outline-none transition-all font-medium"
                      >
                        <option value="Immediate (< 30 Days)">Immediate (&lt; 30 Days)</option>
                        <option value="Within 1 to 3 Months">Within 1 to 3 Months</option>
                        <option value="Upcoming Quarter (Q3/Q4)">Upcoming Quarter (Q3/Q4)</option>
                        <option value="Budgeting & Exploratory">Budgeting &amp; Exploratory</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Project Scope, Requirements or Specific Inquiries <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please outline your current architecture, timeline constraints, compliance targets, or team requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#00587c] focus:ring-1 focus:ring-[#00587c] focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-[#00587c] to-[#004764] hover:from-cyan-400 hover:to-[#00587c] text-white font-extrabold text-sm shadow-lg shadow-[#00587c]/25 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit Enterprise Inquiry</span>
                    </button>

                    <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 pt-1">
                      <span className="flex items-center space-x-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Protected under Singapore PDPA &amp; Reciprocal NDA</span>
                      </span>
                      <span>Turnaround: Sub-4 Business Hours</span>
                    </div>
                  </div>

                </form>
              ) : (
                <div className="py-16 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-10 h-10 animate-bounce" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 tracking-tight">Inquiry Transmitted Successfully!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you <strong className="text-slate-900">{formData.name}</strong>. Your inquiry regarding <strong className="text-slate-900">{formData.topic}</strong> has been routed to our practice leadership. We will respond within 4 business hours.
                  </p>
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-[#00587c] text-white font-bold text-xs shadow-md hover:bg-[#004764] transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
