import React, { useState, useRef } from 'react';
import { 
  BarChart2, 
  Database, 
  LayoutGrid, 
  Cloud, 
  Settings, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  Bot,
  ShieldCheck,
  Users,
  Wifi
} from 'lucide-react';

export default function ProductsSection({ onOpenContact }) {
  const scrollRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const totalDots = 5;

  const products = [
    {
      id: 'data-analytics',
      title: 'Data & Analytics',
      desc: 'Turn your data into meaningful insights for better decisions.',
      icon: BarChart2,
      badgeColor: 'bg-blue-600 text-white shadow-blue-500/25',
      bgColor: 'bg-[#edf5ff]',
      accentColor: '#2563eb',
      illustration: (
        <svg viewBox="0 0 240 150" className="w-full h-full max-h-[140px] drop-shadow-md select-none">
          <defs>
            <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
            <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f8fafc" />
            </linearGradient>
            <linearGradient id="barGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
          {/* Laptop Base */}
          <path d="M 40 120 L 200 120 L 210 128 L 30 128 Z" fill="#cbd5e1" />
          <ellipse cx="120" cy="122" rx="15" ry="2" fill="#94a3b8" />
          {/* Laptop Screen Frame */}
          <rect x="52" y="32" width="136" height="88" rx="6" fill="#1e293b" />
          <rect x="56" y="36" width="128" height="80" rx="3" fill="url(#screenGrad)" />
          {/* Dashboard Header Bar */}
          <rect x="62" y="42" width="40" height="4" rx="2" fill="#93c5fd" />
          <circle cx="174" cy="44" r="2" fill="#60a5fa" />
          <circle cx="168" cy="44" r="2" fill="#93c5fd" />
          {/* Line Chart */}
          <path d="M 64 78 Q 80 65 95 72 T 125 58 T 155 64" fill="none" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="125" cy="58" r="3" fill="#2563eb" />
          <path d="M 64 88 L 155 88" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2,2" />
          {/* Bar Chart Columns */}
          <rect x="135" y="80" width="6" height="24" rx="2" fill="#bfdbfe" />
          <rect x="145" y="70" width="6" height="34" rx="2" fill="#60a5fa" />
          <rect x="155" y="60" width="6" height="44" rx="2" fill="url(#barGrad)" />
          <rect x="165" y="74" width="6" height="30" rx="2" fill="#3b82f6" />
          {/* Side Floating KPI Card */}
          <rect x="64" y="90" width="55" height="18" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          <rect x="68" y="94" width="24" height="3" rx="1.5" fill="#3b82f6" />
          <rect x="68" y="99" width="38" height="2.5" rx="1" fill="#94a3b8" />
        </svg>
      )
    },
    {
      id: 'database-solutions',
      title: 'Database Solutions',
      desc: 'Secure, scalable and high-performance database systems.',
      icon: Database,
      badgeColor: 'bg-teal-600 text-white shadow-teal-500/25',
      bgColor: 'bg-[#e7f7f3]',
      accentColor: '#0d9488',
      illustration: (
        <svg viewBox="0 0 240 150" className="w-full h-full max-h-[140px] drop-shadow-md select-none">
          <defs>
            <linearGradient id="rackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="diskGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14b8a6" />
              <stop offset="50%" stopColor="#2dd4bf" />
              <stop offset="100%" stopColor="#0d9488" />
            </linearGradient>
          </defs>
          {/* Server Rack Box */}
          <g transform="translate(60, 30)">
            {/* Server Unit 1 */}
            <rect x="0" y="0" width="65" height="22" rx="4" fill="url(#rackGrad)" stroke="#475569" strokeWidth="1" />
            <circle cx="10" cy="11" r="2.5" fill="#2dd4bf" />
            <circle cx="18" cy="11" r="2" fill="#5eead4" />
            <rect x="26" y="9" width="30" height="3.5" rx="1.5" fill="#64748b" />
            {/* Server Unit 2 */}
            <rect x="0" y="26" width="65" height="22" rx="4" fill="url(#rackGrad)" stroke="#475569" strokeWidth="1" />
            <circle cx="10" cy="37" r="2.5" fill="#2dd4bf" />
            <circle cx="18" cy="37" r="2" fill="#5eead4" />
            <rect x="26" y="35" width="30" height="3.5" rx="1.5" fill="#64748b" />
            {/* Server Unit 3 */}
            <rect x="0" y="52" width="65" height="22" rx="4" fill="url(#rackGrad)" stroke="#475569" strokeWidth="1" />
            <circle cx="10" cy="63" r="2.5" fill="#2dd4bf" />
            <circle cx="18" cy="63" r="2" fill="#5eead4" />
            <rect x="26" y="61" width="30" height="3.5" rx="1.5" fill="#64748b" />
          </g>
          {/* Cylindrical Database Stack */}
          <g transform="translate(138, 48)">
            {/* Cylinder Bottom */}
            <path d="M 0 35 C 0 42 45 42 45 35 L 45 52 C 45 59 0 59 0 52 Z" fill="#0f766e" />
            <ellipse cx="22.5" cy="35" rx="22.5" ry="7" fill="url(#diskGrad)" />
            {/* Cylinder Middle */}
            <path d="M 0 17 C 0 24 45 24 45 17 L 45 34 C 45 41 0 41 0 34 Z" fill="#0f766e" />
            <ellipse cx="22.5" cy="17" rx="22.5" ry="7" fill="url(#diskGrad)" />
            {/* Cylinder Top */}
            <path d="M 0 0 C 0 7 45 7 45 0 L 45 16 C 45 23 0 23 0 16 Z" fill="#0f766e" />
            <ellipse cx="22.5" cy="0" rx="22.5" ry="7" fill="#5eead4" />
          </g>
        </svg>
      )
    },
    {
      id: 'erp-solutions',
      title: 'ERP Solutions',
      desc: 'Unify your business operations with integrated ERP systems.',
      icon: LayoutGrid,
      badgeColor: 'bg-amber-500 text-white shadow-amber-500/25',
      bgColor: 'bg-[#fff5e9]',
      accentColor: '#f59e0b',
      illustration: (
        <svg viewBox="0 0 240 150" className="w-full h-full max-h-[140px] drop-shadow-md select-none">
          <defs>
            <linearGradient id="erpLaptop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
          </defs>
          {/* Laptop Base */}
          <path d="M 40 120 L 200 120 L 210 128 L 30 128 Z" fill="#cbd5e1" />
          <ellipse cx="120" cy="122" rx="15" ry="2" fill="#94a3b8" />
          {/* Screen */}
          <rect x="52" y="32" width="136" height="88" rx="6" fill="url(#erpLaptop)" />
          <rect x="56" y="36" width="128" height="80" rx="3" fill="#ffffff" />
          {/* Left Sidebar */}
          <rect x="56" y="36" width="28" height="80" rx="2" fill="#1e293b" />
          <text x="63" y="47" fill="#f8fafc" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">ERP</text>
          <rect x="62" y="55" width="16" height="2" rx="1" fill="#64748b" />
          <rect x="62" y="61" width="16" height="2" rx="1" fill="#64748b" />
          <rect x="62" y="67" width="16" height="2" rx="1" fill="#64748b" />
          <rect x="62" y="73" width="16" height="2" rx="1" fill="#64748b" />
          {/* Header */}
          <rect x="88" y="40" width="30" height="5" rx="2" fill="#f1f5f9" />
          <text x="90" y="44" fill="#64748b" fontSize="4.5" fontWeight="600" fontFamily="sans-serif">ERP PORTAL</text>
          {/* 4 Interactive Modular Tiles */}
          <rect x="90" y="50" width="38" height="26" rx="4" fill="#fff7ed" stroke="#fed7aa" strokeWidth="1" />
          <circle cx="109" cy="59" r="4.5" fill="#f97316" />
          <text x="100" y="70" fill="#9a3412" fontSize="5" fontWeight="bold" fontFamily="sans-serif">Sales</text>
          <rect x="136" y="50" width="38" height="26" rx="4" fill="#fef2f2" stroke="#fecaca" strokeWidth="1" />
          <circle cx="155" cy="59" r="4.5" fill="#ef4444" />
          <text x="142" y="70" fill="#991b1b" fontSize="5" fontWeight="bold" fontFamily="sans-serif">Inventory</text>
          <rect x="90" y="82" width="38" height="26" rx="4" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
          <circle cx="109" cy="91" r="4.5" fill="#10b981" />
          <text x="97" y="102" fill="#065f46" fontSize="5" fontWeight="bold" fontFamily="sans-serif">Finance</text>
          <rect x="136" y="82" width="38" height="26" rx="4" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
          <circle cx="155" cy="91" r="4.5" fill="#3b82f6" />
          <text x="149" y="102" fill="#1e40af" fontSize="5" fontWeight="bold" fontFamily="sans-serif">HR</text>
        </svg>
      )
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      desc: 'Build, deploy and scale with reliable cloud infrastructure.',
      icon: Cloud,
      badgeColor: 'bg-indigo-600 text-white shadow-indigo-500/25',
      bgColor: 'bg-[#f1edff]',
      accentColor: '#6366f1',
      illustration: (
        <svg viewBox="0 0 240 150" className="w-full h-full max-h-[140px] drop-shadow-md select-none">
          <defs>
            <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
            <linearGradient id="cloudServer" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="100%" stopColor="#312e81" />
            </linearGradient>
          </defs>
          <g transform="translate(68, 24)">
            <path 
              d="M 28 45 A 22 22 0 0 1 50 12 A 28 28 0 0 1 95 18 A 20 20 0 0 1 110 45 A 14 14 0 0 1 100 58 L 22 58 A 16 16 0 0 1 28 45 Z" 
              fill="url(#cloudGrad)"
            />
            <ellipse cx="65" cy="24" rx="20" ry="8" fill="#a5b4fc" opacity="0.4" />
          </g>
          <g transform="translate(85, 78)">
            <rect x="0" y="0" width="70" height="20" rx="4" fill="url(#cloudServer)" stroke="#6366f1" strokeWidth="1" />
            <circle cx="10" cy="10" r="2.5" fill="#a5b4fc" />
            <circle cx="18" cy="10" r="2" fill="#c7d2fe" />
            <rect x="28" y="8" width="34" height="3" rx="1.5" fill="#4338ca" />
            <rect x="0" y="24" width="70" height="20" rx="4" fill="url(#cloudServer)" stroke="#6366f1" strokeWidth="1" />
            <circle cx="10" cy="34" r="2.5" fill="#a5b4fc" />
            <circle cx="18" cy="34" r="2" fill="#c7d2fe" />
            <rect x="28" y="32" width="34" height="3" rx="1.5" fill="#4338ca" />
          </g>
          <g transform="translate(52, 70)">
            <circle cx="10" cy="10" r="9" fill="#ffffff" stroke="#c7d2fe" strokeWidth="1" />
            <path d="M 6 8 L 10 5 L 14 8 L 14 12 C 14 14 10 16 10 16 C 10 16 6 14 6 12 Z" fill="#6366f1" />
          </g>
          <g transform="translate(175, 70)">
            <circle cx="10" cy="10" r="9" fill="#ffffff" stroke="#c7d2fe" strokeWidth="1" />
            <path d="M 6 8 L 10 5 L 14 8 L 14 12 C 14 14 10 16 10 16 C 10 16 6 14 6 12 Z" fill="#6366f1" />
          </g>
        </svg>
      )
    },
    {
      id: 'process-management',
      title: 'Process Management',
      desc: 'Streamline workflows, automate processes and ensure operational excellence.',
      icon: Settings,
      badgeColor: 'bg-rose-700 text-white shadow-rose-600/25',
      bgColor: 'bg-[#fff0f4]',
      accentColor: '#be123c',
      illustration: (
        <svg viewBox="0 0 240 150" className="w-full h-full max-h-[140px] drop-shadow-md select-none">
          <defs>
            <linearGradient id="gearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#be123c" />
            </linearGradient>
            <linearGradient id="smallGearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fb7185" />
              <stop offset="100%" stopColor="#e11d48" />
            </linearGradient>
          </defs>
          <g transform="translate(80, 68)">
            <circle cx="0" cy="0" r="28" fill="url(#gearGrad)" />
            <rect x="-6" y="-34" width="12" height="10" rx="2" fill="#be123c" />
            <rect x="-6" y="24" width="12" height="10" rx="2" fill="#be123c" />
            <rect x="-34" y="-6" width="10" height="12" rx="2" fill="#be123c" />
            <rect x="24" y="-6" width="10" height="12" rx="2" fill="#be123c" />
            <g transform="rotate(45)">
              <rect x="-5" y="-33" width="10" height="9" rx="2" fill="#be123c" />
              <rect x="-5" y="24" width="10" height="9" rx="2" fill="#be123c" />
              <rect x="-33" y="-5" width="9" height="10" rx="2" fill="#be123c" />
              <rect x="24" y="-5" width="9" height="10" rx="2" fill="#be123c" />
            </g>
            <circle cx="0" cy="0" r="11" fill="#fff0f4" />
          </g>
          <g transform="translate(118, 92)">
            <circle cx="0" cy="0" r="14" fill="url(#smallGearGrad)" />
            <circle cx="0" cy="0" r="5" fill="#fff0f4" />
          </g>
          <g transform="translate(142, 38)">
            <rect x="0" y="0" width="52" height="66" rx="6" fill="#ffffff" stroke="#fecdd3" strokeWidth="1.5" />
            <rect x="18" y="-4" width="16" height="8" rx="2" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
            <rect x="22" y="-2" width="8" height="4" rx="1" fill="#94a3b8" />
            <rect x="8" y="16" width="9" height="9" rx="2" fill="#f43f5e" />
            <path d="M 10 20 L 12 22 L 15 18" stroke="#ffffff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <rect x="22" y="19" width="22" height="3" rx="1.5" fill="#cbd5e1" />
            <rect x="8" y="32" width="9" height="9" rx="2" fill="#f43f5e" />
            <path d="M 10 36 L 12 38 L 15 34" stroke="#ffffff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <rect x="22" y="35" width="22" height="3" rx="1.5" fill="#cbd5e1" />
            <rect x="8" y="48" width="9" height="9" rx="2" fill="#f43f5e" />
            <path d="M 10 52 L 12 54 L 15 50" stroke="#ffffff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <rect x="22" y="51" width="22" height="3" rx="1.5" fill="#cbd5e1" />
          </g>
        </svg>
      )
    },
    {
      id: 'ai-automation',
      title: 'AI & Intelligent Automation',
      desc: 'Harness machine learning models, predictive intelligence and smart workflows.',
      icon: Bot,
      badgeColor: 'bg-purple-600 text-white shadow-purple-500/25',
      bgColor: 'bg-[#f6f1ff]',
      accentColor: '#9333ea',
      illustration: (
        <svg viewBox="0 0 240 150" className="w-full h-full max-h-[140px] drop-shadow-md select-none">
          <defs>
            <linearGradient id="aiChipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#581c87" />
              <stop offset="100%" stopColor="#2e1065" />
            </linearGradient>
            <linearGradient id="aiGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#7e22ce" />
            </linearGradient>
          </defs>
          {/* Circuit background traces */}
          <path d="M 30 75 L 75 75 L 90 95" stroke="#d8b4fe" strokeWidth="1.5" fill="none" strokeDasharray="3,3" />
          <path d="M 210 75 L 165 75 L 150 55" stroke="#d8b4fe" strokeWidth="1.5" fill="none" strokeDasharray="3,3" />
          <circle cx="30" cy="75" r="3" fill="#a855f7" />
          <circle cx="210" cy="75" r="3" fill="#a855f7" />
          {/* Central AI Microprocessor */}
          <rect x="80" y="35" width="80" height="80" rx="16" fill="url(#aiChipGrad)" stroke="#a855f7" strokeWidth="1.5" />
          {/* Chip Connectors */}
          <rect x="92" y="27" width="6" height="8" rx="2" fill="#a855f7" />
          <rect x="117" y="27" width="6" height="8" rx="2" fill="#a855f7" />
          <rect x="142" y="27" width="6" height="8" rx="2" fill="#a855f7" />
          <rect x="92" y="115" width="6" height="8" rx="2" fill="#a855f7" />
          <rect x="117" y="115" width="6" height="8" rx="2" fill="#a855f7" />
          <rect x="142" y="115" width="6" height="8" rx="2" fill="#a855f7" />
          {/* Central Brain Core / Neural Icon */}
          <circle cx="120" cy="75" r="24" fill="url(#aiGlowGrad)" opacity="0.3" />
          <circle cx="120" cy="75" r="16" fill="#9333ea" />
          {/* Synapse Nodes */}
          <circle cx="112" cy="70" r="3.5" fill="#ffffff" />
          <circle cx="128" cy="70" r="3.5" fill="#ffffff" />
          <circle cx="120" cy="82" r="3.5" fill="#ffffff" />
          <path d="M 112 70 L 128 70 L 120 82 Z" stroke="#ffffff" strokeWidth="1.2" fill="none" />
          {/* Floating AI Performance Pill */}
          <g transform="translate(135, 28)">
            <rect x="0" y="0" width="76" height="22" rx="11" fill="#ffffff" stroke="#e9d5ff" strokeWidth="1.5" />
            <circle cx="11" cy="11" r="3.5" fill="#22c55e" />
            <text x="20" y="14.5" fill="#6b21a8" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">99.4% AI Match</text>
          </g>
        </svg>
      )
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Compliance',
      desc: 'Enterprise-grade threat protection, zero-trust security and data encryption.',
      icon: ShieldCheck,
      badgeColor: 'bg-emerald-600 text-white shadow-emerald-500/25',
      bgColor: 'bg-[#ecfdf5]',
      accentColor: '#059669',
      illustration: (
        <svg viewBox="0 0 240 150" className="w-full h-full max-h-[140px] drop-shadow-md select-none">
          <defs>
            <linearGradient id="cyberShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="cyberBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#064e3b" />
              <stop offset="100%" stopColor="#022c22" />
            </linearGradient>
          </defs>
          {/* Concentric radar security rings */}
          <circle cx="120" cy="75" r="54" fill="none" stroke="#a7f3d0" strokeWidth="1" strokeDasharray="4,4" />
          <circle cx="120" cy="75" r="42" fill="none" stroke="#6ee7b7" strokeWidth="1.2" opacity="0.6" />
          {/* 3D Security Shield */}
          <g transform="translate(90, 40)">
            <path 
              d="M 30 5 L 56 16 C 56 46 45 64 30 74 C 15 64 4 46 4 16 Z" 
              fill="url(#cyberShieldGrad)"
            />
            <path 
              d="M 30 10 L 51 19 C 51 44 42 59 30 68 C 18 59 9 44 9 19 Z" 
              fill="#065f46" 
              opacity="0.25"
            />
            {/* White Checkmark in Shield */}
            <path 
              d="M 21 38 L 27 44 L 39 31" 
              stroke="#ffffff" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="none" 
            />
          </g>
          {/* Left Floating Safe Lock Box */}
          <g transform="translate(42, 60)">
            <rect x="0" y="8" width="32" height="24" rx="4" fill="url(#cyberBaseGrad)" />
            <path d="M 8 8 L 8 4 C 8 -1 24 -1 24 4 L 24 8" stroke="#34d399" strokeWidth="2.5" fill="none" />
            <circle cx="16" cy="20" r="2.5" fill="#34d399" />
          </g>
          {/* Right Floating SOC 2 / Security Badge */}
          <g transform="translate(156, 68)">
            <rect x="0" y="0" width="56" height="22" rx="6" fill="#ffffff" stroke="#a7f3d0" strokeWidth="1.5" />
            <circle cx="10" cy="11" r="3" fill="#10b981" />
            <text x="18" y="14" fill="#065f46" fontSize="6" fontWeight="bold" fontFamily="sans-serif">ENCRYPTED</text>
          </g>
        </svg>
      )
    },
    {
      id: 'crm-cx',
      title: 'CRM & Customer Experience',
      desc: 'Omnichannel customer relationship management and automated engagement.',
      icon: Users,
      badgeColor: 'bg-sky-600 text-white shadow-sky-500/25',
      bgColor: 'bg-[#f0f9ff]',
      accentColor: '#0284c7',
      illustration: (
        <svg viewBox="0 0 240 150" className="w-full h-full max-h-[140px] drop-shadow-md select-none">
          <defs>
            <linearGradient id="crmHeaderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
          {/* Modern CRM Customer Card */}
          <g transform="translate(55, 34)">
            <rect x="0" y="0" width="130" height="82" rx="8" fill="#ffffff" stroke="#bae6fd" strokeWidth="1.5" />
            {/* Top banner */}
            <rect x="0" y="0" width="130" height="22" rx="8" fill="url(#crmHeaderGrad)" />
            <rect x="0" y="14" width="130" height="8" fill="url(#crmHeaderGrad)" />
            {/* Avatar Circle */}
            <circle cx="24" cy="22" r="14" fill="#ffffff" stroke="#e0f2fe" strokeWidth="2" />
            <circle cx="24" cy="18" r="5" fill="#0284c7" />
            <path d="M 14 29 C 14 24 34 24 34 29 Z" fill="#0284c7" />
            {/* Name & Title placeholder lines */}
            <rect x="44" y="27" width="55" height="4" rx="2" fill="#0369a1" />
            <rect x="44" y="34" width="35" height="3" rx="1.5" fill="#94a3b8" />
            {/* 5 Rating Stars */}
            <g transform="translate(44, 42)">
              <polygon points="4,0 5.2,2.8 8,3 5.8,5 6.5,8 4,6.4 1.5,8 2.2,5 0,3 2.8,2.8" fill="#f59e0b" />
              <polygon points="14,0 15.2,2.8 18,3 15.8,5 16.5,8 14,6.4 11.5,8 12.2,5 10,3 12.8,2.8" fill="#f59e0b" />
              <polygon points="24,0 25.2,2.8 28,3 25.8,5 26.5,8 24,6.4 21.5,8 22.2,5 20,3 22.8,2.8" fill="#f59e0b" />
              <polygon points="34,0 35.2,2.8 38,3 35.8,5 36.5,8 34,6.4 31.5,8 32.2,5 30,3 32.8,2.8" fill="#f59e0b" />
              <polygon points="44,0 45.2,2.8 48,3 45.8,5 46.5,8 44,6.4 41.5,8 42.2,5 40,3 42.8,2.8" fill="#f59e0b" />
            </g>
            {/* KPI pill tags */}
            <rect x="14" y="56" width="46" height="15" rx="4" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="1" />
            <text x="20" y="66" fill="#0284c7" fontSize="5" fontWeight="bold" fontFamily="sans-serif">+48% Deals</text>
            <rect x="66" y="56" width="52" height="15" rx="4" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
            <text x="72" y="66" fill="#16a34a" fontSize="5" fontWeight="bold" fontFamily="sans-serif">99.8% CSAT</text>
          </g>
        </svg>
      )
    },
    {
      id: 'iot-telemetry',
      title: 'IoT & Smart Telemetry',
      desc: 'Connect smart hardware, monitor remote edge sensors and capture real-time telemetry.',
      icon: Wifi,
      badgeColor: 'bg-orange-600 text-white shadow-orange-500/25',
      bgColor: 'bg-[#fff7ed]',
      accentColor: '#ea580c',
      illustration: (
        <svg viewBox="0 0 240 150" className="w-full h-full max-h-[140px] drop-shadow-md select-none">
          <defs>
            <linearGradient id="iotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#c2410c" />
            </linearGradient>
            <linearGradient id="sensorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#292524" />
              <stop offset="100%" stopColor="#1c1917" />
            </linearGradient>
          </defs>
          {/* Wireless Broadcast Waves */}
          <circle cx="120" cy="82" r="48" fill="none" stroke="#fed7aa" strokeWidth="1.5" strokeDasharray="5,5" />
          <circle cx="120" cy="82" r="34" fill="none" stroke="#fdba74" strokeWidth="1.8" />
          <circle cx="120" cy="82" r="20" fill="none" stroke="#fb923c" strokeWidth="2" />
          {/* Central Smart Gateway Device */}
          <rect x="98" y="64" width="44" height="36" rx="8" fill="url(#sensorGrad)" stroke="#f97316" strokeWidth="1.5" />
          {/* Dual Antenna */}
          <line x1="108" y1="64" x2="102" y2="44" stroke="#78716c" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="102" cy="44" r="2.5" fill="#ea580c" />
          <line x1="132" y1="64" x2="138" y2="44" stroke="#78716c" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="138" cy="44" r="2.5" fill="#ea580c" />
          {/* Status LEDs on Device */}
          <circle cx="110" cy="82" r="3" fill="#22c55e" />
          <circle cx="120" cy="82" r="3" fill="#f97316" />
          <circle cx="130" cy="82" r="3" fill="#38bdf8" />
          {/* Left Sensor Widget */}
          <g transform="translate(38, 52)">
            <rect x="0" y="0" width="45" height="38" rx="6" fill="#ffffff" stroke="#fed7aa" strokeWidth="1.2" />
            <text x="6" y="12" fill="#78716c" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif">TEMP</text>
            <text x="6" y="26" fill="#ea580c" fontSize="9" fontWeight="bold" fontFamily="sans-serif">24.5°C</text>
            <rect x="6" y="30" width="33" height="3" rx="1.5" fill="#ffedd5" />
            <rect x="6" y="30" width="22" height="3" rx="1.5" fill="#f97316" />
          </g>
          {/* Right Live Stream Status */}
          <g transform="translate(157, 52)">
            <rect x="0" y="0" width="50" height="38" rx="6" fill="#ffffff" stroke="#fed7aa" strokeWidth="1.2" />
            <text x="6" y="12" fill="#78716c" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif">STATUS</text>
            <text x="6" y="24" fill="#16a34a" fontSize="7" fontWeight="bold" fontFamily="sans-serif">LIVE SYNC</text>
            <path d="M 6 32 Q 14 26 22 30 T 38 28" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        </svg>
      )
    }
  ];

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
      const gap = 24; // 24px gap between cards
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
    <section id="products" className="py-12 sm:py-16 bg-white text-slate-900 relative font-sans scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5 sm:space-y-3">
          <div className="space-y-1.5">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-slate-500 uppercase">
              OUR PRODUCTS
            </span>
            <div className="w-8 h-0.5 bg-blue-600 rounded-full mx-auto" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Software Solutions for <span className="text-blue-600">Every Need</span>
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed font-normal">
            A comprehensive suite of software products designed to simplify operations, improve efficiency and help businesses grow.
          </p>
        </div>

        {/* Carousel Outer Wrapper with Side Arrows */}
        <div className="relative group/carousel px-1 sm:px-3">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll('left')}
            aria-label="Previous products"
            className="absolute -left-2 sm:-left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-lg border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-blue-600 hover:scale-110 active:scale-95 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
          </button>

          {/* Cards Track: exactly 3 visible cards on desktop (lg:), 2 on tablet (sm:), 1 on mobile */}
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
                  className="flex-shrink-0 w-[85vw] max-w-[340px] sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden group snap-start"
                >
                  {/* Top Illustration Area */}
                  <div className={`h-[135px] sm:h-[150px] ${prod.bgColor} relative overflow-hidden flex items-center justify-center p-3 transition-colors`}>
                    <div className="w-full h-full max-h-[120px] sm:max-h-[135px] flex items-center justify-center">
                      {prod.illustration}
                    </div>
                  </div>

                  {/* Icon Badge overlapping illustration and card body */}
                  <div className="px-5 -mt-5 relative z-10">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md ${prod.badgeColor}`}>
                      <IconComp className="w-5 h-5 stroke-[2.2]" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 pt-3 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                        {prod.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal line-clamp-3">
                        {prod.desc}
                      </p>
                    </div>

                    {/* Learn More Link */}
                    <button
                      type="button"
                      onClick={() => onOpenContact && onOpenContact(`Product Inquiry: ${prod.title}`)}
                      className="inline-flex items-center space-x-1.5 text-xs sm:text-[13px] font-bold text-blue-600 hover:text-blue-700 transition-colors pt-1 group/btn w-fit"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll('right')}
            aria-label="Next products"
            className="absolute -right-2 sm:-right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-lg border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-blue-600 hover:scale-110 active:scale-95 transition-all duration-200"
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
              className={`h-2 rounded-full transition-all duration-300 ${
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
