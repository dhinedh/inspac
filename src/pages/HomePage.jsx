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
    <div className="space-y-24 pb-24 bg-[#04081c]">
      
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
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#030712] via-[#091338] to-[#04081c] text-[#e2e8f0] relative overflow-hidden font-serif border-y border-cyan-900/40">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950 border border-blue-800 text-xs font-bold text-cyan-300">
            <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Global Presence & Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Singapore Headquarters & Offshore Technology Hubs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel-accent p-6 rounded-3xl border border-blue-500/30 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-blue-950 text-cyan-300 border border-blue-800 font-bold">SINGAPORE HQ</span>
              <span className="text-[10px] text-emerald-400 font-bold uppercase">Active HQ</span>
            </div>
            <h3 className="text-lg font-bold text-white">Global Headquarters</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              111 North Bridge Road, #23-05 Peninsula Plaza, Singapore 179098. Executive management, GRC advisory & PCI compliance governance.
            </p>
          </div>

          <div className="glass-panel-accent p-6 rounded-3xl border border-blue-500/30 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-blue-950 text-cyan-300 border border-blue-800 font-bold">INDIA TECH CENTER</span>
              <span className="text-[10px] text-cyan-300 font-bold uppercase">24/7 R&D Hub</span>
            </div>
            <h3 className="text-lg font-bold text-white">Offshore Development Center</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Offshore R&D Hub (Chennai / Bangalore). Full-stack software engineering, cloud DevOps, database clustering & automated pipelines.
            </p>
          </div>

          <div className="glass-panel-accent p-6 rounded-3xl border border-blue-500/30 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-blue-950 text-cyan-300 border border-blue-800 font-bold">AUSTRALIA OPS</span>
              <span className="text-[10px] text-cyan-300 font-bold uppercase">Regional Office</span>
            </div>
            <h3 className="text-lg font-bold text-white">Regional Operations Hub</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Level 14, 385 Bourke Street, Melbourne VIC 3000. Client relationship desk, ERP consulting & APAC enterprise support.
            </p>
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


