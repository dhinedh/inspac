import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function ServiceModal({ service, onClose, onOpenContact }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-2xl rounded-3xl border border-slate-700/80 shadow-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Glowing background accent */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-500/10 rounded-full blur-3xl"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-400 border border-brand-500/20">
            {service.category}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {service.title}
          </h3>
          <p className="text-sm text-slate-300">
            {service.summary}
          </p>
        </div>

        {/* Deep Description */}
        <div className="p-4 rounded-2xl bg-navy-950/80 border border-slate-800 text-sm text-slate-300 leading-relaxed">
          {service.description}
        </div>

        {/* Key Deliverables & Features */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Key Engineering & Advisory Scope</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.features.map((feat, idx) => (
              <div key={idx} className="flex items-start space-x-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Business Impact / Benefits */}
        <div className="p-4 rounded-2xl bg-brand-950/40 border border-brand-800/40 text-xs text-brand-200 space-y-1">
          <span className="font-bold text-white block">Client Value Outcome:</span>
          <p>{service.benefits}</p>
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
              onOpenContact(`Inquiry: ${service.title}`);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-cyan-500 text-white font-bold text-xs shadow-lg shadow-brand-600/30 hover:scale-105 transition-all flex items-center justify-center space-x-2"
          >
            <span>Request Scope Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
