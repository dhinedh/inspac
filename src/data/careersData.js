import { 
  Cloud, 
  ShieldCheck, 
  BarChart3, 
  Code2, 
  Layers, 
  GitPullRequest, 
  CheckCircle2, 
  Database,
  MapPin,
  Clock,
  Briefcase,
  DollarSign,
  Award,
  Zap,
  Check
} from 'lucide-react';

export const careerBenefits = [
  {
    icon: '🚀',
    title: 'Certification & Growth Sponsorship',
    tag: 'Continuous Learning',
    desc: '100% employer-sponsored AWS, GCP, Azure, CISA, CISSP, CKA, and SAP certifications plus an annual S$2,500 personal continuous education stipend.'
  },
  {
    icon: '🌏',
    title: 'Global Hub Mobility & Rotations',
    tag: 'Global Careers',
    desc: 'Seamless internal mobility pathways between our Singapore Global HQ, India Offshore Tech Centers, and Australian client engagement pods.'
  },
  {
    icon: '⚡',
    title: 'Mission-Critical Enterprise Systems',
    tag: 'Tier-1 Engineering',
    desc: 'Work on distributed microservices, petabyte-scale lakehouses, and PCI-DSS 4.0 financial pipelines powering the largest institutions in APAC.'
  },
  {
    icon: '🏡',
    title: 'Hybrid Work Autonomy & Flexibility',
    tag: 'Flexibility First',
    desc: 'Balanced 2–3 day hybrid work policy, flexible core working hours, and modern ergonomic home office setup allowances.'
  },
  {
    icon: '🛡️',
    title: 'Comprehensive Health & Family Coverage',
    tag: 'Holistic Wellbeing',
    desc: 'Tier-1 private hospitalization and surgical insurance for you and your dependents, dental, optical, and annual wellness subsidies.'
  },
  {
    icon: '📈',
    title: 'Performance Bonuses & Long-Term Incentives',
    tag: 'Value Sharing',
    desc: 'Competitive base salaries benchmarked above industry medians, biannual performance merit bonuses, and leadership equity incentives.'
  }
];

export const hiringProcessSteps = [
  {
    step: '01',
    title: 'Application & Profile Review',
    timing: '< 48 Hours',
    desc: 'Our Singapore & regional talent team reviews your technical background, code repos, and consulting portfolio against open practice needs.'
  },
  {
    step: '02',
    title: 'Practice Lead Technical Interview',
    timing: '45–60 Minutes',
    desc: 'A collaborative architectural discussion with a Principal Engineer on distributed systems, real-world case studies, and practical trade-offs. No abstract trivia.'
  },
  {
    step: '03',
    title: 'System Design or Practical Scenario',
    timing: '60 Minutes',
    desc: 'Work through a realistic enterprise scenario (e.g. monolith decoupling, PCI-DSS CDE scoping, or data lakehouse pipeline architecture).'
  },
  {
    step: '04',
    title: 'Executive Alignment & Formal Offer',
    timing: '3–5 Days',
    desc: 'Meet our Practice Directors to discuss career roadmap, growth goals, and finalize a highly competitive compensation package.'
  }
];

export const globalOffices = [
  {
    city: 'Singapore',
    type: 'Global Corporate HQ & Delivery Center',
    address: 'One Raffles Quay, North Tower, Singapore 048583',
    focus: 'Enterprise Consulting, Solutions Architecture & Governance Advisory',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80'
  },
  {
    city: 'Bengaluru / Chennai, India',
    type: 'Offshore Technology & Engineering Center',
    address: 'RMZ Ecospace Tech Park, Outer Ring Road, Bengaluru 560103',
    focus: 'Full-Stack Engineering, AI Lakehouses, Cloud DevSecOps & QA Labs',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80'
  },
  {
    city: 'Sydney, Australia',
    type: 'Regional Client Operations & Advisory',
    address: 'International Towers, Barangaroo, Sydney NSW 2000',
    focus: 'Client Engagements, FinTech Compliance & Banking Practice Delivery',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80'
  }
];

export const openPositionsDetailed = [
  {
    id: 'lead-cloud-devsecops-architect',
    title: 'Lead Cloud & DevSecOps Architect',
    department: 'Cloud Transformation',
    practiceId: 'cloud-devsecops',
    location: 'Singapore / Hybrid',
    locationType: 'Hybrid',
    country: 'Singapore',
    type: 'Full-Time',
    experience: 'Senior / Lead (7+ Yrs)',
    salary: 'S$135,000 – S$170,000 / annum + Bonus',
    summary: 'Lead multi-cloud landing zone design (AWS/Azure/GCP), production Kubernetes infrastructure, Terraform IaC automation, and automated DevSecOps pipelines for tier-1 financial and enterprise clients.',
    responsibilities: [
      'Architect enterprise-grade multi-cloud landing zones with automated network segmentation, transit gateways, and identity federation.',
      'Deploy and govern multi-cluster Kubernetes environments (EKS/GKE/AKS) using GitOps (ArgoCD/Flux) and Istio service mesh.',
      'Build zero-trust DevSecOps CI/CD pipelines integrating automated SAST/DAST, container image vulnerability scanning, and policy-as-code.',
      'Provide technical leadership and mentorship to regional DevOps squads, conducting architecture reviews and cloud FinOps cost governance.'
    ],
    requirements: [
      '7+ years of hands-on cloud architecture experience with AWS, Azure, or GCP in enterprise production environments.',
      'Deep expertise in Terraform / OpenTofu Infrastructure as Code, modular architectures, and state management.',
      'Demonstrated experience implementing Kubernetes, Docker, Helm, and zero-trust container security controls.',
      'Strong knowledge of enterprise networking (VPC peering, VPNs, BGP, AWS Direct Connect) and identity security (IAM, SAML, OIDC).'
    ],
    preferred: [
      'AWS Certified Solutions Architect – Professional or Google Professional Cloud Architect.',
      'Certified Kubernetes Administrator (CKA) or Certified Kubernetes Security Specialist (CKS).',
      'Experience in PCI-DSS or SOC 2 compliant regulated banking environments.'
    ],
    techStack: ['AWS', 'Kubernetes', 'Terraform', 'ArgoCD', 'Istio', 'Docker', 'GitLab CI', 'Datadog']
  },
  {
    id: 'principal-cybersecurity-pci-consultant',
    title: 'Principal Cybersecurity & PCI-DSS 4.0 Consultant',
    department: 'Security & Governance',
    practiceId: 'cybersecurity-grc',
    location: 'Singapore / Australia (Hybrid)',
    locationType: 'Hybrid',
    country: 'Singapore',
    type: 'Full-Time',
    experience: 'Lead / Principal (8+ Yrs)',
    salary: 'S$145,000 – S$185,000 / annum + Bonus',
    summary: 'Lead client advisory for PCI-DSS v4.0 gap assessments, cardholder data environment (CDE) isolation, ISO 27001 ISMS implementations, and liaison with accredited QSA auditing bodies across APAC.',
    responsibilities: [
      'Lead end-to-end PCI-DSS v4.0 readiness assessments, scoping reduction strategies, and formal Attestation of Compliance (AOC) audits.',
      'Design network segmentation and tokenization architectures to minimize client CDE audit footprints.',
      'Conduct comprehensive IT General Controls (ITGC) audits, SOC 1 / SOC 2 readiness, and regional privacy reviews (Singapore PDPA, Australian Privacy Principles).',
      'Author formal executive risk assessments, remediation plans, and present findings to C-suite and board audit committees.'
    ],
    requirements: [
      '8+ years in cybersecurity advisory, enterprise GRC, or IT security audit within professional services or banking.',
      'Comprehensive understanding of PCI-DSS v4.0 requirements, compensatory controls, and validated security frameworks.',
      'Proven track record guiding enterprises to successful, clean external audit sign-offs.',
      'Outstanding communication, client-facing presentation, and technical report writing skills.'
    ],
    preferred: [
      'Active certification in CISA, CISM, CISSP, CRISC, or current/prior Qualified Security Assessor (QSA) credential.',
      'Experience with cloud security posture management (CSPM) and zero-trust architecture frameworks.',
      'Familiarity with MAS Technology Risk Management (TRM) Guidelines.'
    ],
    techStack: ['PCI-DSS 4.0', 'ISO 27001', 'NIST CSF', 'MAS TRM', 'SOC 2', 'Wazuh', 'Tenable', 'Zero Trust']
  },
  {
    id: 'senior-ai-lakehouse-engineer',
    title: 'Senior AI & Modern Data Lakehouse Engineer',
    department: 'AI & Data Science',
    practiceId: 'ai-data-lakehouse',
    location: 'Bengaluru, India (Offshore Hub / Hybrid)',
    locationType: 'Hybrid',
    country: 'India',
    type: 'Full-Time',
    experience: 'Senior (5–8 Yrs)',
    salary: '₹28,00,000 – ₹38,00,000 INR / annum + Bonus',
    summary: 'Design and deploy modern data lakehouses (Snowflake, Databricks, BigQuery), streaming pipelines with Apache Spark and dbt, and production Generative AI / RAG knowledge pipelines for enterprise intelligence.',
    responsibilities: [
      'Build resilient, high-throughput streaming and batch ETL/ELT pipelines using dbt, Apache Spark, Python, and SQL.',
      'Architect medallion lakehouse storage layers (Bronze, Silver, Gold) on Snowflake, Databricks Delta Lake, or Google BigQuery.',
      'Implement data governance, data quality assertions (Great Expectations), schema registries, and automated lineage tracking.',
      'Develop enterprise RAG (Retrieval-Augmented Generation) architectures, vector indexing (pgvector, Pinecone), and LLM API orchestrations.'
    ],
    requirements: [
      '5+ years of production experience in data engineering, data warehousing, or lakehouse architecture.',
      'Expert-level proficiency in Python, SQL, and data transformation frameworks like dbt and PySpark.',
      'Hands-on experience deploying lakehouse solutions on Snowflake, Databricks, or BigQuery.',
      'Solid understanding of data modeling (Kimball dimensional modeling, Data Vault 2.0).'
    ],
    preferred: [
      'Snowflake SnowPro Advanced Certification or Databricks Certified Data Engineer Professional.',
      'Experience with event streaming systems (Kafka, Flink) and workflow orchestrators (Airflow, Prefect).',
      'Familiarity with LangChain, LlamaIndex, or OpenAI/Anthropic enterprise API integrations.'
    ],
    techStack: ['Snowflake', 'Databricks', 'dbt', 'Python', 'Apache Spark', 'Kafka', 'Airflow', 'pgvector']
  },
  {
    id: 'staff-fullstack-digital-engineer',
    title: 'Staff Full-Stack Digital Engineer (Next.js & Go)',
    department: 'Digital Engineering',
    practiceId: 'digital-engineering',
    location: 'Singapore / Hybrid',
    locationType: 'Hybrid',
    country: 'Singapore',
    type: 'Full-Time',
    experience: 'Senior / Staff (6+ Yrs)',
    salary: 'S$125,000 – S$155,000 / annum + Bonus',
    summary: 'Build ultra-responsive web applications, modern design system component libraries, and high-throughput microservices using Next.js 15, React 19, TypeScript, and Go/Node.js.',
    responsibilities: [
      'Lead full-stack engineering of high-traffic enterprise portals and digital customer platforms with sub-second page loads.',
      'Design modular UI component systems adhering strictly to WCAG 2.1 AA accessibility standards and design tokens.',
      'Engineer fault-tolerant RESTful and federated GraphQL microservices running on containerized cloud runtimes.',
      'Champion engineering excellence, continuous integration, comprehensive automated test coverage, and code review rigor.'
    ],
    requirements: [
      '6+ years of modern full-stack web development experience with React, Next.js, and TypeScript.',
      'Strong backend service development experience in Node.js, Go (Golang), or Java.',
      'Deep understanding of web performance optimization (Core Web Vitals, SSR, caching strategies, CDN edge runtimes).',
      'Experience with relational and document databases (PostgreSQL, Redis, MongoDB).'
    ],
    preferred: [
      'Experience breaking down legacy monolithic architectures into decoupled microservices.',
      'Familiarity with GraphQL Apollo Federation, Kafka event streams, and Docker packaging.',
      'Open-source contributions or technical blog authoring.'
    ],
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Go / Golang', 'Node.js', 'PostgreSQL', 'GraphQL', 'Tailwind']
  },
  {
    id: 'principal-sap-erp-architect',
    title: 'Principal SAP S/4HANA & Enterprise ERP Architect',
    department: 'Enterprise ERP & Platforms',
    practiceId: 'enterprise-erp',
    location: 'Singapore / Australia (Travel & Hybrid)',
    locationType: 'Hybrid',
    country: 'Singapore',
    type: 'Full-Time',
    experience: 'Lead / Principal (9+ Yrs)',
    salary: 'S$155,000 – S$195,000 / annum + Bonus',
    summary: 'Orchestrate enterprise ERP transformations, SAP S/4HANA brownfield/greenfield migrations, Clean Core extension frameworks, and cross-module financial and supply chain integrations.',
    responsibilities: [
      'Serve as Chief ERP Architect for major regional SAP S/4HANA migrations, cloud integrations, and modernization roadmaps.',
      'Design clean-core extension architectures using SAP Business Technology Platform (SAP BTP) and event-driven APIs.',
      'Lead cross-module alignment across FI/CO, SD, MM, and external SaaS solutions (Salesforce, Workday, Coupa).',
      'Advise client CIOs and CFOs on digital core roadmaps, business case validation, and phased cutover strategies.'
    ],
    requirements: [
      '9+ years of enterprise SAP ERP experience with at least 2 full-lifecycle SAP S/4HANA implementation or migration cycles.',
      'Deep functional and architectural knowledge of core SAP modules (FICO, SD, MM, PP).',
      'Experience with SAP BTP, SAP Integration Suite, and RESTful ABAP programming model (RAP/CAP).',
      'Exceptional stakeholder engagement and consulting leadership capabilities.'
    ],
    preferred: [
      'SAP S/4HANA Certified Solution Architect.',
      'Experience with Oracle Cloud ERP or Microsoft Dynamics 365 migrations.',
      'Experience in manufacturing, retail supply chain, or pharmaceutical industries.'
    ],
    techStack: ['SAP S/4HANA', 'SAP BTP', 'ABAP Cloud', 'Fiori', 'SAP Integration Suite', 'Oracle ERP', 'REST APIs']
  },
  {
    id: 'senior-intelligent-automation-specialist',
    title: 'Senior Intelligent Automation & RPA Specialist (UiPath)',
    department: 'Intelligent Automation',
    practiceId: 'process-automation',
    location: 'Bengaluru / Chennai, India (Hybrid)',
    locationType: 'Hybrid',
    country: 'India',
    type: 'Full-Time',
    experience: 'Senior (4–7 Yrs)',
    salary: '₹22,00,000 – ₹32,00,000 INR / annum + Bonus',
    summary: 'Design, build, and deploy unattended RPA bots and Intelligent Document Processing (IDP) pipelines with UiPath, Microsoft Power Automate, and OCR machine learning models.',
    responsibilities: [
      'Analyze enterprise workflows to identify high-ROI automation targets, producing Process Design Documents (PDD) and Solution Design Documents (SDD).',
      'Build resilient, high-volume unattended software bots using UiPath Robotic Enterprise (RE) Framework.',
      'Implement Intelligent Document Processing (IDP) and Cognitive OCR models to ingest unstructured invoices, customs declarations, and contracts.',
      'Manage UiPath Orchestrator infrastructure, robot clustering, credential vaults, and automated exception triage.'
    ],
    requirements: [
      '4+ years of hands-on experience building enterprise automations using UiPath or Microsoft Power Automate.',
      'Proven expertise with UiPath REFramework, state machines, and transactional queue management.',
      'Proficiency in C#, VB.NET, or Python for custom RPA activities and script extensions.',
      'Solid experience integrating with enterprise APIs and relational databases.'
    ],
    preferred: [
      'UiPath Certified Advanced RPA Developer (UiARD) or UiPath Certified Professional Automation Developer.',
      'Experience with OCR frameworks (ABBYY, Azure Form Recognizer, AWS Textract).',
      'Lean Six Sigma Green Belt or process re-engineering certification.'
    ],
    techStack: ['UiPath Orchestrator', 'REFramework', 'Power Automate', 'Python', 'C#', 'OCR / IDP', 'REST APIs']
  },
  {
    id: 'lead-quality-chaos-engineer',
    title: 'Lead Quality & Chaos Engineering Architect',
    department: 'Quality Engineering',
    practiceId: 'quality-engineering',
    location: 'India / Singapore (Remote / Hybrid)',
    locationType: 'Remote Friendly',
    country: 'Singapore',
    type: 'Full-Time',
    experience: 'Lead (6+ Yrs)',
    salary: 'S$115,000 – S$145,000 / annum (or ₹30L–₹40L INR)',
    summary: 'Architect end-to-end continuous automated quality frameworks with Playwright, Cypress, k6 load testing harness, and Chaos Toolkit to eliminate production downtime.',
    responsibilities: [
      'Design and establish standardized continuous test automation frameworks integrated directly into GitLab CI / GitHub Actions.',
      'Build end-to-end browser and mobile test suites utilizing modern TypeScript and Playwright / Cypress.',
      'Execute high-scale API stress, concurrency, and load benchmark tests with k6 and JMeter for peak holiday volumes.',
      'Conduct automated chaos experiments (network latency injection, pod termination, database failovers) to validate resilience.'
    ],
    requirements: [
      '6+ years in software quality engineering, automated testing, and reliability engineering.',
      'Advanced programming skills in TypeScript, JavaScript, or Python.',
      'Demonstrated expertise in Playwright or Cypress for complex SPAs and enterprise web applications.',
      'Hands-on experience with load and performance testing frameworks (k6, Locust, Gatling).'
    ],
    preferred: [
      'Experience with OWASP Top 10 automated security testing (ZAP, Snyk).',
      'Certified Software Quality Analyst (CSQA) or ISTQB Advanced Technical Test Analyst.',
      'Experience with Chaos Mesh, LitmusChaos, or Gremlin.'
    ],
    techStack: ['Playwright', 'TypeScript', 'k6', 'Cypress', 'Docker', 'Chaos Toolkit', 'OWASP ZAP', 'GitHub Actions']
  },
  {
    id: 'site-reliability-engineer-noc-soc',
    title: 'Site Reliability Engineer (24/7 Managed Infrastructure)',
    department: 'Managed Infrastructure',
    practiceId: 'managed-services',
    location: 'Singapore / Remote',
    locationType: 'Remote Friendly',
    country: 'Singapore',
    type: 'Full-Time',
    experience: 'Mid / Senior (4–7 Yrs)',
    salary: 'S$95,000 – S$125,000 / annum + Shift Allowances',
    summary: 'Maintain 99.999% uptime, manage global 24/7/365 NOC/SOC monitoring infrastructure, lead P1 incident triage, and implement Ansible automated self-healing runbooks.',
    responsibilities: [
      'Monitor hybrid cloud infrastructure, microservices, and databases using Prometheus, Grafana, Datadog, and Dynatrace.',
      'Serve as incident commander for critical P1/P2 production incidents, adhering strictly to sub-15 minute SLA commitments.',
      'Develop Ansible and Python self-healing runbooks to automatically remediate recurring system alarms and service degradation.',
      'Conduct thorough Blameless Root Cause Analyses (RCA) and partner with engineering teams to permanently resolve failure vectors.'
    ],
    requirements: [
      '4+ years in SRE, Cloud Operations, or Tier-2/3 Network Operations Center (NOC) environments.',
      'Strong Linux system administration skills, kernel tuning, and troubleshooting proficiency.',
      'Experience managing monitoring tools (Prometheus, Grafana, ELK/OpenSearch, Datadog).',
      'Proficiency in scripting (Python, Bash, PowerShell) and configuration management (Ansible).'
    ],
    preferred: [
      'ITIL Foundation / Practitioner v4 Certification.',
      'Hands-on experience with multi-region database replication (PostgreSQL, Oracle RAC, MySQL).',
      'Familiarity with Wazuh, Splunk, or SIEM security incident response.'
    ],
    techStack: ['Linux', 'Prometheus', 'Grafana', 'Datadog', 'Ansible', 'Python', 'PostgreSQL', 'PagerDuty']
  }
];
