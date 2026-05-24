export interface Project {
  title: string
  description: string
  bullets: string[]
  tags: string[]
  github: string
  live?: string
  category: 'solo' | 'group' | 'work'
}

export const projects: Project[] = [
  {
    title: 'Genshin Impact Fan App',
    description:
      'Full-stack React fan web application for the game Genshin Impact featuring a type racer mini-game, information pages, and a live Firebase-backed user authentication system.',
    bullets: [
      'React + TypeScript with react-router for 7 client-side pages',
      'useState & useEffect hooks for interactive type-racing feature',
      'Regex field validation with real-time user feedback',
      'Firebase Firestore & Auth for CRUD operations with async/await',
      'GitHub webhook + Jenkins + Selenium WebDriver CI pipeline',
    ],
    tags: ['React', 'TypeScript', 'Firebase', 'Jenkins', 'Selenium'],
    github: 'https://github.com/aaradar/genshin3',
    live: 'https://aaradar.github.io/genshin3/',
    category: 'solo',
  },
  {
    title: 'SEG3125 Portfolio — Case Studies',
    description:
      'Academic portfolio React app for SEG3125 featuring in-depth case studies on UI/UX design projects developed throughout the term.',
    bullets: [
      'Built with React showcasing iterative UX design process',
      'Structured case studies with user research and prototyping',
      'Deployed via GitHub Pages',
    ],
    tags: ['React', 'UX Design', 'Case Studies', 'GitHub Pages'],
    github: 'https://github.com/aaradar/portfolio',
    live: 'https://aaradar.github.io/portfolio/',
    category: 'solo',
  },
  {
    title: 'LEAF — Landscape Evolution & Forecasting',
    description:
      'Remote-sensing pipeline system developed at NRC for satellite imagery analysis across Canada using Sentinel-2 data.',
    bullets: [
      'Modular Python parameter-prep system for pre-production validation',
      'KML workflow engine parsing coordinates and site-specific dates',
      'Converted to region dictionaries with spatial buffering & temporal windows',
      'Orchestration layer for Sentinel-2 satellite imagery pipeline',
    ],
    tags: ['Python', 'Remote Sensing', 'Sentinel-2', 'KML', 'NRC'],
    github: 'https://github.com/aaradar/LEAF_runner',
    category: 'work',
  },
  {
    title: 'Android Attendance Manager',
    description:
      'Group project Android app for event attendance management, built with Android Studio and Firebase for real-time cloud data.',
    bullets: [
      'Led a team of 6 CS students as project coordinator',
      'Firebase Auth + Realtime DB for Events and Users cloud storage',
      'Git branching strategy for parallel feature development',
      'CircleCI continuous integration pipeline for JUnit tests',
    ],
    tags: ['Android', 'Java', 'Firebase', 'CircleCI', 'JUnit'],
    github: 'https://github.com/uOttawaSEG/project-project-group-12',
    category: 'group',
  },
  {
    title: 'Hotel Management Website',
    description:
      'Full-stack hotel management system with Flask backend, React frontend, and an SQLite relational database for CSI2132.',
    bullets: [
      'Flask REST API backend with SQLite database',
      'React frontend for booking and room management UI',
      'Wrote complex SQL queries for hotel data operations',
      'Group collaboration with version-controlled codebase',
    ],
    tags: ['React', 'Flask', 'SQLite', 'SQL', 'Python'],
    github: 'https://github.com/AnnMD01/CSI2132-GROUP40',
    category: 'group',
  },
  {
    title: 'Sekiranun — Pygame Visual Novel Engine',
    description:
      'Modular visual novel engine built in Python + Pygame featuring reusable scene, dialogue, and character systems.',
    bullets: [
      'Modular architecture for reusable scene & character components',
      'Custom dialogue rendering and branching story engine',
      'Asset pipeline for sprites, backgrounds, and audio',
    ],
    tags: ['Python', 'Pygame', 'Game Dev', 'Modular Design'],
    github: 'https://github.com/aaradar/Sekiranun',
    category: 'solo',
  },
]
