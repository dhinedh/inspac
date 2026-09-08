import React, { useState } from 'react';
import ServicesSection from '../components/ServicesSection';
import ServiceModal from '../components/ServiceModal';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Layers,
  BarChart3,
  ShieldCheck,
  Cloud,
  Code2,
  GitPullRequest,
  Database,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage({ onOpenContact }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tier-1 Enterprise Technology & Advisory Practices</span>
            </div>
            <Link 
              to="/buyers-guide" 
              className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-brand-600/20 border border-brand-500/40 text-xs font-bold text-cyan-300 hover:bg-brand-600 hover:text-white transition-all shadow-md"
            >
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>2026 Enterprise Buyer's Guide</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Our Service Practices
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Modeled after global industry leaders HCLTech and Cognizant (CTS), we provide full-lifecycle digital engineering, multi-cloud DevSecOps, enterprise AI data lakehouses, ERP modernization, and QSA-accredited PCI-DSS 4.0 cybersecurity advisory.
          </p>
        </div>
      </section>

      {/* Main Services Section Grid */}
      <ServicesSection 
        mode="services"
        onSelectService={(service) => setSelectedService(service)}
        onOpenContact={onOpenContact}
      />

      {/* Service Scope Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Enterprise Deliverables Comparison</h2>
            <p className="text-xs sm:text-sm text-slate-400">Comprehensive overview of primary capabilities and business outcomes across our core practices.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300 border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-white font-bold bg-navy-950/80">
                  <th className="p-4">Enterprise Practice</th>
                  <th className="p-4">Primary Objective</th>
                  <th className="p-4">Technology Stack & Standards</th>
                  <th className="p-4">Client Value Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                <tr>
                  <td className="p-4 font-bold text-white flex items-center space-x-2">
                    <Code2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Digital Engineering</span>
                  </td>
                  <td className="p-4">Cloud-native microservices & legacy app modernization</td>
                  <td className="p-4">React, Next.js, Node.js, GraphQL, Kafka</td>
                  <td className="p-4 text-emerald-400 font-medium">70% faster time-to-market & sub-second latency</td>
                </tr>

                <tr>
                  <td className="p-4 font-bold text-white flex items-center space-x-2">
                    <Cloud className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Cloud & DevSecOps</span>
                  </td>
                  <td className="p-4">Multi-cloud IaC automation & Kubernetes scaling</td>
                  <td className="p-4">AWS, Azure, GCP, Terraform, Kubernetes</td>
                  <td className="p-4 text-emerald-400 font-medium">10x deployment frequency & 35% FinOps savings</td>
                </tr>

                <tr>
                  <td className="p-4 font-bold text-white flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>AI & Data Lakehouse</span>
                  </td>
                  <td className="p-4">Governed lakehouses, real-time ETL & Generative AI</td>
                  <td className="p-4">Snowflake, Databricks, BigQuery, dbt, Spark</td>
                  <td className="p-4 text-emerald-400 font-medium">Single source of truth & automated intelligence</td>
                </tr>

                <tr>
                  <td className="p-4 font-bold text-white flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Cybersecurity & GRC</span>
                  </td>
                  <td className="p-4">PCI-DSS 4.0 AOC pass rate & ISO 27001 advisory</td>
                  <td className="p-4">PCI-DSS 4.0, ISO 27001, NIST, Zero Trust</td>
                  <td className="p-4 text-emerald-400 font-medium">100% audit pass rate & zero penalty liabilities</td>
                </tr>

                <tr>
                  <td className="p-4 font-bold text-white flex items-center space-x-2">
                    <Layers className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>ERP & Platforms</span>
                  </td>
                  <td className="p-4">SAP S/4HANA & Oracle Cloud ERP modernization</td>
                  <td className="p-4">SAP S/4HANA, Oracle Cloud, REST Middleware</td>
                  <td className="p-4 text-emerald-400 font-medium">Eliminates silos & 40% lower admin overhead</td>
                </tr>

                <tr>
                  <td className="p-4 font-bold text-white flex items-center space-x-2">
                    <GitPullRequest className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>Intelligent Automation</span>
                  </td>
                  <td className="p-4">Robotic process automation & document processing</td>
                  <td className="p-4">UiPath, Power Automate, OCR, Lean Six Sigma</td>
                  <td className="p-4 text-emerald-400 font-medium">80% error reduction & 5x faster turnaround</td>
                </tr>

                <tr>
                  <td className="p-4 font-bold text-white flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Quality Engineering</span>
                  </td>
                  <td className="p-4">Continuous test automation & load stress testing</td>
                  <td className="p-4">Playwright, Cypress, k6, Chaos Toolkit</td>
                  <td className="p-4 text-emerald-400 font-medium">Zero production escapes & 90% automation</td>
                </tr>

                <tr>
                  <td className="p-4 font-bold text-white flex items-center space-x-2">
                    <Database className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>24/7 Managed Services</span>
                  </td>
                  <td className="p-4">Database HA clustering & round-the-clock NOC/SOC</td>
                  <td className="p-4">Oracle HA, PostgreSQL, Multi-Region DR, L1-L3 Desk</td>
                  <td className="p-4 text-emerald-400 font-medium">99.999% availability & sub-15m SLA response</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pt-4 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-cyan-500 text-white font-bold text-xs shadow-lg shadow-brand-600/30 hover:scale-105 transition-all"
            >
              <span>Request Custom Enterprise Scope Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenContact={onOpenContact}
      />
    </div>
  );
}
