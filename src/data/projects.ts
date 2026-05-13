export type Project = {
  title: string;
  subtitle: string;
  tech: string[];
  features: string[];
  type: string;
  github: string;
  demo: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: 'SecureVault',
    subtitle: 'Secure Cloud File Storage System',
    tech: ['Python', 'Supabase', 'Cryptography'],
    features: [
      'AES-256 encryption',
      'Secure cloud storage',
      'Authentication system',
      'Chunking and compression',
      'SHA hashing for deduplication',
    ],
    type: 'Security',
    github: '#',
    demo: '#',
    accent: 'from-indigo-500 via-sky-500 to-cyan-400',
  },
  {
    title: 'RFP Insight',
    subtitle: 'RFP & Tender Analysis Platform',
    tech: ['Python', 'Streamlit', 'Flask'],
    features: [
      'Requirement extraction from RFP documents',
      'AI-powered summarization',
      'Matching score analysis',
      'Visual dashboards',
      'Final report generation',
      'Pricing insights',
    ],
    type: 'AI',
    github: '#',
    demo: '#',
    accent: 'from-fuchsia-500 via-violet-500 to-indigo-500',
  },
  {
    title: 'RecipeGenie',
    subtitle: 'AI-Powered Recipe Finder',
    tech: ['Python', 'Flask', 'Pandas'],
    features: [
      'Recipe recommendations',
      'Ingredient-based search',
      'Intelligent matching logic',
      'Structured dataset processing',
    ],
    type: 'Data',
    github: '#',
    demo: '#',
    accent: 'from-emerald-500 via-teal-400 to-cyan-400',
  },
  {
    title: 'SpendWise',
    subtitle: 'Intelligent Expense Tracker',
    tech: ['Java', 'MySQL'],
    features: [
      'Expense tracking',
      'Budget insights',
      'User transaction management',
      'Data storage with MySQL',
    ],
    type: 'Finance',
    github: '#',
    demo: '#',
    accent: 'from-amber-500 via-orange-500 to-rose-500',
  },
  {
    title: 'CareSync',
    subtitle: 'Clinical Record & Appointment System',
    tech: ['Java', 'MySQL'],
    features: [
      'Patient records management',
      'Appointment scheduling',
      'CRUD operations',
      'Clinical data management',
    ],
    type: 'Health',
    github: '#',
    demo: '#',
    accent: 'from-sky-500 via-cyan-500 to-emerald-500',
  },
  {
    title: 'ForecastIQ',
    subtitle: 'Business Data Analytics & Forecasting System',
    tech: ['Python', 'Pandas', 'Scikit-learn'],
    features: [
      'Predictive analytics',
      'Trend forecasting',
      'Interactive data visualizations',
      'Business insights',
    ],
    type: 'Analytics',
    github: '#',
    demo: '#',
    accent: 'from-violet-500 via-fuchsia-500 to-pink-500',
  },
];
