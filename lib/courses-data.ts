export interface CourseModule {
  week: string
  title: string
  topics: string[]
  project: string
}

export type CourseCategory =
  | 'Software Engineering'
  | 'Cloud & DevOps'
  | 'Networking & ISP Engineering'
  | 'Cybersecurity'
  | 'Database & Backend Engineering'
  | 'Applied AI & Automation'
  | 'School Information Systems'
  | 'FinTech & Business Systems'
  | 'UI/UX & Product Design'
  | 'IT Support & Systems Administration'

export interface CourseItem {
  id: string
  slug: string
  title: string
  shortTitle: string
  category: CourseCategory
  image: string
  imageAlt: string
  badge?: string
  rating: number
  reviewCount: number
  enrolledStudents: number
  duration: string
  liveHours: string
  nextBatch: string
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
  'Software Engineering',
  'Cloud & DevOps',
  'Networking & ISP Engineering',
  'Cybersecurity',
  'Database & Backend Engineering',
  'Applied AI & Automation',
  'School Information Systems',
  'FinTech & Business Systems',
  'UI/UX & Product Design',
  'IT Support & Systems Administration'
] as const

const moduleSet = (items: [string, string[], string][]): CourseModule[] =>
  items.map(([title, topics, project], index) => ({
    week: `Module 0${index + 1}`,
    title,
    topics,
    project
  }))

export const coursesData: CourseItem[] = [
  {
    id: 'avx-01',
    slug: 'full-stack-web-development',
    title: 'Full-Stack Web Development',
    shortTitle: 'Full-Stack Development',
    category: 'Software Engineering',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Developer workspace with code on a laptop',
    badge: 'Build real applications',
    rating: 0, reviewCount: 0, enrolledStudents: 0,
    duration: 'Confirm with Academy', liveHours: 'Delivery format to be confirmed', nextBatch: 'Contact us for availability',
    originalPrice: 0, discountPrice: 0,
    overview: 'Learn to design, build, test and deploy complete web applications, from responsive interfaces to secure APIs and database-backed features. Practical work covers the same technologies used to build modern business platforms.',
    targetAudience: ['Beginners with basic computer skills', 'Aspiring web developers', 'Designers or IT staff moving into software development'],
    careerRoles: ['Junior Front-End Developer', 'Junior Back-End Developer', 'Full-Stack Developer'],
    averageSalary: 'Not published',
    skillsCovered: ['HTML, CSS & responsive layouts', 'JavaScript & TypeScript', 'React & Next.js', 'Node.js APIs', 'PostgreSQL & Supabase', 'Git, testing & deployment'],
    certificationAlignment: 'Practical portfolio project and skills assessment. External certification is not included unless separately confirmed.',
    modules: moduleSet([
      ['Web foundations and interface development', ['Semantic HTML and accessible structure', 'CSS layout, responsive design and browser tools', 'JavaScript fundamentals and DOM interaction'], 'Build a responsive multi-page business website'],
      ['Modern front-end engineering', ['TypeScript and component design', 'React state, forms and data fetching', 'Next.js routing, rendering and metadata'], 'Build a searchable service or product catalogue'],
      ['Backend, data and release workflow', ['REST API design and validation', 'PostgreSQL schema, queries and access control', 'Git workflow, automated checks and deployment'], 'Deploy a full-stack application with a database']
    ])
  },
  {
    id: 'avx-02',
    slug: 'cloud-engineering-devops',
    title: 'Cloud Engineering & DevOps',
    shortTitle: 'Cloud & DevOps',
    category: 'Cloud & DevOps',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Digital globe representing cloud infrastructure',
    badge: 'Infrastructure skills',
    rating: 0, reviewCount: 0, enrolledStudents: 0,
    duration: 'Confirm with Academy', liveHours: 'Delivery format to be confirmed', nextBatch: 'Contact us for availability',
    originalPrice: 0, discountPrice: 0,
    overview: 'Understand how applications run in production. Learn Linux administration, cloud fundamentals, containers, CI/CD, DNS, TLS, monitoring, backups and reliable deployment practices.',
    targetAudience: ['IT support and system administrators', 'Developers learning production operations', 'Technical teams responsible for deployments'],
    careerRoles: ['Cloud Support Associate', 'DevOps Engineer (junior pathway)', 'Systems Administrator', 'Site Reliability Associate'],
    averageSalary: 'Not published',
    skillsCovered: ['Linux administration', 'Cloud networking and compute', 'Docker and containers', 'CI/CD pipelines', 'DNS, domains and TLS', 'Monitoring and backup planning'],
    certificationAlignment: 'Vendor-neutral practical labs. Cloud vendor exam preparation can be scoped separately.',
    modules: moduleSet([
      ['Linux and infrastructure foundations', ['Shell, users, permissions and services', 'Processes, storage and system logs', 'SSH, firewall and server hardening'], 'Provision and secure a Linux server'],
      ['Cloud, containers and delivery', ['Cloud compute, storage and networking concepts', 'Docker images, volumes and networks', 'Build and release pipelines with Git'], 'Containerise and deploy a web service'],
      ['Reliability and operations', ['DNS, HTTPS and certificate lifecycle', 'Monitoring, alerting and log analysis', 'Backup, restore and incident runbooks'], 'Create an operations-ready deployment with recovery notes']
    ])
  },
  {
    id: 'avx-03',
    slug: 'mikrotik-isp-network-engineering',
    title: 'MikroTik, ISP & Network Engineering',
    shortTitle: 'ISP & Network Engineering',
    category: 'Networking & ISP Engineering',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Network servers and connectivity equipment',
    badge: 'Network operations',
    rating: 0, reviewCount: 0, enrolledStudents: 0,
    duration: 'Confirm with Academy', liveHours: 'Delivery format to be confirmed', nextBatch: 'Contact us for availability',
    originalPrice: 0, discountPrice: 0,
    overview: 'Build practical networking knowledge for offices, hotspots and internet service providers. Topics include IP planning, routing, MikroTik configuration, subscriber access, RADIUS and network monitoring.',
    targetAudience: ['Network support technicians', 'Aspiring ISP operators and NOC staff', 'IT professionals managing routers and Wi-Fi'],
    careerRoles: ['Network Technician', 'NOC Support Engineer', 'Junior Network Administrator', 'ISP Technical Support'],
    averageSalary: 'Not published',
    skillsCovered: ['TCP/IP and subnetting', 'MikroTik RouterOS', 'Routing, NAT and firewalling', 'Wireless and hotspot design', 'PPPoE and RADIUS concepts', 'Monitoring and troubleshooting'],
    certificationAlignment: 'Hands-on lab assessment. MikroTik certification exams are separate and not represented as included.',
    modules: moduleSet([
      ['Network fundamentals and design', ['IPv4 addressing and subnetting', 'Switching, routing and VLAN concepts', 'Wireless coverage and capacity planning'], 'Design a small office and hotspot network'],
      ['Router configuration and subscriber access', ['RouterOS setup and firewall rules', 'NAT, queues and bandwidth policy', 'Hotspot, PPPoE and RADIUS architecture'], 'Configure a segmented subscriber access lab'],
      ['ISP operations and troubleshooting', ['Monitoring and fault isolation', 'AAA accounting and session lifecycle', 'Documentation, backups and change control'], 'Prepare an ISP network operations runbook']
    ])
  },
  {
    id: 'avx-04',
    slug: 'cybersecurity-foundations',
    title: 'Cybersecurity & Defensive Security',
    shortTitle: 'Cybersecurity',
    category: 'Cybersecurity',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Cybersecurity concept with digital lock',
    badge: 'Defensive security',
    rating: 0, reviewCount: 0, enrolledStudents: 0,
    duration: 'Confirm with Academy', liveHours: 'Delivery format to be confirmed', nextBatch: 'Contact us for availability',
    originalPrice: 0, discountPrice: 0,
    overview: 'Learn to reduce security risks across computers, networks and web applications. The course introduces threat modelling, secure configuration, vulnerability assessment, access control, logging and incident response in authorised lab environments.',
    targetAudience: ['IT support and network technicians', 'Developers who need secure coding practices', 'Learners beginning a cybersecurity pathway'],
    careerRoles: ['IT Security Support', 'Junior SOC Analyst pathway', 'Security Administrator assistant'],
    averageSalary: 'Not published',
    skillsCovered: ['Security fundamentals and risk', 'Linux and endpoint hardening', 'OWASP web security', 'Network security basics', 'Identity and access management', 'Logging and incident response'],
    certificationAlignment: 'Practical security assessment. Third-party certification is not included unless separately confirmed.',
    modules: moduleSet([
      ['Security principles and hardening', ['Threats, vulnerabilities and risk', 'Account security, MFA and least privilege', 'Windows and Linux baseline hardening'], 'Create a workstation security checklist'],
      ['Network and application security', ['Firewall and network segmentation', 'OWASP web application risks', 'Safe vulnerability scanning in a lab'], 'Assess a deliberately vulnerable training application'],
      ['Monitoring and incident handling', ['Security logs and alert triage', 'Evidence handling and incident timeline', 'Containment, recovery and reporting'], 'Write an incident response report from a lab scenario']
    ])
  },
  {
    id: 'avx-05',
    slug: 'database-backend-engineering',
    title: 'Database & Backend Engineering',
    shortTitle: 'Backend & Databases',
    category: 'Database & Backend Engineering',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Database and data infrastructure visual',
    badge: 'Data foundations',
    rating: 0, reviewCount: 0, enrolledStudents: 0,
    duration: 'Confirm with Academy', liveHours: 'Delivery format to be confirmed', nextBatch: 'Contact us for availability',
    originalPrice: 0, discountPrice: 0,
    overview: 'Learn to structure reliable data systems and build backend services. Work through relational modelling, SQL, API design, authentication, transactions, performance, backups and secure data access.',
    targetAudience: ['Developers building database-backed apps', 'IT professionals moving into backend work', 'Analysts who want stronger SQL skills'],
    careerRoles: ['Junior Backend Developer', 'SQL / Database Support', 'API Developer'],
    averageSalary: 'Not published',
    skillsCovered: ['PostgreSQL and SQL', 'Relational data modelling', 'REST API design', 'Authentication and authorization', 'Transactions and indexing', 'Backups and query performance'],
    certificationAlignment: 'Portfolio project and database/API assessment.',
    modules: moduleSet([
      ['Relational database design', ['Tables, keys and relationships', 'Normalization and constraints', 'SQL joins, grouping and subqueries'], 'Design a normalized business database'],
      ['Backend APIs and security', ['HTTP, REST and request validation', 'Authentication, roles and permissions', 'Transactions and error handling'], 'Build a secure CRUD API'],
      ['Production data operations', ['Indexes and query plans', 'Migrations, backups and recovery', 'Audit trails and data integrity'], 'Deploy an API with a documented database recovery plan']
    ])
  },
  {
    id: 'avx-06',
    slug: 'applied-ai-automation',
    title: 'Applied AI, Local AI & Workflow Automation',
    shortTitle: 'AI & Automation',
    category: 'Applied AI & Automation',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Abstract artificial intelligence network illustration',
    badge: 'Applied technology',
    rating: 0, reviewCount: 0, enrolledStudents: 0,
    duration: 'Confirm with Academy', liveHours: 'Delivery format to be confirmed', nextBatch: 'Contact us for availability',
    originalPrice: 0, discountPrice: 0,
    overview: 'Explore practical AI engineering: Python foundations, model concepts, prompt design, local language models, retrieval, tool calling and automation workflows. Emphasis is on useful, testable systems rather than AI hype.',
    targetAudience: ['Developers and technical founders', 'IT professionals exploring automation', 'Learners with basic programming knowledge'],
    careerRoles: ['Automation Developer', 'AI Application Developer pathway', 'Technical Workflow Specialist'],
    averageSalary: 'Not published',
    skillsCovered: ['Python foundations', 'LLM concepts and prompt design', 'Local AI with llama.cpp or Ollama', 'Embeddings and retrieval concepts', 'Tool calling and workflow automation', 'Evaluation, privacy and guardrails'],
    certificationAlignment: 'Build and demonstrate an applied AI prototype. No vendor certification is implied.',
    modules: moduleSet([
      ['Python and AI foundations', ['Python scripting and APIs', 'Model, token and context concepts', 'Prompt design and structured outputs'], 'Build a small AI-assisted utility'],
      ['Local models and retrieval', ['Running local models within hardware limits', 'Embeddings and document retrieval concepts', 'Data privacy and prompt-injection awareness'], 'Create a local document question-answering prototype'],
      ['Agents and workflow automation', ['Tool calling and controlled actions', 'Workflow design and error handling', 'Evaluation, logging and human approval'], 'Build an automation workflow with a verification step']
    ])
  },
  {
    id: 'avx-07',
    slug: 'school-information-management-systems',
    title: 'School Information Management Systems (SIMS)',
    shortTitle: 'School Management Systems',
    category: 'School Information Systems',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Modern classroom prepared for learning',
    badge: 'Education technology',
    rating: 0, reviewCount: 0, enrolledStudents: 0,
    duration: 'Confirm with Academy', liveHours: 'Delivery format to be confirmed', nextBatch: 'Contact us for availability',
    originalPrice: 0, discountPrice: 0,
    overview: 'Understand how to plan and build a school information system that connects student records, admissions, attendance, fees, results, parent communication and reporting with strong privacy and role-based access.',
    targetAudience: ['School administrators and ICT staff', 'Software developers serving education', 'Education entrepreneurs and system implementers'],
    careerRoles: ['School ICT Administrator', 'Education Systems Support', 'Junior SIMS Implementer'],
    averageSalary: 'Not published',
    skillsCovered: ['Student lifecycle and records', 'Admissions and attendance workflows', 'Fees and payment reconciliation concepts', 'Results and academic reporting', 'Parent/student portals', 'Role-based access and audit logs'],
    certificationAlignment: 'System design exercise and workflow prototype assessment.',
    modules: moduleSet([
      ['School operations and data model', ['Student identity and enrollment lifecycle', 'Classes, subjects and academic years', 'Data quality and record ownership'], 'Model a school database structure'],
      ['Academic and administrative workflows', ['Attendance, assessments and results', 'Fees, invoices and payment status', 'Admissions and document management'], 'Prototype an admissions-to-enrollment workflow'],
      ['Portals, privacy and reporting', ['Parent and student portal permissions', 'Roles, audit trails and data protection', 'Dashboards and operational reports'], 'Design a secure school management portal']
    ])
  },
  {
    id: 'avx-08',
    slug: 'fintech-business-systems',
    title: 'FinTech, Payments & Business Systems',
    shortTitle: 'FinTech & Business Systems',
    category: 'FinTech & Business Systems',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Business payment terminal at a checkout counter',
    badge: 'Business technology',
    rating: 0, reviewCount: 0, enrolledStudents: 0,
    duration: 'Confirm with Academy', liveHours: 'Delivery format to be confirmed', nextBatch: 'Contact us for availability',
    originalPrice: 0, discountPrice: 0,
    overview: 'Learn the architecture behind business software such as POS, inventory, invoicing, subscriptions and digital payment integrations. Focus on transaction integrity, reconciliation, security and operational visibility.',
    targetAudience: ['Developers building business applications', 'Small business technology operators', 'IT professionals supporting payment and billing systems'],
    careerRoles: ['Business Systems Support', 'FinTech Application Developer pathway', 'POS / ERP Implementer'],
    averageSalary: 'Not published',
    skillsCovered: ['POS and inventory workflows', 'Invoices and subscription billing', 'Payment API integration concepts', 'Webhook verification and idempotency', 'Reconciliation and audit trails', 'Multi-tenant SaaS fundamentals'],
    certificationAlignment: 'Practical business workflow prototype. Payment provider approval and live credentials are separate.',
    modules: moduleSet([
      ['Business process and system design', ['Products, stock and sales lifecycle', 'Customers, invoices and receivables', 'Tenant and user permission models'], 'Map a small retail POS workflow'],
      ['Payments and transaction integrity', ['Payment request and callback lifecycle', 'Webhook signatures and idempotency', 'Refunds, reversals and reconciliation'], 'Build a simulated payment integration in a test environment'],
      ['Operations and reporting', ['Ledger concepts and audit records', 'Inventory and sales reporting', 'Failure handling and support workflows'], 'Create a reconciliation and exception report']
    ])
  },
  {
    id: 'avx-09',
    slug: 'ui-ux-product-design',
    title: 'UI/UX & Digital Product Design',
    shortTitle: 'UI/UX & Product Design',
    category: 'UI/UX & Product Design',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Digital product interface design on a desktop screen',
    badge: 'Design systems',
    rating: 0, reviewCount: 0, enrolledStudents: 0,
    duration: 'Confirm with Academy', liveHours: 'Delivery format to be confirmed', nextBatch: 'Contact us for availability',
    originalPrice: 0, discountPrice: 0,
    overview: 'Learn to turn user needs into clear digital experiences. Practice research, information architecture, wireframes, visual systems, responsive interface design, accessibility and prototype testing.',
    targetAudience: ['Aspiring UI/UX designers', 'Developers who build user interfaces', 'Business owners planning digital products'],
    careerRoles: ['Junior UI Designer', 'UX Design Assistant', 'Product Design Associate'],
    averageSalary: 'Not published',
    skillsCovered: ['User research and personas', 'Information architecture', 'Wireframing and prototyping', 'Typography and visual hierarchy', 'Responsive design and accessibility', 'Usability testing and design systems'],
    certificationAlignment: 'Portfolio case study and usability review.',
    modules: moduleSet([
      ['Research and experience structure', ['User goals and research methods', 'Personas, journeys and task flows', 'Information architecture and navigation'], 'Create a user journey and sitemap'],
      ['Interface and design systems', ['Wireframes and high-fidelity screens', 'Typography, spacing and visual hierarchy', 'Reusable components and responsive layouts'], 'Design a responsive service dashboard'],
      ['Prototyping and validation', ['Interactive prototypes', 'Accessibility checks and usability tests', 'Design handoff and iteration'], 'Present a tested product design case study']
    ])
  },
  {
    id: 'avx-10',
    slug: 'it-support-systems-administration',
    title: 'IT Support & Systems Administration',
    shortTitle: 'IT Support & Systems Admin',
    category: 'IT Support & Systems Administration',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3Rest?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Technician working on computer hardware',
    badge: 'Practical IT skills',
    rating: 0, reviewCount: 0, enrolledStudents: 0,
    duration: 'Confirm with Academy', liveHours: 'Delivery format to be confirmed', nextBatch: 'Contact us for availability',
    originalPrice: 0, discountPrice: 0,
    overview: 'Develop practical skills for maintaining computers and supporting users. Learn diagnostics, Windows installation and configuration, software deployment, endpoint protection, networking basics, backups and service desk procedures.',
    targetAudience: ['Beginners entering IT support', 'Office and school ICT support staff', 'Technicians strengthening troubleshooting skills'],
    careerRoles: ['IT Support Technician', 'Desktop Support Associate', 'Junior Systems Administrator'],
    averageSalary: 'Not published',
    skillsCovered: ['PC hardware diagnostics', 'Windows installation and configuration', 'Drivers, updates and software management', 'Endpoint security and backups', 'LAN and Wi-Fi troubleshooting', 'Ticketing and user support'],
    certificationAlignment: 'Practical troubleshooting assessment and documented service procedure.',
    modules: moduleSet([
      ['Computer hardware and diagnostics', ['PC components and compatibility', 'Fault isolation and diagnostic tools', 'Storage, memory and peripheral maintenance'], 'Diagnose and document a simulated PC fault'],
      ['Operating systems and endpoint care', ['Windows installation and activation compliance', 'Drivers, updates and user profiles', 'Security software, permissions and backups'], 'Prepare a secure workstation setup checklist'],
      ['Networking and service desk operations', ['IP, Wi-Fi and connectivity troubleshooting', 'Remote support safety and user consent', 'Ticket lifecycle and technical documentation'], 'Resolve and document a sample support ticket']
    ])
  }
]
