import React from 'react';
import { X, CheckCircle2, Clock, Award, BookOpen, ArrowRight } from 'lucide-react';

export default function TrainingModal({ course, onClose, onOpenContact }) {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-2xl rounded-3xl border border-slate-700/80 shadow-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-400 border border-brand-500/20">
              {course.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>{course.duration}</span>
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {course.title}
          </h3>
          <p className="text-sm text-slate-300">
            {course.summary}
          </p>
        </div>

        {/* Course Modules Breakdown */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-brand-400" />
            <span>Curriculum & Learning Modules</span>
          </h4>
          <div className="grid grid-cols-1 gap-2.5">
            {course.modules.map((mod, idx) => (
              <div key={idx} className="flex items-start space-x-3 p-3 rounded-xl bg-navy-950/80 border border-slate-800 text-xs text-slate-200">
                <span className="w-5 h-5 rounded-full bg-brand-600/30 text-brand-300 font-bold flex items-center justify-center text-[10px] shrink-0">
                  {idx + 1}
                </span>
                <span>{mod}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certification Target */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center space-x-3">
          <Award className="w-6 h-6 text-amber-400 shrink-0" />
          <div className="text-xs">
            <span className="font-bold text-white block">Professional Certification Alignment</span>
            <span className="text-slate-400">Prepares candidates for industry-recognized global technical certifications.</span>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-slate-800">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-semibold transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenContact(`Training Enrollment: ${course.title}`);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-cyan-500 text-white font-bold text-xs shadow-lg shadow-brand-600/30 hover:scale-105 transition-all flex items-center justify-center space-x-2"
          >
            <span>Enquire / Register Batch</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
