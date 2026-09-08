import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  BarChart3, 
  CreditCard, 
  Activity, 
  ShoppingCart, 
  Truck, 
  Landmark, 
  ArrowRight,
  CheckCircle2,
  Globe2,
  Sparkles
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ClientsPage({ onOpenContact }) {
  const industries = [
    {
      icon: CreditCard,
      title: "Banking, Fintech & Payments",
      description: "Delivering PCI-DSS v4.0 compliance advisory, Cardholder Data Environment (CDE) isolation, and high-security payment tokenization pipelines."
    },
    {
      icon: Activity,
      title: "Healthcare & Life Sciences",
      description: "Implementing PDPA & GDPR compliant medical data analytics, patient records database clustering, and cloud security frameworks."
    },
    {
      icon: ShoppingCart,
      title: "Retail & Enterprise E-Commerce",
      description: "ERP systems integration, SAP/Oracle custom extensions, automated inventory reconciliation, and real-time sales dashboards."
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description: "Process re-engineering, workflow automation (RPA), predictive delivery forecasting, and high-availability database replication."
    },
    {
      icon: Landmark,
      title: "Government & Public Sector",
      description: "IT General Controls (ITGC) auditing, cybersecurity architecture reviews, NIST framework compliance, and governance reporting."
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Page Header */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-400">
            <Building2 className="w-3.5 h-3.5" />
            <span>Enterprise Portfolio & Global Engagements</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Our Clients & Industries Served
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Inspac Solutions Pte Ltd partners with enterprises across Singapore, India, and Australia to deliver reliable, scalable, and compliant smart IT solutions.
          </p>
        </div>
      </section>

      {/* Industry Verticals Served Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold text-white">Sectors We Empower</h2>
          <p className="text-xs sm:text-sm text-slate-400">Subject-matter expertise tailored for high-compliance and data-intensive industries.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => {
            const IconComp = ind.icon;
            return (
              <div key={idx} className="glass-panel glass-panel-hover p-8 rounded-3xl border border-slate-800 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/30 text-brand-400 flex items-center justify-center">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{ind.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{ind.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Engagement Models Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Flexible Client Engagement Models</h2>
            <p className="text-xs sm:text-sm text-slate-400">Delivering offshore efficiency combined with Singapore headquarters governance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="p-6 rounded-2xl bg-navy-950/80 border border-slate-800 space-y-2">
              <span className="text-brand-400 font-bold text-sm block">1. Onshore Advisory & GRC</span>
              <p className="leading-relaxed">Direct C-level and senior auditor engagement in Singapore and Australia for GRC, PCI-DSS, and architecture reviews.</p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-950/80 border border-slate-800 space-y-2">
              <span className="text-cyan-400 font-bold text-sm block">2. Offshore Development Center (ODC)</span>
              <p className="leading-relaxed">Dedicated full-stack software development, data engineering, and DevOps teams in India operating under Singapore SLAs.</p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-950/80 border border-slate-800 space-y-2">
              <span className="text-emerald-400 font-bold text-sm block">3. Managed Services & Audits</span>
              <p className="leading-relaxed">24/7 database administration, continuous PCI vulnerability monitoring, and annual compliance audit sign-offs.</p>
            </div>
          </div>

          <div className="pt-4 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-cyan-500 text-white font-bold text-xs shadow-lg shadow-brand-600/30 hover:scale-105 transition-all"
            >
              <span>Discuss Enterprise Client Partnership</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
