import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Cloud, 
  BarChart3, 
  ShieldCheck, 
  Layers, 
  GitPullRequest, 
  CheckCircle2, 
  Database, 
  LayoutGrid, 
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Sparkles
} from 'lucide-react';

// Industry sectors data for mode="industries" (Inspired by HCLTech & CTS Industry Verticals)
const industriesData = [
  {
    id: 'fintech',
    title: 'Financial Services & FinTech',
    category: 'FINANCE & FINTECH',
    subtitle: 'Core Banking · PCI-DSS 4.0 · High Availability',
    description: 'End-to-end PCI-DSS v4.0 Attestation of Compliance (AOC), Cardholder Data Environment isolation, and high-availability payment settlement pipelines.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=900&q=80',
    link: '/clients'
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Life Sciences',
    category: 'HEALTH & LIFE SCIENCES',
    subtitle: 'PDPA / HIPAA · Encrypted Clinical Data Vaults',
    description: 'Strictly compliant clinical data architectures, encrypted electronic patient record (EHR) databases, and high-throughput predictive diagnostics.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
    link: '/clients'
  },
  {
    id: 'ecommerce',
    title: 'Retail & Enterprise E-Commerce',
    category: 'COMMERCE & RETAIL',
    subtitle: 'Omnichannel ERP · Flash-Sale Auto-Scaling',
    description: 'High-scale cloud infrastructures auto-scaling for peak flash-sale volumes, bi-directional ERP inventory sync, and real-time customer analytics.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',
    link: '/clients'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Smart Supply Chain',
    category: 'MANUFACTURING & LOGISTICS',
    subtitle: 'RPA Automation · Telemetry & SAP ERP',
    description: 'Process re-engineering and RPA for automated customs dispatch, multi-carrier invoice settlement, and real-time fleet telemetry pipelines.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
    link: '/clients'
  },
  {
    id: 'public-sector',
    title: 'Government & Public Sector',
    category: 'GOVERNMENT & PUBLIC',
    subtitle: 'ISO 27001 · ITGC Controls · Sovereignty',
    description: 'Rigorous IT General Controls (ITGC) auditing, regional data sovereignty cloud residency, and ISO 27001 / NIST framework compliance for public agencies.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    link: '/clients'
  },
  {
    id: 'telecom',
    title: 'Telecommunications & High-Tech',
    category: 'TELECOM & HIGH-TECH',
    subtitle: '5G Infrastructure · Real-Time Edge Microservices',
    description: 'Carrier-grade network infrastructure, real-time message queuing, microservices orchestration, and edge computing deployments.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
    link: '/clients'
  }
];

// 7 Flagship Enterprise Services (Modeled after HCLTech & Cognizant/CTS Enterprise Practices)
const servicesCards = [
  {
    num: '01',
    id: 'digital-engineering',
    title: 'Digital Engineering & App Modernization',
    category: 'Digital Engineering',
    icon: Code2,
    badgeBg: 'bg-blue-50 text-[#0052cc]',
    desc: 'Build resilient cloud-native web and mobile platforms with modern distributed microservices architectures.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
    details: 'Full-stack engineering, legacy monolith decoupling, high-speed frontend design systems (React, Next.js), and high-throughput RESTful/GraphQL microservices built for enterprise scale.',
    features: [
      'Cloud-Native Web & Mobile Architecture',
      'Monolith Decoupling & Microservices Migration',
      'High-Throughput REST & GraphQL API Gateways',
      'Event-Driven Distributed Messaging Brokers'
    ],
    benefits: '70% faster time-to-market, sub-second API latency, and frictionless horizontal scalability.'
  },
  {
    num: '02',
    id: 'cloud-devsecops',
    title: 'Cloud Transformation & DevSecOps',
    category: 'Cloud & Infrastructure',
    icon: Cloud,
    badgeBg: 'bg-indigo-50 text-indigo-600',
    desc: 'Automate multi-cloud infrastructure with Terraform, Kubernetes, and automated zero-trust DevSecOps.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
    details: 'Modeled after HCL CloudSMART and CTS Cloud 360, we implement secure multi-cloud landing zones (AWS, Azure, GCP), automated CI/CD pipelines, and cloud FinOps cost governance.',
    features: [
      'Multi-Cloud Strategy & Landing Zones (AWS/Azure/GCP)',
      'Terraform Infrastructure as Code (IaC)',
      'Enterprise Kubernetes (EKS/GKE) & Service Mesh',
      'Automated DevSecOps Pipelines & FinOps Governance'
    ],
    benefits: '10x deployment velocity, 99.99% infrastructure uptime, and up to 35% reduction in cloud operational spend.'
  },
  {
    num: '03',
    id: 'ai-data-lakehouse',
    title: 'Enterprise AI & Data Lakehouse',
    category: 'AI & Data Science',
    icon: BarChart3,
    badgeBg: 'bg-purple-50 text-purple-600',
    desc: 'Turn enterprise data into competitive intelligence with modern data lakehouses and Generative AI.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    details: 'Unified modern data lakehouses (Snowflake, Databricks, BigQuery), real-time streaming pipelines, and enterprise Generative AI agents for automated decision intelligence.',
    features: [
      'Governed Data Lakehouses (Snowflake, Databricks, BigQuery)',
      'Real-Time Streaming Pipelines (dbt, Spark, Airflow)',
      'Generative AI, Enterprise RAG & LLM Integration',
      'Executive BI Scorecards & Predictive Analytics'
    ],
    benefits: 'Unified single source of enterprise truth, real-time KPI visibility, and automated executive decision support.'
  },
  {
    num: '04',
    id: 'cybersecurity-grc',
    title: 'Cybersecurity, GRC & PCI-DSS 4.0',
    category: 'Security & Governance',
    icon: ShieldCheck,
    badgeBg: 'bg-emerald-50 text-emerald-600',
    desc: 'Safeguard sensitive assets, achieve PCI-DSS 4.0 attestation, and pass ISO 27001 / NIST audits.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
    details: 'Rigorous cybersecurity and compliance advisory comparable to HCL Cybersecurity and global QSA assessors. We isolate Cardholder Data Environments, automate vulnerability scanning, and secure AOC pass rates.',
    features: [
      'PCI-DSS v4.0 Gap Assessment & Scope Reduction',
      'Cardholder Data Environment (CDE) Isolation',
      'ISO 27001, NIST CSF & Data Privacy (PDPA/GDPR)',
      'ITGC Controls Testing & QSA Audit Liaison'
    ],
    benefits: '100% audit pass rate, zero non-compliance penalties, and fortified defense against data breaches.'
  },
  {
    num: '05',
    id: 'enterprise-erp',
    title: 'Enterprise Platform Services & ERP',
    category: 'Enterprise Applications',
    icon: Layers,
    badgeBg: 'bg-amber-50 text-amber-600',
    desc: 'Unify finance, supply chain, and operations with modern SAP S/4HANA and Oracle Cloud ERP.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    details: 'Enterprise platform consulting inspired by Cognizant Enterprise Application Services. We implement, modernize, and integrate SAP, Oracle, and custom ERP systems with real-time financial ledger sync.',
    features: [
      'SAP S/4HANA & Oracle Cloud ERP Implementation',
      'Cross-Module Financial & Supply Chain Automation',
      'Automated Procurement, Inventory & Order Tracking',
      'Legacy ERP Decoupling & RESTful Middleware Connectors'
    ],
    benefits: 'Eliminates departmental silos, reduces administrative overhead by 40%, and accelerates book closing.'
  },
  {
    num: '06',
    id: 'process-automation',
    title: 'Intelligent Automation & RPA',
    category: 'Operations & Automation',
    icon: GitPullRequest,
    badgeBg: 'bg-rose-50 text-rose-600',
    desc: 'Eliminate repetitive manual tasks and boost velocity with cognitive bots and intelligent workflows.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    details: 'Emulate HCL Digital Operations and Cognizant Automation: Robotic Process Automation (UiPath, Power Automate), intelligent document processing (IDP), and Lean Six Sigma re-engineering.',
    features: [
      'Robotic Process Automation (UiPath / Power Automate)',
      'Intelligent Document Processing (IDP) & Cognitive OCR',
      'End-to-End Business Process Re-engineering (BPR)',
      'Operational Bottleneck Analytics & Real-Time KPIs'
    ],
    benefits: '80% manual error reduction, 5x cycle acceleration, and enhanced workforce productivity.'
  },
  {
    num: '07',
    id: 'quality-engineering',
    title: 'Quality Engineering & Assurance',
    category: 'Quality Engineering',
    icon: CheckCircle2,
    badgeBg: 'bg-teal-50 text-teal-600',
    desc: 'Guarantee mission-critical software reliability with automated testing and chaos resilience engineering.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    details: 'Emulating CTS Quality Engineering: continuous test automation across the SDLC, high-scale API load simulations (k6, JMeter), cross-device matrices, and chaos engineering.',
    features: [
      'Continuous Test Automation (Playwright, Cypress)',
      'API Performance & High-Scale Load Stress Testing',
      'Automated OWASP Security & Vulnerability Scans',
      'Chaos Engineering & Disaster Recovery Validation'
    ],
    benefits: 'Zero critical production escape defects, 90% automation coverage, and guaranteed high-load resilience.'
  }
];

export default function ServicesSection({ onSelectService, onOpenContact, mode = 'services' }) {
  const isIndustries = mode === 'industries';

  // Industries mode state
  const [activeIndustryId, setActiveIndustryId] = useState(industriesData[0]?.id || 'fintech');
  const industryScrollRef = useRef(null);

  const scrollIndustries = (direction) => {
    if (industryScrollRef.current) {
      const cardWidth = 320;
      industryScrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      });
    }
  };

  // Render Industries Mode
  if (isIndustries) {
    return (
      <section id="industries" className="py-16 sm:py-24 bg-[#fcfbfa] text-slate-900 relative overflow-hidden font-sans scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 sm:pb-14">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-1.5">
                <span className="text-rose-600 font-extrabold text-xl leading-none select-none">/</span>
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-800 uppercase">
                  Industries We Serve
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1e0a0a] tracking-tight leading-[1.08]">
                High-Impact<br />Enterprise Sectors
              </h2>
            </div>

            <div className="lg:max-w-md xl:max-w-lg space-y-5 lg:pb-2">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                Modeled after global tier-1 consulting firms, we engineer mission-critical cloud backbones, compliant data architectures, and automated governance frameworks tailored to rigorous regulatory standards.
              </p>
              <div className="flex flex-wrap items-center gap-5 sm:gap-7 pt-1">
                <Link 
                  to="/clients" 
                  className="text-xs sm:text-sm font-bold text-[#881337] hover:text-[#dc2626] inline-flex items-center gap-1 group transition-colors"
                >
                  <span>View All Industries</span>
                  <ChevronRight className="w-4 h-4 text-rose-600 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button 
                  type="button"
                  onClick={() => onOpenContact && onOpenContact('Industry Advisory Consultation')} 
                  className="text-xs sm:text-sm font-bold text-[#881337] hover:text-[#dc2626] inline-flex items-center gap-1 group transition-colors cursor-pointer"
                >
                  <span>Partner With Us</span>
                  <ChevronRight className="w-4 h-4 text-rose-600 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Desktop & Tablet Carousel */}
          <div className="relative group">
            <div 
              ref={industryScrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-none pb-6 pt-2 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {industriesData.map((ind) => (
                <div 
                  key={ind.id}
                  onClick={() => setActiveIndustryId(ind.id)}
                  className={`flex-shrink-0 w-[280px] sm:w-[320px] rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 snap-start cursor-pointer flex flex-col justify-between ${
                    activeIndustryId === ind.id ? 'ring-2 ring-rose-600 shadow-md' : ''
                  }`}
                >
                  <div className="h-44 overflow-hidden relative">
                    <img 
                      src={ind.image} 
                      alt={ind.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-white tracking-wider uppercase">
                      {ind.category}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {ind.title}
                      </h3>
                      <p className="text-[11px] font-semibold text-rose-700">
                        {ind.subtitle}
                      </p>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal line-clamp-3">
                        {ind.description}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <Link 
                        to={ind.link} 
                        className="text-xs font-bold text-rose-700 hover:text-rose-900 inline-flex items-center gap-1 group"
                      >
                        <span>Explore Sector</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center justify-end gap-3 pt-4">
              <button 
                onClick={() => scrollIndustries('left')}
                aria-label="Previous industry"
                className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:text-rose-700 shadow-xs transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollIndustries('right')}
                aria-label="Next industry"
                className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:text-rose-700 shadow-xs transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Handle clicking a service card
  const handleCardClick = (svc) => {
    if (onSelectService) {
      onSelectService({
        id: svc.id,
        title: svc.title,
        category: svc.category,
        summary: svc.desc,
        description: svc.details || svc.desc,
        features: svc.features || [
          'Enterprise Consulting & Architectural Assessment',
          'Production-Ready Implementation & Migration',
          'Continuous Performance Monitoring & SLAs',
          'Executive Documentation & Knowledge Transfer'
        ],
        benefits: svc.benefits || 'Streamlined processes, higher team productivity, and measurable business outcomes.'
      });
    } else if (onOpenContact) {
      onOpenContact(`Inquiry: ${svc.title}`);
    }
  };

  // Render Services Mode (Benchmark: HCLTech & Cognizant/CTS)
  return (
    <section id="services" className="py-16 sm:py-24 bg-[#eef2f8] text-slate-900 relative overflow-hidden font-sans scroll-mt-24">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-12 sm:mb-16">
          
          {/* Top Left Tag: DIGITAL · CLOUD · GOVERNANCE */}
          <div className="lg:col-span-3 flex flex-col items-start space-y-1">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#64748b] uppercase leading-tight font-sans">
              DIGITAL<br />CLOUD<br />GOVERNANCE
            </span>
            <div className="w-7 h-[2px] bg-[#0052cc] mt-2 rounded-full" />
          </div>

          {/* Center Main Title */}
          <div className="lg:col-span-6 text-center space-y-3">
            <div className="inline-flex items-center space-x-2.5 text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#0052cc] uppercase">
              <span className="w-6 h-[1.5px] bg-[#0052cc]" />
              <span>ENTERPRISE SERVICES</span>
              <span className="w-6 h-[1.5px] bg-[#0052cc]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black text-[#0a192f] tracking-tight leading-[1.12]">
              Transform Your Enterprise With Our<br className="hidden sm:inline" /> Leading{' '}
              <span className="text-[#0052cc]">Digital Practices</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#64748b] max-w-xl mx-auto leading-relaxed font-normal">
              Modeled after global tier-1 technology consulting standards, we deliver end-to-end digital engineering, cloud, AI, and compliance solutions.
            </p>
          </div>

          {/* Top Right Decorative Tagline */}
          <div className="lg:col-span-3 hidden lg:flex flex-col items-end text-right">
            <span 
              className="text-2xl xl:text-3xl text-[#5b82f6] font-normal leading-tight tracking-wide select-none transform -rotate-3"
              style={{ fontFamily: "'Dancing Script', 'Caveat', 'Georgia', cursive, italic" }}
            >
              Enterprise<br />Engineering &<br />Scale
            </span>
          </div>

        </div>

        {/* 8-Card Grid (4 cols x 2 rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* First 7 Services Cards */}
          {servicesCards.map((svc) => {
            const IconComponent = svc.icon;

            return (
              <div
                key={svc.id}
                onClick={() => handleCardClick(svc)}
                className="bg-white rounded-[26px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col justify-between relative overflow-hidden group cursor-pointer min-h-[290px] sm:min-h-[305px]"
              >
                {/* Icon Badge Top Right */}
                <div className="absolute top-5 right-5 z-10">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-xs ${svc.badgeBg}`}>
                    <IconComponent className="w-4.5 h-4.5 stroke-[2.2]" />
                  </div>
                </div>

                {/* Right Side Vibrant Photograph (Takes right 48% with thin left blend edge) */}
                <div className="absolute right-0 top-0 bottom-0 w-[48%] overflow-hidden pointer-events-none rounded-r-[26px]">
                  <img 
                    src={svc.image} 
                    alt={svc.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Thin Left Edge Blend to keep photo 100% vibrant */}
                  <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white via-white/50 to-transparent z-10" />
                </div>

                {/* Left Side Content Area (Solid Pure White Background for Crisp Legibility) */}
                <div className="relative z-10 flex flex-col justify-between h-full max-w-[55%] pointer-events-none">
                  
                  {/* Number */}
                  <span className="text-xs font-bold text-[#0052cc] tracking-wider font-mono">
                    {svc.num}
                  </span>

                  {/* Title & Short Description */}
                  <div className="my-auto py-1">
                    <h3 className="text-base sm:text-[17px] font-extrabold text-slate-900 leading-snug group-hover:text-[#0052cc] transition-colors mb-1.5 font-sans">
                      {svc.title}
                    </h3>
                    <p className="text-[11px] sm:text-[12px] text-slate-500 leading-relaxed font-normal line-clamp-3">
                      {svc.desc}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="inline-flex items-center space-x-1.5 text-[12px] font-bold text-[#0052cc] group-hover:translate-x-1 transition-transform pointer-events-auto">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>

                </div>

              </div>
            );
          })}

          {/* Card 08: "+5 More Practices" Solid Blue CTA Card */}
          <div
            onClick={() => {
              if (onSelectService) {
                onSelectService({
                  id: 'all-enterprise-practices',
                  title: 'Full Suite of Enterprise Solutions',
                  category: 'All Technology Practices',
                  summary: 'Discover our complete suite including 24/7 Managed Infrastructure, Database HA Clustering, ITGC Controls & Custom Low-Code Engineering.',
                  description: 'Inspac Solutions delivers end-to-end technology solutions across 8+ specialized enterprise domains inspired by global leaders HCLTech and Cognizant (CTS). Beyond our core services, we provide 24/7/365 NOC/SOC Managed Services, High-Availability Database Disaster Recovery, QSA PCI-DSS 4.0 Attestation, and SAP/Oracle ERP integration.',
                  features: [
                    '24/7/365 Global Managed Infrastructure & NOC/SOC Support',
                    'Zero-Downtime Database Clustering & Multi-Region DR',
                    'Third-Party Vendor ITGC Controls & Security Auditing',
                    'Low-Code Enterprise Workflow Systems & API Middleware'
                  ],
                  benefits: 'Complete enterprise lifecycle coverage, guaranteed audit compliance, and round-the-clock APAC operational support.'
                });
              } else if (onOpenContact) {
                onOpenContact('Enterprise Services Suite Inquiry');
              }
            }}
            className="bg-gradient-to-br from-[#0052cc] via-[#0047d6] to-[#0038b8] rounded-[26px] p-6 text-white shadow-[0_4px_25px_rgba(0,82,204,0.25)] hover:shadow-[0_12px_35px_rgba(0,82,204,0.4)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group cursor-pointer min-h-[290px] sm:min-h-[305px]"
          >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />

            {/* Top Row: Number & Grid Icon Badge */}
            <div className="flex items-center justify-between relative z-10">
              <span className="text-xs font-bold text-blue-200 tracking-wider font-mono">
                +5
              </span>
              <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/25">
                <LayoutGrid className="w-4.5 h-4.5 stroke-[2]" />
              </div>
            </div>

            {/* Middle Title & Description */}
            <div className="my-auto py-2 relative z-10">
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-[1.08] mb-2">
                +5<br />More<br />Practices
              </h3>
              <p className="text-[11px] sm:text-[12px] text-blue-100/90 leading-relaxed font-normal max-w-[90%]">
                Explore our full suite of 24/7 Managed Infrastructure, Database HA & GRC advisory.
              </p>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center justify-between pt-1 relative z-10">
              <div className="inline-flex items-center space-x-1.5 text-[12px] font-bold text-white group-hover:translate-x-1 transition-transform">
                <span>View Full Suite</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>

              <div className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#0052cc] transition-all duration-300">
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
