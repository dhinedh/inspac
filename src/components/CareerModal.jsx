import React, { useState, useEffect } from 'react';
import { 
  X, 
  Briefcase, 
  MapPin, 
  CheckCircle2, 
  Send, 
  Upload, 
  DollarSign, 
  Clock, 
  FileText, 
  Sparkles, 
  Check, 
  ShieldCheck, 
  User, 
  Mail, 
  Phone, 
  Globe, 
  Award,
  ChevronRight
} from 'lucide-react';

export default function CareerModal({ job, onClose, onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    portfolio: '',
    noticePeriod: 'Immediate to 30 Days',
    notes: ''
  });
  const [fileName, setFileName] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('apply'); // 'details' | 'apply'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!job) return null;

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('resume_curriculum_vitae.pdf');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      if (onSubmitSuccess) {
        onSubmitSuccess(`Application received for ${job.title}! Our Singapore talent team will reach out within 48 hours.`);
      }
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="bg-white text-slate-900 w-full max-w-3xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden relative flex flex-col max-h-[92vh] animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header Bar with #00587c brand styling */}
        <div className="bg-gradient-to-r from-[#00587c] via-[#004764] to-[#00384f] text-white p-6 sm:p-7 relative shrink-0">
          
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-3 pr-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                {job.department}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/15 text-slate-200 border border-white/20">
                {job.type}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/15 text-slate-200 border border-white/20">
                {job.experience}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
              {job.title}
            </h3>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-cyan-100 font-medium">
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                <span>{job.location}</span>
              </span>
              {job.salary && (
                <span className="flex items-center space-x-1 font-bold text-white">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{job.salary}</span>
                </span>
              )}
            </div>
          </div>

          {/* Quick Tab Switcher */}
          <div className="flex items-center space-x-2 pt-5">
            <button
              type="button"
              onClick={() => setActiveTab('apply')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'apply'
                  ? 'bg-white text-[#00587c] shadow-sm'
                  : 'bg-white/10 text-slate-200 hover:bg-white/20'
              }`}
            >
              Submit Application
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('details')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'details'
                  ? 'bg-white text-[#00587c] shadow-sm'
                  : 'bg-white/10 text-slate-200 hover:bg-white/20'
              }`}
            >
              Job Specifications &amp; Tech Stack
            </button>
          </div>

        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-xs">
          
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900">Application Received!</h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for applying for the <strong className="text-slate-900">{job.title}</strong> role. 
                Our Singapore engineering recruitment leadership will review your credentials and get in touch within 48 hours.
              </p>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-[#00587c] text-white font-bold text-xs shadow-md hover:bg-[#004764] transition-all"
                >
                  Return to Careers
                </button>
              </div>
            </div>
          ) : activeTab === 'details' ? (
            
            /* TAB: JOB DETAILS */
            <div className="space-y-6">
              
              <div className="space-y-2">
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#00587c]">
                  Role Purpose &amp; Impact
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {job.summary}
                </p>
              </div>

              {job.responsibilities && (
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#00587c]">
                    Key Responsibilities
                  </h4>
                  <div className="space-y-2">
                    {job.responsibilities.map((r, rIdx) => (
                      <div key={rIdx} className="flex items-start space-x-2 text-slate-700">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {job.requirements && (
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#00587c]">
                    Essential Requirements &amp; Qualifications
                  </h4>
                  <div className="space-y-2">
                    {job.requirements.map((req, qIdx) => (
                      <div key={qIdx} className="flex items-start space-x-2 text-slate-700">
                        <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {job.preferred && (
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#00587c]">
                    Preferred Certifications &amp; Bonus Experience
                  </h4>
                  <div className="space-y-2">
                    {job.preferred.map((p, pIdx) => (
                      <div key={pIdx} className="flex items-start space-x-2 text-slate-700">
                        <Award className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {job.techStack && (
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#00587c]">
                    Core Toolchain &amp; Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {job.techStack.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-slate-500 text-xs">Ready to submit your profile?</span>
                <button
                  type="button"
                  onClick={() => setActiveTab('apply')}
                  className="px-6 py-2.5 rounded-xl bg-[#00587c] hover:bg-[#004764] text-white font-bold text-xs shadow-md transition-all flex items-center space-x-1.5"
                >
                  <span>Continue to Application</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          ) : (
            
            /* TAB: APPLICATION FORM */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="p-3.5 rounded-2xl bg-cyan-50 border border-cyan-200/80 text-[#00587c] flex items-center space-x-2.5">
                <Sparkles className="w-4 h-4 text-cyan-600 shrink-0" />
                <p className="text-xs leading-relaxed font-medium">
                  Direct application to Inspac Solutions. Fast-tracked technical reviews with decision turnaround within 48 business hours.
                </p>
              </div>

              {/* Personal Details Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">
                    Full Legal Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Tan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#00587c] focus:ring-1 focus:ring-[#00587c] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">
                    Work Email Address <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="alex.tan@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#00587c] focus:ring-1 focus:ring-[#00587c] focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Phone and Experience Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">
                    Mobile Phone / WhatsApp <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+65 9123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#00587c] focus:ring-1 focus:ring-[#00587c] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">
                    Years of Relevant Experience <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 7 Years (Cloud / IaC)"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#00587c] focus:ring-1 focus:ring-[#00587c] focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* LinkedIn and Notice Period Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">
                    LinkedIn or GitHub URL <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="url"
                      required
                      placeholder="https://linkedin.com/in/username"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#00587c] focus:ring-1 focus:ring-[#00587c] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">
                    Notice Period / Availability
                  </label>
                  <select
                    value={formData.noticePeriod}
                    onChange={(e) => setFormData({ ...formData, noticePeriod: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-[#00587c] focus:ring-1 focus:ring-[#00587c] focus:outline-none transition-all font-medium"
                  >
                    <option value="Immediate">Immediate / Within 1 Week</option>
                    <option value="15 to 30 Days">15 to 30 Days</option>
                    <option value="45 to 60 Days">45 to 60 Days</option>
                    <option value="90 Days">90 Days (Standard Corporate Notice)</option>
                  </select>
                </div>
              </div>

              {/* Modern Resume Attachment Drag & Drop Area */}
              <div>
                <label className="block text-slate-700 font-bold mb-1">
                  Attach Curriculum Vitae / Resume (PDF or DOCX)
                </label>
                <label className="block relative cursor-pointer">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="sr-only"
                  />
                  <div className={`p-5 rounded-2xl border-2 border-dashed text-center transition-all ${
                    fileName 
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-800' 
                      : 'border-slate-300 bg-slate-50 hover:border-[#00587c] hover:bg-slate-100/80 text-slate-600'
                  }`}>
                    <Upload className="w-5 h-5 mx-auto mb-1.5 text-slate-400" />
                    {fileName ? (
                      <div className="space-y-1">
                        <span className="font-bold flex items-center justify-center space-x-1.5 text-emerald-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>{fileName}</span>
                        </span>
                        <p className="text-[11px] text-emerald-600">Click to replace file</p>
                      </div>
                    ) : (
                      <div className="space-y-0.5">
                        <p className="font-bold text-slate-700">Click to select resume or drag &amp; drop</p>
                        <p className="text-[11px] text-slate-400">PDF, DOC, DOCX up to 10MB</p>
                      </div>
                    )}
                  </div>
                </label>
              </div>

              {/* Short Note */}
              <div>
                <label className="block text-slate-700 font-bold mb-1">
                  Brief Introduction or Notes for Hiring Manager (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Key accomplishments, cloud certifications, or preferred start dates..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#00587c] focus:ring-1 focus:ring-[#00587c] focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                <span className="text-[11px] text-slate-400">
                  🔒 Data governed under Singapore PDPA
                </span>
                
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-[#00587c] to-[#004764] hover:from-cyan-400 hover:to-[#00587c] text-white font-extrabold shadow-lg shadow-[#00587c]/25 flex items-center space-x-2 cursor-pointer hover:scale-105 active:scale-95 transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Candidate Profile</span>
                  </button>
                </div>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
