import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Globe, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Footer() {
  return (
    <footer className="bg-[#00051e] border-t border-blue-900/60 text-slate-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-blue-950">
          
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <Link to="/" className="flex items-center space-x-3.5 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-500 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <Shield className="w-5.5 h-5.5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white leading-none font-sans">
                  inspac
                </span>
                <span className="text-[10px] font-extrabold tracking-[0.28em] text-cyan-300 uppercase leading-tight mt-0.5">
                  SOLUTIONS
                </span>
              </div>
            </Link>

            <p className="text-slate-400 leading-relaxed max-w-sm text-xs">
              Inspac Solutions Pte Ltd is a global technology and consulting company delivering innovative IT solutions, cloud & DevOps, data science, ERP, GRC frameworks, and PCI-DSS compliance advisory.
            </p>

            <div className="space-y-1 text-slate-300 pt-1">
              <p className="font-bold text-white">Inspac Solutions Pte Ltd</p>
              <p>Singapore Reg. UEN: <strong className="text-cyan-300 font-mono">{companyInfo.uen}</strong></p>
              <p>Global Operating Nodes: <strong className="text-slate-200">Singapore • India • Australia</strong></p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-cyan-300 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-cyan-300 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-cyan-300 transition-colors">Services Verticals</Link></li>
              <li><Link to="/clients" className="hover:text-cyan-300 transition-colors">Industries & Clients</Link></li>
              <li><Link to="/compliance" className="hover:text-cyan-300 transition-colors">PCI-DSS Assessment</Link></li>
              <li><Link to="/training" className="hover:text-cyan-300 transition-colors">Corporate Training</Link></li>
              <li><Link to="/careers" className="hover:text-cyan-300 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-300 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-3 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Service Verticals</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-cyan-300 transition-colors">Data & Data Science</Link></li>
              <li><Link to="/services" className="hover:text-cyan-300 transition-colors">Database Solutions</Link></li>
              <li><Link to="/services" className="hover:text-cyan-300 transition-colors">ERP Solutions</Link></li>
              <li><Link to="/services" className="hover:text-cyan-300 transition-colors">Cloud & DevOps</Link></li>
              <li><Link to="/compliance" className="hover:text-cyan-300 transition-colors">GRC & Auditing</Link></li>
              <li><Link to="/compliance" className="hover:text-cyan-300 transition-colors">PCI-DSS Compliance</Link></li>
              <li><Link to="/services" className="hover:text-cyan-300 transition-colors">Custom Web Engineering</Link></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="space-y-3 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Singapore HQ</h4>
            <div className="space-y-2.5 text-slate-300">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>111 North Bridge Road, #23-05 Peninsula Plaza, Singapore 179098</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+65 98271155 / +65 98881521</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${companyInfo.emails.marketing}`} className="hover:text-cyan-300 text-cyan-300 transition-colors">
                  {companyInfo.emails.marketing}
                </a>
              </p>
              <p className="flex items-center space-x-2 pt-1">
                <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="https://www.inspacsolutions.com" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center space-x-1">
                  <span>www.inspacsolutions.com</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Inspac Solutions Pte Ltd (UEN: {companyInfo.uen}). All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link to="/compliance" className="hover:text-slate-300 transition-colors">Security Disclosure</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

