import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Layers,
  BarChart3,
  ShieldCheck,
  Cloud,
  Code2,
  GitPullRequest,
  Database,
  BookOpen,
  Search,
  Sliders,
  Check,
  ExternalLink,
  Shield,
  Zap,
  Clock,
  Activity,
  Award,
  ChevronRight,
  Server,
  Workflow
} from 'lucide-react';

// Icon mapping matching servicesData
const serviceIcons = {
  'digital-engineering': Code2,
  'cloud-devsecops': Cloud,
  'ai-data-lakehouse': BarChart3,
  'cybersecurity-grc': ShieldCheck,
  'enterprise-erp': Layers,
  'process-automation': GitPullRequest,
  'quality-engineering': CheckCircle2,
  'managed-services': Database,
};

// Domain category definitions for filter pills
const categoryFilters = [
  { id: 'all', label: 'All Practices', count: 8 },
  { id: 'engineering-cloud', label: 'Cloud & Engineering', count: 2, keys: ['digital-engineering', 'cloud-devsecops'] },
  { id: 'data-ai', label: 'Data & AI', count: 1, keys: ['ai-data-lakehouse'] },
  { id: 'security-grc', label: 'Security & GRC', count: 1, keys: ['cybersecurity-grc'] },
  { id: 'erp-automation', label: 'ERP & Automation', count: 2, keys: ['enterprise-erp', 'process-automation'] },
  { id: 'quality-sre', label: 'Quality & SRE', count: 2, keys: ['quality-engineering', 'managed-services'] },
];

export default function ServicesPage({ onOpenContact }) {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'matrix'

  // Convert servicesData object into array with index ordering
  const allServices = useMemo(() => {
    return Object.values(servicesData);
  }, []);

  // Filtered services based on category pill and search query
  const filteredServices = useMemo(() => {
    return allServices.filter(service => {
      // Category filter
      if (selectedFilter !== 'all') {
        const filterDef = categoryFilters.find(f => f.id === selectedFilter);
        if (filterDef && filterDef.keys && !filterDef.keys.includes(service.id)) {
          return false;
        }
      }
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = service.title.toLowerCase().includes(q);
        const matchesTagline = service.tagline?.toLowerCase().includes(q);
        const matchesSummary = service.heroSummary?.toLowerCase().includes(q);
        const matchesTech = service.techStack?.some(t => t.name.toLowerCase().includes(q));
        const matchesPillars = service.pillars?.some(p => 
          p.title.toLowerCase().includes(q) || p.deliverables?.some(d => d.toLowerCase().includes(q))
        );
        return matchesTitle || matchesTagline || matchesSummary || matchesTech || matchesPillars;
      }
      return true;
    });
  }, [allServices, selectedFilter, searchQuery]);

  const handleConsultation = (practiceTitle) => {
    if (onOpenContact) {
      onOpenContact(`Enterprise Practice Consultation: ${practiceTitle || 'Overview'}`);
    } else {
      navigate('/contact');
    }
  };

  return (
    <div className="bg-[#f8fafc] text-slate-900 font-sans min-h-screen selection:bg-cyan-500 selection:text-white">
      
      {/* ========================================================================= */}
      {/* 1. LUXURY HERO HEADER (#00587c Theme with Dual Gradient & Photography) */}
      {/* ========================================================================= */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 bg-[#00587c] text-white overflow-hidden border-b border-cyan-900/40">
        
        {/* Background Backdrop Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80" 
            alt="Enterprise Technology Services Background" 
            className="w-full h-full object-cover object-center transform scale-105 filter brightness-[0.25] contrast-[1.2]"
          />
          {/* Brand #00587c Dual Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00587c]/95 via-[#004764]/92 to-[#00384f]/95 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#00587c]/80 via-transparent to-[#00384f]/95" />
          <div className="absolute inset-0 backdrop-blur-[1px]" />
        </div>

        {/* Ambient Glowing Radiance & Subtle Micro-Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-[1]" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none z-[1]" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none z-[1]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          {/* Top Breadcrumb & Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav className="flex items-center space-x-2 text-xs text-cyan-200/90 font-medium">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-white font-bold">Enterprise Service Practices</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-cyan-300 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>Tier-1 Enterprise Advisory & Delivery</span>
              </div>
              <Link 
                to="/buyers-guide" 
                className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-cyan-400/20 hover:bg-cyan-400/30 border border-cyan-400/40 text-xs font-bold text-white transition-colors shadow-sm"
              >
                <BookOpen className="w-3.5 h-3.5 text-cyan-300" />
                <span>2026 Buyer's Guide</span>
                <ArrowRight className="w-3 h-3 text-cyan-300" />
              </Link>
            </div>
          </div>

          {/* Hero Pitch Headline & Subtext */}
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Enterprise Technology &amp; Advisory Practices
            </h1>
            <p className="text-base sm:text-lg text-slate-200/95 leading-relaxed font-normal">
              Modeled after global system integrators HCLTech and Cognizant (CTS). 
              We engineer mission-critical cloud platforms, automate multi-cloud DevSecOps, orchestrate modern AI lakehouses, modernize SAP ERP, and guarantee 100% audit pass rates with QSA-grade PCI-DSS 4.0 cybersecurity.
            </p>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => handleConsultation('All Practices')}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all flex items-center space-x-2 cursor-pointer"
            >
              <span>Schedule Practice Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#practices-directory"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-sm backdrop-blur-md transition-colors"
            >
              Explore 8 Practice Areas
            </a>
          </div>

          {/* Bottom 4 Enterprise Benchmark Metrics */}
          <div className="pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">8 Practices</p>
              <p className="text-xs text-cyan-200/90 font-medium">End-to-End Enterprise Scope</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">100%</p>
              <p className="text-xs text-cyan-200/90 font-medium">Audit Pass Rate (PCI-DSS / ISO)</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">&lt; 15 min</p>
              <p className="text-xs text-cyan-200/90 font-medium">Tier-1 P1 Response SLA</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">70%</p>
              <p className="text-xs text-cyan-200/90 font-medium">Faster Time-to-Market</p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INTERACTIVE CONTROLS: CATEGORY FILTERS, SEARCH & VIEW MODE SWITCHER */}
      {/* ========================================================================= */}
      <section id="practices-directory" className="py-8 bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {categoryFilters.map((filter) => {
                const isActive = selectedFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center space-x-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-[#00587c] text-white shadow-md shadow-[#00587c]/20'
                        : 'bg-slate-100 hover:bg-slate-200/80 text-slate-600 hover:text-slate-900 border border-slate-200/80'
                    }`}
                  >
                    <span>{filter.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-white/20 text-cyan-200' : 'bg-slate-200 text-slate-500'
                    }`}>
                      {filter.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Side: Search Input + View Mode Toggle */}
            <div className="flex items-center space-x-3 shrink-0">
              
              {/* Search Box */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search tool, practice, SLA..."
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#00587c] focus:ring-1 focus:ring-[#00587c] transition-all placeholder:text-slate-400"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* View Mode Switcher */}
              <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200/80 shrink-0">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-[#00587c] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Practice Cards Grid"
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
                  title="Comparison Matrix Table"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Matrix View</span>
                </button>
              </div>

            </div>

          </div>

          {/* Search result helper notice */}
          {searchQuery && (
            <div className="text-xs text-slate-500 flex items-center justify-between pt-1">
              <span>Showing {filteredServices.length} practice{filteredServices.length === 1 ? '' : 's'} matching "{searchQuery}"</span>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setSelectedFilter('all'); }}
                className="text-[#00587c] font-semibold hover:underline"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. VIEW MODE A: RICH ENTERPRISE PRACTICE CARDS GRID */}
      {/* ========================================================================= */}
      {viewMode === 'grid' && (
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {filteredServices.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8 space-y-4">
                <Search className="w-12 h-12 text-slate-300 mx-auto" />
                <h3 className="text-lg font-bold text-slate-800">No matching enterprise practices found</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Try adjusting your search terms or clearing category filters to view all 8 core practices.
                </p>
                <button
                  type="button"
                  onClick={() => { setSearchQuery(''); setSelectedFilter('all'); }}
                  className="px-5 py-2.5 rounded-xl bg-[#00587c] text-white text-xs font-bold shadow-md hover:bg-[#004764] transition-colors"
                >
                  View All Practices
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {filteredServices.map((service, idx) => {
                  const ServiceIcon = serviceIcons[service.id] || Sparkles;
                  return (
                    <div
                      key={service.id}
                      className="rounded-3xl bg-white border border-slate-200 hover:border-cyan-500/60 shadow-xs hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1"
                    >
                      <div>
                        {/* Card Image Header with Zoom Effect & Gradient Overlay */}
                        <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                          <img 
                            src={service.heroBgImage} 
                            alt={service.title} 
                            className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-[1.1] group-hover:scale-105 group-hover:brightness-[0.45] transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                          
                          {/* Top Badges */}
                          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-[#00587c]/90 text-cyan-200 border border-cyan-400/30 backdrop-blur-md">
                              {service.category}
                            </span>
                            <span className="px-2.5 py-1 rounded-full text-[11px] font-black bg-black/60 text-slate-200 border border-white/20">
                              PRACTICE 0{idx + 1}
                            </span>
                          </div>

                          {/* Floating Practice Icon Badge */}
                          <div className="absolute -bottom-5 left-6 w-14 h-14 rounded-2xl bg-[#00587c] text-cyan-300 border-4 border-white shadow-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-[#004764] transition-all duration-300">
                            <ServiceIcon className="w-7 h-7" />
                          </div>

                          {/* Benchmark Reference Tag */}
                          <div className="absolute bottom-3 right-4 hidden sm:block">
                            <span className="text-[10px] text-slate-300 font-medium bg-black/60 px-2.5 py-1 rounded-lg border border-white/10">
                              {service.benchmarkRef}
                            </span>
                          </div>
                        </div>

                        {/* Content Body */}
                        <div className="p-6 sm:p-8 pt-8 space-y-5">
                          
                          <div className="space-y-1.5">
                            <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#00587c] transition-colors leading-tight">
                              <Link to={`/services/${service.id}`}>
                                {service.title}
                              </Link>
                            </h3>
                            <p className="text-xs sm:text-sm font-semibold text-[#00587c] leading-snug">
                              {service.tagline}
                            </p>
                          </div>

                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                            {service.heroSummary}
                          </p>

                          {/* 4 Core Pillars / Deliverables */}
                          <div className="space-y-2 pt-2 border-t border-slate-100">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                              Core Scope &amp; Deliverables:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {service.pillars?.slice(0, 4).map((pillar, pIdx) => (
                                <div key={pIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                  <span className="line-clamp-1 font-medium">{pillar.title}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Production Toolchain Chips */}
                          <div className="space-y-2 pt-3 border-t border-slate-100">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                              Production Toolchain &amp; Standards:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {service.techStack?.slice(0, 5).map((tech, tIdx) => (
                                <span 
                                  key={tIdx} 
                                  className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200/80 text-[11px] font-semibold text-slate-700"
                                >
                                  {tech.name}
                                </span>
                              ))}
                              {service.techStack && service.techStack.length > 5 && (
                                <span className="px-2 py-0.5 rounded-md bg-cyan-50 border border-cyan-200 text-[11px] font-bold text-[#00587c]">
                                  +{service.techStack.length - 5} more
                                </span>
                              )}
                            </div>
                          </div>

                        </div>
                      </div>

                      {/* Card Footer: Impact Metric & Direct Navigation */}
                      <div className="p-6 sm:p-8 pt-4 border-t border-slate-100 bg-slate-50/70 flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[10px] uppercase font-bold text-slate-400">{service.stats[0].label}</p>
                          <p className="text-lg font-black text-[#00587c]">{service.stats[0].value}</p>
                        </div>

                        <div className="flex items-center space-x-2">
                          <button
                            type="button"
                            onClick={() => handleConsultation(service.title)}
                            className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-[#00587c] hover:bg-slate-200/60 transition-colors hidden sm:inline-block cursor-pointer"
                          >
                            Consult Practice
                          </button>
                          
                          <Link
                            to={`/services/${service.id}`}
                            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00587c] to-[#004764] hover:from-[#004764] hover:to-[#00384f] text-white text-xs font-bold shadow-md shadow-[#00587c]/20 hover:scale-105 active:scale-95 transition-all flex items-center space-x-1.5"
                          >
                            <span>Explore Practice</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 4. VIEW MODE B: FULL ENTERPRISE DELIVERABLES MATRIX (TABLE VIEW) */}
      {/* ========================================================================= */}
      {viewMode === 'matrix' && (
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              <div className="p-6 sm:p-8 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Enterprise Deliverables &amp; Benchmark Matrix
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Direct comparison of scope, validated toolchains, guaranteed SLAs, and business impact across all 8 practices.
                  </p>
                </div>
                <span className="px-3.5 py-1.5 rounded-xl bg-cyan-50 border border-cyan-200 text-xs font-bold text-[#00587c] self-start sm:self-auto">
                  Modeled after HCLTech &amp; CTS
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#00587c] text-white font-bold border-b border-cyan-900/50">
                      <th className="p-4 sm:p-5 whitespace-nowrap">Enterprise Practice</th>
                      <th className="p-4 sm:p-5 whitespace-nowrap">Category</th>
                      <th className="p-4 sm:p-5">Core Scope &amp; Objectives</th>
                      <th className="p-4 sm:p-5">Supported Toolchain</th>
                      <th className="p-4 sm:p-5 whitespace-nowrap">Impact Benchmark</th>
                      <th className="p-4 sm:p-5 text-right whitespace-nowrap">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {filteredServices.map((service, sIdx) => {
                      const ServiceIcon = serviceIcons[service.id] || Sparkles;
                      return (
                        <tr key={service.id} className="hover:bg-slate-50/80 transition-colors group">
                          
                          {/* Practice Name & Icon */}
                          <td className="p-4 sm:p-5 font-bold">
                            <Link 
                              to={`/services/${service.id}`}
                              className="flex items-center space-x-2.5 text-slate-900 group-hover:text-[#00587c] transition-colors"
                            >
                              <div className="w-8 h-8 rounded-lg bg-cyan-50 text-[#00587c] flex items-center justify-center shrink-0 group-hover:bg-[#00587c] group-hover:text-white transition-colors">
                                <ServiceIcon className="w-4 h-4" />
                              </div>
                              <span className="font-extrabold text-sm">{service.title}</span>
                            </Link>
                          </td>

                          {/* Category Badge */}
                          <td className="p-4 sm:p-5 whitespace-nowrap">
                            <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 font-semibold text-slate-700 text-[11px]">
                              {service.category}
                            </span>
                          </td>

                          {/* Summary Scope */}
                          <td className="p-4 sm:p-5 max-w-xs text-slate-600 leading-relaxed font-normal">
                            {service.tagline}
                          </td>

                          {/* Tech Stack Chips */}
                          <td className="p-4 sm:p-5 max-w-xs">
                            <div className="flex flex-wrap gap-1">
                              {service.techStack?.slice(0, 4).map((tech, tIdx) => (
                                <span key={tIdx} className="px-1.5 py-0.5 rounded bg-slate-100 text-[10px] font-medium text-slate-700">
                                  {tech.name}
                                </span>
                              ))}
                            </div>
                          </td>

                          {/* Impact Benchmark */}
                          <td className="p-4 sm:p-5 whitespace-nowrap">
                            <span className="font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                              {service.stats[0].value} {service.stats[0].label}
                            </span>
                          </td>

                          {/* Action Button */}
                          <td className="p-4 sm:p-5 text-right whitespace-nowrap">
                            <Link
                              to={`/services/${service.id}`}
                              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#00587c] hover:bg-[#004764] text-white text-xs font-bold transition-all"
                            >
                              <span>View Specs</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </td>

                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
                <span>All 8 practices backed by Tier-1 SLAs and direct Singapore delivery center leadership.</span>
                <button
                  type="button"
                  onClick={() => handleConsultation('Scope Comparison Matrix')}
                  className="text-[#00587c] font-bold hover:underline"
                >
                  Download Formal RFP Scope Template (PDF) →
                </button>
              </div>

            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 5. STRUCTURED ENTERPRISE ENGAGEMENT MODELS STRIP */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-[#00587c] uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-cyan-600" />
              <span>Engagement Flexibility</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Enterprise Delivery &amp; Commercial Models
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed font-normal">
              Whether you need rapid tactical threat isolation or multi-year strategic digital engineering, we structure engagements around transparent milestones and strict SLAs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Model 1: Architecture Blueprint & Advisory */}
            <div className="p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-cyan-500/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#00587c] flex items-center justify-center font-black">
                  <Workflow className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">2–4 Weeks • Fixed Price</span>
                  <h3 className="text-lg font-bold text-slate-900">Architecture Assessment &amp; Blueprint</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Deep-dive code audit, legacy dependency graph mapping, PCI-DSS / ISO threat modeling, and executive migration blueprint.
                </p>
                <div className="space-y-1.5 pt-2">
                  <div className="flex items-center space-x-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Fixed-fee deliverables guarantee</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Full architecture CAD &amp; TCO roadmap</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/60">
                <button
                  type="button"
                  onClick={() => handleConsultation('Architecture Assessment')}
                  className="text-xs font-bold text-[#00587c] hover:text-cyan-800 transition-colors flex items-center space-x-1 cursor-pointer"
                >
                  <span>Request Assessment Proposal</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Model 2: Dedicated Agile Engineering Squad */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#00587c] via-[#004764] to-[#00384f] text-white shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-cyan-300 flex items-center justify-center font-black border border-white/20">
                  <Code2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider">Sprint-Based • Dedicated Pod</span>
                  <h3 className="text-lg font-bold text-white">Co-Engineering Pods &amp; Squads</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed">
                  Autonomous, cross-functional squads (Tech Lead, Senior Engineers, QA &amp; DevOps) co-located or remote, executing bi-weekly CI/CD sprints.
                </p>
                <div className="space-y-1.5 pt-2">
                  <div className="flex items-center space-x-2 text-xs text-slate-100">
                    <Check className="w-3.5 h-3.5 text-cyan-300" />
                    <span>Seamless integration with client Jira</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-100">
                    <Check className="w-3.5 h-3.5 text-cyan-300" />
                    <span>Complete IP and code repository transfer</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/15 relative z-10">
                <button
                  type="button"
                  onClick={() => handleConsultation('Co-Engineering Squad')}
                  className="text-xs font-bold text-cyan-300 hover:text-white transition-colors flex items-center space-x-1 cursor-pointer"
                >
                  <span>Build Your Pod Specification</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Model 3: 24/7 Managed Services & SRE */}
            <div className="p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-cyan-500/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black">
                  <Server className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Annual SLA • 24/7/365</span>
                  <h3 className="text-lg font-bold text-slate-900">Managed SRE, NOC &amp; SOC Retainer</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Round-the-clock infrastructure monitoring, sub-15m incident response, proactive automated patch cycles, and compliance upkeep.
                </p>
                <div className="space-y-1.5 pt-2">
                  <div className="flex items-center space-x-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Financially-backed 99.999% SLAs</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>SOC 2 &amp; ISO 27001 audited operations</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/60">
                <button
                  type="button"
                  onClick={() => handleConsultation('Managed SRE & Retainer')}
                  className="text-xs font-bold text-[#00587c] hover:text-cyan-800 transition-colors flex items-center space-x-1 cursor-pointer"
                >
                  <span>View SRE Service Level Agreements</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. HIGH-CONVERTING BOTTOM EXECUTIVE CTA (#00587c Brand Palette) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-[#00587c] via-[#004764] to-[#00384f] text-white relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-400/15 border border-cyan-400/30 text-cyan-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Singapore Delivery Center &amp; Global Hubs</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Ready to structure your enterprise delivery engagement?
          </h2>

          <p className="text-xs sm:text-base text-slate-200/90 max-w-2xl mx-auto leading-relaxed font-normal">
            Connect directly with our practice leadership in Singapore to review enterprise architecture, establish POC milestones, and evaluate team availability.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => handleConsultation('Practice Proposals')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 text-slate-950 font-black text-xs sm:text-sm shadow-2xl shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Request Practice Proposal &amp; SOW
            </button>
            
            <Link
              to="/contact"
              className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-xs sm:text-sm backdrop-blur-md transition-colors"
            >
              Contact Advisory Desk
            </Link>
          </div>

          <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <span>● Direct NDA Execution</span>
            <span>● 48-Hour Scoping Turnaround</span>
            <span>● Zero Legacy Code Lock-In</span>
          </div>

        </div>
      </section>

    </div>
  );
}
