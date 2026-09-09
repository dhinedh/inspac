import React, { useState, useMemo } from 'react';
import { 
  GraduationCap, 
  Clock, 
  Award, 
  BookOpen, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Search, 
  Sliders, 
  Check, 
  Layers, 
  Users, 
  Zap, 
  ShieldCheck, 
  Cloud, 
  BarChart3, 
  Code2, 
  GitPullRequest, 
  Database 
} from 'lucide-react';
import { trainingCoursesDetailed, trainingPillars } from '../data/trainingData';

export default function TrainingSection({ onSelectCourse, onOpenContact }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'matrix'

  // Category filters list
  const categories = [
    'All',
    'Cloud & Infrastructure',
    'Data & AI',
    'Cybersecurity & GRC',
    'Digital Engineering',
    'ERP & Platforms',
    'Process & Automation',
    'Quality Engineering',
    'Managed Infrastructure'
  ];

  // Filtered courses
  const filteredCourses = useMemo(() => {
    return trainingCoursesDetailed.filter(course => {
      if (selectedCategory !== 'All' && course.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(q);
        const matchesCat = course.category.toLowerCase().includes(q);
        const matchesSummary = course.summary.toLowerCase().includes(q);
        const matchesTools = course.tools?.some(t => t.toLowerCase().includes(q));
        const matchesCert = course.certificationTarget?.toLowerCase().includes(q);
        const matchesModules = course.modules?.some(m => {
          const t = typeof m === 'string' ? m : m.title + ' ' + (m.desc || '');
          return t.toLowerCase().includes(q);
        });
        return matchesTitle || matchesCat || matchesSummary || matchesTools || matchesCert || matchesModules;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="training" className="py-20 sm:py-24 bg-slate-50 relative border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-[#00587c]">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-600" />
            <span>Enterprise Upskilling &amp; Certification</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Professional Corporate Masterclasses &amp; <br />
            <span className="bg-gradient-to-r from-[#00587c] via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Executive Certification Sprints
            </span>
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Equip your engineering and leadership squads with real-world enterprise skills in Cloud DevSecOps, modern AI lakehouses, SAP ERP modernization, and QSA-accredited PCI-DSS 4.0 cybersecurity.
          </p>
        </div>

        {/* 6 Training Methodology Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingPillars.map((p, idx) => (
            <div 
              key={idx}
              className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-cyan-500/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl p-2 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center w-12 h-12 shadow-xs">
                    {p.icon}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-100 text-slate-600">
                    {p.tag}
                  </span>
                </div>
                
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#00587c] transition-colors leading-snug">
                  {p.title}
                </h3>
                
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-[#00587c]">
                <span>Standard Delivery Inclusions</span>
                <Check className="w-3.5 h-3.5 text-emerald-500 ml-1.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Filter Toolbar & Search Bar */}
        <div className="space-y-6 pt-4">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-2 border-b border-slate-200">
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Enterprise Course Catalog
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                8 specialized practitioner programs aligned with Singapore IBF, AWS, Snowflake, and PCI QSA credentials.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Search Box */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search tool, cert, skill..."
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#00587c] focus:ring-1 focus:ring-[#00587c] transition-all placeholder:text-slate-400 shadow-2xs"
                />
              </div>

              {/* View Mode Switcher */}
              <div className="inline-flex p-1 rounded-xl bg-white border border-slate-200 shrink-0 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setViewMode('cards')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
                    viewMode === 'cards'
                      ? 'bg-[#00587c] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Course Cards Grid"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Cards Grid</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('matrix')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
                    viewMode === 'matrix'
                      ? 'bg-[#00587c] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Curriculum Matrix View"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Matrix View</span>
                </button>
              </div>

              <span className="text-xs text-[#00587c] bg-cyan-50 px-3.5 py-1.5 rounded-xl border border-cyan-200 font-bold whitespace-nowrap shadow-2xs">
                {filteredCourses.length} Programs Available
              </span>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#00587c] text-white shadow-sm'
                      : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200/90'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>

        {/* ======================================================================= */}
        {/* VIEW A: INTERACTIVE COURSE CARDS GRID */}
        {/* ======================================================================= */}
        {viewMode === 'cards' && (
          <div className="space-y-6">
            {filteredCourses.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
                <Search className="w-10 h-10 text-slate-300 mx-auto" />
                <h4 className="text-base font-bold text-slate-800">No training programs match your search</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Try adjusting search keywords or selecting "All" categories to browse all 8 masterclasses.
                </p>
                <button
                  type="button"
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                  className="px-4 py-2 rounded-xl bg-[#00587c] text-white text-xs font-bold hover:bg-[#004764] transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-cyan-500/50 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6 group hover:-translate-y-1"
                  >
                    <div className="space-y-4">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                        <span className="px-3 py-1 rounded-full font-bold bg-cyan-50 text-[#00587c] border border-cyan-200 text-[11px]">
                          {course.category}
                        </span>
                        
                        <div className="flex items-center space-x-2 text-slate-500">
                          <span className="flex items-center space-x-1 bg-slate-100 px-2.5 py-0.5 rounded-md font-semibold text-[11px]">
                            <Clock className="w-3 h-3 text-cyan-600" />
                            <span>{course.duration}</span>
                          </span>
                          {course.stats?.handsOnRatio && (
                            <span className="px-2.5 py-0.5 rounded-md font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 text-[11px]">
                              {course.stats.handsOnRatio}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Course Title */}
                      <h4 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#00587c] transition-colors leading-snug">
                        {course.title}
                      </h4>

                      {/* Target Audience & Cert Target */}
                      <div className="space-y-1.5 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                        <div className="flex items-center space-x-1.5 text-slate-600">
                          <Users className="w-3.5 h-3.5 text-[#00587c] shrink-0" />
                          <span className="font-semibold text-slate-800">Target:</span>
                          <span className="truncate">{course.level}</span>
                        </div>
                        {course.certificationTarget && (
                          <div className="flex items-center space-x-1.5 text-slate-600">
                            <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                            <span className="font-semibold text-slate-800">Prepares for:</span>
                            <span className="text-[#00587c] font-bold truncate">{course.certificationTarget}</span>
                          </div>
                        )}
                      </div>

                      {/* Course Summary */}
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                        {course.summary}
                      </p>

                      {/* Modules Preview (First 3) */}
                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                          Curriculum Preview:
                        </span>
                        <div className="space-y-1.5">
                          {course.modules?.slice(0, 3).map((mod, i) => {
                            const title = typeof mod === 'string' ? mod : mod.title;
                            return (
                              <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                                <span className="line-clamp-1 font-medium">{title}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Tools Mastered Chips */}
                      {course.tools && (
                        <div className="space-y-1.5 pt-2 border-t border-slate-100">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                            Enterprise Toolchain:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {course.tools.slice(0, 5).map((tool, tIdx) => (
                              <span 
                                key={tIdx} 
                                className="px-2 py-0.5 rounded-md bg-slate-100 text-[11px] font-semibold text-slate-700"
                              >
                                {tool}
                              </span>
                            ))}
                            {course.tools.length > 5 && (
                              <span className="px-2 py-0.5 rounded-md bg-cyan-50 text-[11px] font-bold text-[#00587c]">
                                +{course.tools.length - 5}
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                    </div>

                    {/* Actions */}
                    <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => onSelectCourse(course)}
                        className="text-xs font-bold text-[#00587c] hover:text-cyan-800 transition-colors flex items-center space-x-1.5 cursor-pointer"
                      >
                        <span>Full Syllabus &amp; Labs</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onSelectCourse(course)}
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-[#00587c] to-[#004764] hover:from-cyan-400 hover:to-[#00587c] text-white font-extrabold text-xs shadow-md shadow-[#00587c]/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                      >
                        Enquire Cohort
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ======================================================================= */}
        {/* VIEW B: FULL CURRICULUM COMPARISON MATRIX */}
        {/* ======================================================================= */}
        {viewMode === 'matrix' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#00587c] text-white font-bold border-b border-cyan-900/50">
                    <th className="p-4 sm:p-5 whitespace-nowrap">Program Title</th>
                    <th className="p-4 sm:p-5 whitespace-nowrap">Category</th>
                    <th className="p-4 sm:p-5 whitespace-nowrap">Duration &amp; Format</th>
                    <th className="p-4 sm:p-5">Target Certification</th>
                    <th className="p-4 sm:p-5">Tools Mastered</th>
                    <th className="p-4 sm:p-5 text-right whitespace-nowrap">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredCourses.map((course) => (
                    <tr key={course.id} className="hover:bg-slate-50/80 transition-colors group">
                      <td className="p-4 sm:p-5 font-bold">
                        <button
                          type="button"
                          onClick={() => onSelectCourse(course)}
                          className="text-left font-black text-sm text-slate-900 group-hover:text-[#00587c] transition-colors cursor-pointer"
                        >
                          {course.title}
                        </button>
                        <p className="text-slate-500 text-xs font-normal mt-0.5 line-clamp-1">{course.level}</p>
                      </td>
                      <td className="p-4 sm:p-5 whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 font-semibold text-slate-700 text-[11px]">
                          {course.category}
                        </span>
                      </td>
                      <td className="p-4 sm:p-5 whitespace-nowrap">
                        <span className="font-bold text-slate-800 block">{course.duration}</span>
                        <span className="text-[11px] text-emerald-600 font-bold">{course.stats?.handsOnRatio}</span>
                      </td>
                      <td className="p-4 sm:p-5 max-w-xs text-[#00587c] font-semibold">
                        {course.certificationTarget || 'Corporate Certificate of Mastery'}
                      </td>
                      <td className="p-4 sm:p-5 max-w-xs">
                        <div className="flex flex-wrap gap-1">
                          {course.tools?.slice(0, 4).map((tool, tIdx) => (
                            <span key={tIdx} className="px-1.5 py-0.5 rounded bg-slate-100 text-[10px] font-medium text-slate-700">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 text-right whitespace-nowrap">
                        <button
                          type="button"
                          onClick={() => onSelectCourse(course)}
                          className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-[#00587c] hover:bg-[#004764] text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
                        >
                          <span>Syllabus &amp; SOW</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Corporate Custom Training Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-[#00587c] via-[#004764] to-[#00384f] text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-2 max-w-2xl relative z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-400/20 border border-cyan-400/30 text-cyan-300 text-xs font-bold">
              <Award className="w-3.5 h-3.5 text-cyan-300" />
              <span>Tailored Enterprise Delivery</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Need a Custom Corporate Bootcamp for Your Department?
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-normal">
              We design private on-site and virtual training bootcamps customized around your enterprise architecture, compliance constraints (PCI-DSS/HIPAA), and cloud toolchains.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              type="button"
              onClick={() => onOpenContact('Custom Corporate Bootcamp Request')}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all flex items-center space-x-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Request Custom Bootcamp Proposal</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
