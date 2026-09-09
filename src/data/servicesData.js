import { 
  Code2, 
  Cloud, 
  BarChart3, 
  ShieldCheck, 
  Layers, 
  GitPullRequest, 
  CheckCircle2, 
  Database,
  Cpu,
  Globe,
  Lock,
  Workflow,
  Zap,
  Server,
  Activity,
  Award,
  BookOpen,
  Compass,
  FileCheck,
  Terminal,
  Clock,
  Sparkles
} from 'lucide-react';

export const servicesData = {
  'digital-engineering': {
    id: 'digital-engineering',
    slug: 'digital-engineering',
    title: 'Digital Engineering & App Modernization',
    tagline: 'High-Velocity Cloud-Native Platforms & Microservices',
    category: 'Digital Engineering',
    benchmarkRef: 'Modeled after HCLTech Digital Engineering & Cognizant Digital Experience',
    heroBgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80',
    accentColor: '#2563eb',
    badgeColor: 'bg-blue-600 text-white shadow-blue-500/25',
    heroSummary: 'Transform legacy core systems into resilient, high-speed distributed digital platforms. From microservices decomposition and API gateways to React/Next.js frontend design systems, we engineer software that scales flawlessly to millions of concurrent enterprise users.',
    stats: [
      { label: 'Faster Time-to-Market', value: '70%' },
      { label: 'Sub-Second API Latency', value: '< 150ms' },
      { label: 'Legacy Code Decoupling', value: '100%' },
      { label: 'Developer Velocity Boost', value: '3.5x' }
    ],
    overview: 'Modern enterprises cannot compete on monolithic architectures with quarterly release cycles. Our Digital Engineering practice combines domain-driven design (DDD), modern frontend design systems, event-driven streaming, and containerized microservices to replace brittle systems with modular, fault-tolerant digital engines.',
    pillars: [
      {
        tag: 'Architecture',
        title: 'Monolith Decoupling & Microservices Migration',
        desc: 'Strangler-fig migration patterns to incrementally isolate legacy databases and business logic into independent, containerized microservices with zero downtime.',
        deliverables: ['Domain-Driven Design (DDD) Boundaries', 'Database Decomposition Blueprint', 'Containerized Docker/OCI Packaging', 'Zero-Downtime Cutover Strategy']
      },
      {
        tag: 'Frontend & Mobile',
        title: 'Modern Frontend Platforms & Design Systems',
        desc: 'Ultra-fast web and mobile user experiences built with Next.js, React Native, Tailwind CSS, and accessibility-first WCAG 2.1 AA compliant UI component libraries.',
        deliverables: ['Production Design System Tokens', 'Server-Side Rendered (SSR) Portals', 'Cross-Platform iOS & Android Apps', 'Core Web Vitals Performance Tuning']
      },
      {
        tag: 'APIs & Middleware',
        title: 'High-Throughput GraphQL & REST API Gateways',
        desc: 'Enterprise API management and federation layers with automated rate limiting, mutual TLS authentication, schema validation, and OpenAPI documentation.',
        deliverables: ['Unified Apollo/GraphQL Federation', 'API Gateway (Kong/Apigee) Configuration', 'mTLS & OAuth 2.0 Token Exchange', 'Interactive Developer Portal & SDKs']
      },
      {
        tag: 'Streaming & Events',
        title: 'Event-Driven Distributed Messaging Brokers',
        desc: 'Asynchronous event streaming fabrics using Apache Kafka and RabbitMQ for distributed event sourcing, high-volume telemetry, and reliable message delivery.',
        deliverables: ['Multi-Cluster Kafka Topic Topology', 'Schema Registry & Avro Governance', 'Dead-Letter Queue (DLQ) Triage', 'End-to-End Idempotency Handlers']
      },
      {
        tag: 'Cloud Integration',
        title: 'Serverless Functions & Edge Compute',
        desc: 'Cost-optimized serverless micro-backends running on AWS Lambda, Cloudflare Workers, and Azure Functions for ultra-low latency compute at the edge.',
        deliverables: ['Edge CDN Cache Orchestration', 'Cold-Start Optimized Runtimes', 'Distributed Tracing (OpenTelemetry)', 'EventBridge & SQS Trigger Fabrics']
      },
      {
        tag: 'Observability',
        title: 'Full-Stack Telemetry & Distributed Tracing',
        desc: 'Real-time application performance monitoring (APM) with Datadog, Dynatrace, and Prometheus to identify latency spikes and isolate code errors before users notice.',
        deliverables: ['OpenTelemetry Instrumentation', 'Custom Synthetic Monitoring Probes', 'Automated PagerDuty Incident Routing', 'Executive SLO / SLA Dashboards']
      }
    ],
    techStack: [
      { name: 'React / Next.js', category: 'Frontend' },
      { name: 'Node.js / TypeScript', category: 'Backend' },
      { name: 'Go / Golang', category: 'Services' },
      { name: 'Apache Kafka', category: 'Streaming' },
      { name: 'GraphQL / Apollo', category: 'API' },
      { name: 'Docker / OCI', category: 'Containers' },
      { name: 'Redis Enterprise', category: 'Caching' },
      { name: 'Datadog / APM', category: 'Observability' }
    ],
    methodology: [
      {
        step: '01',
        title: 'Discovery & Architecture Blueprint',
        desc: 'Assess existing monolith codebase, map event domains, establish Target Architecture Blueprint, and create the phased migration roadmap.'
      },
      {
        step: '02',
        title: 'Platform Foundation & POC Sprint',
        desc: 'Stand up the core API gateway, design system foundations, CI/CD telemetry pipelines, and validate performance with a high-impact pilot.'
      },
      {
        step: '03',
        title: 'Incremental Service Extraction',
        desc: 'Execute strangler-pattern decoupling of bounded contexts with automated regression testing, contract verification, and shadow traffic validation.'
      },
      {
        step: '04',
        title: 'Production Hardening & Knowledge Handover',
        desc: 'Final cutover, chaos engineering resilience tests, load stress benchmarks, developer training, and 24/7 hypercare support.'
      }
    ],
    caseStudies: [
      {
        industry: 'Banking & Financial Services',
        title: 'Core Retail Banking Portal Monolith Modernization',
        outcome: 'Migrated 4.2M daily active users from an 11-year-old Java EE monolith to Next.js microservices, achieving 62% faster page loads and 99.995% uptime.'
      },
      {
        industry: 'Retail & E-Commerce',
        title: 'High-Concurrency Flash-Sale Checkout Engine',
        outcome: 'Engineered an event-driven inventory and checkout microservice processing 35,000 orders/min during Black Friday with sub-100ms response times.'
      },
      {
        industry: 'Healthcare Tech',
        title: 'HIPAA-Compliant Real-Time Clinical Patient Portal',
        outcome: 'Built a multi-platform mobile application and FHIR-compliant API middleware securely synchronizing medical diagnostics across 18 regional hospital networks.'
      }
    ],
    faqs: [
      {
        q: 'How do you ensure zero downtime when decoupling legacy monoliths?',
        a: 'We leverage the Strangler Fig migration pattern combined with API gateway routing and dark traffic shadowing. New microservices run in parallel with the monolith, receiving duplicate live traffic to verify output parity before user traffic is seamlessly transitioned.'
      },
      {
        q: 'What frontend frameworks and standards do you support?',
        a: 'Our core practice standardizes on React, Next.js, and TypeScript, backed by modular Tailwind CSS design systems and WCAG 2.1 AA accessibility standards. We also build native cross-platform applications using React Native and Flutter.'
      },
      {
        q: 'Do our internal engineers gain full code ownership and training?',
        a: 'Yes. All digital engineering projects include pair programming sprints, comprehensive architectural decision records (ADRs), complete CI/CD documentation, and tailored handover workshops to ensure your in-house teams maintain full ownership.'
      },
      {
        q: 'How do you handle API security and compliance?',
        a: 'All APIs are built with zero-trust principles: mutual TLS (mTLS), OAuth 2.0 with JWT token claims, automated OpenAPI contract testing, OWASP Top 10 security gating in CI/CD, and real-time rate limiting against DDoS.'
      }
    ]
  },

  'cloud-devsecops': {
    id: 'cloud-devsecops',
    slug: 'cloud-devsecops',
    title: 'Cloud Transformation & DevSecOps',
    tagline: 'Enterprise Multi-Cloud Landing Zones & Automated Kubernetes',
    category: 'Cloud & Infrastructure',
    benchmarkRef: 'Modeled after HCL CloudSMART & Cognizant Cloud 360',
    heroBgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80',
    accentColor: '#4f46e5',
    badgeColor: 'bg-indigo-600 text-white shadow-indigo-500/25',
    heroSummary: 'Accelerate cloud adoption with secure multi-cloud landing zones, automated Terraform Infrastructure as Code (IaC), zero-trust DevSecOps pipelines, and Kubernetes orchestration across AWS, Azure, and Google Cloud with strict FinOps governance.',
    stats: [
      { label: 'Deployment Frequency', value: '10x Faster' },
      { label: 'Infrastructure Uptime SLA', value: '99.99%' },
      { label: 'FinOps Cloud Cost Savings', value: '35%' },
      { label: 'Security Vulnerability Gate', value: '100%' }
    ],
    overview: 'Cloud migrations that merely "lift-and-shift" result in ballooning cloud costs and security vulnerabilities. Our Cloud & DevSecOps practice builds enterprise-grade Landing Zones, automated Terraform repositories, and containerized Kubernetes clusters with automated vulnerability gates and continuous FinOps cost governance.',
    pillars: [
      {
        tag: 'Landing Zones',
        title: 'Multi-Cloud Enterprise Landing Zones',
        desc: 'Automated account structures, transit gateway networks, and IAM role federation across AWS Organizations, Azure Management Groups, and GCP Folders.',
        deliverables: ['AWS Control Tower / Azure Blueprint', 'Hub-and-Spoke Transit Networking', 'SAML SSO Identity Federation', 'Automated SCP & Guardrail Policies']
      },
      {
        tag: 'IaC & Automation',
        title: 'Terraform & OpenTofu Infrastructure as Code',
        desc: 'Modular, version-controlled IaC templates with automated policy-as-code linting (OPA/Checkov), drift detection, and automated deployment pipelines.',
        deliverables: ['Reusable Verified Terraform Modules', 'Open Policy Agent (OPA) Guardrails', 'Automated Drift Detection Cron Jobs', 'Multi-Environment Pipeline Orchestration']
      },
      {
        tag: 'Containers & K8s',
        title: 'Enterprise Kubernetes & Service Mesh (EKS/GKE)',
        desc: 'Production-grade Kubernetes clusters with Istio service mesh, automated pod auto-scaling (Karpenter/KEDA), and GitOps deployment with ArgoCD.',
        deliverables: ['Hardened EKS/GKE/AKS Clusters', 'GitOps ArgoCD Declarative Delivery', 'Istio mTLS Service Mesh Fabrics', 'Horizontal & Event-Driven Auto-Scalers']
      },
      {
        tag: 'DevSecOps & CI/CD',
        title: 'Shift-Left Zero-Trust DevSecOps Pipelines',
        desc: 'Automated CI/CD security gating incorporating SAST, DAST, container image signing (Cosign), software bill of materials (SBOM), and secrets scanning.',
        deliverables: ['GitHub Actions / GitLab CI Pipelines', 'Automated SAST & Container Scanning', 'Trivy / Snyk Vulnerability Gates', 'Secretless HashiCorp Vault Injection']
      },
      {
        tag: 'FinOps',
        title: 'Continuous FinOps & Cloud Cost Optimization',
        desc: 'Cloud financial governance establishing unit economics, spot/savings plan automation, right-sizing recommendations, and anomaly detection.',
        deliverables: ['FinOps Allocation & Showback Reports', 'Automated Spot Instance Fleets', 'Unused Resource Auto-Pruning', 'Executive Cloud Spend Forecasts']
      },
      {
        tag: 'SRE & DR',
        title: 'Disaster Recovery & Multi-Region Resilience',
        desc: 'Cross-region automated failover topologies with RPO < 5 mins and RTO < 15 mins, backup immutability, and chaos engineering resilience tests.',
        deliverables: ['Active-Active Multi-Region Mesh', 'Immutable Ransomware-Proof Backups', 'Automated DNS Route53 Failover', 'Chaos Mesh Resilience Validation']
      }
    ],
    techStack: [
      { name: 'Amazon Web Services (AWS)', category: 'Cloud' },
      { name: 'Microsoft Azure', category: 'Cloud' },
      { name: 'Google Cloud Platform (GCP)', category: 'Cloud' },
      { name: 'Terraform / OpenTofu', category: 'IaC' },
      { name: 'Kubernetes / EKS / GKE', category: 'Containers' },
      { name: 'ArgoCD / GitOps', category: 'CI/CD' },
      { name: 'HashiCorp Vault', category: 'Secrets' },
      { name: 'Prometheus / Grafana', category: 'Monitoring' }
    ],
    methodology: [
      {
        step: '01',
        title: 'Cloud Readiness & Security Baseline',
        desc: 'Audit current cloud estate, evaluate security postures against CIS benchmarks, and architect the target Landing Zone topology.'
      },
      {
        step: '02',
        title: 'Landing Zone & IaC Scaffold',
        desc: 'Deploy automated multi-account landing zones, establish private transit networking, and scaffold verified Terraform module registries.'
      },
      {
        step: '03',
        title: 'Application Migration & DevSecOps Gating',
        desc: 'Containerize workloads, implement shift-left vulnerability pipelines with ArgoCD, and migrate services with automated verification.'
      },
      {
        step: '04',
        title: 'FinOps Governance & Operational SRE',
        desc: 'Activate continuous cloud cost optimization, establish SLO/SLA dashboards, execute disaster recovery drills, and transition to SRE runbooks.'
      }
    ],
    caseStudies: [
      {
        industry: 'FinTech & Payments',
        title: 'Multi-Cloud AWS & Azure High-Availability Setup',
        outcome: 'Architected automated Terraform landing zones with cross-cloud failover, passing strict financial audit compliance while reducing cloud run rates by 38%.'
      },
      {
        industry: 'SaaS Enterprise',
        title: 'GitOps Kubernetes Migration with ArgoCD',
        outcome: 'Migrated 140 microservices from legacy EC2 instances to AWS EKS with ArgoCD, reducing release cycle time from 2 weeks to 15 minutes.'
      },
      {
        industry: 'Public Sector Logistics',
        title: 'Zero-Trust DevSecOps Pipeline Implementation',
        outcome: 'Automated CI/CD security scanning across 45 repositories, eliminating 100% of critical CVE container vulnerabilities before production deployments.'
      }
    ],
    faqs: [
      {
        q: 'Which cloud hyperscalers do your engineers specialize in?',
        a: 'Our certified solutions architects have premier delivery credentials across Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP), with proven expertise in sovereign multi-cloud deployments.'
      },
      {
        q: 'How does your FinOps practice achieve up to 35% cost reduction?',
        a: 'We combine automated right-sizing of compute instances, savings plan/reserve commitment optimization, intelligent spot instance routing for stateless workloads, automated pruning of unattached volumes, and storage lifecycle tiering.'
      },
      {
        q: 'What is your approach to infrastructure security and secrets management?',
        a: 'We enforce zero-trust: no hardcoded secrets anywhere. All credentials and certificates are dynamically injected at runtime via HashiCorp Vault or AWS Secrets Manager with automated key rotation and strictly scoped IAM roles.'
      },
      {
        q: 'Can you help us migrate to Kubernetes without business disruption?',
        a: 'Yes. We build the target Kubernetes cluster with automated ingress routing, validate workloads through canary testing and shadow traffic, and switch DNS records incrementally to ensure zero downtime.'
      }
    ]
  },

  'ai-data-lakehouse': {
    id: 'ai-data-lakehouse',
    slug: 'ai-data-lakehouse',
    title: 'Enterprise AI & Data Lakehouse',
    tagline: 'Modern Unified Data Platforms, Real-Time ETL & Enterprise Generative AI',
    category: 'AI & Data Science',
    benchmarkRef: 'Modeled after HCLTech Analytics & Cognizant Artificial Intelligence',
    heroBgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80',
    accentColor: '#9333ea',
    badgeColor: 'bg-purple-600 text-white shadow-purple-500/25',
    heroSummary: 'Break down data silos and power your enterprise with modern cloud lakehouses (Snowflake, Databricks, BigQuery), real-time streaming data pipelines (dbt, Apache Spark), and private Generative AI agents equipped with Enterprise RAG.',
    stats: [
      { label: 'Single Source of Truth', value: '100%' },
      { label: 'Data Pipeline Freshness', value: '< 60s' },
      { label: 'Query Performance Boost', value: '8x Faster' },
      { label: 'Connected Data Sources', value: '500+' }
    ],
    overview: 'Enterprises struggle with fragmented databases, slow batch pipelines, and unverified AI experiments. Our AI & Data Lakehouse practice builds governed, high-throughput cloud lakehouses using Snowflake, Databricks, and dbt, coupled with secure, private Generative AI and Retrieval-Augmented Generation (RAG) models that operate on your proprietary enterprise data.',
    pillars: [
      {
        tag: 'Lakehouse Engine',
        title: 'Modern Cloud Data Lakehouse Architecture',
        desc: 'Unified analytical storage combining the governance of data warehouses with the elasticity of object stores on Snowflake, Databricks, and Google BigQuery.',
        deliverables: ['Medallion Architecture (Bronze/Silver/Gold)', 'Delta Lake / Iceberg Open Table Formats', 'Multi-Cluster Virtual Warehouse Sizing', 'Row & Column-Level Security Governance']
      },
      {
        tag: 'Data Engineering',
        title: 'Real-Time Streaming ETL & dbt Transformations',
        desc: 'Continuous data pipelines using dbt Core, Apache Spark, and Apache Kafka for sub-minute data freshness from ERP, CRM, and transactional systems.',
        deliverables: ['Modular dbt Transformation Models', 'Automated Data Quality Assertions', 'Change Data Capture (CDC) Connectors', 'DAG Pipeline Scheduling with Airflow']
      },
      {
        tag: 'Generative AI & RAG',
        title: 'Enterprise Generative AI & Retrieval-Augmented Generation',
        desc: 'Private LLM deployments and semantic vector search engines (Pinecone, pgvector) enabling conversational querying of internal documents and ERP records.',
        deliverables: ['Enterprise Vector Search Indexing', 'Context-Aware RAG Retrieval Pipelines', 'Hallucination Mitigation Guardrails', 'Self-Hosted & Private Cloud LLMs']
      },
      {
        tag: 'BI & Visualization',
        title: 'Executive KPI Scorecards & BI Semantic Layers',
        desc: 'Interactive enterprise executive dashboards with Power BI, Tableau, and Superset powered by a unified semantic metric layer.',
        deliverables: ['Standardized Semantic Metric Store', 'Executive CXO Mobile Dashboards', 'Automated Anomaly Alert Triggers', 'White-Label Customer Reporting Portals']
      },
      {
        tag: 'Data Governance',
        title: 'Data Governance, Lineage & Cataloging',
        desc: 'Enterprise data catalogs with automated data lineage, PII masking, schema change alerts, and compliance auditing with Monte Carlo and Collibra.',
        deliverables: ['Automated End-to-End Data Lineage', 'Dynamic PII / Financial Data Masking', 'Data Dictionary & Metadata Catalog', 'SLA Data Freshness Monitoring']
      },
      {
        tag: 'Predictive MLOps',
        title: 'Predictive Analytics & Automated MLOps',
        desc: 'Production-grade machine learning pipelines for customer churn forecasting, demand forecasting, predictive maintenance, and fraud detection.',
        deliverables: ['Feature Store (Feast/Hopsworks)', 'MLflow Experiment Tracking & Registry', 'Automated Model Drift Monitoring', 'Low-Latency Inference Endpoints']
      }
    ],
    techStack: [
      { name: 'Snowflake', category: 'Lakehouse' },
      { name: 'Databricks / Spark', category: 'Analytics' },
      { name: 'Google BigQuery', category: 'Warehouse' },
      { name: 'dbt (data build tool)', category: 'Modeling' },
      { name: 'Apache Airflow', category: 'Orchestration' },
      { name: 'Pinecone / pgvector', category: 'AI Vector' },
      { name: 'Power BI / Tableau', category: 'BI' },
      { name: 'LangChain / LlamaIndex', category: 'GenAI' }
    ],
    methodology: [
      {
        step: '01',
        title: 'Data Source Inventory & Target Schema',
        desc: 'Catalog all transactional databases, APIs, and ERP systems; establish dimensional semantic data models and data governance standards.'
      },
      {
        step: '02',
        title: 'Lakehouse Ingestion & dbt Modeling',
        desc: 'Deploy zero-maintenance CDC pipelines into Snowflake/Databricks, establish Bronze/Silver/Gold medallion stages, and write modular dbt transforms.'
      },
      {
        step: '03',
        title: 'Semantic Layer & BI Dashboard Rollout',
        desc: 'Configure centralized metric definitions, build executive dashboards with sub-second query latency, and roll out access control.'
      },
      {
        step: '04',
        title: 'Enterprise AI & Continuous Optimization',
        desc: 'Implement conversational RAG query agents over enterprise documents, establish automated data quality alerts, and train analytical teams.'
      }
    ],
    caseStudies: [
      {
        industry: 'Banking & Wealth Management',
        title: 'Unified Customer 360 Lakehouse on Snowflake',
        outcome: 'Integrated 14 transactional banking databases into Snowflake with dbt, reducing regulatory report generation time from 8 hours to 90 seconds.'
      },
      {
        industry: 'Global Supply Chain',
        title: 'Predictive Demand Forecasting with Databricks',
        outcome: 'Built an Apache Spark machine learning pipeline forecasting inventory demand across 40 warehouses with 94.8% accuracy, saving $4.2M in holding costs.'
      },
      {
        industry: 'Healthcare Diagnostics',
        title: 'Private Enterprise RAG Knowledge System',
        outcome: 'Deployed a private, zero-data-leakage LLM search tool over 250,000 clinical research papers, reducing physician diagnostic query times by 75%.'
      }
    ],
    faqs: [
      {
        q: 'How do you ensure proprietary enterprise data remains private with GenAI?',
        a: 'We deploy private, self-hosted LLMs or enterprise zero-data-retention APIs within your private VPC. Data used in vector search (RAG) is never used for public model training, and access adheres to strict row-level role security.'
      },
      {
        q: 'Should we choose Snowflake, Databricks, or BigQuery for our lakehouse?',
        a: 'The ideal platform depends on your primary workload. Snowflake excels in high-concurrency SQL analytics and zero-management data warehousing; Databricks leads in heavy data science, PySpark, and streaming ML; BigQuery is optimal for GCP ecosystems.'
      },
      {
        q: 'How do you prevent data pipeline failures and silent corruptions?',
        a: 'We use dbt tests combined with automated data observability tools (like Monte Carlo). Every pipeline run automatically validates schema integrity, null constraints, uniqueness, and metric distribution tolerances before advancing.'
      },
      {
        q: 'Can you migrate our legacy on-premise Oracle/SQL Server data warehouse to the cloud?',
        a: 'Yes. We have specialized automated migration accelerators that parse legacy stored procedures, convert schema DDLs, and orchestrate change data capture (CDC) for zero-downtime historical cutovers.'
      }
    ]
  },

  'cybersecurity-grc': {
    id: 'cybersecurity-grc',
    slug: 'cybersecurity-grc',
    title: 'Cybersecurity, GRC & PCI-DSS 4.0',
    tagline: 'QSA-Accredited Attestation, CDE Isolation & Enterprise Risk Governance',
    category: 'Security & Governance',
    benchmarkRef: 'Modeled after HCL Cybersecurity & Global QSA Audit Standards',
    heroBgImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2000&q=80',
    accentColor: '#059669',
    badgeColor: 'bg-emerald-600 text-white shadow-emerald-500/25',
    heroSummary: 'Protect your brand and guarantee 100% audit attestation with Qualified Security Assessor (QSA) advisory, PCI-DSS v4.0 gap closure, Cardholder Data Environment (CDE) isolation, ISO 27001 certification, and zero-trust security postures.',
    stats: [
      { label: 'Audit Pass Rate', value: '100%' },
      { label: 'PCI Scope Reduction', value: 'Up to 75%' },
      { label: 'Non-Compliance Penalties', value: '$0' },
      { label: 'Compliance Frameworks', value: '12+' }
    ],
    overview: 'With the mandatory enforcement of PCI-DSS v4.0, global enterprises face stringent technical controls including targeted risk assessments, automated script management on payment pages, and strict multi-factor authentication. Our Cybersecurity & GRC practice guides organizations from initial gap assessments to final Attestation of Compliance (AOC).',
    pillars: [
      {
        tag: 'PCI-DSS 4.0',
        title: 'PCI-DSS v4.0 Gap Assessment & Scope Minimization',
        desc: 'Comprehensive technical review against all 12 PCI-DSS v4.0 principal requirements, isolating Cardholder Data Environments (CDE) to drastically reduce audit overhead.',
        deliverables: ['PCI-DSS v4.0 Gap Matrix Report', 'Cardholder Data Network Flow Diagrams', 'Tokenization & Scope Reduction Blueprint', 'Targeted Risk Analysis (TRA) Documentation']
      },
      {
        tag: 'Pen Testing',
        title: 'Advanced Penetration Testing & Vulnerability Scans',
        desc: 'Certified ethical hacking (CREST/OSCP) across web applications, cloud APIs, microservices, and internal networks simulating real-world adversary tactics.',
        deliverables: ['Executive Risk & Technical Findings Report', 'Exploit Proof-of-Concepts (PoCs)', 'ASV Approved Quarterly External Scans', 'Remediation Verification Retesting']
      },
      {
        tag: 'ISO & GRC',
        title: 'ISO 27001, SOC 2 & NIST Security Advisory',
        desc: 'End-to-end design, implementation, and audit facilitation for ISO/IEC 27001:2022 Information Security Management Systems (ISMS) and SOC 2 Type II controls.',
        deliverables: ['Statement of Applicability (SoA)', 'Information Security Policy Suites', 'Internal Audit Readiness Report', 'Accredited Registrar Audit Defense']
      },
      {
        tag: 'Data Privacy',
        title: 'Regional Data Privacy (Singapore PDPA / GDPR)',
        desc: 'Comprehensive data protection assessments, data inventory mapping, cross-border transfer compliance, and Data Protection Officer (DPO) advisory.',
        deliverables: ['Data Protection Impact Assessments (DPIA)', 'Enterprise RoPA Records of Processing', 'Cross-Border Transfer Legal Safeguards', 'Breach Notification Protocols (< 72h)']
      },
      {
        tag: 'Payment Page Security',
        title: 'Client-Side Script Governance (PCI 4.0 Req 6.4.3)',
        desc: 'Implement tamper-resistant script monitoring, integrity hashing (SRI), and authorization controls to prevent e-skimming and Magecart attacks on payment pages.',
        deliverables: ['Payment Page Script Inventory Matrix', 'Subresource Integrity (SRI) Automation', 'Content Security Policy (CSP) Tuning', 'Tamper Alerting & Synthetic Auditing']
      },
      {
        tag: 'Zero Trust & IAM',
        title: 'Zero-Trust Architecture & Privilege Access (PAM)',
        desc: 'Strict multi-factor authentication (MFA) enforcement across all administrative consoles, just-in-time privilege escalation, and session auditing.',
        deliverables: ['Phishing-Resistant MFA Implementation', 'Privileged Access Management (PAM) Vaults', 'Micro-Segmentation Firewall Rules', 'Continuous Identity Risk Scoring']
      }
    ],
    techStack: [
      { name: 'PCI-DSS v4.0 Framework', category: 'Standard' },
      { name: 'ISO/IEC 27001:2022', category: 'Standard' },
      { name: 'SOC 2 Type II', category: 'Attestation' },
      { name: 'NIST CSF & 800-53', category: 'Framework' },
      { name: 'Burp Suite Pro', category: 'PenTest' },
      { name: 'Wazuh / Splunk SIEM', category: 'Detection' },
      { name: 'Tenable / Qualys', category: 'Scanning' },
      { name: 'HashiCorp Boundary', category: 'Zero Trust' }
    ],
    methodology: [
      {
        step: '01',
        title: 'Scope Discovery & Gap Analysis',
        desc: 'Conduct detailed technical interviews, trace cardholder and sensitive data flows, evaluate network segmentation, and identify control gaps.'
      },
      {
        step: '02',
        title: 'Remediation Engineering & Scope Reduction',
        desc: 'Deploy tokenization, implement micro-segmentation, configure client-side payment script integrity, and draft mandatory compliance policies.'
      },
      {
        step: '03',
        title: 'Pre-Audit Verification & Penetration Testing',
        desc: 'Execute rigorous network pen testing, ASV scans, targeted risk assessments, and mock QSA audit evidence collection.'
      },
      {
        step: '04',
        title: 'Official QSA Audit & AOC Issuance',
        desc: 'Facilitate on-site/remote QSA assessor reviews, compile the final Report on Compliance (RoC), and secure the official Attestation of Compliance (AOC).'
      }
    ],
    caseStudies: [
      {
        industry: 'FinTech & Payment Gateway',
        title: 'PCI-DSS v4.0 Level 1 Service Provider Attestation',
        outcome: 'Guided a high-growth Singapore payment facilitator through PCI-DSS 4.0 certification, reducing CDE scope by 65% and achieving 100% first-attempt AOC approval.'
      },
      {
        industry: 'Global Retail & Hospitality',
        title: 'ISO 27001:2022 Enterprise Certification',
        outcome: 'Architected and implemented a complete Information Security Management System (ISMS) across 8 corporate locations, securing accredited ISO 27001 with zero non-conformities.'
      },
      {
        industry: 'Public Sector Agency',
        title: 'Third-Party Vendor Risk & ITGC Controls Audit',
        outcome: 'Audited 50+ third-party cloud SaaS vendors and implemented automated IT General Controls (ITGC), eliminating audit liabilities and meeting national data residency mandates.'
      }
    ],
    faqs: [
      {
        q: 'What are the most critical new technical requirements in PCI-DSS v4.0?',
        a: 'PCI-DSS v4.0 enforces mandatory targeted risk assessments (Req 12.3), automated script management on payment checkout pages to prevent e-skimming (Req 6.4.3 & 11.6.1), phishing-resistant multi-factor authentication for all CDE access (Req 8.4.2), and automated log reviews.'
      },
      {
        q: 'How does CDE scope reduction save audit costs?',
        a: 'By implementing network micro-segmentation and third-party hosted tokenization (e.g. Stripe Elements or tokenized iframes), cardholder data never touches your servers. This reduces the number of applicable PCI requirements from over 300 to fewer than 40.'
      },
      {
        q: 'Do you provide penetration testing as part of compliance audits?',
        a: 'Yes. Our team includes certified CREST and OSCP penetration testers who conduct internal and external network pen tests, application assessments, and segmentation tests strictly compliant with PCI-DSS Req 11.4.'
      },
      {
        q: 'What is the typical timeline for an end-to-end PCI-DSS v4.0 attestation?',
        a: 'Depending on current maturity and scope, a full engagement typically spans 8 to 16 weeks, encompassing discovery, scope minimization, engineering remediation, pre-audit testing, and final QSA audit defense.'
      }
    ]
  },

  'enterprise-erp': {
    id: 'enterprise-erp',
    slug: 'enterprise-erp',
    title: 'Enterprise Platform Services & ERP',
    tagline: 'SAP S/4HANA Modernization, Oracle Cloud & Custom Enterprise Middleware',
    category: 'Enterprise Applications',
    benchmarkRef: 'Modeled after Cognizant Enterprise Application Services & HCL SAP Practice',
    heroBgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80',
    accentColor: '#d97706',
    badgeColor: 'bg-amber-600 text-white shadow-amber-500/25',
    heroSummary: 'Unify corporate finance, manufacturing, procurement, and global supply chains with expert SAP S/4HANA implementation, Oracle Cloud ERP migration, and decoupled RESTful middleware connectors that eliminate organizational data silos.',
    stats: [
      { label: 'Admin Overhead Reduction', value: '40%' },
      { label: 'Financial Close Acceleration', value: '5 Days' },
      { label: 'Data Silo Elimination', value: '100%' },
      { label: 'Connected ERP Workflows', value: '50+' }
    ],
    overview: 'Legacy ERP systems are notoriously monolithic, heavily customized, and difficult to update. Our Enterprise Platform Services practice modernizes legacy SAP ECC, Oracle EBS, and custom accounting systems into clean-core cloud platforms with real-time financial synchronization and automated API middleware.',
    pillars: [
      {
        tag: 'SAP Modernization',
        title: 'SAP S/4HANA Cloud Migration & Clean Core Strategy',
        desc: 'Brownfield and Greenfield S/4HANA transformations migrating from SAP ECC to S/4HANA Cloud while moving bespoke customizations out of the core via SAP BTP.',
        deliverables: ['SAP Readiness Assessment & Code Inspector', 'SAP BTP Side-by-Side Extensibility Blueprint', 'Financial General Ledger (FI/CO) Consolidation', 'Cutover Strategy & Data Cleansing Scripts']
      },
      {
        tag: 'Oracle ERP',
        title: 'Oracle Fusion Cloud Applications & Financials',
        desc: 'Deploy and optimize Oracle Cloud ERP, Enterprise Performance Management (EPM), and Supply Chain Management (SCM) with automated workflows.',
        deliverables: ['Chart of Accounts (CoA) Harmonization', 'Automated Procure-to-Pay (P2P) Workflows', 'Order-to-Cash (O2C) Real-Time Integrations', 'Multi-Entity Tax & Currency Consolidation']
      },
      {
        tag: 'Middleware & Sync',
        title: 'Enterprise Middleware & Two-Way ERP Sync',
        desc: 'Robust API middleware bridging ERPs with Salesforce, HubSpot, e-commerce storefronts, and warehouse systems using event-driven architectures.',
        deliverables: ['Real-Time RESTful / SOAP Middleware', 'Bidirectional Master Data Sync (MDS)', 'Kafka Message Queue Transaction Buffers', 'Automated Re-conciliation & Error Triaging']
      },
      {
        tag: 'Supply Chain',
        title: 'Digital Supply Chain & Inventory Optimization',
        desc: 'Real-time inventory tracking across multiple regional distribution centers, automated replenishment triggers, and electronic vendor invoicing.',
        deliverables: ['Multi-Warehouse Stock Ledger Visibility', 'Automated Re-order & Safety Stock Calculations', 'Electronic Data Interchange (EDI) Connectors', 'Carrier API Integration & Telemetry']
      },
      {
        tag: 'Analytics & Reporting',
        title: 'Real-Time Financial Reporting & Period Closing',
        desc: 'Consolidate multiple legal entities, automated inter-company transaction eliminations, and instant P&L reporting that shortens monthly book closing.',
        deliverables: ['Real-Time Trial Balance & Balance Sheets', 'Automated Currency Translation & Remeasurement', 'Intercompany Transaction Reconciliation', 'Fast-Close Automated Financial Workflows']
      },
      {
        tag: 'Governance',
        title: 'ERP Security, SoD & Compliance Governance',
        desc: 'Segregation of Duties (SoD) enforcement, role-based security access matrices, and automated audit logging for Sarbanes-Oxley (SOX) compliance.',
        deliverables: ['SoD Conflict Matrix & Remediation', 'Role-Based Authorization Architecture', 'Automated Audit Trail Logging', 'Quarterly Access Certification Portals']
      }
    ],
    techStack: [
      { name: 'SAP S/4HANA Cloud', category: 'ERP' },
      { name: 'SAP Business Technology Platform (BTP)', category: 'PaaS' },
      { name: 'Oracle Fusion Cloud ERP', category: 'ERP' },
      { name: 'MuleSoft / Boomi', category: 'Integration' },
      { name: 'Apache Kafka', category: 'Messaging' },
      { name: 'PostgreSQL / SQL Server', category: 'Database' },
      { name: 'EDI / AS2 Protocols', category: 'Supply Chain' },
      { name: 'Power BI / Celonis', category: 'Process Mining' }
    ],
    methodology: [
      {
        step: '01',
        title: 'Process Mining & Core Architecture Assessment',
        desc: 'Utilize process mining to analyze actual operational workflows, identify bottlenecks, harmonize the Chart of Accounts, and define the clean core target.'
      },
      {
        step: '02',
        title: 'Data Cleansing & Middleware Scaffolding',
        desc: 'Cleanse master data (vendors, customers, items), build event-driven API middleware, and configure the base cloud ERP tenant.'
      },
      {
        step: '03',
        title: 'Conference Room Pilots & Integration Testing',
        desc: 'Run multi-stage user acceptance testing (UAT), end-to-end integration runs with CRM and banking partners, and validate financial reconciliations.'
      },
      {
        step: '04',
        title: 'Cutover Execution & Hypercare Operations',
        desc: 'Execute final weekend data synchronization cutover, transition user traffic, provide on-site floor support, and establish long-term ERP governance.'
      }
    ],
    caseStudies: [
      {
        industry: 'Global Manufacturing',
        title: 'SAP S/4HANA Cloud Migration for 24 Factories',
        outcome: 'Consolidated 6 fragmented ERP instances into unified SAP S/4HANA Cloud, cutting month-end closing from 14 days to 4 days and eliminating 40% of manual reporting.'
      },
      {
        industry: 'Omnichannel Retail & FMCG',
        title: 'Real-Time ERP & E-Commerce Synchronizer',
        outcome: 'Engineered an event-driven middleware connecting SAP with Magento and 3PL warehouses, processing 120,000 daily order line items with zero data discrepancies.'
      },
      {
        industry: 'Logistics & Marine Services',
        title: 'Oracle Cloud ERP Procurement Modernization',
        outcome: 'Standardized automated procure-to-pay processes across 8 APAC countries, eliminating rogue purchasing and generating $3.1M in vendor contract savings.'
      }
    ],
    faqs: [
      {
        q: 'What does a "Clean Core" strategy mean for SAP modernization?',
        a: 'A Clean Core strategy means keeping standard SAP ERP software free of direct modifications. Bespoke customizations and business logic are built externally on SAP BTP (Business Technology Platform) or cloud microservices, ensuring seamless future ERP upgrades.'
      },
      {
        q: 'How do you handle master data cleansing before migration?',
        a: 'We implement automated deduplication and standardization pipelines that audit master records (customers, vendors, materials, GL accounts) for completeness, duplicates, and tax formatting before loading into the target ERP.'
      },
      {
        q: 'Can you integrate our existing CRM and billing software with the new ERP?',
        a: 'Yes. We specialize in building reliable, bidirectional event-driven middleware (via REST, webhooks, or Kafka) ensuring that invoices, payments, customer data, and inventory balances synchronize in sub-second intervals.'
      },
      {
        q: 'How do you ensure business continuity during the final ERP cutover?',
        a: 'We conduct full rehearsals during dry runs, establish detailed minute-by-minute cutover runbooks, set up rollback criteria, and schedule the cutover over non-operational weekend periods with 24/7 hypercare support.'
      }
    ]
  },

  'process-automation': {
    id: 'process-automation',
    slug: 'process-automation',
    title: 'Intelligent Automation & RPA',
    tagline: 'Cognitive Software Bots, Intelligent Document Processing & Workflow Re-engineering',
    category: 'Operations & Automation',
    benchmarkRef: 'Modeled after HCL Digital Operations & Cognizant Intelligent Automation',
    heroBgImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80',
    accentColor: '#e11d48',
    badgeColor: 'bg-rose-600 text-white shadow-rose-500/25',
    heroSummary: 'Eliminate repetitive, high-error operational workflows with enterprise Robotic Process Automation (UiPath, Power Automate), AI-powered Intelligent Document Processing (IDP), and Lean Six Sigma business process re-engineering.',
    stats: [
      { label: 'Manual Error Reduction', value: '80%' },
      { label: 'Process Velocity Boost', value: '5x Faster' },
      { label: 'Full-Time Equivalent (FTE) Saved', value: '25,000+ hrs' },
      { label: 'Document Processing Accuracy', value: '99.4%' }
    ],
    overview: 'High-volume administrative tasks—such as invoice data entry, customer onboarding verification, insurance claim reviews, and ERP ledger reconciliation—waste thousands of operational hours. Our Intelligent Automation practice builds autonomous digital workforces that execute tasks with machine speed and zero error.',
    pillars: [
      {
        tag: 'RPA Bots',
        title: 'Robotic Process Automation (UiPath / Power Automate)',
        desc: 'Attended and unattended software bots automating cross-system keystrokes, form submissions, legacy desktop navigation, and data synchronization.',
        deliverables: ['Production UiPath / Power Automate Workflows', 'Centralized Bot Orchestrator Architecture', 'Automated Exception Routing & Escalations', 'Secure Credential Vault Bot Governance']
      },
      {
        tag: 'Cognitive IDP',
        title: 'Intelligent Document Processing (IDP) & OCR',
        desc: 'Extract structured data from unstructured invoices, bills of lading, contracts, and medical claims using computer vision and LLM parsing.',
        deliverables: ['Pre-Trained Invoice & PoC Extraction Models', 'Confidence Scoring & Human-in-the-Loop Review', 'Multi-Language OCR Document Parsing', 'Automated ERP / Ledger Data Ingestion']
      },
      {
        tag: 'Process Re-engineering',
        title: 'Process Mining & Lean Six Sigma Optimization',
        desc: 'Analyze actual user clickstreams and ERP system event logs with process mining to discover hidden bottlenecks, loopbacks, and automation opportunities.',
        deliverables: ['As-Is vs To-Be Process Map Analysis', 'Automation ROI & Feasibility Scorecard', 'Friction Point & Bottleneck Identification', 'Standard Operating Procedure (SOP) Optimization']
      },
      {
        tag: 'Generative Agents',
        title: 'Generative AI Workflow Agents',
        desc: 'Autonomous AI agents that interpret unstructured email requests, categorize support tickets, draft responses, and execute multi-step backend actions.',
        deliverables: ['Email Intent Classification Models', 'Contextual Automated Draft Generators', 'API Tool-Calling Agent Execution', 'Human Approval Checkpoint Gateways']
      },
      {
        tag: 'Governance',
        title: 'Automation Center of Excellence (CoE)',
        desc: 'Establish enterprise governance, security policies, reusable bot libraries, and change management protocols to scale automation sustainably.',
        deliverables: ['Enterprise Automation CoE Charter', 'Bot Development Standards & Templates', 'Change Management Training Curriculum', 'Value Realization Tracking Scorecards']
      },
      {
        tag: 'Monitoring',
        title: 'Real-Time Bot Telemetry & SLA Analytics',
        desc: 'Live operations dashboards tracking bot run times, transactions completed, queue depth, error rates, and realized financial savings.',
        deliverables: ['Executive Live Automation Dashboards', 'Automated Bot Self-Healing Scripts', 'Queue Capacity & Scheduling Balancers', 'Quarterly Business Value Audits']
      }
    ],
    techStack: [
      { name: 'UiPath Enterprise', category: 'RPA' },
      { name: 'Microsoft Power Automate', category: 'RPA' },
      { name: 'ABBYY FlexiCapture', category: 'IDP' },
      { name: 'AWS Textract / Azure Form Rec', category: 'OCR' },
      { name: 'Celonis / UiPath Process Mining', category: 'Process Mining' },
      { name: 'OpenAI GPT-4o / Claude 3.5', category: 'AI Agents' },
      { name: 'Python / Playwright', category: 'Automation' },
      { name: 'Kibana / Power BI', category: 'Telemetry' }
    ],
    methodology: [
      {
        step: '01',
        title: 'Process Discovery & Opportunity Assessment',
        desc: 'Interview stakeholders, run process mining diagnostics, evaluate complexity and ROI, and prioritize the initial wave of automation candidates.'
      },
      {
        step: '02',
        title: 'Process Design Document (PDD) & Architecture',
        desc: 'Document every decision node, exception condition, credential requirement, and expected output in a formal Process Design Document.'
      },
      {
        step: '03',
        title: 'Bot Engineering & Human-in-the-Loop UAT',
        desc: 'Develop robust, error-handling RPA workflows and IDP models with staging tests, exception handling, and business verification.'
      },
      {
        step: '04',
        title: 'Production Orchestration & CoE Scale',
        desc: 'Deploy bots into production orchestrators with automated alerting, establish real-time ROI tracking, and expand to the next automation queue.'
      }
    ],
    caseStudies: [
      {
        industry: 'Logistics & Freight Forwarding',
        title: 'Automated Customs & Bill of Lading Clearance',
        outcome: 'Deployed IDP and UiPath bots parsing 45,000 international shipping documents monthly, slashing processing times from 4 hours to 3 minutes.'
      },
      {
        industry: 'Commercial Insurance',
        title: 'Automated Claims Ingestion & Adjudication',
        outcome: 'Automated preliminary claims validation across 12 legacy insurance policy systems, cutting claim cycle times by 72% and saving 18,000 manual hours annually.'
      },
      {
        industry: 'Banking & Financial Services',
        title: 'KYC Verification & Account Onboarding Bots',
        outcome: 'Integrated unattended bots executing AML/PEP checks and government registry verification, enabling instant customer onboarding with 100% compliance.'
      }
    ],
    faqs: [
      {
        q: 'How do you handle exceptions when an RPA bot encounters an unknown document or error?',
        a: 'We build strict Human-in-the-Loop (HITL) exception workflows. If an invoice fails OCR confidence scoring or a system throws an unexpected state, the bot routes the transaction to a business user queue with a highlight of the discrepancy while continuing its batch.'
      },
      {
        q: 'What is the typical ROI timeframe for an intelligent automation project?',
        a: 'Most enterprises achieve positive ROI within 3 to 6 months. By eliminating manual data entry, reducing rework, and preventing operational backlogs, our clients typically reclaim 30% to 50% of FTE capacity in target processes.'
      },
      {
        q: 'Can automation bots work with legacy desktop applications with no APIs?',
        a: 'Yes. RPA bots interact directly with UI layers using computer vision, accessibility selectors, and keystroke emulation, allowing seamless automation across 20-year-old mainframe green screens, desktop ERPs, and modern web apps.'
      },
      {
        q: 'What security measures govern bots accessing production databases?',
        a: 'All bots operate under strictly governed service accounts with least-privilege role permissions. Credentials are never exposed in code and are dynamically fetched from enterprise vaults like CyberArk or Azure Key Vault with full audit logging.'
      }
    ]
  },

  'quality-engineering': {
    id: 'quality-engineering',
    slug: 'quality-engineering',
    title: 'Quality Engineering & Assurance',
    tagline: 'Autonomous Test Automation, High-Scale Load Stress Testing & Chaos Resilience',
    category: 'Quality Engineering',
    benchmarkRef: 'Modeled after Cognizant Quality Engineering & HCL Automated QA',
    heroBgImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80',
    accentColor: '#0d9488',
    badgeColor: 'bg-teal-600 text-white shadow-teal-500/25',
    heroSummary: 'Ensure flawless digital reliability with continuous test automation frameworks (Playwright, Cypress), high-scale distributed load stress simulations (k6, JMeter), automated security vulnerability scanning, and chaos engineering.',
    stats: [
      { label: 'Critical Production Escapes', value: 'Zero' },
      { label: 'Automated Test Coverage', value: '92%' },
      { label: 'Regression Suite Runtime', value: '< 12 mins' },
      { label: 'Peak Load Capacity Tested', value: '500k RPS' }
    ],
    overview: 'Manual software testing creates chronic release bottlenecks and allows costly production bugs to slip through. Our Quality Engineering practice shifts quality left by embedding automated test suites, distributed performance stress engines, and chaos resiliency directly into your CI/CD delivery pipelines.',
    pillars: [
      {
        tag: 'E2E Automation',
        title: 'Full-Stack Automated Testing (Playwright / Cypress)',
        desc: 'High-speed, cross-browser automated end-to-end regression suites that execute in parallel across Chromium, WebKit, and Firefox with automated video and trace logs.',
        deliverables: ['Production Playwright / Cypress Test Framework', 'Page Object Model (POM) Reusable Architecture', 'Parallel Multi-Threaded Test Grid', 'Automated Flaky-Test Quarantine Handlers']
      },
      {
        tag: 'Performance & Load',
        title: 'High-Scale Load Stress Testing (k6 / JMeter)',
        desc: 'Simulate hundreds of thousands of concurrent users across APIs and web interfaces to identify database connection pooling limits, memory leaks, and latency thresholds.',
        deliverables: ['Distributed k6 Load Testing Harness', 'Baseline, Spike, Stress & Soak Test Profiles', 'Database Query Bottleneck Profiling', 'Infrastructure Capacity Sizing Recommendations']
      },
      {
        tag: 'API & Contracts',
        title: 'API Automation & Pact Contract Verification',
        desc: 'Comprehensive API functional, schema, and consumer-driven contract testing (Pact) ensuring microservices never introduce breaking changes across teams.',
        deliverables: ['Automated Postman / Newman & REST-Assured Tests', 'Consumer-Driven Pact Contract Verification', 'Automated JSON / OpenAPI Schema Validation', 'Mock Server Stubs & Synthetic Test Fixtures']
      },
      {
        tag: 'Chaos Engineering',
        title: 'Chaos Resilience & Fault Injection',
        desc: 'Proactively inject network latency, pod failures, packet loss, and regional cloud outages with Chaos Mesh to verify automated system self-healing.',
        deliverables: ['Chaos Mesh / Gremlin Experiment Scenarios', 'Pod Termination & Network Lag Simulations', 'Database Failover RPO/RTO Validation', 'Resilience Scorecard & Hardening Actions']
      },
      {
        tag: 'Security QA',
        title: 'Automated OWASP Security & Vulnerability QA',
        desc: 'Automated dynamic security testing (DAST) embedded into continuous delivery pipelines scanning for SQL injection, XSS, and broken access control.',
        deliverables: ['OWASP ZAP Automated CI/CD Scans', 'Dependency CVE Vulnerability Gating', 'Authorization & Role Bypassing Tests', 'Static Code Quality SonarQube Badges']
      },
      {
        tag: 'Mobile QA',
        title: 'Real-Device Cloud Mobile QA (Appium)',
        desc: 'Automated functional and compatibility testing across iOS and Android real-device matrices (BrowserStack / Sauce Labs) under diverse network speeds.',
        deliverables: ['Appium Cross-Platform Mobile Test Suites', 'Real-Device Cloud Farm Test Execution', 'Battery Consumption & Memory Profiling', 'Push Notification & Deeplink Validation']
      }
    ],
    techStack: [
      { name: 'Playwright', category: 'E2E Testing' },
      { name: 'Cypress', category: 'E2E Testing' },
      { name: 'k6 by Grafana', category: 'Performance' },
      { name: 'Apache JMeter', category: 'Performance' },
      { name: 'Pact Contract Testing', category: 'API' },
      { name: 'Chaos Mesh', category: 'Resilience' },
      { name: 'BrowserStack / Sauce Labs', category: 'Mobile Cloud' },
      { name: 'SonarQube', category: 'Code Quality' }
    ],
    methodology: [
      {
        step: '01',
        title: 'Quality Assessment & Test Strategy',
        desc: 'Audit existing test coverage, map critical business user journeys, establish test automation architecture, and configure toolchains.'
      },
      {
        step: '02',
        title: 'Framework Engineering & Core Suite Build',
        desc: 'Develop modular, maintainable Page Object Model (POM) test frameworks, integrate test data management, and scaffold initial smoke test suites.'
      },
      {
        step: '03',
        title: 'CI/CD Pipeline Integration & Load Stress Runs',
        desc: 'Embed automated test suites into GitHub Actions/GitLab CI with parallel execution, and execute distributed k6 load stress benchmarks.'
      },
      {
        step: '04',
        title: 'Chaos Engineering & Continuous Governance',
        desc: 'Inject chaos experiments, implement real-device mobile matrices, set up automated flaky test detection, and train internal QA engineers.'
      }
    ],
    caseStudies: [
      {
        industry: 'FinTech & Digital Banking',
        title: 'Autonomous Regression Testing for Mobile Banking App',
        outcome: 'Built an automated Playwright and Appium test suite running 1,400 test cases in 11 minutes, reducing regression cycles from 5 days to automated pre-merge checks.'
      },
      {
        industry: 'Global Travel & Hospitality',
        title: 'High-Scale Peak Season Load Stress Validation',
        outcome: 'Executed distributed k6 load testing simulating 350,000 concurrent travelers booking reservations, identifying and resolving a critical database lock before peak season.'
      },
      {
        industry: 'SaaS Enterprise Platforms',
        title: 'Consumer-Driven Contract Testing for 80 Microservices',
        outcome: 'Implemented Pact contract testing across 12 distributed engineering squads, preventing breaking API changes and cutting integration bug tickets by 88%.'
      }
    ],
    faqs: [
      {
        q: 'Why do you recommend Playwright over older tools like Selenium?',
        a: 'Playwright executes tests natively through browser devtools protocols, making it up to 5x faster than Selenium. It includes auto-waiting for UI elements, built-in network mocking, native mobile viewports, and zero browser driver management issues.'
      },
      {
        q: 'How do you prevent flaky tests from breaking CI/CD builds?',
        a: 'We enforce strict test architecture: eliminating arbitrary hardcoded sleeps, using smart DOM state assertions, isolating synthetic test data per test run, and utilizing automated retry and quarantine mechanisms for unstable third-party dependencies.'
      },
      {
        q: 'Can you simulate real-world mobile network throttling during testing?',
        a: 'Yes. Our automated test harnesses simulate 3G, 4G, and intermittent offline states, verifying that your mobile and web applications degrade gracefully with local caching and informative user notices.'
      },
      {
        q: 'How does chaos engineering help prevent production outages?',
        a: 'Chaos engineering tests whether your redundancy mechanisms (such as automated Kubernetes pod restarts, database read replica promotions, and circuit breakers) actually work during real failures, before real customers are impacted.'
      }
    ]
  },

  'managed-services': {
    id: 'managed-services',
    slug: 'managed-services',
    title: '24/7 Managed Infrastructure & NOC/SOC',
    tagline: 'Enterprise Continuous Operations, Proactive Threat Triage & Sub-15m Response SLAs',
    category: 'Managed Operations',
    benchmarkRef: 'Modeled after HCLTech Managed Infrastructure & Enterprise SRE Practices',
    heroBgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80',
    accentColor: '#3b82f6',
    badgeColor: 'bg-blue-600 text-white shadow-blue-500/25',
    heroSummary: 'Guarantee continuous business operations with 24/7/365 follow-the-sun Network and Security Operations Center (NOC/SOC) monitoring, automated incident remediation, high-availability database administration, and contractual sub-15 minute SLAs.',
    stats: [
      { label: 'Critical Incident Response SLA', value: '< 15 mins' },
      { label: 'Proactive Alert Resolution', value: '85%' },
      { label: 'Operational Uptime Guarantee', value: '99.99%' },
      { label: 'Follow-The-Sun Coverage', value: '24/7/365' }
    ],
    overview: 'Mission-critical enterprise services cannot afford unmonitored server outages, silent database corruptions, or undetected security breaches in the middle of the night. Our 24/7 Managed Services practice acts as an elite extension of your engineering team, monitoring your global infrastructure around the clock.',
    pillars: [
      {
        tag: '24/7 NOC/SOC',
        title: '24/7/365 Global NOC & SOC Operations',
        desc: 'Continuous real-time infrastructure and security event monitoring across cloud, on-premise, and hybrid environments with contractual sub-15 minute incident response.',
        deliverables: ['Follow-The-Sun L1-L3 Engineering Desk', 'Automated PagerDuty Escalation Paths', 'Real-Time SIEM Threat Hunting', 'Monthly Incident Post-Mortem Reviews']
      },
      {
        tag: 'Database HA/DR',
        title: 'High Availability Database Administration (DBA)',
        desc: 'Proactive maintenance, index tuning, automated point-in-time backups, and failover validation for PostgreSQL, MySQL, Oracle, MongoDB, and Redis.',
        deliverables: ['Active-Passive & Multi-Master Replication', 'Continuous Backup & Restoration Drills', 'Slow Query Profiling & Index Optimization', 'Zero-Downtime Minor/Major Upgrades']
      },
      {
        tag: 'SRE & Runbooks',
        title: 'Site Reliability Engineering (SRE) & Automated Runbooks',
        desc: 'Automate repetitive operational toil with event-driven runbooks (AWS Systems Manager, Ansible) that resolve routine disk, memory, and service restarts automatically.',
        deliverables: ['Automated Self-Healing Healing Scripts', 'Infrastructure-as-Code Runbook Repositories', 'Error Budget & SLO/SLI Governance', 'Capacity Forecasting & Resource Right-Sizing']
      },
      {
        tag: 'Patch & Vulnerability',
        title: 'Continuous Patch Management & Vulnerability Hygiene',
        desc: 'Automated OS and kernel patching, zero-day CVE vulnerability remediation, and compliance auditing without taking production services offline.',
        deliverables: ['Automated Rolling Fleet Patching', 'Zero-Day Vulnerability Triage (< 24h)', 'CIS Benchmark Hardening Validation', 'Quarterly Compliance Audit Proof Packages']
      },
      {
        tag: 'Backup & DR',
        title: 'Ransomware-Proof Backups & Disaster Recovery',
        desc: 'Immutable, air-gapped cloud backups with automated integrity verification and documented Disaster Recovery runbooks tested through semi-annual failover drills.',
        deliverables: ['Air-Gapped Immutable Backup Vaults', 'Cross-Region Automated Replication', 'Semi-Annual Live Disaster Recovery Drills', 'RPO < 15 mins / RTO < 30 mins Guarantees']
      },
      {
        tag: 'Cloud Governance',
        title: 'Continuous Cloud Health & Cost Auditing',
        desc: 'Ongoing multi-cloud health checks, architecture reviews against the AWS Well-Architected Framework, and weekly cloud spend optimization.',
        deliverables: ['AWS / Azure Well-Architected Reviews', 'Unused Resource Cleanup Scripts', 'Weekly Operational Health Reports', 'Dedicated Lead Cloud Architect Advisory']
      }
    ],
    techStack: [
      { name: 'Datadog / Dynatrace', category: 'Observability' },
      { name: 'PagerDuty / Opsgenie', category: 'Incident' },
      { name: 'Prometheus / Grafana', category: 'Metrics' },
      { name: 'Ansible / AWX', category: 'Runbooks' },
      { name: 'AWS Systems Manager', category: 'Automation' },
      { name: 'PostgreSQL / MySQL / Redis', category: 'Databases' },
      { name: 'Wazuh / Splunk SIEM', category: 'SOC' },
      { name: 'Jira Service Management', category: 'ITIL' }
    ],
    methodology: [
      {
        step: '01',
        title: 'Infrastructure Discovery & Runbook Audit',
        desc: 'Inventory all cloud accounts, databases, and network assets; document standard operating procedures (SOPs) and establish baseline monitoring thresholds.'
      },
      {
        step: '02',
        title: 'Monitoring Instrumentation & Alert Tuning',
        desc: 'Deploy synthetic probes, APM agents, and SIEM connectors; tune alert noise to eliminate false positives and establish strict escalation policies.'
      },
      {
        step: '03',
        title: 'Shadowing & Operational Transition',
        desc: 'Our engineers co-monitor alongside your team for two weeks, executing incident response rehearsals and refining automated self-healing scripts.'
      },
      {
        step: '04',
        title: '24/7/365 Steady State & Monthly Reviews',
        desc: 'Full 24/7 NOC/SOC coverage with guaranteed SLAs, monthly root-cause analysis (RCA) reporting, and continuous proactive infrastructure optimization.'
      }
    ],
    caseStudies: [
      {
        industry: 'Financial Services & Payments',
        title: '24/7 NOC Operations for Core Payment Gateway',
        outcome: 'Provided continuous 24/7 monitoring across 220 microservices, resolving 89% of alerts proactively and maintaining 99.998% payment transaction uptime.'
      },
      {
        industry: 'Healthcare Enterprise',
        title: 'Managed Database Administration & HIPAA Disaster Recovery',
        outcome: 'Managed 18 terabytes of encrypted clinical databases with automated point-in-time recovery, passing every external HIPAA compliance audit.'
      },
      {
        industry: 'Global Logistics',
        title: 'Self-Healing Automated Runbooks Implementation',
        outcome: 'Automated 70% of routine L1 support tickets with self-healing Ansible runbooks, reducing Mean Time to Resolution (MTTR) from 45 minutes to 90 seconds.'
      }
    ],
    faqs: [
      {
        q: 'What are your contractual response and resolution SLAs?',
        a: 'For P1 Critical incidents (system outage or severe degradation), we guarantee an initial engineer response in under 15 minutes. P2 High incidents are triaged in under 30 minutes, backed by contractual service credits.'
      },
      {
        q: 'How does your team access our production environment securely?',
        a: 'We strictly adhere to zero-trust access: all engineers access your infrastructure through audited bastion gateways or tools like Teleport/HashiCorp Boundary with MFA, just-in-time permissions, and full session video recording.'
      },
      {
        q: 'Will you replace our existing internal operations team?',
        a: 'No. Our managed services are designed to partner with and augment your internal team. We handle the 24/7 overnight shift, off-hours alert triage, and routine maintenance toil so your internal engineers can focus on product innovation.'
      },
      {
        q: 'How do you communicate during an active production incident?',
        a: 'We immediately establish a dedicated bridge (via Slack, Microsoft Teams, or bridge call), post real-time status updates every 15 minutes, and provide a comprehensive Root Cause Analysis (RCA) within 48 hours of resolution.'
      }
    ]
  }
};
