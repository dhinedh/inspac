import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  User, 
  ChevronRight, 
  CheckCircle2, 
  HelpCircle, 
  Download, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Layers, 
  FileText, 
  Sparkles,
  BarChart3,
  Server,
  Lock,
  ChevronDown,
  Building2,
  PhoneCall
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BuyersGuidePage({ onOpenContact }) {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const tocItems = [
    { id: 'overview', label: '1. Executive Summary & 2026 Landscape' },
    { id: 'coverage', label: '2. What Enterprise Managed IT Covers' },
    { id: 'slas-v-xlas', label: '3. SLAs vs XLAs: The 2026 Shift' },
    { id: 'pricing-models', label: '4. Pricing Models & Cost Structures' },
    { id: 'evaluation-checklist', label: '5. 8 Questions to Separate Top Providers' },
    { id: 'rfp-roadmap', label: '6. Transition & RFP Execution Checklist' },
  ];

  const evaluationQuestions = [
    {
      id: 'q1',
      title: '1. How do you guarantee sub-15 minute critical incident response times?',
      answer: 'Top-tier MSPs back their response claims with financially-backed SLAs and multi-region 24/7/365 NOC/SOC coverage. Avoid providers that offer "best-effort" automated ticketing without human escalation guarantees within 15 minutes for P1 outages.',
      redFlag: 'No financial remedies or penalty credits attached to missed SLA targets.'
    },
    {
      id: 'q2',
      title: '2. Are your operational processes QSA-accredited for PCI-DSS 4.0 and ISO 27001?',
      answer: 'With stricter compliance enforcement in 2026, enterprise IT partners must demonstrate native compliance across zero-trust access control, continuous audit logging, and regular penetration testing.',
      redFlag: 'Outsourced third-party security audits without direct QSA certifications.'
    },
    {
      id: 'q3',
      title: '3. How does your model measure Experience Level Agreements (XLAs)?',
      answer: 'While traditional SLAs measure server uptime (e.g., 99.99%), XLAs evaluate actual business outcome & end-user experience—such as application latency, employee ticket resolution sentiment, and workflow productivity.',
      redFlag: 'Measuring success purely on ping status while end-users suffer slow app performance.'
    },
    {
      id: 'q4',
      title: '4. What is your co-managed IT framework for existing in-house teams?',
      answer: 'A high-value enterprise provider seamlessly integrates with your existing IT staff using shared ITSM tools (ServiceNow/Jira), taking over Level 1-2 routine monitoring while empowering your team to focus on core strategic projects.',
      redFlag: 'Rigid "all-or-nothing" contracts that require replacing internal IT leadership.'
    },
    {
      id: 'q5',
      title: '5. How do you manage multi-cloud governance (AWS, Azure, GCP)?',
      answer: 'Enterprise workloads span hybrid and multi-cloud environments. Your provider must supply automated IaC templates (Terraform), FinOps cost optimization dashboards, and centralized posture management.',
      redFlag: 'Single-cloud lock-in or manual infrastructure provisioning without IaC.'
    },
    {
      id: 'q6',
      title: '6. How is generative AI and automation integrated into your service desk?',
      answer: 'In 2026, leading MSPs leverage AI-driven diagnostic bots and automated self-healing scripts to resolve over 40% of routine password resets and system alerts before human intervention is required.',
      redFlag: 'Purely manual ticket queues leading to long resolution times.'
    },
    {
      id: 'q7',
      title: '7. What data governance and regional sovereignty compliance do you maintain?',
      answer: 'For companies operating across APAC and ANZ, data residency is crucial. Ensure your provider operates accredited regional facilities (e.g., Singapore UEN registered entities) with strict compliance guarantees.',
      redFlag: 'Routing sensitive operational telemetry through unvetted offshore data jurisdictions.'
    },
    {
      id: 'q8',
      title: '8. What is your disaster recovery (DR) RTO and RPO commitment?',
      answer: 'Ensure the provider validates DR readiness through automated bi-annual failover drills with strict Recovery Time Objectives (RTO < 15 mins) and Recovery Point Objectives (RPO < 5 mins).',
      redFlag: 'Untested backup scripts without live failover verification reports.'
    }
  ];

  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28 sm:pt-32 lg:pt-36 pb-20">
      
      {/* Article Header & Hero Banner */}
      <section className="relative border-b border-slate-800/80 bg-gradient-to-b from-navy-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-6">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs font-medium text-slate-400">
            <Link to="/" className="hover:text-brand-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link to="/services" className="hover:text-brand-400 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-cyan-400 font-semibold">2026 Enterprise Buyer's Guide</span>
          </nav>

          {/* Category Badge & Meta Information */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              Managed IT Strategy & Evaluation
            </span>
            <span className="flex items-center text-xs text-slate-400 space-x-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>10 Min Read</span>
            </span>
            <span className="flex items-center text-xs text-slate-400 space-x-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Updated August 2026</span>
            </span>
            <span className="flex items-center text-xs text-slate-400 space-x-1">
              <User className="w-3.5 h-3.5 text-slate-400" />
              <span>INSPAC Enterprise Advisory Team</span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl">
            Managed IT Services for Enterprises: A 2026 Buyer's Guide
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            What enterprise managed IT covers, pricing structures, how SLAs differ from modern XLAs, and the eight critical questions that separate a top partner from an expensive vendor.
          </p>

          {/* Hero Feature Card Banner */}
          <div className="relative mt-8 rounded-3xl overflow-hidden border border-slate-800 bg-gradient-to-r from-navy-900 to-slate-900 p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>2026 Enterprise Edition</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Preparing for your 2026 Managed Services RFP?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Download our comprehensive enterprise evaluation matrix or request a 1-on-1 architecture assessment with our senior IT governance team in Singapore.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <button
                onClick={() => onOpenContact('2026 IT Buyer Guide Proposal Request')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-lg shadow-brand-600/30 flex items-center justify-center space-x-2 transition-all"
              >
                <span>Request Custom RFP Scope</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Layout: Sticky TOC + Article Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Sticky Left Sidebar (TOC & Quick Actions) */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 space-y-6">
              
              {/* Table of Contents Box */}
              <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
                <div className="flex items-center space-x-2 pb-3 border-b border-slate-800 text-white font-bold text-sm">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Table of Contents</span>
                </div>

                <nav className="space-y-1">
                  {tocItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-between ${
                        activeSection === item.id 
                          ? 'bg-brand-600/20 text-cyan-300 font-semibold border-l-2 border-cyan-400 pl-4' 
                          : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" />
                    </button>
                  ))}
                </nav>
              </div>

              {/* Sticky Lead Capture Card */}
              <div className="rounded-2xl border border-brand-500/30 bg-gradient-to-b from-brand-950/60 via-navy-950 to-slate-900 p-6 space-y-4 shadow-2xl relative overflow-hidden">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                    Executive Resource
                  </span>
                  <h3 className="text-base font-bold text-white">
                    Need an Independent IT Audit?
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Get an objective review of your existing cloud infrastructure, security posture, and SLA contracts from INSPAC's Singapore advisory team.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <button
                    onClick={() => onOpenContact('Managed IT Services Buyer Guide Consultation')}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-600 to-cyan-500 hover:from-brand-500 hover:to-cyan-400 text-white font-bold text-xs shadow-lg shadow-brand-600/30 flex items-center justify-center space-x-2 transition-all"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Schedule Advisory Call</span>
                  </button>

                  <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-400 pt-1">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>Singapore HQ UEN: 20122407R</span>
                  </div>
                </div>
              </div>

            </div>
          </aside>

          {/* Main Article Content (8 Cols) */}
          <main className="lg:col-span-8 space-y-16">

            {/* Section 1: Executive Overview */}
            <section id="overview" className="space-y-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center space-x-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-500/30 text-cyan-400 text-sm font-bold">1</span>
                <span>Executive Summary & 2026 Market Drivers</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                As enterprise digital ecosystems scale across hybrid cloud environments and AI-driven workloads, traditional IT outsourcing has evolved. In 2026, enterprise IT leaders no longer seek generic "ticket-takers." Instead, organizations demand **outcome-driven Managed IT partners** who guarantee sub-15 minute incident responses, financial SLA penalties, and compliance sovereignty.
              </p>

              {/* Key Takeaway Box */}
              <div className="p-6 rounded-2xl bg-cyan-950/30 border-l-4 border-cyan-400 border-t border-r border-b border-slate-800 space-y-3">
                <div className="flex items-center space-x-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Key Executive Takeaway</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  "By 2026, 75% of enterprise RFPs require Experience Level Agreements (XLAs) rather than simple server uptime metrics. Top-tier providers are evaluated on business outcomes, mean time to resolution (MTTR), and zero-trust security posture."
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Selecting the right Managed IT partner requires evaluating how effectively a provider can bridge high-availability operations (NOC/SOC) with forward-looking cloud engineering and regulatory compliance (PCI-DSS 4.0, ISO 27001).
              </p>
            </section>

            {/* Section 2: What Enterprise Managed IT Covers */}
            <section id="coverage" className="space-y-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center space-x-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-500/30 text-cyan-400 text-sm font-bold">2</span>
                <span>What Enterprise Managed IT Covers in 2026</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Modern enterprise managed services cover far more than basic desktop support. A comprehensive provider delivers a fully integrated operational stack spanning four critical pillars:
              </p>

              {/* 4 Core Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl glass-panel border border-slate-800 space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Server className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white">1. Multi-Cloud & Infrastructure</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    24/7 management of AWS, Azure, and GCP resources, Kubernetes cluster scaling, FinOps cost optimization, and automated IaC deployments.
                  </p>
                </div>

                <div className="p-5 rounded-2xl glass-panel border border-slate-800 space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white">2. Cybersecurity & 24/7 SOC</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Zero-trust threat detection, PCI-DSS 4.0 AOC maintenance, SIEM/EDR log monitoring, and continuous vulnerability management.
                  </p>
                </div>

                <div className="p-5 rounded-2xl glass-panel border border-slate-800 space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white">3. Enterprise Data & AI</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Governed data lakehouse maintenance (Snowflake, Databricks, BigQuery), ETL pipeline monitoring, and AI diagnostic bots.
                  </p>
                </div>

                <div className="p-5 rounded-2xl glass-panel border border-slate-800 space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white">4. 24/7 NOC & Service Desk</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Sub-15 minute P1 emergency escalation guarantees, L1-L3 service desk, database HA clustering, and automated DR failover testing.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: SLA vs XLA Comparison */}
            <section id="slas-v-xlas" className="space-y-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center space-x-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-500/30 text-cyan-400 text-sm font-bold">3</span>
                <span>SLAs vs XLAs: The 2026 Shift</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Traditional Service Level Agreements (SLAs) measure backend infrastructure metrics like 99.99% server availability. However, a server can be "up" while users experience severe application latency. **Experience Level Agreements (XLAs)** bridge this gap by prioritizing user experience and real business productivity.
              </p>

              {/* SLA vs XLA Table */}
              <div className="rounded-2xl border border-slate-800 overflow-hidden bg-slate-900/60 shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-navy-950 text-white font-bold border-b border-slate-800">
                        <th className="p-4">Evaluation Dimension</th>
                        <th className="p-4 text-slate-400">Traditional SLA Focus</th>
                        <th className="p-4 text-cyan-400 font-bold">2026 Modern XLA Focus</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80 text-slate-300">
                      <tr>
                        <td className="p-4 font-bold text-white">Primary Metric</td>
                        <td className="p-4">Server Uptime (e.g. 99.9%)</td>
                        <td className="p-4 font-semibold text-emerald-400">User Workflow Latency & Productivity</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-white">Incident Tracking</td>
                        <td className="p-4">Ticket Volume Closed</td>
                        <td className="p-4 font-semibold text-emerald-400">First-Contact Resolution & CSAT</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-white">Security Objective</td>
                        <td className="p-4">Annual Audit Compliance</td>
                        <td className="p-4 font-semibold text-emerald-400">Continuous PCI-DSS 4.0 & Zero Trust</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-white">Response Guarantee</td>
                        <td className="p-4">Best effort within 1-2 hours</td>
                        <td className="p-4 font-semibold text-emerald-400">Sub-15 Minute P1 Financial Credit SLA</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-white">Cloud Management</td>
                        <td className="p-4">Manual Server Provisioning</td>
                        <td className="p-4 font-semibold text-emerald-400">Automated Terraform IaC & FinOps</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 4: Pricing Models & Cost Structures */}
            <section id="pricing-models" className="space-y-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center space-x-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-500/30 text-cyan-400 text-sm font-bold">4</span>
                <span>Pricing Models & Cost Structures</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Enterprise Managed IT contracts generally follow one of three primary engagement models. Understanding these structures prevents hidden billing surprises and ensures alignment with your internal budget goals:
              </p>

              <div className="space-y-4">
                <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white">A. Co-Managed IT Services (Hybrid)</h3>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold">Most Popular</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Designed for enterprises with an existing CIO and internal IT staff. INSPAC handles round-the-clock Level 1-2 NOC/SOC monitoring and database administration, allowing your internal team to focus on high-impact strategic business applications.
                  </p>
                </div>

                <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-2">
                  <h3 className="text-base font-bold text-white">B. Fully Managed Enterprise IT</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Complete end-to-end outsourcing where the provider manages your entire IT operations, cloud infrastructure, cybersecurity governance, and helpdesk under a fixed monthly per-user or per-workload fee.
                  </p>
                </div>

                <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-2">
                  <h3 className="text-base font-bold text-white">C. Outcome-Based Project & Migration Engagements</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Fixed-bid milestones for specialized transformations—such as SAP S/4HANA migrations, PCI-DSS 4.0 audit preparation, or multi-cloud DevSecOps automation.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: 8 Questions to Separate Top Providers */}
            <section id="evaluation-checklist" className="space-y-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center space-x-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-500/30 text-cyan-400 text-sm font-bold">5</span>
                <span>8 Questions to Separate Top Providers</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Use this interactive 8-point evaluation checklist during provider interviews or RFP vetting to identify true tier-1 enterprise partners:
              </p>

              {/* Accordions */}
              <div className="space-y-3">
                {evaluationQuestions.map((q) => {
                  const isOpen = expandedFaq === q.id;
                  return (
                    <div 
                      key={q.id}
                      className="rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setExpandedFaq(isOpen ? null : q.id)}
                        className="w-full p-5 text-left flex items-center justify-between space-x-4 hover:bg-slate-900/80 transition-colors"
                      >
                        <span className="text-xs sm:text-sm font-bold text-white">{q.title}</span>
                        <ChevronDown className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isOpen && (
                        <div className="p-5 pt-0 border-t border-slate-800/60 space-y-3 bg-slate-950/40 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <p>{q.answer}</p>
                          <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 flex items-start space-x-2">
                            <span className="font-bold text-xs uppercase tracking-wider shrink-0 text-rose-400">Red Flag:</span>
                            <span className="text-xs">{q.redFlag}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 6: Transition & RFP Roadmap */}
            <section id="rfp-roadmap" className="space-y-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center space-x-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-500/30 text-cyan-400 text-sm font-bold">6</span>
                <span>Transition & RFP Execution Checklist</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Transitioning to a new enterprise IT partner requires zero downtime. A successful onboarding roadmap follows four key milestones over 30 to 60 days:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 flex items-start space-x-4">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Discovery & Architecture Audit (Week 1-2)</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Complete inventory of cloud assets, active licenses, network topologies, and security access policies.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 flex items-start space-x-4">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    02
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Parallel Shadow Monitoring & Runbooks (Week 3-4)</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      INSPAC NOC/SOC engineers shadow existing teams to build validated standard operating procedures (SOPs).
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 flex items-start space-x-4">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    03
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Cutover & Live Sub-15m SLA Activation (Week 5)</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Formal cutover of L1-L3 service desk routing, automated P1 alert escalation, and active SOC monitoring.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 flex items-start space-x-4">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    04
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Continuous XLA Optimization & Monthly Reviews (Ongoing)</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Regular executive review of user sentiment metrics, cloud cost optimizations, and PCI-DSS audit compliance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Final CTA Banner */}
              <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-brand-900 via-navy-900 to-slate-900 border border-brand-500/30 text-center space-y-6 shadow-2xl">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Ready to Evaluate Your Enterprise IT Requirements?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  Speak with an experienced INSPAC IT solution architect today to receive a customized RFP template and co-managed IT proposal tailored to your enterprise stack.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onOpenContact('Enterprise IT Buyer Guide Final CTA Proposal')}
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-600 to-cyan-500 hover:from-brand-500 hover:to-cyan-400 text-white font-bold text-xs shadow-xl shadow-brand-600/30 transition-all inline-flex items-center space-x-2"
                  >
                    <span>Request Enterprise Advisory Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </section>

          </main>

        </div>
      </div>

    </div>
  );
}
