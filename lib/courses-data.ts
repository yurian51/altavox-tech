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
  category: 'Cloud Computing & DevOps' | 'Cybersecurity' | 'CRM & Business Applications'
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
  'All Courses',
  'Cloud Computing & DevOps',
  'Cybersecurity',
  'CRM & Business Applications'
] as const

export const coursesData: CourseItem[] = [
  {
    id: 'alt-05',
    slug: 'salesforce-admin-developer',
    title: 'Salesforce Certified Administrator & Platform Developer Master Track',
    shortTitle: 'Salesforce Master Course',
    category: 'CRM & Business Applications',
    badge: 'Professional Training',
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
    category: 'Cloud Computing & DevOps',
    badge: 'Certification Preparation',
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
    category: 'Cybersecurity',
    badge: 'Professional Training',
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
