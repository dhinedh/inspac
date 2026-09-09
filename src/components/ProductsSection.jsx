import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  CreditCard, 
  Headphones, 
  UserCheck, 
  BarChart2, 
  Code2, 
  ShieldCheck, 
  GitBranch, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function ProductsSection({ onOpenContact }) {
  const scrollRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  // 8 Modular Business Software Products (Modeled after Zoho's celebrated product ecosystem)
  const products = [
    {
      id: 'pulse-crm',
      title: 'Inspac PulseCRM',
      tagline: 'Omnichannel Sales & Pipeline Cloud',
      desc: 'Complete lead-to-deal visibility, AI sales win forecasting, omnichannel engagement, and automated deal pipeline workflows.',
      zohoRef: 'Inspired by Zoho CRM',
      icon: Users,
      badgeColor: 'bg-blue-600 text-white shadow-blue-500/25',
      bgColor: 'bg-[#edf5ff]',
      accentColor: '#2563eb',
      illustration: (
        <svg viewBox="0 0 240 150" className="w-full h-full max-h-[140px] drop-shadow-md select-none">
          <defs>
            <linearGradient id="crmHeader" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="dealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
          {/* CRM Dashboard Window Frame */}
          <rect x="35" y="24" width="170" height="102" rx="8" fill="#ffffff" stroke="#bfdbfe" strokeWidth="1.5" />
          <path d="M 35 32 L 205 32" stroke="#e2e8f0" strokeWidth="1" />
          <circle cx="45" cy="28" r="2" fill="#ef4444" />
          <circle cx="51" cy="28" r="2" fill="#f59e0b" />
          <circle cx="57" cy="28" r="2" fill="#10b981" />
          <text x="65" y="30" fill="#64748b" fontSize="5.5" fontWeight="600" fontFamily="sans-serif">PulseCRM Pipeline</text>

          {/* Kanban Deal Columns */}
          {/* Column 1: Qualified */}
          <rect x="42" y="38" width="46" height="82" rx="4" fill="#f8fafc" />
          <text x="46" y="46" fill="#475569" fontSize="5" fontWeight="bold" fontFamily="sans-serif">QUALIFIED (4)</text>
          <rect x="46" y="50" width="38" height="24" rx="3" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          <rect x="50" y="55" width="22" height="3" rx="1.5" fill="#3b82f6" />
          <rect x="50" y="61" width="30" height="2" rx="1" fill="#94a3b8" />
          <text x="50" y="70" fill="#1e40af" fontSize="5" fontWeight="bold" fontFamily="sans-serif">$24,500</text>

          {/* Column 2: Proposal */}
          <rect x="94" y="38" width="46" height="82" rx="4" fill="#f8fafc" />
          <text x="98" y="46" fill="#475569" fontSize="5" fontWeight="bold" fontFamily="sans-serif">PROPOSAL (3)</text>
          <rect x="98" y="50" width="38" height="28" rx="3" fill="#ffffff" stroke="#93c5fd" strokeWidth="1.2" />
          <rect x="102" y="55" width="26" height="3" rx="1.5" fill="#2563eb" />
          <rect x="102" y="61" width="28" height="2" rx="1" fill="#94a3b8" />
          <text x="102" y="72" fill="#1d4ed8" fontSize="5.5" fontWeight="bold" fontFamily="sans-serif">$85,000</text>
          <rect x="102" y="74" width="16" height="2" rx="1" fill="#10b981" />

          {/* Column 3: Won */}
          <rect x="146" y="38" width="52" height="82" rx="4" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
          <text x="150" y="46" fill="#166534" fontSize="5" fontWeight="bold" fontFamily="sans-serif">CLOSED WON (7)</text>
          <rect x="150" y="50" width="44" height="26" rx="3" fill="#ffffff" stroke="#86efac" strokeWidth="1" />
          <circle cx="158" cy="62" r="5" fill="#22c55e" />
          <path d="M 156 62 L 157.5 64 L 161 60" stroke="#ffffff" strokeWidth="1" fill="none" />
          <text x="166" y="60" fill="#14532d" fontSize="5" fontWeight="bold" fontFamily="sans-serif">$120,000</text>
          <text x="166" y="67" fill="#16a34a" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif">APPROVED</text>
        </svg>
      )
    },
    {
      id: 'books-finance',
      title: 'Inspac Books & Finance',
      tagline: 'Enterprise Accounting & Tax Suite',
      desc: 'Automated multi-currency invoicing, GST/IRAS regional tax compliance, cashflow forecasting, and automated bank reconciliation.',
      zohoRef: 'Inspired by Zoho Books',
      icon: CreditCard,
      badgeColor: 'bg-emerald-600 text-white shadow-emerald-500/25',
      bgColor: 'bg-[#ecfdf5]',
      accentColor: '#059669',
      illustration: (
        <svg viewBox="0 0 240 150" className="w-full h-full max-h-[140px] drop-shadow-md select-none">
          <defs>
            <linearGradient id="invGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="chartFill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Invoice Document Ledger */}
          <g transform="translate(40, 26)">
            <rect x="0" y="0" width="95" height="98" rx="6" fill="#ffffff" stroke="#a7f3d0" strokeWidth="1.5" />
            {/* Header Stripe */}
            <rect x="8" y="10" width="30" height="4" rx="2" fill="#059669" />
            <text x="8" y="22" fill="#065f46" fontSize="5" fontWeight="bold" fontFamily="sans-serif">INVOICE #INV-2026</text>
            <rect x="8" y="27" width="79" height="1" fill="#e2e8f0" />
            {/* Line Items */}
            <rect x="8" y="34" width="45" height="3" rx="1.5" fill="#64748b" />
            <text x="68" y="37" fill="#0f172a" fontSize="5" fontWeight="bold" fontFamily="sans-serif">$3,450</text>
            <rect x="8" y="42" width="50" height="3" rx="1.5" fill="#94a3b8" />
            <text x="68" y="45" fill="#0f172a" fontSize="5" fontWeight="bold" fontFamily="sans-serif">$5,200</text>
            <rect x="8" y="50" width="38" height="3" rx="1.5" fill="#94a3b8" />
            <text x="68" y="53" fill="#0f172a" fontSize="5" fontWeight="bold" fontFamily="sans-serif">$1,150</text>
            {/* Total Section */}
            <rect x="8" y="60" width="79" height="1" fill="#e2e8f0" />
            <text x="8" y="70" fill="#047857" fontSize="5" fontWeight="bold" fontFamily="sans-serif">GST / Tax (9%): $882</text>
            <text x="8" y="80" fill="#0f172a" fontSize="6.5" fontWeight="black" fontFamily="sans-serif">TOTAL: $10,682</text>
            {/* Paid Stamp Badge */}
            <g transform="translate(48, 64) rotate(-12)">
              <rect x="0" y="0" width="38" height="15" rx="3" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.2" />
              <text x="9" y="10.5" fill="#059669" fontSize="6" fontWeight="black" fontFamily="sans-serif">PAID ✓</text>
            </g>
          </g>

          {/* Side Revenue Trend Card */}
          <g transform="translate(142, 35)">
            <rect x="0" y="0" width="62" height="84" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            <text x="8" y="14" fill="#475569" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif">NET CASHFLOW</text>
            <text x="8" y="24" fill="#047857" fontSize="7" fontWeight="black" fontFamily="sans-serif">+42.8%</text>
            {/* Mini Trend Line */}
            <path d="M 8 58 Q 20 54 32 42 T 54 34" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
            <path d="M 8 58 Q 20 54 32 42 T 54 34 L 54 68 L 8 68 Z" fill="url(#chartFill)" />
            <rect x="8" y="73" width="46" height="3" rx="1.5" fill="#a7f3d0" />
          </g>
        </svg>
      )
    },
    {
      id: 'desk-support',
      title: 'Inspac Desk & Support',
      tagline: 'AI-Powered Service Management',
      desc: 'Omnichannel customer support ticketing, SLA escalation matrices, AI agent assist, interactive self-service knowledge base, and CSAT telemetry.',
      zohoRef: 'Inspired by Zoho Desk',
      icon: Headphones,
      badgeColor: 'bg-purple-600 text-white shadow-purple-500/25',
      bgColor: 'bg-[#f6f1ff]',
      accentColor: '#9333ea',
      illustration: (
        <svg viewBox="0 0 240 150" className="w-full h-full max-h-[140px] drop-shadow-md select-none">
          <defs>
            <linearGradient id="ticketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#7e22ce" />
            </linearGradient>
          </defs>
          {/* Main Support Queue Console */}
          <rect x="36" y="24" width="168" height="102" rx="8" fill="#ffffff" stroke="#e9d5ff" strokeWidth="1.5" />
          {/* Top Bar */}
          <rect x="36" y="24" width="168" height="16" rx="8" fill="#581c87" />
          <rect x="36" y="32" width="168" height="8" fill="#581c87" />
          <circle cx="48" cy="32" r="3" fill="#c084fc" />
          <text x="56" y="34.5" fill="#f3e8ff" fontSize="5.5" fontWeight="bold" fontFamily="sans-serif">Inspac Helpdesk L1-L3 Queue</text>
          <text x="168" y="34.5" fill="#34d399" fontSize="5" fontWeight="bold" fontFamily="sans-serif">SLA: 99.8%</text>

          {/* Ticket Item 1 (Urgent / High Priority) */}
          <g transform="translate(44, 44)">
            <rect x="0" y="0" width="152" height="22" rx="4" fill="#faf5ff" stroke="#d8b4fe" strokeWidth="1" />
            <circle cx="10" cy="11" r="4.5" fill="#ef4444" />
            <text x="18" y="10" fill="#1e1b4b" fontSize="5" fontWeight="bold" fontFamily="sans-serif">#TCK-489: PCI-DSS Firewall Segmentation Verification</text>
            <text x="18" y="16.5" fill="#6b21a8" fontSize="4.2" fontWeight="normal" fontFamily="sans-serif">Assigned to: Senior SecOps Engineer · Due in 24m</text>
            <rect x="118" y="6" width="28" height="10" rx="3" fill="#fee2e2" />
            <text x="122" y="13.5" fill="#b91c1c" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif">HIGH PRIORITY</text>
          </g>

          {/* Ticket Item 2 (In Progress) */}
          <g transform="translate(44, 70)">
            <rect x="0" y="0" width="152" height="22" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
            <circle cx="10" cy="11" r="4.5" fill="#3b82f6" />
            <text x="18" y="10" fill="#1e1b4b" fontSize="5" fontWeight="bold" fontFamily="sans-serif">#TCK-490: Snowflake Lakehouse Pipeline Ingestion</text>
            <text x="18" y="16.5" fill="#64748b" fontSize="4.2" fontWeight="normal" fontFamily="sans-serif">Assigned to: Data Engineer · Response recorded</text>
            <rect x="118" y="6" width="28" height="10" rx="3" fill="#dbeafe" />
            <text x="121" y="13.5" fill="#1d4ed8" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif">IN PROGRESS</text>
          </g>

          {/* Ticket Item 3 (Resolved) */}
          <g transform="translate(44, 96)">
            <rect x="0" y="0" width="152" height="22" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
            <circle cx="10" cy="11" r="4.5" fill="#22c55e" />
            <text x="18" y="10" fill="#1e1b4b" fontSize="5" fontWeight="bold" fontFamily="sans-serif">#TCK-491: SAP S/4HANA Middleware Token Refresh</text>
            <text x="18" y="16.5" fill="#64748b" fontSize="4.2" fontWeight="normal" fontFamily="sans-serif">Client Signoff CSAT: 5/5 Stars</text>
            <rect x="118" y="6" width="28" height="10" rx="3" fill="#dcfce7" />
            <text x="125" y="13.5" fill="#15803d" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif">RESOLVED</text>
          </g>
        </svg>
      )
    },
    {
      id: 'people-hrms',
      title: 'Inspac People HRMS',
      tagline: 'Modern Workforce & Payroll Operations',
      desc: 'Complete employee lifecycle management, automated regional payroll with tax deductions, biometric attendance, and 360° performance reviews.',
      zohoRef: 'Inspired by Zoho People',
      icon: UserCheck,
      badgeColor: 'bg-orange-600 text-white shadow-orange-500/25',
      bgColor: 'bg-[#fff7ed]',
      accentColor: '#ea580c',
      illustration: (
        <svg viewBox="0 0 240 150" className="w-full h-full max-h-[140px] drop-shadow-md select-none">
          <defs>
            <linearGradient id="orgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
          {/* Main HR Org Chart Card */}
          <rect x="36" y="24" width="168" height="102" rx="8" fill="#ffffff" stroke="#fed7aa" strokeWidth="1.5" />
          
          {/* Header */}
          <rect x="44" y="32" width="60" height="4" rx="2" fill="#c2410c" />
          <text x="44" y="44" fill="#9a3412" fontSize="5.5" fontWeight="bold" fontFamily="sans-serif">PEOPLE DIRECTORY & PAYROLL</text>
          <rect x="156" y="32" width="40" height="12" rx="3" fill="#ffedd5" />
          <text x="160" y="40" fill="#c2410c" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif">100% COMPLIANT</text>

          {/* Employee Avatar Tile 1 */}
          <g transform="translate(44, 52)">
            <rect x="0" y="0" width="70" height="32" rx="4" fill="#fff7ed" stroke="#fdba74" strokeWidth="1" />
            <circle cx="16" cy="16" r="9" fill="#ea580c" />
            <circle cx="16" cy="13" r="3.5" fill="#ffffff" />
            <path d="M 10 21 C 10 18 22 18 22 21 Z" fill="#ffffff" />
            <text x="29" y="13" fill="#431407" fontSize="5" fontWeight="bold" fontFamily="sans-serif">Sarah Lin</text>
            <text x="29" y="19" fill="#9a3412" fontSize="4" fontWeight="normal" fontFamily="sans-serif">Lead Cloud Architect</text>
            <rect x="29" y="22" width="35" height="5" rx="2" fill="#22c55e" />
            <text x="33" y="26" fill="#ffffff" fontSize="3.5" fontWeight="bold" fontFamily="sans-serif">ACTIVE · ONSITE</text>
          </g>

          {/* Employee Avatar Tile 2 */}
          <g transform="translate(122, 52)">
            <rect x="0" y="0" width="74" height="32" rx="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
            <circle cx="16" cy="16" r="9" fill="#0284c7" />
            <circle cx="16" cy="13" r="3.5" fill="#ffffff" />
            <path d="M 10 21 C 10 18 22 18 22 21 Z" fill="#ffffff" />
            <text x="29" y="13" fill="#0f172a" fontSize="5" fontWeight="bold" fontFamily="sans-serif">David Tan</text>
            <text x="29" y="19" fill="#64748b" fontSize="4" fontWeight="normal" fontFamily="sans-serif">Senior QSA Auditor</text>
            <rect x="29" y="22" width="38" height="5" rx="2" fill="#3b82f6" />
            <text x="33" y="26" fill="#ffffff" fontSize="3.5" fontWeight="bold" fontFamily="sans-serif">REMOTE · APAC</text>
          </g>

          {/* Payroll Automated Processing Bar */}
          <g transform="translate(44, 92)">
            <rect x="0" y="0" width="152" height="24" rx="4" fill="#0c0a09" />
            <text x="10" y="12" fill="#fafaf9" fontSize="5" fontWeight="bold" fontFamily="sans-serif">OCTOBER PAYROLL DISBURSEMENT</text>
            <text x="10" y="18" fill="#a8a29e" fontSize="4" fontWeight="normal" fontFamily="sans-serif">CPF / Tax Deductions Automated · 350 Employees</text>
            <rect x="106" y="6" width="38" height="12" rx="3" fill="#ea580c" />
            <text x="110" y="14" fill="#ffffff" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif">DISBURSED ✓</text>
          </g>
        </svg>
      )
    },
    {
      id: 'analytics-bi',
      title: 'Inspac Analytics BI',
      tagline: 'Visual Business Intelligence & KPI Engine',
      desc: 'Connect 50+ databases and SaaS systems to create interactive executive dashboards, predictive data models, and automated anomaly alerts.',
      zohoRef: 'Inspired by Zoho Analytics',
      icon: BarChart2,
      badgeColor: 'bg-sky-600 text-white shadow-sky-500/25',
      bgColor: 'bg-[#f0f9ff]',
      accentColor: '#0284c7',
      illustration: (
        <svg viewBox="0 0 240 150" className="w-full h-full max-h-[140px] drop-shadow-md select-none">
          <defs>
            <linearGradient id="biLaptop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
            <linearGradient id="barGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>
          {/* Laptop Base */}
          <path d="M 40 120 L 200 120 L 210 128 L 30 128 Z" fill="#cbd5e1" />
          <ellipse cx="120" cy="122" rx="15" ry="2" fill="#94a3b8" />
          {/* Laptop Screen Frame */}
          <rect x="52" y="30" width="136" height="90" rx="6" fill="url(#biLaptop)" />
          <rect x="56" y="34" width="128" height="82" rx="3" fill="#ffffff" />
          
          {/* Top BI Header */}
          <rect x="62" y="38" width="40" height="4" rx="2" fill="#0284c7" />
          <circle cx="174" cy="40" r="2" fill="#38bdf8" />
          <circle cx="168" cy="40" r="2" fill="#bae6fd" />

          {/* Bar Chart 1 */}
          <rect x="62" y="80" width="6" height="26" rx="2" fill="#e0f2fe" />
          <rect x="72" y="68" width="6" height="38" rx="2" fill="#7dd3fc" />
          <rect x="82" y="56" width="6" height="50" rx="2" fill="url(#barGrad2)" />
          <rect x="92" y="64" width="6" height="42" rx="2" fill="#0284c7" />
          <rect x="102" y="50" width="6" height="56" rx="2" fill="url(#barGrad2)" />

          {/* Curved Trend Line */}
          <path d="M 64 74 Q 80 60 92 68 T 130 52 T 165 56" fill="none" stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="130" cy="52" r="3" fill="#d97706" />

          {/* Donut Score Card */}
          <circle cx="150" cy="88" r="14" fill="none" stroke="#e0f2fe" strokeWidth="4" />
          <circle cx="150" cy="88" r="14" fill="none" stroke="#0284c7" strokeWidth="4" strokeDasharray="60 30" />
          <text x="142" y="90" fill="#0369a1" fontSize="5.5" fontWeight="bold" fontFamily="sans-serif">88%</text>
        </svg>
      )
    },
    {
      id: 'creator-studio',
      title: 'Inspac Creator Studio',
      tagline: 'Enterprise Low-Code App Platform',
      desc: 'Build mission-critical custom business applications, approval workflows, and mobile forms with 10x velocity using low-code tools.',
      zohoRef: 'Inspired by Zoho Creator',
      icon: Code2,
      badgeColor: 'bg-indigo-600 text-white shadow-indigo-500/25',
      bgColor: 'bg-[#f1edff]',
      accentColor: '#6366f1',
      illustration: (
        <svg viewBox="0 0 240 150" className="w-full h-full max-h-[140px] drop-shadow-md select-none">
          <defs>
            <linearGradient id="creatorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          {/* Studio Canvas Window */}
          <rect x="36" y="24" width="168" height="102" rx="8" fill="#ffffff" stroke="#c7d2fe" strokeWidth="1.5" />
          {/* Left Visual Tool Palette */}
          <rect x="36" y="24" width="38" height="102" rx="8" fill="#1e1b4b" />
          <rect x="42" y="34" width="26" height="4" rx="2" fill="#a5b4fc" />
          <rect x="42" y="44" width="26" height="10" rx="3" fill="#312e81" stroke="#6366f1" strokeWidth="1" />
          <rect x="45" y="47" width="10" height="2" rx="1" fill="#c7d2fe" />
          <rect x="42" y="58" width="26" height="10" rx="3" fill="#312e81" stroke="#6366f1" strokeWidth="1" />
          <rect x="45" y="61" width="14" height="2" rx="1" fill="#c7d2fe" />
          <rect x="42" y="72" width="26" height="10" rx="3" fill="#312e81" stroke="#6366f1" strokeWidth="1" />
          <rect x="45" y="75" width="12" height="2" rx="1" fill="#c7d2fe" />

          {/* Center Form Canvas */}
          <g transform="translate(82, 34)">
            <rect x="0" y="0" width="114" height="84" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="10" y="14" fill="#1e1b4b" fontSize="5.5" fontWeight="bold" fontFamily="sans-serif">Procurement Approval Form</text>
            <rect x="10" y="22" width="94" height="12" rx="3" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            <text x="14" y="29.5" fill="#64748b" fontSize="4.5" fontFamily="sans-serif">Vendor Name: Singapore Tech Hub Pte Ltd</text>
            <rect x="10" y="38" width="94" height="12" rx="3" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            <text x="14" y="45.5" fill="#64748b" fontSize="4.5" fontFamily="sans-serif">PO Value: $450,000 USD</text>
            {/* Action Workflow Button */}
            <rect x="10" y="56" width="45" height="14" rx="4" fill="url(#creatorGrad)" />
            <text x="16" y="65" fill="#ffffff" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif">Auto-Submit</text>
            <rect x="60" y="56" width="44" height="14" rx="4" fill="#e0e7ff" />
            <text x="66" y="65" fill="#4338ca" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif">Save Draft</text>
          </g>
        </svg>
      )
    },
    {
      id: 'vault-directory',
      title: 'Inspac Vault & Directory',
      tagline: 'Zero-Trust Secrets & Identity Governance',
      desc: 'Secure enterprise password vault, Single Sign-On (SSO), multi-factor authentication (MFA), and immutable audit trails for PCI-DSS compliance.',
      zohoRef: 'Inspired by Zoho Vault / Directory',
      icon: ShieldCheck,
      badgeColor: 'bg-rose-700 text-white shadow-rose-600/25',
      bgColor: 'bg-[#fff0f4]',
      accentColor: '#be123c',
      illustration: (
        <svg viewBox="0 0 240 150" className="w-full h-full max-h-[140px] drop-shadow-md select-none">
          <defs>
            <linearGradient id="vaultShield" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#be123c" />
            </linearGradient>
            <linearGradient id="vaultSafe" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          {/* Security Concentric Rings */}
          <circle cx="120" cy="75" r="50" fill="none" stroke="#fecdd3" strokeWidth="1.2" strokeDasharray="4,4" />
          <circle cx="120" cy="75" r="38" fill="none" stroke="#fda4af" strokeWidth="1.5" />
          
          {/* Central Safe Vault Box */}
          <rect x="80" y="40" width="80" height="70" rx="10" fill="url(#vaultSafe)" stroke="#be123c" strokeWidth="2" />
          {/* Vault Dial */}
          <circle cx="120" cy="75" r="18" fill="#334155" stroke="#f43f5e" strokeWidth="2" />
          <circle cx="120" cy="75" r="6" fill="#be123c" />
          <line x1="120" y1="59" x2="120" y2="63" stroke="#f43f5e" strokeWidth="2" />
          <line x1="120" y1="87" x2="120" y2="91" stroke="#f43f5e" strokeWidth="2" />
          <line x1="104" y1="75" x2="108" y2="75" stroke="#f43f5e" strokeWidth="2" />
          <line x1="132" y1="75" x2="136" y2="75" stroke="#f43f5e" strokeWidth="2" />

          {/* Floating Key Badge Left */}
          <g transform="translate(36, 52)">
            <rect x="0" y="0" width="36" height="36" rx="6" fill="#ffffff" stroke="#fecdd3" strokeWidth="1" />
            <circle cx="18" cy="15" r="6" fill="none" stroke="#be123c" strokeWidth="2" />
            <path d="M 18 21 L 18 30 M 18 26 L 22 26" stroke="#be123c" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Floating Security Badge Right */}
          <g transform="translate(168, 55)">
            <rect x="0" y="0" width="48" height="28" rx="6" fill="#ffffff" stroke="#fecdd3" strokeWidth="1.2" />
            <text x="6" y="11" fill="#be123c" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif">AES-256</text>
            <text x="6" y="21" fill="#047857" fontSize="5" fontWeight="black" fontFamily="sans-serif">ZERO TRUST</text>
          </g>
        </svg>
      )
    },
    {
      id: 'flow-automation',
      title: 'Inspac Flow Automation',
      tagline: 'Cross-Application Integration Bus',
      desc: 'Connect disparate ERPs, CRMs, cloud databases, and SaaS tools with visual trigger-action logic without writing complex custom integration code.',
      zohoRef: 'Inspired by Zoho Flow',
      icon: GitBranch,
      badgeColor: 'bg-amber-500 text-white shadow-amber-500/25',
      bgColor: 'bg-[#fff5e9]',
      accentColor: '#f59e0b',
      illustration: (
        <svg viewBox="0 0 240 150" className="w-full h-full max-h-[140px] drop-shadow-md select-none">
          <defs>
            <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>
          {/* Node 1: Trigger (New Order in ERP) */}
          <g transform="translate(32, 54)">
            <rect x="0" y="0" width="50" height="38" rx="6" fill="#ffffff" stroke="#f59e0b" strokeWidth="1.5" />
            <circle cx="12" cy="14" r="4" fill="#f59e0b" />
            <text x="20" y="16" fill="#92400e" fontSize="5" fontWeight="bold" fontFamily="sans-serif">TRIGGER</text>
            <text x="8" y="28" fill="#451a03" fontSize="4.5" fontWeight="normal" fontFamily="sans-serif">SAP Order In</text>
          </g>

          {/* Arrow 1 */}
          <path d="M 83 73 L 101 73" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3,2" />
          <polygon points="101,70 106,73 101,76" fill="#f59e0b" />

          {/* Node 2: Decision / Transform */}
          <g transform="translate(106, 50)">
            <polygon points="23,0 46,23 23,46 0,23" fill="url(#flowGrad)" />
            <text x="14" y="25" fill="#ffffff" fontSize="6" fontWeight="bold" fontFamily="sans-serif">AI IF</text>
          </g>

          {/* Arrow 2 Top */}
          <path d="M 152 64 Q 164 50 172 50" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3,2" fill="none" />
          <polygon points="172,47 177,50 172,53" fill="#f59e0b" />

          {/* Node 3A: Action (PulseCRM Update) */}
          <g transform="translate(177, 34)">
            <rect x="0" y="0" width="48" height="30" rx="5" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.2" />
            <circle cx="10" cy="12" r="3.5" fill="#3b82f6" />
            <text x="16" y="14" fill="#1e40af" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif">ACTION</text>
            <text x="8" y="24" fill="#0f172a" fontSize="4" fontWeight="normal" fontFamily="sans-serif">Update CRM</text>
          </g>

          {/* Arrow 2 Bottom */}
          <path d="M 152 82 Q 164 96 172 96" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3,2" fill="none" />
          <polygon points="172,93 177,96 172,99" fill="#f59e0b" />

          {/* Node 3B: Action (Finance Invoicing) */}
          <g transform="translate(177, 82)">
            <rect x="0" y="0" width="48" height="30" rx="5" fill="#ffffff" stroke="#10b981" strokeWidth="1.2" />
            <circle cx="10" cy="12" r="3.5" fill="#10b981" />
            <text x="16" y="14" fill="#065f46" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif">ACTION</text>
            <text x="8" y="24" fill="#0f172a" fontSize="4" fontWeight="normal" fontFamily="sans-serif">Gen Invoice</text>
          </g>
        </svg>
      )
    }
  ];

  const totalDots = products.length;

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        const progress = Math.min(1, Math.max(0, scrollLeft / maxScroll));
        const index = Math.min(totalDots - 1, Math.round(progress * (totalDots - 1)));
        setActiveDot(index);
      }
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.firstElementChild;
      const cardWidth = card ? card.getBoundingClientRect().width : 340;
      const gap = 24;
      const scrollDistance = cardWidth + gap;
      container.scrollBy({
        left: direction === 'left' ? -scrollDistance : scrollDistance,
        behavior: 'smooth'
      });
    }
  };

  const scrollToDot = (dotIndex) => {
    if (scrollRef.current) {
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: (dotIndex / (totalDots - 1)) * maxScroll,
        behavior: 'smooth'
      });
      setActiveDot(dotIndex);
    }
  };

  return (
    <section id="products" className="py-14 sm:py-20 bg-white text-slate-900 relative font-sans scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Header Section (Benchmark: Zoho Product Suite) */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Inspac Enterprise Software Suite</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Integrated Software For <span className="text-blue-600">Every Business Need</span>
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed font-normal">
            A comprehensive suite of connected business software inspired by Zoho, designed to streamline sales, accounting, support, HR, analytics, and automation.
          </p>
        </div>

        {/* Carousel Outer Wrapper with Side Arrows */}
        <div className="relative group/carousel px-1 sm:px-3">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll('left')}
            aria-label="Previous products"
            className="absolute -left-2 sm:-left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-lg border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-blue-600 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
          </button>

          {/* Cards Track: 3 visible cards on desktop (lg:), 2 on tablet (sm:), 1 on mobile */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((prod) => {
              const IconComp = prod.icon;

              return (
                <div
                  key={prod.id}
                  className="flex-shrink-0 w-[85vw] max-w-[340px] sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden group snap-start"
                >
                  {/* Top Illustration Area */}
                  <div className={`h-[135px] sm:h-[150px] ${prod.bgColor} relative overflow-hidden flex items-center justify-center p-3 transition-colors`}>
                    <div className="w-full h-full max-h-[120px] sm:max-h-[135px] flex items-center justify-center">
                      {prod.illustration}
                    </div>
                  </div>

                  {/* Icon Badge overlapping illustration and card body */}
                  <div className="px-5 -mt-5 relative z-10 flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md ${prod.badgeColor}`}>
                      <IconComp className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                      {prod.zohoRef}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 pt-3 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                        <Link to={`/products/${prod.id}`}>
                          {prod.title}
                        </Link>
                      </h3>
                      <p className="text-[11px] font-semibold text-blue-600">
                        {prod.tagline}
                      </p>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal line-clamp-3">
                        {prod.desc}
                      </p>
                    </div>

                    {/* Learn More & Explore Page Link */}
                    <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                      <Link
                        to={`/products/${prod.id}`}
                        className="inline-flex items-center space-x-1.5 text-xs sm:text-[13px] font-bold text-blue-600 hover:text-blue-700 transition-colors group/btn cursor-pointer"
                      >
                        <span>Explore Product</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                      <button
                        type="button"
                        onClick={() => onOpenContact && onOpenContact(`Product Demo: ${prod.title}`)}
                        className="text-[11px] font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                      >
                        Request Demo
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll('right')}
            aria-label="Next products"
            className="absolute -right-2 sm:-right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-lg border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-blue-600 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.2]" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center space-x-2 pt-2">
          {Array.from({ length: totalDots }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToDot(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeDot === idx 
                  ? 'w-6 bg-blue-600' 
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
