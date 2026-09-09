import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  HeartPulse, 
  ShoppingCart, 
  Truck, 
  Building, 
  Radio, 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  ChevronRight,
  TrendingUp,
  Cpu,
  Lock
} from 'lucide-react';

const industriesData = [
  {
    id: "fintech",
    category: "Finance & Health",
    title: "Financial Services & FinTech",
    subtitle: "Core Banking · PCI-DSS 4.0 · High-Availability",
    desc: "End-to-end PCI-DSS v4.0 Attestation of Compliance (AOC), Cardholder Data Environment (CDE) network isolation, and sub-second payment settlement pipelines.",
    icon: Building2,
    tag: "PCI-DSS 4.0 Ready",
    tagColor: "from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=900&q=80",
    metric: "100% Audit Pass Rate",
    features: [
      "Payment Gateway Tokenization",
      "Real-Time Fraud Telemetry",
      "Zero-Downtime DR Replication"
    ]
  },
  {
    id: "healthcare",
    category: "Finance & Health",
    title: "Healthcare & Life Sciences",
    subtitle: "PDPA / HIPAA · Clinical Data · Cloud Security",
    desc: "Strictly compliant clinical data architectures, encrypted electronic patient record (EHR) databases, and high-throughput predictive diagnostics pipelines.",
    icon: HeartPulse,
    tag: "HIPAA & PDPA Compliant",
    tagColor: "from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    metric: "Zero-Trust Data Vault",
    features: [
      "Patient Record Encryption",
      "Clinical BI & Analytics Lakes",
      "Medical Device API Feeds"
    ]
  },
  {
    id: "ecommerce",
    category: "Commerce & Logistics",
    title: "Retail & Enterprise E-Commerce",
    subtitle: "Omnichannel ERP · Cloud Scaling · Predictive BI",
    desc: "High-scale cloud infrastructures auto-scaling for peak flash-sale volumes, bi-directional SAP/Oracle inventory sync, and real-time customer lifetime value analytics.",
    icon: ShoppingCart,
    tag: "High-Scale Traffic",
    tagColor: "from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
    metric: "10x Scalability Elasticity",
    features: [
      "ERP Inventory Synchronization",
      "Sub-Second Cart Latency",
      "Predictive Reorder Modeling"
    ]
  },
  {
    id: "logistics",
    category: "Commerce & Logistics",
    title: "Supply Chain & Logistics",
    subtitle: "RPA Automation · Fleet Telemetry · IoT Pipelines",
    desc: "Process re-engineering and robotic process automation (RPA) for automated customs dispatch, multi-carrier invoice reconciliation, and real-time fleet GPS pipelines.",
    icon: Truck,
    tag: "Workflow RPA",
    tagColor: "from-blue-500/20 to-indigo-500/20 text-blue-300 border-blue-500/30",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    metric: "40% Lower Op Overhead",
    features: [
      "Real-Time Freight Telemetry",
      "Automated Carrier Settlement",
      "Warehouse Bottleneck BI"
    ]
  },
  {
    id: "public-sector",
    category: "Gov & Telecom",
    title: "Government & Public Sector",
    subtitle: "ISO 27001 · ITGC Controls · Data Sovereignty",
    desc: "Rigorous IT General Controls (ITGC) auditing, regional data sovereignty cloud residency, and ISO 27001 / NIST framework compliance for public agencies.",
    icon: Building,
    tag: "ISO 27001 / NIST",
    tagColor: "from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    metric: "Strict Data Sovereignty",
    features: [
      "ITGC Regulatory Testing",
      "Citizen Portal Security",
      "Air-Gapped Cloud Enclaves"
    ]
  },
  {
    id: "telecom",
    category: "Gov & Telecom",
    title: "Telecom & High Technology",
    subtitle: "24/7 Managed SRE · Multi-Cloud · Microservices",
    desc: "Always-on multi-cloud Kubernetes clusters, automated DevSecOps CI/CD delivery pipelines, and low-latency distributed database clustering across APAC.",
    icon: Radio,
    tag: "99.999% Availability",
    tagColor: "from-cyan-500/20 to-emerald-500/20 text-cyan-300 border-cyan-500/30",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    metric: "Sub-Second Query SLA",
    features: [
      "24/7 SRE NOC Monitoring",
      "Multi-Region Cloud Mesh",
      "High-Throughput Message Queues"
    ]
  }
];

export default function IndustriesSection({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Finance & Health', 'Commerce & Logistics', 'Gov & Telecom'];

  const filteredIndustries = activeCategory === 'All'
    ? industriesData
    : industriesData.filter(item => item.category === activeCategory);

  return (
    <section id="industries" className="py-24 relative bg-[#00587c] text-white overflow-hidden scroll-mt-20">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-4">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950/90 border border-blue-800/80 text-xs font-bold text-cyan-300 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Industries We Serve</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
              Engineered For <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
                High-Impact Sectors
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We engineer mission-critical cloud backbones, compliant data lakes, and automated governance frameworks tailored to rigorous regulatory standards.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center">
            <div className="inline-flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-blue-950/80 border border-blue-900/80 backdrop-blur-md shadow-xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/25'
                      : 'text-slate-400 hover:text-white hover:bg-blue-900/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredIndustries.map((item) => {
            const IconComponent = item.icon;

            return (
              <div
                key={item.id}
                className="group relative rounded-[28px] overflow-hidden border border-blue-900/40 bg-gradient-to-b from-[#081232]/80 to-[#03081e]/90 hover:border-cyan-500/50 transition-all duration-500 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1.5"
              >
                {/* Background Image with Dark Vignette */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale contrast-125 opacity-20 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03081e] via-[#050e2c]/95 to-[#081232]/80" />
                </div>

                {/* Card Content Top & Body */}
                <div className="relative z-10 p-7 sm:p-8 space-y-6">
                  
                  {/* Top Bar: Icon & Compliance Tag */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-13 h-13 rounded-2xl bg-blue-950/90 border border-blue-800 text-cyan-400 flex items-center justify-center p-3 shadow-inner group-hover:scale-110 group-hover:border-cyan-400 group-hover:text-white group-hover:bg-blue-600 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className={`text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border bg-gradient-to-r backdrop-blur-sm ${item.tagColor}`}>
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-cyan-400/90 tracking-wide">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2 pt-2 border-t border-blue-900/50">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Card Footer Action */}
                <div className="relative z-10 px-7 py-5 sm:px-8 border-t border-blue-900/60 bg-blue-950/40 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 text-[11px] font-mono text-emerald-400 font-semibold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{item.metric}</span>
                  </div>

                  <Link
                    to="/clients"
                    className="text-xs font-bold text-cyan-300 hover:text-white flex items-center space-x-1.5 group/btn transition-colors"
                  >
                    <span>View Sector Case</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950/80 via-blue-900/40 to-blue-950/80 border border-blue-800/60 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span>Have a specialized enterprise compliance or architectural requirement?</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Our multidisciplinary architects in Singapore, India, and Australia design tailored solutions for custom industry environments.
            </p>
          </div>

          <button
            onClick={() => onOpenContact && onOpenContact("Industry Advisory Consultation")}
            className="shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/25 hover:scale-105 transition-all flex items-center space-x-2"
          >
            <span>Speak with a Sector Architect</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
