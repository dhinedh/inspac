import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Code2, 
  Headphones, 
  Users, 
  Palette, 
  Megaphone, 
  TrendingUp, 
  LayoutGrid, 
  ArrowRight,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

// Industry sectors data for mode="industries"
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
    subtitle: 'PDPA / HIPAA · Clinical Data Vaults',
    description: 'Strictly compliant clinical data architectures, encrypted electronic patient record (EHR) databases, and high-throughput predictive diagnostics.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
    link: '/clients'
  },
  {
    id: 'ecommerce',
    title: 'Retail & Enterprise E-Commerce',
    category: 'COMMERCE & RETAIL',
    subtitle: 'Omnichannel ERP · Cloud Auto-Scaling',
    description: 'High-scale cloud infrastructures auto-scaling for peak flash-sale volumes, bi-directional ERP inventory sync, and real-time customer analytics.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',
    link: '/clients'
  },
  {
    id: 'logistics',
    title: 'Supply Chain & Logistics',
    category: 'LOGISTICS & SUPPLY CHAIN',
    subtitle: 'RPA Automation · Fleet GPS Telemetry',
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
    subtitle: '5G Infrastructure · Real-Time Edge',
    description: 'Carrier-grade network infrastructure, real-time message queuing, microservices orchestration, and edge computing deployments.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
    link: '/clients'
  }
];

// 7 Core Services matching exact reference screenshot
const servicesCards = [
  {
    num: '01',
    id: 'project-management',
    title: 'Project Management',
    category: 'Management & PMO',
    icon: FileText,
    badgeBg: 'bg-[#dbeefd] text-[#0055ff]',
    desc: 'Plan, track and deliver projects efficiently with advanced tools and proven methodologies.',
    image: '/images/card_01.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    details: 'Our enterprise project management service covers Agile & Scrum transformation, PMO setup, Gantt resource allocation, risk mitigation, and automated milestone tracking.',
    features: [
      'Agile, Scrum & Kanban Project Governance',
      'Resource Planning & Gantt Chart Tracking',
      'Risk Assessment & Mitigation Frameworks',
      'Automated Executive Milestone Dashboards'
    ],
    benefits: 'On-time delivery, eliminated budget overruns, and transparent project tracking across engineering teams.'
  },
  {
    num: '02',
    id: 'web-mobile-dev',
    title: 'Web & Mobile Development',
    category: 'Software Engineering',
    icon: Code2,
    badgeBg: 'bg-[#f3e8ff] text-[#9333ea]',
    desc: 'Build modern, scalable and user-friendly websites and mobile applications.',
    image: '/images/card_02.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    details: 'Full-stack Web and iOS/Android app engineering utilizing React, React Native, Next.js, Node.js, and cloud microservices tailored for high performance.',
    features: [
      'Full-Stack Web Applications (React, Next.js, Node.js)',
      'Cross-Platform iOS & Android Mobile Apps',
      'High-Performance RESTful & GraphQL APIs',
      'Cloud Microservices Architecture'
    ],
    benefits: 'Sub-second page loading speeds, high user engagement, and scalable codebase.'
  },
  {
    num: '03',
    id: 'customer-support',
    title: 'Customer Support',
    category: 'Operations & Helpdesk',
    icon: Headphones,
    badgeBg: 'bg-[#dcfce7] text-[#16a34a]',
    desc: 'Ensure seamless support for your customers with dedicated assistance and smart solutions.',
    image: '/images/card_03.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=800&q=80',
    details: '24/7 multi-channel IT helpdesk, AI-driven customer support chatbots, omnichannel ticketing integration, and SLA-backed L1-L3 technical assistance.',
    features: [
      '24/7 Omnichannel Ticketing & IT Helpdesk',
      'AI Chatbot & Self-Service Portal Integration',
      'L1, L2 & L3 SLA-Guaranteed Technical Support',
      'Customer Satisfaction (CSAT) Monitoring'
    ],
    benefits: '99.9% support SLA adherence, reduced resolution times, and elevated customer loyalty.'
  },
  {
    num: '04',
    id: 'human-resources',
    title: 'Human Resources',
    category: 'Enterprise Operations',
    icon: Users,
    badgeBg: 'bg-[#ffedd5] text-[#ea580c]',
    desc: 'Simplify HR processes and empower your people with efficient management tools.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
    details: 'Modern HRIS implementation, payroll processing automation, talent acquisition analytics, performance management systems, and employee self-service portals.',
    features: [
      'HRIS & Employee Portal Implementation',
      'Automated Payroll & Compliance Workflows',
      'Performance Evaluation & KPI Tracking',
      'Talent Acquisition & Onboarding Systems'
    ],
    benefits: 'Streamlined HR administration, automated payroll calculation, and improved employee retention.'
  },
  {
    num: '05',
    id: 'design-creatives',
    title: 'Design & Creatives',
    category: 'UI/UX & Branding',
    icon: Palette,
    badgeBg: 'bg-[#ffe4e6] text-[#e11d48]',
    desc: 'Creative designs that make your brand stand out and leave a lasting impression.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    details: 'UI/UX design systems, brand identity architecture, interactive prototyping, graphic design, design auditing, and accessibility compliance (WCAG 2.1).',
    features: [
      'UI/UX Product Design & Wireframing',
      'Brand Identity Systems & Style Guides',
      'Interactive Figma & Adobe XD Prototypes',
      'Accessibility Audits & WCAG 2.1 Compliance'
    ],
    benefits: 'Memorable brand identity, intuitive interface design, and higher conversion rates.'
  },
  {
    num: '06',
    id: 'marketing-communication',
    title: 'Marketing & Communication',
    category: 'Growth & Marketing',
    icon: Megaphone,
    badgeBg: 'bg-[#fef9c3] text-[#ca8a04]',
    desc: 'Reach the right audience with impactful strategies and data-driven campaigns.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    details: 'Performance marketing, search engine optimization (SEO), conversion rate optimization (CRO), multi-channel campaign automation, and data analytics.',
    features: [
      'Data-Driven Performance Marketing',
      'Search Engine Optimization (SEO) & Content Strategy',
      'Social Media Campaign Management',
      'Conversion Rate Optimization (CRO)'
    ],
    benefits: 'Targeted brand reach, higher lead acquisition, and maximum return on ad spend (ROAS).'
  },
  {
    num: '07',
    id: 'business-development',
    title: 'Business Development',
    category: 'Strategy & Growth',
    icon: TrendingUp,
    badgeBg: 'bg-[#e0f2fe] text-[#0284c7]',
    desc: 'Identify new opportunities, build strong partnerships and accelerate growth.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    details: 'Strategic advisory, digital transformation roadmap, strategic partnership modeling, market expansion strategies, and enterprise lead pipeline engineering.',
    features: [
      'Digital Transformation Strategy & Advisory',
      'Market Entry & Expansion Roadmaps',
      'Strategic B2B Partnership Development',
      'Revenue Pipeline Engineering'
    ],
    benefits: 'Accelerated market expansion, new revenue streams, and sustained enterprise growth.'
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
                High-Impact<br />Sectors
              </h2>
            </div>

            <div className="lg:max-w-md xl:max-w-lg space-y-5 lg:pb-2">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                We engineer mission-critical cloud backbones, compliant data architectures, and automated governance frameworks tailored to rigorous regulatory standards across global industries.
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

          <div className="relative group/carousel px-1 sm:px-3">
            <button
              type="button"
              onClick={() => scrollIndustries('left')}
              aria-label="Previous items"
              className="absolute -left-2 sm:-left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-lg border border-slate-200/80 flex items-center justify-center text-slate-800 hover:text-rose-600 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
            </button>

            <div 
              ref={industryScrollRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 -mx-4 px-4 sm:mx-0 sm:px-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {industriesData.map((item) => {
                const isActive = activeIndustryId === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndustryId(item.id)}
                    className={`relative flex-shrink-0 w-[85vw] max-w-[340px] sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] h-[400px] sm:h-[440px] rounded-[28px] overflow-hidden group cursor-pointer select-none snap-start transition-all duration-300 ${
                      isActive ? 'shadow-2xl ring-2 ring-rose-500/50' : 'hover:shadow-xl hover:-translate-y-1'
                    }`}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className={`absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-[0.75] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-95 ${
                        isActive ? 'grayscale-0 brightness-90' : ''
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                    <div className="absolute bottom-5 sm:bottom-6 inset-x-4 sm:inset-x-5 z-10 flex flex-col justify-end pointer-events-none">
                      <div className="opacity-0 max-h-0 -translate-y-1 group-hover:opacity-100 group-hover:max-h-72 group-hover:translate-y-0 transition-all duration-300 ease-out overflow-hidden mb-0 group-hover:mb-3">
                        <div className="bg-black/85 backdrop-blur-md border border-white/15 rounded-2xl p-3.5 sm:p-4 shadow-2xl">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                            {item.category}
                          </span>
                          <p className="text-xs sm:text-[12px] text-slate-100 leading-relaxed font-normal">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <div className="pr-16 sm:pr-20 min-h-[44px] sm:min-h-[52px] flex items-end">
                        <h3 className={`text-base sm:text-lg font-bold leading-snug transition-colors duration-200 ${
                          isActive ? 'text-[#ffcc00]' : 'text-white group-hover:text-[#ffcc00]'
                        }`}>
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => scrollIndustries('right')}
              aria-label="Next items"
              className="absolute -right-2 sm:-right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-lg border border-slate-200/80 flex items-center justify-center text-slate-800 hover:text-rose-600 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.2]" />
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Handle Card Click
  const handleCardClick = (svc) => {
    if (onSelectService) {
      onSelectService({
        id: svc.id,
        title: svc.title,
        category: svc.category || 'Technology Services',
        summary: svc.desc,
        description: svc.details || svc.desc,
        features: svc.features || [
          'Enterprise-Grade Strategy & Implementation',
          'Automated Workflows & Tool Integration',
          'SLA-Backed Technical Support & Maintenance',
          'Scalable Cloud & Security Architecture'
        ],
        benefits: svc.benefits || 'Streamlined processes, higher team productivity, and measurable business outcomes.'
      });
    } else if (onOpenContact) {
      onOpenContact(`Inquiry: ${svc.title}`);
    }
  };

  // Render Services Mode (Exact Match to User Reference Screenshot)
  return (
    <section id="services" className="py-16 sm:py-24 bg-[#f1f3f9] text-slate-900 relative overflow-hidden font-sans scroll-mt-24">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-12 sm:mb-16">
          
          {/* Top Left Tag: INNOVATE DEVELOP GROW */}
          <div className="lg:col-span-3 flex flex-col items-start space-y-1">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#64748b] uppercase leading-tight font-sans">
              INNOVATE<br />DEVELOP<br />GROW
            </span>
            <div className="w-8 h-[2px] bg-[#0055ff] mt-2 rounded-full" />
          </div>

          {/* Center Main Title */}
          <div className="lg:col-span-6 text-center space-y-3">
            <div className="inline-flex items-center space-x-2.5 text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#0055ff] uppercase">
              <span className="w-6 h-[1.5px] bg-[#0055ff]" />
              <span>OUR SERVICES</span>
              <span className="w-6 h-[1.5px] bg-[#0055ff]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#0b192c] tracking-tight leading-[1.12]">
              Save Time Managing Your Business<br className="hidden sm:inline" /> With Our{' '}
              <span className="text-[#0055ff]">Best Services</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#64748b] max-w-xl mx-auto leading-relaxed font-normal">
              From ideas to execution, we deliver end-to-end technology solutions to help your business grow faster and smarter.
            </p>
          </div>

          {/* Top Right Cursive Decorative Text */}
          <div className="lg:col-span-3 hidden lg:flex flex-col items-end text-right">
            <span 
              className="text-2xl xl:text-3xl text-[#5b82f6] font-normal leading-tight tracking-wide select-none transform -rotate-3"
              style={{ fontFamily: "'Dancing Script', 'Caveat', 'Georgia', cursive, italic" }}
            >
              Technology<br />for a Better<br />Tomorrow
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
                className="bg-[#f5f7fa] rounded-[28px] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-slate-200/60 flex flex-col justify-between relative overflow-hidden group cursor-pointer min-h-[300px] sm:min-h-[320px]"
              >
                {/* Background Image Cutout on Right 50% with Smooth Gradient Blend */}
                <div className="absolute right-0 bottom-0 top-0 w-1/2 overflow-hidden pointer-events-none rounded-r-[28px]">
                  <img 
                    src={svc.image} 
                    onError={(e) => {
                      if (svc.fallbackImage) {
                        e.target.src = svc.fallbackImage;
                      }
                    }}
                    alt={svc.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Gradient overlay to smoothly blend photo into card background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f5f7fa] via-[#f5f7fa]/90 via-45% to-transparent" />
                </div>

                {/* Card Header: Number at Left, Icon Badge at Right */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-sm font-extrabold text-[#0055ff] font-mono tracking-wider">
                    {svc.num}
                  </span>
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-sm ${svc.badgeBg}`}>
                    <IconComponent className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </div>

                {/* Card Content (Text on solid left side) */}
                <div className="my-auto py-3 relative z-10 max-w-[85%]">
                  <h3 className="text-lg font-black text-[#0b192c] leading-snug group-hover:text-[#0055ff] transition-colors mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-[#52627a] leading-relaxed font-normal line-clamp-3">
                    {svc.desc}
                  </p>
                </div>

                {/* Card Footer: Action Link */}
                <div className="relative z-10 pt-1">
                  <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#0055ff] group-hover:translate-x-1 transition-transform">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </div>

              </div>
            );
          })}

          {/* Card 08: "+4 More Services" Solid Blue CTA Card */}
          <div
            onClick={() => {
              if (onSelectService) {
                onSelectService({
                  id: 'all-services-overview',
                  title: 'Full Suite of Enterprise Solutions',
                  category: 'All Technology Verticals',
                  summary: 'Discover our complete suite including Data Analytics, Cloud Engineering, PCI-DSS Governance & Enterprise ERP integration.',
                  description: 'Inspac Solutions delivers end-to-end technology solutions across 9 specialized enterprise domains. Beyond our core services, we provide BigQuery/Snowflake Data Lakes, DevOps Kubernetes automation, PCI-DSS 4.0 Attestation, and SAP/Oracle ERP integration.',
                  features: [
                    'Data Analytics & Executive BI Dashboards',
                    'Multi-Cloud DevOps & Kubernetes Scaling',
                    'PCI-DSS v4.0 & ISO 27001 GRC Advisory',
                    'SAP & Oracle ERP System Integration'
                  ],
                  benefits: 'Complete enterprise coverage, guaranteed audit compliance, and 24/7 APAC operational support.'
                });
              } else if (onOpenContact) {
                onOpenContact('Enterprise Services Inquiry');
              }
            }}
            className="bg-gradient-to-br from-[#0055ff] via-[#0048eb] to-[#0038c8] rounded-[28px] p-6 text-white shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group cursor-pointer min-h-[300px] sm:min-h-[320px]"
          >
            {/* Subtle architectural building graphic background */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            {/* Header: Number & Layout Grid Badge */}
            <div className="flex items-center justify-between relative z-10">
              <span className="text-sm font-extrabold text-blue-200 tracking-wider font-mono">
                +4
              </span>
              <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/25 shadow-sm">
                <LayoutGrid className="w-5 h-5 stroke-[2]" />
              </div>
            </div>

            {/* Body Title & Description */}
            <div className="my-auto py-2 relative z-10">
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-[1.08] mb-2">
                +4<br />More<br />Services
              </h3>
              <p className="text-xs text-blue-100/90 leading-relaxed font-normal max-w-[90%]">
                Explore all our services and find the right solution for your business.
              </p>
            </div>

            {/* Footer: View All Services link + Circle Arrow Button */}
            <div className="flex items-center justify-between pt-2 relative z-10">
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
                <span>View All Services</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>

              <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#0055ff] transition-all duration-300">
                <ArrowRight className="w-4.5 h-4.5 stroke-[2.5]" />
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Taglines / Footer Corner Labels */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-slate-300/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-[#94a3b8] uppercase">
          <div className="flex items-center space-x-3">
            <span>YOUR SUCCESS</span>
            <span className="w-6 h-[1.5px] bg-slate-300" />
            <span>OUR TECHNOLOGY</span>
          </div>

          <div className="flex items-center space-x-3">
            <span>SMART SOLUTIONS</span>
            <span className="w-6 h-[1.5px] bg-slate-300" />
            <span>REAL IMPACT</span>
          </div>
        </div>

      </div>
    </section>
  );
}
