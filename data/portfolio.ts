export const portfolioData = {
  personal: {
    name: "Prathamesh Rale",
    title: "Senior Solutions Consultant",
    location: "Toronto, Ontario",
    email: "realparth77@gmail.com",
    phone: "+1 647 938 3124",
    bio: "Dynamic IT professional with 6+ years of experience across the Software Development Life Cycle, specializing in building and maintaining client integrations for HR and payroll systems on iPaaS (Integration Platform as a Service) platforms. Passionate about driving efficiency and automation through advanced scripting and AI-driven tooling.",
  },

  experience: [
    {
      id: 1,
      title: "Senior Solutions Consultant",
      company: "Flexspring Inc",
      period: "Nov 2020 – Present",
      location: "Toronto, Ontario",
      description:
        "Leading end-to-end iPaaS integration delivery for HR and payroll systems",
      achievements: [
        "Designed, built, and supported end-to-end client integrations on Flexspring's iPaaS platform, configuring connectors, field mappings, and data transformation logic",
        "Developed and supported General Ledger (GL) integrations from source systems to end systems with GL code mapping for Reimbursements, New earnings, and Deductions",
        "Implemented and provided support for health insurance data integrations (Vision, HealthCare, Dental, 401K, Imputed Income benefits)",
        "Pulled payroll data from source systems and wrote paystub structures/formats in end systems using iPaaS transformation logic",
        "Implemented new hire employee integrations to facilitate HRIS onboarding with employee data updates via API",
        "Used Flexspring's transaction monitoring tools alongside Elastic Search and Kibana to track integration health and resolve client-facing issues",
        "Partnered with client stakeholders to gather integration requirements, configure iPaaS workflows, and validate data flows",
        "Leveraged Claude Code to build custom skills connecting to HR platforms' MCP servers, translating API documentation into automated, production-ready workflows",
      ],
      skills: [
        "Flexspring Studio",
        "iPaaS",
        "ETL",
        "Groovy",
        "Java",
        "API Integration",
        "SQL",
        "Client Management",
        "Claude Code",
        "MCP",
      ],
    },
    {
      id: 2,
      title: "Technical Customer Support (L3)",
      company: "Nordia Inc",
      period: "Nov 2019 – Nov 2020",
      location: "Remote",
      description: "L3 Support for Siebel CRM customers",
      achievements: [
        "Handled L3 support for Siebel CRM customers",
        "Logged and analyzed tickets in Siebel CRM, providing estimates and identifying fixes",
        "Resolved complex technical issues to provide optimal customer experience",
      ],
      skills: ["Siebel CRM", "Customer Support", "Technical Troubleshooting"],
    },
    {
      id: 3,
      title: "Software Engineer",
      company: "L&T Infotech",
      period: "Oct 2014 – July 2017",
      location: "Mumbai, India",
      description:
        "Full-stack development across multiple products and technologies",
      achievements: [
        "Marketing Integration for NXP Semiconductors - Dealt with market changes and product expectations; Migration of NXP website to PDM (Product Data Management) data model",
        "CMS Modernization for NXP - Upgraded TeamSite to latest version 8.x, created DCTs, Taxonomy, Templates, Pages & Workflows",
        "Search 2016 Enhancement - Featured promoted assets in search results while maintaining organic search integrity",
        "Document Stamping Utility - Created automated utility for document stamping using pdfBox and IText API",
        "CloudX UI Enhancement - Developed auditing, relationships, and search functionalities; designed Incident and Problem Management reports",
        "CloudX Implementation - Developed VM provisioning platform using Spring MVC; resolved VM provisioning issues end-to-end",
      ],
      skills: [
        "Java",
        "Spring MVC",
        "Spring Boot",
        "TeamSite CMS",
        "Cloud Technologies",
        "MySQL",
      ],
    },
  ],

  skills: {
    "Programming Languages": [
      { name: "Groovy", proficiency: 90 },
      { name: "Java / Java EE", proficiency: 85 },
      { name: "Python", proficiency: 75 },
      { name: "JavaScript", proficiency: 70 },
      { name: "SQL", proficiency: 85 },
    ],
    "iPaaS & Integration": [
      { name: "Flexspring Studio", proficiency: 95 },
      { name: "REST APIs", proficiency: 90 },
      { name: "SOAP", proficiency: 80 },
      { name: "ETL Tools", proficiency: 85 },
      { name: "Webhooks & OAuth", proficiency: 85 },
    ],
    "Web Technologies": [
      { name: "React", proficiency: 75 },
      { name: "Next.js", proficiency: 80 },
      { name: "TypeScript", proficiency: 80 },
      { name: "HTML/CSS", proficiency: 80 },
      { name: "Spring Boot", proficiency: 80 },
    ],
    "Databases & Storage": [
      { name: "MySQL", proficiency: 85 },
      { name: "MS SQL", proficiency: 80 },
      { name: "PostgreSQL", proficiency: 75 },
    ],
    "DevOps & Tools": [
      { name: "Jenkins", proficiency: 80 },
      { name: "GitLab", proficiency: 85 },
      { name: "CI/CD", proficiency: 80 },
      { name: "Jira", proficiency: 85 },
      { name: "AWS EC2", proficiency: 70 },
    ],
    "Monitoring & Analytics": [
      { name: "Elastic Search", proficiency: 75 },
      { name: "Kibana", proficiency: 75 },
      { name: "Transaction Monitoring", proficiency: 85 },
    ],
    "AI & Automation": [
      { name: "Claude Code", proficiency: 85 },
      { name: "MCP (Model Context Protocol)", proficiency: 85 },
      { name: "Agentic Workflows", proficiency: 80 },
    ],
    "Platforms & Systems": [
      { name: "Oracle Fusion", proficiency: 85 },
      { name: "BambooHR", proficiency: 80 },
      { name: "ADP", proficiency: 75 },
      { name: "Workday", proficiency: 75 },
      { name: "NetSuite", proficiency: 70 },
      { name: "Salesforce", proficiency: 70 },
    ],
    "Soft Skills": [
      { name: "Client Relationship Management", proficiency: 90 },
      { name: "Technical Problem Solving", proficiency: 90 },
      { name: "Team Leadership", proficiency: 85 },
      { name: "Communication", proficiency: 85 },
      { name: "Project Delivery", proficiency: 85 },
    ],
  },

  education: [
    {
      degree: "Bachelor of Information Technology",
      institution: "Mumbai University",
      year: "Aug 2011 – June 2014",
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Dr BA Technological University",
      year: "Aug 2008 – May 2011",
    },
    {
      degree: "Project Management",
      institution: "Centennial College School of Business",
      year: "Sept 2017 – April 2018",
    },
    {
      degree: "Marketing Management",
      institution: "Centennial College School of Business",
      year: "Sept 2018 – April 2019",
    },
  ],

  awards: [
    {
      title: "Individual Growth Award",
      company: "Flexspring Inc",
      year: 2021,
    },
  ],

  projects: [
    {
      id: 1,
      title: "HR Integration Automation with Claude Code",
      description:
        "Building custom skills that connect to HR platforms' MCP servers to automate integration workflows",
      technologies: ["Claude Code", "MCP", "Python", "API Integration"],
      highlights: [
        "Translates API documentation into production-ready workflows",
        "Reduces manual coding effort and improves delivery speed",
        "Implements agentic automation for complex HR data flows",
      ],
    },
    {
      id: 2,
      title: "iPaaS GL Integration Suite",
      description:
        "Comprehensive General Ledger integration platform for multiple ERP systems",
      technologies: ["Flexspring Studio", "Groovy", "SQL", "GL Mapping"],
      highlights: [
        "Handles reimbursements, new earnings, and deductions",
        "Supports multi-entity GL synchronization",
        "Real-time transaction monitoring and error handling",
      ],
    },
    {
      id: 3,
      title: "Payroll Data Pipeline",
      description:
        "End-to-end payroll data extraction and paystub generation",
      technologies: ["Flexspring", "Java", "Groovy", "Rest APIs"],
      highlights: [
        "Automated payroll data extraction from multiple source systems",
        "Dynamic paystub format generation",
        "Direct deposit and benefits integration",
      ],
    },
    {
      id: 4,
      title: "Employee Onboarding Integration",
      description:
        "Automated new hire provisioning across HRIS and downstream systems",
      technologies: ["iPaaS", "REST APIs", "OAuth", "Data Mapping"],
      highlights: [
        "Orchestrates new hire data across multiple systems",
        "Real-time employee demographic synchronization",
        "Validation and error recovery workflows",
      ],
    },
    {
      id: 5,
      title: "NXP Marketing Integration Platform",
      description: "Website migration to PDM data model with modernization",
      technologies: ["Java", "Spring MVC", "PDM", "CMS"],
      highlights: [
        "Migrated content management to Product Data Management",
        "Improved content governance and localization",
        "Enhanced search and analytics capabilities",
      ],
    },
  ],
};
