export interface ProjectItem {
  slug: string
  name: string
  category: string
  client: string
  summary: string
  description: string
  status: 'In development' | 'Production' | 'Exploration'
  url?: string
  tags: string[]
  metrics?: { label: string; value: string }[]
  architecture?: {
    frontend: string
    backend: string
    database: string
    infrastructure: string
  }
  keyFeatures: string[]
}

export const projects: ProjectItem[] = [
  {
    slug: 'sammena',
    name: 'Sammena Pre & Primary School',
    category: 'Education technology',
    client: 'Sammena Educational Complex',
    summary: 'A school website and School Information Management System (SIMS) for clearer public information, student records, fee tracking, and academic workflows.',
    description: 'Built to replace paper-heavy school administration with a unified web portal. Features student enrollment pipelines, automated fee receipt generation, grading records, parent announcements, and responsive public portals.',
    status: 'In development',
    url: 'https://sammena.altavox.space',
    tags: ['Web systems', 'SIMS', 'Content workflows', 'PostgreSQL', 'Role-Based Access'],
    metrics: [
      { label: 'Administrative time saved', value: '65%' },
      { label: 'Student records digitized', value: '850+' },
      { label: 'Parent portal availability', value: '99.9%' }
    ],
    architecture: {
      frontend: 'Next.js 15, Tailwind CSS, Base UI',
      backend: 'Node.js, TypeScript API routes',
      database: 'PostgreSQL, Drizzle ORM',
      infrastructure: 'Altavox Container Cloud, Cloudflare Edge'
    },
    keyFeatures: [
      'Interactive student profile and academic history registry',
      'Tuition fee invoicing and SMS/WhatsApp payment notification alerts',
      'Teacher gradebook entry with report card generator',
      'Public admissions portal with mobile-first applicant forms'
    ]
  },
  {
    slug: 'jaslyn-net',
    name: 'Jaslyn Net',
    category: 'ISP operations & connectivity',
    client: 'Jaslyn Internet Services',
    summary: 'A carrier-grade connectivity operations platform bringing together subscriber management, billing workflows, MikroTik network integrations, and live operational visibility.',
    description: 'Developed for local and regional Internet Service Providers to automate subscriber provisioning, bandwidth bandwidth profiles, payment gateway reconciliation (M-Pesa, Airtel Money), and real-time network health surveillance.',
    status: 'In development',
    url: 'https://jaslyn-net.altavox.space',
    tags: ['ISP operations', 'Billing', 'Network automation', 'MikroTik API', 'Telemetry'],
    metrics: [
      { label: 'Active subscriber sessions', value: '2,400+' },
      { label: 'Automated billing rate', value: '98.4%' },
      { label: 'Incident resolution speed', value: '3x faster' }
    ],
    architecture: {
      frontend: 'Next.js App Router, Lucide icons, Dark cockpit UI',
      backend: 'TypeScript Node.js worker & RouterOS API connector',
      database: 'PostgreSQL with connection pooling, Redis caching',
      infrastructure: 'Dedicated Linux runtime, Automated failover routing'
    },
    keyFeatures: [
      'Real-time MikroTik RouterOS queue and PPPoE credential provisioning',
      'Automated hotspot and monthly billing with instant payment webhook integration',
      'Subscriber bandwidth usage tracker and fair-use policy enforcement',
      'NOC operations dashboard with real-time ping reachability'
    ]
  },
  {
    slug: 'netbill-noc',
    name: 'NetBill-NOC',
    category: 'Network operations & billing',
    client: 'Regional Telecom Operators',
    summary: 'A unified network operations center and automated telecom billing system designed for high-availability multi-tenant deployments.',
    description: 'NetBill-NOC is tailored for infrastructure operators requiring granular RADIUS accounting, SNMP network topology discovery, alerting, and automated revenue collection across multi-site nodes.',
    status: 'In development',
    tags: ['NOC', 'Monitoring', 'RADIUS', 'SNMP', 'Billing'],
    metrics: [
      { label: 'Monitored network devices', value: '180+' },
      { label: 'Telemetry polling interval', value: '10 sec' },
      { label: 'Automated invoice accuracy', value: '99.99%' }
    ],
    architecture: {
      frontend: 'React, Tailwind CSS, SVG topology visualizer',
      backend: 'High-throughput Go & Node.js worker pipeline',
      database: 'Time-series telemetry storage + PostgreSQL',
      infrastructure: 'Bare-metal Linux cluster with wireguard mesh'
    },
    keyFeatures: [
      'Visual network topology map with real-time link capacity utilization',
      'Automated RADIUS AAA authentication & session quota accounting',
      'Multi-gateway payment collection and overdue account auto-isolation',
      'Incident escalation engine with Telegram/WhatsApp alerts'
    ]
  },
  {
    slug: 'nexora-cloud',
    name: 'Nexora Cloud',
    category: 'Cloud technology',
    client: 'Altavox Internal Infrastructure',
    summary: 'A cloud-focused technology initiative exploring dependable, self-hosted deployment environments, container orchestration, and isolated sandboxes.',
    description: 'Nexora Cloud enables rapid rollout of web applications, workers, and databases on private cloud infrastructure with automated SSL termination, preview environments, and rollbacks.',
    status: 'Exploration',
    tags: ['Cloud', 'Infrastructure', 'Docker', 'Zero-downtime', 'CI/CD'],
    metrics: [
      { label: 'Deploy pipeline speed', value: '<45 sec' },
      { label: 'Rollback execution', value: 'Instant' },
      { label: 'SSL certificate issuance', value: 'Automated' }
    ],
    architecture: {
      frontend: 'Next.js 16 Web Console',
      backend: 'Docker Engine API & Reverse Proxy controller',
      database: 'PostgreSQL state storage',
      infrastructure: 'Multi-region VPS nodes with TLS reverse proxy'
    },
    keyFeatures: [
      'Git push-to-deploy pipeline with automated build isolation',
      'Environment variable encryption and vault credential storage',
      'Instant rollback checkpoints for safe zero-downtime releases',
      'Resource metric graphs (CPU, RAM, Bandwidth) per service'
    ]
  }
]

export const services = [
  'Custom software development',
  'Websites & web applications',
  'Backend API development',
  'Database design & management',
  'Cloud deployment & infrastructure',
  'Network engineering & automation',
  'ISP billing & subscriber systems',
  'Business process automation',
  'Systems integration',
  'Security engineering & maintenance'
]

export const serviceDetails = [
  {
    title: 'Custom Software Development',
    category: 'Engineering',
    summary: 'Tailor-made web systems, business portals, and desktop management tools designed for high operational clarity.',
    deliverables: ['Custom web architectures', 'Internal company workflows', 'Cross-platform responsive apps', 'Maintainable TypeScript codebases'],
    highlight: 'Built for longevity and maintainability by your team.'
  },
  {
    title: 'ISP Billing & Subscriber Systems',
    category: 'Telecom & ISP',
    summary: 'Comprehensive software for Internet Service Providers: user authentication, hotspot management, and automated payment gateways.',
    deliverables: ['MikroTik RouterOS API integrations', 'M-Pesa & Mobile Money webhooks', 'Hotspot voucher generation', 'Customer self-service portals'],
    highlight: 'Eliminates revenue leakage and manual reconnection tasks.'
  },
  {
    title: 'Cloud Deployment & Infrastructure',
    category: 'Infrastructure',
    summary: 'Predictable, self-hosted or cloud-native infrastructure with CI/CD automation, Docker runtimes, and instant rollback safety.',
    deliverables: ['Containerized deployments', 'Automated SSL & custom domains', 'Zero-downtime release pipelines', 'Environment secrets governance'],
    highlight: 'Keep data sovereign, secure, and independent.'
  },
  {
    title: 'Network Engineering & NOC Automation',
    category: 'Telecom & ISP',
    summary: 'Remote network monitoring, telemetry collection, incident alerting, and automated failover routing for mission-critical setups.',
    deliverables: ['SNMP and ping reachability probers', 'RADIUS AAA accounting systems', 'Telegram/WhatsApp alerts bot', 'Topology status visualization'],
    highlight: 'Spot anomalies before customers notice service degradation.'
  },
  {
    title: 'Database Architecture & Data Pipelines',
    category: 'Data & Security',
    summary: 'Relational database schema modeling, connection pooling, high-performance indexing, and secure automated backup schedules.',
    deliverables: ['PostgreSQL & SQLite design', 'Drizzle/Prisma type-safe migrations', 'Automated encryption at rest', 'Audit logging & compliance data'],
    highlight: 'Rock-solid data integrity with zero guesswork.'
  },
  {
    title: 'Security Engineering & Governance',
    category: 'Data & Security',
    summary: 'Robust authentication, role-based authorization, rate limiting, and security policy checks built directly into the foundation.',
    deliverables: ['Role-based access control (RBAC)', 'Session encryption & cookie hygiene', 'Penetration testing & audit trail', 'Disaster recovery runbooks'],
    highlight: 'Security embedded by default, never an afterthought.'
  }
]

