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
  const [activeCapabilityTab, setActiveCapabilityTab] = useState('data');
  const [selectedService, setSelectedService] = useState(null);

  const capabilities = {
    data: {
      title: "Data & Advanced Data Science",
      subtitle: "Predictive Analytics, Data Lakes & Executive BI Dashboards",
      description: "Transform raw enterprise data into predictive forecasting models, real-time analytics, and clean ETL data pipelines built on BigQuery, Databricks, and Snowflake.",
      features: [
        "Real-Time Business Intelligence & Automated Dashboards",
        "Predictive Customer Analytics & Machine Learning Models",
        "BigQuery, Snowflake & Databricks Modern Data Lakes",
        "Data Governance, Lineage Mapping & Schema Quality",
        "Sub-Second High-Throughput ETL / ELT Pipeline Sync"
      ],
      metrics: "Sub-second query response & 40% reduction in reporting latency."
    },
    cloud: {
      title: "Cloud Engineering & DevOps Automation",
      subtitle: "Multi-Cloud Strategy, Kubernetes & Terraform IaC",
      description: "Accelerate software delivery velocity with automated CI/CD infrastructure, cloud-native containerization (Docker/Kubernetes), and multi-cloud optimization across AWS, GCP, and Azure.",
      features: [
        "Infrastructure as Code (IaC) via Terraform & CloudFormation",
        "Automated DevSecOps CI/CD Pipelines (GitHub Actions, Jenkins)",
        "Enterprise Containerization & Kubernetes Cluster Scaling",
        "Multi-Cloud Architecture & Cloud FinOps Optimization",
        "Zero-Downtime Migration & Auto-Scaling Rules"
      ],
      metrics: "10x faster release velocity & optimized cloud infrastructure spend."
    },
    erp: {
      title: "ERP & Enterprise Business Solutions",
      subtitle: "SAP, Oracle & Custom Workflow Integration",
      description: "Unify finance, supply chain, HR, and client services with tailored ERP implementations, cross-module workflow synchronization, and custom API middleware connectors.",
      features: [
        "SAP & Oracle ERP Enterprise Module Engineering",
        "Cross-Departmental Real-Time Financial & Operational Reporting",
        "Supply Chain & Inventory Workflow Automation",
        "Legacy ERP Modernization & Migration",
        "API Middleware Connectors & Webhook Integration"
      ],
      metrics: "Eliminates operational silos & lowers administrative overhead by 35%."
    },
    grc: {
      title: "GRC & PCI-DSS 4.0 Compliance Advisory",
      subtitle: "ISO 27001, ITGC Testing & Cardholder Data Security",
      description: "Align your IT operations with international standards, ISO 27001, NIST frameworks, and PCI-DSS 4.0 standards. Protect cardholder data environments (CDE) and ensure audit readiness.",
      features: [
        "PCI-DSS v4.0 Gap Analysis & Scope Reduction Advisory",
        "Cardholder Data Environment (CDE) Network Segmentation",
        "ISO 27001 & NIST Security Control Mapping",
        "IT General Controls (ITGC) & Third-Party Vendor Audits",
        "Attestation of Compliance (AOC) Support & QSA Audit Prep"
      ],
      metrics: "100% audit pass rate across PCI-DSS & ISO 27001 reviews."
    }
  };

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
      <section className="py-20 sm:py-28 bg-[#151515] text-[#ece3d4] relative overflow-hidden font-serif border-y border-[#282420]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          
          {/* Top Header Grid: 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start justify-between">
            
            {/* Left Column: Huge 08 Number + Line + Practice Areas Heading */}
            <div className="lg:col-span-6 space-y-2">
              <span 
                className="text-7xl sm:text-8xl lg:text-[110px] font-serif text-[#f3ebd9] font-normal leading-none tracking-tight block select-none"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                08
              </span>

              <div className="w-full max-w-[320px] sm:max-w-[380px] h-[1px] bg-[#3a342d] my-4" />

              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#f3ebd9] font-normal tracking-normal"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Practice Areas
              </h2>
            </div>

            {/* Right Column: Editorial Paragraph */}
            <div className="lg:col-span-6 lg:pt-6">
              <p 
                className="text-xs sm:text-sm lg:text-[15px] text-[#b8b0a3] leading-[1.85] font-serif font-normal max-w-xl"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                We have carefully chosen our areas of practice and always aim to attend to our client's most sensitive and critical issues. Every matter is addressed by teams that function as a system, generally including two or more specialist areas and always supported by other areas of knowledge.
              </p>
            </div>

          </div>

          {/* 4-Column High-Contrast Monochrome Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Card 1: Data Science */}
            <div 
              onClick={() => setActiveCapabilityTab('data')}
              className="group cursor-pointer space-y-3 select-none"
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-[#202020] relative">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80" 
                  alt="Data & Advanced Data Science" 
                  className={`w-full h-full object-cover grayscale contrast-125 brightness-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:contrast-100 group-hover:brightness-100 ${
                    activeCapabilityTab === 'data' ? 'scale-105 contrast-100 brightness-100 ring-2 ring-amber-200/50' : ''
                  }`}
                />
              </div>
              <h3 
                className={`text-xs sm:text-sm font-serif transition-colors duration-200 leading-snug ${
                  activeCapabilityTab === 'data' ? 'text-amber-200 font-semibold' : 'text-[#ece3d4] group-hover:text-amber-200'
                }`}
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Competition and Regulation (Data & AI)
              </h3>
            </div>

            {/* Card 2: Cloud DevOps */}
            <div 
              onClick={() => setActiveCapabilityTab('cloud')}
              className="group cursor-pointer space-y-3 select-none"
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-[#202020] relative">
                <img 
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80" 
                  alt="Cloud Engineering & DevOps" 
                  className={`w-full h-full object-cover grayscale contrast-125 brightness-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:contrast-100 group-hover:brightness-100 ${
                    activeCapabilityTab === 'cloud' ? 'scale-105 contrast-100 brightness-100 ring-2 ring-amber-200/50' : ''
                  }`}
                />
              </div>
              <h3 
                className={`text-xs sm:text-sm font-serif transition-colors duration-200 leading-snug ${
                  activeCapabilityTab === 'cloud' ? 'text-amber-200 font-semibold' : 'text-[#ece3d4] group-hover:text-amber-200'
                }`}
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Environment and Natural Resources (Cloud Infrastructure)
              </h3>
            </div>

            {/* Card 3: GRC & PCI-DSS */}
            <div 
              onClick={() => setActiveCapabilityTab('grc')}
              className="group cursor-pointer space-y-3 select-none"
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-[#202020] relative">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
                  alt="PCI-DSS 4.0 & Cyber Governance" 
                  className={`w-full h-full object-cover grayscale contrast-125 brightness-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:contrast-100 group-hover:brightness-100 ${
                    activeCapabilityTab === 'grc' ? 'scale-105 contrast-100 brightness-100 ring-2 ring-amber-200/50' : ''
                  }`}
                />
              </div>
              <h3 
                className={`text-xs sm:text-sm font-serif transition-colors duration-200 leading-snug ${
                  activeCapabilityTab === 'grc' ? 'text-amber-200 font-semibold' : 'text-[#ece3d4] group-hover:text-amber-200'
                }`}
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Public Law and Government (GRC & PCI-DSS 4.0)
              </h3>
            </div>

            {/* Card 4: Enterprise Systems & ERP */}
            <div 
              onClick={() => setActiveCapabilityTab('erp')}
              className="group cursor-pointer space-y-3 select-none"
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-[#202020] relative">
                <img 
                  src="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80" 
                  alt="Enterprise Systems & ERP" 
                  className={`w-full h-full object-cover grayscale contrast-125 brightness-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:contrast-100 group-hover:brightness-100 ${
                    activeCapabilityTab === 'erp' ? 'scale-105 contrast-100 brightness-100 ring-2 ring-amber-200/50' : ''
                  }`}
                />
              </div>
              <h3 
                className={`text-xs sm:text-sm font-serif transition-colors duration-200 leading-snug ${
                  activeCapabilityTab === 'erp' ? 'text-amber-200 font-semibold' : 'text-[#ece3d4] group-hover:text-amber-200'
                }`}
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Telecommunications, Media & Technology (TMT & ERP)
              </h3>
            </div>

          </div>

          {/* Expanded Capability Detail Drawer (When clicked) */}
          {capabilities[activeCapabilityTab] && (
            <div className="mt-10 p-6 sm:p-10 rounded-2xl bg-[#1e1e1e] border border-[#38322a] space-y-6 animate-fadeIn">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[#342e26]">
                <div>
                  <span className="text-xs font-mono font-semibold text-amber-300/80 uppercase tracking-widest block mb-1">
                    {capabilities[activeCapabilityTab].subtitle}
                  </span>
                  <h3 
                    className="text-2xl sm:text-3xl font-serif text-[#f3ebd9]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {capabilities[activeCapabilityTab].title}
                  </h3>
                </div>

                <div className="px-4 py-2 rounded-lg bg-[#28241e] border border-[#443c32] text-xs font-mono text-amber-200">
                  Result: {capabilities[activeCapabilityTab].metrics}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#c8c0b3] leading-relaxed font-sans font-normal">
                {capabilities[activeCapabilityTab].description}
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                {capabilities[activeCapabilityTab].features.map((feat, i) => (
                  <div key={i} className="p-3 rounded-lg bg-[#24201a] border border-[#383028] flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs font-sans text-[#e6decb]">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4 font-sans">
                <Link
                  to="/services"
                  className="px-6 py-3 rounded-lg bg-[#ece3d4] text-[#141414] font-bold text-xs hover:bg-white transition-all flex items-center space-x-2 shadow-md"
                >
                  <span>Explore Full Specialization Scope</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <button
                  onClick={() => onOpenContact(`Inquiry: ${capabilities[activeCapabilityTab].title}`)}
                  className="px-6 py-3 rounded-lg bg-[#28241e] border border-[#443c32] text-[#ece3d4] hover:text-white hover:border-amber-200/50 text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>Schedule Consultation</span>
                </button>
              </div>
            </div>
          )}

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


