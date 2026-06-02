export const profile = {
  name: "Yahya Hafidz",
  title: "Quality Assurance Engineer",
  email: "yahya_hafidz@yahoo.co.id",
  phone: "+62 812 2904 0909",
  phoneLink: "https://wa.me/6281229040909",
  location: "South Jakarta, ID",
  summary:
    "Results-driven Quality Assurance Engineer with 3+ years of experience in automation testing, API validation, and agile development environments. Complemented with backend development expertise that enhances bug tracing capabilities and enables precise, actionable reporting to development teams. Proven expertise in reducing production defects through comprehensive test strategies across web, mobile, and API platforms. Proficient in multiple automation frameworks with a strong foundation in financial services and enterprise application testing.",
};

export const stats = [
  //{ target: 3, suffix: "+", label: "Years Experience" },
  // { target: 71, suffix: "%", label: "Regression Time Cut" },
  // { target: 40, suffix: "%", label: "Defect Leakage Reduced" },
  // { target: 10, suffix: "min", label: "Automated Journey" },
];

export const techStack = [
  "CYPRESS",
  "KATALON",
  "KODECEPTJS",
  "KARATE",
  "JEST",
  "SELENIUM",
  "APPIUM",
  "POSTMAN",
  "GITLAB CI/CD",
  "MONGODB",
  "POSTGRESQL",
  "TESTRAIL",
  "JIRA",
];

export const skills = [
  {
    icon: "play",
    title: "Testing Frameworks",
    tags: [
      "Cypress",
      "Katalon Studio",
      "CodeceptJS",
      "Karate",
      "Jest",
      "Selenium",
      "Appium",
    ],
  },
  {
    icon: "code",
    title: "Languages & Databases",
    tags: [
      "JavaScript (Intermediate)",
      "Python",
      "SQL",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    icon: "settings",
    title: "Tools & Methodologies",
    tags: [
      "Postman",
      "TestRail",
      "Jira",
      "GitLab CI/CD",
      "Agile/Scrum",
      "Kanban",
      "TDD",
    ],
  },
];

export const experience = [
  {
    company: "BTN (Bank Tabungan Negara)",
    sub: "via PT Enigma Cipta Humanika",
    role: "Quality Assurance Engineer",
    period: "Jan 2026 – Now",
    location: "Central Jakarta, DKI Jakarta",
    color: "sky",
    tabs: [
      {
        id: "properti",
        label: "🏦 BTN Properti",
        items: [
          "Developed and executed 100+ regression test cases using Katalon Studio across BTN Properti web and back-office systems.",
          "Validated KPR loan amount accuracy by cross-checking frontend property values against Wincore core banking database records.",
          "Traced and diagnosed API-level defects using Axway API Gateway Manager log analysis to assist root cause identification.",
          "Assisted document legalization (Dokleg) process verification using LOS for iDocs, supporting loan origination workflow integrity.",
          "Operated Wincore to support business process verification across property transaction flows.",
        ],
      },
      {
        id: "bale",
        label: "💳 Bale by BTN",
        items: [
          "Manually validated end-to-end KYC onboarding flow including NIK form input verification, ensuring identity data accuracy.",
          "Identified edge case defect in phone number input validation where maximum character input triggered an error state, preventing silent user-facing failures.",
          "Cross-checked customer data integrity between frontend submission and back-office records across the account creation pipeline.",
        ],
      },
    ],
  },
  {
    company: "AMAR BANK",
    sub: "via Avows Technologies Indonesia",
    role: "Quality Assurance Engineer",
    period: "Mar 2024 – Dec 2025",
    location: "South Jakarta, DKI Jakarta",
    color: "purple",
    tabs: [
      {
        id: "lending",
        label: "🏦 Lending",
        items: [
          "Prevented critical financial miscalculations in installment loan repayment via edge-case testing using min/max methodology.",
          "Reduced manual testing from hours to <strong class='text-white'>10 minutes</strong> by developing automated journey flows in CodeceptJS.",
          "Resolved intermittent disbursement bug caused by cron job timing conflicts.",
          "Strengthened backend reliability via Karate API tests and MongoDB validation across complete loan lifecycle.",
        ],
      },
      {
        id: "internet",
        label: "🏛️ Internet Banking",
        items: [
          "Validated Giro account management, interbank/intrabank transfers, and banking compliance protocols.",
          "Ensured biller payment reliability (internet, mobile top-ups, electricity) covering reconciliation accuracy.",
        ],
      },
      {
        id: "process",
        label: "⚙️ Process",
        items: [
          "Adapted seamlessly from Agile to Kanban while transitioning to AI-assisted automated scripting using MCP methodologies.",
          "Reduced ticket creation from <strong class='text-white'>5+ to under 2 minutes</strong> using trained AI bug reporting workflows.",
        ],
      },
    ],
  },
  {
    company: "PT SOLUSI KEBUTUHAN TEKNOLOGI",
    role: "Quality Assurance Engineer",
    period: "Oct 2023 – Jan 2024",
    location: "South Jakarta, DKI Jakarta",
    color: "emerald",
    items: [
      "Led E2E testing as <strong class='text-white'>sole QA</strong> across 7 concurrent WMS & ERP projects.",
      "Developed Katalon Studio scripts for CRUD workflows, eliminating repetitive manual tasks.",
      "Validated complex promotional logic, preventing revenue loss from discount miscalculations.",
    ],
  },
  {
    company: "PRIVYID",
    role: "Software Quality Assurance",
    period: "Jul 2022 – Aug 2023",
    location: "Bantul, Yogyakarta",
    color: "amber",
    tabs: [
      {
        id: "mobile",
        label: "📱 iOS App",
        items: [
          "Collaborated with 13-member cross-functional team for iOS app overhaul integrating digital identity & signature.",
          "Validated UI/UX fidelity against Figma across iPhone & iPad for responsive layouts.",
        ],
      },
      {
        id: "signature",
        label: "🔏 Signature API",
        items: [
          "Architected API testing strategy reducing defect leakage by <strong class='text-white'>40%</strong> via Jest & Postman.",
          "Validated signature placement algorithms, recipient ordering, and gRPC services integration.",
        ],
      },
      {
        id: "identity",
        label: "🌐 Digital Identity",
        items: [
          "Built Cypress E2E framework in GitLab CI/CD, cutting manual regression by <strong class='text-white'>70%</strong>.",
          "Validated KTP OCR extraction, NIK format, and frontend-to-DB data integrity.",
        ],
      },
    ],
  },
  {
    company: "PRIVYID",
    sub: "Internship",
    role: "QA Engineer Intern",
    period: "Jan 2022 – Jun 2022",
    location: "Bantul, Yogyakarta",
    color: "slate",
    items: [
      "Drove QA for eKYC integrating 3 third-party liveness providers via comparative API testing.",
      "Implemented Cypress E2E tests in GitLab CI/CD with weekly progress reporting.",
    ],
  },
];

export const education = {
  school: "Technology Yogyakarta University",
  degree: "Associate Degree in Information Systems",
  gradYear: "2022",
  gpa: "3.54/4.0",
  highlights: [
    "Temporary Assistant Lecturer for 40+ students",
    "Coursework: Algorithms, OOP, DBMS, Web Dev & Design",
  ],
  languages: [
    { name: "Indonesian", level: "Native", percent: 100 },
    { name: "English", level: "Professional Working", percent: 80 },
  ],
};

export const certifications = [
  { name: "Laravel Bootcamp", org: "SanberCode" },
  { name: "Back-End Application Development for Beginners", org: "Dicoding" },
  { name: "Software Quality Assurance StudyJam", org: "NestAcademy" },
  { name: "Web Development", org: "Udemy" },
];
