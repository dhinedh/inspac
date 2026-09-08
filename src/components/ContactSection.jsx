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
  Clock
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ContactSection({ prefillTopic, onToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    topic: 'General Consultation',
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
      onToast(`Thank you ${formData.name}! Your inquiry for "${formData.topic}" has been sent. Our Singapore team will contact you within 4 business hours.`);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get in Touch with Inspac Solutions <br className="hidden sm:inline" />
            <span className="gradient-text">Global Consulting Team</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Have a project requirement, PCI-DSS compliance need, or training inquiry? Reach out directly to our Singapore corporate headquarters or regional hubs.
          </p>
        </div>

        {/* Grid Layout: Contact Info Cards + Interactive Form */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contacts & Operating Hubs (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-500/10 rounded-full blur-2xl"></div>

              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Singapore HQ</h3>
                  <span className="text-xs text-brand-400 font-semibold">Global Headquarters & Governance</span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-brand-500/10 text-brand-300 border border-brand-500/30">
                  UEN: {companyInfo.uen}
                </span>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-white font-bold block">Registered Address</span>
                    <span className="text-slate-300">{companyInfo.locations[0].address}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-white font-bold block">Direct Lines (Singapore)</span>
                    <div className="space-y-0.5 text-slate-300">
                      <a href={`tel:${companyInfo.phones[0].number}`} className="hover:text-emerald-400 block transition-colors">{companyInfo.phones[0].number}</a>
                      <a href={`tel:${companyInfo.phones[1].number}`} className="hover:text-emerald-400 block transition-colors">{companyInfo.phones[1].number}</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-white font-bold block">Email Enquiries</span>
                    <a href={`mailto:${companyInfo.emails.marketing}`} className="hover:text-cyan-300 text-brand-300 transition-colors">
                      {companyInfo.emails.marketing}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-white font-bold block">Operating Hours</span>
                    <span className="text-slate-300">Monday – Friday: 9:00 AM – 6:00 PM (SGT)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Hub Badges */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Regional Offices</h4>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between items-center p-2 rounded-lg bg-navy-950/60 border border-slate-800">
                  <span>🇮🇳 <strong>India Center:</strong> IT Hub, ODC Support</span>
                  <span className="text-emerald-400 text-[10px] font-semibold">24/7 Ops</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg bg-navy-950/60 border border-slate-800">
                  <span>🇦🇺 <strong>Australia Office:</strong> Melbourne Regional Hub</span>
                  <span className="text-brand-400 text-[10px] font-semibold">AEST Support</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl relative">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white">Send Us a Direct Message</h3>
                    <p className="text-xs text-slate-400">Fill out the details below for a prompt project consultation or proposal.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. David Tan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:border-brand-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Corporate Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="david@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:border-brand-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Contact Phone</label>
                      <input
                        type="tel"
                        placeholder="+65 9123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:border-brand-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Company / Organization</label>
                      <input
                        type="text"
                        placeholder="Acme Corp Pte Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:border-brand-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Inquiry Topic</label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-slate-800 text-white text-xs focus:border-brand-500 focus:outline-none transition-colors"
                    >
                      <option value="General Consultation">General Enterprise Consultation</option>
                      <option value="Data & Analytics Project">Data & Data Science Solution</option>
                      <option value="Cloud & DevOps Migration">Cloud & DevOps Automation</option>
                      <option value="PCI-DSS Compliance Audit">PCI-DSS 4.0 Compliance Advisory</option>
                      <option value="GRC & Security Audit">GRC & IT Auditing Services</option>
                      <option value="Corporate Training Inquiry">Corporate Training & Up-skilling</option>
                      <option value="Website & Custom Dev">Custom Website & App Development</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Project Details / Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your requirements, timeline, or scope details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:border-brand-500 focus:outline-none transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-cyan-500 text-white font-bold text-xs shadow-xl shadow-brand-600/30 hover:shadow-brand-500/50 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Enterprise Inquiry</span>
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Inspac Solutions Pte Ltd. Our senior consulting team will review your requirement and contact you shortly at <strong className="text-white">{formData.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl border border-slate-700 text-xs text-slate-300 hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
