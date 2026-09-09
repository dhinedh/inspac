import { 
  Cloud, 
  ShieldCheck, 
  BarChart3, 
  Code2, 
  Layers, 
  GitPullRequest, 
  CheckCircle2, 
  Database,
  GraduationCap,
  Award,
  BookOpen,
  Clock,
  Users,
  Check,
  Zap
} from 'lucide-react';

export const trainingCoursesDetailed = [
  {
    id: 'tr-cloud-devsecops',
    title: 'Enterprise Multi-Cloud Engineering & DevSecOps Masterclass',
    category: 'Cloud & Infrastructure',
    practiceRef: 'cloud-devsecops',
    duration: '6 Weeks (48 Hours Hands-On)',
    format: 'Live Virtual Labs / On-Site Executive Cohort',
    level: 'Cloud Engineers, DevOps Leads & Solutions Architects',
    certificationTarget: 'AWS Solutions Architect Pro / CKA / HashiCorp Terraform Associate',
    summary: 'Master enterprise multi-cloud architecture (AWS, Azure, GCP), automated Terraform Infrastructure as Code, Kubernetes production clusters, and automated zero-trust DevSecOps CI/CD pipelines.',
    stats: { completion: '98%', handsOnRatio: '70% Labs' },
    modules: [
      {
        title: 'Module 1: Multi-Cloud Landing Zones & Zero-Trust IAM',
        desc: 'Architecting multi-account AWS Organizations, transit gateways, VPC peering, and Azure Enterprise Landing Zones with automated SAML/OIDC federated identity.'
      },
      {
        title: 'Module 2: Kubernetes Container Orchestration at Scale',
        desc: 'Production EKS/GKE cluster topology, Helm packaging, ingress controllers, Istio service mesh, pod security standards, and high-availability autoscaling.'
      },
      {
        title: 'Module 3: Terraform Enterprise IaC & GitOps Automation',
        desc: 'Modular Terraform codebases, state locking, policy-as-code with Open Policy Agent (OPA), and automated GitOps deployments with ArgoCD.'
      },
      {
        title: 'Module 4: DevSecOps Shift-Left & Cloud FinOps Governance',
        desc: 'Automating SAST/DAST container scans in GitLab/GitHub CI, Secrets management with Vault, Datadog observability, and AWS Cost Explorer FinOps optimization.'
      }
    ],
    tools: ['AWS', 'Kubernetes', 'Terraform', 'ArgoCD', 'Docker', 'Vault', 'Datadog', 'GitLab CI'],
    capstone: 'Deploy a multi-tier, auto-scaling microservices mesh across dual cloud regions with automated failover and zero-trust mTLS.'
  },
  {
    id: 'tr-data-ai',
    title: 'Modern AI Lakehouse, Data Engineering & RAG Systems',
    category: 'Data & AI',
    practiceRef: 'ai-data-lakehouse',
    duration: '5 Weeks (40 Hours Hands-On)',
    format: 'Live Virtual Labs / Corporate Cohort',
    level: 'Data Engineers, BI Analysts & Machine Learning Practitioners',
    certificationTarget: 'Snowflake SnowPro Advanced / Databricks Certified Data Engineer',
    summary: 'Build modern medallion data lakehouses (Snowflake, Databricks, BigQuery), real-time streaming ETL with dbt and Apache Spark, and deploy production Generative AI / RAG knowledge agents.',
    stats: { completion: '96%', handsOnRatio: '65% Labs' },
    modules: [
      {
        title: 'Module 1: Medallion Architecture & Modern Lakehouse Design',
        desc: 'Ingestion, curation, and aggregation patterns across Bronze, Silver, and Gold tiers in Snowflake and Databricks Delta Lake with ACID guarantees.'
      },
      {
        title: 'Module 2: High-Performance ETL/ELT with dbt & Apache Spark',
        desc: 'Writing production dbt data models, automated testing assertions, incremental loads, PySpark distributed transformations, and Airflow orchestration.'
      },
      {
        title: 'Module 3: Generative AI, Enterprise RAG & Vector Databases',
        desc: 'Building enterprise Retrieval-Augmented Generation (RAG) pipelines, embedding generation, vector indexing with pgvector/Pinecone, and LLM prompt engineering.'
      },
      {
        title: 'Module 4: Data Governance, Lineage & Executive BI Dashboards',
        desc: 'Data cataloging, column-level masking, automated schema validation, and architecting interactive executive scorecards in Power BI and Apache Superset.'
      }
    ],
    tools: ['Snowflake', 'Databricks', 'dbt', 'Apache Spark', 'Python', 'Airflow', 'pgvector', 'LangChain'],
    capstone: 'Build a production-ready real-time lakehouse pipeline that ingests live transaction streams and feeds an enterprise RAG query agent.'
  },
  {
    id: 'tr-pci-dss',
    title: 'PCI-DSS v4.0 Implementation & QSA Audit Readiness Accelerator',
    category: 'Cybersecurity & GRC',
    practiceRef: 'cybersecurity-grc',
    duration: '3 Weeks (24 Hours Intensive)',
    format: 'Executive Masterclass / Compliance Sprint',
    level: 'CISO, IT Auditors, Security Directors & Infrastructure Leads',
    certificationTarget: 'PCI-DSS Internal Security Assessor (ISA) / CISA / CRISC',
    summary: 'Comprehensive executive roadmap for achieving PCI-DSS 4.0 Attestation of Compliance (AOC), cardholder data environment (CDE) scoping reduction, network segmentation, and QSA audit evidence mastery.',
    stats: { completion: '100%', handsOnRatio: '60% Case Audits' },
    modules: [
      {
        title: 'Module 1: PCI-DSS 4.0 Transition Roadmap & 64 New Requirements',
        desc: 'Deep dive into the customized implementation approach, automated monitoring rules, and the 2025/2026 mandatory technical milestones.'
      },
      {
        title: 'Module 2: CDE Scope Reduction, Tokenization & Segmentation',
        desc: 'Techniques to shrink the cardholder data environment footprint using third-party tokenization vaults, air-gapped VLANs, and firewall rules.'
      },
      {
        title: 'Module 3: Cryptography, Key Management & Zero-Trust Controls',
        desc: 'AES-256 cipher suites, TLS 1.3 enforcement, HSM key rotation protocols, multi-factor authentication (MFA) requirements, and audit logging.'
      },
      {
        title: 'Module 4: Mock QSA Audit Defense & Evidence Repository Building',
        desc: 'Preparing immutable audit artifact workpapers, conducting mock QSA interviews, handling compensatory controls, and achieving clean AOC sign-off.'
      }
    ],
    tools: ['PCI-DSS 4.0', 'ISO 27001', 'NIST CSF', 'Wazuh', 'Tenable', 'Splunk', 'Wireshark', 'Vault'],
    capstone: 'Conduct an end-to-end simulated QSA gap assessment for a high-volume payment processor and produce a formal Board Risk Remediation Blueprint.'
  },
  {
    id: 'tr-digital-engineering',
    title: 'Full-Stack Digital Engineering & Microservices Architecture',
    category: 'Digital Engineering',
    practiceRef: 'digital-engineering',
    duration: '6 Weeks (48 Hours Hands-On)',
    format: 'Live Virtual Labs / Cohort Sprints',
    level: 'Senior Software Engineers & Technical Leads',
    certificationTarget: 'AWS Certified Developer / OpenJS Node.js Application Developer',
    summary: 'Deconstruct brittle monoliths into resilient, high-speed distributed microservices. Master Next.js 15, React 19, TypeScript, Go backend services, Apollo GraphQL federation, and Kafka event streaming.',
    stats: { completion: '97%', handsOnRatio: '75% Labs' },
    modules: [
      {
        title: 'Module 1: Monolith Decoupling & Domain-Driven Design (DDD)',
        desc: 'Identifying bounded contexts, implementing strangler-fig migration patterns, and establishing independent database per service patterns.'
      },
      {
        title: 'Module 2: Ultra-Fast Frontends with Next.js 15 & Design Systems',
        desc: 'Server-Side Rendering (SSR), React Server Components (RSC), WCAG 2.1 AA accessibility, Tailwind design tokens, and Core Web Vitals optimization.'
      },
      {
        title: 'Module 3: High-Throughput APIs & Apollo GraphQL Federation',
        desc: 'Unified schema stitching, rate limiting, mutual TLS authentication, and sub-second GraphQL gateway orchestration across distributed backends.'
      },
      {
        title: 'Module 4: Event-Driven Distributed Streaming with Apache Kafka',
        desc: 'Publish-subscribe messaging topologies, schema registry governance, dead-letter queue triage, and implementing idempotent consumer patterns.'
      }
    ],
    tools: ['Next.js 15', 'React 19', 'TypeScript', 'Go / Golang', 'Apache Kafka', 'GraphQL', 'Docker', 'Redis'],
    capstone: 'Decompose a legacy retail monolith into containerized Next.js and Go microservices communicating via an asynchronous Kafka event bus.'
  },
  {
    id: 'tr-enterprise-erp',
    title: 'SAP S/4HANA & Enterprise ERP Digital Core Transformation',
    category: 'ERP & Platforms',
    practiceRef: 'enterprise-erp',
    duration: '5 Weeks (40 Hours Intensive)',
    format: 'Executive Cohort / Corporate Bootcamp',
    level: 'ERP Project Managers, SAP Functional Leads & Enterprise Architects',
    certificationTarget: 'SAP Certified Solution Architect - SAP S/4HANA',
    summary: 'Architect and execute end-to-end enterprise ERP modernizations. Master clean-core architecture, SAP S/4HANA migration pathways, SAP BTP integrations, and cross-module financial and supply chain workflows.',
    stats: { completion: '95%', handsOnRatio: '60% Case Studies' },
    modules: [
      {
        title: 'Module 1: S/4HANA Migration Pathways & Greenfield vs Brownfield',
        desc: 'Evaluating system conversion vs selective data transition, business process re-engineering, and calculating TCO return on investment.'
      },
      {
        title: 'Module 2: Clean Core Principles & SAP BTP Extension Architecture',
        desc: 'Decoupling custom ABAP extensions into side-by-side cloud services using SAP Business Technology Platform and RESTful ABAP (RAP).'
      },
      {
        title: 'Module 3: Cross-Module Workflow Integration & Event-Driven Sync',
        desc: 'Connecting SAP FI/CO, SD, and MM with Salesforce CRM, Coupa procurement, and global payment gateways using SAP Integration Suite.'
      },
      {
        title: 'Module 4: Phased Cutover Strategy, Testing & Hypercare SRE',
        desc: 'Blackout window rehearsals, automated regression suites with Tricentis Tosca, hypercare triage war rooms, and business continuity preservation.'
      }
    ],
    tools: ['SAP S/4HANA', 'SAP BTP', 'ABAP Cloud', 'SAP Integration Suite', 'Fiori', 'Oracle Cloud ERP', 'REST APIs'],
    capstone: 'Develop an executive SAP S/4HANA cutover and clean-core migration blueprint for a multi-entity manufacturing conglomerate.'
  },
  {
    id: 'tr-rpa-automation',
    title: 'Intelligent Process Automation & Cognitive RPA Masterclass',
    category: 'Process & Automation',
    practiceRef: 'process-automation',
    duration: '4 Weeks (32 Hours Hands-On)',
    format: 'Hands-on Lab Bootcamp / Corporate Cohort',
    level: 'RPA Developers, Operations Leads & Automation Analysts',
    certificationTarget: 'UiPath Certified Advanced RPA Developer (UiARD)',
    summary: 'Design and deploy unattended software robots, intelligent document processing (IDP) with cognitive OCR, and automated exception handlers using UiPath REFramework and Power Automate.',
    stats: { completion: '99%', handsOnRatio: '75% Labs' },
    modules: [
      {
        title: 'Module 1: Process Discovery & Solution Design Documentation',
        desc: 'Business process mapping, calculating automation feasibility, identifying bottlenecks, and authoring rigorous Process Design Documents (PDD).'
      },
      {
        title: 'Module 2: Robust Bot Engineering with UiPath REFramework',
        desc: 'Building state-machine unattended bots, transaction queue management, retry mechanisms, and credential vault integration with Orchestrator.'
      },
      {
        title: 'Module 3: Intelligent Document Processing & Cognitive Machine Learning',
        desc: 'Extracting structured data from unstructured invoices, tax filings, and contracts using AI Center, OCR engines, and validation stations.'
      },
      {
        title: 'Module 4: Enterprise Orchestrator Clustering & Bot Governance',
        desc: 'High-availability robot clustering, continuous integration with UiPath CLI, trigger scheduling, and automated error alerting.'
      }
    ],
    tools: ['UiPath Studio', 'REFramework', 'UiPath Orchestrator', 'Power Automate', 'Python', 'OCR / IDP', 'REST APIs'],
    capstone: 'Build an end-to-end unattended bot that extracts PDF invoices, validates them against ERP databases, and flags discrepancies for human-in-the-loop review.'
  },
  {
    id: 'tr-quality-engineering',
    title: 'Enterprise Quality Engineering, Playwright & Chaos Resilience',
    category: 'Quality Engineering',
    practiceRef: 'quality-engineering',
    duration: '4 Weeks (32 Hours Hands-On)',
    format: 'Live Virtual Labs / Developer Cohorts',
    level: 'QA Engineers, Automation Architects & SDETs',
    certificationTarget: 'ISTQB Advanced Technical Test Analyst / Playwright Certified',
    summary: 'Transform manual QA into continuous automated quality pipelines. Master modern TypeScript end-to-end testing with Playwright, high-scale load testing with k6, and proactive chaos engineering.',
    stats: { completion: '98%', handsOnRatio: '80% Labs' },
    modules: [
      {
        title: 'Module 1: Modern Web Automation with TypeScript & Playwright',
        desc: 'Page Object Model (POM), cross-browser headless execution, parallel test workers, visual regression testing, and network mocking.'
      },
      {
        title: 'Module 2: High-Concurrency Load & Stress Testing with k6',
        desc: 'Simulating 50,000+ virtual users, script modularity, threshold assertions, bottleneck isolation, and continuous performance regression gates.'
      },
      {
        title: 'Module 3: Chaos Engineering & System Resilience Testing',
        desc: 'Injecting simulated latency, pod terminations, and network partition faults using Chaos Toolkit and Chaos Mesh to validate zero-downtime SLA recovery.'
      },
      {
        title: 'Module 4: CI/CD Quality Gates & Executive Test Reporting',
        desc: 'Automating test runs in GitHub Actions and GitLab CI, Allure reporting dashboards, and enforcing zero-defect deployment quality gates.'
      }
    ],
    tools: ['Playwright', 'TypeScript', 'k6', 'Docker', 'Chaos Toolkit', 'Allure Reports', 'GitHub Actions', 'OWASP ZAP'],
    capstone: 'Construct a complete automated CI/CD quality gate that executes 500+ Playwright E2E tests, followed by a k6 load test and automated chaos validation.'
  },
  {
    id: 'tr-managed-sre',
    title: 'Site Reliability Engineering, NOC/SOC & High Availability Operations',
    category: 'Managed Infrastructure',
    practiceRef: 'managed-services',
    duration: '4 Weeks (32 Hours Hands-On)',
    format: 'Live Virtual Labs / SRE Cohorts',
    level: 'SREs, System Administrators, DevOps & NOC Engineers',
    certificationTarget: 'Linux Foundation SRE Practitioner / ITIL v4 / AWS SysOps',
    summary: 'Master the disciplines of 99.999% availability. Implement Prometheus/Grafana monitoring, sub-15 minute P1 incident triage, Ansible self-healing runbooks, and Blameless Post-Mortem governance.',
    stats: { completion: '96%', handsOnRatio: '70% Labs' },
    modules: [
      {
        title: 'Module 1: Observability Foundations with Prometheus & Grafana',
        desc: 'Setting up multi-cluster metrics scraping, PromQL alert rules, distributed tracing with OpenTelemetry, and executive SLA/SLO dashboards.'
      },
      {
        title: 'Module 2: Mission-Critical Incident Response & War Room Command',
        desc: 'P1 incident triage protocols, automated PagerDuty routing, stakeholder status communication, and sub-15 minute MTTD/MTTR benchmarks.'
      },
      {
        title: 'Module 3: Ansible Automated Remediation & Runbook Automation',
        desc: 'Writing self-healing automation scripts that detect memory leaks, restart failed microservices, and auto-scale database read replicas without human intervention.'
      },
      {
        title: 'Module 4: Blameless Post-Mortems & High-Availability Disaster Recovery',
        desc: 'Conducting structured Root Cause Analysis (RCA), implementing corrective action items, and orchestrating multi-region cross-cloud database failovers.'
      }
    ],
    tools: ['Prometheus', 'Grafana', 'Ansible', 'Linux', 'OpenTelemetry', 'PagerDuty', 'PostgreSQL HA', 'Datadog'],
    capstone: 'Build a production monitoring and automated self-healing platform that detects multi-tier application degradation and restores normal SLA health.'
  }
];

export const trainingPillars = [
  {
    icon: '⚡',
    title: '100% Ephemeral Cloud Lab Pods',
    tag: 'Live Sandboxes',
    desc: 'Every participant receives dedicated, pre-configured AWS/GCP/Azure sandbox environments with zero setup friction and full root privileges.'
  },
  {
    icon: '👨‍🏫',
    title: 'Active Principal Consultants as Mentors',
    tag: 'Practitioner Led',
    desc: 'Courses are delivered exclusively by active Principal Architects who deliver tier-1 client engagements across Singapore, India, and Australia.'
  },
  {
    icon: '🎯',
    title: 'Custom Corporate Curriculum Mapping',
    tag: 'Enterprise Tailored',
    desc: 'We tailor modules, coding standards, and compliance sandboxes to mirror your organization’s exact tech stack, tooling, and regulatory environment.'
  },
  {
    icon: '📜',
    title: 'Global Certification & Badging Support',
    tag: 'Verified Credentials',
    desc: 'Targeted preparation for global industry certifications with practice exams, mock audit simulations, and verifiable digital badges.'
  },
  {
    icon: '🤝',
    title: '90-Day Post-Training Mentorship',
    tag: 'Long-Term Impact',
    desc: 'Direct Slack/Teams channel access to our practice leads for 90 days following course completion to guide real-world project adoption.'
  },
  {
    icon: '🏢',
    title: 'Flexible Delivery Formats',
    tag: 'Global Delivery',
    desc: 'Available as live interactive virtual masterclasses, private on-premise executive bootcamps, or hybrid cohort-based training.'
  }
];

export const trainingFaqs = [
  {
    q: 'Can courses be customized to our internal architecture and proprietary tools?',
    a: 'Yes. For corporate cohorts of 5 or more engineers, we conduct an architectural discovery call to tailor the syllabus, lab exercises, and data models to reflect your organization’s internal tech stack, security policies, and CI/CD pipelines.'
  },
  {
    q: 'What cloud access or lab credentials do participants need to provide?',
    a: 'None. Inspac Solutions provides all attendees with dedicated, ephemeral cloud accounts (AWS, Azure, GCP, Snowflake, Databricks) pre-loaded with necessary datasets, infrastructure scripts, and licenses. There is zero overhead on your internal IT infrastructure.'
  },
  {
    q: 'Are the courses eligible for corporate training subsidies or skills grants?',
    a: 'Yes. Depending on your jurisdiction (such as Singapore IBF / SkillsFuture framework or Australian corporate R&D tax incentives), our programs and certification training materials are structured to support corporate grant eligibility and CPD credits.'
  },
  {
    q: 'What is the recommended cohort size for enterprise corporate workshops?',
    a: 'We typically cap cohorts at 15 to 20 participants per instructor to ensure intensive hands-on code reviews, direct 1-on-1 troubleshooting during lab sessions, and deep architectural discussion.'
  }
];
