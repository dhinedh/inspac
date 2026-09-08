import React, { useState } from 'react';
import { X, Briefcase, MapPin, CheckCircle, Send, Upload } from 'lucide-react';

export default function CareerModal({ job, onClose, onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    portfolio: '',
    notes: ''
  });
  const [fileUploaded, setFileUploaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!job) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onSubmitSuccess(`Application received for ${job.title}! We will reach out shortly.`);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-xl rounded-3xl border border-slate-700/80 shadow-2xl p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-brand-500/10 text-brand-400 border border-brand-500/20">
            {job.department}
          </span>
          <h3 className="text-2xl font-extrabold text-white">
            Apply: {job.title}
          </h3>
          <p className="text-xs text-slate-400 flex items-center space-x-2">
            <span>📍 {job.location}</span>
            <span>•</span>
            <span>💼 {job.type}</span>
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-slate-800 text-white placeholder-slate-500 focus:border-brand-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-slate-800 text-white placeholder-slate-500 focus:border-brand-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+65 9123 4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-slate-800 text-white placeholder-slate-500 focus:border-brand-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Years of Experience</label>
                <input
                  type="text"
                  placeholder="e.g. 5+ Years"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-slate-800 text-white placeholder-slate-500 focus:border-brand-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">LinkedIn / Portfolio Link</label>
              <input
                type="url"
                placeholder="https://linkedin.com/in/username"
                value={formData.portfolio}
                onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-slate-800 text-white placeholder-slate-500 focus:border-brand-500 focus:outline-none"
              />
            </div>

            {/* Resume Upload Box */}
            <div>
              <label className="block text-slate-300 font-medium mb-1">Attach Resume (PDF / DOCX)</label>
              <div 
                onClick={() => setFileUploaded(true)}
                className={`p-4 rounded-2xl border-2 border-dashed text-center cursor-pointer transition-colors ${
                  fileUploaded 
                    ? 'border-emerald-500/60 bg-emerald-500/10 text-emerald-300' 
                    : 'border-slate-800 bg-navy-950 hover:border-brand-500/50 text-slate-400'
                }`}
              >
                <Upload className="w-5 h-5 mx-auto mb-1" />
                {fileUploaded ? (
                  <span className="font-semibold flex items-center justify-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Resume Attached (resume_sample.pdf)</span>
                  </span>
                ) : (
                  <span>Click to select file or drag & drop</span>
                )}
              </div>
            </div>

            <div className="pt-2 flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold shadow-lg shadow-brand-600/30 flex items-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Application</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="py-8 text-center space-y-3">
            <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
            <h4 className="text-xl font-bold text-white">Application Submitted!</h4>
            <p className="text-xs text-slate-300">Thank you for your interest in joining Inspac Solutions.</p>
          </div>
        )}

      </div>
    </div>
  );
}
