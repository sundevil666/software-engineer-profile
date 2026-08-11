export interface Experience {
  company: string
  period: string
  role: string
  summary: string
}

export interface Project {
  id: string
  name: string
  period?: string
  summary: string
  stack: string[]
  confidentialityNote?: string
  liveUrl?: string
  repositoryUrl?: string
  caseStudyUrl?: string
}

export interface Profile {
  name: string
  role: string
  availability: string
  workPreferences: string
  summary: string
  experienceSummary: string
  location: null
  contacts: {
    email: string
    github: string
    linkedin: string
    siteRepository: string
    telegram: string
  }
  strengths: ReadonlyArray<{
    value: string
    label: string
  }>
  experience: ReadonlyArray<Experience>
  projects: ReadonlyArray<Project>
  skillGroups: ReadonlyArray<{
    title: string
    skills: ReadonlyArray<string>
  }>
  languages: ReadonlyArray<string>
  teaching: {
    organization: string
    summary: string
  }
  workPreferencesByMarket: {
    international: string
    slovakia: string
  }
}

export const profile = {
  name: 'Serhii Tokmakov',
  role: 'Frontend Developer — Vue.js & TypeScript',
  availability: 'Europe-based · CET/CEST · Open to remote opportunities worldwide',
  workPreferences:
    'Europe-based · CET/CEST · Open to remote opportunities worldwide · Employment, B2B, or freelance',
  workPreferencesByMarket: {
    international:
      'Europe-based · CET/CEST · Open to remote opportunities worldwide',
    slovakia:
      'Open to remote, hybrid, and on-site opportunities in Slovakia',
  },
  summary:
    'I build dependable business applications with Vue.js and TypeScript — from data-heavy dashboards and reusable component systems to cross-platform products.',
  experienceSummary:
    '10+ years in commercial web development, including 4+ years focused on Vue.js applications.',
  location: null,
  contacts: {
    email: 'sundevildi@gmail.com',
    github: 'https://github.com/sundevil666',
    linkedin: 'https://www.linkedin.com/in/serhii-tokmakov-122480151',
    siteRepository:
      'https://github.com/sundevil666/software-engineer-profile',
    telegram: 'https://t.me/SunDevil666',
  },
  strengths: [
    {
      value: '10+',
      label: 'years in commercial web development',
    },
    {
      value: '4+',
      label: 'years focused on Vue.js applications',
    },
    {
      value: 'End-to-end',
      label: 'delivery from requirements to deployment',
    },
  ],
  experience: [
    {
      company: 'Independent',
      period: 'Apr 2023 — Present',
      role: 'Independent Frontend Developer',
      summary:
        'Deliver contract, freelance, and personal Vue.js products from requirements through deployment. Recent and current work includes an end-to-end client website, Poland Group Materials, My Shift, PolandShopPrice, Mentor AI, and NDA business platforms with role-based workflows and reporting.',
    },
    {
      company: 'IT2.0 School',
      period: 'Mar 2018 — Dec 2023',
      role: 'Frontend Development Instructor',
      summary:
        'Taught HTML and CSS courses for aspiring frontend developers. Prepared practical exercises, reviewed students\' work, provided feedback, and helped students build their first responsive web pages and understand frontend development fundamentals.',
    },
    {
      company: 'Organic Code',
      period: 'Jan 2022 — Mar 2023',
      role: 'Frontend Developer',
      summary:
        'Independently designed, developed, and delivered an MVP of personal accounts for assessment participants and specialists working with school students. Built participant management, test assignments, result dashboards, charts, and detailed interpretations while collaborating with backend and testing-frontend developers.',
    },
    {
      company: 'PandaTeam',
      period: 'Jan 2021 — Dec 2021',
      role: 'Frontend Developer',
      summary:
        'Maintained and extended a legacy Vue 2 application as part of a two-person frontend team. Implemented clearly scoped features and adapted solutions to an existing codebase.',
    },
    {
      company: 'Independent',
      period: 'Mar 2013 — Jan 2021',
      role: 'Freelance Consultant',
      summary:
        'Delivered websites and business applications from requirements through deployment. Coordinated designers and backend developers, translated business needs into implementation tasks, and built WordPress, Joomla, JavaScript, and Vue.js solutions, including a live e-commerce platform with custom administration and delivery logic.',
    },
  ] satisfies Experience[],
  projects: [
    {
      id: 'financial-operations-platform',
      name: 'Financial Operations Platform',
      confidentialityNote:
        'Generalized project name; client details are confidential under NDA.',
      summary:
        'Owned the complete frontend delivery in collaboration with a backend developer. Turned an Excel-based process with extensive manual work into a role-based platform for transactions, expenses, reporting, filtering, and data exports.',
      stack: ['Vue 3', 'TypeScript', 'Vuetify', 'RBAC', 'Reporting', 'REST API'],
    },
    {
      id: 'advertising-operations-platform',
      name: 'Advertising Operations Platform',
      confidentialityNote:
        'Generalized project name; client details are confidential under NDA.',
      summary:
        'Sole frontend developer for a large role-based administration platform. Recommended Quasar for rapid delivery and built the frontend for an MVP that the team launched in six months.',
      stack: ['Vue 3', 'TypeScript', 'Quasar', 'Pinia', 'RBAC', 'REST API'],
    },
    {
      id: 'educational-assessment-platform',
      name: 'Educational Assessment Platform',
      confidentialityNote:
        'Generalized project name; client details are confidential under NDA.',
      summary:
        'Independently delivered an MVP of participant and assessment-specialist portals. Integrated with a separate testing application and visualized assessment results through dashboards, charts, and detailed interpretations.',
      stack: ['Vue 3', 'Quasar', 'Pinia', 'GraphQL', 'Apollo', 'ApexCharts'],
    },
    {
      id: 'poland-group-website-shop',
      name: 'Poland Group Website & Shop',
      summary:
        'Delivered a public WordPress website and a live Vue.js store. Coordinated a designer and backend developer, built the storefront and administration interface, and defined packing logic that selects box sizes, prevents incompatible product combinations, and includes packaging costs in order totals.',
      stack: ['WordPress', 'Vue.js', 'JavaScript', 'E-commerce', 'Custom admin'],
    },
    {
      id: 'poland-shop-price',
      name: 'PolandShopPrice',
      summary:
        'A cross-platform mobile application for browsing PDF product catalogues. Built for Android and iOS and currently progressing through the App Store publication process.',
      stack: ['Vue 3', 'Quasar', 'Capacitor', 'PDF', 'Android', 'iOS'],
    },
    {
      id: 'poland-group-materials',
      name: 'Poland Group Materials',
      period: 'Jul 2026 — Present',
      summary:
        'A cross-platform mobile product for working with construction-material information and preparing interactive cost estimates. Delivered the iOS experience, including tablet-responsive flows, onboarding, sharing, and the App Store review process.',
      stack: ['Vue 3', 'Quasar', 'Capacitor', 'TypeScript', 'iOS', 'iPadOS'],
    },
    {
      id: 'mentor-ai',
      name: 'Mentor AI',
      period: 'Jun 2026 — Present',
      summary:
        'A personal English-learning PWA designed around listening, speaking, vocabulary practice, progress tracking, and speech features, with further development planned.',
      stack: ['Vue 3', 'TypeScript', 'Quasar', 'Pinia', 'PWA', 'Express'],
    },
    {
      id: 'my-shift',
      name: 'My Shift',
      period: 'Jun 2026 — Present',
      summary:
        'A multilingual shift-planning application with reminders, countdowns, and practical productivity features.',
      stack: ['Vue 3', 'TypeScript', 'Quasar', 'Capacitor', 'PWA'],
    },
  ] as Project[],
  skillGroups: [
    {
      title: 'Core frontend',
      skills: ['Vue 2/3', 'Composition API', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      title: 'Application architecture',
      skills: ['Quasar', 'Vuetify', 'Pinia', 'Vuex', 'RBAC', 'REST API', 'Axios'],
    },
    {
      title: 'Delivery & platforms',
      skills: ['Vite', 'Git', 'GitHub', 'GitLab', 'Capacitor', 'Cordova', 'Figma'],
    },
    {
      title: 'Additional experience',
      skills: ['Tailwind CSS', 'Laravel', 'PostgreSQL', 'MySQL', 'Agile'],
    },
  ],
  languages: ['English — B1', 'Ukrainian — Native', 'Russian — Native'],
  teaching: {
    organization: 'IT2.0 School',
    summary:
      'Conducted HTML and CSS workshops and mentored beginner frontend developers.',
  },
} as const satisfies Profile
