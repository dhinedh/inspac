import { companyInfo } from '../data/companyData.js';
import { servicesData } from '../data/servicesData.js';
import { productsData } from '../data/productsData.js';
import { trainingCoursesDetailed } from '../data/trainingData.js';
import { openPositionsDetailed } from '../data/careersData.js';

// Normalized knowledge repository for fast lookup
export const KNOWLEDGE_BASE = {
  company: {
    ...companyInfo,
    established: "2012",
    headquarters: "111 North Bridge Road, #23-05 Peninsula Plaza, Singapore 179098",
    singaporePhone: "+65 98271155 / +65 98881521",
    indiaPhone: "+91 44 4567 8900",
    australiaPhone: "+61 3 9000 1122",
    marketingEmail: "mkts@inspacsolutions.com",
    careersEmail: "careers@inspacsolutions.com",
    supportEmail: "support@inspacsolutions.com",
    uen: "20122407R",
    overview: "Inspac Solutions Pte Ltd is a premier enterprise IT consulting, software engineering, and GRC advisory firm headquartered in Singapore, with an R&D Center in India and Regional Operations in Australia. We deliver cloud transformation, digital engineering, enterprise AI, PCI-DSS 4.0 audits, and proprietary SaaS platforms."
  },
  services: [
    {
      id: 'digital-engineering',
      name: 'Digital Engineering & App Modernization',
      slug: 'digital-engineering',
      path: '/services/digital-engineering',
      category: 'Digital Engineering',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      badge: 'Cloud-Native & Modernization',
      summary: 'Cloud-native microservices, Next.js/React design systems, API gateways, and legacy monolith decoupling with zero downtime.',
      keywords: ['digital', 'engineering', 'app', 'application', 'modernization', 'microservices', 'react', 'next.js', 'frontend', 'backend', 'api', 'graphql', 'rest', 'flutter', 'mobile']
    },
    {
      id: 'cloud-devsecops',
      name: 'Cloud Transformation & DevSecOps',
      slug: 'cloud-devsecops',
      path: '/services/cloud-devsecops',
      category: 'Cloud & Infrastructure',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      badge: 'AWS · Azure · GCP Multi-Cloud',
      summary: 'Multi-cloud architecture (AWS, Azure, GCP), automated Terraform IaC, Kubernetes (EKS/GKE), zero-trust DevSecOps CI/CD, and Cloud FinOps.',
      keywords: ['cloud', 'aws', 'azure', 'gcp', 'devops', 'devsecops', 'kubernetes', 'k8s', 'terraform', 'iac', 'docker', 'ci/cd', 'finops', 'infrastructure', 'migration']
    },
    {
      id: 'ai-data-lakehouse',
      name: 'Enterprise AI, Data Lakehouse & Analytics',
      slug: 'ai-data-lakehouse',
      path: '/services/ai-data-lakehouse',
      category: 'AI & Data Science',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      badge: 'GenAI & Lakehouse Architecture',
      summary: 'Generative AI enterprise agents, modern data lakehouses (Snowflake, Databricks, BigQuery), real-time ETL pipelines, and predictive analytics.',
      keywords: ['ai', 'artificial intelligence', 'data', 'lakehouse', 'analytics', 'genai', 'generative ai', 'snowflake', 'databricks', 'bigquery', 'machine learning', 'ml', 'etl', 'rag', 'llm']
    },
    {
      id: 'sap-enterprise-erp',
      name: 'SAP S/4HANA & Enterprise ERP Solutions',
      slug: 'sap-enterprise-erp',
      path: '/services/sap-enterprise-erp',
      category: 'Enterprise Applications',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      badge: 'S/4HANA Cloud & BTP',
      summary: 'SAP S/4HANA greenfield/brownfield migration, BTP cloud extensions, supply chain automation, and enterprise ERP integration.',
      keywords: ['sap', 'erp', 's4hana', 's/4hana', 'btp', 'fiori', 'abap', 'supply chain', 'finance', 'enterprise resource planning']
    },
    {
      id: 'cyber-security-pci',
      name: 'Cyber Security & PCI-DSS 4.0 Governance',
      slug: 'cyber-security-pci',
      path: '/services/cyber-security-pci',
      category: 'Security & Compliance',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      badge: '100% Pass Rate · QSA Support',
      summary: 'PCI-DSS 4.0 gap assessment, QSA audit readiness, ISO 27001, SOC 2, MAS TRM guidelines, and automated DevSecOps vulnerability management.',
      keywords: ['security', 'cyber', 'pci', 'pci-dss', 'pci dss', 'compliance', 'iso 27001', 'soc 2', 'mas trm', 'audit', 'grc', 'qsa', 'governance', 'penetration testing', 'vulnerability']
    },
    {
      id: 'managed-db-infra',
      name: '24/7 Managed Databases & Cloud Infrastructure',
      slug: 'managed-db-infra',
      path: '/services/managed-db-infra',
      category: 'Managed Services',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      badge: '99.99% Uptime NOC SLA',
      summary: '99.99% SLA mission-critical database administration (PostgreSQL, Oracle, MySQL, MongoDB), high-availability clustering, and 24/7 NOC monitoring.',
      keywords: ['database', 'managed', 'dba', 'postgres', 'postgresql', 'oracle', 'mysql', 'mongodb', 'noc', 'sla', 'uptime', '24/7', 'monitoring']
    },
    {
      id: 'qa-automation-perf',
      name: 'QA Automation & Performance Engineering',
      slug: 'qa-automation-perf',
      path: '/services/qa-automation-perf',
      category: 'Quality Engineering',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      badge: 'Continuous AI Testing',
      summary: 'AI-driven test automation (Playwright, Cypress, Selenium), load/stress testing (k6, JMeter), and shift-left continuous regression testing.',
      keywords: ['qa', 'quality', 'testing', 'automation', 'test automation', 'playwright', 'cypress', 'selenium', 'jmeter', 'k6', 'performance', 'load testing']
    },
    {
      id: 'it-talent-consulting',
      name: 'IT Talent & Global Engineering Teams',
      slug: 'it-talent-consulting',
      path: '/services/it-talent-consulting',
      category: 'Staffing & Augmentation',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      badge: 'Dedicated Squads & PODs',
      summary: 'Dedicated offshore & nearshore engineering squads (Singapore, India, Australia) with pre-vetted senior architects, full-stack engineers, and cloud specialists.',
      keywords: ['talent', 'staffing', 'augmentation', 'hiring', 'engineers', 'developers', 'squads', 'offshore', 'nearshore', 'contractors', 'consultants']
    }
  ],
  products: [
    {
      id: 'pulse-crm',
      name: 'Inspac PulseCRM',
      slug: 'pulse-crm',
      path: '/products/pulse-crm',
      category: 'Sales & CRM',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      tagline: 'Omnichannel Sales & Pipeline Cloud',
      summary: '360° lead-to-deal visibility, automated visual sales pipelines, AI deal scoring, multi-currency CPQ, and omnichannel customer communication.',
      pricing: 'Starts at $29/user/month',
      stats: '42% Sales Velocity Boost · 100% Pipeline Visibility',
      keywords: ['crm', 'pulsecrm', 'sales', 'leads', 'deals', 'pipeline', 'pipeline management', 'zoho crm', 'salesforce', 'cpq', 'customer relationship']
    },
    {
      id: 'vault-books',
      name: 'Inspac VaultBooks',
      slug: 'vault-books',
      path: '/products/vault-books',
      category: 'Finance & Invoicing',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      tagline: 'Multi-Currency Cloud Accounting & GST Compliance',
      summary: 'Automated double-entry general ledger, Singapore IRAS GST filing, multi-currency cash flow forecasting, and instant invoice generation.',
      pricing: 'Starts at $35/org/month',
      stats: '100% IRAS GST Compliant · Automated Reconciliation',
      keywords: ['vaultbooks', 'accounting', 'finance', 'invoicing', 'gst', 'iras', 'bookkeeping', 'ledger', 'tax', 'invoices', 'quickbooks', 'zoho books']
    },
    {
      id: 'omni-desk',
      name: 'Inspac OmniDesk',
      slug: 'omni-desk',
      path: '/products/omni-desk',
      category: 'Customer Support & ITSM',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      tagline: 'SLA-Driven Enterprise Helpdesk & Ticketing',
      summary: 'Multi-channel support tickets (Email, Chat, WhatsApp, Portal), automated SLA escalations, self-service knowledge base, and ITIL incident management.',
      pricing: 'Starts at $24/agent/month',
      stats: '68% Faster First-Response Time · ITIL Aligned',
      keywords: ['omnidesk', 'helpdesk', 'support', 'tickets', 'ticketing', 'itsm', 'zendesk', 'freshdesk', 'sla', 'service desk', 'customer service']
    },
    {
      id: 'people-hr',
      name: 'Inspac PeopleHR',
      slug: 'people-hr',
      path: '/products/people-hr',
      category: 'HRMS & Talent',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
      tagline: 'Complete Hire-to-Retire HR Management',
      summary: 'Automated CPF & MOM compliant payroll in Singapore, leave & attendance tracking, performance reviews, and seamless employee self-service.',
      pricing: 'Starts at $4/employee/month',
      stats: 'MOM & CPF Automatic Computation · Mobile App',
      keywords: ['peoplehr', 'hr', 'hrms', 'payroll', 'cpf', 'mom', 'leave', 'attendance', 'employees', 'talent', 'performance appraisal']
    },
    {
      id: 'sight-bi',
      name: 'Inspac SightBI',
      slug: 'sight-bi',
      path: '/products/sight-bi',
      category: 'BI & Analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tagline: 'Real-Time Executive Dashboards & Data Visualization',
      summary: 'Unified analytics hub connecting ERP, CRM, and databases into interactive drill-down dashboards, predictive forecasting, and automated executive alerts.',
      pricing: 'Starts at $49/creator/month',
      stats: 'Sub-second queries · 150+ Built-in Connectors',
      keywords: ['sightbi', 'bi', 'business intelligence', 'dashboards', 'analytics', 'tableau', 'power bi', 'reports', 'charts', 'data visualization']
    },
    {
      id: 'flow-creator',
      name: 'Inspac FlowCreator',
      slug: 'flow-creator',
      path: '/products/flow-creator',
      category: 'Low-Code Automation',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      tagline: 'Drag-and-Drop Enterprise Workflow Builder',
      summary: 'Visual business process automation (BPA), webhooks, conditional logic, 200+ third-party connectors, and automated approval workflows.',
      pricing: 'Starts at $39/month',
      stats: 'Visual Canvas · 200+ Enterprise Connectors',
      keywords: ['flowcreator', 'flow', 'workflow', 'automation', 'low code', 'no code', 'zapier', 'make', 'process automation', 'approvals']
    },
    {
      id: 'guard-grc',
      name: 'Inspac GuardGRC',
      slug: 'guard-grc',
      path: '/products/guard-grc',
      category: 'Governance & Compliance',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      tagline: 'Automated PCI-DSS 4.0 & ISO 27001 Audit Hub',
      summary: 'Continuous compliance tracking, real-time evidence vault, vendor risk management, automated gap assessments, and audit-ready report generation.',
      pricing: 'Custom enterprise deployment',
      stats: 'Continuous Evidence Collection · QSA Audit Ready',
      keywords: ['guardgrc', 'grc', 'compliance platform', 'pci dss 4.0', 'iso 27001', 'audit tool', 'evidence', 'risk management', 'security audit']
    },
    {
      id: 'nexus-projects',
      name: 'Inspac NexusProjects',
      slug: 'nexus-projects',
      path: '/products/nexus-projects',
      category: 'Project Management',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      tagline: 'Agile & Waterfall Enterprise Collaboration',
      summary: 'Gantt chart timeline planning, Kanban sprint boards, automated resource utilization tracking, time logging, and project budget tracking.',
      pricing: 'Starts at $18/user/month',
      stats: 'Gantt & Kanban · Real-Time Resource Capacity',
      keywords: ['nexusprojects', 'projects', 'project management', 'jira', 'asana', 'monday', 'gantt', 'kanban', 'sprint', 'scrum', 'agile']
    }
  ],
  offices: [
    {
      city: 'Singapore (Global Headquarters)',
      country: 'Singapore 🇸🇬',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
      address: '111 North Bridge Road, #23-05 Peninsula Plaza, Singapore 179098',
      phone: '+65 98271155',
      altPhone: '+65 98881521',
      email: 'mkts@inspacsolutions.com',
      badge: 'Corporate Executive HQ & GRC Advisory'
    },
    {
      city: 'India (Offshore Tech Center)',
      country: 'India 🇮🇳',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
      address: 'IT Tech Hub, Chennai / Bangalore, India',
      phone: '+91 44 4567 8900',
      email: 'india@inspacsolutions.com',
      badge: 'Engineering & 24/7 Managed NOC'
    },
    {
      city: 'Australia (Regional Operations)',
      country: 'Australia 🇦🇺',
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
      address: 'Level 14, 385 Bourke Street, Melbourne VIC 3000, Australia',
      phone: '+61 3 9000 1122',
      email: 'australia@inspacsolutions.com',
      badge: 'Enterprise ERP & APAC Client Hub'
    }
  ],
  quickPrompts: [
    "🚀 What enterprise services does Inspac provide?",
    "💼 Tell me about Inspac SaaS products & pricing",
    "🛡️ How do you assist with PCI-DSS 4.0 compliance?",
    "💡 Calculate an instant project cost estimate",
    "🎓 What corporate training masterclasses are offered?",
    "📍 What are Inspac's office locations & contacts?"
  ]
};

// Calculate instant estimation based on parameters
export function calculateProjectEstimate({
  projectType = 'web_mobile',
  scope = 'medium',
  timeline = 'standard',
  complianceNeeded = false
}) {
  const baseRates = {
    web_mobile: { baseCost: 18000, baseWeeks: 6, title: 'Digital Web & Mobile Platform Modernization' },
    cloud_migration: { baseCost: 25000, baseWeeks: 8, title: 'Multi-Cloud Architecture & DevSecOps Migration' },
    ai_lakehouse: { baseCost: 32000, baseWeeks: 10, title: 'Enterprise AI & Data Lakehouse Implementation' },
    sap_erp: { baseCost: 45000, baseWeeks: 14, title: 'SAP S/4HANA & Enterprise ERP Integration' },
    pci_dss: { baseCost: 15000, baseWeeks: 4, title: 'PCI-DSS 4.0 / ISO 27001 Comprehensive Audit & Gap Remediation' },
    custom_saas: { baseCost: 22000, baseWeeks: 8, title: 'Custom SaaS & Workflow Automation System' }
  };

  const scopeMultipliers = {
    small: { factor: 0.65, label: 'MVP / Departmental Scope (1-3 Modules)' },
    medium: { factor: 1.0, label: 'Mid-Enterprise Scope (Core Workflows + Integrations)' },
    large: { factor: 1.8, label: 'Global Enterprise (Multi-Region, High-Throughput & High Availability)' }
  };

  const timelineMultipliers = {
    fast: { factor: 1.25, timeFactor: 0.65, label: 'Accelerated Sprint (Dedicated Squad, Fast-Track)' },
    standard: { factor: 1.0, timeFactor: 1.0, label: 'Standard Enterprise Agile Velocity' },
    flexible: { factor: 0.9, timeFactor: 1.35, label: 'Flexible Phased Rollout' }
  };

  const selectedBase = baseRates[projectType] || baseRates.web_mobile;
  const selectedScope = scopeMultipliers[scope] || scopeMultipliers.medium;
  const selectedTimeline = timelineMultipliers[timeline] || timelineMultipliers.standard;

  let totalCost = selectedBase.baseCost * selectedScope.factor * selectedTimeline.factor;
  let totalWeeks = Math.max(3, Math.round(selectedBase.baseWeeks * selectedScope.factor * selectedTimeline.timeFactor));

  if (complianceNeeded) {
    totalCost += 6500;
    totalWeeks += 2;
  }

  const minCost = Math.round(totalCost * 0.9);
  const maxCost = Math.round(totalCost * 1.2);

  return {
    title: selectedBase.title,
    scopeLabel: selectedScope.label,
    timelineLabel: selectedTimeline.label,
    estimatedWeeks: totalWeeks,
    costRangeSGD: `SGD $${minCost.toLocaleString()} – $${maxCost.toLocaleString()}`,
    costRangeUSD: `USD $${Math.round(minCost * 0.74).toLocaleString()} – $${Math.round(maxCost * 0.74).toLocaleString()}`,
    recommendedSquad: scope === 'large' 
      ? '1 Lead Architect, 2 Senior Full-Stack Engineers, 1 DevOps Engineer, 1 QA Specialist, 1 PM'
      : scope === 'medium'
      ? '1 Technical Lead, 2 Senior Engineers, 1 DevOps/QA, 1 Scrum Master'
      : '1 Full-Stack Lead, 1 Software Engineer, 1 QA Engineer'
  };
}

// Intent Classification and Response Generator
export function generateAiResponse(inputMessage) {
  const query = (inputMessage || '').trim().toLowerCase();
  
  if (!query) {
    return {
      text: "Hello! I'm **Nova**, your Inspac AI Solutions Advisor. How may I assist your enterprise today? Feel free to ask about our **Cloud Services**, **SaaS Products**, **PCI-DSS 4.0 Compliance**, or get an **Instant Project Estimate**.",
      suggestions: KNOWLEDGE_BASE.quickPrompts.slice(0, 4),
      interactiveType: null
    };
  }

  // Check 1: Greetings & Small Talk
  if (/^(hi|hello|hey|greetings|good morning|good afternoon|good evening|who are you|what can you do)/i.test(query)) {
    return {
      text: `👋 **Welcome to Inspac Solutions!** I'm **Nova**, your 24/7 AI Solutions Architect & Enterprise Concierge.

I can assist you with:
- 🚀 **Enterprise Services:** Cloud, DevSecOps, AI Lakehouse, SAP ERP, QA, & Staffing.
- 💼 **SaaS Applications:** PulseCRM, VaultBooks, OmniDesk, PeopleHR, SightBI, etc.
- 🛡️ **GRC & PCI-DSS 4.0:** Compliance Audits, MAS TRM, ISO 27001, & Gap Analysis.
- 💡 **Instant Estimations:** Ballpark timelines & budget ranges for your IT initiatives.
- 🎓 **Corporate Training:** Masterclasses & certifications for your engineering teams.
- 📍 **Global Contacts:** Connect directly with our Singapore HQ, India, or Australia offices.

What project or challenge can I help you explore today?`,
      suggestions: [
        "🚀 Enterprise Services",
        "💼 SaaS Products",
        "🛡️ PCI-DSS Compliance",
        "💡 Project Cost Estimator"
      ],
      interactiveType: 'visual_welcome',
      actionLinks: [
        { label: "View Solutions Hub", path: "/services", type: "route" },
        { label: "Explore SaaS Suite", path: "/products", type: "route" },
        { label: "Calculate Project Estimate", path: "/contact", prefill: "Request Project Estimate", type: "contact" }
      ]
    };
  }

  // Check 2: Project Estimator / Pricing / Cost Calculation Request
  if (
    query.includes('estimate') || 
    query.includes('cost') || 
    query.includes('calculate') || 
    query.includes('quote') || 
    query.includes('budget') || 
    query.includes('how much') || 
    query.includes('timeline') ||
    query.includes('price calculator')
  ) {
    return {
      text: `💡 **Inspac Enterprise Project Estimator**

I've generated an interactive **Cost & Timeline Estimator** for you below! You can customize your project type, scope, and timeline preferences right here in our chat to see real-time ballpark estimates and recommended engineering squad composition.

You can also submit your details directly to receive a comprehensive formal Statement of Work (SOW) within 24 hours.`,
      suggestions: [
        "📞 Book a Discovery Call",
        "🚀 Explore Cloud Services",
        "🛡️ PCI-DSS Assessment",
        "💼 View SaaS Products"
      ],
      interactiveType: 'estimator',
      interactiveData: {
        defaultType: 'web_mobile',
        defaultScope: 'medium',
        defaultTimeline: 'standard'
      }
    };
  }

  // Check 3: PCI-DSS / Compliance / Audit / Security
  if (
    query.includes('pci') || 
    query.includes('pci-dss') || 
    query.includes('compliance') || 
    query.includes('iso 27001') || 
    query.includes('soc 2') || 
    query.includes('mas trm') || 
    query.includes('audit') || 
    query.includes('qsa') || 
    query.includes('security')
  ) {
    return {
      text: `🛡️ **Cyber Security & PCI-DSS 4.0 Governance Practice**

Inspac Solutions is a trusted enterprise partner for **PCI-DSS 4.0**, **ISO 27001**, **SOC 2 Type II**, and **MAS Technology Risk Management (TRM)** compliance frameworks.

### Key Advisory Services:
- **PCI-DSS 4.0 Migration & Readiness:** Transition your cardholder data environment (CDE) to the rigorous PCI-DSS 4.0 standard with customized controls and zero-trust scoping.
- **Pre-Audit Gap Analysis:** Comprehensive vulnerability scans, architecture audits, and gap remediation blueprints before official QSA assessment.
- **Automated DevSecOps Governance:** Embedding SAST/DAST container scans, secrets rotation, and audit logs into your CI/CD pipelines.
- **GuardGRC SaaS Platform:** Continuous compliance evidence tracking and automated report generation.

👉 *Would you like to try our free interactive Compliance Assessment Tool or book an advisory session with our Singapore lead consultants?*`,
      suggestions: [
        "📋 Take Compliance Assessment",
        "📞 Book PCI-DSS Consultation",
        "📦 View GuardGRC Tool",
        "🎓 PCI-DSS Training Bootcamp"
      ],
      interactiveType: 'service_card',
      interactiveData: {
        serviceId: 'cyber-security-pci',
        title: 'Cyber Security & PCI-DSS 4.0 Governance',
        category: 'Security & Compliance',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
        badge: '100% First-Pass Rate · Singapore MAS TRM',
        stats: '100% Audit Pass Rate · Singapore MAS TRM & PCI-DSS 4.0',
        summary: 'End-to-end PCI-DSS 4.0 readiness assessments, cardholder data scoping, QSA audit facilitation, and continuous automated evidence collection.',
        path: '/services/cyber-security-pci',
        quizPath: '/compliance'
      },
      actionLinks: [
        { label: "Take Interactive Compliance Quiz", path: "/compliance", type: "route" },
        { label: "View Practice Details", path: "/services/cyber-security-pci", type: "route" },
        { label: "Book Audit Consultation", path: "/contact", prefill: "PCI-DSS 4.0 Audit & Advisory", type: "contact" }
      ]
    };
  }

  // Check 4: Specific Product Query
  for (const prod of KNOWLEDGE_BASE.products) {
    if (prod.keywords.some(k => query.includes(k))) {
      return {
        text: `📦 **${prod.name}** — *${prod.tagline}*

**Category:** ${prod.category}  
**Pricing:** ${prod.pricing}

### Overview:
${prod.summary}

### Key Highlights:
- **Enterprise Scale:** Ultra-fast sub-second latency, REST API webhooks, and SSO access.
- **Singapore / APAC Ready:** Pre-configured for local compliance (IRAS GST, MOM/CPF, MAS data privacy).
- **Secure Cloud Hosting:** Automated encryption at rest and in transit with 99.99% uptime.

👉 *Would you like to explore the interactive product demo or speak with a product specialist?*`,
        suggestions: [
          `📖 Explore ${prod.name} Details`,
          "💼 View All 8 SaaS Products",
          "💡 Calculate Custom Quote",
          "📞 Request Live Demo"
        ],
        interactiveType: 'product_card',
        interactiveData: {
          productId: prod.id,
          name: prod.name,
          category: prod.category,
          image: prod.image,
          tagline: prod.tagline,
          pricing: prod.pricing,
          stats: prod.stats,
          summary: prod.summary,
          path: prod.path
        },
        actionLinks: [
          { label: `View ${prod.name} Page`, path: prod.path, type: "route" },
          { label: "Compare All Products", path: "/products", type: "route" },
          { label: "Book 30-Min Demo", path: "/contact", prefill: `Live Demo: ${prod.name}`, type: "contact" }
        ]
      };
    }
  }

  // Check 5: General SaaS Products Catalog
  if (
    query.includes('product') || 
    query.includes('saas') || 
    query.includes('software') || 
    query.includes('apps') || 
    query.includes('suite') || 
    query.includes('crm') || 
    query.includes('erp')
  ) {
    return {
      text: `💼 **Inspac Enterprise SaaS Applications Suite**

Inspac delivers a cohesive suite of 8 modern enterprise business applications designed to streamline end-to-end organizational operations:

1. **Inspac PulseCRM** — Omnichannel lead-to-deal pipeline & sales automation.
2. **Inspac VaultBooks** — Multi-currency cloud accounting with Singapore IRAS GST compliance.
3. **Inspac OmniDesk** — SLA-driven omnichannel helpdesk and ITIL ticketing.
4. **Inspac PeopleHR** — Singapore MOM/CPF compliant HRMS & payroll platform.
5. **Inspac SightBI** — Executive analytics & real-time business intelligence dashboards.
6. **Inspac FlowCreator** — Drag-and-drop low-code workflow automation engine.
7. **Inspac GuardGRC** — Continuous PCI-DSS 4.0 & ISO 27001 governance & audit vault.
8. **Inspac NexusProjects** — Agile Kanban & Gantt enterprise project management.`,
      suggestions: [
        "📦 Inspac PulseCRM",
        "📦 Inspac VaultBooks",
        "📦 Inspac GuardGRC",
        "📖 Buyers Guide & Comparison"
      ],
      interactiveType: 'products_gallery',
      actionLinks: [
        { label: "Explore All Products", path: "/products", type: "route" },
        { label: "Read Enterprise Buyers Guide", path: "/buyers-guide", type: "route" },
        { label: "Schedule Product Suite Demo", path: "/contact", prefill: "Inspac Business Suite Demo", type: "contact" }
      ]
    };
  }

  // Check 6: Specific Service Query
  for (const srv of KNOWLEDGE_BASE.services) {
    if (srv.keywords.some(k => query.includes(k))) {
      return {
        text: `🚀 **${srv.name}**  
*Category: ${srv.category}*

### Practice Focus:
${srv.summary}

### Why Global Enterprises Choose Inspac:
- **Proven Methodologies:** Modeled after global Tier-1 consulting frameworks (HCLTech & Cognizant benchmarks) with automated governance.
- **SLA Excellence:** 99.99% uptime commitments, automated CI/CD deployment pipelines, and zero-downtime cutover.
- **Expert Squads:** Senior architects, certified cloud practitioners (AWS, Azure, GCP), and certified security assessors.

👉 *Would you like to review architecture case studies or arrange an executive technical briefing?*`,
        suggestions: [
          `🔍 Deep-Dive: ${srv.name}`,
          "🚀 Explore All 8 Services",
          "💡 Calculate Migration Cost",
          "📞 Schedule Discovery Call"
        ],
        interactiveType: 'service_card',
        interactiveData: {
          serviceId: srv.id,
          title: srv.name,
          category: srv.category,
          image: srv.image,
          badge: srv.badge,
          summary: srv.summary,
          path: srv.path
        },
        actionLinks: [
          { label: `View ${srv.name} Page`, path: srv.path, type: "route" },
          { label: "View All Enterprise Services", path: "/services", type: "route" },
          { label: "Book Consultation", path: "/contact", prefill: `Inquiry: ${srv.name}`, type: "contact" }
        ]
      };
    }
  }

  // Check 7: General Services
  if (
    query.includes('service') || 
    query.includes('consulting') || 
    query.includes('development') || 
    query.includes('engineering') || 
    query.includes('practices') || 
    query.includes('capabilities')
  ) {
    return {
      text: `🚀 **Inspac Enterprise Technology & Consulting Practices**

Inspac Solutions provides 8 strategic technology practices tailored for Fortune 500, regional enterprises, and high-growth fintechs:

- **1. Digital Engineering & App Modernization:** Microservices decomposition, React/Next.js platforms, and high-throughput APIs.
- **2. Cloud Transformation & DevSecOps:** Multi-cloud landing zones (AWS/Azure/GCP), Terraform IaC, Kubernetes, and FinOps.
- **3. Enterprise AI, Data Lakehouse & Analytics:** Generative AI agents, Snowflake/Databricks lakehouses, and predictive modeling.
- **4. SAP S/4HANA & Enterprise ERP:** Cloud ERP migrations, BTP extensions, and supply chain automation.
- **5. Cyber Security & PCI-DSS 4.0:** QSA audit readiness, MAS TRM, ISO 27001, and zero-trust security.
- **6. 24/7 Managed Databases & Infrastructure:** PostgreSQL, Oracle, MongoDB, and 99.99% SLA NOC support.
- **7. QA Automation & Performance:** AI test automation with Playwright/Cypress and k6 stress engineering.
- **8. IT Talent & Global Engineering Squads:** Rapid ramp-up of dedicated full-stack squads across Singapore, India, and Australia.`,
      suggestions: [
        "☁️ Cloud & DevSecOps",
        "🤖 AI & Data Lakehouse",
        "🛡️ Cyber Security & PCI-DSS",
        "👥 IT Talent Augmentation"
      ],
      interactiveType: 'services_gallery',
      actionLinks: [
        { label: "Explore Services Portal", path: "/services", type: "route" },
        { label: "Request Practice Deck", path: "/contact", prefill: "Enterprise Services Deck Request", type: "contact" }
      ]
    };
  }

  // Check 8: Corporate Training & Masterclasses
  if (
    query.includes('training') || 
    query.includes('course') || 
    query.includes('masterclass') || 
    query.includes('certification') || 
    query.includes('bootcamp') || 
    query.includes('learn')
  ) {
    return {
      text: `🎓 **Inspac Corporate Training & Executive Masterclasses**

We offer immersive, hands-on masterclasses designed by senior architects to upskill enterprise engineering and security teams:

- **1. Multi-Cloud & DevSecOps Masterclass:** 6 Weeks hands-on lab with AWS Pro, Terraform & Kubernetes.
- **2. AI Lakehouse, Data Engineering & RAG Systems:** 5 Weeks intensive Snowflake, Databricks & GenAI pipelines.
- **3. PCI-DSS 4.0 Lead Implementer Bootcamp:** 3 Weeks focused on official PCI-DSS 4.0 audit governance & MAS TRM.
- **4. SAP S/4HANA Cloud ERP & BTP Engineering:** 8 Weeks hands-on migration & Fiori/BTP extension training.

*All courses feature real-world enterprise sandbox labs, capstone projects, and accredited certification preparation.*`,
      suggestions: [
        "☁️ Cloud & DevSecOps Course",
        "🤖 AI & RAG Masterclass",
        "🛡️ PCI-DSS Bootcamp",
        "📞 Request Corporate Training Plan"
      ],
      interactiveType: 'training_card',
      actionLinks: [
        { label: "View All Training Courses", path: "/training", type: "route" },
        { label: "Request Corporate Group Proposal", path: "/contact", prefill: "Corporate Training Cohort Inquiry", type: "contact" }
      ]
    };
  }

  // Check 9: Careers & Jobs
  if (
    query.includes('career') || 
    query.includes('job') || 
    query.includes('hiring') || 
    query.includes('work with us') || 
    query.includes('vacancy') || 
    query.includes('apply') || 
    query.includes('salary') || 
    query.includes('developer')
  ) {
    return {
      text: `💼 **Careers at Inspac Solutions**

Join our high-performing team of software engineers, cloud architects, data scientists, and security advisors across Singapore, India, and Australia!

### Why Build Your Career at Inspac?
- **High-Impact Projects:** Architect mission-critical enterprise systems and AI platforms for global clients.
- **Continuous Learning:** 100% company-sponsored cloud & security certifications (AWS, GCP, CKA, PCI-DSS).
- **Flexible & Global Culture:** Hybrid working models, competitive compensation, and international mobility.

### Open Positions:
- Lead Cloud & DevSecOps Architect (Singapore / Hybrid)
- Senior Full-Stack Engineer — React & Node/Go (India Tech Center)
- Enterprise AI & Data Lakehouse Engineer (Singapore / India)
- PCI-DSS 4.0 Security Consultant & Auditor (Singapore HQ)
- SAP S/4HANA Solutions Consultant (Australia / Remote)`,
      suggestions: [
        "📄 View Open Roles & Apply",
        "📧 Email Resume to HR",
        "🏢 Learn About Company Culture",
        "📍 Office Locations"
      ],
      interactiveType: 'career_card',
      actionLinks: [
        { label: "View Careers & Apply Online", path: "/careers", type: "route" },
        { label: "Contact HR Directly", path: "/contact", prefill: "Career Inquiry / Job Application", type: "contact" }
      ]
    };
  }

  // Check 10: Office Locations, Contact, Phone, Email, Address
  if (
    query.includes('location') || 
    query.includes('address') || 
    query.includes('singapore') || 
    query.includes('india') || 
    query.includes('australia') || 
    query.includes('contact') || 
    query.includes('phone') || 
    query.includes('email') || 
    query.includes('office') || 
    query.includes('headquarters') || 
    query.includes('hq')
  ) {
    return {
      text: `📍 **Inspac Global Office Locations & Contacts**

Inspac Solutions operates across 3 strategic global hubs:

### 🇸🇬 Singapore (Global Headquarters)
- **Address:** 111 North Bridge Road, #23-05 Peninsula Plaza, Singapore 179098
- **Phone:** \`+65 98271155\` / \`+65 98881521\`
- **Email:** \`mkts@inspacsolutions.com\`
- **Key Functions:** Corporate Executive Hub, GRC Advisory, PCI-DSS Audits.

### 🇮🇳 India (Offshore Tech & R&D Hub)
- **Location:** IT Tech Hub, Chennai / Bangalore, India
- **Phone:** \`+91 44 4567 8900\`
- **Email:** \`india@inspacsolutions.com\`
- **Key Functions:** Software Engineering, Cloud & DevSecOps, 24/7 Managed NOC.

### 🇦🇺 Australia (Regional Operations)
- **Address:** Level 14, 385 Bourke Street, Melbourne VIC 3000, Australia
- **Phone:** \`+61 3 9000 1122\`
- **Email:** \`australia@inspacsolutions.com\`
- **Key Functions:** Enterprise ERP Consulting & APAC Client Services.`,
      suggestions: [
        "📞 Schedule Singapore HQ Meeting",
        "✉️ Send General Inquiry",
        "💡 Get Project Cost Estimate",
        "🏢 About Inspac History"
      ],
      interactiveType: 'office_cards',
      actionLinks: [
        { label: "Open Contact & Inquiry Form", path: "/contact", type: "route" },
        { label: "Read Company Profile", path: "/about", type: "route" }
      ]
    };
  }

  // Check 11: About Company / UEN / Clients / History
  if (
    query.includes('about') || 
    query.includes('company') || 
    query.includes('uen') || 
    query.includes('history') || 
    query.includes('who is') || 
    query.includes('clients') || 
    query.includes('portfolio')
  ) {
    return {
      text: `🏢 **About Inspac Solutions Pte Ltd**

- **Established:** 2012 (Over a decade of enterprise excellence)
- **Singapore UEN:** \`20122407R\`
- **Headquarters:** Peninsula Plaza, North Bridge Road, Singapore
- **Global Presence:** Singapore HQ, India Offshore R&D, Australia Operations
- **Track Record:** 350+ enterprise projects delivered with 100% SLA adherence and 100% first-attempt PCI-DSS 4.0 audit pass rate.

Our mission is to empower global enterprises with hyper-scalable digital architectures, automated cloud operations, airtight compliance, and intelligent SaaS solutions.`,
      suggestions: [
        "🚀 Enterprise Services",
        "💼 SaaS Product Suite",
        "🤝 Our Clients & Case Studies",
        "📞 Contact Executive Team"
      ],
      interactiveType: null,
      actionLinks: [
        { label: "Read Full Company Profile", path: "/about", type: "route" },
        { label: "View Enterprise Clients", path: "/clients", type: "route" },
        { label: "Schedule Executive Briefing", path: "/contact", prefill: "Executive Briefing Request", type: "contact" }
      ]
    };
  }

  // Fallback - Smart Contextual Helper
  return {
    text: `I've analyzed your question: "*${inputMessage}*". 

Inspac Solutions specializes in **Enterprise Cloud Transformation**, **Custom SaaS Products**, **PCI-DSS 4.0 Compliance Audits**, and **Corporate Training**.

Here are some suggested topics you can explore or let me know if you would like me to connect you with our solutions team:`,
    suggestions: [
      "🚀 Explore Enterprise Services",
      "💼 Browse SaaS Products",
      "🛡️ PCI-DSS 4.0 Compliance",
      "💡 Instant Project Cost Estimator",
      "📞 Connect with Singapore HQ"
    ],
    interactiveType: 'lead_form',
    interactiveData: {
      inquiryContext: inputMessage
    },
    actionLinks: [
      { label: "Explore All Services", path: "/services", type: "route" },
      { label: "Explore SaaS Products", path: "/products", type: "route" },
      { label: "Submit Detailed RFP / Inquiry", path: "/contact", prefill: inputMessage, type: "contact" }
    ]
  };
}
