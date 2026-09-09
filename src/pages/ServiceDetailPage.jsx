import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { 
  ArrowRight, 
  ChevronRight, 
  ChevronDown, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Layers, 
  Database, 
  Clock, 
  Code2, 
  Cloud, 
  BarChart3, 
  GitPullRequest, 
  Compass, 
  Workflow, 
  Cpu, 
  Terminal, 
  FileCheck, 
  ExternalLink,
  Award,
  Check,
  Star,
  Activity,
  Sliders,
  Shield
} from 'lucide-react';

// Service icon mapping
const serviceIcons = {
  'digital-engineering': Code2,
  'cloud-devsecops': Cloud,
  'ai-data-lakehouse': BarChart3,
  'cybersecurity-grc': ShieldCheck,
  'enterprise-erp': Layers,
  'process-automation': GitPullRequest,
  'quality-engineering': CheckCircle2,
  'managed-services': Database,
};

// Custom interactive vector architecture illustrations tailored for each service practice
const serviceIllustrations = {
  'digital-engineering': (
    <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-2xl select-none">
      <defs>
        <linearGradient id="deHeader" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      {/* Window Chrome */}
      <rect x="10" y="10" width="380" height="220" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M 10 38 L 390 38" stroke="#f1f5f9" strokeWidth="2" />
      <circle cx="28" cy="24" r="4" fill="#ef4444" />
      <circle cx="42" cy="24" r="4" fill="#f59e0b" />
      <circle cx="56" cy="24" r="4" fill="#10b981" />
      <text x="75" y="28" fill="#475569" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Digital Engineering — Next.js & Microservices Mesh</text>
      <rect x="306" y="18" width="74" height="14" rx="4" fill="#dbeafe" />
      <text x="312" y="28" fill="#1d4ed8" fontSize="8" fontWeight="bold" fontFamily="sans-serif">● 42ms LATENCY</text>

      {/* Architecture Blocks */}
      {/* Tier 1: Frontend Next.js */}
      <g transform="translate(24, 52)">
        <rect x="0" y="0" width="102" height="160" rx="8" fill="#f8fafc" stroke="#93c5fd" strokeWidth="1.5" />
        <rect x="8" y="10" width="86" height="24" rx="4" fill="#1e293b" />
        <text x="14" y="26" fill="#38bdf8" fontSize="9" fontWeight="bold" fontFamily="sans-serif">NEXT.JS 15 SSR</text>
        <rect x="8" y="42" width="86" height="32" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
        <text x="14" y="56" fill="#0f172a" fontSize="8" fontWeight="bold" fontFamily="sans-serif">React 19 Hooks</text>
        <text x="14" y="66" fill="#64748b" fontSize="7" fontFamily="sans-serif">Tailwind UI Tokens</text>
        <rect x="8" y="82" width="86" height="32" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
        <text x="14" y="96" fill="#0f172a" fontSize="8" fontWeight="bold" fontFamily="sans-serif">PWA Mobile Core</text>
        <text x="14" y="106" fill="#16a34a" fontSize="7" fontWeight="bold" fontFamily="sans-serif">WCAG 2.1 AA ✓</text>
        <rect x="8" y="122" width="86" height="26" rx="4" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1" />
        <text x="14" y="138" fill="#047857" fontSize="8" fontWeight="black" fontFamily="sans-serif">TTFB: 0.18s ✓</text>
      </g>

      {/* Connecting Flow Arrows */}
      <path d="M 132 100 L 148 100" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 3" />
      <path d="M 132 160 L 148 160" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 3" />

      {/* Tier 2: API Gateway & Broker */}
      <g transform="translate(152, 52)">
        <rect x="0" y="0" width="102" height="160" rx="8" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
        <rect x="8" y="10" width="86" height="24" rx="4" fill="#1d4ed8" />
        <text x="14" y="26" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">API GATEWAY</text>
        <rect x="8" y="42" width="86" height="32" rx="4" fill="#ffffff" stroke="#dbeafe" strokeWidth="1" />
        <text x="14" y="56" fill="#1e3a8a" fontSize="8" fontWeight="bold" fontFamily="sans-serif">GraphQL Federation</text>
        <text x="14" y="66" fill="#64748b" fontSize="7" fontFamily="sans-serif">Schema Registry</text>
        <rect x="8" y="82" width="86" height="32" rx="4" fill="#ffffff" stroke="#dbeafe" strokeWidth="1" />
        <text x="14" y="96" fill="#1e3a8a" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Apache Kafka Bus</text>
        <text x="14" y="106" fill="#2563eb" fontSize="7" fontWeight="bold" fontFamily="sans-serif">1M events / sec</text>
        <rect x="8" y="122" width="86" height="26" rx="4" fill="#1e40af" />
        <text x="14" y="138" fill="#ffffff" fontSize="8" fontWeight="black" fontFamily="sans-serif">mTLS 2.0 ZERO TRUST</text>
      </g>

      {/* Connecting Flow Arrows */}
      <path d="M 260 100 L 276 100" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 3" />
      <path d="M 260 160 L 276 160" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 3" />

      {/* Tier 3: Microservices */}
      <g transform="translate(280, 52)">
        <rect x="0" y="0" width="96" height="160" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
        <rect x="8" y="10" width="80" height="24" rx="4" fill="#0f172a" />
        <text x="14" y="26" fill="#38bdf8" fontSize="9" fontWeight="bold" fontFamily="sans-serif">CONTAINERS</text>
        <rect x="8" y="42" width="80" height="32" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
        <text x="14" y="56" fill="#0f172a" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Auth Service</text>
        <text x="14" y="66" fill="#16a34a" fontSize="7" fontWeight="bold" fontFamily="sans-serif">HEALTHY 100%</text>
        <rect x="8" y="82" width="80" height="32" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
        <text x="14" y="96" fill="#0f172a" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Order Engine</text>
        <text x="14" y="106" fill="#16a34a" fontSize="7" fontWeight="bold" fontFamily="sans-serif">HEALTHY 100%</text>
        <rect x="8" y="122" width="80" height="26" rx="4" fill="#ecfdf5" stroke="#86efac" strokeWidth="1" />
        <text x="12" y="138" fill="#15803d" fontSize="7.5" fontWeight="black" fontFamily="sans-serif">AUTO-SCALED ✓</text>
      </g>
    </svg>
  ),

  'cloud-devsecops': (
    <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-2xl select-none">
      <rect x="10" y="10" width="380" height="220" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M 10 38 L 390 38" stroke="#f1f5f9" strokeWidth="2" />
      <circle cx="28" cy="24" r="4" fill="#ef4444" />
      <circle cx="42" cy="24" r="4" fill="#f59e0b" />
      <circle cx="56" cy="24" r="4" fill="#10b981" />
      <text x="75" y="28" fill="#475569" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Inspac Multi-Cloud Landing Zone & Kubernetes Mesh</text>
      {/* Top Hyperscaler Ribbon */}
      <g transform="translate(24, 50)">
        <rect x="0" y="0" width="110" height="36" rx="6" fill="#ffedd5" stroke="#fed7aa" strokeWidth="1" />
        <text x="12" y="18" fill="#c2410c" fontSize="9" fontWeight="bold" fontFamily="sans-serif">AWS ap-southeast-1</text>
        <text x="12" y="28" fill="#9a3412" fontSize="7.5" fontFamily="sans-serif">Control Tower Active</text>
      </g>
      <g transform="translate(144, 50)">
        <rect x="0" y="0" width="112" height="36" rx="6" fill="#e0f2fe" stroke="#bae6fd" strokeWidth="1" />
        <text x="12" y="18" fill="#0369a1" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Azure Southeast Asia</text>
        <text x="12" y="28" fill="#0c4a6e" fontSize="7.5" fontFamily="sans-serif">Management Groups</text>
      </g>
      <g transform="translate(266, 50)">
        <rect x="0" y="0" width="110" height="36" rx="6" fill="#e0e7ff" stroke="#c7d2fe" strokeWidth="1" />
        <text x="12" y="18" fill="#4338ca" fontSize="9" fontWeight="bold" fontFamily="sans-serif">GCP asia-southeast1</text>
        <text x="12" y="28" fill="#312e81" fontSize="7.5" fontFamily="sans-serif">VPC Service Controls</text>
      </g>

      {/* Main Terraform & Kubernetes Box */}
      <g transform="translate(24, 98)">
        <rect x="0" y="0" width="220" height="114" rx="8" fill="#0f172a" />
        <text x="14" y="22" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="sans-serif">TERRAFORM IAC & ARGO GITOPS</text>
        <text x="14" y="38" fill="#a5f3fc" fontSize="8" fontFamily="monospace">$ terraform apply --auto-approve</text>
        <text x="14" y="52" fill="#86efac" fontSize="8" fontFamily="monospace">✓ 28 modules applied (0 drift)</text>
        <text x="14" y="66" fill="#93c5fd" fontSize="8" fontFamily="monospace">✓ EKS Karpenter auto-scaling active</text>
        <text x="14" y="80" fill="#cbd5e1" fontSize="8" fontFamily="monospace">✓ Vault dynamic credentials injected</text>
        <rect x="14" y="90" width="120" height="14" rx="3" fill="#1e293b" />
        <text x="20" y="100" fill="#22c55e" fontSize="8" fontWeight="bold" fontFamily="sans-serif">CIS BENCHMARK 100% PASS</text>
      </g>

      {/* Right FinOps & SLA Gauge */}
      <g transform="translate(254, 98)">
        <rect x="0" y="0" width="122" height="114" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
        <text x="12" y="20" fill="#475569" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">FINOPS SAVINGS</text>
        <text x="12" y="44" fill="#4f46e5" fontSize="22" fontWeight="black" fontFamily="sans-serif">-35.8%</text>
        <text x="12" y="60" fill="#64748b" fontSize="7.5" fontFamily="sans-serif">Compute Spend Trimmed</text>
        <rect x="12" y="74" width="98" height="26" rx="4" fill="#dcfce7" stroke="#86efac" strokeWidth="1" />
        <text x="18" y="90" fill="#15803d" fontSize="8" fontWeight="bold" fontFamily="sans-serif">UPTIME: 99.995% ✓</text>
      </g>
    </svg>
  ),

  'ai-data-lakehouse': (
    <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-2xl select-none">
      <rect x="10" y="10" width="380" height="220" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M 10 38 L 390 38" stroke="#f1f5f9" strokeWidth="2" />
      <circle cx="28" cy="24" r="4" fill="#ef4444" />
      <circle cx="42" cy="24" r="4" fill="#f59e0b" />
      <circle cx="56" cy="24" r="4" fill="#10b981" />
      <text x="75" y="28" fill="#475569" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Inspac Enterprise AI & Medallion Lakehouse (Snowflake/Databricks)</text>
      {/* Medallion Flow */}
      {/* Bronze */}
      <g transform="translate(24, 52)">
        <rect x="0" y="0" width="105" height="100" rx="8" fill="#fef3c7" stroke="#fde68a" strokeWidth="1.5" />
        <text x="12" y="22" fill="#92400e" fontSize="10" fontWeight="bold" fontFamily="sans-serif">BRONZE (RAW)</text>
        <text x="12" y="38" fill="#78350f" fontSize="8" fontFamily="sans-serif">CDC Streaming Ingest</text>
        <text x="12" y="52" fill="#78350f" fontSize="8" fontFamily="sans-serif">Kafka & ERP Connectors</text>
        <text x="12" y="66" fill="#78350f" fontSize="8" fontFamily="sans-serif">Delta Lake Schema</text>
        <rect x="10" y="76" width="85" height="14" rx="3" fill="#ffffff" />
        <text x="16" y="86" fill="#92400e" fontSize="7.5" fontWeight="bold" fontFamily="sans-serif">FRESHNESS: 45s</text>
      </g>
      {/* Silver */}
      <g transform="translate(148, 52)">
        <rect x="0" y="0" width="105" height="100" rx="8" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5" />
        <text x="12" y="22" fill="#334155" fontSize="10" fontWeight="bold" fontFamily="sans-serif">SILVER (DBT)</text>
        <text x="12" y="38" fill="#475569" fontSize="8" fontFamily="sans-serif">Deduplicated Models</text>
        <text x="12" y="52" fill="#475569" fontSize="8" fontFamily="sans-serif">Data Quality Asserts</text>
        <text x="12" y="66" fill="#475569" fontSize="8" fontFamily="sans-serif">Conformed Dimensions</text>
        <rect x="10" y="76" width="85" height="14" rx="3" fill="#ffffff" />
        <text x="16" y="86" fill="#16a34a" fontSize="7.5" fontWeight="bold" fontFamily="sans-serif">100% TEST PASS ✓</text>
      </g>
      {/* Gold */}
      <g transform="translate(272, 52)">
        <rect x="0" y="0" width="105" height="100" rx="8" fill="#fdf4ff" stroke="#f0abfc" strokeWidth="1.5" />
        <text x="12" y="22" fill="#86198f" fontSize="10" fontWeight="bold" fontFamily="sans-serif">GOLD & RAG</text>
        <text x="12" y="38" fill="#701a75" fontSize="8" fontFamily="sans-serif">Executive Data Marts</text>
        <text x="12" y="52" fill="#701a75" fontSize="8" fontFamily="sans-serif">Vector Embeddings</text>
        <text x="12" y="66" fill="#701a75" fontSize="8" fontFamily="sans-serif">Private LLM Agents</text>
        <rect x="10" y="76" width="85" height="14" rx="3" fill="#86198f" />
        <text x="14" y="86" fill="#ffffff" fontSize="7.5" fontWeight="bold" fontFamily="sans-serif">SUB-SECOND BI ✓</text>
      </g>

      {/* Bottom KPI Dashboard Strip */}
      <g transform="translate(24, 162)">
        <rect x="0" y="0" width="352" height="52" rx="8" fill="#0f172a" />
        <text x="16" y="24" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="sans-serif">EXECUTIVE REVENUE INTELLIGENCE (LIVE)</text>
        <text x="16" y="42" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">Snowflake Virtual Warehouse: Active · 500+ Data Sources Unified · Single Source of Truth</text>
        <rect x="250" y="14" width="90" height="24" rx="4" fill="#15803d" />
        <text x="258" y="29" fill="#ffffff" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">8x FASTER QUERY</text>
      </g>
    </svg>
  ),

  'cybersecurity-grc': (
    <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-2xl select-none">
      <rect x="10" y="10" width="380" height="220" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M 10 38 L 390 38" stroke="#f1f5f9" strokeWidth="2" />
      <circle cx="28" cy="24" r="4" fill="#ef4444" />
      <circle cx="42" cy="24" r="4" fill="#f59e0b" />
      <circle cx="56" cy="24" r="4" fill="#10b981" />
      <text x="75" y="28" fill="#475569" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Inspac Cyber Defense & PCI-DSS 4.0 Compliance Console</text>
      {/* Top Security Banner */}
      <rect x="24" y="50" width="352" height="32" rx="6" fill="#064e3b" />
      <circle cx="42" cy="66" r="6" fill="#34d399" />
      <text x="56" y="70" fill="#ecfdf5" fontSize="9.5" fontWeight="bold" fontFamily="sans-serif">PCI-DSS v4.0 Attestation of Compliance (AOC) · 100% Pass Rate</text>
      <rect x="290" y="56" width="76" height="20" rx="4" fill="#10b981" />
      <text x="298" y="69" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="sans-serif">QSA AUDITED ✓</text>

      {/* Security Architecture Blocks */}
      <g transform="translate(24, 92)">
        <rect x="0" y="0" width="168" height="118" rx="8" fill="#f8fafc" stroke="#86efac" strokeWidth="1.5" />
        <text x="14" y="22" fill="#166534" fontSize="10" fontWeight="bold" fontFamily="sans-serif">CDE NETWORK ISOLATION</text>
        <text x="14" y="40" fill="#475569" fontSize="8" fontFamily="sans-serif">✓ Cardholder Data Micro-Segmented</text>
        <text x="14" y="56" fill="#475569" fontSize="8" fontFamily="sans-serif">✓ Tokenization Scope Reduced by 75%</text>
        <text x="14" y="72" fill="#475569" fontSize="8" fontFamily="sans-serif">✓ Script Integrity (Req 6.4.3 & 11.6.1)</text>
        <text x="14" y="88" fill="#475569" fontSize="8" fontFamily="sans-serif">✓ Phishing-Resistant MFA Enforced</text>
        <rect x="14" y="96" width="140" height="14" rx="3" fill="#dcfce7" />
        <text x="20" y="106" fill="#14532d" fontSize="7.5" fontWeight="bold" fontFamily="sans-serif">ZERO NON-COMPLIANCE RISK</text>
      </g>

      <g transform="translate(208, 92)">
        <rect x="0" y="0" width="168" height="118" rx="8" fill="#0f172a" />
        <text x="14" y="22" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="sans-serif">CONTINUOUS SIEM & PENTEST</text>
        <text x="14" y="40" fill="#a5f3fc" fontSize="8" fontFamily="monospace">ASV Quarterly Scan: PASSED</text>
        <text x="14" y="54" fill="#86efac" fontSize="8" fontFamily="monospace">Critical CVEs: 0 Detected</text>
        <text x="14" y="68" fill="#93c5fd" fontSize="8" fontFamily="monospace">Wazuh SIEM Rules: Active</text>
        <text x="14" y="82" fill="#cbd5e1" fontSize="8" fontFamily="monospace">ISO 27001:2022 ISMS Certified</text>
        <rect x="14" y="92" width="140" height="18" rx="4" fill="#059669" />
        <text x="22" y="104" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="sans-serif">OFFICIAL AOC SIGNED ✓</text>
      </g>
    </svg>
  ),

  'enterprise-erp': (
    <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-2xl select-none">
      <rect x="10" y="10" width="380" height="220" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M 10 38 L 390 38" stroke="#f1f5f9" strokeWidth="2" />
      <circle cx="28" cy="24" r="4" fill="#ef4444" />
      <circle cx="42" cy="24" r="4" fill="#f59e0b" />
      <circle cx="56" cy="24" r="4" fill="#10b981" />
      <text x="75" y="28" fill="#475569" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Inspac SAP S/4HANA & Oracle Cloud Clean-Core ERP Engine</text>
      {/* Left Core ERP Box */}
      <g transform="translate(24, 52)">
        <rect x="0" y="0" width="170" height="158" rx="8" fill="#fffbeb" stroke="#fcd34d" strokeWidth="1.5" />
        <rect x="12" y="12" width="146" height="24" rx="4" fill="#78350f" />
        <text x="18" y="27" fill="#fde68a" fontSize="9" fontWeight="bold" fontFamily="sans-serif">SAP S/4HANA CLEAN CORE</text>
        <text x="14" y="52" fill="#92400e" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Financial General Ledger (FI/CO)</text>
        <text x="14" y="68" fill="#92400e" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Procure-to-Pay (P2P) Workflows</text>
        <text x="14" y="84" fill="#92400e" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Multi-Warehouse Inventory (MM)</text>
        <text x="14" y="100" fill="#92400e" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Automated Period Close Engine</text>
        <rect x="12" y="116" width="146" height="30" rx="4" fill="#ffffff" stroke="#fcd34d" strokeWidth="1" />
        <text x="18" y="132" fill="#b45309" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">MONTH-END CLOSE: -5 DAYS ✓</text>
      </g>

      {/* Right Middleware Synchronizer */}
      <g transform="translate(208, 52)">
        <rect x="0" y="0" width="168" height="158" rx="8" fill="#0f172a" />
        <text x="14" y="24" fill="#fbbf24" fontSize="10" fontWeight="bold" fontFamily="sans-serif">REST & KAFKA MIDDLEWARE</text>
        <text x="14" y="44" fill="#fde68a" fontSize="8" fontFamily="monospace">CRM Deals Sync: Real-Time</text>
        <text x="14" y="60" fill="#86efac" fontSize="8" fontFamily="monospace">Warehouse Dispatch: 120k/day</text>
        <text x="14" y="76" fill="#38bdf8" fontSize="8" fontFamily="monospace">BTP Side-by-Side Apps: Active</text>
        <text x="14" y="92" fill="#cbd5e1" fontSize="8" fontFamily="monospace">Intercompany Eliminations: Auto</text>
        <rect x="14" y="112" width="140" height="32" rx="5" fill="#d97706" />
        <text x="20" y="128" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="sans-serif">ZERO DATA DISCREPANCY</text>
        <text x="20" y="138" fill="#fef3c7" fontSize="7" fontFamily="sans-serif">Sub-Second Bidirectional Sync</text>
      </g>
    </svg>
  ),

  'process-automation': (
    <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-2xl select-none">
      <rect x="10" y="10" width="380" height="220" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M 10 38 L 390 38" stroke="#f1f5f9" strokeWidth="2" />
      <circle cx="28" cy="24" r="4" fill="#ef4444" />
      <circle cx="42" cy="24" r="4" fill="#f59e0b" />
      <circle cx="56" cy="24" r="4" fill="#10b981" />
      <text x="75" y="28" fill="#475569" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Inspac Intelligent RPA & Cognitive Document Processing Console</text>
      {/* Bot Orchestrator Queue */}
      <g transform="translate(24, 52)">
        <rect x="0" y="0" width="170" height="158" rx="8" fill="#fff1f2" stroke="#fecdd3" strokeWidth="1.5" />
        <rect x="12" y="12" width="146" height="24" rx="4" fill="#9f1239" />
        <text x="18" y="27" fill="#ffe4e6" fontSize="9" fontWeight="bold" fontFamily="sans-serif">UIPATH BOT ORCHESTRATOR</text>
        <text x="14" y="52" fill="#9f1239" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Active Unattended Bots: 48</text>
        <text x="14" y="68" fill="#9f1239" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Processed Today: 45,200</text>
        <text x="14" y="84" fill="#9f1239" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Manual Error Rate: 0.02%</text>
        <text x="14" y="100" fill="#9f1239" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Avg Queue Time: 1.8s</text>
        <rect x="12" y="116" width="146" height="30" rx="4" fill="#ffffff" stroke="#fda4af" strokeWidth="1" />
        <text x="18" y="134" fill="#e11d48" fontSize="9" fontWeight="black" fontFamily="sans-serif">FTE CAPACITY SAVED: 80% ✓</text>
      </g>

      {/* Cognitive IDP Scanner */}
      <g transform="translate(208, 52)">
        <rect x="0" y="0" width="168" height="158" rx="8" fill="#0f172a" />
        <text x="14" y="24" fill="#fda4af" fontSize="10" fontWeight="bold" fontFamily="sans-serif">COGNITIVE IDP SCANNER</text>
        <text x="14" y="44" fill="#ffe4e6" fontSize="8" fontFamily="monospace">Invoice OCR: #INV-2026-89</text>
        <text x="14" y="60" fill="#86efac" fontSize="8" fontFamily="monospace">Confidence Score: 99.4% ✓</text>
        <text x="14" y="76" fill="#38bdf8" fontSize="8" fontFamily="monospace">PO Matching: 100% Validated</text>
        <text x="14" y="92" fill="#cbd5e1" fontSize="8" fontFamily="monospace">ERP Ledger Entry: Dispatched</text>
        <rect x="14" y="112" width="140" height="32" rx="5" fill="#e11d48" />
        <text x="20" y="128" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="sans-serif">AUTONOMOUS DISPATCH ✓</text>
        <text x="20" y="138" fill="#ffe4e6" fontSize="7" fontFamily="sans-serif">5x Velocity Acceleration</text>
      </g>
    </svg>
  ),

  'quality-engineering': (
    <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-2xl select-none">
      <rect x="10" y="10" width="380" height="220" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M 10 38 L 390 38" stroke="#f1f5f9" strokeWidth="2" />
      <circle cx="28" cy="24" r="4" fill="#ef4444" />
      <circle cx="42" cy="24" r="4" fill="#f59e0b" />
      <circle cx="56" cy="24" r="4" fill="#10b981" />
      <text x="75" y="28" fill="#475569" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Inspac Autonomous QA & Distributed Load Harness (Playwright & k6)</text>
      {/* Test Matrix */}
      <g transform="translate(24, 52)">
        <rect x="0" y="0" width="170" height="158" rx="8" fill="#f0fdfa" stroke="#99f6e4" strokeWidth="1.5" />
        <rect x="12" y="12" width="146" height="24" rx="4" fill="#115e59" />
        <text x="18" y="27" fill="#ccfbf1" fontSize="9" fontWeight="bold" fontFamily="sans-serif">PARALLEL TEST SUITE (CI/CD)</text>
        <text x="14" y="52" fill="#0f766e" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Chromium Tests: 480 / 480 PASSED</text>
        <text x="14" y="68" fill="#0f766e" fontSize="8" fontWeight="bold" fontFamily="sans-serif">WebKit Tests: 480 / 480 PASSED</text>
        <text x="14" y="84" fill="#0f766e" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Firefox Tests: 480 / 480 PASSED</text>
        <text x="14" y="100" fill="#0f766e" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Pact Contract Verification: 100%</text>
        <rect x="12" y="116" width="146" height="30" rx="4" fill="#ffffff" stroke="#5eead4" strokeWidth="1" />
        <text x="16" y="134" fill="#0d9488" fontSize="8.5" fontWeight="black" fontFamily="sans-serif">ZERO DEFECT ESCAPES ✓</text>
      </g>

      {/* k6 Distributed Load Telemetry */}
      <g transform="translate(208, 52)">
        <rect x="0" y="0" width="168" height="158" rx="8" fill="#0f172a" />
        <text x="14" y="24" fill="#2dd4bf" fontSize="10" fontWeight="bold" fontFamily="sans-serif">K6 LOAD STRESS HARNESS</text>
        <text x="14" y="44" fill="#ccfbf1" fontSize="8" fontFamily="monospace">Simulated Peak: 500,000 RPS</text>
        <text x="14" y="60" fill="#86efac" fontSize="8" fontFamily="monospace">Error Rate: 0.00% (0 drops)</text>
        <text x="14" y="76" fill="#38bdf8" fontSize="8" fontFamily="monospace">P99 Latency: 82ms</text>
        <text x="14" y="92" fill="#cbd5e1" fontSize="8" fontFamily="monospace">Chaos Fault Injection: Healed</text>
        <rect x="14" y="112" width="140" height="32" rx="5" fill="#0f766e" />
        <text x="20" y="128" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="sans-serif">HIGH-LOAD RESILIENCE ✓</text>
        <text x="20" y="138" fill="#ccfbf1" fontSize="7" fontFamily="sans-serif">Regression Duration: 11 mins</text>
      </g>
    </svg>
  ),

  'managed-services': (
    <svg viewBox="0 0 400 240" className="w-full h-auto drop-shadow-2xl select-none">
      <rect x="10" y="10" width="380" height="220" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M 10 38 L 390 38" stroke="#f1f5f9" strokeWidth="2" />
      <circle cx="28" cy="24" r="4" fill="#ef4444" />
      <circle cx="42" cy="24" r="4" fill="#f59e0b" />
      <circle cx="56" cy="24" r="4" fill="#10b981" />
      <text x="75" y="28" fill="#475569" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Inspac 24/7/365 Global NOC/SOC Enterprise Operations Console</text>
      {/* NOC Header */}
      <rect x="24" y="50" width="352" height="32" rx="6" fill="#1e3a8a" />
      <circle cx="42" cy="66" r="6" fill="#60a5fa" />
      <text x="56" y="70" fill="#eff6ff" fontSize="9.5" fontWeight="bold" fontFamily="sans-serif">Follow-The-Sun 24/7/365 Monitoring · Singapore · Sydney · US Desk</text>
      <rect x="296" y="56" width="70" height="20" rx="4" fill="#2563eb" />
      <text x="306" y="69" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="sans-serif">LIVE 24/7/365</text>

      {/* HA Database & SRE */}
      <g transform="translate(24, 92)">
        <rect x="0" y="0" width="168" height="118" rx="8" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
        <text x="14" y="22" fill="#1d4ed8" fontSize="10" fontWeight="bold" fontFamily="sans-serif">HA DATABASE ADMINISTRATION</text>
        <text x="14" y="40" fill="#3b82f6" fontSize="8" fontFamily="sans-serif">✓ PostgreSQL Active-Active Multi-Master</text>
        <text x="14" y="56" fill="#3b82f6" fontSize="8" fontFamily="sans-serif">✓ Replication Lag: 0.00ms</text>
        <text x="14" y="72" fill="#3b82f6" fontSize="8" fontFamily="sans-serif">✓ Immutable Air-Gapped Backups</text>
        <text x="14" y="88" fill="#3b82f6" fontSize="8" fontFamily="sans-serif">✓ Automated Failover RTO: &lt; 60s</text>
        <rect x="14" y="96" width="140" height="14" rx="3" fill="#dbeafe" />
        <text x="20" y="106" fill="#1e40af" fontSize="7.5" fontWeight="bold" fontFamily="sans-serif">UPTIME SLA: 99.999% ✓</text>
      </g>

      <g transform="translate(208, 92)">
        <rect x="0" y="0" width="168" height="118" rx="8" fill="#0f172a" />
        <text x="14" y="22" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="sans-serif">SRE RUNBOOK AUTOMATION</text>
        <text x="14" y="40" fill="#a5f3fc" fontSize="8" fontFamily="monospace">P1 Response Time: 8m (SLA &lt; 15m)</text>
        <text x="14" y="54" fill="#86efac" fontSize="8" fontFamily="monospace">Ansible Self-Healing: 85% Auto</text>
        <text x="14" y="68" fill="#93c5fd" fontSize="8" fontFamily="monospace">SOC Wazuh Alerts: 0 Breaches</text>
        <text x="14" y="82" fill="#cbd5e1" fontSize="8" fontFamily="monospace">RCA Turnaround: &lt; 48 Hours</text>
        <rect x="14" y="92" width="140" height="18" rx="4" fill="#2563eb" />
        <text x="20" y="104" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="sans-serif">SUB-15M SLA GUARANTEED ✓</text>
      </g>
    </svg>
  )
};

export default function ServiceDetailPage({ onOpenContact }) {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  // Fallback to digital-engineering if invalid service id
  const serviceKey = serviceId && servicesData[serviceId] ? serviceId : 'digital-engineering';
  const service = servicesData[serviceKey];
  const ServiceIcon = serviceIcons[serviceKey] || Sparkles;
  const ServiceIllustration = serviceIllustrations[serviceKey] || serviceIllustrations['digital-engineering'];

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpenFaqIdx(0);
  }, [serviceId]);

  // List of all services for the bottom practice switcher
  const allServicesList = Object.values(servicesData);
  const otherServices = allServicesList.filter(s => s.id !== service.id);

  const handleConsultationRequest = () => {
    if (onOpenContact) {
      onOpenContact(`Enterprise Practice Consultation: ${service.title}`);
    } else {
      navigate('/contact');
    }
  };

  return (
    <div className="bg-[#f8fafc] text-slate-900 font-sans min-h-screen selection:bg-cyan-500 selection:text-white">
      
      {/* ========================================================================= */}
      {/* 1. LUXURY HERO HEADER WITH LIVE VECTOR ILLUSTRATION & STATS (#00587c Theme) */}
      {/* ========================================================================= */}
      <header className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 bg-[#00587c] text-white overflow-hidden border-b border-cyan-900/40">
        
        {/* Background Hero Image with Deep Enterprise Gradients */}
        <div className="absolute inset-0 z-0">
          <img 
            src={service.heroBgImage} 
            alt={`${service.title} Practice Backdrop`} 
            className="w-full h-full object-cover object-center transform scale-105 filter brightness-[0.28] contrast-[1.2] transition-transform duration-700"
          />
          {/* Brand #00587c overlays + dark vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00587c]/95 via-[#004764]/90 to-[#00384f]/95 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#00587c]/75 via-transparent to-[#00384f]/95" />
          <div className="absolute inset-0 backdrop-blur-[1.5px]" />
        </div>

        {/* Ambient Radiance & Subtle Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none z-[1]" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none z-[1]" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none z-[1]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs text-cyan-200/90 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
            <Link to="/services" className="hover:text-white transition-colors">Practice Areas</Link>
            <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-white font-bold">{service.title}</span>
          </nav>

          {/* Top Hero Pitch & Live Vector Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Proposition & CTAs */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Category & Benchmark Reference Pill */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 text-cyan-300 border border-cyan-300/30 backdrop-blur-md">
                  <ServiceIcon className="w-3.5 h-3.5" />
                  <span>{service.category}</span>
                </span>
                <span className="text-[11px] font-semibold text-slate-200 bg-black/40 px-3 py-1 rounded-full border border-white/15">
                  {service.benchmarkRef}
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-black tracking-tight text-white leading-[1.1]">
                  {service.title}
                </h1>
                <p className="text-lg sm:text-xl font-medium text-cyan-300 leading-snug">
                  {service.tagline}
                </p>
              </div>

              {/* Hero Paragraph */}
              <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed font-normal">
                {service.heroSummary}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={handleConsultationRequest}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all flex items-center space-x-2 cursor-pointer"
                >
                  <span>Book Practice Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <a
                  href="#capabilities"
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-sm backdrop-blur-md transition-colors flex items-center space-x-2"
                >
                  <span>Explore Deliverables</span>
                  <ChevronDown className="w-4 h-4 text-cyan-300" />
                </a>
              </div>

              {/* Trust Checkmarks */}
              <div className="pt-4 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Singapore Delivery Center</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Tier-1 SLA Guarantees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>ISO 27001 & SOC 2 Audited</span>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Vector Architecture Window Preview */}
            <div className="lg:col-span-6 relative">
              
              {/* Floating Live Badge */}
              <div className="absolute -top-3 -right-2 z-20 hidden sm:flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black text-xs shadow-xl animate-float-slow">
                <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                <span>TIER-1 ADVISORY PRACTICE</span>
              </div>

              {/* Vector Architecture Window Container */}
              <div className="rounded-3xl p-3 sm:p-5 bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl hover:scale-[1.01] transition-transform duration-300 group">
                <div className="w-full">
                  {ServiceIllustration}
                </div>

                {/* Sub-label below illustration */}
                <div className="pt-3 px-2 flex items-center justify-between text-[11px] font-semibold text-cyan-300">
                  <span>Architecture Specification Blueprint</span>
                  <span className="text-white flex items-center space-x-1">
                    <span>Active Production Practice</span>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom 4 Key Impact Metric Counters */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {service.stats.map((stat, sIdx) => (
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
      {/* 2. CORE CAPABILITIES (BENTO GRID DESIGN) */}
      {/* ========================================================================= */}
      <section id="capabilities" className="py-20 sm:py-28 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-[#00587c] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              <span>Practice Delivery Pillars</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Engineered for Mission-Critical Enterprise Scale
            </h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
              Every deliverable in our {service.title} practice is backed by proven enterprise methodologies, audited code standards, and transparent SLAs.
            </p>
          </div>

          {/* Bento Grid: 1 Large Spotlight Feature Card + 5 Balanced Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Large Spotlight Feature Card */}
            <div className="lg:col-span-2 rounded-3xl p-8 bg-gradient-to-br from-[#00587c] via-[#004764] to-[#00384f] text-white shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-4 relative z-10">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-bold border border-cyan-400/30">
                  <Star className="w-3.5 h-3.5" />
                  <span>Flagship Practice Pillar</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {service.pillars[0].title}
                </h3>
                
                <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed max-w-xl font-normal">
                  {service.pillars[0].desc}
                </p>

                <div className="pt-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-300 block mb-2">Verified Core Deliverables:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.pillars[0].deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center space-x-2 text-xs text-slate-100 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                        <Check className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-cyan-300 relative z-10">
                <span>Enterprise SLA Guarantee</span>
                <span className="text-white">Full IP & Knowledge Handover Included</span>
              </div>
            </div>

            {/* Remaining 5 Feature Cards */}
            {service.pillars.slice(1).map((pillar, idx) => (
              <div 
                key={idx}
                className="rounded-3xl p-7 bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-cyan-500/50 shadow-2xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-lg bg-cyan-50 border border-cyan-200/60 text-[#00587c] font-extrabold text-[11px] tracking-wide">
                      {pillar.tag}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">Pillar 0{idx + 2}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#00587c] transition-colors leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-200/60">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">Deliverables:</span>
                  <div className="space-y-1.5">
                    {pillar.deliverables.slice(0, 3).map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center space-x-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. TECHNOLOGY STACK & ENTERPRISE TOOLCHAINS */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-100/90 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#00587c]">Supported Toolchain</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Enterprise Technologies & Industry Standards
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We engineer with battle-tested, open-standard cloud, data, and security technologies supported by Tier-1 enterprise vendor certifications.
              </p>
              
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleConsultationRequest}
                  className="inline-flex items-center space-x-2 text-xs font-bold text-[#00587c] hover:text-cyan-800 transition-colors cursor-pointer"
                >
                  <span>Request Custom Toolchain Compatibility Review</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Tech Stack Grid */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Validated Production Toolchain</p>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {service.techStack.map((tech, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 hover:bg-cyan-50/70 border border-slate-200/80 hover:border-cyan-300 transition-all flex flex-col justify-between space-y-1.5 cursor-default group"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-cyan-700">{tech.category}</span>
                      <span className="text-xs font-bold text-slate-800 group-hover:text-[#00587c] truncate">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. 4-STAGE DELIVERY METHODOLOGY */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#00587c]">Execution Framework</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Disciplined 4-Stage Delivery Lifecycle
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
              Modeled after international delivery rigor to minimize risk, validate milestones incrementally, and ensure seamless knowledge transfer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {service.methodology.map((m, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-cyan-500/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group relative"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00587c] to-[#004764] text-white flex items-center justify-center font-black text-base shadow-md shadow-[#00587c]/20">
                    {m.step}
                  </div>
                  
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#00587c] transition-colors leading-snug">
                    {m.title}
                  </h3>
                  
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    {m.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center text-xs font-bold text-[#00587c]">
                  <span>Phase Milestone Gates</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. REAL-WORLD CASE STUDIES */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#00587c]">Proven Track Record</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Enterprise Case Studies & Tangible ROI
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
              Explore how enterprises across Singapore, APAC, and global financial hubs engage our {service.title} practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.caseStudies.map((cs, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-cyan-500/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200/60 text-[#00587c] text-xs font-bold">
                    <span>{cs.industry}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#00587c] transition-colors leading-snug">
                    {cs.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {cs.outcome}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00587c]">
                  <span>Verified Client Outcome</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Practice Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal">
              Technical, architectural, and engagement answers for corporate decision-makers.
            </p>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div 
                  key={idx}
                  className="bg-slate-50 rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-xs sm:text-sm font-bold text-slate-900 hover:text-[#00587c] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ml-3 ${
                      isOpen ? 'rotate-180 text-[#00587c]' : ''
                    }`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
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
      {/* 7. OTHER ENTERPRISE PRACTICES QUICK SWITCHER */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00587c]">The Inspac Practice Suite</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Explore Other Enterprise Practices
              </h2>
            </div>
            
            <Link 
              to="/services" 
              className="text-xs font-bold text-[#00587c] hover:text-cyan-800 transition-colors inline-flex items-center space-x-1"
            >
              <span>View All 8 Practice Areas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.slice(0, 4).map((other) => {
              const OtherIcon = serviceIcons[other.id] || Sparkles;
              return (
                <Link
                  key={other.id}
                  to={`/services/${other.id}`}
                  className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-cyan-400 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-xl bg-cyan-50 text-[#00587c] flex items-center justify-center shrink-0 group-hover:bg-[#00587c] group-hover:text-white transition-colors shadow-xs">
                        <OtherIcon className="w-4 h-4 stroke-[2.2]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#00587c] transition-colors truncate">
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

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#00587c] group-hover:text-cyan-700">
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
      {/* 8. HIGH-CONVERTING BOTTOM EXECUTIVE CTA (#00587c Theme) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-[#00587c] via-[#004764] to-[#00384f] text-white relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 text-cyan-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engage Practice Solutions Architects</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Ready to accelerate your {service.title} roadmap?
          </h2>

          <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal">
            Consult directly with our Singapore delivery leadership to evaluate enterprise architecture, schedule readiness audits, and align milestones.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={handleConsultationRequest}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 text-slate-950 font-black text-xs sm:text-sm shadow-2xl shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Request Practice Proposal & Scope
            </button>
            
            <Link
              to="/contact"
              className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-xs sm:text-sm backdrop-blur-md transition-colors"
            >
              Contact Advisory Desk
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
