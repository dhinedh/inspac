import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import IndustriesSection from '../components/IndustriesSection';
import ProductsSection from '../components/ProductsSection';
import ServiceModal from '../components/ServiceModal';
import { 
  BarChart3, 
  Database, 
  Layers, 
  Cloud, 
  GitPullRequest, 
  ShieldCheck, 
  CreditCard, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  ArrowRight, 
  Globe2, 
  Sparkles, 
  PhoneCall, 
  Mail, 
  Award,
  Users,
  Compass,
  Building2,
  Lock,
  Cpu,
  Zap,
  TrendingUp,
  Server,
  HeartPulse,
  ShoppingCart,
  Truck,
  Building,
  Radio,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { companyInfo, servicesData } from '../data/companyData';

export default function HomePage({ onOpenContact }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="space-y-24 pb-24 bg-[#00587c]">
      
      {/* 1. Hero Section */}
      <Hero onOpenContact={onOpenContact} />

      {/* 2. About Us Section */}
      <AboutSection onOpenContact={onOpenContact} />

      {/* 3. Services We Offer Section */}
      <ServicesSection 
        mode="services"
        onSelectService={(service) => setSelectedService(service)}
        onOpenContact={onOpenContact} 
      />

      {/* 4. Our Products Section */}
      <ProductsSection onOpenContact={onOpenContact} />

      {/* 4. Industries We Serve (Carousel) */}
      <ServicesSection 
        mode="industries"
        onOpenContact={onOpenContact} 
      />

      {/* 5. Practice Areas & Specializations (Matching Reference Design) */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#00384f] via-[#004e6e] to-[#00587c] text-[#e2e8f0] relative overflow-hidden font-serif border-y border-cyan-900/40">
        {/* Glowing Ambient Backdrop Lights */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative z-10">
          
          {/* Top Header Grid: 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start justify-between">
            
            {/* Left Column: Huge 08 Number + Line + Practice Areas Heading */}
            <div className="lg:col-span-6 space-y-2">
              <span 
                className="text-7xl sm:text-8xl lg:text-[110px] font-serif text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-400 font-normal leading-none tracking-tight block select-none drop-shadow-[0_0_25px_rgba(6,182,212,0.25)]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                08
              </span>

              <div className="w-full max-w-[320px] sm:max-w-[380px] h-[1px] bg-gradient-to-r from-cyan-500/60 via-blue-500/40 to-transparent my-4" />

              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal tracking-normal"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Practice Areas
              </h2>
            </div>

            {/* Right Column: Editorial Paragraph */}
            <div className="lg:col-span-6 lg:pt-6">
              <p 
                className="text-xs sm:text-sm lg:text-[15px] text-slate-300/90 leading-[1.85] font-serif font-normal max-w-xl"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Our specialized practice areas combine multi-disciplinary engineering and compliance expertise to address your enterprise's most critical digital transformation, security, and infrastructure goals.
              </p>
            </div>

          </div>

          {/* 4-Column High-Contrast Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Card 1: Digital Engineering */}
            <div className="group cursor-pointer space-y-3 select-none">
              <div className="aspect-[3/4] w-full overflow-hidden bg-slate-900/80 border border-cyan-500/20 rounded-xl relative shadow-lg shadow-cyan-950/40 group-hover:border-cyan-400/50 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
                  alt="Digital Engineering & App Modernization" 
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:contrast-100 group-hover:brightness-100"
                />
              </div>
              <h3 
                className="text-xs sm:text-sm font-serif text-slate-200 group-hover:text-cyan-300 transition-colors duration-200 leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Digital Engineering & App Modernization
              </h3>
            </div>

            {/* Card 2: Cloud DevOps */}
            <div className="group cursor-pointer space-y-3 select-none">
              <div className="aspect-[3/4] w-full overflow-hidden bg-slate-900/80 border border-cyan-500/20 rounded-xl relative shadow-lg shadow-cyan-950/40 group-hover:border-cyan-400/50 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" 
                  alt="Cloud Transformation & DevSecOps" 
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:contrast-100 group-hover:brightness-100"
                />
              </div>
              <h3 
                className="text-xs sm:text-sm font-serif text-slate-200 group-hover:text-cyan-300 transition-colors duration-200 leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Cloud Transformation & DevSecOps
              </h3>
            </div>

            {/* Card 3: AI & Data Lakehouse */}
            <div className="group cursor-pointer space-y-3 select-none">
              <div className="aspect-[3/4] w-full overflow-hidden bg-slate-900/80 border border-cyan-500/20 rounded-xl relative shadow-lg shadow-cyan-950/40 group-hover:border-cyan-400/50 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                  alt="Enterprise AI & Data Lakehouse" 
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:contrast-100 group-hover:brightness-100"
                />
              </div>
              <h3 
                className="text-xs sm:text-sm font-serif text-slate-200 group-hover:text-cyan-300 transition-colors duration-200 leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Enterprise AI & Data Lakehouse
              </h3>
            </div>

            {/* Card 4: Cybersecurity & GRC */}
            <div className="group cursor-pointer space-y-3 select-none">
              <div className="aspect-[3/4] w-full overflow-hidden bg-slate-900/80 border border-cyan-500/20 rounded-xl relative shadow-lg shadow-cyan-950/40 group-hover:border-cyan-400/50 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" 
                  alt="Cybersecurity & PCI-DSS 4.0 Advisory" 
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:contrast-100 group-hover:brightness-100"
                />
              </div>
              <h3 
                className="text-xs sm:text-sm font-serif text-slate-200 group-hover:text-cyan-300 transition-colors duration-200 leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Cybersecurity & PCI-DSS 4.0 Advisory
              </h3>
            </div>

          </div>

        </div>
      </section>

      {/* 6. PCI-DSS 4.0 Executive Security Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#000830] via-[#001254] to-[#000830] border border-blue-500/40 shadow-2xl space-y-8 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400">
                <Lock className="w-4 h-4" />
                <span>PCI-DSS v4.0 & Cyber Governance Advisory</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Achieve Complete PCI-DSS 4.0 Attestation & ISO 27001 Certification
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Reduce Cardholder Data Environment (CDE) audit scope, implement firewall segmentation, perform vulnerability scanning coordination, and secure smooth Qualified Security Assessor (QSA) AOC sign-off.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                to="/compliance"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-xs shadow-xl shadow-emerald-500/25 hover:scale-105 transition-all flex items-center space-x-2"
              >
                <ShieldCheck className="w-4.5 h-4.5" />
                <span>Launch Compliance Assessment</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Global Capability Hubs Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-[#002b3d] via-[#011420] to-[#001c29] border-t border-cyan-800/40 relative overflow-hidden">
        {/* Ambient Glowing Radial Light Accents */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-500/30 text-xs font-bold text-cyan-300 shadow-md">
              <Globe2 className="w-4 h-4 text-cyan-400" />
              <span>Global Presence & Support</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow-md">
              Singapore Headquarters & Offshore Technology Hubs
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Strategic worldwide delivery nodes providing continuous enterprise engineering, 24/7 managed operations, and GRC compliance advisory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Singapore HQ */}
            <div className="bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-cyan-500/30 hover:border-cyan-400/70 shadow-2xl shadow-black/60 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
              <div>
                {/* City Photo Header */}
                <div className="relative h-44 w-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80" 
                    alt="Singapore Global Headquarters" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs font-mono px-3 py-1 rounded-md bg-navy-950/90 text-cyan-300 border border-cyan-800/80 font-bold shadow-md flex items-center gap-1.5 backdrop-blur-md">
                      <span>🇸🇬</span> SINGAPORE HQ
                    </span>
                    <span className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider bg-emerald-950/90 px-2.5 py-1 rounded-full border border-emerald-600/60 shadow-md backdrop-blur-md">
                      Active HQ
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition">Global Headquarters</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    111 North Bridge Road, #23-05 Peninsula Plaza, Singapore 179098. Corporate executive hub, GRC advisory & PCI-DSS governance.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800/80 text-slate-300 border border-slate-700/60">Corporate Executive Hub</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800/80 text-slate-300 border border-slate-700/60">GRC & Audit Advisory</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800/80 text-slate-300 border border-slate-700/60">PCI-DSS Governance</span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-300">
                <a href="tel:+6598271155" className="hover:underline flex items-center gap-1">
                  <PhoneCall className="w-3 h-3" /> +65 98271155
                </a>
                <a href="mailto:mkts@inspacsolutions.com" className="hover:underline flex items-center gap-1">
                  <Mail className="w-3 h-3" /> Email HQ
                </a>
              </div>
            </div>

            {/* Card 2: India Tech Center */}
            <div className="bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-cyan-500/30 hover:border-cyan-400/70 shadow-2xl shadow-black/60 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
              <div>
                {/* City Photo Header */}
                <div className="relative h-44 w-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80" 
                    alt="India Offshore Tech Center" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs font-mono px-3 py-1 rounded-md bg-navy-950/90 text-cyan-300 border border-cyan-800/80 font-bold shadow-md flex items-center gap-1.5 backdrop-blur-md">
                      <span>🇮🇳</span> INDIA TECH CENTER
                    </span>
                    <span className="text-[10px] text-cyan-300 font-bold uppercase tracking-wider bg-blue-950/90 px-2.5 py-1 rounded-full border border-blue-600/60 shadow-md backdrop-blur-md">
                      24/7 R&D Hub
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition">Offshore Development Center</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    IT Tech Hub, Chennai / Bangalore, India. Full-stack software engineering, cloud DevOps, 24/7 managed NOC & automated pipelines.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800/80 text-slate-300 border border-slate-700/60">Full-Stack Engineering</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800/80 text-slate-300 border border-slate-700/60">Cloud & DevSecOps</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800/80 text-slate-300 border border-slate-700/60">24/7 Managed NOC</span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-300">
                <a href="tel:+914445678900" className="hover:underline flex items-center gap-1">
                  <PhoneCall className="w-3 h-3" /> +91 44 4567 8900
                </a>
                <a href="mailto:india@inspacsolutions.com" className="hover:underline flex items-center gap-1">
                  <Mail className="w-3 h-3" /> Email Tech Hub
                </a>
              </div>
            </div>

            {/* Card 3: Australia Ops */}
            <div className="bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-cyan-500/30 hover:border-cyan-400/70 shadow-2xl shadow-black/60 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
              <div>
                {/* City Photo Header */}
                <div className="relative h-44 w-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80" 
                    alt="Australia Regional Operations" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs font-mono px-3 py-1 rounded-md bg-navy-950/90 text-cyan-300 border border-cyan-800/80 font-bold shadow-md flex items-center gap-1.5 backdrop-blur-md">
                      <span>🇦🇺</span> AUSTRALIA OPS
                    </span>
                    <span className="text-[10px] text-cyan-300 font-bold uppercase tracking-wider bg-blue-950/90 px-2.5 py-1 rounded-full border border-blue-600/60 shadow-md backdrop-blur-md">
                      Regional Office
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition">Regional Operations Hub</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Level 14, 385 Bourke Street, Melbourne VIC 3000, Australia. Enterprise ERP consulting, APAC analytics & client service operations.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800/80 text-slate-300 border border-slate-700/60">Enterprise ERP Consulting</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800/80 text-slate-300 border border-slate-700/60">APAC Business Analytics</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800/80 text-slate-300 border border-slate-700/60">Client Solutions Hub</span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-300">
                <a href="tel:+61390001122" className="hover:underline flex items-center gap-1">
                  <PhoneCall className="w-3 h-3" /> +61 3 9000 1122
                </a>
                <a href="mailto:australia@inspacsolutions.com" className="hover:underline flex items-center gap-1">
                  <Mail className="w-3 h-3" /> Email Ops
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
          onOpenContact={onOpenContact} 
        />
      )}

    </div>
  );
}


