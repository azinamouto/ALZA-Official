import { ServiceItem, ProjectItem, LeadershipMember, ProcessStage } from '../types';

export const COMPANY_INFO = {
  name: 'ALZA.Net IT Solutions',
  shortName: 'ALZA',
  tagline: 'Technology built around real problems.',
  motto: 'WE FIND. WE SOLVE. WE LIFT.',
  location: 'Bohol, Philippines',
  region: 'Central Visayas, Philippines',
  primaryEmail: 'inquiries@alza.net',
  consultationEmail: 'jhary@alza.net',
  ctoEmail: 'aj@alza.net',
  foundingYear: 2024,
  positioning:
    'ALZA is a technology and software engineering company that develops practical digital solutions for local government units, organizations, institutions, and businesses.',
  coreDisciplines: [
    'Custom Software Development',
    'Government Technology (GovTech)',
    'Information Systems',
    'Enterprise Web Applications',
    'Systems Architecture',
    'Data Management and Analytics',
    'IT Consulting and Digital Transformation',
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'custom-software',
    number: '01',
    title: 'Custom Software Development',
    subtitle: 'Tailored applications designed around operational requirements.',
    description:
      'We engineer bespoke web applications, administrative software, and internal tools crafted specifically for organizational workflows rather than generic off-the-shelf templates.',
    detailedPoints: [
      'Modular full-stack web applications with deterministic state management',
      'Role-based access control (RBAC) and departmental permissions architecture',
      'High-performance data entry interfaces engineered for high daily throughput',
      'Offline-capable and intermittent-connectivity resilient client interfaces',
    ],
    operationalProblemsSolved: [
      'Manual spreadsheet fragmentation causing data loss and version conflicts',
      'Rigid commercial software that fails to adapt to specific localized workflows',
      'Repetitive administrative overhead and manual verification bottlenecks',
    ],
    deliverables: [
      'Production-ready web application',
      'Relational database schema & migration scripts',
      'API documentation & administrative manual',
      'Maintenance and operational handover guide',
    ],
    iconName: 'Code',
  },
  {
    id: 'govtech-systems',
    number: '02',
    title: 'GovTech & Information Systems',
    subtitle: 'Digital tools supporting government workflows, records, reporting, and service delivery.',
    description:
      'Purpose-built public sector systems that help municipal departments, local government units, and institutional offices streamline statutory reporting, citizen services, and records management.',
    detailedPoints: [
      'Mandated statutory compliance systems (such as Gender and Development reporting)',
      'Digital document routing, verification, and audit-logged tracking pipelines',
      'Cross-departmental data synchronization with strict access boundaries',
      'Public service intake portals with transparent application progress tracking',
    ],
    operationalProblemsSolved: [
      'Delays in quarterly statutory compliance and municipal report generation',
      'Paper documents misplaced across municipal office transitions',
      'Lack of aggregated visibility into program beneficiaries and resource allocations',
    ],
    deliverables: [
      'Secure institutional information system',
      'Role-restricted municipal access controls',
      'Standardized government reporting exporters (PDF, Excel, CSV)',
      'Departmental onboarding and staff training documentation',
    ],
    iconName: 'Building2',
  },
  {
    id: 'systems-architecture',
    number: '03',
    title: 'Systems Architecture & Integration',
    subtitle: 'Reliable application architecture, APIs, data models, and system integration.',
    description:
      'We establish solid technical foundations that ensure systems remain maintainable, secure, and extensible as organizations expand their digital operations.',
    detailedPoints: [
      'Relational and document database schema design with strict foreign keys & constraints',
      'REST and GraphQL API architecture with structured serialization and contract testing',
      'Third-party software, payment gateway, and legacy database migration pathways',
      'Security hardening, environment configuration, and automated deployment pipelines',
    ],
    operationalProblemsSolved: [
      'Fragile databases prone to duplicate records and data corruption',
      'Siloed software tools that cannot exchange data reliably',
      'Technical debt preventing software upgrades and new feature additions',
    ],
    deliverables: [
      'System Architecture Specification (SAS)',
      'Entity-Relationship Diagrams (ERD) & Data Dictionaries',
      'Standardized OpenAPI / Postman collections',
      'Containerization (Docker) and staging deployment blueprints',
    ],
    iconName: 'Network',
  },
  {
    id: 'data-analytics',
    number: '04',
    title: 'Data Management & Analytics',
    subtitle: 'Structured information and visual reporting that support informed decisions.',
    description:
      'Turning fragmented administrative logs into clean, structured data pipelines and actionable visual dashboards for directors, municipal heads, and business leaders.',
    detailedPoints: [
      'Automated data validation, deduplication, and ETL ingestion routines',
      'Operational and executive dashboards presenting verified real-time indicators',
      'Spatial and demographic mapping for community resource allocation',
      'Audit logs, historical versioning, and compliance export generation',
    ],
    operationalProblemsSolved: [
      'Executive decisions based on incomplete or months-old paper summaries',
      'Inconsistent indicator definitions between collaborating offices',
      'Tedious manual tallying of census, registration, and program metrics',
    ],
    deliverables: [
      'Centralized reporting data warehouse or analytical mart',
      'Interactive visual dashboard with granular filters',
      'Scheduled export generation routines',
      'Data governance and validation guidelines',
    ],
    iconName: 'BarChart3',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'tagad',
    name: 'TAGAD',
    category: 'GovTech · Municipal Analytics & Compliance',
    summary:
      'Gender and Development reporting and analytics system engineered for Talibon-related municipal workflows.',
    verifiedStatus: 'Active Development',
    statusDescription:
      'Under active development with structured modules for municipal GAD indicator tracking, fund allocation monitoring, and statutory report assembly.',
    context:
      'In the Philippine local governance framework, local government units are mandated to allocate and rigorously report on Gender and Development (GAD) plans and budgets. Conventional reporting relies on disparate spreadsheets and physical binders, creating substantial delays during annual audits and oversight reviews.',
    problemSolved:
      'TAGAD establishes a unified digital data pipeline for collecting sex-disaggregated data across municipal offices, monitoring GAD budget utilization, and generating standardized statutory compliance reports without manual collation errors.',
    technicalFoundation: [
      'TypeScript',
      'React',
      'Node.js / Express',
      'PostgreSQL',
      'Tailwind CSS',
      'Tabular Data Exporters',
    ],
    keyCapabilities: [
      'Standardized sex-disaggregated indicator ingestion',
      'GAD budget allotment and expenditure tracking',
      'Automated compliance document generation for oversight agencies',
      'Departmental verification workflows with role-based validation',
    ],
    architecturalHighlights:
      'Structured with an immutable audit ledger for compliance records, relational foreign-key integrity across municipal departments, and client-side validation ensuring incomplete indicator rows cannot be submitted.',
    confidentialityNote:
      'Public release details are restricted to verified operational scope. Production municipal data and internal agency identifiers are strictly confidential.',
  },
  {
    id: 'talgov',
    name: 'TALGov',
    category: 'Information Systems · Public Sector Digital Systems',
    summary:
      'Government-oriented digital systems initiative designed to modernize public service coordination and departmental records.',
    verifiedStatus: 'Government Initiative Pilot',
    statusDescription:
      'Architecture design and pilot modules focused on modernizing institutional record workflows and inter-office routing.',
    context:
      'Municipal public administrations process thousands of service requests, clearances, permits, and inter-office memoranda monthly. Information siloing across physical desks creates communication bottlenecks and citizen wait times.',
    problemSolved:
      'TALGov provides a cohesive information framework for municipal coordination, giving administrators clear visibility into document lifecycles, service request processing stages, and inter-departmental handoffs.',
    technicalFoundation: [
      'Modern Web Technologies',
      'Relational Database Modeling',
      'Role-Based Access Control',
      'Document Tracking Engine',
      'Responsive Mobile-First Interface',
    ],
    keyCapabilities: [
      'Centralized document tracking with unique reference routing',
      'Departmental handoff acknowledgments and timestamps',
      'Administrative oversight dashboards for workflow bottlenecks',
      'Public-facing verification for authorized clearance authenticity',
    ],
    architecturalHighlights:
      'Engineered with an event-driven status tracking pipeline, compartmentalized schema preventing cross-department record exposure, and low-bandwidth optimizations for local office network stability.',
    confidentialityNote:
      'Architecture blueprints and implementation roadmaps are governed under municipal consultation protocols.',
  },
  {
    id: 'alza-devkit',
    name: 'ALZA DevKit',
    category: 'Developer Tooling · Internal Engineering Infrastructure',
    summary:
      'Internal development tooling for mock data generation, dataset construction, and database schema importing.',
    verifiedStatus: 'Internal Tool',
    statusDescription:
      'In active daily use within ALZA engineering workflows to accelerate system prototyping and ensure comprehensive schema validation.',
    context:
      'Developing enterprise software for institutional clients requires realistic datasets, domain-specific edge-case generation, and rapid relational schema experimentation before staging deployments.',
    problemSolved:
      'ALZA DevKit automates the generation of coherent synthetic relational datasets (e.g. Philippine municipal geographic hierarchies, names, dates, fiscal amounts) and validates database migration blueprints prior to production provisioning.',
    technicalFoundation: [
      'Node.js',
      'TypeScript',
      'PostgreSQL Dialect Parser',
      'Synthetic Data Generators',
      'CLI & Web Inspection Interface',
    ],
    keyCapabilities: [
      'Schema-aware synthetic data generator maintaining foreign key integrity',
      'Localized Philippine regional and demographic seed dictionaries',
      'SQL DDL import and migration schema validator',
      'Deterministic test database seeding for integration test suites',
    ],
    architecturalHighlights:
      'Built as a standalone zero-telemetry utility featuring AST-based SQL schema parsing, topological sort algorithms for parent-child table insertion orders, and deterministic PRNG seeding.',
  },
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: '01',
    name: 'Discover',
    tagline: 'Understand the real problem, users, workflows, and requirements.',
    description:
      'Before writing code, we sit down with stakeholders and frontline operators. We map out manual procedures, spreadsheet dependencies, departmental constraints, and statutory requirements to ensure we build software that solves the true bottleneck.',
    deliverables: [
      'Operational Problem Statement',
      'Process Flow & Dependency Diagrams',
      'Functional Requirements Specification (FRS)',
      'Technical Scope & Feasibility Assessment',
    ],
    disciplines: ['Stakeholder Interviews', 'Workflow Mapping', 'Statutory Review', 'Data Audit'],
  },
  {
    number: '02',
    name: 'Architect',
    tagline: 'Design maintainable systems and clear technical foundations.',
    description:
      'We establish the technical blueprint: database normalization, security boundary definitions, API contracts, and user interaction states. Clear architecture prevents costly rewrites and ensures the system remains maintainable for years.',
    deliverables: [
      'Entity-Relationship Diagrams (ERD)',
      'API Contract Specifications',
      'Security & Access Control Matrix (RBAC)',
      'Wireframes & UX Interaction Models',
    ],
    disciplines: ['Data Modeling', 'API Design', 'Security Modeling', 'Information Architecture'],
  },
  {
    number: '03',
    name: 'Build',
    tagline: 'Implement software through structured, iterative engineering.',
    description:
      'Our engineers implement clean, typed codebases using proven technology stacks. We build incrementally with regular milestone reviews, ensuring business logic is isolated, performant, and resilient against unexpected inputs.',
    deliverables: [
      'Modular Full-Stack Application Code',
      'Database Migration Scripts',
      'Component Library & UI Implementation',
      'Continuous Staging Deployment Previews',
    ],
    disciplines: ['TypeScript Development', 'Database Engineering', 'API Implementation', 'Version Control'],
  },
  {
    number: '04',
    name: 'Validate',
    tagline: 'Test functionality, reliability, usability, and security.',
    description:
      'Software is tested under real-world scenarios: slow network conditions, edge-case data inputs, permission boundary verification, and user acceptance trials with actual administrative staff.',
    deliverables: [
      'Functional & Integration Test Verification',
      'User Acceptance Testing (UAT) Signoff',
      'Security Boundary & Authorization Audit',
      'Cross-Device & Low-Bandwidth Audit',
    ],
    disciplines: ['Integration Testing', 'Security Verification', 'User Acceptance Testing', 'Stress Testing'],
  },
  {
    number: '05',
    name: 'Deliver & Improve',
    tagline: 'Prepare systems for handover, documentation, and continued improvement.',
    description:
      'We conduct structured deployment, provide comprehensive system documentation, train organizational staff, and establish clear operational maintenance channels to ensure uninterrupted institutional reliability.',
    deliverables: [
      'Production Deployment & Configuration',
      'System Administration & User Manuals',
      'Staff Training & Onboarding Workshops',
      'Post-Deployment Support & Maintenance Protocol',
    ],
    disciplines: ['Production Handover', 'Documentation', 'Technical Training', 'System Maintenance'],
  },
];

export const LEADERSHIP_DATA: LeadershipMember[] = [
  {
    name: 'Jhary Caturza',
    role: 'Co-Founder & Chief Executive Officer',
    focus: 'Executive Direction, Client Partnerships & Systems Strategy',
    summary:
      'Directs organizational strategy, stakeholder engagement, and business alignment. Jhary works closely with local government units and organizational leaders to translate complex organizational objectives into practical, high-impact digital initiatives.',
  },
  {
    name: 'AJ Rienze',
    role: 'Co-Founder & Chief Technology Officer',
    focus: 'Software Architecture, Technology Infrastructure & Engineering Rigor',
    summary:
      'Oversees software architecture, technical standards, and engineering implementation. AJ leads technical design, database modeling, and code quality across ALZA projects, prioritizing long-term maintainability and system reliability.',
  },
];
