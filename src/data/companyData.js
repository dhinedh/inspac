export const companyInfo = {
  name: "Inspac Solutions Pte Ltd",
  shortName: "Inspac Solutions",
  legalName: "Inspac Solutions Pte Ltd",
  uen: "20122407R",
  tagline: "Global Resource — Smart Solutions",
  subTagline: "INNOVATION · TECHNOLOGY · BUSINESS SOLUTIONS",
  foundingYear: "2012",
  website: "www.inspacsolutions.com",
  emails: {
    marketing: "mkts@inspacsolutions.com",
    support: "support@inspacsolutions.com",
    careers: "careers@inspacsolutions.com"
  },
  phones: [
    { country: "Singapore", number: "+65 98271155" },
    { country: "Singapore (Alternate)", number: "+65 98881521" }
  ],
  locations: [
    {
      id: "singapore",
      country: "Singapore",
      role: "Global Headquarters",
      address: "111 North Bridge Road, #23-05 Peninsula Plaza, Singapore 179098",
      phone: "+65 98271155 / +65 98881521",
      email: "mkts@inspacsolutions.com",
      status: "Active HQ",
      features: ["Corporate Executive Hub", "GRC & Audit Advisory", "PCI-DSS Governance"]
    },
    {
      id: "india",
      country: "India",
      role: "Offshore Development & Tech Center",
      address: "IT Tech Hub, Offshore Development Center, Chennai / Bangalore, India",
      phone: "+91 44 4567 8900",
      email: "india@inspacsolutions.com",
      status: "Development Hub",
      features: ["Full-Stack Software Engineering", "Cloud & DevOps Operations", "24/7 Managed Databases"]
    },
    {
      id: "australia",
      country: "Australia",
      role: "Regional Operations & Client Services",
      address: "Level 14, 385 Bourke Street, Melbourne VIC 3000, Australia",
      phone: "+61 3 9000 1122",
      email: "australia@inspacsolutions.com",
      status: "Regional Office",
      features: ["Enterprise ERP Consulting", "APAC Business Analytics", "Client Relationship Hub"]
    }
  ],
  stats: [
    { label: "Core Enterprise Practices", value: "8+", detail: "Digital Engineering, Cloud, AI & GRC" },
    { label: "Global Presence", value: "3", detail: "Singapore HQ, India R&D & Australia Ops" },
    { label: "Enterprise Projects", value: "350+", detail: "Delivered with 100% SLA Adherence" },
    { label: "Compliance Success", value: "100%", detail: "PCI-DSS 4.0 & ISO 27001 Pass Rate" }
  ]
};

// Enterprise Consulting & Technology Services (Modeled after HCLTech & Cognizant/CTS)
export const servicesData = [
  {
    id: "digital-engineering",
    title: "Digital Engineering & Application Modernization",
    icon: "Code2",
    category: "Digital Engineering",
    summary: "Cloud-native microservices, modern full-stack web/mobile platforms, legacy refactoring, and high-throughput API architectures.",
    description: "Inspired by global IT leaders like Cognizant and HCL, we design resilient, scalable digital systems. We architect modern frontends (React, Next.js, Flutter), microservices backends (Node.js, Go, Python), and decouple legacy monolithic applications into distributed, high-speed architectures.",
    features: [
      "Full-Stack Web & Mobile Architecture (React, Next.js, iOS/Android)",
      "Legacy Core Decoupling & Microservices Migration",
      "High-Throughput RESTful & GraphQL API Gateways",
      "Event-Driven Architecture & Kafka/PubSub Message Brokers",
      "Human-Centered UI/UX Design Systems & WCAG 2.1 AA Compliance"
    ],
    benefits: "70% faster time-to-market for new features, sub-second latency, and horizontal autoscaling under peak transaction loads."
  },
  {
    id: "cloud-devsecops",
    title: "Cloud Transformation & DevSecOps",
    icon: "Cloud",
    category: "Cloud & Infrastructure",
    summary: "Multi-cloud architecture (AWS, Azure, GCP), automated Terraform IaC, Kubernetes container orchestration, and Cloud FinOps governance.",
    description: "Accelerate your cloud modernization following proven frameworks like HCL CloudSMART and CTS Cloud 360. We deliver automated CI/CD pipelines, secure zero-trust landing zones, containerized microservices orchestration, and comprehensive multi-cloud cost optimization.",
    features: [
      "Multi-Cloud Architecture & Landing Zones (AWS, Azure, Google Cloud)",
      "Infrastructure as Code (IaC) with Terraform & CloudFormation",
      "Enterprise Kubernetes (EKS, GKE, AKS) & Service Mesh (Istio)",
      "Zero-Trust DevSecOps CI/CD Pipelines with Automated SAST/DAST",
      "Cloud FinOps, Resource Rightsizing & Cost Optimization"
    ],
    benefits: "10x deployment frequency, 99.99% infrastructure availability, and up to 35% reduction in multi-cloud operational spend."
  },
  {
    id: "ai-data-lakehouse",
    title: "Enterprise AI, Data Lakehouse & Analytics",
    icon: "BarChart3",
    category: "AI & Data Science",
    summary: "Generative AI enterprise integration, modern data lakes (Snowflake, Databricks, BigQuery), real-time ETL/ELT pipelines, and predictive analytics.",
    description: "Harness enterprise intelligence modeled after CTS AI & Analytics. We unify fragmented enterprise data into governed lakehouses, implement automated data pipelines, and deploy custom machine learning and Generative AI agents for automated decision intelligence.",
    features: [
      "Governed Data Lakehouses (Snowflake, Databricks, Google BigQuery)",
      "Real-Time Streaming & Automated ETL/ELT Pipelines (Airflow, dbt, Spark)",
      "Generative AI, LLM Fine-Tuning & Enterprise RAG Systems",
      "Predictive Analytics & Executive BI Dashboards (Power BI, Tableau)",
      "Data Governance, Lineage Tracking & Master Data Management (MDM)"
    ],
    benefits: "Unified single source of enterprise truth, high-accuracy forecasting, and automated executive decision support."
  },
  {
    id: "cybersecurity-grc",
    title: "Cybersecurity, GRC & PCI-DSS 4.0 Advisory",
    icon: "ShieldCheck",
    category: "Security & Governance",
    summary: "PCI-DSS v4.0 Attestation of Compliance (AOC), ISO 27001/NIST frameworks, Zero Trust security posture, and automated compliance auditing.",
    description: "Industry-leading cybersecurity and governance consulting comparable to HCL Cybersecurity and global QSA assessors. We isolate Cardholder Data Environments (CDE), automate vulnerability scanning, formulate board-level risk registers, and guarantee smooth audit pass rates.",
    features: [
      "PCI-DSS v4.0 Gap Assessment & Scope Reduction Architecture",
      "Cardholder Data Environment (CDE) Network Segmentation Audits",
      "ISO/IEC 27001, NIST CSF & Regional Privacy (PDPA / GDPR) Compliance",
      "Third-Party Vendor Risk Assessment & ITGC Controls Testing",
      "Attestation of Compliance (AOC) Support & QSA Audit Liaison"
    ],
    benefits: "100% first-attempt audit pass rate, zero non-compliance penalties, and fortified defense against data breaches."
  },
  {
    id: "enterprise-erp",
    title: "Enterprise Platform Services & ERP Modernization",
    icon: "Layers",
    category: "Enterprise Applications",
    summary: "SAP S/4HANA & Oracle Cloud ERP implementation, supply chain optimization, cross-module workflow automation, and custom middleware.",
    description: "Streamline core business operations with enterprise platform expertise modeled after Cognizant Enterprise Application Services. We implement, migrate, and modernize SAP, Oracle, and tailored ERP solutions to integrate finance, procurement, manufacturing, and HR.",
    features: [
      "SAP S/4HANA & Oracle Cloud ERP Migration & Customization",
      "Cross-Module Workflow Orchestration & Real-Time Financial Ledger Sync",
      "Automated Supply Chain, Procurement & Inventory Tracking",
      "Legacy ERP Decoupling with Modern RESTful Middleware Connectors",
      "Continuous ERP Upgrade Management & Custom Extension Engineering"
    ],
    benefits: "Eliminates departmental silos, delivers real-time P&L visibility, and reduces administrative overhead by 40%."
  },
  {
    id: "process-automation",
    title: "Intelligent Process Automation & Digital Operations",
    icon: "GitPullRequest",
    category: "Operations & Automation",
    summary: "Robotic Process Automation (RPA), Business Process Re-engineering (BPR), AI agent workflows, and Lean Six Sigma operational optimization.",
    description: "Benchmark your operations against HCL Digital Operations and Cognizant Intelligent Automation. We combine RPA (UiPath, Power Automate) with AI cognitive services to eliminate tedious manual workflows, digitize documentation, and enhance workforce productivity.",
    features: [
      "Robotic Process Automation (UiPath, Automation Anywhere, Power Automate)",
      "End-to-End Business Process Re-engineering (BPR)",
      "Intelligent Document Processing (IDP) & OCR Ingestion Pipelines",
      "Standard Operating Procedure (SOP) Digitization & Workflow Tracking",
      "Process Bottleneck Analytics & Real-Time KPI Dashboards"
    ],
    benefits: "80% reduction in manual data entry error, 5x faster cycle turnaround, and enhanced employee productivity."
  },
  {
    id: "quality-engineering",
    title: "Quality Engineering & Assurance",
    icon: "CheckCircle2",
    category: "Quality Engineering",
    summary: "Continuous test automation, performance and load engineering, API & security verification, and chaos engineering for mission-critical software.",
    description: "Emulating the rigorous quality engineering practices of CTS and HCL, we embed automated testing across the SDLC. From unit and API integration testing to extreme-scale load simulations, we ensure flawless software reliability before production release.",
    features: [
      "Continuous Test Automation (Playwright, Cypress, Selenium)",
      "API Performance, Stress & Load Simulation (k6, JMeter)",
      "Automated Security & Vulnerability QA (OWASP Top 10 Scans)",
      "Cross-Browser, Mobile Device Matrix & Accessibility (WCAG) Testing",
      "Chaos Engineering & Disaster Recovery Validation"
    ],
    benefits: "Zero critical production escape defects, 90% test automation coverage, and guaranteed high-concurrency resilience."
  },
  {
    id: "managed-services",
    title: "24/7 Global Managed Infrastructure & IT Services",
    icon: "Database",
    category: "Managed Operations",
    summary: "Global L1-L3 service desk, database high-availability clustering, 24/7 multi-region NOC/SOC monitoring, and SLA-backed maintenance.",
    description: "Deliver uninterrupted digital uptime with round-the-clock infrastructure management. Our offshore and regional engineering desks in Singapore, India, and Australia monitor, maintain, and safeguard client workloads with strict 15-minute response SLAs.",
    features: [
      "24/7/365 Global NOC/SOC Operations & Incident Management",
      "High-Availability Database Administration (Oracle, SQL Server, PostgreSQL)",
      "Zero-Downtime Replication, Failover & Multi-Region Backup DR",
      "Omnichannel L1, L2 & L3 Technical Helpdesk & Ticket Escalation",
      "Continuous Health Telemetry, Patch Management & Security Hardening"
    ],
    benefits: "99.999% system availability, sub-15 minute incident response, and worry-free operational stability."
  }
];

// Modular Software Products Suite (Modeled after Zoho's celebrated ecosystem)
export const productsData = [
  {
    id: "pulse-crm",
    title: "Inspac PulseCRM",
    tagline: "Omnichannel Customer Relationship & Sales Cloud",
    category: "Sales & Marketing",
    desc: "Complete 360° lead-to-deal management, AI sales pipeline forecasting, omnichannel communication, and automated deal workflows.",
    zohoRef: "Inspired by Zoho CRM",
    badgeColor: "bg-blue-600 text-white shadow-blue-500/25",
    bgColor: "bg-[#edf5ff]",
    accentColor: "#2563eb",
    features: [
      "Omnichannel Lead Capture (Email, Web, Phone, Chat)",
      "Visual Drag-and-Drop Deal Pipeline & Stage Automation",
      "Predictive AI Win-Probability & Forecasting Engine",
      "Custom Workflow Rules, Quotas & Commission Tracking",
      "Mobile CRM with Offline Sync for Field Sales Reps"
    ],
    benefits: "35% higher sales conversion, 4x faster deal velocity, and real-time executive revenue visibility."
  },
  {
    id: "books-finance",
    title: "Inspac Books & Finance",
    tagline: "Enterprise Accounting & Tax Compliance Platform",
    category: "Finance & Accounting",
    desc: "Automated billing, multi-currency invoicing, tax compliance (GST, IRAS, VAT), cash flow tracking, and automated bank reconciliation.",
    zohoRef: "Inspired by Zoho Books",
    badgeColor: "bg-emerald-600 text-white shadow-emerald-500/25",
    bgColor: "bg-[#ecfdf5]",
    accentColor: "#059669",
    features: [
      "Multi-Currency Invoicing & Automated Recurring Subscriptions",
      "Regional Tax Compliance & E-Invoicing (Singapore IRAS, India GST)",
      "Automated Bank Feed Sync & One-Click Reconciliation",
      "Expense Tracking, Purchase Orders & Vendor Portals",
      "Real-Time P&L, Balance Sheet & Cashflow Intelligence"
    ],
    benefits: "Zero tax calculation errors, 60% faster billing cycles, and comprehensive audit-ready financial records."
  },
  {
    id: "desk-support",
    title: "Inspac Desk & Support",
    tagline: "AI-Powered Omnichannel Customer Service Desk",
    category: "Service & Support",
    desc: "Unified customer support ticket management, SLA escalation matrices, AI agent assist, self-service knowledge base, and CSAT telemetry.",
    zohoRef: "Inspired by Zoho Desk",
    badgeColor: "bg-purple-600 text-white shadow-purple-500/25",
    bgColor: "bg-[#f6f1ff]",
    accentColor: "#9333ea",
    features: [
      "Omnichannel Ticket Ingestion (Email, WhatsApp, Web, Social)",
      "Intelligent Skill-Based Ticket Routing & Auto-Assignments",
      "SLA Escalation Timers & Automated Breach Alerts",
      "AI Knowledge Base & Interactive Customer Self-Service Portal",
      "Agent Productivity Metrics & Customer CSAT Analytics"
    ],
    benefits: "50% faster ticket resolution time, 99.8% SLA adherence, and significantly higher customer retention."
  },
  {
    id: "people-hrms",
    title: "Inspac People HRMS",
    tagline: "Modern People Operations & Workforce Management",
    category: "Human Resources",
    desc: "End-to-end employee lifecycle, statutory payroll processing, biometric attendance, leave management, and 360° performance reviews.",
    zohoRef: "Inspired by Zoho People",
    badgeColor: "bg-orange-600 text-white shadow-orange-500/25",
    bgColor: "bg-[#fff7ed]",
    accentColor: "#ea580c",
    features: [
      "Employee Database, Digital Onboarding & Document Vault",
      "Automated Regional Payroll with Tax & CPF/Provident Deductions",
      "Geo-Fenced & Biometric Time Tracking, Shifts & Leave Approvals",
      "360-Degree Performance Reviews, Goals & OKR Tracking",
      "Employee Self-Service (ESS) Mobile & Web Portal"
    ],
    benefits: "Eliminates manual payroll errors, boosts employee satisfaction, and ensures 100% labor law compliance."
  },
  {
    id: "analytics-bi",
    title: "Inspac Analytics BI",
    tagline: "Deep Visual Analytics & Business Intelligence Engine",
    category: "Data & Analytics",
    desc: "Transform enterprise databases and SaaS applications into stunning visual executive dashboards, predictive charts, and automated alerts.",
    zohoRef: "Inspired by Zoho Analytics",
    badgeColor: "bg-sky-600 text-white shadow-sky-500/25",
    bgColor: "bg-[#f0f9ff]",
    accentColor: "#0284c7",
    features: [
      "Connectors for 50+ Cloud Databases, ERPs & CRMs",
      "Drag-and-Drop Visual Dashboard & KPI Scorecard Builder",
      "Natural Language Querying (Ask AI for Metrics & Charts)",
      "Automated Scheduled Email Reports & Anomaly Alert Triggers",
      "Granular Role-Based Data Permissions & Embedded Analytics"
    ],
    benefits: "Instant executive visibility, real-time KPI tracking, and data democratization across leadership teams."
  },
  {
    id: "creator-studio",
    title: "Inspac Creator Studio",
    tagline: "Enterprise Low-Code Custom Application Platform",
    category: "Custom Engineering",
    desc: "Build mission-critical internal business applications, tailored approval workflows, and mobile forms with 10x speed using low-code tools.",
    zohoRef: "Inspired by Zoho Creator",
    badgeColor: "bg-indigo-600 text-white shadow-indigo-500/25",
    bgColor: "bg-[#f1edff]",
    accentColor: "#6366f1",
    features: [
      "Drag-and-Drop Visual Schema & UI Form Designer",
      "Event-Driven Business Logic & Validation Scripting",
      "Automatic Multi-Platform Deployment (Web, iOS, Android)",
      "Granular Access Controls, Audit Logs & Data Encryption",
      "One-Click RESTful API Connectors to Enterprise Systems"
    ],
    benefits: "Build enterprise apps in days rather than months, drastically lowering custom software development costs."
  },
  {
    id: "vault-directory",
    title: "Inspac Vault & Directory",
    tagline: "Zero-Trust Secrets Management & Identity Governance",
    category: "Security & Identity",
    desc: "Secure enterprise password repository, Single Sign-On (SSO), multi-factor authentication (MFA), and audit logs for PCI-DSS compliance.",
    zohoRef: "Inspired by Zoho Vault / Directory",
    badgeColor: "bg-rose-700 text-white shadow-rose-600/25",
    bgColor: "bg-[#fff0f4]",
    accentColor: "#be123c",
    features: [
      "End-to-End Encrypted (AES-256) Enterprise Password & Key Vault",
      "SAML 2.0 / OAuth Single Sign-On (SSO) & Biometric 2FA",
      "Role-Based Access Control (RBAC) & Privileged Access Management",
      "Automated Credential Rotation & Session Video Recording",
      "Immutable Audit Trails for PCI-DSS 4.0 & ISO 27001 Audits"
    ],
    benefits: "Eliminates credential leakage, ensures strict identity governance, and accelerates compliance audits."
  },
  {
    id: "flow-automation",
    title: "Inspac Flow Automation",
    tagline: "Event-Driven Cross-Application Integration Bus",
    category: "Integration & iPaaS",
    desc: "Connect disparate ERPs, CRMs, cloud databases, and SaaS tools with visual trigger-action logic without writing complex custom code.",
    zohoRef: "Inspired by Zoho Flow",
    badgeColor: "bg-amber-500 text-white shadow-amber-500/25",
    bgColor: "bg-[#fff5e9]",
    accentColor: "#f59e0b",
    features: [
      "Pre-Built Connectors for 200+ Enterprise Cloud Applications",
      "Visual Drag-and-Drop Multi-Step Workflow Designer",
      "Webhook Listeners, Data Transformers & JSON Formatters",
      "Guaranteed Event Delivery with Automatic Retry Queues",
      "Detailed Execution Logs & Real-Time Failure Notifications"
    ],
    benefits: "Seamlessly breaks down data silos between ERP, CRM, and cloud services without manual batch jobs."
  }
];

export const trainingCourses = [
  {
    id: "tr-cloud-devsecops",
    title: "Enterprise Cloud Engineering & DevSecOps Masterclass",
    category: "Cloud & DevSecOps",
    duration: "6 Weeks (Hands-on Labs)",
    level: "Engineers & Architects",
    summary: "Master multi-cloud architecture (AWS/GCP/Azure), Kubernetes orchestration, Terraform IaC, and automated CI/CD pipelines.",
    modules: [
      "Multi-Cloud Architecture & Zero-Trust Landing Zones",
      "Containerization & Microservices Orchestration with Kubernetes",
      "Infrastructure Automation with Terraform & GitOps",
      "Automated DevSecOps Pipeline Security & FinOps Governance"
    ]
  },
  {
    id: "tr-data-ai",
    title: "Enterprise AI & Modern Data Lakehouse Masterclass",
    category: "Data & AI",
    duration: "5 Weeks (Interactive)",
    level: "Intermediate to Advanced",
    summary: "Construct high-throughput data pipelines, Snowflake/BigQuery lakehouses, and integrate Generative AI business models.",
    modules: [
      "Modern Data Lakehouse Architecture (Snowflake, BigQuery, Databricks)",
      "Automated ELT Data Pipelines with dbt, Airflow & Python",
      "Enterprise Generative AI, RAG Architectures & LLM Fine-Tuning",
      "Executive Data Storytelling & Real-Time BI Dashboards"
    ]
  },
  {
    id: "tr-pci-dss",
    title: "PCI-DSS v4.0 Implementation & QSA Audit Readiness",
    category: "Security & Governance",
    duration: "3 Weeks (Intensive)",
    level: "Security Officers & Auditors",
    summary: "Comprehensive breakdown of PCI-DSS 4.0 requirements, CDE scope reduction, firewall segmentation, and AOC attestation.",
    modules: [
      "Deep Dive into PCI-DSS 4.0 Core Requirements & Timelines",
      "Network Segmentation, Scope Reduction & CDE Isolation",
      "Access Control, Strong Cryptography & Key Management",
      "Mock Audits, Evidence Gathering & QSA Sign-off Protocol"
    ]
  },
  {
    id: "tr-digital-operations",
    title: "Intelligent Process Automation & RPA Practitioner",
    category: "Process & Automation",
    duration: "4 Weeks (Hands-on)",
    level: "Managers & Developers",
    summary: "Design and implement robotic process automation, intelligent document processing, and Lean Six Sigma workflow re-engineering.",
    modules: [
      "Business Process Re-engineering (BPR) & Bottleneck Identification",
      "RPA Bot Development (UiPath / Power Automate)",
      "Intelligent Document Processing (IDP) & Cognitive OCR",
      "Deploying and Monitoring Autonomous AI Workflows at Scale"
    ]
  }
];

export const openPositions = [
  {
    id: "job-cloud-architect",
    title: "Lead Cloud & DevSecOps Architect",
    location: "Singapore / Hybrid",
    type: "Full-Time",
    department: "Cloud Transformation",
    summary: "Architect and lead multi-cloud migrations, Kubernetes container platforms, and automated DevSecOps pipelines for tier-1 clients.",
    requirements: [
      "6+ years experience in AWS, GCP, or Azure enterprise architecture",
      "Expertise in Terraform, Kubernetes, Docker, and CI/CD security scanning",
      "Experience with Cloud FinOps and high-availability systems"
    ]
  },
  {
    id: "job-grc-lead",
    title: "Principal Cybersecurity & PCI-DSS Consultant",
    location: "Singapore / Australia (Hybrid)",
    type: "Full-Time",
    department: "Security & Governance",
    summary: "Lead PCI-DSS v4.0 gap assessments, ISO 27001 certifications, and QSA audit liaisons across APAC financial institutions.",
    requirements: [
      "5+ years in IT audit, PCI-DSS compliance, or ISO 27001 advisory",
      "CISA, CRISC, CISM, or QSA credentials strongly preferred",
      "Proven track record guiding enterprises to successful AOC sign-off"
    ]
  },
  {
    id: "job-ai-engineer",
    title: "Senior AI & Data Lakehouse Engineer",
    location: "India / Offshore Tech Center",
    type: "Full-Time",
    department: "AI & Data Science",
    summary: "Engineer high-throughput streaming pipelines, Snowflake/BigQuery data lakehouses, and enterprise Generative AI integrations.",
    requirements: [
      "Proficiency in Python, SQL, Apache Spark, dbt, and Airflow",
      "Hands-on experience with Snowflake, Databricks, or BigQuery",
      "Practical experience deploying LLM fine-tuning or RAG architectures"
    ]
  }
];

export const assessmentQuestions = [
  {
    id: 1,
    question: "How does your organization currently handle cardholder payment data or sensitive PII?",
    options: [
      { label: "Fully tokenized via 3rd party gateways with zero local CDE footprint", score: 25 },
      { label: "Isolated in segmented databases with AES-256 encryption at rest and in transit", score: 20 },
      { label: "Stored in standard internal databases with basic role-based access controls", score: 10 },
      { label: "Stored in legacy unsegmented databases or plain text files", score: 0 }
    ]
  },
  {
    id: 2,
    question: "What is the maturity level of your Cloud & DevOps infrastructure (AWS / GCP / Azure)?",
    options: [
      { label: "Fully automated with Terraform IaC, containerized Kubernetes & multi-region DR", score: 25 },
      { label: "Cloud-hosted with automated CI/CD pipelines and active health monitoring", score: 18 },
      { label: "Hybrid cloud with manual deployments and periodic backups", score: 10 },
      { label: "On-premise legacy servers with no automated disaster recovery", score: 0 }
    ]
  },
  {
    id: 3,
    question: "How are enterprise business processes, data, and ERP systems unified?",
    options: [
      { label: "Integrated modern ERP/CRM with real-time event brokers & automated BI dashboards", score: 25 },
      { label: "Centralized database with automated ETL pipelines and scheduled reports", score: 18 },
      { label: "Siloed applications requiring periodic manual data export and reconciliation", score: 10 },
      { label: "Ad-hoc spreadsheets and disconnected legacy software tools", score: 0 }
    ]
  },
  {
    id: 4,
    question: "What is your current security audit and PCI-DSS 4.0 / ISO 27001 governance posture?",
    options: [
      { label: "Continuous automated vulnerability scanning + annual third-party QSA/ISO audits", score: 25 },
      { label: "Documented GRC policies with annual internal security reviews", score: 18 },
      { label: "Reactive security testing conducted only during partner or client vendor audits", score: 8 },
      { label: "No formal GRC policies, incident response plans, or compliance audits", score: 0 }
    ]
  }
];
