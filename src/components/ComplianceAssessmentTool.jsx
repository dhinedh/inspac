import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle, 
  AlertTriangle, 
  HelpCircle, 
  RotateCcw, 
  ArrowRight,
  Sparkles,
  FileSpreadsheet
} from 'lucide-react';
import { assessmentQuestions } from '../data/companyData';

export default function ComplianceAssessmentTool({ onOpenContact }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (questionId, option) => {
    const newAnswers = { ...answers, [questionId]: option };
    setAnswers(newAnswers);

    if (currentStep < assessmentQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const calculateTotalScore = () => {
    return Object.values(answers).reduce((acc, opt) => acc + (opt.score || 0), 0);
  };

  const score = calculateTotalScore();

  const getAssessmentStatus = (score) => {
    if (score >= 80) {
      return {
        level: "Audit-Ready & Highly Compliant",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10 border-emerald-500/30",
        icon: CheckCircle,
        summary: "Your environment demonstrates strong alignment with PCI-DSS & GRC control frameworks. Inspac Solutions can assist with formal AOC attestation and continuous audit readiness."
      };
    } else if (score >= 50) {
      return {
        level: "Moderate Compliance - Gap Remediation Needed",
        color: "text-amber-400",
        bg: "bg-amber-500/10 border-amber-500/30",
        icon: AlertTriangle,
        summary: "Your organization has basic security practices, but key gaps exist in cardholder data isolation, IaC automation, or formal GRC policy drills."
      };
    } else {
      return {
        level: "High Risk - Immediate Scope & Control Review Required",
        color: "text-rose-400",
        bg: "bg-rose-500/10 border-rose-500/30",
        icon: AlertTriangle,
        summary: "Significant vulnerabilities and missing compliance controls detected. Immediate PCI-DSS scope reduction & security hardening is recommended."
      };
    }
  };

  const resetQuiz = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  const status = getAssessmentStatus(score);
  const currentQ = assessmentQuestions[currentStep];

  return (
    <section id="compliance" className="py-24 bg-navy-900/60 relative border-t border-b border-slate-800">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Interactive Compliance Diagnostic</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            PCI-DSS & Cloud Security <br className="hidden sm:inline" />
            <span className="gradient-text">Readiness Calculator</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Evaluate your organization's compliance posture across payment security, cloud automation, vulnerability testing, and GRC policies in under 2 minutes.
          </p>
        </div>

        {/* Diagnostic Tool Container */}
        <div className="mt-12 glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl relative">
          
          {!isCompleted ? (
            <div className="space-y-8">
              
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                  <span>Question {currentStep + 1} of {assessmentQuestions.length}</span>
                  <span className="text-brand-400">{Math.round(((currentStep + 1) / assessmentQuestions.length) * 100)}% Complete</span>
                </div>
                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div 
                    className="h-full bg-gradient-to-r from-brand-600 to-cyan-400 transition-all duration-300 rounded-full"
                    style={{ width: `${((currentStep + 1) / assessmentQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Current Question */}
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {currentQ.question}
                </h3>

                {/* Options List */}
                <div className="grid grid-cols-1 gap-3.5">
                  {currentQ.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(currentQ.id, option)}
                      className="w-full text-left p-4 sm:p-5 rounded-2xl bg-navy-950/70 border border-slate-800 hover:border-brand-500/60 hover:bg-slate-850 transition-all flex items-center justify-between group"
                    >
                      <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white">
                        {option.label}
                      </span>
                      <div className="w-6 h-6 rounded-full border border-slate-700 group-hover:border-brand-400 flex items-center justify-center text-xs text-transparent group-hover:text-brand-400 transition-colors shrink-0">
                        ✓
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-8 text-center animate-fadeIn">
              
              <div className="inline-flex p-4 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 mb-2">
                <ShieldCheck className="w-10 h-10 animate-pulse" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Compliance Assessment Complete
                </h3>
                <p className="text-xs text-slate-400 mt-1">Generated by Inspac Solutions Diagnostic Matrix</p>
              </div>

              {/* Score Display */}
              <div className="p-8 rounded-3xl bg-navy-950/90 border border-slate-800 max-w-lg mx-auto space-y-4">
                <div className="text-5xl font-extrabold gradient-text-accent">
                  {score} / 100
                </div>

                <div className={`inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-bold border ${status.bg} ${status.color}`}>
                  <status.icon className="w-4 h-4" />
                  <span>{status.level}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed pt-2">
                  {status.summary}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={resetQuiz}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retake Diagnostic</span>
                </button>

                <button
                  onClick={() => onOpenContact(`PCI Assessment Result: ${score}/100 - ${status.level}`)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-cyan-500 text-white font-bold text-xs shadow-xl shadow-brand-600/30 hover:scale-105 transition-all flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-cyan-200" />
                  <span>Request Free Compliance Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
