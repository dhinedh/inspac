import { 
  Users, 
  CreditCard, 
  Headphones, 
  UserCheck, 
  BarChart2, 
  Code2, 
  ShieldCheck, 
  GitBranch,
  Zap,
  Lock,
  CheckCircle2,
  Layers,
  Globe,
  Cpu,
  Database,
  Sparkles,
  Clock,
  ArrowRight,
  FileText,
  BarChart3,
  Workflow,
  Key,
  RefreshCw,
  Sliders,
  Smartphone,
  ShieldAlert,
  Server,
  TrendingUp,
  Share2,
  FolderGit2,
  Calendar,
  DollarSign,
  Briefcase,
  Bot,
  PieChart,
  Terminal,
  Activity,
  Award,
  BookOpen,
  Filter,
  Check
} from 'lucide-react';

export const productsData = {
  'pulse-crm': {
    id: 'pulse-crm',
    slug: 'pulse-crm',
    title: 'Inspac PulseCRM',
    tagline: 'Omnichannel Sales & Pipeline Cloud',
    category: 'Sales & CRM',
    zohoRef: 'Inspired by Zoho CRM',
    accentColor: '#2563eb',
    badgeColor: 'bg-blue-600 text-white shadow-blue-500/25',
    bgColor: 'bg-[#edf5ff]',
    heroBgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80',
    heroSummary: 'Comprehensive enterprise customer relationship management. Transform your revenue engine with omnichannel lead-to-deal visibility, sales force automation, process blueprints, predictive AI, and deep CPQ workflows.',
    stats: [
      { label: 'Sales Velocity Boost', value: '+42%' },
      { label: 'Pipeline Visibility', value: '100%' },
      { label: 'Lead Conversion Rate', value: '3.4x' },
      { label: 'Channel Integrations', value: '25+' }
    ],
    // Comprehensive Zoho CRM feature modules
    modules: [
      {
        id: 'sfa',
        title: 'Sales Force Automation',
        icon: Users,
        description: 'Automate repetitive sales tasks, capture every lead, and guide deals to close faster.',
        features: [
          {
            title: 'Lead Management & Auto-Enrichment',
            desc: 'Capture leads automatically from web forms, digital campaigns, trade shows, and APIs. Auto-enrich contact data with social, firmographic, and revenue attributes.',
            tag: 'Core SFA'
          },
          {
            title: 'Visual Deal & Pipeline Stages',
            desc: 'Manage multiple concurrent sales pipelines. Drag-and-drop deals across customized stages with automated stage gates, deal rotting alerts, and probability weighting.',
            tag: 'Pipeline'
          },
          {
            title: 'Contact & Account Hierarchy',
            desc: 'Maintain structured accounts with parent-child entity hierarchies, stakeholder relationship mapping, call logs, past quotes, and cross-department activities.',
            tag: 'Account 360'
          },
          {
            title: 'Territory Management & Quotas',
            desc: 'Segment accounts by geographical territory, industry vertical, or revenue size. Assign target quotas and automatically route accounts to regional sales teams.',
            tag: 'Governance'
          }
        ]
      },
      {
        id: 'process',
        title: 'Process Management & Blueprints',
        icon: Workflow,
        description: 'Standardize sales execution with step-by-step guidance that enforces organizational best practices.',
        features: [
          {
            title: 'Blueprint Guided Selling',
            desc: 'Visually configure sales workflows that prompt reps for mandatory notes, discount approvals, or checklist confirmations before advancing deal stages.',
            tag: 'Blueprint'
          },
          {
            title: 'Multi-Tier Approval Hierarchies',
            desc: 'Set conditional approval chains for custom discount tiers, credit limits, or non-standard contractual clauses routed directly to managers.',
            tag: 'Approvals'
          },
          {
            title: 'Automated Scoring & Qualification Rules',
            desc: 'Assign positive or negative scoring rules based on prospect engagement (email opens, website visits, budget match) to prioritize hot leads.',
            tag: 'Lead Scoring'
          },
          {
            title: 'Scheduled Escalation Actions',
            desc: 'Automatically reassign stagnant leads, send reminder notifications, or alert directors when high-value deals exceed milestone SLA thresholds.',
            tag: 'Escalations'
          }
        ]
      },
      {
        id: 'omnichannel',
        title: 'Omnichannel Engagement',
        icon: Share2,
        description: 'Connect with buyers across their preferred channels with a unified single conversation view.',
        features: [
          {
            title: 'Enterprise Email & 2-Way Sync',
            desc: 'Full bi-directional integration with Microsoft Outlook and Google Workspace. Track email opens, click telemetry, and schedule automated follow-up sequences.',
            tag: 'Email'
          },
          {
            title: 'Built-in Telephony & PBX (Twilio/Amazon)',
            desc: 'Click-to-call directly inside CRM records, automated call recording, voicemail drops, and real-time popups with caller history before answering.',
            tag: 'Telephony'
          },
          {
            title: 'WhatsApp Business & Social Integration',
            desc: 'Receive and reply to WhatsApp queries directly from lead records. Log message history and trigger automated template notifications on order status.',
            tag: 'WhatsApp'
          },
          {
            title: 'Self-Service Customer Portal',
            desc: 'Provide clients with secure, branded access to view pending proposals, download past invoices, and open service support requests.',
            tag: 'Portal'
          }
        ]
      },
      {
        id: 'ai-zia',
        title: 'Zia Predictive AI & Intelligence',
        icon: Sparkles,
        description: 'AI copilot built specifically for sales reps to predict outcomes, suggest next steps, and detect anomalies.',
        features: [
          {
            title: 'Win Probability & Deal Predictions',
            desc: 'Machine learning analyzes historical win-loss patterns, sales cycle length, and rep touchpoints to forecast likelihood of closing.',
            tag: 'Predictive ML'
          },
          {
            title: 'Best Time to Contact Suggestions',
            desc: 'Zia analyzes individual prospect engagement history to tell sales reps the exact hour and day of the week to call or email for maximum response.',
            tag: 'Optimization'
          },
          {
            title: 'Sales Anomaly Detection',
            desc: 'Real-time statistical alerts notifying sales directors of sudden drops in lead velocity, unexpected discounts, or spike in cancellations.',
            tag: 'Anomaly Alert'
          },
          {
            title: 'Intelligent Voice & Chat Assistant',
            desc: 'Ask Zia in conversational natural language to pull up records, log call outcomes on mobile, or draft contextual follow-up emails.',
            tag: 'Conversational'
          }
        ]
      },
      {
        id: 'cpq',
        title: 'CPQ, Quotes & Inventory',
        icon: FileText,
        description: 'Configure, price, and quote complex enterprise orders with multi-currency accuracy.',
        features: [
          {
            title: 'Product Catalog & Price Books',
            desc: 'Maintain complex product catalogs with tiered volume pricing, regional currency price books, and recurring subscription plans.',
            tag: 'Price Books'
          },
          {
            title: 'Automated Quote & Proposal Generator',
            desc: 'Generate branded, pixel-perfect PDF estimates, sales orders, and formal quotations with one click from deal records.',
            tag: 'Quotes'
          },
          {
            title: 'Digital Signatures (e-Sign)',
            desc: 'Integrated digital e-signature capabilities compliant with Singapore ETA and international legal frameworks for legally binding contracts.',
            tag: 'e-Signature'
          },
          {
            title: 'Order-to-Cash Invoicing Integration',
            desc: 'Seamlessly convert accepted quotes into active sales orders and sync them with Inspac Books or SAP ERP for billing.',
            tag: 'Billing Sync'
          }
        ]
      },
      {
        id: 'analytics',
        title: 'Analytics, Forecasting & Canvas UI',
        icon: BarChart3,
        description: 'Design bespoke CRM interfaces and track pipeline health with granular executive reports.',
        features: [
          {
            title: 'Canvas No-Code UI Studio',
            desc: 'Redesign standard CRM record pages visually to match your exact brand colors, layout preferences, and key metrics without writing code.',
            tag: 'Canvas'
          },
          {
            title: 'Dynamic Revenue Forecasting',
            desc: 'Track quota attainment against committed, best-case, and pipeline categories. Drill down by individual sales reps, teams, and product lines.',
            tag: 'Forecast'
          },
          {
            title: 'Gamification & Sales Motivator',
            desc: 'Turn sales activities into friendly team competitions. Award badges, trophies, and display live leaderboards on office screens.',
            tag: 'Gamification'
          },
          {
            title: 'Custom Reports & Cohort Dashboards',
            desc: 'Over 80 pre-built reports, cohort retention funnels, deal conversion velocity, and automated weekly executive summaries via email.',
            tag: 'BI Reports'
          }
        ]
      }
    ],
    integrations: ['Zoho Suite', 'SAP S/4HANA', 'Microsoft 365', 'Google Workspace', 'WhatsApp Business', 'Twilio', 'Stripe', 'Snowflake'],
    useCases: [
      {
        industry: 'BFSI & Wealth Advisory',
        description: 'Manage high-net-worth client pipelines, automated KYC verification checkpoints, and continuous regulatory disclosure records.'
      },
      {
        industry: 'B2B Manufacturing & Distribution',
        description: 'Multi-tiered distributor dealer management, price book tiers, custom contract terms, and dispatch milestone synchronizations.'
      },
      {
        industry: 'Professional IT Services & GCCs',
        description: 'RFP bidding tracking, statement-of-work (SOW) milestone approvals, resource utilization forecasting, and billing triggers.'
      }
    ],
    faqs: [
      {
        q: 'How easily can PulseCRM migrate data from Salesforce or HubSpot?',
        a: 'PulseCRM includes automated migration connectors with field-mapping wizards, preserving lead history, custom deal attributes, historical emails, and call logs with zero downtime.'
      },
      {
        q: 'Does PulseCRM support multi-currency and regional tax compliance?',
        a: 'Yes. PulseCRM features real-time daily currency conversion rates and multi-jurisdiction tax engines suitable for Singapore GST, Australian GST, and Indian GST.'
      },
      {
        q: 'Can we build custom workflows without coding?',
        a: 'Absolutely. A visual blueprint workflow engine allows your sales operations team to configure multi-step approval paths, webhook notifications, and automated task assignments effortlessly.'
      }
    ]
  },

  'books-finance': {
    id: 'books-finance',
    slug: 'books-finance',
    title: 'Inspac Books & Finance',
    tagline: 'Enterprise Accounting & Tax Suite',
    category: 'Finance & Accounting',
    zohoRef: 'Inspired by Zoho Books',
    accentColor: '#059669',
    badgeColor: 'bg-emerald-600 text-white shadow-emerald-500/25',
    bgColor: 'bg-[#ecfdf5]',
    heroBgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80',
    heroSummary: 'Unified corporate accounting and tax compliance platform. Automate multi-currency general ledgers, accounts payable/receivable, automated bank reconciliations, and Singapore InvoiceNow (PEPPOL).',
    stats: [
      { label: 'Reconciliation Speed', value: '5x Faster' },
      { label: 'Tax Audit Compliance', value: '100%' },
      { label: 'Invoice Processing Time', value: '-65%' },
      { label: 'Multi-Currency Support', value: '120+' }
    ],
    modules: [
      {
        id: 'invoicing',
        title: 'Invoicing, Quotes & Client Portal',
        icon: FileText,
        description: 'Create compliant, multilingual invoices and accept digital payments with automated follow-ups.',
        features: [
          {
            title: 'Customizable Tax-Compliant Invoices',
            desc: 'Generate professional invoices customized with your corporate branding, terms, multi-currency exchange rates, and regional tax breakdowns.',
            tag: 'Invoicing'
          },
          {
            title: 'InvoiceNow (PEPPOL) E-Invoicing',
            desc: 'Direct, native connection to Singapore IRAS PEPPOL network for instant digital invoice transmission and accelerated government payouts.',
            tag: 'InvoiceNow'
          },
          {
            title: 'Self-Service Client Portal',
            desc: 'Allow clients to view current statements, download historical invoices, approve estimates, and pay outstanding balances securely online.',
            tag: 'Client Portal'
          },
          {
            title: 'Automated Payment Reminders',
            desc: 'Configure escalating payment reminder sequences via email and SMS before and after due dates to reduce Days Sales Outstanding (DSO).',
            tag: 'Dunning'
          }
        ]
      },
      {
        id: 'banking',
        title: 'Banking & Automated Reconciliation',
        icon: RefreshCw,
        description: 'Direct corporate banking integrations with AI-driven transaction categorization.',
        features: [
          {
            title: 'Live Corporate Bank Feeds',
            desc: 'Direct encrypted feeds from DBS, OCBC, UOB, HSBC, and standard international banks automatically importing statements every morning.',
            tag: 'Bank Feeds'
          },
          {
            title: 'Rule-Based Auto-Reconciliation',
            desc: 'Machine learning auto-matches incoming deposits to open invoices and outgoing wire transfers to vendor purchase orders with 95% accuracy.',
            tag: 'Reconciliation'
          },
          {
            title: 'Bulk Payment Batching & GIRO',
            desc: 'Batch vendor payments into standardized bank payment files (Fast, GIRO, wire) for bulk authorization within corporate online banking.',
            tag: 'Disbursements'
          },
          {
            title: 'Multi-Currency Gain / Loss Engine',
            desc: 'Automatic real-time calculation of realized and unrealized foreign currency exchange gains and losses compliant with IFRS standards.',
            tag: 'Forex'
          }
        ]
      },
      {
        id: 'ap',
        title: 'Payables, Expenses & OCR Scanning',
        icon: CreditCard,
        description: 'Keep track of business expenses, bills, and purchase approvals with optical character recognition.',
        features: [
          {
            title: 'AI Receipt & Invoice OCR',
            desc: 'Scan receipts on mobile or forward vendor PDF bills via email. OCR automatically extracts vendor name, date, invoice number, and line items.',
            tag: 'OCR'
          },
          {
            title: 'Purchase Orders & 3-Way Match',
            desc: 'Create purchase orders, track vendor deliveries, and automatically verify matches against vendor bills and warehouse receipts before payout.',
            tag: '3-Way Match'
          },
          {
            title: 'Multi-Level Expense Approvals',
            desc: 'Route employee travel and operating expenses through department managers with spending threshold policies and digital receipts.',
            tag: 'Approvals'
          },
          {
            title: 'Vendor Credit & Pre-Payments',
            desc: 'Manage supplier advance deposits, credit notes, and automated offsetting against future accounts payable invoices.',
            tag: 'Vendor Credits'
          }
        ]
      },
      {
        id: 'tax',
        title: 'Regional Tax Compliance & Reports',
        icon: ShieldCheck,
        description: 'Built-in tax calculation and reporting engines for Singapore, Australia, and India.',
        features: [
          {
            title: 'Singapore IRAS GST F5 / F7 Reporting',
            desc: 'Automate quarterly GST returns with built-in IRAS validation rules, bad debt relief accounting, and input tax apportionment.',
            tag: 'Singapore GST'
          },
          {
            title: 'Australian ATO BAS Statements',
            desc: 'Calculate GST on sales and purchases, PAYG withholding, and produce figures ready for Business Activity Statement (BAS) lodgment.',
            tag: 'Australia BAS'
          },
          {
            title: 'Indian GST (GSTR-1, GSTR-3B) & E-Way Bills',
            desc: 'Auto-generate GSTR summary returns, HSN/SAC code tracking, reverse charge mechanism (RCM), and direct e-Way bill dispatches.',
            tag: 'India GST'
          },
          {
            title: 'Complete Audit Trail & Versioning',
            desc: 'Immutable audit logs tracking every voucher edit, deletion, user ID, timestamp, and previous state for foolproof external audits.',
            tag: 'Audit Trail'
          }
        ]
      },
      {
        id: 'inventory-projects',
        title: 'Inventory & Project Cost Accounting',
        icon: Layers,
        description: 'Real-time stock level tracking, warehouse reordering, and billable project timesheets.',
        features: [
          {
            title: 'Real-Time Inventory & Low-Stock Alerts',
            desc: 'Track FIFO stock levels across multiple warehouses, set automated reorder points, and generate assembly kits with bill-of-materials.',
            tag: 'Inventory'
          },
          {
            title: 'Project Time Tracking & Billable Hours',
            desc: 'Log hours worked by consultants against specific client deliverables. Convert approved timesheets into detailed invoices instantly.',
            tag: 'Timesheets'
          },
          {
            title: 'Project Profitability Telemetry',
            desc: 'Real-time comparison of estimated vs. actual expenses, billable hours, and net margin contributions for each ongoing project.',
            tag: 'Job Costing'
          },
          {
            title: 'Price Lists & Volume Discounts',
            desc: 'Assign specific customer price lists (wholesale, retail, VIP) that apply predetermined discount tiers automatically on invoices.',
            tag: 'Price Lists'
          }
        ]
      },
      {
        id: 'reporting',
        title: 'Financial Statements & Consolidation',
        icon: TrendingUp,
        description: 'Double-entry general ledger with 50+ financial reports and multi-entity consolidation.',
        features: [
          {
            title: 'Executive Financial Statements',
            desc: 'Generate real-time Profit & Loss, Balance Sheet, Cash Flow Statements, and Trial Balance with one click and customizable date filters.',
            tag: 'Financials'
          },
          {
            title: 'Multi-Entity Ledger Consolidation',
            desc: 'Combine parent and regional operating subsidiary ledgers with automated inter-company balance eliminations and currency conversions.',
            tag: 'Consolidation'
          },
          {
            title: 'Aging Reports (AR / AP)',
            desc: 'Detailed 30, 60, 90, and 120+ day receivable and payable aging reports to manage corporate working capital efficiently.',
            tag: 'Aging'
          },
          {
            title: 'Custom Chart of Accounts & Tagging',
            desc: 'Flexible hierarchical general ledger structure with custom dimension reporting tags (location, cost center, business unit).',
            tag: 'General Ledger'
          }
        ]
      }
    ],
    integrations: ['DBS Bank', 'OCBC', 'UOB', 'Stripe', 'PayPal', 'SAP S/4HANA', 'Inspac PulseCRM', 'QuickBooks Bridge'],
    useCases: [
      {
        industry: 'Cross-Border Trading & Logistics',
        description: 'Multi-currency invoicing, customs duties ledger allocations, and real-time freight cost center tracking.'
      },
      {
        industry: 'SaaS & Subscription Businesses',
        description: 'Automated recurring billing, revenue recognition (IFRS 15 / ASC 606), churn analytics, and automated dunning workflows.'
      },
      {
        industry: 'Regional Corporate Groups',
        description: 'Unified financial health scorecards across Singapore HQ, Indian R&D centers, and Australian sales offices.'
      }
    ],
    faqs: [
      {
        q: 'Is Inspac Books compliant with Singapore IRAS InvoiceNow (PEPPOL)?',
        a: 'Yes, Inspac Books is fully PEPPOL and InvoiceNow ready, allowing direct, cryptographically verified e-invoicing transmission to government agencies and corporate partners.'
      },
      {
        q: 'Can external auditors be granted restricted access during year-end audits?',
        a: 'Yes. You can invite external auditors with read-only scoped access to specific financial years, ledger vouchers, and supporting document attachments.'
      },
      {
        q: 'How does multi-currency gain/loss calculation work?',
        a: 'Realized and unrealized foreign exchange gains and losses are auto-calculated on transaction settlement dates and balance sheet reporting dates according to IFRS standards.'
      }
    ]
  },

  'desk-support': {
    id: 'desk-support',
    slug: 'desk-support',
    title: 'Inspac Desk & Support',
    tagline: 'AI-Powered Service Management',
    category: 'Service & Helpdesk',
    zohoRef: 'Inspired by Zoho Desk',
    accentColor: '#9333ea',
    badgeColor: 'bg-purple-600 text-white shadow-purple-500/25',
    bgColor: 'bg-[#f6f1ff]',
    heroBgImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80',
    heroSummary: 'Enterprise omnichannel customer service and support platform. Deliver exceptional customer experiences with unified ticket routing, multi-tier SLA escalation, AI copilot, and customer knowledge portals.',
    stats: [
      { label: 'First Response SLA', value: '< 15 mins' },
      { label: 'Ticket Resolution Boost', value: '+38%' },
      { label: 'Customer CSAT Score', value: '4.9 / 5' },
      { label: 'Deflection via Self-Serve', value: '45%' }
    ],
    modules: [
      {
        id: 'ticketing',
        title: 'Omnichannel Ticket Management',
        icon: Headphones,
        description: 'Unify incoming requests from all communication channels into a centralized workspace.',
        features: [
          {
            title: 'Unified Ticket Inbox',
            desc: 'Aggregate conversations from Email, Web Forms, WhatsApp, Social Media, Phone Calls, and In-App SDKs into a single agent queue.',
            tag: 'Unified Queue'
          },
          {
            title: 'Collision Detection & Locking',
            desc: 'Real-time indicators show when another agent is viewing or replying to a ticket, preventing duplicate replies and confusion.',
            tag: 'Collision Control'
          },
          {
            title: 'Ticket Splitting & Merging',
            desc: 'Split complex requests into independent sub-tasks or merge multiple tickets from the same customer into a single historical thread.',
            tag: 'Workflow'
          },
          {
            title: 'Automated Round-Robin Routing',
            desc: 'Distribute tickets dynamically by agent skillset, language proficiency, current workload capacity, or strict round-robin rotation.',
            tag: 'Routing'
          }
        ]
      },
      {
        id: 'sla',
        title: 'SLA Management & Contracts',
        icon: Clock,
        description: 'Define service level agreements by customer tier and enforce response milestones.',
        features: [
          {
            title: 'Multi-Tier SLA Escalation Ladders',
            desc: 'Define custom response and resolution SLA targets by customer contract tier (Standard, Silver, Enterprise Platinum) with working hour logic.',
            tag: 'SLA Targets'
          },
          {
            title: 'Automated Escalation Triggers',
            desc: 'If a critical ticket approaches an SLA breach, automatically escalate to senior engineers, notify managers on Slack, and send SMS alerts.',
            tag: 'Escalations'
          },
          {
            title: 'Client Contract Entitlements',
            desc: 'Track support contracts, billable support hours, and warranty expiration dates directly linked to client account profiles.',
            tag: 'Entitlements'
          },
          {
            title: 'Pause SLA Conditions',
            desc: 'Automatically pause SLA countdown clocks when a ticket is waiting on customer input or third-party vendor review.',
            tag: 'SLA Logic'
          }
        ]
      },
      {
        id: 'ai-copilot',
        title: 'Zia AI Customer Service Copilot',
        icon: Sparkles,
        description: 'Artificial intelligence designed to assist human agents and automate customer triage.',
        features: [
          {
            title: 'Sentiment & Frustration Analysis',
            desc: 'AI analyzes incoming messages for negative tone, urgency, or customer dissatisfaction, flagging at-risk accounts for VIP attention.',
            tag: 'Sentiment'
          },
          {
            title: 'Smart Reply & Contextual Drafting',
            desc: 'Generative AI reviews past resolved tickets and knowledge articles to suggest complete, empathetic response drafts to agents.',
            tag: 'Smart Replies'
          },
          {
            title: 'Auto-Tagging & Root Cause Categorization',
            desc: 'Automatically tag incoming inquiries by technical issue, product component, or error code to accelerate triage.',
            tag: 'Auto-Triage'
          },
          {
            title: 'AI Anomaly & Surge Alerts',
            desc: 'Detects unexpected spikes in incoming ticket volume related to specific keywords (e.g. "server down", "login error") immediately.',
            tag: 'Spike Alerts'
          }
        ]
      },
      {
        id: 'self-serve',
        title: 'Self-Service Knowledge Base & Bots',
        icon: Globe,
        description: 'Empower customers to find immediate answers with interactive help centers and conversational bots.',
        features: [
          {
            title: 'Multi-Brand Knowledge Centers',
            desc: 'Publish branded self-service documentation, FAQs, and product manuals with distinct themes and URLs for each product line.',
            tag: 'Knowledge Base'
          },
          {
            title: 'Guided Conversation No-Code Chatbots',
            desc: 'Build interactive decision-tree chatbots that troubleshoot issues, look up order statuses, and collect diagnostics before human handoff.',
            tag: 'Chatbots'
          },
          {
            title: 'Community Forums & Ideation',
            desc: 'Host interactive customer discussion boards where users can ask peer questions, vote on feature requests, and share solutions.',
            tag: 'Community'
          },
          {
            title: 'Deflection Telemetry & Search Analytics',
            desc: 'Analyze search terms that yielded no results to identify gaps in your documentation and continuously improve self-serve deflection.',
            tag: 'Deflection'
          }
        ]
      },
      {
        id: 'productivity',
        title: 'Agent Productivity & Work Modes',
        icon: Sliders,
        description: 'Tools that help support teams resolve dozens of inquiries an hour without burning out.',
        features: [
          {
            title: 'Dynamic Work Modes (Kanban / Countdown)',
            desc: 'View tickets organized by deadline, customer priority, or status in custom visual views designed for fast execution.',
            tag: 'Work Modes'
          },
          {
            title: 'One-Click Macros & Snippets',
            desc: 'Execute complex multi-step actions (update status, assign tag, send canned response, notify team) with a single keyboard shortcut.',
            tag: 'Macros'
          },
          {
            title: 'Built-in Time Tracking & Billing',
            desc: 'Track exact minutes spent on each ticket with automated timers. Mark hours as billable and export records to Inspac Books.',
            tag: 'Time Tracking'
          },
          {
            title: 'Mobile Support Apps (iOS & Android)',
            desc: 'Full-featured mobile apps allowing support leads and engineers to respond to emergency high-priority tickets on call.',
            tag: 'Mobile Desk'
          }
        ]
      },
      {
        id: 'csat-analytics',
        title: 'CSAT Telemetry & Team Analytics',
        icon: BarChart3,
        description: 'In-depth reporting on agent performance, resolution velocity, and customer satisfaction.',
        features: [
          {
            title: 'Automated CSAT Surveys',
            desc: 'Send lightweight 1-click customer satisfaction ratings upon ticket resolution to gauge team performance in real time.',
            tag: 'CSAT'
          },
          {
            title: 'First Contact Resolution (FCR) Tracking',
            desc: 'Measure percentage of issues resolved in a single interaction without requiring customer follow-up or escalations.',
            tag: 'FCR'
          },
          {
            title: 'Agent Productivity Scorecards',
            desc: 'Track individual response times, resolution counts, average handle time (AHT), and customer feedback scores.',
            tag: 'Scorecards'
          },
          {
            title: 'Executive SLA Compliance Dashboards',
            desc: 'High-level executive visual reports showing monthly SLA adherence percentages and volume trends by customer tier.',
            tag: 'Executive Reports'
          }
        ]
      }
    ],
    integrations: ['Inspac PulseCRM', 'Jira Software', 'Slack', 'Microsoft Teams', 'Zendesk Bridge', 'Twilio Voice', 'AWS CloudWatch'],
    useCases: [
      {
        industry: '24/7 Managed IT & Cloud Operations',
        description: 'Strict sub-15 minute SLA enforcement for critical infrastructure incidents, bridge call automation, and root cause analysis (RCA) reporting.'
      },
      {
        industry: 'E-Commerce & Omnichannel Retail',
        description: 'Instant order status inquiries, automated returns processing, and VIP loyalty ticket prioritizing across WhatsApp and web.'
      },
      {
        industry: 'Telecom & Utilities Service Desks',
        description: 'High-volume ticket grouping, automated network outage broadcasts, and regional technician dispatch workflows.'
      }
    ],
    faqs: [
      {
        q: 'Can we create distinct portals for different subsidiaries or brands?',
        a: 'Yes. Inspac Desk supports multi-branding, allowing distinct URLs, themes, knowledge bases, and support email addresses for each business vertical.'
      },
      {
        q: 'How does the AI protect sensitive customer data?',
        a: 'Data masking algorithms scrub credit card numbers, passwords, and PII prior to processing, fully aligning with PCI-DSS and GDPR requirements.'
      },
      {
        q: 'Does it support round-robin and skill-based routing?',
        a: 'Yes. Tickets can be routed by agent language proficiency, technical expertise, current workload capacity, or round-robin rotation.'
      }
    ]
  },

  'people-hrms': {
    id: 'people-hrms',
    slug: 'people-hrms',
    title: 'Inspac People HRMS',
    tagline: 'Modern Workforce & Payroll Operations',
    category: 'Human Resources',
    zohoRef: 'Inspired by Zoho People',
    accentColor: '#ea580c',
    badgeColor: 'bg-orange-600 text-white shadow-orange-500/25',
    bgColor: 'bg-[#fff7ed]',
    heroBgImage: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=80',
    heroSummary: 'Complete employee lifecycle management and human resources information system (HRIS). From paperless onboarding to biometric attendance, automated regional payroll, OKRs, and 360° reviews.',
    stats: [
      { label: 'Payroll Processing Time', value: '-80%' },
      { label: 'Employee Self-Serve Use', value: '96%' },
      { label: 'Onboarding Velocity', value: '2 Days' },
      { label: 'Compliance Audit Rate', value: '100%' }
    ],
    modules: [
      {
        id: 'core-hr',
        title: 'Core HR & Digital Onboarding',
        icon: UserCheck,
        description: 'Centralized employee records, organizational charts, and paperless recruitment onboarding.',
        features: [
          {
            title: 'Unified Employee Database',
            desc: 'Store emergency contacts, tax IDs, banking information, contractual records, and visa documents in a secure, encrypted repository.',
            tag: 'Employee 360'
          },
          {
            title: 'Paperless Digital Onboarding',
            desc: 'Send digital welcome packs, collect e-signed appointment letters, assign company equipment, and automate orientation tasks.',
            tag: 'Onboarding'
          },
          {
            title: 'Interactive Organization Tree',
            desc: 'Dynamic, visual reporting hierarchy illustrating department structures, team reporting lines, and role designations.',
            tag: 'Org Chart'
          },
          {
            title: 'Document Expiry Tracking',
            desc: 'Automated alerts for expiring employment passes (EP/S-Pass in Singapore), work visas, professional certifications, and NDAs.',
            tag: 'Compliance'
          }
        ]
      },
      {
        id: 'attendance',
        title: 'Time, Attendance & Shift Scheduling',
        icon: Clock,
        description: 'Biometric device integrations, mobile geofencing, and automated overtime calculations.',
        features: [
          {
            title: 'Biometric & Facial Hardware Feeds',
            desc: 'Direct integration with physical biometric turnstiles and facial recognition door access devices across office locations.',
            tag: 'Biometrics'
          },
          {
            title: 'GPS Geofenced Mobile Check-ins',
            desc: 'Enable field technicians and remote workers to clock in and out on mobile with GPS perimeter verification and selfie validation.',
            tag: 'Geofencing'
          },
          {
            title: 'Dynamic Shift & Roster Management',
            desc: 'Create rotating 24/7 work shifts, assign night differentials, manage shift swaps, and enforce minimum rest periods.',
            tag: 'Shifts'
          },
          {
            title: 'Automated Overtime & Lateness Rules',
            desc: 'Configurable rules calculate 1.5x/2.0x overtime hours, deduct late arrivals, and generate verified attendance summaries for payroll.',
            tag: 'Overtime'
          }
        ]
      },
      {
        id: 'leave',
        title: 'Leave Management & Approvals',
        icon: Calendar,
        description: 'Custom leave policy engines with automated annual accruals and mobile requests.',
        features: [
          {
            title: 'Custom Regional Leave Types',
            desc: 'Configure statutory annual leave, medical leave, child-care leave, maternity/paternity leave, and unpaid sabbatical allowances.',
            tag: 'Policies'
          },
          {
            title: 'Automated Monthly & Annual Accruals',
            desc: 'Automate pro-rated monthly leave additions, carry-forward limits, encashment calculations, and year-end balance lapses.',
            tag: 'Accruals'
          },
          {
            title: 'Multi-Level Approval Chains',
            desc: 'Route leave applications to reporting managers and project leads with instant mobile push notifications and team calendar sync.',
            tag: 'Approvals'
          },
          {
            title: 'Team Shared Absence Calendar',
            desc: 'Visual shared calendar preventing team understaffing by highlighting overlapping department absences before approval.',
            tag: 'Calendar'
          }
        ]
      },
      {
        id: 'payroll',
        title: 'Regional Statutory Payroll Automation',
        icon: CreditCard,
        description: 'Direct compliance with Singapore CPF/IRAS, Australian Super/PAYG, and Indian statutory rules.',
        features: [
          {
            title: 'Singapore CPF & Statutory Fund Engine',
            desc: 'Auto-calculate monthly CPF employer/employee contributions, CDAC/SINDA/MBMF donations, and produce direct CPF EZPay bank files.',
            tag: 'Singapore CPF'
          },
          {
            title: 'IRAS Auto-Inclusion Scheme (AIS / IR8A)',
            desc: 'Generate annual IR8A and Appendix 8A earnings records and transmit directly to Inland Revenue Authority of Singapore (IRAS).',
            tag: 'IRAS IR8A'
          },
          {
            title: 'Direct Bank GIRO & FAST Files',
            desc: 'Generate encrypted bank salary upload files for DBS IDEAL, OCBC Velocity, UOB Infinity, and standard APAC banking portals.',
            tag: 'Bank GIRO'
          },
          {
            title: 'Itemized Digital Payslips',
            desc: 'Publish encrypted, password-protected digital payslips accessible directly on the employee mobile app complying with MOM laws.',
            tag: 'Payslips'
          }
        ]
      },
      {
        id: 'performance',
        title: 'Performance Management & 360° Reviews',
        icon: TrendingUp,
        description: 'Continuous feedback, goal alignment (OKRs), competency tracking, and annual appraisals.',
        features: [
          {
            title: 'OKR & Goal Management',
            desc: 'Cascade corporate objectives down to individual key results. Track progress with milestone percentages and quarterly checkpoints.',
            tag: 'OKRs'
          },
          {
            title: '360-Degree Peer & Multi-Rater Reviews',
            desc: 'Gather balanced evaluations from peers, direct reports, cross-functional project leads, and external clients.',
            tag: '360 Reviews'
          },
          {
            title: 'Continuous Feedback & 1-on-1 Journals',
            desc: 'Document regular manager-employee touchpoints, record praise badges, and track development plans between annual reviews.',
            tag: 'Continuous Feedback'
          },
          {
            title: 'Salary Revision & Appraisal Cycles',
            desc: 'Run company-wide salary adjustment cycles with 9-box talent matrix calibration, bell-curve distribution, and increment approval gates.',
            tag: 'Appraisal'
          }
        ]
      },
      {
        id: 'ess-cases',
        title: 'Employee Self-Service (ESS) & HR Cases',
        icon: Smartphone,
        description: 'Empower staff with self-service mobile apps and internal HR request ticketing.',
        features: [
          {
            title: 'Full-Featured ESS Mobile App',
            desc: 'Employees clock in, apply for leaves, download payslips, submit tax declarations, and browse company announcements on mobile.',
            tag: 'Mobile App'
          },
          {
            title: 'Internal HR Service Desk (Case Management)',
            desc: 'Confidential ticketing system for employees to ask HR queries regarding benefits, letters of employment, and policy questions.',
            tag: 'HR Helpdesk'
          },
          {
            title: 'Corporate Policy & Knowledge Base',
            desc: 'Centralized repository of company handbooks, travel policies, code of conduct, and insurance claim guidelines.',
            tag: 'Policies'
          },
          {
            title: 'Asset & IT Equipment Tracking',
            desc: 'Track allocation of laptops, security keys, monitors, and company vehicles with serial numbers and return signoffs.',
            tag: 'Assets'
          }
        ]
      }
    ],
    integrations: ['Inspac Books & Finance', 'DBS IDEAL', 'OCBC Velocity', 'LinkedIn Jobs', 'DocuSign', 'Slack', 'Microsoft Teams'],
    useCases: [
      {
        industry: 'Global Capability Centers (GCCs)',
        description: 'Manage cross-border workforce headcounts, international travel per diems, and standardized annual appraisal cycles.'
      },
      {
        industry: 'Consulting & Staff Augmentation',
        description: 'Timesheet tracking against client project codes, automated billing hour exports, and subcontractor milestone signoffs.'
      },
      {
        industry: 'Retail & Hospitality Chains',
        description: 'Dynamic shift scheduling, casual worker hourly payroll runs, and biometric branch check-in enforcement.'
      }
    ],
    faqs: [
      {
        q: 'Does Inspac People support Singapore MOM employment act regulations?',
        a: 'Yes, it natively complies with all Singapore Ministry of Manpower (MOM) standards, including itemized payslips, statutory holiday entitlements, and CPF calculation caps.'
      },
      {
        q: 'Can we sync attendance with our existing door biometric hardware?',
        a: 'Yes. Inspac People supports direct API and database connectors for standard ZKTeco, Suprema, and HID access control devices.'
      },
      {
        q: 'Is payroll data encrypted at rest and in transit?',
        a: 'Yes. All payroll, banking, and employee identity records are encrypted using AES-256 at rest and TLS 1.3 in transit with strict role-based access.'
      }
    ]
  },

  'analytics-bi': {
    id: 'analytics-bi',
    slug: 'analytics-bi',
    title: 'Inspac Analytics BI',
    tagline: 'Visual Business Intelligence & KPI Engine',
    category: 'Data & BI',
    zohoRef: 'Inspired by Zoho Analytics',
    accentColor: '#0284c7',
    badgeColor: 'bg-sky-600 text-white shadow-sky-500/25',
    bgColor: 'bg-[#f0f9ff]',
    heroBgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80',
    heroSummary: 'Self-service modern business intelligence and data analytics. Connect 500+ data sources, blend complex relational schemas, ask natural language questions with Zia AI, and broadcast executive scorecards.',
    stats: [
      { label: 'Pre-Built Connectors', value: '500+' },
      { label: 'Query Performance', value: '< 2s' },
      { label: 'Executive Adoption', value: '98%' },
      { label: 'Automated Reports Sent', value: '1M+' }
    ],
    modules: [
      {
        id: 'connectors',
        title: 'Data Ingestion & 500+ Connectors',
        icon: Database,
        description: 'Extract and sync data from files, databases, cloud lakehouses, and enterprise SaaS apps.',
        features: [
          {
            title: '500+ Native SaaS & App Connectors',
            desc: 'Zero-code sync with Salesforce, Zoho, HubSpot, Jira, Google Ads, Stripe, Shopify, Zendesk, and social media platforms.',
            tag: 'SaaS Connectors'
          },
          {
            title: 'Modern Cloud Lakehouse Sync',
            desc: 'High-speed distributed connectors for Snowflake, Google BigQuery, AWS Redshift, Databricks, and Azure Synapse.',
            tag: 'Lakehouses'
          },
          {
            title: 'Relational & NoSQL Database Live Feeds',
            desc: 'Scheduled or real-time incremental synchronization with PostgreSQL, MySQL, Microsoft SQL Server, Oracle, and MongoDB.',
            tag: 'Databases'
          },
          {
            title: 'Secure On-Premises Local Agent',
            desc: 'Lightweight agent bridge imports data from behind corporate enterprise firewalls without exposing public inbound ports.',
            tag: 'Local Agent'
          }
        ]
      },
      {
        id: 'prep',
        title: 'Data Preparation, Blending & Studio',
        icon: Layers,
        description: 'Cleanse, transform, and merge disparate data models with visual schema designers.',
        features: [
          {
            title: 'Visual Auto-Blending & Joins',
            desc: 'Intelligently identify foreign keys and join CRM lead data with financial ledger data and web analytics without writing SQL.',
            tag: 'Auto-Join'
          },
          {
            title: 'Custom Formulas & Calculated Columns',
            desc: 'Over 250 mathematical, statistical, date-time, and logical functions to create custom KPI metrics (e.g. CAC, LTV, MRR).',
            tag: 'Formulas'
          },
          {
            title: 'SQL Query Studio & Views',
            desc: 'Advanced data engineers can write raw SQL queries, create materialized database views, and build complex CTE pipelines.',
            tag: 'SQL Studio'
          },
          {
            title: 'Data Cleansing & Machine Learning Prep',
            desc: 'Automatically remove duplicates, fill missing values, standardize date formatting, and normalize inconsistent text strings.',
            tag: 'Data Prep'
          }
        ]
      },
      {
        id: 'visuals',
        title: 'Visualization Studio & Dashboards',
        icon: BarChart2,
        description: 'Design beautiful, interactive executive scorecards with over 50 visualization types.',
        features: [
          {
            title: '50+ Chart Types & Heatmaps',
            desc: 'Bar, line, area, bubble, scatter, radar, bullet, funnel, waterfall, dial gauges, and geographic coordinate heatmaps.',
            tag: 'Chart Library'
          },
          {
            title: 'Interactive Cross-Filtering & Drill-Downs',
            desc: 'Click on any chart segment (e.g. a country or sales rep) to instantly filter all other widgets on the dashboard dynamically.',
            tag: 'Interactivity'
          },
          {
            title: 'KPI Scorecard Widgets with Variance',
            desc: 'Bold headline metric blocks displaying current numbers, target goals, and color-coded percentage variance vs. previous periods.',
            tag: 'Scorecards'
          },
          {
            title: 'Custom CSS Themes & Dark Mode',
            desc: 'Fully customize dashboard colors, fonts, border radii, and switch between light and high-contrast dark modes.',
            tag: 'Themes'
          }
        ]
      },
      {
        id: 'ask-zia',
        title: 'Zia AI Natural Language & Augmented Analytics',
        icon: Sparkles,
        description: 'Conversational natural language querying, auto-analysis, and predictive forecasting.',
        features: [
          {
            title: 'Ask Zia (Natural Language Search)',
            desc: 'Type plain English questions like "Show Q3 revenue by country as a bar chart" and Zia generates the exact visualization instantly.',
            tag: 'Natural Language'
          },
          {
            title: 'Auto-Analysis & Smart Insights',
            desc: 'Feed a new dataset and Zia automatically generates relevant dashboards, correlation matrices, and key performance summaries.',
            tag: 'Auto-Gen'
          },
          {
            title: 'Predictive Machine Learning Forecasting',
            desc: 'Select future time periods (30, 60, 90 days) and Zia plots projected sales trends with statistical confidence intervals.',
            tag: 'Forecasting'
          },
          {
            title: 'What-If Scenario Simulation',
            desc: 'Adjust interactive sliders (e.g. price increase, ad spend reduction) to simulate expected impact on net profit margins.',
            tag: 'Simulation'
          }
        ]
      },
      {
        id: 'governance',
        title: 'Fine-Grained Security & Row-Level Governance',
        icon: Lock,
        description: 'Enterprise data governance ensuring each stakeholder only accesses approved datasets.',
        features: [
          {
            title: 'Row & Column Level Security Rules',
            desc: 'A single dashboard automatically filters data so the Singapore manager only sees Singapore records and the Australia manager sees AU data.',
            tag: 'Row Security'
          },
          {
            title: 'Granular User Roles & Permissions',
            desc: 'Assign roles such as Viewer, Contributor, Analyst, or Workspace Administrator with strict export and share permissions.',
            tag: 'RBAC'
          },
          {
            title: 'Audit Logging & Access Telemetry',
            desc: 'Detailed immutable logs recording who viewed, exported, or edited which report, from what IP address and timestamp.',
            tag: 'Audit Logs'
          },
          {
            title: 'SOC 2 & ISO 27001 Certified Cloud',
            desc: 'End-to-end AES-256 encryption at rest, TLS 1.3 in transit, and geographic data residency options across Singapore and Australia.',
            tag: 'Compliance'
          }
        ]
      },
      {
        id: 'sharing',
        title: 'Collaboration, Alerts & Embedded BI',
        icon: Share2,
        description: 'Share insights across teams or embed live dashboards directly inside your SaaS product.',
        features: [
          {
            title: 'Automated Email & Slack Scheduled Reports',
            desc: 'Deliver automated PDF/Excel summaries every Monday morning to department heads or broadcast to private Slack channels.',
            tag: 'Scheduled Export'
          },
          {
            title: 'Data-Driven Anomaly Alerts',
            desc: 'Set custom thresholds (e.g. "Alert if daily signups drop below 100") to trigger instant SMS or email notifications.',
            tag: 'Alerts'
          },
          {
            title: 'Interactive Live Slide Presentations',
            desc: 'Present full-screen interactive dashboards in boardroom meetings where live filters and drill-downs can be clicked during Q&A.',
            tag: 'Presentations'
          },
          {
            title: 'White-Label Embedded Analytics SDK',
            desc: 'Embed dashboards inside your own SaaS web app with custom domains, your logo, and seamless single sign-on (SSO).',
            tag: 'Embedded BI'
          }
        ]
      }
    ],
    integrations: ['Snowflake', 'BigQuery', 'AWS Redshift', 'Databricks', 'SAP S/4HANA', 'Inspac PulseCRM', 'Inspac Books'],
    useCases: [
      {
        industry: 'Executive C-Suite Governance',
        description: 'Single pane of glass tracking revenue velocity, EBITDA margins, cash burn rate, and employee productivity in real time.'
      },
      {
        industry: 'Supply Chain & Inventory Management',
        description: 'Warehouse stock aging heatmaps, reorder threshold triggers, and supplier on-time in-full (OTIF) fulfillment benchmarking.'
      },
      {
        industry: 'Fintech & Risk Monitoring',
        description: 'Real-time transaction anomaly detection, chargeback risk indicators, and regulatory capital adequacy ratio telemetry.'
      }
    ],
    faqs: [
      {
        q: 'Can reports be embedded into our internal employee portal or SaaS app?',
        a: 'Yes. Inspac Analytics BI offers white-label embedded analytics with single sign-on (SSO) and customizable CSS themes.'
      },
      {
        q: 'Can it handle millions of rows without performance lag?',
        a: 'Yes. In-memory columnar database caching and distributed query pushing deliver sub-second response times even on large data sets.'
      },
      {
        q: 'Do we need a dedicated data engineering team to set it up?',
        a: 'No. With pre-built data models and ready-to-use executive templates for CRM, Finance, and Support, you can launch dashboards within days.'
      }
    ]
  },

  'creator-studio': {
    id: 'creator-studio',
    slug: 'creator-studio',
    title: 'Inspac Creator Studio',
    tagline: 'Enterprise Low-Code App Platform',
    category: 'Low-Code Engineering',
    zohoRef: 'Inspired by Zoho Creator',
    accentColor: '#6366f1',
    badgeColor: 'bg-indigo-600 text-white shadow-indigo-500/25',
    bgColor: 'bg-[#f1edff]',
    heroBgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80',
    heroSummary: 'Enterprise low-code application development platform. Design relational databases, drag-and-drop business forms, automate complex workflows with Deluge, and auto-deploy native iOS and Android apps with 10x velocity.',
    stats: [
      { label: 'Build Velocity', value: '10x Faster' },
      { label: 'Cost Reduction', value: '60%' },
      { label: 'Cross-Platform Native', value: 'iOS & Web' },
      { label: 'Security & Compliance', value: 'SOC 2 Ready' }
    ],
    modules: [
      {
        id: 'builder',
        title: 'Visual Form & Relational Data Builder',
        icon: Code2,
        description: 'Design responsive multi-tab forms and relational database models visually.',
        features: [
          {
            title: 'Drag-and-Drop Form Elements',
            desc: 'Over 30 field types: text, lookup relations, sub-forms, file uploaders, signature pads, barcode scanners, and GPS coordinates.',
            tag: 'Form Studio'
          },
          {
            title: 'Visual Relational Schema Designer',
            desc: 'Model complex entity-relationship diagrams (one-to-many, many-to-many) with foreign keys and cascading delete rules.',
            tag: 'Schema'
          },
          {
            title: 'Dynamic Conditional UI Rules',
            desc: 'Show, hide, enable, or mark fields as mandatory based on previous selections in real time as the user fills the form.',
            tag: 'UI Logic'
          },
          {
            title: 'Multi-Page Wizard Forms',
            desc: 'Break lengthy applications into progressive multi-step wizard stages with progress bars and draft autosaving.',
            tag: 'Wizards'
          }
        ]
      },
      {
        id: 'deluge',
        title: 'Deluge Scripting & Business Logic',
        icon: Terminal,
        description: 'Powerful low-code scripting engine that turns business requirements into functional code.',
        features: [
          {
            title: 'Deluge Low-Code Scripting Engine',
            desc: 'Write readable business logic with point-and-click code builders or direct scripting to execute complex calculations and validations.',
            tag: 'Deluge'
          },
          {
            title: 'Event-Driven Form & Field Triggers',
            desc: 'Execute scripts on form load, user input validation, record submission, or record deletion with instant client-side feedback.',
            tag: 'Triggers'
          },
          {
            title: 'Background Schedulers & Cron Jobs',
            desc: 'Schedule automated background jobs to run hourly, daily, or monthly to update statuses, generate monthly summaries, or clean data.',
            tag: 'Schedulers'
          },
          {
            title: 'Custom REST API Functions',
            desc: 'Expose Deluge functions as secure REST API endpoints that third-party systems can query with token-based authentication.',
            tag: 'API Endpoints'
          }
        ]
      },
      {
        id: 'mobile',
        title: 'Instant Native Mobile Deployment',
        icon: Smartphone,
        description: 'Every application built on Creator Studio automatically functions as a native mobile app.',
        features: [
          {
            title: 'Auto-Generated iOS & Android Apps',
            desc: 'No separate mobile coding required. Forms, views, and dashboards render natively on mobile with optimized touch controls.',
            tag: 'Native Apps'
          },
          {
            title: 'Offline Data Collection & Auto-Sync',
            desc: 'Field agents can capture inspection forms, photos, and signatures offline. Data syncs automatically when signal is restored.',
            tag: 'Offline'
          },
          {
            title: 'Hardware Device Sensor Integration',
            desc: 'Directly utilize device cameras for barcode/QR scanning, GPS for location stamping, and touchscreens for digital signatures.',
            tag: 'Hardware'
          },
          {
            title: 'Targeted Mobile Push Notifications',
            desc: 'Dispatch immediate push notifications to specific mobile users when critical approvals or tasks are assigned.',
            tag: 'Push Alerts'
          }
        ]
      },
      {
        id: 'portals',
        title: 'Portals for Vendors & Customers',
        icon: Globe,
        description: 'Secure external access for suppliers, contractors, and clients to submit requests.',
        features: [
          {
            title: 'Branded External User Portals',
            desc: 'Deploy dedicated customer or vendor portals with custom login screens, company logo, and customized role permissions.',
            tag: 'Portals'
          },
          {
            title: 'Self-Registration & Verification',
            desc: 'Allow vendors or partners to sign up with email verification, document uploads, and automated approval queues.',
            tag: 'Registration'
          },
          {
            title: 'Integrated Payment Gateway Nodes',
            desc: 'Accept payments inside custom applications via Stripe, PayPal, and regional payment processors directly upon submission.',
            tag: 'Payments'
          },
          {
            title: 'Restricted Data Scoping',
            desc: 'Ensure external portal users can strictly only view and edit their own submitted records and orders.',
            tag: 'Data Scoping'
          }
        ]
      },
      {
        id: 'governance-sec',
        title: 'Enterprise Sandboxing & Governance',
        icon: Lock,
        description: 'Multi-stage development environments, version control, and granular role permissions.',
        features: [
          {
            title: 'Development, Staging & Prod Environments',
            desc: 'Build and test updates in isolated sandbox environments with 1-click zero-downtime deployment to production.',
            tag: 'Sandboxing'
          },
          {
            title: 'Application Revision & Rollback',
            desc: 'Track full version history of form changes, script modifications, and roll back to previous stable versions with one click.',
            tag: 'Version Control'
          },
          {
            title: 'Granular Field-Level Security',
            desc: 'Specify read, write, or hide permissions for specific roles down to individual fields (e.g. salary hidden from line managers).',
            tag: 'Field Security'
          },
          {
            title: 'Automated Daily Cloud Backups',
            desc: 'Continuous database snapshotting with 30-day retention and single-click full restore capabilities.',
            tag: 'Backups'
          }
        ]
      },
      {
        id: 'views-reports',
        title: 'Custom Reports, Kanban & Dashboards',
        icon: Sliders,
        description: 'Display submitted data in tables, kanban boards, calendars, and timeline charts.',
        features: [
          {
            title: 'Kanban, Grid & Calendar Views',
            desc: 'Display records as visual Kanban boards with drag-and-drop status updates, tabular grids, or interactive event calendars.',
            tag: 'Views'
          },
          {
            title: 'Pivot Charts & Summary Widgets',
            desc: 'Assemble analytical dashboard pages with real-time KPI metrics, doughnut charts, and progress bars without extra software.',
            tag: 'Dashboards'
          },
          {
            title: 'One-Click PDF & Excel Export',
            desc: 'Download filtered records as structured Excel spreadsheets, CSV files, or styled printable PDF reports.',
            tag: 'Export'
          },
          {
            title: 'Custom Record Print Templates',
            desc: 'Design beautiful printable HTML document templates for purchase orders, inspection badges, and compliance certificates.',
            tag: 'Templates'
          }
        ]
      }
    ],
    integrations: ['Inspac PulseCRM', 'SAP S/4HANA', 'Twilio', 'Stripe', 'Google Maps API', 'Microsoft 365', 'GitHub'],
    useCases: [
      {
        industry: 'Construction & Facility Management',
        description: 'Site safety inspection checklists, material requisition approvals, incident logging, and contractor badge compliance.'
      },
      {
        industry: 'Pharmaceutical & Clinical Trials',
        description: 'Strict 21 CFR Part 11 compliant audit trail forms, sample collection tracking, and clinical investigator signoffs.'
      },
      {
        industry: 'Government & Public Sector Operations',
        description: 'Citizen service request portals, permit application workflows, and internal departmental task routing.'
      }
    ],
    faqs: [
      {
        q: 'How does Creator Studio handle app deployment and version control?',
        a: 'It includes integrated multi-stage development, staging, and production environments with single-click zero-downtime rollback capabilities.'
      },
      {
        q: 'Can applications work offline in remote locations?',
        a: 'Yes. The mobile client stores form submissions and photos locally on device and automatically syncs when internet connectivity is re-established.'
      },
      {
        q: 'Is our custom code and data locked in?',
        a: 'No. You have complete data ownership with automated daily backups, full SQL/JSON export capabilities, and open REST endpoints.'
      }
    ]
  },

  'vault-directory': {
    id: 'vault-directory',
    slug: 'vault-directory',
    title: 'Inspac Vault & Directory',
    tagline: 'Zero-Trust Secrets & Identity Governance',
    category: 'Security & Identity',
    zohoRef: 'Inspired by Zoho Vault / Directory',
    accentColor: '#be123c',
    badgeColor: 'bg-rose-700 text-white shadow-rose-600/25',
    bgColor: 'bg-[#fff0f4]',
    heroBgImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2000&q=80',
    heroSummary: 'Enterprise password management, single sign-on (SSO), and zero-trust privileged access management (PAM). Protect digital assets with client-side AES-256 encryption, MFA, and automated password rotation.',
    stats: [
      { label: 'Encryption Standard', value: 'AES-256' },
      { label: 'Audit Trail Pass Rate', value: '100%' },
      { label: 'SSO Protocol Support', value: 'SAML & OIDC' },
      { label: 'Zero-Knowledge Model', value: 'Yes' }
    ],
    modules: [
      {
        id: 'secrets',
        title: 'Zero-Knowledge Secrets & Password Vault',
        icon: Key,
        description: 'Store enterprise credentials, SSH keys, certificates, and API tokens with zero-knowledge encryption.',
        features: [
          {
            title: 'Client-Side AES-256 Encryption',
            desc: 'Passphrases never leave the user browser. Master encryption keys are derived on-device, ensuring even Inspac engineers cannot view your secrets.',
            tag: 'AES-256'
          },
          {
            title: 'Centralized Corporate Secret Store',
            desc: 'Secure repository for web logins, database credentials, software license keys, SSH keys, SSL certificates, and financial account details.',
            tag: 'Secrets Store'
          },
          {
            title: 'Granular Role-Based Secret Sharing',
            desc: 'Share credentials with specific teams or departments without revealing plaintext passwords, using browser autofill.',
            tag: 'Masked Sharing'
          },
          {
            title: 'Password Generator & Strength Auditor',
            desc: 'Enforce corporate password complexity policies (length, special characters) and audit vault for weak, reused, or compromised passwords.',
            tag: 'Password Hygiene'
          }
        ]
      },
      {
        id: 'sso-mfa',
        title: 'Single Sign-On (SSO) & Multi-Factor Auth',
        icon: ShieldCheck,
        description: 'Federated identity and one-click access across all enterprise cloud and on-premise applications.',
        features: [
          {
            title: 'SAML 2.0 & OIDC Cloud Single Sign-On',
            desc: 'One-click authenticated access to hundreds of pre-integrated enterprise SaaS tools (AWS, Salesforce, Microsoft 365, Inspac Suite).',
            tag: 'SSO'
          },
          {
            title: 'Multi-Factor Authentication (MFA / 2FA)',
            desc: 'Mandate secondary verification via Authenticator Apps (TOTP), SMS/Voice OTP, biometric passkeys, or hardware YubiKeys.',
            tag: 'MFA'
          },
          {
            title: 'Context-Aware Adaptive Authentication',
            desc: 'Detect anomalous logins based on geographical location, unknown IP address, or odd hours, prompting additional MFA challenges.',
            tag: 'Adaptive Auth'
          },
          {
            title: 'Unified App Launchpad Dashboard',
            desc: 'Clean corporate app portal where employees can launch all authorized SaaS tools without remembering individual passwords.',
            tag: 'Launchpad'
          }
        ]
      },
      {
        id: 'pam',
        title: 'Privileged Access Management (PAM) & JIT',
        icon: Lock,
        description: 'Control, monitor, and record privileged administrator access to production servers and databases.',
        features: [
          {
            title: 'Automated Password & Key Rotation',
            desc: 'Automatically rotate root passwords, database credentials, and cloud API access keys on strict 30, 60, or 90-day schedules.',
            tag: 'Auto-Rotation'
          },
          {
            title: 'Just-In-Time (JIT) Temporary Access',
            desc: 'Grant time-bound (e.g. 2-hour) administrative access to production systems that automatically revokes upon expiration.',
            tag: 'JIT Access'
          },
          {
            title: 'Dual-Approval Access Workflows',
            desc: 'Require designated security officer sign-off before engineers can check out high-risk infrastructure credentials.',
            tag: 'Dual Approvals'
          },
          {
            title: 'Emergency Break-Glass Recovery',
            desc: 'Secure multi-admin emergency recovery protocol to access critical infrastructure in the event of unexpected disaster.',
            tag: 'Break-Glass'
          }
        ]
      },
      {
        id: 'compliance-audit',
        title: 'Audit Logging & SIEM Integration',
        icon: FileText,
        description: 'Immutable access telemetry satisfying PCI-DSS v4.0, ISO 27001, and SOC 2 requirements.',
        features: [
          {
            title: 'Immutable Audit Trail Telemetry',
            desc: 'Every secret access, password view, modification, and sharing event is recorded with non-repudiable timestamp, user ID, and IP address.',
            tag: 'Audit Logs'
          },
          {
            title: 'Real-Time SIEM Syslog Export',
            desc: 'Stream security events in real time to corporate SIEM tools like Splunk, Datadog, Microsoft Sentinel, and AWS CloudWatch.',
            tag: 'SIEM Export'
          },
          {
            title: 'PCI-DSS v4.0 Compliance Scorecard',
            desc: 'Dedicated compliance report validating satisfaction of PCI-DSS requirements 7 and 8 (access restriction and unique ID assignment).',
            tag: 'PCI-DSS'
          },
          {
            title: 'User Activity & Stale Account Reports',
            desc: 'Identify dormant user accounts, inactive shared folders, and unrotated credentials to minimize attack surfaces.',
            tag: 'Governance'
          }
        ]
      },
      {
        id: 'directory-sync',
        title: 'Active Directory & Identity Sync',
        icon: FolderGit2,
        description: 'Bi-directional synchronization with Microsoft Active Directory, Okta, and Google Workspace.',
        features: [
          {
            title: 'Microsoft Entra ID / Active Directory Sync',
            desc: 'Automatically import users, security groups, and organizational units directly from on-premise AD or Microsoft Entra ID.',
            tag: 'AD Sync'
          },
          {
            title: 'Automated SCIM User Provisioning',
            desc: 'When an employee is added or removed in HR, SCIM automatically creates or revokes all their software access in real time.',
            tag: 'SCIM'
          },
          {
            title: 'Google Workspace & Okta Federation',
            desc: 'Federate identity with Google Workspace or Okta for seamless cross-platform single sign-on authentication.',
            tag: 'Federation'
          },
          {
            title: 'Instant Offboarding Killswitch',
            desc: 'Deactivating an employee in the directory instantly revokes all active SSO sessions and locks them out of shared passwords.',
            tag: 'Killswitch'
          }
        ]
      },
      {
        id: 'apps-extensions',
        title: 'Browser Extensions & Mobile Apps',
        icon: Globe,
        description: 'Secure, frictionless user experience on Chrome, Edge, Safari, iOS, and Android.',
        features: [
          {
            title: 'Zero-Click Browser Autofill',
            desc: 'Secure extensions for Chrome, Edge, Safari, and Firefox automatically fill credentials and prompt to save new logins.',
            tag: 'Autofill'
          },
          {
            title: 'Biometric Mobile Access',
            desc: 'Unlock mobile vault using FaceID or fingerprint recognition on iOS and Android with offline encrypted storage.',
            tag: 'Biometric App'
          },
          {
            title: 'In-Browser Password Generation',
            desc: 'Suggests cryptographically secure passwords during account registration directly inside the browser dropdown.',
            tag: 'Generator'
          },
          {
            title: 'Clipboard Auto-Clear Protection',
            desc: 'Automatically wipes copied passwords from system memory after 30 seconds to prevent clipboard snooping malware.',
            tag: 'Security'
          }
        ]
      }
    ],
    integrations: ['Azure Entra ID', 'Okta', 'Active Directory', 'AWS IAM', 'Google Workspace', 'HashiCorp Vault', 'Splunk', 'Inspac Suite'],
    useCases: [
      {
        industry: 'PCI-DSS v4.0 Certified Environments',
        description: 'Isolation of Cardholder Data Environment (CDE) administrative access, root credentials, and multi-factor authorization enforcement.'
      },
      {
        industry: 'DevOps & Cloud Infrastructure',
        description: 'Centralized secrets management for Terraform IaC scripts, CI/CD pipeline access keys, and production database passwords.'
      },
      {
        industry: 'Healthcare & Patient Data Systems',
        description: 'HIPAA and regional privacy compliance ensuring clinical staff access medical systems with audited role-based security.'
      }
    ],
    faqs: [
      {
        q: 'Can Inspac recover our master encryption key if lost?',
        a: 'Because we operate on a true zero-knowledge architecture, we never store or transmit your master key. Emergency break-glass recovery kits are issued to designated administrators during setup.'
      },
      {
        q: 'How does it help us pass PCI-DSS v4.0 audits?',
        a: 'It directly fulfills requirements 7 and 8 of PCI-DSS v4.0, including multi-factor authentication, strong password complexity enforcement, and unalterable access logs.'
      },
      {
        q: 'What happens when an employee departs the company?',
        a: 'With Active Directory sync, deactivating an employee immediately revokes all their SaaS SSO sessions, vault access, and shared password privileges in real time.'
      }
    ]
  },

  'flow-automation': {
    id: 'flow-automation',
    slug: 'flow-automation',
    title: 'Inspac Flow Automation',
    tagline: 'Cross-Application Integration Bus',
    category: 'Integration & iPaaS',
    zohoRef: 'Inspired by Zoho Flow',
    accentColor: '#f59e0b',
    badgeColor: 'bg-amber-500 text-white shadow-amber-500/25',
    bgColor: 'bg-[#fff5e9]',
    heroBgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80',
    heroSummary: 'Enterprise integration platform as a service (iPaaS). Connect disparate ERPs, CRMs, cloud databases, and bespoke webhooks with a visual drag-and-drop workflow canvas, custom Deluge scripting, and guaranteed message delivery.',
    stats: [
      { label: 'Pre-Built App Triggers', value: '600+' },
      { label: 'Executions Per Month', value: '10M+' },
      { label: 'Integration Setup Time', value: '< 1 Hour' },
      { label: 'Guaranteed Delivery', value: '99.99%' }
    ],
    modules: [
      {
        id: 'canvas',
        title: 'Visual Workflow Builder & Canvas',
        icon: GitBranch,
        description: 'Connect systems visually with intuitive drag-and-drop nodes and automated data mapping.',
        features: [
          {
            title: 'Drag-and-Drop Workflow Canvas',
            desc: 'Build complex multi-step cross-application automation flows on an infinite visual canvas with zoom and pan controls.',
            tag: 'Canvas'
          },
          {
            title: 'Visual Data Mapping Studio',
            desc: 'Map incoming JSON attributes to destination schema fields with point-and-click ease and inline sample payload previews.',
            tag: 'Data Mapping'
          },
          {
            title: 'Variable Storage & Global State',
            desc: 'Persist custom variables across multiple steps to accumulate counters, calculate totals, and reference data across steps.',
            tag: 'Variables'
          },
          {
            title: 'Test & Debug Sandbox Console',
            desc: 'Execute individual nodes with mock test payloads to verify data transformations before deploying the workflow live.',
            tag: 'Debugger'
          }
        ]
      },
      {
        id: 'connectors',
        title: '600+ Pre-Built App Connectors',
        icon: Layers,
        description: 'Native plug-and-play triggers and actions for enterprise SaaS and cloud software.',
        features: [
          {
            title: '600+ Pre-Built App Connectors',
            desc: 'Pre-configured integrations for SAP S/4HANA, Salesforce, Inspac Suite, Slack, Stripe, AWS S3, Shopify, Google, and Jira.',
            tag: 'Connector Hub'
          },
          {
            title: 'Standardized OAuth 2.0 Auth Vault',
            desc: 'Centrally manage encrypted API keys, OAuth 2.0 refresh tokens, and basic credentials across all integrations.',
            tag: 'Auth Vault'
          },
          {
            title: 'Pre-Built Workflow Templates',
            desc: 'Over 200 ready-to-deploy enterprise recipes for lead sync, invoice generation, ticket escalation, and user provisioning.',
            tag: 'Recipes'
          },
          {
            title: 'Community & Custom Connectors',
            desc: 'Create custom app connectors with OpenAPI / Swagger specifications and share them across your organization.',
            tag: 'OpenAPI'
          }
        ]
      },
      {
        id: 'logic',
        title: 'Branching, Logic & Custom Code',
        icon: Sliders,
        description: 'Implement complex business rules with nested conditional branches and code execution.',
        features: [
          {
            title: 'Conditional Branching (IF / ELSE)',
            desc: 'Route execution paths based on custom conditions (e.g. order value > $10,000, customer region = APAC, fraud score).',
            tag: 'Branching'
          },
          {
            title: 'Custom Deluge & JavaScript Execution',
            desc: 'Execute bespoke code snippets directly inside flow steps for complex string manipulation, regex, and mathematical logic.',
            tag: 'Code Steps'
          },
          {
            title: 'Batch Looping & Array Iteration',
            desc: 'Loop over arrays of line items, records, or files with concurrency controls and accumulator aggregation.',
            tag: 'Iteration'
          },
          {
            title: 'Delay & Scheduled Timer Nodes',
            desc: 'Pause execution for a specified duration (e.g. wait 3 days) or hold until a specific timestamp before proceeding.',
            tag: 'Timers'
          }
        ]
      },
      {
        id: 'webhooks',
        title: 'Webhooks & Custom REST API Nodes',
        icon: Zap,
        description: 'Connect internal proprietary systems and listen for instantaneous real-time events.',
        features: [
          {
            title: 'Instant Inbound Webhook Triggers',
            desc: 'Generate secure HTTPS webhook endpoints that trigger flows instantly when incoming payloads arrive from external systems.',
            tag: 'Webhooks'
          },
          {
            title: 'Custom HTTP Request Actions',
            desc: 'Make arbitrary RESTful calls (GET, POST, PUT, PATCH, DELETE) with custom headers, body payloads, and basic/bearer auth.',
            tag: 'REST Actions'
          },
          {
            title: 'Webhook Signature Verification',
            desc: 'Cryptographically verify HMAC SHA-256 signatures on incoming webhooks (e.g. Stripe, GitHub) to ensure authenticity.',
            tag: 'HMAC Verify'
          },
          {
            title: 'Response Formatting & Webhook Replies',
            desc: 'Return custom HTTP status codes and synchronous JSON response bodies back to the calling webhook client.',
            tag: 'Sync Reply'
          }
        ]
      },
      {
        id: 'reliability',
        title: 'Error Handling, Retries & Queues',
        icon: RefreshCw,
        description: 'Guaranteed message delivery with automated exponential retries and dead-letter queues.',
        features: [
          {
            title: 'Automatic Exponential Backoff Retries',
            desc: 'If a destination API experiences temporary rate limits or 500 errors, Flow automatically retries with intelligent backoff.',
            tag: 'Auto-Retry'
          },
          {
            title: 'Dead-Letter Queues & Manual Replay',
            desc: 'Failed executions are caught in an inspection queue where developers can review errors, fix data, and replay with one click.',
            tag: 'DLQ'
          },
          {
            title: 'Instant Incident Alerts (Slack / SMS)',
            desc: 'Trigger immediate alerts in technical Slack channels or send emails to system administrators when workflows fail.',
            tag: 'Alerts'
          },
          {
            title: 'Rate-Limiting & Concurrency Controls',
            desc: 'Throttle execution speeds to match downstream API limits and prevent overloading legacy on-premise databases.',
            tag: 'Throttling'
          }
        ]
      },
      {
        id: 'telemetry-logs',
        title: 'Step-by-Step Payload Telemetry & Logs',
        icon: BarChart3,
        description: 'Comprehensive historical execution logs with full input/output JSON inspection.',
        features: [
          {
            title: 'Full Payload History & Inspector',
            desc: 'Inspect exact incoming and outgoing JSON payloads for every single step of every historical execution run.',
            tag: 'Payload Logs'
          },
          {
            title: 'Historical Search & Filtering',
            desc: 'Search millions of execution logs by order ID, customer email, date range, or execution status to diagnose issues.',
            tag: 'Log Search'
          },
          {
            title: 'Step Duration & Latency Metrics',
            desc: 'Identify bottlenecks in your integration pipelines with millisecond-accurate timing breakdown for every node.',
            tag: 'Latency Metrics'
          },
          {
            title: 'Flow Versioning & Audit Logs',
            desc: 'Track which team member modified or activated each workflow, with automated revision backups and rollbacks.',
            tag: 'Version Control'
          }
        ]
      }
    ],
    integrations: ['Inspac PulseCRM', 'Inspac Books', 'SAP S/4HANA', 'Oracle Cloud', 'Shopify Plus', 'Stripe', 'Kafka', 'AWS Lambda'],
    useCases: [
      {
        industry: 'Enterprise E-Commerce & Retail',
        description: 'Sync online storefront orders instantly with warehouse ERP inventories, generate automated invoices, and trigger courier shipping labels.'
      },
      {
        industry: 'Multi-Cloud Data Orchestration',
        description: 'Extract incremental updates from transactional databases and stream them into modern cloud data lakehouses like Snowflake and BigQuery.'
      },
      {
        industry: 'Customer Lifecycle Automation',
        description: 'When a deal closes in PulseCRM, automatically provision user accounts, create billing profiles in Books, and send welcome notifications in Slack.'
      }
    ],
    faqs: [
      {
        q: 'Can we connect internal legacy databases behind a corporate firewall?',
        a: 'Yes. Inspac Flow provides lightweight on-premise integration agent bridges that securely establish outbound encrypted tunnels without opening inbound firewall ports.'
      },
      {
        q: 'How does Flow handle large payload volumes and concurrency spikes?',
        a: 'The serverless distributed architecture scales automatically during Black Friday surges or month-end processing with guaranteed message ordering and deduplication.'
      },
      {
        q: 'Can we write custom JavaScript or Python scripts inside a flow?',
        a: 'Yes. Custom code script nodes allow your engineering teams to execute complex data transformations, cryptography, or bespoke data enrichment routines.'
      }
    ]
  }
};
