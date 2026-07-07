// ============================================================
// Sunil portfolio data - centralized content and links.
// ============================================================

const primaryEmail = "sunil.m0711@gmail.com";

export const personalInfo = {
  name: "Masani Sunil Kumar",
  firstName: "Sunil",
  brandName: "Sunil",
  title: "Full Stack Developer",
  location: "Bengaluru, India",
  phone: "(+91) 7013429743",
  emails: {
    primary: primaryEmail,
    secondary: primaryEmail,
  },
  summary:
    "Results-driven Full Stack Developer with 2 years of hands-on experience designing and deploying scalable web applications and cloud-based solutions. Strong in backend development, frontend engineering, REST and tRPC APIs, database optimization, AWS services, and clean full-stack architecture.",
  resumeUrl: "/Sunil_Kumar_FullStackDeveloper_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/masanisunil",
  linkedin: "https://www.linkedin.com/in/masani-sunil-kumar-84162426a/",
};

export const heroContent = {
  greeting: "Hi, I'm Sunil",
  titleHighlight: "Full Stack Developer",
  subtitle:
    "I design and build scalable web applications with React, Node.js, Python, PostgreSQL, AWS, REST APIs, and tRPC.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: `mailto:${primaryEmail}?subject=Hiring%20Inquiry%20-%20Portfolio&body=Hello%20Sunil,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you.%0D%0A%0D%0ABest%20Regards,`,
  },
  ctaResume: { text: "Download Resume", href: "/Sunil_Kumar_FullStackDeveloper_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Masani Sunil Kumar</span>, a full-stack developer focused on building reliable, scalable, and user-friendly web platforms with clean backend architecture, responsive frontends, and production-minded engineering.`,
  techStack: ["React.js", "Node.js", "Python", "AWS"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn product problems into dependable web platforms",
  description:
    "I combine backend depth, frontend execution, cloud services, and careful API design to ship maintainable systems.",
  cards: [
    {
      number: "01",
      title: "Understand",
      text: "I map requirements, users, data flows, and constraints before choosing the architecture.",
    },
    {
      number: "02",
      title: "Architect",
      text: "I design APIs, schemas, services, and frontend state around reliability and long-term maintainability.",
    },
    {
      number: "03",
      title: "Build",
      text: "I implement full-stack features with React, Node.js, Python, PostgreSQL, and cloud integrations.",
    },
    {
      number: "04",
      title: "Optimize",
      text: "I improve performance, developer experience, data access, and production workflows.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [
        { name: "Python", level: 92 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "Node.js", level: 88 },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 92 },
        { name: "Material UI", level: 84 },
        { name: "Redux", level: 82 },
        { name: "Jotai", level: 82 },
        { name: "TanStack Router", level: 80 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Express.js", level: 88 },
        { name: "Django", level: 88 },
        { name: "Flask", level: 86 },
        { name: "REST APIs", level: 90 },
        { name: "tRPC", level: 86 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 82 },
        { name: "Prisma ORM", level: 86 },
        { name: "DynamoDB", level: 76 },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS Cognito", level: 82 },
        { name: "AWS SNS / Pinpoint / SES", level: 80 },
        { name: "AWS S3 / Lambda / ECR", level: 78 },
        { name: "Docker", level: 82 },
        { name: "Render", level: 78 },
      ],
    },
    {
      title: "Architecture & Tools",
      skills: [
        { name: "Turborepo Monorepos", level: 86 },
        { name: "Microservices", level: 84 },
        { name: "Type-safe API Design", level: 86 },
        { name: "Git / GitHub", level: 90 },
        { name: "JIRA / Postman / VSCode", level: 88 },
        { name: "Zod / Logto / n8n", level: 80 },
      ],
    },
  ],
};

export const experienceList = [
  {
    organization: "Eligere.ai",
    role: "Junior Software Engineer",
    location: "Bengaluru, India",
    duration: "November 2025 - Present",
    summary:
      "Architecting and developing a full-stack enterprise platform with Node.js, Express.js, PostgreSQL, React.js, tRPC, Prisma ORM, and Turborepo.",
    highlights: [
      "Designed scalable backend APIs with type-safe end-to-end integration using tRPC.",
      "Engineered PostgreSQL relational models with Prisma ORM for performance and data integrity.",
      "Built multilingual AI-powered intelligent search for contextual troubleshooting workflows.",
      "Developed dashboards and file-upload systems for diagnostics, logs, and structured issue resolution.",
      "Contributed to D&T Pro, connecting dealer web portals and mechanic mobile workflows in real time.",
    ],
    tech: ["Node.js", "Express.js", "PostgreSQL", "React.js", "tRPC", "Prisma ORM", "Turborepo"],
  },
  {
    organization: "Sujanix Private Limited",
    role: "Full Stack Developer",
    location: "Bengaluru, India",
    duration: "October 2024 - October 2025",
    summary:
      "Built backend services, analytics systems, authentication workflows, notification integrations, and full-stack web applications for enterprise and utility clients.",
    highlights: [
      "Developed backend services for True Read Analytics using Django and React.js.",
      "Integrated AWS Cognito, SNS, and Pinpoint into CRUX Unified Endpoint Management.",
      "Designed TeamXcel backend infrastructure with Python, Flask, and PostgreSQL.",
      "Built a custom Windows MDM server with APNs integration, configuration profile deployment, and device command handling.",
    ],
    tech: ["Python", "Django", "Flask", "React.js", "PostgreSQL", "AWS", "APNs"],
  },
];

export const projects = [
  {
    id: "dt-pro",
    number: "01",
    badge: "Featured Project",
    title: "D&T Pro - Diagnostic & Troubleshooting Platform",
    duration: "November 2025 - Present",
    description:
      "Built a full-stack enterprise platform connecting dealers and mechanics through a structured troubleshooting ecosystem with a web portal and mobile application. The platform includes scalable backend services, type-safe tRPC integration, responsive React.js interfaces, and multilingual AI-powered search for faster issue resolution.",
    techTags: ["Node.js", "Express.js", "React.js", "PostgreSQL", "Prisma ORM", "Zod", "TanStack Router", "tRPC", "Logto", "Turborepo"],
    links: {},
    isFlagship: true,
  },
  {
    id: "true-read-analytics",
    number: "02",
    badge: null,
    title: "True Read Analytics - Bihar Electricity Board",
    duration: "May 2024 - October 2025",
    description:
      "Developed a high-performance backend system for electricity data analytics using Django REST Framework and React.js. The system processes large volumes of metering and consumption data while improving reliability for a government utility client.",
    techTags: ["Python", "Django", "React.js", "PostgreSQL", "Django REST Framework"],
    links: {},
    isFlagship: false,
  },
  {
    id: "teamxcel",
    number: "03",
    badge: null,
    title: "TeamXcel Smart Attendance Management System",
    duration: "November 2024 - April 2025",
    description:
      "Built a full-stack employee attendance and project tracking application with dashboards, advanced geo-fencing, role-based access control, leave management, custom reporting, and alerts for early or late check-ins.",
    techTags: ["Python", "Flask", "PostgreSQL", "React.js", "GeoJSON", "REST API"],
    links: {},
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Full Stack Web Development",
      issuer: "Py Spiders Institute",
      icon: "FS",
    },
    {
      name: "Python for Data Science",
      issuer: "Udemy",
      icon: "PY",
    },
  ],
  viewAllUrl: null,
};

export const education = {
  degree: "Bachelor of Technology - Computer Science & Engineering",
  institution: "Chadalawada Ramanamma Engineering College, Tirupati",
  cgpa: "9.4 / 10.0",
  graduation: "Completed / In Progress",
  twelfth: "Intermediate (MPC) - 95%, Pragna Junior College, Allagadda",
  tenth: "SSC (Class X) - CGPA 9.3 / 10.0, B.B.R English Medium School, Allagadda",
};

export const footerContent = {
  taglines: [
    "Full-Stack Development",
    "React.js - Node.js - Python",
    "Cloud-Ready Web Applications",
  ],
  credential: "B.Tech Computer Science & Engineering - CGPA 9.4",
  copyright: `(c) ${new Date().getFullYear()} Sunil | Built with React`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
