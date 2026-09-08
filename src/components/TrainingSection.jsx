import React from 'react';
import { GraduationCap, Clock, Award, BookOpen, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { trainingCourses } from '../data/companyData';

export default function TrainingSection({ onSelectCourse, onOpenContact }) {
  return (
    <section id="training" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Corporate Knowledge & Capability Development</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional Corporate Training & <br className="hidden sm:inline" />
            <span className="gradient-text">Certification Programs</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Inspac Solutions provides practical, industry-aligned training programs in Data Science, Cloud & DevOps, GRC, and PCI-DSS Auditing to empower corporate teams across Singapore, India, and Australia.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainingCourses.map((course) => (
            <div
              key={course.id}
              className="glass-panel glass-panel-hover p-8 rounded-3xl border border-slate-800 space-y-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Meta info */}
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full font-bold bg-brand-500/10 text-brand-400 border border-brand-500/20">
                    {course.category}
                  </span>
                  <span className="flex items-center space-x-1.5 text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{course.duration}</span>
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-brand-300 transition-colors">
                  {course.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {course.summary}
                </p>

                {/* Modules Preview */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Key Focus Modules</span>
                  <div className="space-y-1.5">
                    {course.modules.slice(0, 3).map((mod, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Actions */}
              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => onSelectCourse(course)}
                  className="text-xs font-bold text-brand-400 hover:text-brand-300 flex items-center space-x-1.5"
                >
                  <span>View Full Curriculum</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenContact(`Training Inquiry: ${course.title}`)}
                  className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs transition-colors"
                >
                  Enquire Training
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Custom Training Banner */}
        <div className="mt-12 glass-panel p-8 rounded-3xl border border-brand-500/30 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Need Custom Corporate Up-skilling Workshops?</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We design custom on-site or virtual training bootcamps tailored to your enterprise tech stack, compliance goals, and team size.
            </p>
          </div>

          <button
            onClick={() => onOpenContact('Custom Corporate Training Request')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-cyan-500 text-white font-bold text-xs shadow-lg shadow-brand-600/30 hover:scale-105 transition-all shrink-0 flex items-center space-x-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Request Corporate Workshop</span>
          </button>
        </div>

      </div>
    </section>
  );
}
