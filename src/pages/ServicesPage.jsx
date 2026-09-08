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
  Cloud
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage({ onOpenContact }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>9 Specialized IT & Advisory Domains</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Our Service Verticals
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore our complete suite of technology consulting, data science engineering, high-availability database management, cloud DevOps automation, and GRC / PCI-DSS compliance advisory.
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Engineering Deliverables Comparison</h2>
            <p className="text-xs sm:text-sm text-slate-400">Overview of primary focus areas across our key service domains.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300 border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-white font-bold bg-navy-950/80">
                  <th className="p-4">Domain</th>
                  <th className="p-4">Primary Objective</th>
                  <th className="p-4">Core Technology Stack</th>
                  <th className="p-4">Client Value Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                <tr>
                  <td className="p-4 font-bold text-white flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4 text-brand-400" />
                    <span>Data & Data Science</span>
                  </td>
                  <td className="p-4">Predictive analytics & modern ETL pipelines</td>
                  <td className="p-4">Python, BigQuery, Snowflake, PowerBI</td>
                  <td className="p-4 text-emerald-400 font-medium">Faster data-driven decision making</td>
                </tr>

                <tr>
                  <td className="p-4 font-bold text-white flex items-center space-x-2">
                    <Cloud className="w-4 h-4 text-cyan-400" />
                    <span>Cloud & DevOps</span>
                  </td>
                  <td className="p-4">CI/CD automation & Kubernetes scaling</td>
                  <td className="p-4">AWS, GCP, Azure, Terraform, Docker</td>
                  <td className="p-4 text-emerald-400 font-medium">10x deployment speed & lower FinOps costs</td>
                </tr>

                <tr>
                  <td className="p-4 font-bold text-white flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-indigo-400" />
                    <span>GRC & PCI-DSS Advisory</span>
                  </td>
                  <td className="p-4">Security controls & audit readiness</td>
                  <td className="p-4">PCI-DSS 4.0, ISO 27001, NIST, PDPA</td>
                  <td className="p-4 text-emerald-400 font-medium">100% AOC pass rate & breach prevention</td>
                </tr>

                <tr>
                  <td className="p-4 font-bold text-white flex items-center space-x-2">
                    <Layers className="w-4 h-4 text-purple-400" />
                    <span>ERP & Databases</span>
                  </td>
                  <td className="p-4">HA clustering & enterprise process integration</td>
                  <td className="p-4">SAP, Oracle, PostgreSQL, MySQL</td>
                  <td className="p-4 text-emerald-400 font-medium">99.999% uptime & unified operations</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pt-4 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-cyan-500 text-white font-bold text-xs shadow-lg shadow-brand-600/30 hover:scale-105 transition-all"
            >
              <span>Request Custom Scope Proposal</span>
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
