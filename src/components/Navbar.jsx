import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { 
  Shield, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  Globe, 
  PhoneCall, 
  Mail,
  Sparkles,
  Bot,
  BarChart3,
  Database,
  Layers,
  Cloud,
  GitPullRequest,
  ShieldCheck,
  CreditCard,
  CheckCircle2,
  Code2,
  Building2,
  HeartPulse,
  ShoppingCart,
  Truck,
  Building,
  Radio,
  GraduationCap,
  FileText,
  Award,
  ArrowRight,
  Users,
  Headphones,
  UserCheck,
  BarChart2,
  GitBranch
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState(0);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  const dropdownTimeoutRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (dropdownName) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const toggleMobileSubmenu = (menuName) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === menuName ? null : menuName);
  };

  const whatWeDoCategories = [
    {
      id: "digital-engineering",
      path: "/services/digital-engineering",
      title: "Digital Engineering",
      icon: Code2,
      subHeader: "DIGITAL ENGINEERING & MODERNIZATION",
      items: [
        { name: "Cloud-Native Web & Mobile Engineering", path: "/services/digital-engineering" },
        { name: "Legacy Decoupling & Microservices", path: "/services/digital-engineering" },
        { name: "High-Throughput REST & GraphQL APIs", path: "/services/digital-engineering" },
        { name: "Event-Driven Distributed Messaging", path: "/services/digital-engineering" }
      ]
    },
    {
      id: "cloud-devsecops",
      path: "/services/cloud-devsecops",
      title: "Cloud & DevSecOps",
      icon: Cloud,
      subHeader: "CLOUD TRANSFORMATION & DEVSECOPS",
      items: [
        { name: "AWS, Azure & GCP Multi-Cloud Strategy", path: "/services/cloud-devsecops" },
        { name: "Terraform Infrastructure as Code (IaC)", path: "/services/cloud-devsecops" },
        { name: "Kubernetes & Service Mesh Orchestration", path: "/services/cloud-devsecops" },
        { name: "DevSecOps CI/CD & FinOps Governance", path: "/services/cloud-devsecops" }
      ]
    },
    {
      id: "ai-data-lakehouse",
      path: "/services/ai-data-lakehouse",
      title: "Enterprise AI & Data",
      icon: BarChart3,
      subHeader: "ENTERPRISE AI & MODERN LAKEHOUSE",
      items: [
        { name: "Governed Lakehouses (Snowflake/BigQuery)", path: "/services/ai-data-lakehouse" },
        { name: "Real-Time Streaming Pipelines (dbt/Spark)", path: "/services/ai-data-lakehouse" },
        { name: "Generative AI, Enterprise RAG & LLMs", path: "/services/ai-data-lakehouse" },
        { name: "Predictive Intelligence & BI Scorecards", path: "/services/ai-data-lakehouse" }
      ]
    },
    {
      id: "cybersecurity-grc",
      path: "/services/cybersecurity-grc",
      title: "Cybersecurity & GRC",
      icon: ShieldCheck,
      subHeader: "CYBERSECURITY & COMPLIANCE ADVISORY",
      items: [
        { name: "PCI-DSS v4.0 Attestation (AOC) Support", path: "/services/cybersecurity-grc" },
        { name: "Cardholder Data Environment Isolation", path: "/services/cybersecurity-grc" },
        { name: "ISO 27001 & NIST Security Frameworks", path: "/services/cybersecurity-grc" },
        { name: "Third-Party Vendor Risk & ITGC Audits", path: "/services/cybersecurity-grc" }
      ]
    },
    {
      id: "enterprise-erp",
      path: "/services/enterprise-erp",
      title: "Enterprise ERP & Platforms",
      icon: Layers,
      subHeader: "ENTERPRISE APPLICATION SERVICES",
      items: [
        { name: "SAP S/4HANA & Oracle Cloud ERP", path: "/services/enterprise-erp" },
        { name: "Cross-Module Workflow Automation", path: "/services/enterprise-erp" },
        { name: "Supply Chain & Financial Ledger Sync", path: "/services/enterprise-erp" },
        { name: "Legacy ERP Modernization Connectors", path: "/services/enterprise-erp" }
      ]
    },
    {
      id: "process-automation",
      path: "/services/process-automation",
      title: "Intelligent Automation",
      icon: GitPullRequest,
      subHeader: "DIGITAL OPERATIONS & RPA",
      items: [
        { name: "Robotic Process Automation (UiPath/Power)", path: "/services/process-automation" },
        { name: "Intelligent Document Processing (IDP)", path: "/services/process-automation" },
        { name: "Business Process Re-engineering (BPR)", path: "/services/process-automation" },
        { name: "Operational Bottleneck Analytics", path: "/services/process-automation" }
      ]
    },
    {
      id: "quality-engineering",
      path: "/services/quality-engineering",
      title: "Quality Engineering",
      icon: CheckCircle2,
      subHeader: "QUALITY ENGINEERING & ASSURANCE",
      items: [
        { name: "Continuous Automated Testing (Playwright)", path: "/services/quality-engineering" },
        { name: "API Load & High-Scale Stress Testing", path: "/services/quality-engineering" },
        { name: "OWASP Security & Vulnerability QA", path: "/services/quality-engineering" },
        { name: "Chaos Engineering & Disaster Recovery", path: "/services/quality-engineering" }
      ]
    },
    {
      id: "managed-services",
      path: "/services/managed-services",
      title: "24/7 Managed Services",
      icon: Database,
      subHeader: "MANAGED INFRASTRUCTURE & SERVICE DESK",
      items: [
        { name: "24/7/365 Global NOC/SOC Operations", path: "/services/managed-services" },
        { name: "High Availability Database HA/DR", path: "/services/managed-services" },
        { name: "Omnichannel L1-L3 Support Desk", path: "/services/managed-services" },
        { name: "Sub-15 Minute Incident Response SLAs", path: "/services/managed-services" }
      ]
    }
  ];

  const productsList = [
    {
      id: "pulse-crm",
      name: "Inspac PulseCRM",
      category: "Sales & CRM",
      desc: "Omnichannel Sales & Pipeline Cloud (Zoho CRM)",
      icon: Users,
      path: "/products/pulse-crm",
      badgeColor: "bg-blue-100 text-blue-700 border-blue-200"
    },
    {
      id: "books-finance",
      name: "Inspac Books & Finance",
      category: "Finance & Accounting",
      desc: "Enterprise Accounting & Tax Suite (Zoho Books)",
      icon: CreditCard,
      path: "/products/books-finance",
      badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200"
    },
    {
      id: "desk-support",
      name: "Inspac Desk & Support",
      category: "Service & Helpdesk",
      desc: "AI Omnichannel Support Desk (Zoho Desk)",
      icon: Headphones,
      path: "/products/desk-support",
      badgeColor: "bg-purple-100 text-purple-700 border-purple-200"
    },
    {
      id: "people-hrms",
      name: "Inspac People HRMS",
      category: "Human Resources",
      desc: "Workforce & Automated Payroll (Zoho People)",
      icon: UserCheck,
      path: "/products/people-hrms",
      badgeColor: "bg-orange-100 text-orange-700 border-orange-200"
    },
    {
      id: "analytics-bi",
      name: "Inspac Analytics BI",
      category: "Data & BI",
      desc: "Visual Executive BI & Analytics (Zoho Analytics)",
      icon: BarChart2,
      path: "/products/analytics-bi",
      badgeColor: "bg-sky-100 text-sky-700 border-sky-200"
    },
    {
      id: "creator-studio",
      name: "Inspac Creator Studio",
      category: "Low-Code Engineering",
      desc: "Enterprise Low-Code App Platform (Zoho Creator)",
      icon: Code2,
      path: "/products/creator-studio",
      badgeColor: "bg-indigo-100 text-indigo-700 border-indigo-200"
    },
    {
      id: "vault-directory",
      name: "Inspac Vault & Directory",
      category: "Security & Identity",
      desc: "Zero-Trust Secrets & SSO Vault (Zoho Vault)",
      icon: ShieldCheck,
      path: "/products/vault-directory",
      badgeColor: "bg-rose-100 text-rose-700 border-rose-200"
    },
    {
      id: "flow-automation",
      name: "Inspac Flow Automation",
      category: "Integration & iPaaS",
      desc: "Cross-App Integration Bus (Zoho Flow)",
      icon: GitBranch,
      path: "/products/flow-automation",
      badgeColor: "bg-amber-100 text-amber-700 border-amber-200"
    }
  ];

  const industriesItems = [
    { name: "GCCs", path: "/clients" },
    { name: "Pharma/Healthcare", path: "/clients" },
    { name: "BFSI/NBFC", path: "/clients" },
    { name: "Manufacturing", path: "/clients" },
    { name: "Automobile", path: "/clients" },
    { name: "Retail", path: "/clients" },
    { name: "IT/ITES", path: "/clients" },
    { name: "Media", path: "/clients" },
    { name: "Startups", path: "/clients" }
  ];

  const insightsItems = [
    { title: "Corporate Training Masterclass", desc: "Data Science, DevOps & PCI-DSS Courses", path: "/training" },
    { title: "Compliance Assessment Tool", desc: "Interactive GRC & Security Readiness Check", path: "/compliance" },
    { title: "Client Success Stories", desc: "Enterprise Case Studies & Transformations", path: "/clients" },
    { title: "Global Capability Hubs", desc: "Singapore HQ, India R&D & Australia Ops", path: "/about" }
  ];

  return (
    <>
      {/* Main Enterprise Floating Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#00587c]/95 backdrop-blur-xl border-b border-cyan-800/40 shadow-2xl shadow-black/60 py-3.5' 
            : 'bg-gradient-to-b from-[#00587c]/90 via-[#00587c]/50 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">

            {/* Inspac Solutions Logo & Tagline */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group select-none py-1 min-w-0 max-w-[75%] sm:max-w-none">
              <div className="relative shrink-0">
                <img 
                  src="/inspac-logo.png" 
                  alt="Inspac Solutions Pte Ltd Logo" 
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-105 transition-transform drop-shadow-md"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center space-x-1 sm:space-x-1.5 truncate">
                  <span className="text-base sm:text-2xl font-extrabold tracking-tight text-white leading-none font-sans group-hover:text-cyan-300 transition-colors truncate">
                    Inspac Solutions
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-cyan-400 font-mono shrink-0">Pte Ltd</span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-semibold text-slate-300 tracking-wide leading-tight mt-0.5 sm:mt-1 truncate">
                  Global Resource - Smart Solutions
                </span>
                <span className="text-[8px] sm:text-[9px] font-bold tracking-widest text-cyan-400 uppercase leading-none mt-0.5 hidden xs:block">
                  India • Australia • Singapore
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (From reference site) */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">

              {/* Home */}
              <NavLink 
                to="/"
                end
                className={({ isActive }) => 
                  `text-sm font-semibold transition-colors ${
                    isActive ? 'text-cyan-400 font-bold' : 'text-white/90 hover:text-white'
                  }`
                }
              >
                Home
              </NavLink>

              {/* About Us */}
              <NavLink 
                to="/about"
                className={({ isActive }) => 
                  `text-sm font-semibold transition-colors ${
                    isActive ? 'text-cyan-400 font-bold' : 'text-white/90 hover:text-white'
                  }`
                }
              >
                About Us
              </NavLink>

              {/* Products Dropdown */}
              <div 
                className="relative py-2 group cursor-pointer"
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
              >
                <div 
                  onClick={() => {
                    if (window.location.pathname === '/') {
                      const el = document.getElementById('products');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      navigate('/#products');
                    }
                  }}
                  className="flex items-center text-sm font-semibold text-white/90 hover:text-white transition-colors"
                >
                  <span>Products</span>
                  <ChevronDown className={`w-3.5 h-3.5 ml-1 text-white/80 transition-transform duration-200 ${
                    activeDropdown === 'products' ? 'rotate-180 text-cyan-400' : 'group-hover:translate-y-0.5'
                  }`} />
                </div>

                {/* Simple Products Dropdown */}
                {activeDropdown === 'products' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-xl shadow-xl shadow-slate-900/15 border border-slate-100 p-1.5 z-50 animate-fadeIn">
                    <div className="space-y-0.5">
                      {productsList.map((prod, idx) => {
                        const Icon = prod.icon;
                        return (
                          <Link
                            key={idx}
                            to={prod.path}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all group"
                          >
                            <div className="w-7 h-7 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-xs font-semibold text-slate-800 group-hover:text-blue-600 transition-colors truncate">
                                {prod.name}
                              </p>
                              <p className="text-[10px] text-slate-400 font-medium truncate">
                                {prod.category}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div 
                className="relative py-2 group cursor-pointer"
                onMouseEnter={() => handleMouseEnter('whatWeDo')}
                onMouseLeave={handleMouseLeave}
              >
                <div 
                  onClick={() => navigate('/services')}
                  className="flex items-center text-sm font-semibold text-white/90 hover:text-white transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 ml-1 text-white/80 transition-transform duration-200 ${
                    activeDropdown === 'whatWeDo' ? 'rotate-180 text-cyan-400' : 'group-hover:translate-y-0.5'
                  }`} />
                </div>

                {/* Light Card Dropdown Container */}
                {activeDropdown === 'whatWeDo' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[620px] max-w-[92vw] bg-[#f4f6fa] text-slate-800 rounded-2xl shadow-2xl shadow-black/80 border border-slate-200/90 p-5 z-50 animate-fadeIn">
                    <div className="grid grid-cols-12 gap-4">
                      
                      {/* Left Column (Categories List) */}
                      <div className="col-span-6 space-y-1 border-r border-slate-200/70 pr-3">
                        {whatWeDoCategories.map((cat, idx) => {
                          const Icon = cat.icon;
                          const isSelected = selectedCategoryIdx === idx;
                          return (
                            <div
                              key={idx}
                              onMouseEnter={() => setSelectedCategoryIdx(idx)}
                              onClick={() => {
                                setActiveDropdown(null);
                                navigate(cat.path);
                              }}
                              className={`flex items-center justify-between px-3.5 py-2 rounded-xl cursor-pointer text-xs transition-all ${
                                isSelected
                                  ? 'bg-[#eef4ff] text-[#2563eb] font-semibold border-l-4 border-blue-600 shadow-xs'
                                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 font-medium'
                              }`}
                            >
                              <div className="flex items-center space-x-2.5">
                                <Icon className={`w-4 h-4 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
                                <span>{cat.title}</span>
                              </div>
                              <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
                            </div>
                          );
                        })}
                      </div>

                      {/* Right Column (Sub-Items White Pills) */}
                      <div className="col-span-6 pl-1 flex flex-col justify-start">
                        <div className="uppercase tracking-wider text-[11px] font-bold text-slate-400 mb-3 px-1">
                          {whatWeDoCategories[selectedCategoryIdx].subHeader}
                        </div>
                        <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
                          {whatWeDoCategories[selectedCategoryIdx].items.map((sub, sIdx) => (
                            <Link
                              key={sIdx}
                              to={sub.path}
                              onClick={() => setActiveDropdown(null)}
                              className="block bg-white hover:bg-blue-50/80 border border-slate-200/70 rounded-xl px-4 py-2.5 shadow-xs hover:shadow-md transition-all text-xs font-semibold text-slate-700 hover:text-blue-600"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>

              {/* Careers */}
              <NavLink 
                to="/careers"
                className={({ isActive }) => 
                  `text-sm font-semibold transition-colors ${
                    isActive ? 'text-cyan-400 font-bold' : 'text-white/90 hover:text-white'
                  }`
                }
              >
                Careers
              </NavLink>

              {/* Corporate Training */}
              <NavLink 
                to="/training"
                className={({ isActive }) => 
                  `text-sm font-semibold transition-colors ${
                    isActive ? 'text-cyan-400 font-bold' : 'text-white/90 hover:text-white'
                  }`
                }
              >
                Corporate Training
              </NavLink>

              {/* Contact Us */}
              <NavLink 
                to="/contact"
                className={({ isActive }) => 
                  `text-sm font-semibold transition-colors ${
                    isActive ? 'text-cyan-400 font-bold' : 'text-white/90 hover:text-white'
                  }`
                }
              >
                Contact Us
              </NavLink>

              {/* AI Copilot Quick Trigger */}
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-inspac-chat'))}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-400/40 text-cyan-300 hover:text-white text-xs font-bold transition-all shadow-md shadow-cyan-950/50 hover:shadow-cyan-500/20 group"
                title="Open Inspac AI Copilot"
              >
                <Bot className="w-3.5 h-3.5 text-cyan-400 group-hover:animate-bounce" />
                <span>AI Copilot</span>
                <Sparkles className="w-3 h-3 text-cyan-300" />
              </button>

            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-blue-950/80 border border-blue-800/60 text-slate-200 hover:text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Accordion Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#00587c] border-t border-cyan-800/60 mt-3 px-6 pt-4 pb-8 space-y-4 animate-fadeIn max-h-[85vh] overflow-y-auto">
            
            {/* What We Do Mobile Accordion */}
            <div className="border-b border-blue-950/80 pb-2">
              <div 
                onClick={() => toggleMobileSubmenu('whatWeDo')}
                className="flex items-center justify-between text-base font-semibold text-white py-2 cursor-pointer"
              >
                <span>What We Do</span>
                <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform ${
                  mobileSubmenuOpen === 'whatWeDo' ? 'rotate-180' : ''
                }`} />
              </div>

              {mobileSubmenuOpen === 'whatWeDo' && (
                <div className="pl-3 pr-1 py-2 space-y-2 bg-blue-950/40 rounded-xl mt-1">
                  {whatWeDoCategories.map((cat, idx) => (
                    <div key={idx} className="space-y-1">
                      <p className="text-xs font-bold text-cyan-400 pt-2 pb-1 uppercase tracking-wider">{cat.title}</p>
                      {cat.items.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          to={sub.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 pl-2 text-xs text-slate-300 hover:text-cyan-300"
                        >
                          • {sub.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Products Mobile Accordion */}
            <div className="border-b border-blue-950/80 pb-2">
              <div 
                onClick={() => toggleMobileSubmenu('products')}
                className="flex items-center justify-between text-base font-semibold text-white py-2 cursor-pointer"
              >
                <span>Products</span>
                <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform ${
                  mobileSubmenuOpen === 'products' ? 'rotate-180' : ''
                }`} />
              </div>

              {mobileSubmenuOpen === 'products' && (
                <div className="pl-2 pr-1 py-2 space-y-2 bg-blue-950/40 rounded-xl mt-1">
                  {productsList.map((prod, idx) => (
                    <Link
                      key={idx}
                      to={prod.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block p-2.5 rounded-lg hover:bg-blue-900/40 transition-colors group"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-semibold text-white group-hover:text-cyan-300">{prod.name}</span>
                        <span className="text-[9px] font-medium text-cyan-400 bg-blue-900/80 px-1.5 py-0.5 rounded">{prod.category}</span>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-0.5">{prod.desc}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Mobile Accordion */}
            <div className="border-b border-blue-950/80 pb-2">
              <div 
                onClick={() => toggleMobileSubmenu('industries')}
                className="flex items-center justify-between text-base font-semibold text-white py-2 cursor-pointer"
              >
                <span>Industries</span>
                <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform ${
                  mobileSubmenuOpen === 'industries' ? 'rotate-180' : ''
                }`} />
              </div>

              {mobileSubmenuOpen === 'industries' && (
                <div className="pl-3 pr-1 py-2 space-y-2 bg-blue-950/40 rounded-xl mt-1">
                  {industriesItems.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 text-xs text-slate-300 hover:text-cyan-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Who We Are Mobile Link */}
            <div className="border-b border-blue-950/80 pb-2">
              <Link 
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-semibold text-white py-2 hover:text-cyan-300"
              >
                Who We Are
              </Link>
            </div>

            {/* Careers Mobile Link */}
            <div className="border-b border-blue-950/80 pb-2">
              <Link 
                to="/careers"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-semibold text-white py-2 hover:text-cyan-300"
              >
                Careers
              </Link>
            </div>

            {/* Insights Mobile Accordion */}
            <div className="border-b border-blue-950/80 pb-2">
              <div 
                onClick={() => toggleMobileSubmenu('insights')}
                className="flex items-center justify-between text-base font-semibold text-white py-2 cursor-pointer"
              >
                <span>Insights</span>
                <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform ${
                  mobileSubmenuOpen === 'insights' ? 'rotate-180' : ''
                }`} />
              </div>

              {mobileSubmenuOpen === 'insights' && (
                <div className="pl-3 pr-1 py-2 space-y-2 bg-blue-950/40 rounded-xl mt-1">
                  {insightsItems.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 text-xs text-slate-300 hover:text-cyan-300"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Us Mobile Link */}
            <div>
              <Link 
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-semibold text-white py-2 hover:text-cyan-300"
              >
                Contact Us
              </Link>
            </div>

            {/* AI Copilot Mobile Button */}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.dispatchEvent(new CustomEvent('open-inspac-chat'));
                }}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-sm shadow-lg border border-cyan-400/40"
              >
                <Bot className="w-4 h-4" />
                <span>Launch Inspac AI Copilot</span>
                <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
              </button>
            </div>

            <div className="pt-4 border-t border-blue-900/60 text-xs text-slate-400 space-y-2">
              <p>📍 Singapore • India • Australia</p>
              <p>📞 {companyInfo.phones[0].number}</p>
              <p>✉️ {companyInfo.emails.marketing}</p>
            </div>

          </div>
        )}
      </header>
    </>
  );
}

