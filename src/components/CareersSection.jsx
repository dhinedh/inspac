import React, { useState, useMemo } from 'react';
import { 
  Briefcase, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Building, 
  DollarSign, 
  Search, 
  Sliders, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  Clock, 
  Globe, 
  Award,
  ExternalLink
} from 'lucide-react';
import { openPositionsDetailed, careerBenefits } from '../data/careersData';

export default function CareersSection({ onSelectJob, onOpenContact }) {
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedJobId, setExpandedJobId] = useState(null);

  // Departments list for filter pills
  const departments = ['All', 'Cloud Transformation', 'Security & Governance', 'AI & Data Science', 'Digital Engineering', 'Enterprise ERP & Platforms', 'Intelligent Automation', 'Quality Engineering', 'Managed Infrastructure'];

  // Filtered jobs
  const filteredJobs = useMemo(() => {
    return openPositionsDetailed.filter(job => {
      if (selectedDept !== 'All' && job.department !== selectedDept) return false;
      if (selectedLocation !== 'All' && !job.location.toLowerCase().includes(selectedLocation.toLowerCase())) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(q);
        const matchesDept = job.department.toLowerCase().includes(q);
        const matchesTech = job.techStack?.some(t => t.toLowerCase().includes(q));
        const matchesReq = job.requirements?.some(r => r.toLowerCase().includes(q));
        return matchesTitle || matchesDept || matchesTech || matchesReq;
      }
      return true;
    });
  }, [selectedDept, selectedLocation, searchQuery]);

  const toggleExpand = (jobId) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };

  return (
    <section id="careers" className="py-20 sm:py-24 bg-slate-50 relative border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-[#00587c]">
            <Briefcase className="w-3.5 h-3.5 text-cyan-600" />
            <span>Global Engineering &amp; Advisory Talent</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Careers at Inspac Solutions <br />
            <span className="bg-gradient-to-r from-[#00587c] via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Engineer Mission-Critical Systems
            </span>
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Join cross-functional pods executing high-scale digital transformations, enterprise AI lakehouses, multi-cloud DevSecOps, and PCI-DSS 4.0 cybersecurity across <strong className="text-slate-900">Singapore, India, and Australia</strong>.
          </p>
        </div>

        {/* Culture & Benefits Highlights (6 EVP Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerBenefits.map((b, idx) => (
            <div 
              key={idx}
              className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-cyan-500/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl p-2 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center w-12 h-12 shadow-xs">
                    {b.icon}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-100 text-slate-600">
                    {b.tag}
                  </span>
                </div>
                
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#00587c] transition-colors leading-snug">
                  {b.title}
                </h3>
                
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {b.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-[#00587c]">
                <span>Verified Inspac Benefit</span>
                <Check className="w-3.5 h-3.5 text-emerald-500 ml-1.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Open Positions Hub */}
        <div className="space-y-8 pt-6">
          
          {/* Section Sub-heading & Filter Toolbar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-2 border-b border-slate-200">
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Current Openings
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Explore active engineering, architecture, and compliance consulting roles.
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
                  placeholder="Search role, skills, cloud..."
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#00587c] focus:ring-1 focus:ring-[#00587c] transition-all placeholder:text-slate-400 shadow-2xs"
                />
              </div>

              {/* Location Selector */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-3 py-2 text-xs font-bold rounded-xl bg-white border border-slate-200 text-slate-700 focus:outline-none focus:border-[#00587c] shadow-2xs cursor-pointer"
              >
                <option value="All">All Locations</option>
                <option value="Singapore">Singapore (HQ)</option>
                <option value="India">India (Offshore Tech Hub)</option>
                <option value="Australia">Australia</option>
              </select>

              <span className="text-xs text-[#00587c] bg-cyan-50 px-3.5 py-1.5 rounded-xl border border-cyan-200 font-bold whitespace-nowrap shadow-2xs">
                {filteredJobs.length} Roles Available
              </span>
            </div>
          </div>

          {/* Department Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {departments.map((dept) => {
              const isActive = selectedDept === dept;
              return (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#00587c] text-white shadow-sm'
                      : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200/90'
                  }`}
                >
                  {dept}
                </button>
              );
            })}
          </div>

          {/* Job Openings List */}
          {filteredJobs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
              <Search className="w-10 h-10 text-slate-300 mx-auto" />
              <h4 className="text-base font-bold text-slate-800">No open roles found matching criteria</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try clearing search terms or selecting "All" departments to view our full requisition list.
              </p>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setSelectedDept('All'); setSelectedLocation('All'); }}
                className="px-4 py-2 rounded-xl bg-[#00587c] text-white text-xs font-bold hover:bg-[#004764] transition-colors"
              >
                Reset Role Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {filteredJobs.map((job) => {
                const isExpanded = expandedJobId === job.id;
                return (
                  <div
                    key={job.id}
                    className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-cyan-500/50 shadow-xs hover:shadow-xl transition-all duration-300 space-y-5 group"
                  >
                    
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      
                      <div className="space-y-2.5 max-w-3xl">
                        
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-cyan-50 text-[#00587c] border border-cyan-200">
                            {job.department}
                          </span>
                          <span className="text-xs text-slate-500 flex items-center space-x-1">
                            <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                            <span>{job.location}</span>
                          </span>
                          <span className="text-slate-300">•</span>
                          <span className="text-xs text-slate-600 font-medium">{job.type}</span>
                          <span className="text-slate-300">•</span>
                          <span className="text-xs text-slate-600 font-medium">{job.experience}</span>
                        </div>

                        <h4 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[#00587c] transition-colors leading-snug">
                          {job.title}
                        </h4>

                        <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                          {job.summary}
                        </p>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {job.techStack?.slice(0, 6).map((tech, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200/80 text-[11px] font-semibold text-slate-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                      </div>

                      {/* Right Action Box: Compensation + Apply Button */}
                      <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                        {job.salary && (
                          <div className="text-left lg:text-right">
                            <span className="text-[10px] uppercase font-bold text-slate-400 block">Benchmark Comp</span>
                            <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/80 inline-block mt-0.5">
                              {job.salary}
                            </span>
                          </div>
                        )}

                        <div className="flex items-center space-x-2 w-full sm:w-auto">
                          <button
                            type="button"
                            onClick={() => toggleExpand(job.id)}
                            className="px-3.5 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-xs transition-colors flex items-center space-x-1 cursor-pointer"
                          >
                            <span>{isExpanded ? 'Less' : 'Details'}</span>
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>

                          <button
                            type="button"
                            onClick={() => onSelectJob(job)}
                            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-[#00587c] to-[#004764] hover:from-cyan-400 hover:to-[#00587c] text-white font-extrabold text-xs shadow-md shadow-[#00587c]/20 hover:scale-105 active:scale-95 transition-all flex items-center space-x-1.5 cursor-pointer"
                          >
                            <span>Apply Now</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                    </div>

                    {/* Expandable In-Depth Role Details Accordion */}
                    {isExpanded && (
                      <div className="pt-5 border-t border-slate-100 space-y-4 animate-fadeIn text-xs">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                          
                          <div className="space-y-2">
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#00587c] block">
                              Core Responsibilities:
                            </span>
                            <div className="space-y-1.5">
                              {job.responsibilities?.map((r, rIdx) => (
                                <div key={rIdx} className="flex items-start space-x-2 text-slate-700">
                                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                  <span className="leading-relaxed">{r}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#00587c] block">
                              Essential Requirements:
                            </span>
                            <div className="space-y-1.5">
                              {job.requirements?.map((req, qIdx) => (
                                <div key={qIdx} className="flex items-start space-x-2 text-slate-700">
                                  <Check className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                                  <span className="leading-relaxed">{req}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <span className="text-slate-500 text-xs">
                            Role ID: <code className="font-mono text-slate-700">{job.id}</code>
                          </span>
                          <button
                            type="button"
                            onClick={() => onSelectJob(job)}
                            className="text-[#00587c] font-bold hover:underline flex items-center space-x-1 cursor-pointer"
                          >
                            <span>Open Dedicated Application Window</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    )}

                  </div>
                );
              })}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
