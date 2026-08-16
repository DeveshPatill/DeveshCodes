export interface Skill {
  name: string;
  icon?: string;
  category: 'frontend' | 'backend' | 'languages' | 'tools' | 'databases' | 'ai' | 'data';
  proficiency: number;
}

export const skills: Skill[] = [
  // Languages
  { name: 'C', category: 'languages', proficiency: 75 },
  { name: 'Python', category: 'languages', proficiency: 85 },
  { name: 'Java', category: 'languages', proficiency: 60 },
  { name: 'JavaScript / ES6+', category: 'languages', proficiency: 80 },

  // Frontend
  { name: 'HTML5', category: 'frontend', proficiency: 90 },
  { name: 'CSS3', category: 'frontend', proficiency: 85 },
  { name: 'React.js', category: 'frontend', proficiency: 80 },
  { name: 'Angular', category: 'frontend', proficiency: 75 },
  { name: 'Bootstrap', category: 'frontend', proficiency: 80 },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 85 },

  // Backend
  { name: 'Django', category: 'backend', proficiency: 80 },
  { name: 'Flask', category: 'backend', proficiency: 75 },
  { name: 'Node.js', category: 'backend', proficiency: 70 },
  { name: 'Express.js', category: 'backend', proficiency: 70 },
  { name: 'Next.js', category: 'backend', proficiency: 75 },
  { name: 'REST APIs', category: 'backend', proficiency: 80 },
  { name: 'JWT Authentication', category: 'backend', proficiency: 75 },

  // Databases
  { name: 'MySQL', category: 'databases', proficiency: 80 },
  { name: 'MongoDB', category: 'databases', proficiency: 75 },
  { name: 'PostgreSQL', category: 'databases', proficiency: 75 },
  { name: 'SQL', category: 'databases', proficiency: 80 },

  // Data / Visualization
  { name: 'Power BI', category: 'data', proficiency: 75 },
  { name: 'Tableau', category: 'data', proficiency: 70 },
  { name: 'Advanced Excel', category: 'data', proficiency: 80 },

  // Developer / Cloud / Tools
  { name: 'Git', category: 'tools', proficiency: 85 },
  { name: 'GitHub', category: 'tools', proficiency: 85 },
  { name: 'Postman', category: 'tools', proficiency: 80 },
  { name: 'CI/CD', category: 'tools', proficiency: 70 },
  { name: 'Cloudinary', category: 'tools', proficiency: 70 },
  { name: 'VS Code', category: 'tools', proficiency: 90 },
  { name: 'Vercel', category: 'tools', proficiency: 80 },
  { name: 'Render', category: 'tools', proficiency: 75 },

  // AI / ML
  { name: 'Artificial Intelligence', category: 'ai', proficiency: 70 },
  { name: 'Machine Learning Theory', category: 'ai', proficiency: 65 },
  { name: 'OpenAI', category: 'ai', proficiency: 70 },
  { name: 'Claude AI', category: 'ai', proficiency: 65 },
];

export const skillCategories = [
  { key: 'languages', label: 'Languages', icon: '💻' },
  { key: 'frontend', label: 'Frontend', icon: '🌐' },
  { key: 'backend', label: 'Backend', icon: '⚙️' },
  { key: 'databases', label: 'Databases', icon: '🗄️' },
  { key: 'data', label: 'Data & Visualization', icon: '📊' },
  { key: 'tools', label: 'Tools & Cloud', icon: '🔧' },
  { key: 'ai', label: 'AI / ML', icon: '🤖' },
] as const;

export interface TeachingSubject {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const teachingSubjects: TeachingSubject[] = [
  {
    id: 'python',
    title: 'Python',
    description: 'Learn Python fundamentals, programming concepts, problem solving, and practical coding.',
    icon: '🐍',
  },
  {
    id: 'sql',
    title: 'SQL',
    description: 'Learn SQL fundamentals, queries, filtering, joins, database operations, and practical database concepts.',
    icon: '🗄️',
  },
  {
    id: 'html-css',
    title: 'HTML & CSS',
    description: 'Learn how to structure and style modern responsive web pages.',
    icon: '🌐',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    description: 'Learn JavaScript fundamentals and the core concepts used in modern web development.',
    icon: '⚡',
  },
  {
    id: 'react',
    title: 'React.js',
    description: 'Learn the fundamentals of building modern user interfaces with React.js.',
    icon: '⚛️',
  },
];

export interface TeachingMethod {
  id: string;
  title: string;
  description: string;
}

export const teachingMethods: TeachingMethod[] = [
  {
    id: 'one-to-one',
    title: 'One-to-One Learning',
    description: 'Personal attention during private sessions.',
  },
  {
    id: 'concept-clarity',
    title: 'Concept Clarity',
    description: 'Understand concepts instead of simply memorizing syntax.',
  },
  {
    id: 'hands-on',
    title: 'Hands-On Practice',
    description: 'Learn by writing and practicing actual code.',
  },
  {
    id: 'doubt-solving',
    title: 'Doubt Solving',
    description: 'Get help understanding programming problems and errors.',
  },
  {
    id: 'project-based',
    title: 'Project-Based Learning',
    description: 'Apply concepts through practical exercises and projects.',
  },
];

export interface FreelanceService {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const freelanceServices: FreelanceService[] = [
  {
    id: 'business-websites',
    title: 'Business Websites',
    description: 'Modern responsive websites for businesses and professionals.',
    icon: '🏢',
  },
  {
    id: 'portfolio-websites',
    title: 'Portfolio Websites',
    description: 'Personal and professional portfolio websites.',
    icon: '📁',
  },
  {
    id: 'ecommerce-websites',
    title: 'E-Commerce Websites',
    description: 'Product pages, shopping carts, filtering, wishlists, and related functionality.',
    icon: '🛒',
  },
  {
    id: 'custom-web-apps',
    title: 'Custom Web Applications',
    description: 'Frontend and backend applications built around specific requirements.',
    icon: '⚙️',
  },
  {
    id: 'fullstack-development',
    title: 'Full-Stack Development',
    description: 'Complete web applications with frontend, backend, APIs, and databases.',
    icon: '🔧',
  },
  {
    id: 'website-deployment',
    title: 'Website Deployment',
    description: 'Deploy applications using platforms such as Vercel and Render.',
    icon: '☁️',
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    id: 'saas-ai-agent-platform',
    title: 'SaaS AI Agent Platform',
    description: 'Developed a full-stack SaaS AI agent platform using Next.js, React, and PostgreSQL with OAuth-based authentication and scalable APIs. Integrated AI features including transcription, summarization, and real-time video calling using OpenAI and Stream SDK.',
    longDescription: 'Developed a full-stack SaaS AI agent platform using Next.js, React, and PostgreSQL with OAuth-based authentication and scalable APIs. Integrated AI features including transcription, summarization, and real-time video calling using OpenAI and Stream SDK.',
    technologies: ['Next.js', 'React.js', 'PostgreSQL', 'tRPC', 'OAuth', 'OpenAI', 'WebRTC', 'Stream SDK'],
    features: [
      'OAuth-based authentication',
      'Scalable API architecture',
      'AI-powered transcription',
      'AI-powered summarization',
      'Real-time video calling with WebRTC',
      'Stream SDK integration',
    ],
    githubUrl: undefined,
    liveUrl: undefined,
    featured: true,
    date: 'December 2025',
  },
  {
    id: 'ecommerce-website',
    title: 'E-Commerce Website',
    description: 'Built a responsive e-commerce application using React.js and Tailwind CSS. Implemented product filtering, wishlist, shopping cart, and Local Storage functionality. Developed reusable components and optimized user experience across devices.',
    longDescription: 'Built a responsive e-commerce application using React.js and Tailwind CSS. Implemented product filtering, wishlist, shopping cart, and Local Storage functionality. Developed reusable components and optimized user experience across devices.',
    technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'Local Storage'],
    features: [
      'Product filtering',
      'Wishlist functionality',
      'Shopping cart',
      'Local Storage persistence',
      'Reusable component architecture',
      'Responsive design across devices',
    ],
    githubUrl: undefined,
    liveUrl: undefined,
    featured: true,
    date: 'May 2026',
  },
  {
    id: 'student-study-portal',
    title: 'Student Study Portal',
    description: 'Built a Django-based Student Study Portal with notes, to-do, homework, and book management features. Integrated APIs such as Wikipedia and Dictionary APIs and unit conversion tools for enhanced learning support.',
    longDescription: 'Built a Django-based Student Study Portal with notes, to-do, homework, and book management features. Integrated APIs such as Wikipedia and Dictionary APIs and unit conversion tools for enhanced learning support.',
    technologies: ['Python', 'Django'],
    features: [
      'Notes management',
      'To-do list',
      'Homework tracking',
      'Book management',
      'Wikipedia API integration',
      'Dictionary API integration',
      'Unit conversion tools',
    ],
    githubUrl: undefined,
    liveUrl: undefined,
    featured: true,
    date: 'January 2024',
  },
];

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  responsibilities: string[];
  technologies: string[];
  type: 'full-time' | 'contract' | 'internship' | 'freelance';
}

export const experience: Experience[] = [
  {
    id: 'perpex-internship',
    role: 'Backend Intern (Django)',
    company: 'Perpex',
    location: 'Mumbai, Maharashtra (Remote)',
    startDate: '2025-07',
    endDate: '2025-10',
    description: 'Developed backend modules and APIs using Django for SaaS-based applications. Collaborated in an Agile environment, implementing features and improving application functionality.',
    responsibilities: [
      'Developed backend modules and APIs using Django',
      'Built REST APIs for SaaS-based applications',
      'Collaborated in an Agile development environment',
      'Implemented new features and improved application functionality',
    ],
    technologies: ['Django', 'Python', 'REST APIs', 'PostgreSQL'],
    type: 'internship',
  },
  {
    id: 'ai-chef-master-internship',
    role: 'Backend Developer Intern',
    company: 'AI Chef Master',
    location: 'Mumbai, Maharashtra (Remote)',
    startDate: '2025-04',
    endDate: '2025-07',
    description: 'Developed and maintained REST APIs using Flask and MongoDB for AI-powered web applications. Collaborated with frontend and backend teams to build scalable, high-performance solutions.',
    responsibilities: [
      'Developed and maintained REST APIs using Flask',
      'Worked with MongoDB for data storage',
      'Built APIs for AI-powered web applications',
      'Collaborated with frontend and backend teams',
      'Built scalable, high-performance solutions',
    ],
    technologies: ['Flask', 'Python', 'MongoDB', 'REST APIs'],
    type: 'internship',
  },
];

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  specialization?: string;
  type: 'degree' | 'course';
}

export const education: Education[] = [
  {
    id: 'msc-it',
    degree: 'Master of Science in Information Technology',
    institution: 'Mumbai University – UDIT',
    location: 'Mumbai, Maharashtra',
    startDate: 'August 2024',
    endDate: 'April 2026',
    specialization: 'Specialization: Artificial Intelligence',
    type: 'degree',
  },
  {
    id: 'bsc-it',
    degree: 'Bachelor of Science in Information Technology',
    institution: "St. Rock's Degree College of Commerce and Science",
    location: 'Mumbai, Maharashtra',
    startDate: 'July 2021',
    endDate: 'May 2024',
    type: 'degree',
  },
  {
    id: 'data-science-course',
    degree: 'Master in Data Science & Analytics with Artificial Intelligence',
    institution: 'IT Vedant Institute',
    location: 'Mumbai',
    startDate: 'July 2024',
    endDate: 'May 2025',
    type: 'course',
  },
  {
    id: 'fullstack-course',
    degree: 'Fullstack Developer Course',
    institution: 'DADE',
    location: 'Mumbai',
    startDate: 'Currently Pursuing',
    endDate: '',
    type: 'course',
  },
];

export interface Certification {
  name: string;
  issuer?: string;
  year?: string;
}

export const certifications: Certification[] = [
  { name: 'SQL', issuer: 'HackerRank', year: '2024' },
  { name: 'SQL Basic', issuer: 'HackerRank', year: '2024' },
  { name: 'SQL Basic', issuer: 'Udemy', year: '2024' },
  { name: 'Python', issuer: '', year: '2024' },
  { name: 'Data Fundamentals', issuer: '', year: '2024' },
  { name: 'Machine Learning Essentials', issuer: '', year: '2024' },
  { name: 'Data Science & AI Mastery', issuer: '', year: '2025' },
  { name: 'Research Methodology', issuer: '', year: '2025' },
];

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/DeveshPatill', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/devp21/', icon: 'linkedin' },
  { name: 'Email', url: 'mailto:patildevesh677@gmail.com', icon: 'email' },
];

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Learn With Me', href: '#learn' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const siteConfig = {
  name: 'DeveshCodes',
  title: 'Devesh Vijay Patil',
  heroTitle: 'Devesh Patil',
  professionalTitle: 'Full-Stack Developer | Software Developer | AI Enthusiast',
  description: 'Software Developer with an M.Sc. in Information Technology (AI Specialization) and experience developing web applications using Python, Django, Flask, React.js, SQL, MongoDB, and REST APIs. Skilled in full-stack development, database management, authentication systems, API integration, and building scalable software solutions.',
  email: 'patildevesh677@gmail.com',
  phone: '+91 9833142939',
  location: 'Mumbai, Maharashtra, India',
  resumeUrl: '/resume/Devesh-Patil-Resume.pdf',
  profileImage: '/images/profile.jpeg',
};