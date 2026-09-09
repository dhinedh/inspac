import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  Award, 
  Lock, 
  ArrowRight, 
  Building2, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  Cpu,
  Sparkles
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Footer({ onOpenContact }) {
  return (
    <footer className="bg-[#020617] text-slate-400 text-xs border-t border-slate-800/80 font-sans relative overflow-hidden">
      
      {/* Decorative Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Pre-Footer Corporate Executive CTA Banner */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-slate-950 via-[#00384f] to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Enterprise Transformation & Compliance</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Ready to accelerate your Digital & Compliance Roadmap?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect with our Singapore executive consultants and global solution architects to scope your PCI-DSS 4.0, Cloud, or ERP initiatives.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 shrink-0">
              <button
                onClick={() => onOpenContact ? onOpenContact('Executive Inquiry') : null}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs shadow-lg shadow-blue-500/20 transition-all flex items-center space-x-2 cursor-pointer"
              >
                <span>Schedule Executive Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <Link
                to="/compliance"
                className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-cyan-400/50 text-slate-200 hover:text-white text-xs font-semibold transition-all flex items-center space-x-2"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>PCI-DSS Assessment</span>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Corporate Metadata Column (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6 text-left pr-0 lg:pr-6">
            
            {/* Logo */}
            <Link to="/" className="inline-flex items-center space-x-3.5 group">
              <img 
                src="/inspac-logo.png" 
                alt="Inspac Solutions Pte Ltd Logo" 
                className="w-12 h-12 object-contain group-hover:scale-105 transition-transform drop-shadow-lg"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight text-white leading-none font-sans">
                  Inspac Solutions
                </span>
                <span className="text-[10px] font-bold tracking-[0.25em] text-cyan-400 uppercase leading-tight mt-1">
                  PTE LTD · SINGAPORE
                </span>
              </div>
            </Link>

            <p className="text-slate-300 leading-relaxed text-xs max-w-md">
              Inspac Solutions Pte Ltd is a premier global technology consulting enterprise delivering enterprise cloud architecture, advanced data science, custom ERP implementations, GRC frameworks, and PCI-DSS compliance advisory.
            </p>

            {/* Corporate Registration & Badges */}
            <div className="space-y-3 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">Inspac Solutions Pte Ltd</span>
                  <span className="px-2 py-0.5 rounded bg-blue-950 border border-blue-800 text-[10px] font-mono text-cyan-300 font-semibold">
                    REG. UEN: {companyInfo.uen}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-[11px] text-slate-300">
                  <Building2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Global Nodes: <strong className="text-slate-100">Singapore (HQ) • India (R&D) • Australia (Ops)</strong></span>
                </div>
              </div>

              {/* Compliance & Certification Badges Strip */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-semibold text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>PCI-DSS v4.0 Qualified</span>
                </span>

                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-semibold text-cyan-300">
                  <Award className="w-3 h-3" />
                  <span>ISO 27001 Process</span>
                </span>

                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-[10px] font-semibold text-blue-300">
                  <Cpu className="w-3 h-3" />
                  <span>Multi-Cloud Partner</span>
                </span>
              </div>
            </div>

          </div>

          {/* Column 2: Service Verticals (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3.5 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Service Verticals</span>
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/services" className="hover:text-cyan-300 transition-colors flex items-center space-x-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  <span>Digital Engineering</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-300 transition-colors flex items-center space-x-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  <span>Cloud & DevSecOps</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-300 transition-colors flex items-center space-x-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  <span>Enterprise AI & Data</span>
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="hover:text-cyan-300 transition-colors flex items-center space-x-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  <span>Cybersecurity & PCI-DSS</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-300 transition-colors flex items-center space-x-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  <span>Enterprise ERP Platforms</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-300 transition-colors flex items-center space-x-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  <span>Intelligent Automation & RPA</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-300 transition-colors flex items-center space-x-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  <span>Quality Engineering</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-300 transition-colors flex items-center space-x-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  <span>24/7 Managed Services</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation & Company (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3.5 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Company & Scope</span>
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="hover:text-cyan-300 transition-colors flex items-center space-x-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  <span>Home Overview</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-300 transition-colors flex items-center space-x-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  <span>About Inspac</span>
                </Link>
              </li>
              <li>
                <Link to="/clients" className="hover:text-cyan-300 transition-colors flex items-center space-x-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  <span>Clients & Industries</span>
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="hover:text-cyan-300 transition-colors flex items-center space-x-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  <span>PCI Compliance Portal</span>
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-cyan-300 transition-colors flex items-center space-x-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  <span>Enterprise Careers</span>
                </Link>
              </li>
              <li>
                <Link to="/buyers-guide" className="hover:text-cyan-300 transition-colors flex items-center space-x-1.5 group text-cyan-400 font-semibold">
                  <ChevronRight className="w-3 h-3 text-cyan-400 group-hover:text-white transition-colors" />
                  <span>2026 Enterprise Buyer's Guide</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-300 transition-colors flex items-center space-x-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  <span>Global Contacts</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Global HQ Contact (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3.5 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Singapore HQ & Contacts</span>
            </h4>
            
            <div className="space-y-3 text-slate-300">
              <p className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span className="leading-relaxed text-xs">
                  111 North Bridge Road, #23-05 Peninsula Plaza, Singapore 179098
                </span>
              </p>

              <p className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-mono text-xs text-slate-200">+65 9827 1155 / +65 9888 1521</span>
              </p>

              <p className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a 
                  href={`mailto:${companyInfo.emails.marketing}`} 
                  className="hover:text-cyan-300 text-cyan-400 transition-colors font-mono text-xs"
                >
                  {companyInfo.emails.marketing}
                </a>
              </p>

              <p className="flex items-center space-x-2.5 pt-1">
                <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                <a 
                  href="https://www.inspacsolutions.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white text-slate-200 flex items-center space-x-1 font-mono text-xs"
                >
                  <span>www.inspacsolutions.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance Terms */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div className="flex flex-wrap items-center gap-2">
            <span>© {new Date().getFullYear()} Inspac Solutions Pte Ltd.</span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="text-slate-400">Singapore UEN: <strong className="text-slate-300 font-mono">{companyInfo.uen}</strong></span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
            <Link to="/contact" className="hover:text-cyan-300 transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-cyan-300 transition-colors">Terms of Service</Link>
            <Link to="/compliance" className="hover:text-cyan-300 transition-colors">Security & Trust Center</Link>
            <Link to="/compliance" className="hover:text-cyan-300 transition-colors">PCI-DSS AOC Statement</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}


