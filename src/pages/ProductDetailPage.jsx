import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { productsData } from '../data/productsData';
import { 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft,
  Sparkles, 
  CheckCircle2, 
  Shield, 
  Zap, 
  Globe, 
  Layers, 
  Database, 
  Clock, 
  PhoneCall, 
  ExternalLink,
  ChevronDown,
  ArrowLeft,
  Users,
  CreditCard,
  Headphones,
  UserCheck,
  BarChart2,
  Code2,
  ShieldCheck,
  GitBranch,
  Lock,
  Cpu,
  Check,
  X,
  Share2,
  Workflow,
  TrendingUp,
  FileText,
  Smartphone,
  Server,
  Star,
  Activity,
  Sliders
} from 'lucide-react';

// Product Icon mapping
const productIcons = {
  'pulse-crm': Users,
  'books-finance': CreditCard,
  'desk-support': Headphones,
  'people-hrms': UserCheck,
  'analytics-bi': BarChart2,
  'creator-studio': Code2,
  'vault-directory': ShieldCheck,
  'flow-automation': GitBranch,
};

// Custom interactive vector illustrations tailored for each product
const productIllustrations = {
  'pulse-crm': (
    <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-2xl select-none">
      <defs>
        <linearGradient id="crmBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="dealBlue" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
      {/* Window Chrome */}
      <rect x="10" y="10" width="380" height="220" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
      <path d="M 10 38 L 390 38" stroke="#f1f5f9" strokeWidth="2" />
      <circle cx="28" cy="24" r="4" fill="#ef4444" />
      <circle cx="42" cy="24" r="4" fill="#f59e0b" />
      <circle cx="56" cy="24" r="4" fill="#10b981" />
      <text x="75" y="28" fill="#64748b" fontSize="10" fontWeight="bold" fontFamily="sans-serif">PulseCRM Enterprise Sales Pipeline Cloud</text>
      <rect x="310" y="18" width="68" height="14" rx="4" fill="#dbeafe" />
      <text x="316" y="28" fill="#1d4ed8" fontSize="8" fontWeight="bold" fontFamily="sans-serif">● LIVE PIPELINE</text>

      {/* Kanban Columns */}
      {/* Col 1 */}
      <rect x="22" y="50" width="110" height="165" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
      <text x="32" y="66" fill="#475569" fontSize="9" fontWeight="bold" fontFamily="sans-serif">QUALIFIED STAGE (6)</text>
      <rect x="30" y="74" width="94" height="42" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <rect x="38" y="82" width="50" height="5" rx="2" fill="#3b82f6" />
      <rect x="38" y="91" width="70" height="4" rx="2" fill="#cbd5e1" />
      <text x="38" y="107" fill="#1e40af" fontSize="10" fontWeight="bold" fontFamily="sans-serif">$65,000</text>

      <rect x="30" y="122" width="94" height="42" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <rect x="38" y="130" width="45" height="5" rx="2" fill="#0284c7" />
      <rect x="38" y="139" width="60" height="4" rx="2" fill="#cbd5e1" />
      <text x="38" y="155" fill="#0369a1" fontSize="10" fontWeight="bold" fontFamily="sans-serif">$38,200</text>

      {/* Col 2 */}
      <rect x="142" y="50" width="110" height="165" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
      <text x="152" y="66" fill="#475569" fontSize="9" fontWeight="bold" fontFamily="sans-serif">PROPOSAL SENT (4)</text>
      <rect x="150" y="74" width="94" height="50" rx="6" fill="#ffffff" stroke="#93c5fd" strokeWidth="1.5" />
      <rect x="158" y="82" width="55" height="5" rx="2" fill="#2563eb" />
      <rect x="158" y="91" width="65" height="4" rx="2" fill="#94a3b8" />
      <text x="158" y="108" fill="#1d4ed8" fontSize="12" fontWeight="black" fontFamily="sans-serif">$145,000</text>
      <rect x="158" y="113" width="36" height="4" rx="2" fill="#10b981" />

      {/* Col 3 */}
      <rect x="262" y="50" width="116" height="165" rx="8" fill="#f0fdf4" stroke="#86efac" strokeWidth="1.2" />
      <text x="272" y="66" fill="#166534" fontSize="9" fontWeight="bold" fontFamily="sans-serif">WON / CLOSED (12)</text>
      <rect x="270" y="74" width="100" height="50" rx="6" fill="#ffffff" stroke="#86efac" strokeWidth="1.5" />
      <circle cx="286" cy="94" r="8" fill="#22c55e" />
      <path d="M 283 94 L 285 96 L 290 91" stroke="#ffffff" strokeWidth="2" fill="none" />
      <text x="300" y="92" fill="#14532d" fontSize="11" fontWeight="bold" fontFamily="sans-serif">$280,000</text>
      <text x="300" y="104" fill="#16a34a" fontSize="8" fontWeight="bold" fontFamily="sans-serif">APPROVED ✓</text>
    </svg>
  ),
  'books-finance': (
    <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-2xl select-none">
      <rect x="10" y="10" width="380" height="220" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
      <path d="M 10 38 L 390 38" stroke="#f1f5f9" strokeWidth="2" />
      <circle cx="28" cy="24" r="4" fill="#ef4444" />
      <circle cx="42" cy="24" r="4" fill="#f59e0b" />
      <circle cx="56" cy="24" r="4" fill="#10b981" />
      <text x="75" y="28" fill="#64748b" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Inspac Books & Finance Suite — Automated Tax & General Ledger</text>
      {/* Left Invoice View */}
      <g transform="translate(25, 48)">
        <rect x="0" y="0" width="190" height="168" rx="8" fill="#ffffff" stroke="#a7f3d0" strokeWidth="1.5" />
        <rect x="16" y="16" width="60" height="8" rx="3" fill="#059669" />
        <text x="16" y="38" fill="#065f46" fontSize="10" fontWeight="bold" fontFamily="sans-serif">TAX INVOICE #SG-2026-09</text>
        <line x1="16" y1="46" x2="174" y2="46" stroke="#e2e8f0" strokeWidth="1.5" />
        <rect x="16" y="58" width="90" height="6" rx="2" fill="#64748b" />
        <text x="135" y="64" fill="#0f172a" fontSize="10" fontWeight="bold" fontFamily="sans-serif">$12,450</text>
        <rect x="16" y="74" width="80" height="6" rx="2" fill="#94a3b8" />
        <text x="135" y="80" fill="#0f172a" fontSize="10" fontWeight="bold" fontFamily="sans-serif">$8,200</text>
        <line x1="16" y1="95" x2="174" y2="95" stroke="#e2e8f0" strokeWidth="1.5" />
        <text x="16" y="112" fill="#047857" fontSize="9" fontWeight="bold" fontFamily="sans-serif">GST 9.0% IRAS Auto-Calc: $1,858.50</text>
        <text x="16" y="132" fill="#0f172a" fontSize="13" fontWeight="black" fontFamily="sans-serif">TOTAL: $22,508.50 SGD</text>
        <g transform="translate(90, 116) rotate(-8)">
          <rect x="0" y="0" width="76" height="26" rx="5" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.8" />
          <text x="16" y="18" fill="#059669" fontSize="11" fontWeight="black" fontFamily="sans-serif">PAID INVOICENOW</text>
        </g>
      </g>
      {/* Right Analytics Card */}
      <g transform="translate(230, 48)">
        <rect x="0" y="0" width="145" height="168" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.2" />
        <text x="16" y="24" fill="#475569" fontSize="9" fontWeight="bold" fontFamily="sans-serif">REAL-TIME CASHFLOW</text>
        <text x="16" y="46" fill="#059669" fontSize="18" fontWeight="black" fontFamily="sans-serif">+58.4%</text>
        <text x="16" y="60" fill="#64748b" fontSize="8" fontFamily="sans-serif">Working Capital vs Prior Period</text>
        <path d="M 16 125 Q 45 105 75 90 T 130 70" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
        <rect x="16" y="140" width="113" height="16" rx="4" fill="#d1fae5" />
        <text x="24" y="152" fill="#065f46" fontSize="8" fontWeight="bold" fontFamily="sans-serif">IRAS E-FILE READY ✓</text>
      </g>
    </svg>
  ),
  'desk-support': (
    <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-2xl select-none">
      <rect x="10" y="10" width="380" height="220" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
      <path d="M 10 38 L 390 38" stroke="#f1f5f9" strokeWidth="2" />
      <circle cx="28" cy="24" r="4" fill="#ef4444" />
      <circle cx="42" cy="24" r="4" fill="#f59e0b" />
      <circle cx="56" cy="24" r="4" fill="#10b981" />
      <text x="75" y="28" fill="#64748b" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Inspac Desk Omnichannel Service Desk & SLA Console</text>
      {/* Top Banner */}
      <rect x="22" y="48" width="356" height="30" rx="6" fill="#581c87" />
      <circle cx="40" cy="63" r="6" fill="#c084fc" />
      <text x="54" y="67" fill="#f3e8ff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Global Enterprise Queue · SLA Adherence: 99.8%</text>
      {/* Ticket 1 */}
      <g transform="translate(22, 86)">
        <rect x="0" y="0" width="356" height="38" rx="6" fill="#faf5ff" stroke="#d8b4fe" strokeWidth="1" />
        <circle cx="20" cy="19" r="7" fill="#ef4444" />
        <text x="36" y="17" fill="#1e1b4b" fontSize="9.5" fontWeight="bold" fontFamily="sans-serif">#TCK-489: PCI-DSS Firewall Segmentation Rule Verification</text>
        <text x="36" y="29" fill="#6b21a8" fontSize="8" fontFamily="sans-serif">Assigned to: Lead SecOps Engineer · Response Due in 18 mins</text>
        <rect x="270" y="11" width="74" height="16" rx="4" fill="#fee2e2" />
        <text x="278" y="23" fill="#b91c1c" fontSize="8" fontWeight="bold" fontFamily="sans-serif">HIGH PRIORITY</text>
      </g>
      {/* Ticket 2 */}
      <g transform="translate(22, 130)">
        <rect x="0" y="0" width="356" height="38" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
        <circle cx="20" cy="19" r="7" fill="#3b82f6" />
        <text x="36" y="17" fill="#1e1b4b" fontSize="9.5" fontWeight="bold" fontFamily="sans-serif">#TCK-490: Snowflake Lakehouse Ingestion Latency Diagnostic</text>
        <text x="36" y="29" fill="#64748b" fontSize="8" fontFamily="sans-serif">Assigned to: Senior Data Engineer · Solution Drafted via AI</text>
        <rect x="270" y="11" width="74" height="16" rx="4" fill="#dbeafe" />
        <text x="281" y="23" fill="#1d4ed8" fontSize="8" fontWeight="bold" fontFamily="sans-serif">IN PROGRESS</text>
      </g>
      {/* Ticket 3 */}
      <g transform="translate(22, 174)">
        <rect x="0" y="0" width="356" height="38" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
        <circle cx="20" cy="19" r="7" fill="#22c55e" />
        <text x="36" y="17" fill="#1e1b4b" fontSize="9.5" fontWeight="bold" fontFamily="sans-serif">#TCK-491: SAP S/4HANA Middleware Token Auto-Refresh</text>
        <text x="36" y="29" fill="#64748b" fontSize="8" fontFamily="sans-serif">Client Signoff CSAT: 5/5 Stars · Completed within 8 mins</text>
        <rect x="270" y="11" width="74" height="16" rx="4" fill="#dcfce7" />
        <text x="286" y="23" fill="#15803d" fontSize="8" fontWeight="bold" fontFamily="sans-serif">RESOLVED ✓</text>
      </g>
    </svg>
  ),
  'people-hrms': (
    <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-2xl select-none">
      <rect x="10" y="10" width="380" height="220" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
      <path d="M 10 38 L 390 38" stroke="#f1f5f9" strokeWidth="2" />
      <circle cx="28" cy="24" r="4" fill="#ef4444" />
      <circle cx="42" cy="24" r="4" fill="#f59e0b" />
      <circle cx="56" cy="24" r="4" fill="#10b981" />
      <text x="75" y="28" fill="#64748b" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Inspac People HRMS — Workforce Directory, Biometrics & Payroll</text>
      {/* People cards */}
      <g transform="translate(24, 52)">
        <rect x="0" y="0" width="168" height="65" rx="8" fill="#fff7ed" stroke="#fdba74" strokeWidth="1" />
        <circle cx="32" cy="32" r="18" fill="#ea580c" />
        <circle cx="32" cy="26" r="7" fill="#ffffff" />
        <path d="M 20 42 C 20 36 44 36 44 42 Z" fill="#ffffff" />
        <text x="60" y="26" fill="#431407" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Sarah Lin</text>
        <text x="60" y="38" fill="#9a3412" fontSize="8" fontFamily="sans-serif">Lead Cloud Architect</text>
        <rect x="60" y="44" width="72" height="10" rx="3" fill="#22c55e" />
        <text x="68" y="52" fill="#ffffff" fontSize="7" fontWeight="bold" fontFamily="sans-serif">ACTIVE · SINGAPORE</text>
      </g>
      <g transform="translate(208, 52)">
        <rect x="0" y="0" width="168" height="65" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
        <circle cx="32" cy="32" r="18" fill="#0284c7" />
        <circle cx="32" cy="26" r="7" fill="#ffffff" />
        <path d="M 20 42 C 20 36 44 36 44 42 Z" fill="#ffffff" />
        <text x="60" y="26" fill="#0f172a" fontSize="10" fontWeight="bold" fontFamily="sans-serif">David Tan</text>
        <text x="60" y="38" fill="#64748b" fontSize="8" fontFamily="sans-serif">Senior QSA Auditor</text>
        <rect x="60" y="44" width="74" height="10" rx="3" fill="#3b82f6" />
        <text x="68" y="52" fill="#ffffff" fontSize="7" fontWeight="bold" fontFamily="sans-serif">REMOTE · AUSTRALIA</text>
      </g>
      {/* Payroll bar */}
      <g transform="translate(24, 130)">
        <rect x="0" y="0" width="352" height="78" rx="8" fill="#0c0a09" />
        <text x="20" y="28" fill="#fafaf9" fontSize="11" fontWeight="bold" fontFamily="sans-serif">REGIONAL PAYROLL RUN COMPLETED</text>
        <text x="20" y="44" fill="#a8a29e" fontSize="9" fontFamily="sans-serif">CPF / Superannuation / Tax Deductions Automated · 350 Employees</text>
        <rect x="20" y="52" width="180" height="12" rx="6" fill="#292524" />
        <rect x="20" y="52" width="180" height="12" rx="6" fill="#ea580c" />
        <rect x="240" y="24" width="94" height="32" rx="6" fill="#ea580c" />
        <text x="254" y="44" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">DISBURSED ✓</text>
      </g>
    </svg>
  ),
  'analytics-bi': (
    <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-2xl select-none">
      <rect x="10" y="10" width="380" height="220" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="2" />
      <path d="M 10 38 L 390 38" stroke="#1e293b" strokeWidth="2" />
      <circle cx="28" cy="24" r="4" fill="#ef4444" />
      <circle cx="42" cy="24" r="4" fill="#f59e0b" />
      <circle cx="56" cy="24" r="4" fill="#10b981" />
      <text x="75" y="28" fill="#94a3b8" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Inspac Analytics BI — Enterprise Executive Dashboard</text>
      {/* Bar Chart Section */}
      <rect x="30" y="54" width="190" height="154" rx="8" fill="#1e293b" />
      <text x="44" y="74" fill="#e2e8f0" fontSize="9" fontWeight="bold" fontFamily="sans-serif">QUARTERLY REVENUE VELOCITY</text>
      <rect x="44" y="150" width="16" height="42" rx="3" fill="#38bdf8" />
      <rect x="70" y="125" width="16" height="67" rx="3" fill="#0284c7" />
      <rect x="96" y="100" width="16" height="92" rx="3" fill="#38bdf8" />
      <rect x="122" y="80" width="16" height="112" rx="3" fill="#0284c7" />
      <rect x="148" y="65" width="16" height="127" rx="3" fill="#38bdf8" />
      <rect x="174" y="88" width="16" height="104" rx="3" fill="#0284c7" />
      {/* Right KPIs */}
      <g transform="translate(235, 54)">
        <rect x="0" y="0" width="135" height="72" rx="8" fill="#1e293b" />
        <text x="16" y="22" fill="#94a3b8" fontSize="8" fontWeight="bold" fontFamily="sans-serif">TOTAL PIPELINE VALUE</text>
        <text x="16" y="46" fill="#38bdf8" fontSize="18" fontWeight="black" fontFamily="sans-serif">$42.8M</text>
        <text x="16" y="60" fill="#22c55e" fontSize="8" fontWeight="bold" fontFamily="sans-serif">↑ +31.4% YoY Growth</text>
      </g>
      <g transform="translate(235, 136)">
        <rect x="0" y="0" width="135" height="72" rx="8" fill="#1e293b" />
        <text x="16" y="22" fill="#94a3b8" fontSize="8" fontWeight="bold" fontFamily="sans-serif">RETENTION / CSAT</text>
        <text x="16" y="46" fill="#f59e0b" fontSize="18" fontWeight="black" fontFamily="sans-serif">99.4%</text>
        <text x="16" y="60" fill="#38bdf8" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Zero Churn in Q3</text>
      </g>
    </svg>
  ),
  'creator-studio': (
    <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-2xl select-none">
      <rect x="10" y="10" width="380" height="220" rx="12" fill="#ffffff" stroke="#c7d2fe" strokeWidth="2" />
      <path d="M 10 38 L 390 38" stroke="#f1f5f9" strokeWidth="2" />
      <circle cx="28" cy="24" r="4" fill="#ef4444" />
      <circle cx="42" cy="24" r="4" fill="#f59e0b" />
      <circle cx="56" cy="24" r="4" fill="#10b981" />
      <text x="75" y="28" fill="#4338ca" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Inspac Creator Studio — Low-Code Visual App Engineering</text>
      {/* Visual Palette */}
      <rect x="22" y="50" width="80" height="165" rx="8" fill="#1e1b4b" />
      <rect x="32" y="66" width="60" height="16" rx="4" fill="#312e81" stroke="#6366f1" strokeWidth="1" />
      <text x="40" y="77" fill="#e0e7ff" fontSize="8" fontFamily="sans-serif">Form Builder</text>
      <rect x="32" y="90" width="60" height="16" rx="4" fill="#312e81" stroke="#6366f1" strokeWidth="1" />
      <text x="40" y="101" fill="#e0e7ff" fontSize="8" fontFamily="sans-serif">Workflows</text>
      <rect x="32" y="114" width="60" height="16" rx="4" fill="#312e81" stroke="#6366f1" strokeWidth="1" />
      <text x="40" y="125" fill="#e0e7ff" fontSize="8" fontFamily="sans-serif">REST APIs</text>
      {/* Center Canvas */}
      <g transform="translate(115, 50)">
        <rect x="0" y="0" width="260" height="165" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
        <text x="20" y="26" fill="#1e1b4b" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Procurement & Capex Approval Workflow</text>
        <rect x="20" y="38" width="220" height="24" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
        <text x="28" y="53" fill="#64748b" fontSize="9" fontFamily="sans-serif">Vendor: Singapore Tech Infrastructure Pte Ltd</text>
        <rect x="20" y="70" width="220" height="24" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
        <text x="28" y="85" fill="#64748b" fontSize="9" fontFamily="sans-serif">Contract Value: $450,000 USD (3-Year Master Service)</text>
        <rect x="20" y="106" width="100" height="26" rx="5" fill="#4f46e5" />
        <text x="32" y="122" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Auto-Approve</text>
        <rect x="130" y="106" width="90" height="26" rx="5" fill="#e0e7ff" />
        <text x="144" y="122" fill="#4338ca" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Audit Log</text>
      </g>
    </svg>
  ),
  'vault-directory': (
    <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-2xl select-none">
      <rect x="10" y="10" width="380" height="220" rx="12" fill="#0f172a" stroke="#be123c" strokeWidth="2" />
      <path d="M 10 38 L 390 38" stroke="#1e293b" strokeWidth="2" />
      <circle cx="28" cy="24" r="4" fill="#ef4444" />
      <circle cx="42" cy="24" r="4" fill="#f59e0b" />
      <circle cx="56" cy="24" r="4" fill="#10b981" />
      <text x="75" y="28" fill="#fda4af" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Inspac Vault & Directory — Zero-Trust Identity & Secrets Shield</text>
      {/* Concentric rings */}
      <circle cx="200" cy="130" r="70" fill="none" stroke="#be123c" strokeWidth="1.5" strokeDasharray="6,6" />
      <circle cx="200" cy="130" r="50" fill="none" stroke="#f43f5e" strokeWidth="2" />
      {/* Safe */}
      <rect x="150" y="85" width="100" height="90" rx="14" fill="#1e293b" stroke="#f43f5e" strokeWidth="2.5" />
      <circle cx="200" cy="130" r="22" fill="#334155" stroke="#be123c" strokeWidth="3" />
      <circle cx="200" cy="130" r="8" fill="#f43f5e" />
      {/* Badges */}
      <g transform="translate(30, 95)">
        <rect x="0" y="0" width="95" height="50" rx="8" fill="#1e293b" stroke="#fda4af" strokeWidth="1" />
        <text x="12" y="22" fill="#f43f5e" fontSize="9" fontWeight="bold" fontFamily="sans-serif">AES-256 BIT</text>
        <text x="12" y="38" fill="#ffffff" fontSize="11" fontWeight="black" fontFamily="sans-serif">ENCRYPTED</text>
      </g>
      <g transform="translate(275, 95)">
        <rect x="0" y="0" width="95" height="50" rx="8" fill="#1e293b" stroke="#fda4af" strokeWidth="1" />
        <text x="12" y="22" fill="#10b981" fontSize="9" fontWeight="bold" fontFamily="sans-serif">ZERO TRUST</text>
        <text x="12" y="38" fill="#ffffff" fontSize="11" fontWeight="black" fontFamily="sans-serif">PCI-DSS 4.0</text>
      </g>
    </svg>
  ),
  'flow-automation': (
    <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-2xl select-none">
      <rect x="10" y="10" width="380" height="220" rx="12" fill="#ffffff" stroke="#fde68a" strokeWidth="2" />
      <path d="M 10 38 L 390 38" stroke="#fef3c7" strokeWidth="2" />
      <circle cx="28" cy="24" r="4" fill="#ef4444" />
      <circle cx="42" cy="24" r="4" fill="#f59e0b" />
      <circle cx="56" cy="24" r="4" fill="#10b981" />
      <text x="75" y="28" fill="#b45309" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Inspac Flow Automation — Cross-Application Integration Bus</text>
      {/* Nodes */}
      <g transform="translate(30, 90)">
        <rect x="0" y="0" width="90" height="60" rx="8" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" />
        <circle cx="20" cy="20" r="6" fill="#f59e0b" />
        <text x="32" y="24" fill="#78350f" fontSize="9" fontWeight="bold" fontFamily="sans-serif">TRIGGER</text>
        <text x="14" y="44" fill="#451a03" fontSize="8" fontFamily="sans-serif">SAP Order Created</text>
      </g>
      {/* Arrow 1 */}
      <path d="M 125 120 L 165 120" stroke="#f59e0b" strokeWidth="3" strokeDasharray="4,3" />
      <polygon points="165,115 174,120 165,125" fill="#f59e0b" />
      {/* Middle Node */}
      <g transform="translate(178, 85)">
        <polygon points="35,0 70,35 35,70 0,35" fill="#f59e0b" />
        <text x="22" y="38" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">AI LOGIC</text>
      </g>
      {/* Output 1 */}
      <path d="M 250 100 Q 275 75 285 75" stroke="#3b82f6" strokeWidth="3" fill="none" />
      <g transform="translate(285, 52)">
        <rect x="0" y="0" width="90" height="46" rx="6" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.5" />
        <text x="10" y="20" fill="#1d4ed8" fontSize="8" fontWeight="bold" fontFamily="sans-serif">UPDATE PULSECRM</text>
        <text x="10" y="34" fill="#64748b" fontSize="7" fontFamily="sans-serif">Deal Won Auto-Logged</text>
      </g>
      {/* Output 2 */}
      <path d="M 250 140 Q 275 165 285 165" stroke="#10b981" strokeWidth="3" fill="none" />
      <g transform="translate(285, 142)">
        <rect x="0" y="0" width="90" height="46" rx="6" fill="#ffffff" stroke="#10b981" strokeWidth="1.5" />
        <text x="10" y="20" fill="#047857" fontSize="8" fontWeight="bold" fontFamily="sans-serif">BOOKS INVOICING</text>
        <text x="10" y="34" fill="#64748b" fontSize="7" fontFamily="sans-serif">Tax Invoice Dispatched</text>
      </g>
    </svg>
  )
};

export default function ProductDetailPage({ onOpenContact }) {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [activeModuleIdx, setActiveModuleIdx] = useState(0);
  const [viewMode, setViewMode] = useState('all'); // 'all' (Full Matrix View by default) or 'tabs'
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  // Fallback to pulse-crm if invalid product id
  const productKey = productId && productsData[productId] ? productId : 'pulse-crm';
  const product = productsData[productKey];
  const ProductIcon = productIcons[productKey] || Sparkles;
  const ProductIllustration = productIllustrations[productKey] || productIllustrations['pulse-crm'];

  // Scroll to top on product change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveTab('overview');
    setActiveModuleIdx(0);
    setViewMode('all');
  }, [productId]);

  // List of all products for the bottom suite navigator
  const allProductsList = Object.values(productsData);
  const otherProducts = allProductsList.filter(p => p.id !== product.id);

  const handleDemoRequest = () => {
    if (onOpenContact) {
      onOpenContact(`Product Demo & Consultation: ${product.title} (${product.tagline})`);
    } else {
      navigate('/contact');
    }
  };

  return (
    <div className="bg-[#f8fafc] text-slate-900 font-sans min-h-screen selection:bg-cyan-500 selection:text-white">
      
      {/* ========================================================================= */}
      {/* 1. LUXURY HERO HEADER WITH MOCKUP & STATS STRIP (#00587c Theme) */}
      {/* ========================================================================= */}
      <header className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 bg-[#00587c] text-white overflow-hidden border-b border-cyan-900/40">
        
        {/* Background Hero Image with Deep Enterprise Gradients */}
        <div className="absolute inset-0 z-0">
          <img 
            src={product.heroBgImage || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80'} 
            alt={`${product.title} Enterprise Cloud Background`}
            className="w-full h-full object-cover object-center transform scale-105 filter brightness-[0.28] contrast-[1.2] transition-transform duration-700" 
          />
          {/* Dual Brand Overlays: #00587c theme gradient + dark vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00587c]/95 via-[#004764]/90 to-[#00384f]/95 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#00587c]/70 via-transparent to-[#00384f]/95" />
          <div className="absolute inset-0 backdrop-blur-[1.5px]" />
        </div>

        {/* Background Ambient Radiance & Subtle Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none z-[1]" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none z-[1]" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none z-[1]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs text-cyan-200/90 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
            <Link to="/#products" className="hover:text-white transition-colors">Software Suite</Link>
            <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-white font-bold">{product.title}</span>
          </nav>

          {/* Top Hero Pitch & Live Vector Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Value Proposition & CTAs */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Product Category & Benchmark Pill */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 text-cyan-300 border border-cyan-300/30 backdrop-blur-md">
                  <ProductIcon className="w-3.5 h-3.5" />
                  <span>{product.category}</span>
                </span>
                <span className="text-[11px] font-semibold text-slate-200 bg-black/40 px-3 py-1 rounded-full border border-white/15">
                  {product.zohoRef}
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-white leading-[1.1]">
                  {product.title}
                </h1>
                <p className="text-lg sm:text-xl font-medium text-cyan-300 leading-snug">
                  {product.tagline}
                </p>
              </div>

              {/* Hero Paragraph */}
              <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed font-normal">
                {product.heroSummary}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={handleDemoRequest}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all flex items-center space-x-2 cursor-pointer"
                >
                  <span>Schedule Live Demo & Pilot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <a
                  href="#capabilities"
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-sm backdrop-blur-md transition-colors flex items-center space-x-2"
                >
                  <span>Explore Capabilities</span>
                  <ChevronDown className="w-4 h-4 text-cyan-300" />
                </a>
              </div>

              {/* Trust Checkmarks */}
              <div className="pt-4 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Singapore Hosted</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>PCI-DSS & ISO Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>99.99% Enterprise SLA</span>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Vector UI Mockup */}
            <div className="lg:col-span-6 relative">
              <div className="relative group/mockup">
                
                {/* Glow behind the dashboard */}
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-3xl blur-2xl opacity-75 group-hover/mockup:opacity-100 transition-opacity" />
                
                {/* The Mockup Display */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-slate-900/60 backdrop-blur-md p-2 sm:p-3">
                  {ProductIllustration}
                </div>

                {/* Floating Metric Card Overlay */}
                <div className="absolute -bottom-5 -left-4 sm:left-4 bg-white text-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-100 flex items-center space-x-3.5 animate-float-slow">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${product.badgeColor}`}>
                    <ProductIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">{product.stats[0].label}</p>
                    <p className="text-lg font-black text-blue-600">{product.stats[0].value}</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom 4 Key Impact Metric Counters */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.stats.map((stat, sIdx) => (
              <div 
                key={sIdx}
                className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1 text-center sm:text-left hover:bg-white/10 transition-colors"
              >
                <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">{stat.value}</p>
                <p className="text-xs text-cyan-200/90 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. COMPREHENSIVE ENTERPRISE CAPABILITIES & MODULE EXPLORER */}
      {/* ========================================================================= */}
      <section id="capabilities" className="py-20 sm:py-28 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          
          {/* Section Header & Subtitle */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 text-xs font-bold text-[#00587c] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              <span>Enterprise Feature Catalog • {product.modules?.reduce((acc, m) => acc + (m.features?.length || 0), 0) || 24} Capabilities Across {product.modules?.length || 6} Modules</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Engineered for High-Scale Enterprise Performance
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Benchmarked directly against global industry suites ({product.zohoRef}). 
              Every functional module is built to eliminate operational bottlenecks, enforce stringent governance, and scale seamlessly with your organization.
            </p>

            {/* View Mode Toggle */}
            <div className="flex items-center justify-center pt-3">
              <div className="inline-flex p-1 rounded-2xl bg-slate-100 border border-slate-200/80 shadow-inner">
                <button
                  type="button"
                  onClick={() => setViewMode('all')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 cursor-pointer ${
                    viewMode === 'all'
                      ? 'bg-[#00587c] text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Full Matrix View (All 24 Features)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('tabs')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 cursor-pointer ${
                    viewMode === 'tabs'
                      ? 'bg-[#00587c] text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Interactive Module Explorer</span>
                </button>
              </div>
            </div>
          </div>

          {/* ======================================================================= */}
          {/* VIEW MODE A: INTERACTIVE MODULE EXPLORER (TABBED) */}
          {/* ======================================================================= */}
          {viewMode === 'tabs' && (
            <div className="space-y-8">
              {/* Module Pill Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                {product.modules && product.modules.map((mod, idx) => {
                  const ModIcon = mod.icon || Sparkles;
                  const isActive = activeModuleIdx === idx;
                  return (
                    <button
                      key={mod.id || idx}
                      type="button"
                      onClick={() => setActiveModuleIdx(idx)}
                      className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between space-y-2 cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-br from-[#00587c] to-[#004764] text-white border-[#00587c] shadow-lg shadow-[#00587c]/20 ring-2 ring-[#00587c]/30 scale-[1.02]'
                          : 'bg-slate-50 hover:bg-white text-slate-700 border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                          isActive ? 'bg-white/20 text-cyan-200' : 'bg-blue-50 text-blue-600'
                        }`}>
                          <ModIcon className="w-4 h-4" />
                        </div>
                        <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                          isActive ? 'bg-cyan-400/20 text-cyan-200 border border-cyan-400/30' : 'bg-slate-200/70 text-slate-600'
                        }`}>
                          0{idx + 1}
                        </span>
                      </div>
                      
                      <div>
                        <h4 className={`text-xs font-bold leading-snug line-clamp-1 ${
                          isActive ? 'text-white' : 'text-slate-900'
                        }`}>
                          {mod.title}
                        </h4>
                        <p className={`text-[11px] font-medium mt-0.5 ${
                          isActive ? 'text-cyan-200/80' : 'text-slate-400'
                        }`}>
                          {mod.features?.length || 4} features
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Module Showcase Container */}
              {(() => {
                const currentMod = (product.modules && product.modules[activeModuleIdx]) || product.modules?.[0];
                if (!currentMod) return null;
                const CurrentIcon = currentMod.icon || Sparkles;

                return (
                  <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/40 p-6 sm:p-10 shadow-sm space-y-8">
                    
                    {/* Active Module Header Strip with Prev/Next Controls */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200/80">
                      <div className="flex items-start sm:items-center space-x-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00587c] to-[#004764] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#00587c]/20">
                          <CurrentIcon className="w-7 h-7 stroke-[2.2]" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00587c] bg-cyan-50 px-2.5 py-0.5 rounded-md border border-cyan-200/80">
                              Module 0{activeModuleIdx + 1} of 0{product.modules?.length || 6}
                            </span>
                            <span className="text-xs text-slate-400 font-semibold">•</span>
                            <span className="text-xs font-semibold text-slate-500">
                              Enterprise Standard
                            </span>
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                            {currentMod.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl font-normal leading-relaxed">
                            {currentMod.description}
                          </p>
                        </div>
                      </div>

                      {/* Previous / Next Module Navigation */}
                      <div className="flex items-center space-x-2 self-end md:self-auto shrink-0">
                        <button
                          type="button"
                          onClick={() => setActiveModuleIdx(prev => (prev > 0 ? prev - 1 : (product.modules?.length || 1) - 1))}
                          className="p-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 transition-colors shadow-2xs cursor-pointer flex items-center space-x-1 text-xs font-bold"
                          title="Previous Module"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <span className="hidden sm:inline">Prev</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveModuleIdx(prev => (prev < (product.modules?.length || 1) - 1 ? prev + 1 : 0))}
                          className="p-2.5 rounded-xl bg-[#00587c] hover:bg-[#004764] text-white transition-colors shadow-md shadow-[#00587c]/20 cursor-pointer flex items-center space-x-1 text-xs font-bold"
                          title="Next Module"
                        >
                          <span className="hidden sm:inline">Next Module</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* 4 Feature Cards Grid for Active Module */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {currentMod.features && currentMod.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-cyan-500/50 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group hover:-translate-y-1"
                        >
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="px-3 py-1 rounded-lg bg-cyan-50 border border-cyan-200/60 text-[#00587c] font-extrabold text-[11px] tracking-wide">
                                {feat.tag}
                              </span>
                              <span className="text-[11px] font-bold text-emerald-600 flex items-center space-x-1.5 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                <span>Verified Capability</span>
                              </span>
                            </div>

                            <h4 className="text-lg font-extrabold text-slate-900 group-hover:text-[#00587c] transition-colors leading-snug">
                              {feat.title}
                            </h4>

                            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                              {feat.desc}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                            <span className="text-slate-500">Live Enterprise SLA</span>
                            <span className="text-[#00587c] font-bold group-hover:underline flex items-center space-x-1">
                              <span>Production Ready</span>
                              <Check className="w-3.5 h-3.5 text-emerald-500" />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                );
              })()}
            </div>
          )}

          {/* ======================================================================= */}
          {/* VIEW MODE B: FULL MATRIX VIEW (ALL 24 FEATURES ACROSS 6 MODULES) */}
          {/* ======================================================================= */}
          {viewMode === 'all' && (
            <div className="space-y-12">
              {product.modules && product.modules.map((mod, mIdx) => {
                const ModIcon = mod.icon || Sparkles;
                return (
                  <div 
                    key={mod.id || mIdx} 
                    className="p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-xs space-y-6"
                  >
                    {/* Module Title Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                      <div className="flex items-center space-x-3.5">
                        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#00587c] to-[#004764] text-white flex items-center justify-center shrink-0 shadow-sm">
                          <ModIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00587c] bg-cyan-50 px-2.5 py-0.5 rounded-md border border-cyan-200">
                              Module 0{mIdx + 1}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                              {mod.title}
                            </h3>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
                            {mod.description}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-slate-500 self-start sm:self-auto bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shrink-0">
                        {mod.features?.length || 4} Capabilities
                      </span>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {mod.features && mod.features.map((feat, fIdx) => (
                        <div 
                          key={fIdx}
                          className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-cyan-500/40 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-3"
                        >
                          <div className="space-y-2.5">
                            <div className="flex items-center justify-between">
                              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-bold text-[10px] border border-slate-200/60">
                                {feat.tag}
                              </span>
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                            </div>
                            <h4 className="text-sm font-bold text-slate-900 leading-snug">
                              {feat.title}
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed font-normal">
                              {feat.desc}
                            </p>
                          </div>
                          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                            <span>Enterprise Tier</span>
                            <span className="text-emerald-600 font-bold">Enabled</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Enterprise Architectural Inclusions Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-[#00384f] text-white shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">Global Platform Standards</span>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  Included Out-Of-The-Box Across All {product.title} Modules
                </h3>
              </div>
              <button
                type="button"
                onClick={handleDemoRequest}
                className="px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs shadow-lg transition-all self-start sm:self-auto cursor-pointer"
              >
                Request Architecture Whitepaper
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center space-x-2 text-cyan-300 font-bold text-xs">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span>Sub-Second Sync</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Real-time websocket telemetry and event-driven architecture with zero latency degradation.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center space-x-2 text-cyan-300 font-bold text-xs">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Field-Level RBAC</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Granular role permissions, conditional field encryption, and immutable audit logs.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center space-x-2 text-cyan-300 font-bold text-xs">
                  <Database className="w-4 h-4 text-cyan-400" />
                  <span>Open REST & Webhooks</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Complete developer API coverage with SDKs for Python, Node.js, Java, and 99.99% SLA.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center space-x-2 text-cyan-300 font-bold text-xs">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span>Multi-Region Sovereignty</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Compliant with Singapore PDPA, GDPR, ISO 27001, and SOC 2 Type II enterprise standards.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTEGRATION ECOSYSTEM & CONNECTIVITY */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-100/90 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">Zero-Silo Integration</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Connects Directly With Your Enterprise Stack
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.title} eliminates software silos through native two-way APIs, enterprise message buses, and ready-to-deploy connectors.
              </p>
              
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleDemoRequest}
                  className="inline-flex items-center space-x-2 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>Request Custom Integration Architecture Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Integration Pills / Grid */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Supported Enterprise Systems</p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {product.integrations.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200/80 hover:border-blue-300 transition-all flex items-center space-x-2.5 cursor-default group"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
                      <span className="text-xs font-bold text-slate-700 group-hover:text-blue-600 truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. REAL-WORLD INDUSTRY IMPLEMENTATIONS */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">Cross-Vertical Value</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Mission-Critical Solutions Across Industries
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
              See how organizations across Singapore, India, and Australia leverage {product.title} to transform day-to-day operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.useCases.map((uc, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-blue-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-sm shadow-md shadow-blue-500/20">
                    0{idx + 1}
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {uc.industry}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {uc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center text-xs font-bold text-blue-600">
                  <span>Industry Optimized Workflow</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal">
              Technical, migration, and compliance answers for enterprise decision-makers.
            </p>
          </div>

          <div className="space-y-3">
            {product.faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ml-3 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SUITE QUICK SWITCHER CAROUSEL */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">The Inspac Suite</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Explore Other Enterprise Products
              </h2>
            </div>
            
            <Link 
              to="/#products" 
              className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center space-x-1"
            >
              <span>View All 8 Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherProducts.slice(0, 4).map((other) => {
              const OtherIcon = productIcons[other.id] || Sparkles;
              return (
                <Link
                  key={other.id}
                  to={`/products/${other.id}`}
                  className="bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-300 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-xs">
                        <OtherIcon className="w-4 h-4 stroke-[2.2]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                          {other.title}
                        </h4>
                        <span className="text-[10px] text-slate-400 font-medium truncate block">
                          {other.category}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-[11px] text-slate-500 leading-snug line-clamp-2">
                      {other.tagline}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-blue-600 group-hover:text-blue-700">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. HIGH-CONVERTING BOTTOM EXECUTIVE CTA (#00587c Theme) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-[#00587c] via-[#004764] to-[#00384f] text-white relative overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 text-cyan-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Schedule Executive Consultation & Live Demo</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Ready to deploy {product.title} for your enterprise?
          </h2>

          <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal">
            Speak directly with our Singapore solution architects and regional technical consultants to evaluate deployment scopes, custom integration, and pilot onboarding.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={handleDemoRequest}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 text-slate-950 font-black text-xs sm:text-sm shadow-2xl shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Request Custom Build & Demo
            </button>
            
            <Link
              to="/contact"
              className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-xs sm:text-sm backdrop-blur-md transition-colors"
            >
              Contact Solutions Desk
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
