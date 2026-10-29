export interface CourseModule {
  week: string
  title: string
  topics: string[]
  project: string
}

export interface CourseItem {
  id: string
  slug: string
  title: string
  shortTitle: string
  category: 'ISP & Network Operations' | 'Education Technology' | 'Cloud & Infrastructure' | 'Software Engineering' | 'Tech Academy'
  badge?: string
  rating: number
  reviewCount: number
  enrolledStudents: number // active users / subscribers / alumni
  duration: string
  liveHours: string
  nextBatch: string // next deployment window or batch
  originalPrice: number
  discountPrice: number
  overview: string
  targetAudience: string[]
  careerRoles: string[]
  averageSalary: string
  skillsCovered: string[]
  certificationAlignment: string
  modules: CourseModule[]
}

export const courseCategories = [
  'All Solutions',
  'ISP & Network Operations',
  'Education Technology',
  'Cloud & Infrastructure',
  'Software Engineering',
  'Tech Academy'
] as const

export const coursesData: CourseItem[] = [
  {
    id: 'alt-01',
    slug: 'jaslyn-net',
    title: 'Jaslyn Net — Carrier-Grade ISP Billing & MikroTik Automation Platform',
    shortTitle: 'Jaslyn Net ISP Platform',
    category: 'ISP & Network Operations',
    badge: 'Production Flagship',
    rating: 4.9,
    reviewCount: 2400,
    enrolledStudents: 2400,
    duration: 'Production Ready',
    liveHours: '99.9% Uptime',
    nextBatch: 'Live Production Active',
    originalPrice: 1200,
    discountPrice: 720,
    overview: 'Developed for local and regional Internet Service Providers to automate subscriber provisioning, bandwidth queue profiles, payment gateway reconciliation (M-Pesa, Airtel Money), and real-time MikroTik network health surveillance.',
    targetAudience: [
      'Regional & Local Internet Service Providers (WISP / FTTH)',
      'Network operations managers handling MikroTik RouterOS fleets',
      'Telecom operators looking to eliminate manual cash collection & recon'
    ],
    careerRoles: ['ISP Systems Administrator', 'NOC Operations Lead', 'MikroTik Network Engineer', 'Telecom Billing Specialist'],
    averageSalary: '$95k - $130k / 98.4% Auto Billing',
    skillsCovered: ['MikroTik RouterOS API', 'PPPoE & Hotspot Queues', 'M-Pesa / Mobile Money Webhooks', 'PostgreSQL Connection Pooling', 'Network Latency Telemetry', 'Auto-isolation engine'],
    certificationAlignment: 'MTCNA, MTCRE & Carrier Telecom Operations Aligned',
    modules: [
      {
        week: 'Phase 01',
        title: 'MikroTik RouterOS Fleet Integration & API Handshake',
        topics: [
          'RouterOS API socket communication and token-based credentials',
          'PPPoE server secrets synchronization without dropping active sessions',
          'Simple Queues vs Queue Trees for fair bandwidth allocation',
          'Firewall address-list dynamic quarantine and walled garden routing'
        ],
        project: 'Automated 1,000+ PPPoE subscriber provisioner with instant speed profile sync'
      },
      {
        week: 'Phase 02',
        title: 'M-Pesa & Mobile Money Automated Webhook Reconciliation',
        topics: [
          'Idempotent payment webhook listeners with SHA-256 signature verification',
          'Instant subscriber renewal and automated MikroTik queue re-activation',
          'Split-second invoice generation and SMS receipt dispatching',
          'Overdue account auto-suspension scheduler with graceful grace periods'
        ],
        project: 'Zero-touch billing reconciliation engine handling concurrent mobile money callbacks'
      },
      {
        week: 'Phase 03',
        title: 'NOC Telemetry & Real-Time Surveillance Cockpit',
        topics: [
          'Live ICMP ping reachability and jitter probers across tower nodes',
          'High-throughput PostgreSQL schema for connection log retention',
          'Bandwidth congestion heatmaps and peak hour telemetry',
          'Real-time Telegram/WhatsApp NOC engineer incident dispatch alerts'
        ],
        project: 'Full Network Operations Center (NOC) dashboard with live node status maps'
      }
    ]
  },
  {
    id: 'alt-02',
    slug: 'sammena',
    title: 'Sammena Pre & Primary — Unified School Information Management System (SIMS)',
    shortTitle: 'Sammena School SIMS',
    category: 'Education Technology',
    badge: 'Production Live',
    rating: 4.9,
    reviewCount: 850,
    enrolledStudents: 850,
    duration: 'Production System',
    liveHours: '99.9% Availability',
    nextBatch: 'Active Academic Portal',
    originalPrice: 850,
    discountPrice: 499,
    overview: 'A complete school website and School Information Management System (SIMS) for clearer public information, student records, fee tracking, teacher gradebooks, and automated parent communication.',
    targetAudience: [
      'School headteachers, principals, and administrative directors',
      'Education institutions aiming to eliminate paper records & lost receipts',
      'Bursars needing automated tuition reconciliation and parent SMS alerts'
    ],
    careerRoles: ['Education Systems Lead', 'School IT Coordinator', 'EdTech Systems Architect', 'Campus Administrator'],
    averageSalary: '65% Administrative Time Saved',
    skillsCovered: ['Next.js 15 App Router', 'Role-Based Access Control (RBAC)', 'Student Record Digitization', 'Tuition Ledger & Invoicing', 'Parent SMS Notification Engine', 'Automated Report Card Generation'],
    certificationAlignment: 'Modern EdTech Governance & Student Privacy Standard',
    modules: [
      {
        week: 'Phase 01',
        title: 'Student History & Academic Registry Architecture',
        topics: [
          'Unique student ID generator with multi-year class promotion pipelines',
          'Guardian contacts, health records, and emergency data encryption',
          'Public mobile-responsive admissions portal with applicant file upload',
          'Staff and teacher permission matrix (Admin, Bursar, Teacher, Parent)'
        ],
        project: 'Digitized registry of 850+ students with instant search and class lists'
      },
      {
        week: 'Phase 02',
        title: 'Tuition Fee Management, Invoicing & Receipts',
        topics: [
          'Automated term fee structure setup (Tuition, Transport, Meals, Uniforms)',
          'Installment tracking ledger with real-time balance calculations',
          'Instant PDF fee receipt generation with school seal and QR validation',
          'Automated WhatsApp/SMS reminders to parents for pending balances'
        ],
        project: 'Complete school treasury portal with zero unaccounted fee leakage'
      },
      {
        week: 'Phase 03',
        title: 'Gradebook, Report Card Generator & Parent Portal',
        topics: [
          'Subject-by-subject grading scales, GPA calculation, and remarks',
          'Batch terminal report card PDF compiler with rank sorting',
          'Parent web portal for attendance, teacher remarks, and school announcements',
          'Exportable national curriculum regulatory reporting sheets'
        ],
        project: 'Single-click term report card generator producing printable batch PDFs'
      }
    ]
  },
  {
    id: 'alt-03',
    slug: 'netbill-noc',
    title: 'NetBill-NOC — Telecom Network Operations Center & Multi-Tenant RADIUS Billing',
    shortTitle: 'NetBill-NOC System',
    category: 'ISP & Network Operations',
    badge: 'High Availability',
    rating: 4.8,
    reviewCount: 320,
    enrolledStudents: 180,
    duration: 'Enterprise Architecture',
    liveHours: '99.99% Reliability',
    nextBatch: 'Custom Node Deploy',
    originalPrice: 1500,
    discountPrice: 950,
    overview: 'A unified network operations center and automated telecom billing system designed for high-availability multi-tenant deployments. Features RADIUS AAA accounting, SNMP topology discovery, and auto-isolation.',
    targetAudience: [
      'Regional telecom operators, wireless mesh networks, and tier-3 ISPs',
      'Engineers seeking carrier-grade SNMP surveillance and automated isolation',
      'Enterprises with multi-branch VPN networks needing centralized telemetry'
    ],
    careerRoles: ['Telecom Systems Architect', 'Senior NOC Engineer', 'RADIUS Protocol Specialist', 'Network Security Engineer'],
    averageSalary: '$110k - $145k / Multi-Site Operations',
    skillsCovered: ['FreeRADIUS Accounting', 'SNMP v2c/v3 Probers', 'Dynamic Network Topology Visualizer', 'Sub-10s Telemetry Polling', 'High-Availability Failover Routing', 'Time-series Storage'],
    certificationAlignment: 'RFC 2865 RADIUS & Enterprise Telemetry Standards',
    modules: [
      {
        week: 'Phase 01',
        title: 'RADIUS AAA Accounting & High-Concurrency Session Engine',
        topics: [
          'RADIUS Authentication, Authorization, and Accounting (AAA) server clustering',
          'Simultaneous session capping and bandwidth quota tracking',
          'Database connection pooling optimized for 10,000+ concurrent requests',
          'Dynamic VLAN tagging and policy routing rules'
        ],
        project: 'Distributed RADIUS AAA cluster with sub-millisecond query verification'
      },
      {
        week: 'Phase 02',
        title: 'Automated Multi-Site SNMP Topology Discovery',
        topics: [
          'SNMP OID polling for interface throughput, packet drops, and CPU load',
          'Interactive SVG network topology diagram with live link saturation colors',
          'Autonomous tower node dependency trees to suppress redundant alarms',
          'Telegram and SMS automated escalation hierarchy for outages'
        ],
        project: 'Live visual network topology map monitoring 180+ devices across regions'
      }
    ]
  },
  {
    id: 'alt-04',
    slug: 'nexora-cloud',
    title: 'Nexora Cloud — Self-Hosted Container Orchestration & Deployment Engine',
    shortTitle: 'Nexora Cloud Engine',
    category: 'Cloud & Infrastructure',
    badge: 'Internal Cloud',
    rating: 4.9,
    reviewCount: 410,
    enrolledStudents: 120,
    duration: 'Instant Deploy',
    liveHours: '99.95% Availability',
    nextBatch: 'Available on VPS/Cloud',
    originalPrice: 999,
    discountPrice: 599,
    overview: 'Nexora Cloud enables rapid rollout of web applications, workers, and databases on private cloud infrastructure with automated SSL termination, preview environments, and instant rollback safety.',
    targetAudience: [
      'Engineering teams wanting private cloud independence without AWS markup',
      'DevOps engineers managing Docker container fleets and reverse proxies',
      'Organizations requiring strict local data sovereignty and security compliance'
    ],
    careerRoles: ['Cloud Infrastructure Architect', 'DevOps Systems Engineer', 'Site Reliability Engineer (SRE)', 'Platform Engineer'],
    averageSalary: '<45s Deploy / Instant Rollback',
    skillsCovered: ['Docker Engine API', 'Automated Let’s Encrypt TLS', 'Zero-Downtime Rolling Deploys', 'Encrypted Secret Vaults', 'Resource Isolation (cgroups)', 'Reverse Proxy Controller'],
    certificationAlignment: 'Cloud Native Computing Foundation (CNCF) & Docker Standards',
    modules: [
      {
        week: 'Phase 01',
        title: 'Containerized Deployment Pipelines & TLS Edge',
        topics: [
          'Git webhook triggers and automated image build caching',
          'Automated Let’s Encrypt wildcard SSL certificate provisioning',
          'Zero-downtime healthcheck probes before cutting traffic',
          'Instant one-click rollback checkpoints for mission-critical apps'
        ],
        project: 'Turnkey self-hosted deployment engine running Next.js, Node, and PostgreSQL'
      },
      {
        week: 'Phase 02',
        title: 'Resource Telemetry, Secret Vaults & Multi-Node Clustering',
        topics: [
          'AES-256 encrypted environment variable management',
          'CPU, RAM, and Disk I/O telemetry charts streamed per container',
          'Multi-node VPS clustering over secure WireGuard VPN mesh',
          'Automated database snapshots with off-site S3-compatible backups'
        ],
        project: 'Resilient multi-node cluster with automated disaster recovery runbooks'
      }
    ]
  },
  {
    id: 'alt-05',
    slug: 'salesforce-admin-developer',
    title: 'Salesforce Certified Administrator & Platform Developer Master Track',
    shortTitle: 'Salesforce Master Course',
    category: 'Tech Academy',
    badge: 'Bestseller',
    rating: 4.9,
    reviewCount: 3840,
    enrolledStudents: 14200,
    duration: '8 Weeks',
    liveHours: '45+ Live Hrs',
    nextBatch: 'Starts This Saturday',
    originalPrice: 799,
    discountPrice: 449,
    overview: 'Master both declarative Salesforce administration and programmatic Apex, Visualforce, and Lightning Web Components (LWC). Prepare for ADM-201 and PD1 certifications with hands-on CRM sandbox practice.',
    targetAudience: ['Career changers seeking high-demand CRM roles', 'IT support professionals', 'Business analysts and CRM consultants'],
    careerRoles: ['Salesforce Administrator', 'Salesforce Developer', 'CRM Technical Consultant', 'Lightning Specialist'],
    averageSalary: '$115,000 / +145% Avg Hike',
    skillsCovered: ['Data Modeling & Schema Builder', 'Process Automation & Flows', 'Apex Triggers & Classes', 'SOQL & SOSL Queries', 'Lightning Web Components (LWC)', 'ADM-201 & PD1 Exam Dumps'],
    certificationAlignment: 'Official Salesforce ADM-201 & Platform Developer I (PD1)',
    modules: [
      {
        week: 'Week 01-02',
        title: 'Salesforce Administration & Security Governance',
        topics: ['Custom objects, schema relationships, validation rules', 'Organization-wide defaults, role hierarchies, sharing rules', 'Automating processes with Salesforce Flow Builder', 'Standard reports and dynamic executive dashboards'],
        project: 'Build an Enterprise Healthcare Patient Management CRM org'
      },
      {
        week: 'Week 03-04',
        title: 'Apex Programming & Database SOQL Operations',
        topics: ['Apex syntax, collections (List, Set, Map), triggers', 'SOQL queries, SOSL searches, and governor limits', 'Trigger design patterns and unit test classes (>85% coverage)', 'REST API callouts to external services from Apex'],
        project: 'Real-time Payment Gateway Webhook integration in Apex'
      },
      {
        week: 'Week 05-08',
        title: 'Lightning Web Components (LWC) & Certification Prep',
        topics: ['LWC reactivity, shadow DOM, custom events', 'Lightning Data Service (LDS) and wire adapters', 'ADM-201 and PD1 mock scenario exam walkthroughs', 'Resume workshop & technical interview rounds'],
        project: 'Full-stack Interactive Customer Billing & Quote Portal in LWC'
      }
    ]
  },
  {
    id: 'alt-06',
    slug: 'aws-cloud-solutions-architect',
    title: 'AWS Certified Solutions Architect Associate (SAA-C03) & Cloud Engineering',
    shortTitle: 'AWS Solutions Architect',
    category: 'Tech Academy',
    badge: 'High Demand',
    rating: 4.9,
    reviewCount: 4210,
    enrolledStudents: 16800,
    duration: '8 Weeks',
    liveHours: '50+ Live Hrs',
    nextBatch: 'Starts Next Tuesday',
    originalPrice: 849,
    discountPrice: 479,
    overview: 'Comprehensive live training in AWS compute, storage, networking, database, and security architectures. Designed for the official SAA-C03 certification with production-grade VPC labs.',
    targetAudience: ['System administrators moving to cloud', 'Software engineers needing AWS cloud architecture', 'Solution architects and technical leads'],
    careerRoles: ['AWS Cloud Solutions Architect', 'Cloud Infrastructure Engineer', 'DevOps Associate', 'Site Reliability Engineer'],
    averageSalary: '$135,000 / +120% Avg Hike',
    skillsCovered: ['Amazon EC2, ECS, Lambda', 'Custom VPC Subnet Routing & NAT', 'S3 & Glacier Storage Classes', 'RDS Aurora & DynamoDB', 'IAM Policies & KMS Encryption', 'Terraform Infrastructure as Code'],
    certificationAlignment: 'Official AWS Certified Solutions Architect Associate (SAA-C03)',
    modules: [
      {
        week: 'Week 01-02',
        title: 'AWS Core Compute & Multi-Tier Networking',
        topics: ['Designing custom VPCs, public/private subnets, Internet Gateways', 'EC2 instance sizing, AMIs, Auto Scaling groups, Application Load Balancers', 'Route 53 DNS routing policies and health checks', 'VPC Peering, Transit Gateway, and NAT Gateways'],
        project: 'Multi-AZ High Availability E-Commerce Architecture on AWS'
      },
      {
        week: 'Week 03-04',
        title: 'Storage, Databases & Serverless Microservices',
        topics: ['S3 lifecycle policies, replication, static website hosting', 'RDS Aurora Multi-AZ failover and read replicas', 'DynamoDB partition keys, Global Secondary Indexes', 'Serverless microservices with AWS Lambda, API Gateway, SQS, SNS'],
        project: 'Event-driven serverless image processing & notification pipeline'
      },
      {
        week: 'Week 05-08',
        title: 'Security, Well-Architected Framework & Exam Prep',
        topics: ['IAM roles, policies, STS assume-role, MFA enforcement', 'AWS KMS encryption keys and CloudTrail audit logging', 'Terraform automation for repeatable multi-region blueprints', 'SAA-C03 mock exams with question dissection'],
        project: 'Production enterprise landing zone provisioned via Terraform'
      }
    ]
  },
  {
    id: 'alt-07',
    slug: 'cyber-security-specialist',
    title: 'Cyber Security Specialist, Ethical Hacking & CompTIA Security+ Prep',
    shortTitle: 'Cyber Security Specialist',
    category: 'Tech Academy',
    badge: 'Hot Career',
    rating: 4.8,
    reviewCount: 2950,
    enrolledStudents: 9800,
    duration: '8 Weeks',
    liveHours: '48+ Live Hrs',
    nextBatch: 'Starts Next Weekend',
    originalPrice: 899,
    discountPrice: 499,
    overview: 'Develop practical offensive and defensive cyber security skills. Learn vulnerability scanning, threat intelligence, network defense, ethical penetration testing, and prepare for CompTIA Security+ (SY0-701).',
    targetAudience: ['IT support wanting to specialize in security', 'Network engineers, systems administrators', 'Enthusiasts wanting to break into blue team or red team security'],
    careerRoles: ['SOC Security Analyst', 'Cyber Security Engineer', 'Vulnerability Assessment Analyst', 'Junior Penetration Tester'],
    averageSalary: '$110,000 / +105% Avg Hike',
    skillsCovered: ['Network Threat Defense', 'Wireshark Packet Analysis', 'Nmap & Metasploit Framework', 'SIEM Tools (Splunk, Elastic)', 'Web App Vulnerabilities (OWASP Top 10)', 'CompTIA Security+ SY0-701 Prep'],
    certificationAlignment: 'Official CompTIA Security+ (SY0-701) & CEH Aligned',
    modules: [
      {
        week: 'Week 01-02',
        title: 'Network Defense, Cryptography & Security Fundamentals',
        topics: ['TCP/IP security, packet sniffing with Wireshark', 'Symmetric vs asymmetric encryption, TLS handshakes, PKI certificates', 'Firewall rules, IDS/IPS configuration, and network segmentation', 'CompTIA Security+ domain review: Threats, Attacks, Vulnerabilities'],
        project: 'Setup an enterprise DMZ and configure Suricata IDS prober'
      },
      {
        week: 'Week 03-04',
        title: 'Vulnerability Assessment & Web App Security (OWASP)',
        topics: ['Port scanning, banner grabbing, and CVE vulnerability analysis with Nessus', 'OWASP Top 10: SQL injection, XSS, CSRF, broken access controls', 'Burp Suite proxy interception and authentication bypass', 'Securing REST APIs and cookie session tokens'],
        project: 'Ethical penetration test and vulnerability audit report on vulnerable web lab'
      },
      {
        week: 'Week 05-08',
        title: 'SOC Operations, Incident Response & Exam Practice',
        topics: ['Log ingestion and alert correlation in Splunk SIEM', 'Incident response lifecycle (NIST 800-61 framework)', 'Malware analysis fundamentals and indicator of compromise (IOC) extraction', 'Security+ SY0-701 simulated exam dumps and career mock interviews'],
        project: 'End-to-end incident investigation and containment simulated in Splunk'
      }
    ]
  }
]
