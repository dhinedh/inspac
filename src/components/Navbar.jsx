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
      title: "Digital Engineering",
      icon: Code2,
      subHeader: "DIGITAL ENGINEERING & MODERNIZATION",
      items: [
        { name: "Cloud-Native Web & Mobile Engineering", path: "/services" },
        { name: "Legacy Decoupling & Microservices", path: "/services" },
        { name: "High-Throughput REST & GraphQL APIs", path: "/services" },
        { name: "Event-Driven Distributed Messaging", path: "/services" }
      ]
    },
    {
      title: "Cloud & DevSecOps",
      icon: Cloud,
      subHeader: "CLOUD TRANSFORMATION & DEVSECOPS",
      items: [
        { name: "AWS, Azure & GCP Multi-Cloud Strategy", path: "/services" },
        { name: "Terraform Infrastructure as Code (IaC)", path: "/services" },
        { name: "Kubernetes & Service Mesh Orchestration", path: "/services" },
        { name: "DevSecOps CI/CD & FinOps Governance", path: "/services" }
      ]
    },
    {
      title: "Enterprise AI & Data",
      icon: BarChart3,
      subHeader: "ENTERPRISE AI & MODERN LAKEHOUSE",
      items: [
        { name: "Governed Lakehouses (Snowflake/BigQuery)", path: "/services" },
        { name: "Real-Time Streaming Pipelines (dbt/Spark)", path: "/services" },
        { name: "Generative AI, Enterprise RAG & LLMs", path: "/services" },
        { name: "Predictive Intelligence & BI Scorecards", path: "/services" }
      ]
    },
    {
      title: "Cybersecurity & GRC",
      icon: ShieldCheck,
      subHeader: "CYBERSECURITY & COMPLIANCE ADVISORY",
      items: [
        { name: "PCI-DSS v4.0 Attestation (AOC) Support", path: "/compliance" },
        { name: "Cardholder Data Environment Isolation", path: "/compliance" },
        { name: "ISO 27001 & NIST Security Frameworks", path: "/compliance" },
        { name: "Third-Party Vendor Risk & ITGC Audits", path: "/compliance" }
      ]
    },
    {
      title: "Enterprise ERP & Platforms",
      icon: Layers,
      subHeader: "ENTERPRISE APPLICATION SERVICES",
      items: [
        { name: "SAP S/4HANA & Oracle Cloud ERP", path: "/services" },
        { name: "Cross-Module Workflow Automation", path: "/services" },
        { name: "Supply Chain & Financial Ledger Sync", path: "/services" },
        { name: "Legacy ERP Modernization Connectors", path: "/services" }
      ]
    },
    {
      title: "Intelligent Automation",
      icon: GitPullRequest,
      subHeader: "DIGITAL OPERATIONS & RPA",
      items: [
        { name: "Robotic Process Automation (UiPath/Power)", path: "/services" },
        { name: "Intelligent Document Processing (IDP)", path: "/services" },
        { name: "Business Process Re-engineering (BPR)", path: "/services" },
        { name: "Operational Bottleneck Analytics", path: "/services" }
      ]
    },
    {
      title: "Quality Engineering",
      icon: CheckCircle2,
      subHeader: "QUALITY ENGINEERING & ASSURANCE",
      items: [
        { name: "Continuous Automated Testing (Playwright)", path: "/services" },
        { name: "API Load & High-Scale Stress Testing", path: "/services" },
        { name: "OWASP Security & Vulnerability QA", path: "/services" },
        { name: "Chaos Engineering & Disaster Recovery", path: "/services" }
      ]
    },
    {
      title: "24/7 Managed Services",
      icon: Database,
      subHeader: "MANAGED INFRASTRUCTURE & SERVICE DESK",
      items: [
        { name: "24/7/365 Global NOC/SOC Operations", path: "/services" },
        { name: "High Availability Database HA/DR", path: "/services" },
        { name: "Omnichannel L1-L3 Support Desk", path: "/services" },
        { name: "Sub-15 Minute Incident Response SLAs", path: "/services" }
      ]
    }
  ];

  const productsList = [
    {
      name: "Inspac PulseCRM",
      category: "Sales & CRM",
      desc: "Omnichannel Sales & Pipeline Cloud (Zoho CRM)",
      icon: Users,
      path: "/#products",
      badgeColor: "bg-blue-100 text-blue-700 border-blue-200"
    },
    {
      name: "Inspac Books & Finance",
      category: "Finance & Accounting",
      desc: "Enterprise Accounting & Tax Suite (Zoho Books)",
      icon: CreditCard,
      path: "/#products",
      badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200"
    },
    {
      name: "Inspac Desk & Support",
      category: "Service & Helpdesk",
      desc: "AI Omnichannel Support Desk (Zoho Desk)",
      icon: Headphones,
      path: "/#products",
      badgeColor: "bg-purple-100 text-purple-700 border-purple-200"
    },
    {
      name: "Inspac People HRMS",
      category: "Human Resources",
      desc: "Workforce & Automated Payroll (Zoho People)",
      icon: UserCheck,
      path: "/#products",
      badgeColor: "bg-orange-100 text-orange-700 border-orange-200"
    },
    {
      name: "Inspac Analytics BI",
      category: "Data & BI",
      desc: "Visual Executive BI & Analytics (Zoho Analytics)",
      icon: BarChart2,
      path: "/#products",
      badgeColor: "bg-sky-100 text-sky-700 border-sky-200"
    },
    {
      name: "Inspac Creator Studio",
      category: "Low-Code Engineering",
      desc: "Enterprise Low-Code App Platform (Zoho Creator)",
      icon: Code2,
      path: "/#products",
      badgeColor: "bg-indigo-100 text-indigo-700 border-indigo-200"
    },
    {
      name: "Inspac Vault & Directory",
      category: "Security & Identity",
      desc: "Zero-Trust Secrets & SSO Vault (Zoho Vault)",
      icon: ShieldCheck,
      path: "/#products",
      badgeColor: "bg-rose-100 text-rose-700 border-rose-200"
    },
    {
      name: "Inspac Flow Automation",
      category: "Integration & iPaaS",
      desc: "Cross-App Integration Bus (Zoho Flow)",
      icon: GitBranch,
      path: "/#products",
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
            ? 'bg-[#04081c]/95 backdrop-blur-xl border-b border-blue-900/40 shadow-2xl shadow-black/80 py-3.5' 
            : 'bg-gradient-to-b from-[#04081c]/90 via-[#04081c]/50 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">

            {/* Inspac Solutions Logo & Tagline (From reference site) */}
            <Link to="/" className="flex flex-col group select-none py-1">
              <div className="flex items-center space-x-1.5">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white leading-none font-sans group-hover:text-cyan-300 transition-colors">
                  Inspac Solutions
                </span>
                <span className="text-xs font-bold text-cyan-400 font-mono">Pte Ltd</span>
              </div>
              <span className="text-[10px] font-semibold text-slate-300 tracking-wide leading-tight mt-1">
                Global Resource - Smart Solutions
              </span>
              <span className="text-[9px] font-bold tracking-widest text-cyan-400 uppercase leading-none mt-0.5">
                India • Australia • Singapore
              </span>
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

              {/* Products Dropdown (Replaces Clients) */}
              <div 
                className="relative py-2 group cursor-pointer"
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
              >
                <div 
                  onClick={() => navigate('/services')}
                  className="flex items-center text-sm font-semibold text-white/90 hover:text-white transition-colors"
                >
                  <span>Products</span>
                  <ChevronDown className={`w-3.5 h-3.5 ml-1 text-white/80 transition-transform duration-200 ${
                    activeDropdown === 'products' ? 'rotate-180 text-cyan-400' : 'group-hover:translate-y-0.5'
                  }`} />
                </div>

                {/* Products Light Card Dropdown Container */}
                {activeDropdown === 'products' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[560px] max-w-[94vw] bg-[#f4f6fa] text-slate-800 rounded-2xl shadow-2xl shadow-black/80 border border-slate-200/90 p-4 sm:p-5 z-50 animate-fadeIn">
                    {/* Top Header */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/80">
                      <div className="flex items-center space-x-2">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Enterprise Products</span>
                      </div>
                      <span className="text-[11px] font-semibold text-blue-600 bg-blue-100/80 px-2.5 py-0.5 rounded-full">
                        {productsList.length} Software Solutions
                      </span>
                    </div>

                    {/* Products Stacked One by One - Simple & Elegant (No Icons) */}
                    <div className="space-y-2 max-h-[420px] overflow-y-auto pr-1">
                      {productsList.map((prod, idx) => (
                        <Link
                          key={idx}
                          to={prod.path}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center justify-between bg-white hover:bg-blue-50/80 border border-slate-200/80 hover:border-blue-300 rounded-xl px-4 py-3 shadow-2xs hover:shadow-sm transition-all group text-left"
                        >
                          <div className="min-w-0 flex-1 pr-2">
                            <div className="flex items-center space-x-2 flex-wrap gap-y-0.5">
                              <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                {prod.name}
                              </span>
                              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${prod.badgeColor}`}>
                                {prod.category}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 mt-0.5 leading-snug font-normal">
                              {prod.desc}
                            </p>
                          </div>
                          <div className="shrink-0">
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Bottom CTA bar */}
                    <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs px-1">
                      <span className="text-slate-500 font-medium">Looking for custom software products or enterprise integration?</span>
                      <button
                        onClick={() => {
                          setActiveDropdown(null);
                          if (onOpenContact) {
                            onOpenContact('Custom Product Solution');
                          } else {
                            navigate('/contact');
                          }
                        }}
                        className="inline-flex items-center space-x-1 font-bold text-blue-600 hover:text-blue-800 transition-colors shrink-0 ml-2"
                      >
                        <span>Request Custom Build</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
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
                                navigate('/services');
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
          <div className="lg:hidden bg-[#04081c] border-t border-blue-900/60 mt-3 px-6 pt-4 pb-8 space-y-4 animate-fadeIn max-h-[85vh] overflow-y-auto">
            
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

