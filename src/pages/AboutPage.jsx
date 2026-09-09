import React, { useState } from 'react';
import { 
  Building2, 
  Globe2, 
  ShieldCheck, 
  Award, 
  Users, 
  Target, 
  Eye, 
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Lock,
  Server,
  TrendingUp,
  Compass,
  Briefcase,
  ChevronRight,
  Check,
  Building,
  Shield,
  Layers,
  Cpu,
  Clock,
  Zap,
  Terminal,
  Database,
  Code2,
  FileCheck,
  UserCheck,
  Star,
  Activity,
  BarChart3,
  Quote,
  CheckCircle,
  ExternalLink,
  ChevronDown,
  Milestone,
  Flag,
  Globe,
  HeartHandshake,
  Workflow,
  Lightbulb,
  FileText,
  Settings
} from 'lucide-react';
import { companyInfo } from '../data/companyData';
import { Link } from 'react-router-dom';

export default function AboutPage({ onOpenContact }) {
  const [activeLocationTab, setActiveLocationTab] = useState('singapore');
  const [activePurposeTab, setActivePurposeTab] = useState('mission');
  const [activePhase, setActivePhase] = useState(0);

  // Home Page Style Feature Pillars
  const aboutFeatures = [
    {
      icon: Settings,
      title: "Technology Consulting",
      subtitle: "Expert IT strategy & digital guidance."
    },
    {
      icon: Lightbulb,
      title: "Enterprise Solutions",
      subtitle: "Scalable software & workflow apps."
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      subtitle: "Cloud, data & process automation."
    },
    {
      icon: ShieldCheck,
      title: "PCI-DSS & GRC Compliance",
      subtitle: "QSA readiness & 100% audit pass."
    }
  ];

  // 06 — Our Approach (4 Connected Steps)
  const approachSteps = [
    {
      num: "01",
      stepTag: "PHASE 1",
      title: "Architectural Audit & Strategy",
      desc: "Deep-dive assessment of current IT infrastructure, legacy codebases, security posture, and business objectives to formulate a high-ROI transformation roadmap.",
      icon: Compass,
      deliverables: ["Cloud Architecture Assessment", "PCI-DSS Scope Mapping", "Legacy Code Health Report"]
    },
    {
      num: "02",
      stepTag: "PHASE 2",
      title: "Agile Engineering & DevSecOps",
      desc: "Iterative engineering sprints using microservices, automated IaC blueprints, zero-trust security controls, and continuous integration pipelines.",
      icon: Cpu,
      deliverables: ["Kubernetes Infrastructure (IaC)", "CI/CD Pipeline Security", "Microservices Refactoring"]
    },
    {
      num: "03",
      stepTag: "PHASE 3",
      title: "Compliance & Security Hardening",
      desc: "Rigorous PCI-DSS 4.0 scope reduction, CDE isolation, vulnerability SAST/DAST testing, ISO 27001 controls alignment, and mock QSA audit verification.",
      icon: ShieldCheck,
      deliverables: ["PCI-DSS v4.0 AOC Readiness", "CDE Scope Isolation", "Penetration Test Execution"]
    },
    {
      num: "04",
      stepTag: "PHASE 4",
      title: "24/7 Managed NOC/SOC Operations",
      desc: "L1-L3 service desk monitoring, sub-15 minute critical SLAs, high-availability database failover, and continuous Cloud FinOps optimization.",
      icon: Clock,
      deliverables: ["24/7/365 Monitoring Desk", "Sub-15m Critical SLA", "FinOps Cloud Cost Tuning"]
    }
  ];

  // 07 — Why Choose Us (Corporate Differentiators)
  const whyChooseUs = [
    {
      icon: Globe2,
      title: "Cross-Border APAC Synergy",
      desc: "Singapore corporate governance paired with India R&D engineering velocity and Australia client success operations.",
      stat: "3 Global Nodes"
    },
    {
      icon: ShieldCheck,
      title: "100% Audit Pass Rate",
      desc: "Proven track record delivering successful first-attempt PCI-DSS 4.0 AOC attestations and ISO 27001 certifications.",
      stat: "100% Pass Rate"
    },
    {
      icon: Clock,
      title: "Sub-15 Min SLA Guarantee",
      desc: "Round-the-clock 24/7/365 NOC/SOC monitoring desks with guaranteed emergency incident response escalation.",
      stat: "< 15 Min SLA"
    },
    {
      icon: Award,
      title: "End-to-End Enterprise Capability",
      desc: "Full spectrum coverage from executive C-level technology advisory to full-stack code delivery and cloud operations.",
      stat: "350+ Projects"
    }
  ];

  // 09 — Our Journey Timeline
  const journeyTimeline = [
    { 
      year: "2012", 
      title: "Incorporated in Singapore", 
      desc: "Established Inspac Solutions Pte Ltd (UEN: 20122407R) in Singapore as a premier technology advisory and IT consulting firm.", 
      location: "Singapore HQ",
      achievement: "UEN: 20122407R",
      icon: Building2
    },
    { 
      year: "2015", 
      title: "Offshore R&D Engineering Hub", 
      desc: "Expanded software engineering capabilities with dedicated development desks in Chennai & Bangalore for full-stack delivery.", 
      location: "India R&D Hub",
      achievement: "50+ Engineers",
      icon: Code2
    },
    { 
      year: "2018", 
      title: "Cybersecurity & GRC Practice", 
      desc: "Launched specialized PCI-DSS compliance, QSA audit liaison, and ISO 27001 security governance frameworks across APAC.", 
      location: "APAC Security",
      achievement: "100% Audit Pass",
      icon: ShieldCheck
    },
    { 
      year: "2021", 
      title: "Australia Operations Hub", 
      desc: "Opened regional client service desk at Level 14, 385 Bourke Street, Melbourne VIC to expand enterprise ERP and analytics.", 
      location: "Australia Ops",
      achievement: "Regional Client Desk",
      icon: Globe2
    },
    { 
      year: "2024+", 
      title: "Enterprise AI & Lakehouse Era", 
      desc: "Pioneering Governed Data Lakehouses (Snowflake/BigQuery), DevSecOps CloudSMART pipelines, and Generative AI RAG solutions.", 
      location: "Global Scale",
      achievement: "AI & Cloud Leader",
      icon: Sparkles
    }
  ];

  // 10 — Leadership / Team
  const leadershipTeam = [
    {
      name: "Executive Leadership Board",
      role: "Corporate Governance & Regional Strategy",
      credentials: "Singapore Corporate Office",
      desc: "Steering company vision, cross-border expansion in Singapore, India & Australia, and tier-1 enterprise partnerships.",
      badge: "Board Governance"
    },
    {
      name: "Principal GRC & QSA Advisory Lead",
      role: "Cybersecurity & PCI-DSS Practice Lead",
      credentials: "PCI-DSS v4.0 Lead Auditor",
      desc: "Guiding financial institutions and merchant gateways to 100% first-attempt PCI-DSS 4.0 Attestation of Compliance.",
      badge: "PCI QSA Expert"
    },
    {
      name: "Head of Cloud & DevSecOps",
      role: "Multi-Cloud Architecture & Engineering",
      credentials: "AWS / Azure Solutions Architect",
      desc: "Overseeing zero-trust landing zones, Kubernetes orchestration, and automated CI/CD security pipelines.",
      badge: "Cloud Architect"
    },
    {
      name: "Director of APAC Operations",
      role: "Client Success & Managed Services Desk",
      credentials: "ITIL v4 Master Practitioner",
      desc: "Managing round-the-clock L1-L3 NOC/SOC operations with strict sub-15 minute SLA incident response guarantees.",
      badge: "Managed Desk Lead"
    }
  ];

  // 11 — Values
  const coreValues = [
    { title: "Uncompromising Integrity", desc: "Zero tolerance for security vulnerabilities. We uphold strict regulatory compliance across all engineering touchpoints.", icon: ShieldCheck, tag: "Governance" },
    { title: "Engineering Rigor", desc: "Mastery of modern software patterns, microservices architecture, and automated test-driven development.", icon: Award, tag: "Excellence" },
    { title: "Client Partnership", desc: "Measuring our performance through long-term business growth, uptime reliability, and transparent SLA commitments.", icon: Users, tag: "Trust" },
    { title: "Global Agility", desc: "Seamless cross-border synergy uniting Singapore governance, India R&D velocity, and Australia operational desks.", icon: Globe2, tag: "Global" }
  ];

  // 12 — Certifications & Partnerships
  const certs = [
    { name: "PCI-DSS v4.0 Compliance", detail: "Attestation of Compliance (AOC) & Scope Isolation", badge: "Audit Ready", icon: ShieldCheck },
    { name: "ISO/IEC 27001 Alignment", detail: "Information Security Governance Framework", badge: "Certified", icon: FileCheck },
    { name: "Multi-Cloud DevSecOps", detail: "AWS, Azure & GCP Automated Zero-Trust Architecture", badge: "Cloud Native", icon: Server },
    { name: "24/7 Global NOC/SOC", detail: "Sub-15 Minute Critical SLA Emergency Desk", badge: "Managed Desks", icon: Clock }
  ];

  // 14 — Impact Numbers
  const impactNumbers = [
    { value: "350+", label: "Enterprise Projects Completed", desc: "Delivered across APAC & ANZ" },
    { value: "100%", label: "PCI-DSS Audit Pass Rate", desc: "Zero penalty liabilities recorded" },
    { value: "< 15m", label: "Critical Incident Response SLA", desc: "Financially backed guarantees" },
    { value: "3", label: "Global Corporate Nodes", desc: "Singapore, India, & Australia" }
  ];

  return (
    <div className="space-y-24 pb-28 font-sans text-slate-800 bg-white selection:bg-blue-600 selection:text-white">
      
      {/* ========================================================================= */}
      {/* 01 — HERO (UNTOUCHED - STRICTLY PRESERVED AS REQUIRED) */}
      {/* ========================================================================= */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-blue-50/20">
        
        {/* Architectural Grid Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.07] pointer-events-none mix-blend-multiply filter contrast-125"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')`
          }}
        />

        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-7 text-left">
              
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#071026] leading-[1.15]">
                Innovating Technology. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600">
                  Elevating Enterprise Excellence.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Inspac Solutions Pte Ltd is a premier technology advisory and enterprise software engineering firm headquartered in Singapore, driving digital transformation, cloud modernization, and PCI-DSS compliance governance across the Asia-Pacific region.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-600 pt-1">
                <span className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 shadow-xs font-medium flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Incorporated in Singapore (2012)</span>
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 font-bold shadow-xs">
                  UEN: {companyInfo.uen}
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 shadow-xs font-medium">
                  Global Offices: SG | IN | AU
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs shadow-xl shadow-blue-700/25 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Connect With Executive Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs border border-slate-200/90 shadow-sm transition-all"
                >
                  <span>Explore Service Offerings</span>
                </Link>
              </div>

            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-indigo-600/20 blur-xl -z-10 animate-pulse" />

                <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                    alt="Inspac Solutions Executive Team & Corporate Headquarters" 
                    className="w-full h-[380px] sm:h-[440px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071026]/90 via-transparent to-transparent" />

                  <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-md flex items-center space-x-2 text-[11px] font-bold text-[#071026]">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>PCI-DSS v4.0 AOC Audit Ready</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-bold text-[#071026]">
                      <span className="flex items-center space-x-1.5">
                        <Building2 className="w-4 h-4 text-blue-700" />
                        <span>Global HQ — Singapore</span>
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        UEN: {companyInfo.uen}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 line-clamp-1 font-medium">
                      Harmonizing Operations in Singapore, India, and Australia
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 — WHO WE ARE (Harmonized with Home Page AboutSection Styling) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              
              {/* Home Page Subtitle with Horizontal Line */}
              <div className="flex items-center space-x-3">
                <span className="text-xs font-extrabold tracking-[0.2em] text-slate-400 uppercase">
                  WHO WE ARE
                </span>
                <span className="w-12 h-[1px] bg-slate-300" />
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#071026] tracking-tight leading-tight">
                Architecting Smart Solutions for the <span className="text-[#1d4ed8]">Modern Enterprise</span>
              </h2>

              {/* Regional Scope Line */}
              <div className="text-[10px] sm:text-xs font-extrabold tracking-[0.22em] text-slate-400 uppercase pt-0.5">
                SINGAPORE HQ &nbsp;|&nbsp; INDIA R&D &nbsp;|&nbsp; AUSTRALIA OPS &nbsp;|&nbsp; GLOBAL ADVISORY
              </div>

              {/* Paragraphs */}
              <div className="space-y-3.5 text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal pt-2">
                <p>
                  Incorporated in 2012 in Singapore, Inspac Solutions Pte Ltd has evolved into a premier regional technology powerhouse. We combine high-caliber software engineering, deep domain knowledge, and pragmatic business consulting to solve complex operational challenges.
                </p>
                <p>
                  Our multi-disciplinary engineering desks operate seamlessly across Singapore, India, and Australia — enabling us to provide round-the-clock technical capabilities, strict PCI-DSS v4.0 & GRC compliance frameworks, and high-performance cloud architectures tailored to stringent regulatory environments.
                </p>
              </div>
            </div>

            {/* 4 Home Page Feature Pillars Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 pt-2">
              {aboutFeatures.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-start space-y-2 group">
                    <div className="w-12 h-12 rounded-full bg-[#dbeafe] text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0 shadow-xs">
                      <IconComponent className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs sm:text-sm font-bold text-[#071026] leading-snug group-hover:text-[#1d4ed8] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-snug">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Home Page Quote Bar */}
            <div className="border-l-[3.5px] border-[#1d4ed8] pl-5 py-2 my-2 bg-blue-50/40 rounded-r-xl">
              <p className="text-sm sm:text-base font-bold text-slate-700 italic leading-snug">
                “ Technology is our tool, <br className="hidden sm:inline" />
                <span className="text-[#1d4ed8] font-bold not-italic">
                  but people, integrity, and client trust are our absolute purpose. ”
                </span>
              </p>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1.5">
                — Executive Board, Inspac Solutions Pte Ltd
              </div>
            </div>
          </div>

          {/* Right Column: Home Page Dark Navy Stats Card & Global Footprint Switcher */}
          <div className="lg:col-span-5 bg-[#071026] text-white p-7 sm:p-8 rounded-3xl border border-slate-800/80 shadow-2xl space-y-6 flex flex-col justify-between relative overflow-hidden">
            
            {/* Subtle Ambient Backlight Glow */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-5 relative z-10">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  Global Footprint
                </h3>
                <Globe2 className="w-5 h-5 text-cyan-400" />
              </div>

              {/* Location Tabs */}
              <div className="grid grid-cols-3 gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800 text-xs font-bold">
                <button
                  onClick={() => setActiveLocationTab('singapore')}
                  className={`py-2 rounded-lg transition-all ${
                    activeLocationTab === 'singapore' 
                      ? 'bg-[#1d4ed8] text-white shadow-md' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Singapore HQ
                </button>
                <button
                  onClick={() => setActiveLocationTab('india')}
                  className={`py-2 rounded-lg transition-all ${
                    activeLocationTab === 'india' 
                      ? 'bg-[#1d4ed8] text-white shadow-md' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  India R&D
                </button>
                <button
                  onClick={() => setActiveLocationTab('australia')}
                  className={`py-2 rounded-lg transition-all ${
                    activeLocationTab === 'australia' 
                      ? 'bg-[#1d4ed8] text-white shadow-md' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Australia Ops
                </button>
              </div>

              {/* Location Details Display */}
              {activeLocationTab === 'singapore' && (
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 animate-fadeIn">
                  <div className="flex items-center justify-between text-xs font-bold text-cyan-400">
                    <span className="flex items-center space-x-2">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      <span>Global Headquarters</span>
                    </span>
                    <span className="px-2 py-0.5 rounded bg-blue-950 text-cyan-300 text-[10px] font-mono border border-blue-800">
                      UEN: {companyInfo.uen}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Corporate governance, executive advisory, PCI-DSS compliance auditing, and regional client management.
                  </p>
                  <div className="text-[11px] font-mono text-slate-400 flex items-center space-x-1 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Peninsula Plaza, Singapore 179098</span>
                  </div>
                </div>
              )}

              {activeLocationTab === 'india' && (
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 animate-fadeIn">
                  <div className="flex items-center justify-between text-xs font-bold text-indigo-400">
                    <span className="flex items-center space-x-2">
                      <Code2 className="w-4 h-4 text-indigo-400" />
                      <span>Offshore Engineering Hub</span>
                    </span>
                    <span className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 text-[10px] font-mono border border-indigo-800">
                      50+ Developers
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Full-stack software engineering, cloud microservices development, AI data pipeline engineering, and 24/7 test automation.
                  </p>
                  <div className="text-[11px] font-mono text-slate-400 flex items-center space-x-1 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>Chennai & Bangalore Tech Centers</span>
                  </div>
                </div>
              )}

              {activeLocationTab === 'australia' && (
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 animate-fadeIn">
                  <div className="flex items-center justify-between text-xs font-bold text-amber-400">
                    <span className="flex items-center space-x-2">
                      <Globe2 className="w-4 h-4 text-amber-400" />
                      <span>ANZ Operations Office</span>
                    </span>
                    <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 text-[10px] font-mono border border-amber-800">
                      Melbourne VIC
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Regional client engagement desk, enterprise ERP consulting, and Oceania business development.
                  </p>
                  <div className="text-[11px] font-mono text-slate-400 flex items-center space-x-1 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Level 14, 385 Bourke Street, Melbourne</span>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-3 text-center border-t border-slate-800 relative z-10">
              <button
                onClick={() => onOpenContact('Global Office Inquiry')}
                className="text-xs font-bold text-cyan-400 hover:text-white flex items-center justify-center space-x-1 mx-auto transition-colors"
              >
                <span>Contact Global Locations</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* PURPOSE & STRATEGIC DIRECTION (Harmonized Stage Container) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-10 relative overflow-hidden">
          
          {/* Header Bar */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-slate-100 pb-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-extrabold tracking-[0.2em] text-slate-400 uppercase">
                  PURPOSE & STRATEGIC DIRECTION
                </span>
                <span className="w-12 h-[1px] bg-slate-300" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071026] tracking-tight">
                Architecting Purpose into <span className="text-[#1d4ed8]">Every Solution</span>
              </h2>
            </div>

            {/* Tab Controls */}
            <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-full border border-slate-200">
              <button
                onClick={() => setActivePurposeTab('mission')}
                className={`px-5 py-2 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                  activePurposeTab === 'mission'
                    ? 'bg-[#1d4ed8] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                OUR MISSION
              </button>

              <button
                onClick={() => setActivePurposeTab('vision')}
                className={`px-5 py-2 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                  activePurposeTab === 'vision'
                    ? 'bg-[#1d4ed8] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                OUR VISION
              </button>

              <button
                onClick={() => setActivePurposeTab('philosophy')}
                className={`px-5 py-2 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                  activePurposeTab === 'philosophy'
                    ? 'bg-[#1d4ed8] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                CORE PHILOSOPHY
              </button>
            </div>
          </div>

          {/* Stage Content */}
          {activePurposeTab === 'mission' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl font-extrabold text-[#071026]">
                  Empowering Global Enterprises Through Resilient Digital Engineering
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our mission is to deliver world-class digital engineering, multi-cloud DevSecOps, and QSA-accredited PCI-DSS cybersecurity frameworks that empower global enterprises to innovate safely, eliminate operational friction, and achieve high-ROI transformations.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <div className="text-xs font-bold text-[#071026] flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Sub-15m SLA Guarantee</span>
                    </div>
                    <p className="text-xs text-slate-500">24/7 response desk</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <div className="text-xs font-bold text-[#071026] flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>100% Audit Pass Rate</span>
                    </div>
                    <p className="text-xs text-slate-500">PCI-DSS 4.0 readiness</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="p-7 rounded-3xl bg-[#071026] text-white space-y-4 shadow-xl border border-slate-800">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Mission Standards</span>
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Singapore HQ (UEN)</span>
                      <span className="font-mono text-cyan-300 font-bold">{companyInfo.uen}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Emergency SLA Guarantee</span>
                      <span className="font-mono text-emerald-400 font-bold">&lt; 15 Minutes</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">PCI-DSS Status</span>
                      <span className="font-mono text-cyan-300 font-bold">v4.0 AOC Qualified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activePurposeTab === 'vision' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl font-extrabold text-[#071026]">
                  Becoming APAC's Most Trusted Digital Transformation Partner
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our vision is to be the benchmark for technology excellence across Asia-Pacific and ANZ — recognized globally for seamless cross-border synergy, unyielding compliance integrity, and pioneering AI data lakehouse solutions that shape the future of enterprise software.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <div className="text-xs font-bold text-[#071026] flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      <span>3 Global Nodes</span>
                    </div>
                    <p className="text-xs text-slate-500">Singapore • India • Australia</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <div className="text-xs font-bold text-[#071026] flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      <span>Governed AI & Data</span>
                    </div>
                    <p className="text-xs text-slate-500">Snowflake & BigQuery</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="p-7 rounded-3xl bg-[#071026] text-white space-y-4 shadow-xl border border-slate-800">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Global Nodes</span>
                    <Globe2 className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Singapore HQ</span>
                      <span className="font-mono text-cyan-300 font-bold">Peninsula Plaza</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">India R&D</span>
                      <span className="font-mono text-indigo-300 font-bold">50+ Engineers</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Australia Ops</span>
                      <span className="font-mono text-amber-300 font-bold">Melbourne VIC</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activePurposeTab === 'philosophy' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl font-extrabold text-[#071026]">
                  Uncompromising Technical Rigor & Transparent Client Trust
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We believe true enterprise technology requires combining deep architectural discipline with speed. Zero tolerance for security vulnerabilities, transparent SLA commitments, and long-term client partnership define every line of code we write.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <div className="text-xs font-bold text-[#071026] flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                      <span>Zero Security Compromise</span>
                    </div>
                    <p className="text-xs text-slate-500">ISO 27001 & OWASP SAST/DAST</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <div className="text-xs font-bold text-[#071026] flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                      <span>Co-Managed IT</span>
                    </div>
                    <p className="text-xs text-slate-500">Seamless team integration</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="p-7 rounded-3xl bg-[#071026] text-white space-y-4 shadow-xl border border-slate-800">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">Engineering QA</span>
                    <Sparkles className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Code Quality</span>
                      <span className="font-mono text-indigo-300 font-bold">Automated Test-Driven</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Infrastructure</span>
                      <span className="font-mono text-cyan-300 font-bold">Terraform IaC</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Client CSAT</span>
                      <span className="font-mono text-cyan-300 font-bold">98.5% Satisfaction</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 06 — OUR APPROACH (Harmonized with Home Page Card & Badge Standards) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-3">
            <span className="text-xs font-extrabold tracking-[0.2em] text-slate-400 uppercase">
              OUR METHODOLOGY
            </span>
            <span className="w-12 h-[1px] bg-slate-300" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071026] tracking-tight">
            Proven 4-Phase Delivery Framework
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            Our structured methodology combines rigorous enterprise strategy with agile engineering execution to guarantee predictable outcomes and sub-15m SLA response times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approachSteps.map((step, idx) => {
            const IconComponent = step.icon;
            const isActive = activePhase === idx;
            return (
              <div 
                key={step.num}
                onClick={() => setActivePhase(idx)}
                className={`p-7 rounded-[26px] border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 ${
                  isActive 
                    ? 'bg-gradient-to-br from-[#071026] via-[#091338] to-[#071026] text-white border-blue-500/50 shadow-2xl transform -translate-y-1' 
                    : 'bg-white text-slate-800 border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-blue-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-2xl font-black font-mono ${isActive ? 'text-cyan-400' : 'text-[#1d4ed8]'}`}>
                      {step.num}
                    </span>
                    <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full ${
                      isActive ? 'bg-blue-600/30 text-cyan-300 border border-blue-500/40' : 'bg-blue-50 text-[#1d4ed8] border border-blue-200/60'
                    }`}>
                      {step.stepTag}
                    </span>
                  </div>

                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isActive ? 'bg-blue-600/20 text-cyan-400 border border-blue-500/30' : 'bg-[#dbeafe] text-[#1d4ed8]'
                  }`}>
                    <IconComponent className="w-5 h-5 stroke-[2]" />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className={`text-base font-extrabold ${isActive ? 'text-white' : 'text-[#071026]'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-xs ${isActive ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/40 space-y-1.5">
                  {step.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-center space-x-1.5 text-[11px]">
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-emerald-400' : 'text-emerald-600'}`} />
                      <span className={isActive ? 'text-slate-200' : 'text-slate-600'}>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 07 — WHY CHOOSE US (Harmonized with Home Page Feature Grid) */}
      {/* ========================================================================= */}
      <section className="py-16 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <span className="text-xs font-extrabold tracking-[0.2em] text-slate-400 uppercase">
                ENTERPRISE EXCELLENCE
              </span>
              <span className="w-12 h-[1px] bg-slate-300" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071026] tracking-tight">
              Why Leading APAC Enterprises Partner with Inspac
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Trusted by financial institutions, logistics providers, and regional enterprise leaders across Singapore, India, and Australia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-7 rounded-[26px] bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 space-y-5 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#dbeafe] text-[#1d4ed8] flex items-center justify-center group-hover:bg-[#1d4ed8] group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-5 h-5 stroke-[2]" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-extrabold text-[#071026] group-hover:text-[#1d4ed8] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                    <span className="text-[#1d4ed8] font-mono px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60">{item.stat}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1d4ed8] group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 09 — OUR JOURNEY (Harmonized with Home Page Dark Section Styling) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-gradient-to-b from-[#00384f] via-[#004e6e] to-[#00587c] text-[#e2e8f0] border-y border-slate-800 shadow-2xl relative overflow-hidden">
        
        {/* Glowing Ambient Backdrop Lights */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <span className="text-xs font-extrabold tracking-[0.2em] text-slate-400 uppercase">
                OUR MILESTONES
              </span>
              <span className="w-12 h-[1px] bg-slate-700" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              A Decade of Enterprise Growth & Innovation
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Tracing our expansion from a Singapore technology advisory into a multi-node APAC software and compliance engineering powerhouse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {journeyTimeline.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-[26px] bg-slate-900/80 border border-cyan-500/20 shadow-lg shadow-cyan-950/40 hover:border-cyan-400/50 hover:-translate-y-1 transition-all duration-300 space-y-4 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-400">
                        {item.year}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-blue-500/15 text-cyan-300 border border-cyan-500/30 flex items-center justify-center">
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">{item.location}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-950 text-cyan-300 border border-blue-800 font-mono font-bold">
                      {item.achievement}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10 — LEADERSHIP / TEAM (Harmonized Corporate Profile Cards) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-3">
            <span className="text-xs font-extrabold tracking-[0.2em] text-slate-400 uppercase">
              EXECUTIVE ADVISORY
            </span>
            <span className="w-12 h-[1px] bg-slate-300" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071026] tracking-tight">
            Guided by Senior Industry Leaders
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            Our executive board and domain leads combine decades of tier-1 IT consulting, QSA cybersecurity auditing, and enterprise cloud architecture experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipTeam.map((member, idx) => (
            <div 
              key={idx}
              className="p-7 rounded-[26px] bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 space-y-4 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#1d4ed8] text-[10px] font-extrabold uppercase border border-blue-200/60">
                    {member.badge}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#dbeafe] text-[#1d4ed8] flex items-center justify-center">
                    <UserCheck className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-[#071026] group-hover:text-[#1d4ed8] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-[#1d4ed8] mt-0.5">
                    {member.role}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {member.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500 font-bold">
                {member.credentials}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11 — VALUES (Harmonized with Home Page Feature Grid) */}
      {/* ========================================================================= */}
      <section className="py-16 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <span className="text-xs font-extrabold tracking-[0.2em] text-slate-400 uppercase">
                GOVERNANCE & CULTURE
              </span>
              <span className="w-12 h-[1px] bg-slate-300" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071026] tracking-tight">
              Principles That Define Our Culture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, idx) => {
              const IconComponent = v.icon;
              return (
                <div 
                  key={idx} 
                  className="p-7 rounded-[26px] bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 space-y-4 cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-full bg-[#dbeafe] text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white transition-all duration-300 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-blue-50 text-[#1d4ed8] border border-blue-200/60">
                      {v.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold text-[#071026] group-hover:text-[#1d4ed8] transition-colors">{v.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12 — ACCREDITATIONS (Harmonized Cards) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-3">
            <span className="text-xs font-extrabold tracking-[0.2em] text-slate-400 uppercase">
              ACCREDITATIONS
            </span>
            <span className="w-12 h-[1px] bg-slate-300" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071026] tracking-tight">
            Accredited Quality & Security Standards
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((c, idx) => {
            const IconComponent = c.icon;
            return (
              <div 
                key={idx} 
                className="p-6 rounded-[26px] bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 space-y-3 flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                      {c.badge}
                    </span>
                  </div>
                  <h3 className="text-sm font-extrabold text-[#071026] group-hover:text-[#1d4ed8] transition-colors">{c.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{c.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 14 — IMPACT NUMBERS (Harmonized Dark Stats Bar) */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-r from-[#000830] via-[#001254] to-[#000830] text-white py-16 border-y border-blue-500/40 shadow-2xl relative overflow-hidden">
        
        {/* Ambient Backlight Glow */}
        <div className="absolute inset-0 bg-blue-500/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {impactNumbers.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-4xl sm:text-5xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-400">{stat.value}</div>
                <div className="text-sm font-bold text-white">{stat.label}</div>
                <div className="text-xs text-slate-400">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 15 — FINAL CTA (Harmonized Executive Conversion Box) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-[#000830] via-[#001254] to-[#000830] border border-blue-500/40 text-center space-y-8 shadow-2xl relative overflow-hidden text-white">
          
          {/* Ambient Glow */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 max-w-3xl mx-auto relative z-10">
            <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Singapore Global Headquarters • UEN: {companyInfo.uen}</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Ready to Partner with Inspac Solutions?
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Schedule an executive consultation with our Singapore governance team to explore custom cloud engineering, enterprise data lakehouses, or PCI-DSS 4.0 audit preparation.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => onOpenContact('Executive Strategy Call')}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-bold text-xs shadow-xl shadow-emerald-500/25 hover:scale-105 transition-all flex items-center space-x-2 cursor-pointer"
            >
              <span>Schedule Executive Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/buyers-guide"
              className="px-7 py-4 rounded-full bg-white hover:bg-slate-100 text-[#071026] font-bold text-xs transition-all flex items-center space-x-2 shadow-md hover:scale-105 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#1d4ed8]" />
              <span>Read 2026 Enterprise Buyer's Guide</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

