import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  Award, 
  BookOpen, 
  ArrowRight, 
  Sparkles, 
  Send, 
  Check, 
  Users, 
  Building, 
  Mail, 
  Phone, 
  Calendar, 
  Layers, 
  Download,
  GraduationCap
} from 'lucide-react';

export default function TrainingModal({ course, onClose, onOpenContact }) {
  const [activeTab, setActiveTab] = useState('curriculum'); // 'curriculum' | 'enroll'
  const [formData, setFormData] = useState({
    name: '',
    workEmail: '',
    company: '',
    phone: '',
    teamSize: '5 to 15 Engineers',
    timeline: 'Within Next 30 Days',
    customNotes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!course) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      if (onOpenContact) {
        onOpenContact(`Corporate Training Batch Enrolment: ${course.title} (${formData.teamSize})`);
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
                {course.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/15 text-slate-200 border border-white/20">
                {course.duration}
              </span>
              {course.stats?.handsOnRatio && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  {course.stats.handsOnRatio}
                </span>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
              {course.title}
            </h3>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-cyan-100 font-medium">
              <span className="flex items-center space-x-1">
                <Users className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                <span>Audience: {course.level}</span>
              </span>
              {course.certificationTarget && (
                <span className="flex items-center space-x-1 font-bold text-white">
                  <Award className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>Target Cert: {course.certificationTarget}</span>
                </span>
              )}
            </div>
          </div>

          {/* Quick Tab Switcher */}
          <div className="flex items-center space-x-2 pt-5">
            <button
              type="button"
              onClick={() => setActiveTab('curriculum')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'curriculum'
                  ? 'bg-white text-[#00587c] shadow-sm'
                  : 'bg-white/10 text-slate-200 hover:bg-white/20'
              }`}
            >
              Curriculum &amp; Capstone
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('enroll')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'enroll'
                  ? 'bg-white text-[#00587c] shadow-sm'
                  : 'bg-white/10 text-slate-200 hover:bg-white/20'
              }`}
            >
              Request Corporate Cohort Proposal
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
              <h4 className="text-2xl font-extrabold text-slate-900">Training Proposal Requested!</h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for requesting a corporate cohort proposal for <strong className="text-slate-900">{course.title}</strong>. 
                Our Corporate Learning Directorate will provide tailored dates, syllabus mappings, and corporate pricing within 24 hours.
              </p>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-[#00587c] text-white font-bold text-xs shadow-md hover:bg-[#004764] transition-all"
                >
                  Return to Programs
                </button>
              </div>
            </div>
          ) : activeTab === 'curriculum' ? (
            
            /* TAB: CURRICULUM & LABS */
            <div className="space-y-6">
              
              <div className="space-y-2">
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#00587c]">
                  Executive Overview
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {course.summary}
                </p>
              </div>

              {/* Modules Breakdown */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#00587c] flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-cyan-600" />
                  <span>Curriculum Breakdown ({course.modules?.length || 4} Core Modules)</span>
                </h4>
                <div className="space-y-3">
                  {course.modules?.map((mod, idx) => {
                    const title = typeof mod === 'string' ? mod : mod.title;
                    const desc = typeof mod === 'string' ? null : mod.desc;
                    return (
                      <div 
                        key={idx} 
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-1 hover:border-cyan-300 transition-colors"
                      >
                        <div className="flex items-center space-x-2.5">
                          <span className="w-6 h-6 rounded-lg bg-[#00587c] text-white font-extrabold flex items-center justify-center text-[11px] shrink-0">
                            0{idx + 1}
                          </span>
                          <span className="font-bold text-slate-900 text-xs sm:text-[13px]">{title}</span>
                        </div>
                        {desc && (
                          <p className="text-xs text-slate-600 pl-8 leading-relaxed">
                            {desc}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Capstone Project Showcase */}
              {course.capstone && (
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200/80 space-y-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#00587c] flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Hands-On Capstone Project Deliverable:</span>
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                    {course.capstone}
                  </p>
                </div>
              )}

              {/* Validated Toolchains Mastered */}
              {course.tools && (
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                    Enterprise Toolchain Mastered in Labs:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {course.tools.map((tool, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <span className="text-slate-500 text-xs">
                  Format: <strong className="text-slate-700">{course.format}</strong>
                </span>
                
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab('enroll')}
                    className="px-5 py-2.5 rounded-xl bg-[#00587c] hover:bg-[#004764] text-white font-bold text-xs shadow-md transition-all flex items-center space-x-1.5 cursor-pointer"
                  >
                    <span>Request Batch Dates &amp; Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          ) : (
            
            /* TAB: PROPOSAL / COHORT FORM */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="p-3.5 rounded-2xl bg-cyan-50 border border-cyan-200/80 text-[#00587c] flex items-center space-x-2.5">
                <Sparkles className="w-4 h-4 text-cyan-600 shrink-0" />
                <p className="text-xs leading-relaxed font-medium">
                  Corporate cohort proposals include customized sandbox setups, flexible dates (weekdays or weekends), and Volume Enterprise Discounts.
                </p>
              </div>

              {/* Name and Work Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">
                    Contact Person Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rachel Lim"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#00587c] focus:ring-1 focus:ring-[#00587c] focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">
                    Corporate Work Email <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="rachel.lim@enterprise.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#00587c] focus:ring-1 focus:ring-[#00587c] focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Organization and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">
                    Company / Organization Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. DBS Bank, Grab, Singtel"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#00587c] focus:ring-1 focus:ring-[#00587c] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">
                    Phone / WhatsApp Contact <span className="text-rose-500">*</span>
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
              </div>

              {/* Team Size and Target Start Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">
                    Estimated Cohort Size
                  </label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-[#00587c] focus:ring-1 focus:ring-[#00587c] focus:outline-none transition-all font-medium"
                  >
                    <option value="Single Individual Participant">Individual Participant (Open Batch)</option>
                    <option value="Small Squad (5 to 10 Engineers)">Small Squad (5 to 10 Engineers)</option>
                    <option value="Medium Cohort (10 to 25 Engineers)">Medium Cohort (10 to 25 Engineers)</option>
                    <option value="Enterprise Department (25 to 50+ Engineers)">Enterprise Department (25 to 50+ Engineers)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">
                    Desired Delivery Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-[#00587c] focus:ring-1 focus:ring-[#00587c] focus:outline-none transition-all font-medium"
                  >
                    <option value="Immediate (Next 1–2 Weeks)">Immediate (Next 1–2 Weeks)</option>
                    <option value="Within Next 30 Days">Within Next 30 Days</option>
                    <option value="Next Quarter (Q3 / Q4)">Next Quarter Planning</option>
                    <option value="Flexible / Exploring Budget">Flexible / Exploring Budget</option>
                  </select>
                </div>
              </div>

              {/* Custom Requirements / Tech Stack */}
              <div>
                <label className="block text-slate-700 font-bold mb-1">
                  Specific Learning Objectives or Internal Tech Stack Focus
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. We need hands-on focus on AWS EKS, Terraform state migration, and preparing 12 engineers for the CKA exam..."
                  value={formData.customNotes}
                  onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#00587c] focus:ring-1 focus:ring-[#00587c] focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                <span className="text-[11px] text-slate-400">
                  🔒 Singapore IBF &amp; Corporate Subsidy Ready
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
                    <span>Request Cohort SOW &amp; Dates</span>
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
