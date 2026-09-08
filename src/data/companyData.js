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
    { label: "Service Verticals", value: "9+", detail: "Across Data, Cloud, GRC & ERP" },
    { label: "Global Presence", value: "3", detail: "Singapore, India & Australia" },
    { label: "Enterprise Projects", value: "250+", detail: "Delivered with 100% SLA" },
    { label: "Compliance Success", value: "100%", detail: "PCI-DSS & ISO Audit Pass Rate" }
  ]
};

export const servicesData = [
  {
    id: "data-science",
    title: "Data & Data Science",
    icon: "BarChart3",
    category: "Tech & Data",
    summary: "Data-driven solutions, predictive analytics, and data science expertise to support smarter executive decisions.",
    description: "Transform your raw enterprise data into predictive insights and actionable intelligence. We construct modern data lakes, ETL pipelines, and advanced machine learning models tailored for business forecasting.",
    features: [
      "Enterprise Business Intelligence & Dashboards",
      "Predictive Analytics & Forecasting Models",
      "BigQuery, Snowflake & Databricks Integration",
      "Data Governance & Lineage Mapping",
      "Automated ETL / ELT Data Pipelines"
    ],
    benefits: "Faster decision-making, reduced operational friction, and high-accuracy business forecasting."
  },
  {
    id: "database-solutions",
    title: "Database Solutions",
    icon: "Database",
    category: "Tech & Data",
    summary: "Database architecture designed to support secure, reliable, high-availability and efficient business operations.",
    description: "End-to-end database management including design, optimization, clustering, high availability, disaster recovery, and seamless cloud migrations for SQL & NoSQL systems.",
    features: [
      "High Availability (HA) & Disaster Recovery (DR)",
      "Performance Tuning & Index Optimization",
      "Database Migration (Oracle, SQL Server, PostgreSQL, MySQL)",
      "Zero-Downtime Replication & Clustering",
      "Database Security & Encryption at Rest/Transit"
    ],
    benefits: "99.999% system availability, sub-second query latency, and robust data protection."
  },
  {
    id: "erp-solutions",
    title: "ERP Solutions",
    icon: "Layers",
    category: "Tech & Data",
    summary: "Enterprise resource planning solutions supporting integrated business processes and seamless operations.",
    description: "Unify your organization's finance, supply chain, HR, and sales functions with tailored ERP implementations and modern custom extensions.",
    features: [
      "SAP, Oracle ERP & Custom ERP Engineering",
      "Cross-Module Workflow Automation",
      "Real-Time Supply Chain & Financial Reporting",
      "Legacy System ERP Modernization",
      "API Middleware & Integration Connectors"
    ],
    benefits: "Eliminates operational silos, lowers administrative overhead, and unifies business reporting."
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    icon: "Cloud",
    category: "Cloud & Ops",
    summary: "Cloud technologies and DevOps practices supporting infrastructure automation, scalability, and operational efficiency.",
    description: "Accelerate software delivery with automated CI/CD infrastructure, cloud-native containerization (Docker/Kubernetes), and multi-cloud strategy on AWS, GCP, and Azure.",
    features: [
      "Infrastructure as Code (Terraform, CloudFormation)",
      "Automated CI/CD Pipelines (GitHub Actions, Jenkins)",
      "Containerization & Kubernetes Orchestration",
      "Multi-Cloud Architecture (AWS, Azure, GCP)",
      "Cloud FinOps & Cost Optimization"
    ],
    benefits: "10x faster release velocity, resilient cloud infrastructure, and optimized cloud spend."
  },
  {
    id: "process-management",
    title: "Process Management",
    icon: "GitPullRequest",
    category: "Cloud & Ops",
    summary: "Process improvement solutions designed to enhance efficiency, consistency, and organizational performance.",
    description: "Streamline business workflows using Lean Six Sigma methodologies, robotic process automation (RPA), and continuous process monitoring.",
    features: [
      "Business Process Re-engineering (BPR)",
      "Workflow Automation & RPA Integration",
      "KPI & Bottleneck Analysis Frameworks",
      "Standard Operating Procedure (SOP) Digitization",
      "Operational Efficiency Audits"
    ],
    benefits: "Higher productivity, reduced human error, and clear operational standard operating procedures."
  },
  {
    id: "grc-solutions",
    title: "Governance, Risk & Compliance (GRC)",
    icon: "ShieldCheck",
    category: "Governance & Security",
    summary: "GRC solutions supporting enterprise governance frameworks, risk management, and strict regulatory compliance.",
    description: "Align your IT operations with international standards, ISO 27001, NIST, and regional data protection regulations (PDPA, GDPR).",
    features: [
      "Enterprise Risk Assessment & Mitigation Plans",
      "ISO 27001 & NIST Compliance Advisory",
      "Data Privacy (PDPA / GDPR) Governance",
      "Policy Authoring & Control Framework Mapping",
      "Board-Level Compliance Dashboards"
    ],
    benefits: "Protects brand reputation, mitigates legal liability, and maintains continuous audit-readiness."
  },
  {
    id: "pci-dss-compliance",
    title: "PCI-DSS Compliance",
    icon: "CreditCard",
    category: "Governance & Security",
    summary: "Professional support for PCI-DSS requirements, cardholder data security controls, and compliance certification.",
    description: "Specialized advisory for merchants and payment processors to safeguard payment data, pass QSA audits, and comply with PCI-DSS 4.0 standards.",
    features: [
      "PCI-DSS v4.0 Gap Analysis & Scope Reduction",
      "Cardholder Data Environment (CDE) Isolation",
      "Vulnerability Scanning & Penetration Testing Coordination",
      "Network Segmentation & Firewall Rule Audits",
      "Attestation of Compliance (AOC) Support"
    ],
    benefits: "Prevents payment data breaches, eliminates card brand fines, and ensures smooth AOC sign-off."
  },
  {
    id: "auditing-services",
    title: "Auditing Services",
    icon: "CheckCircle2",
    category: "Governance & Security",
    summary: "Auditing and assessment services supporting security posture, governance, and regulatory objectives.",
    description: "Independent, rigorous technical and process audits to uncover vulnerabilities, system misconfigurations, and regulatory non-compliance before external regulators do.",
    features: [
      "Third-Party Vendor Risk Audits",
      "IT General Controls (ITGC) Testing",
      "Cybersecurity Architecture Reviews",
      "Cloud Security Posture Assessment (GCP/AWS/Azure)",
      "Remediation Roadmap & Re-audit Verification"
    ],
    benefits: "Objective risk visibility, actionable remediation steps, and total stakeholder confidence."
  },
  {
    id: "custom-development",
    title: "Website & Custom Application Engineering",
    icon: "Code2",
    category: "Tech & Data",
    summary: "High-performance web applications, enterprise software, and mobile-ready responsive platforms.",
    description: "Custom software engineering built with modern frameworks (React, Next.js, Node.js, Python) designed for extreme performance, security, and exceptional user experience.",
    features: [
      "Modern Web Applications & SaaS Solutions",
      "RESTful & GraphQL API Architecture",
      "UI/UX Design Systems & Accessibility (WCAG)",
      "PWA & Cross-Platform Mobile Solutions",
      "Legacy Code Refactoring & Security Hardening"
    ],
    benefits: "Stunning user experience, high conversion rates, and scalable web architecture."
  }
];

export const trainingCourses = [
  {
    id: "tr-data-science",
    title: "Executive Data Science & Analytics Masterclass",
    category: "Data & Tech",
    duration: "4 Weeks (Interactive)",
    level: "Intermediate to Advanced",
    summary: "Master practical data analytics, SQL/Python data pipelines, and machine learning models for corporate decision-making.",
    modules: [
      "Data Architecture & Data Warehousing Fundamentals",
      "Exploratory Data Analysis with Python & Pandas",
      "Building Predictive Models with Scikit-Learn",
      "Creating Executive Dashboards in PowerBI & Tableau"
    ]
  },
  {
    id: "tr-cloud-devops",
    title: "Cloud Engineering & DevOps Practitioner Program",
    category: "Cloud & Ops",
    duration: "6 Weeks (Hands-on Labs)",
    level: "All Levels",
    summary: "Hands-on experience in Docker, Kubernetes, Infrastructure as Code with Terraform, and GitHub Actions CI/CD pipelines.",
    modules: [
      "Cloud Fundamentals (AWS, GCP, Azure)",
      "Containerization & Microservices Architecture",
      "Terraform Infrastructure Automation",
      "CI/CD Pipeline Design & Security Scanning"
    ]
  },
  {
    id: "tr-pci-dss",
    title: "PCI-DSS v4.0 Implementation & Audit Preparation",
    category: "Security & Compliance",
    duration: "2 Weeks (Intensive)",
    level: "Security Professionals",
    summary: "In-depth breakdown of PCI-DSS 4.0 requirements, CDE scope reduction techniques, control validation, and audit readiness.",
    modules: [
      "Understanding PCI-DSS 4.0 Core Requirements",
      "Scoping & Network Segmentation Strategies",
      "Implementing Strong Access Control & Encryption",
      "Conducting Internal Risk Assessments & Mock Audits"
    ]
  },
  {
    id: "tr-grc-auditing",
    title: "IT Governance, Risk & Auditing Fundamentals",
    category: "Security & Compliance",
    duration: "3 Weeks",
    level: "Managers & Auditors",
    summary: "Comprehensive framework covering ISO 27001 implementation, risk scoring matrices, and IT General Controls (ITGC) testing.",
    modules: [
      "Information Security Governance Frameworks",
      "Risk Identification & Threat Modeling",
      "ITGC Audit Planning & Sample Evidence Collection",
      "Reporting Audit Findings to Executive Boards"
    ]
  }
];

export const openPositions = [
  {
    id: "job-devops",
    title: "Senior Cloud & DevOps Architect",
    location: "Singapore / Hybrid",
    type: "Full-Time",
    department: "Cloud Operations",
    summary: "Design and implement scalable multi-cloud infrastructure, Kubernetes clusters, and automated CI/CD pipelines for enterprise clients.",
    requirements: [
      "5+ years experience in AWS or GCP cloud architecture",
      "Expertise in Terraform, Docker, Kubernetes, and Helm",
      "Strong understanding of DevSecOps & security scanning"
    ]
  },
  {
    id: "job-grc",
    title: "GRC & PCI-DSS Compliance Consultant",
    location: "Singapore / Australia (Remote Option)",
    type: "Full-Time",
    department: "Governance & Security",
    summary: "Guide clients through PCI-DSS 4.0 attestation, ISO 27001 certifications, and security control audits.",
    requirements: [
      "3+ years in IT audit, PCI-DSS, or ISO 27001 advisory",
      "CISA, CRISC, or CISM certification preferred",
      "Strong client consulting & report writing skills"
    ]
  },
  {
    id: "job-data-engineer",
    title: "Senior Data Engineer / Data Scientist",
    location: "India / Offshore Center",
    type: "Full-Time",
    department: "Data & Data Science",
    summary: "Build high-throughput data pipelines, BigQuery data models, and predictive analytics algorithms for global projects.",
    requirements: [
      "Proficiency in Python, SQL, PySpark, and Airflow",
      "Experience with BigQuery, Snowflake, or Databricks",
      "Solid foundation in machine learning and data modeling"
    ]
  }
];

export const assessmentQuestions = [
  {
    id: 1,
    question: "How does your organization handle cardholder payment data or sensitive PII?",
    options: [
      { label: "Fully tokenized through 3rd party gateways (No local storage)", score: 25 },
      { label: "Stored in isolated databases with strong encryption at rest", score: 20 },
      { label: "Stored in standard databases with limited access controls", score: 10 },
      { label: "Unsure / Stored in plain text / legacy files", score: 0 }
    ]
  },
  {
    id: 2,
    question: "What is the current status of your Cloud Infrastructure (AWS / GCP / Azure)?",
    options: [
      { label: "Fully automated with IaC (Terraform) and multi-region backup", score: 25 },
      { label: "Cloud-hosted with manual deployments & basic monitoring", score: 15 },
      { label: "Hybrid / Migrating legacy workloads to cloud", score: 10 },
      { label: "On-premise servers with no active cloud disaster recovery", score: 5 }
    ]
  },
  {
    id: 3,
    question: "How frequently does your organization perform security audits & penetration tests?",
    options: [
      { label: "Quarterly automated scans + annual third-party audit", score: 25 },
      { label: "Annually before major compliance reviews", score: 15 },
      { label: "Only when required by clients or partners", score: 5 },
      { label: "Never or rarely audited", score: 0 }
    ]
  },
  {
    id: 4,
    question: "Does your team have written GRC policies & incident response plans?",
    options: [
      { label: "Yes, regularly updated and tested with table-top drills", score: 25 },
      { label: "Yes, documented but rarely updated", score: 15 },
      { label: "In-progress / Drafting stage", score: 10 },
      { label: "No formal incident response policies", score: 0 }
    ]
  }
];
