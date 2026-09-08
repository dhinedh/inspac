import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Database, 
  Layers, 
  Cloud, 
  GitPullRequest, 
  ShieldCheck, 
  CreditCard, 
  CheckCircle2, 
  Code2, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  ChevronRight, 
  ChevronLeft,
  Smartphone,
  Globe,
  Settings,
  Users,
  Megaphone
} from 'lucide-react';

// Curated photography for Industry Sectors
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

const servicesList = [
  {
    num: '01',
    id: 'custom-software',
    title: 'Custom Software Development',
    icon: Code2,
    desc: 'We build tailor-made software solutions that solve your unique business challenges and drive growth. From idea to deployment, we turn your vision into powerful digital products.'
  },
  {
    num: '02',
    id: 'cloud-solutions',
    title: 'Cloud Solutions & Migration',
    icon: Cloud,
    desc: 'Accelerate your digital transformation with secure, scalable multi-cloud infrastructure, cloud-native architectures, and zero-downtime migration strategies.'
  },
  {
    num: '03',
    id: 'mobile-app',
    title: 'Mobile App Development',
    icon: Smartphone,
    desc: 'Craft high-performance, intuitive iOS and Android applications with rich user interfaces, offline capabilities, and seamless backend integration.'
  },
  {
    num: '04',
    id: 'web-development',
    title: 'Web Development & Digital Experience',
    icon: Globe,
    desc: 'Deliver blazing-fast, responsive web platforms and web applications optimized for search engines, high conversion rates, and superior user engagement.'
  },
  {
    num: '05',
    id: 'data-analytics',
    title: 'Data & Analytics',
    icon: BarChart3,
    desc: 'Turn raw enterprise data into actionable intelligence with automated executive BI dashboards, predictive AI models, and real-time analytics pipelines.'
  },
  {
    num: '06',
    id: 'process-automation',
    title: 'Process Automation',
    icon: Settings,
    desc: 'Eliminate manual operational bottlenecks with Robotic Process Automation (RPA), workflow re-engineering, and automated SOP digital controls.'
  },
  {
    num: '07',
    id: 'qa-testing',
    title: 'Quality Assurance & Testing',
    icon: ShieldCheck,
    desc: 'Ensure bulletproof software reliability through automated end-to-end testing, security penetration audits, and performance regression suites.'
  },
  {
    num: '08',
    id: 'it-consulting',
    title: 'IT Consulting & Strategy',
    icon: Users,
    desc: 'Guide your technology investments with expert C-level advisory, Enterprise IT governance, digital transformation roadmaps, and architecture reviews.'
  },
  {
    num: '09',
    id: 'digital-marketing',
    title: 'Digital Marketing Solutions',
    icon: Megaphone,
    desc: 'Expand your global digital footprint with data-driven performance marketing, SEO, conversion rate optimization, and multi-channel campaign strategies.'
  },
  {
    num: '10',
    id: 'enterprise-integration',
    title: 'Enterprise Integration',
    icon: Database,
    desc: 'Connect disparate enterprise systems, SAP/Oracle ERPs, legacy backends, and third-party APIs into a unified real-time middleware hub.'
  }
];

export default function ServicesSection({ onSelectService, onOpenContact, mode = 'services' }) {
  const isIndustries = mode === 'industries';

  // Industries mode state
  const [activeIndustryId, setActiveIndustryId] = useState(industriesData[0]?.id || 'fintech');
  const industryScrollRef = useRef(null);

  // Active Service Index state
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollIndustries = (direction) => {
    if (industryScrollRef.current) {
      const cardWidth = 320;
      industryScrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? servicesList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === servicesList.length - 1 ? 0 : prev + 1));
  };

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
                  className="text-xs sm:text-sm font-bold text-[#881337] hover:text-[#dc2626] inline-flex items-center gap-1 group transition-colors"
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
              className="absolute -left-2 sm:-left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-lg border border-slate-200/80 flex items-center justify-center text-slate-800 hover:text-rose-600 hover:scale-110 active:scale-95 transition-all duration-200"
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
              className="absolute -right-2 sm:-right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-lg border border-slate-200/80 flex items-center justify-center text-slate-800 hover:text-rose-600 hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.2]" />
            </button>
          </div>
        </div>
      </section>
    );
  }

  const currentService = servicesList[activeIndex];
  const ActiveIcon = currentService.icon;

  return (
    <section id="services" className="py-12 sm:py-20 bg-[#f4f6fa] text-slate-900 relative overflow-hidden font-sans border-y border-slate-200/80 scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
          
          {/* Left & Middle Column (Grid cols 1 to 7): Header + 2-Column Services Grid */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Header & Paragraph Column */}
              <div className="md:col-span-5 space-y-4">
                
                {/* Subheader */}
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  <span>Our Expertise</span>
                  <span className="w-5 h-[1.5px] bg-slate-300"></span>
                  <span>Your Growth</span>
                </div>

                {/* Title */}
                <div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none">
                    Services
                  </h2>
                  <div className="w-12 h-1 bg-[#004bb7] rounded-full mt-3" />
                </div>

                {/* Paragraph Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1">
                  We deliver end-to-end technology services to help businesses innovate, scale and stay ahead. From strategy to execution, our solutions are designed around your goals.
                </p>

                {/* Explore Link */}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      if (onOpenContact) {
                        onOpenContact('General Services Inquiry');
                      }
                    }}
                    className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-slate-900 border-b-2 border-slate-900 pb-0.5 hover:text-[#004bb7] hover:border-[#004bb7] transition-colors group cursor-pointer"
                  >
                    <span>Explore Our Services</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* 2-Column Services Grid (10 Services) */}
              <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {servicesList.map((svc, idx) => {
                  const isActive = activeIndex === idx;

                  return (
                    <div
                      key={svc.id}
                      onClick={() => setActiveIndex(idx)}
                      onMouseEnter={() => setActiveIndex(idx)}
                      className={`p-3 sm:p-4 rounded-2xl cursor-pointer transition-all duration-200 border text-left group flex flex-col justify-between ${
                        isActive
                          ? 'bg-blue-50/90 border-[#004bb7]/50 shadow-sm ring-1 ring-[#004bb7]/30'
                          : 'bg-transparent border-transparent hover:bg-slate-50 hover:border-slate-200'
                      }`}
                    >
                      {/* Number & Dash */}
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`text-xs font-bold font-mono ${isActive ? 'text-[#004bb7]' : 'text-[#004bb7]/90'}`}>
                          {svc.num}
                        </span>
                        <span className="w-4 h-[1px] bg-slate-300"></span>
                      </div>

                      {/* Title */}
                      <div>
                        <h3 className={`text-xs sm:text-sm font-bold leading-snug ${isActive ? 'text-[#004bb7]' : 'text-slate-800 group-hover:text-[#004bb7]'} transition-colors`}>
                          {svc.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Bottom Tagline */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
              <span>TECHNOLOGY FOR A BRIGHTER TOMORROW</span>
            </div>

          </div>

          {/* Right Column (Grid cols 8 to 12): Vibrant Deep Royal Blue Panel */}
          <div className="lg:col-span-5 bg-[#004bb7] p-8 sm:p-10 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden min-h-[440px]">
            
            {/* Ambient subtle glow background decorative element */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top Label */}
            <div className="flex items-center justify-between relative z-10">
              <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-widest text-white/80 uppercase">
                SOLUTIONS THAT MAKE AN IMPACT
              </span>
            </div>

            {/* Middle Main Active Service Content */}
            <div className="my-6 sm:my-10 space-y-6 relative z-10">
              
              {/* Title & Accent Underline */}
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {currentService.title}
                </h3>
                <div className="w-12 h-1 bg-white/80 rounded-full mt-4" />
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm lg:text-base text-white/90 leading-relaxed font-normal">
                {currentService.desc}
              </p>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectService) onSelectService(currentService);
                    if (onOpenContact) onOpenContact(`Inquiry: ${currentService.title}`);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-white text-[#004bb7] hover:bg-blue-50 text-xs sm:text-sm font-bold shadow-lg transition-all inline-flex items-center space-x-2 group/btn"
                >
                  <span>Consult on {currentService.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

            {/* Bottom Pagination Counter & Navigation Arrows */}
            <div className="flex items-center justify-between pt-6 border-t border-white/20 relative z-10">
              <span className="text-xs sm:text-sm font-mono font-bold text-white/90">
                {currentService.num} / {servicesList.length.toString().padStart(2, '0')}
              </span>

              <div className="flex items-center space-x-3">
                {/* Prev Button */}
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous Service"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/40 hover:border-white hover:bg-white/10 text-white flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
                </button>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next Service"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/40 hover:border-white hover:bg-white/10 text-white flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5 stroke-[2.2]" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
