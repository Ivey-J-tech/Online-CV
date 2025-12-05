/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  TestimonialsType,
  ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
  Briefcase,
  Facebook,
  FileText,
  Globe,
  Home,
  Instagram,
  Layers,
  Mail,
  MessageCircle,
  Palette,
  Rocket,
  Settings,
  Smartphone,
  Twitter,
  User,
  Youtube,
} from 'lucide-react';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Services',
    link: '#services',
    icon: Settings,
  },
  { label: 'Resume', link: '#resume', icon: FileText },
  {
    label: 'Reviews',
    link: '#testimonials',
    icon: MessageCircle,
  },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Facebook,
    label: 'Facebook',
    link: '/#',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    link: '/#',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    link: '/#',
  },
  {
    icon: Youtube,
    label: 'Youtube',
    link: '/#',
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: '/images/project-ph-1.jpeg',
    title: 'Full stack music app',
    tags: ['API', 'Development'],
    projectLink: 'https://musify-5al0.onrender.com/',
  },
  {
    imgSrc: '/images/project-ph-2.jpeg',
    title: 'Full stack music app',
    tags: ['API', 'Development'],
    projectLink: 'https://musify-5al0.onrender.com/',
  },
  {
    imgSrc: '/images/project-ph-3.jpeg',
    title: 'Full stack music app',
    tags: ['API', 'Development'],
    projectLink: 'https://musify-5al0.onrender.com/',
  },
  {
    imgSrc: '/images/project-ph-4.jpeg',
    title: 'Full stack music app',
    tags: ['API', 'Development'],
    projectLink: 'https://musify-5al0.onrender.com/',
  },
];

const education: ExperienceType[] = [
  {
    year: 'Jan 2025 – Oct 2025',
    title: 'FullStack Development and Software Engineering',
    institute: 'The App Brewery',
    desc: 'Focused on front-end development, Back-end, and web application architecture, including databases.',
  },
  {
    year: 'Jan 2025 – Jan 2026',
    title: 'Immersive FullStack Development and Software Engineering',
    institute: 'HyperionDev',
    desc: 'Learned modern JavaScript, React, and Back-end architecture through real hands-on coding.',
  },
  {
    year: 'Nov 2024 - Sep 2025',
    title: 'MySQL Bootcamp',
    institute: 'Udemy',
    desc: 'Explored how the MySQL database works and how to integrate it.',
  },
];

const experience: ExperienceType[] = [
  {
    year: '2023 – present',
    title: 'FreeCodeCamp Self taught Student',
    institute: 'FreeCodeCamp',
    desc: 'When I started learning to code in 2023. I learned hands-on coding via FreeCodeCamp.',
  },
  {
    year: 'Sep 2025 – present',
    title: 'Software Engineer/ Software Architect',
    institute: 'DIcode Digital Solutions',
    desc: 'Designed and developed web interfaces for startups using React, Tailwind, TypeScript and Figma.',
  },
];

const tools: ToolsType[] = [
  {
    label: 'Figma',
    imgSrc: '/images/tools/figma.svg',
  },
  {
    label: 'CSS',
    imgSrc: '/images/tools/css3.svg',
  },
  {
    label: 'Tailwind CSS',
    imgSrc: '/images/tools/tailwindcss.svg',
  },
  {
    label: 'React',
    imgSrc: '/images/tools/react.svg',
  },
  {
    label: 'JavaScript',
    imgSrc: '/images/tools/javascript.svg',
  },
  {
    label: 'Node.js',
    imgSrc: '/images/tools/nodejs.svg',
  },
  {
    label: 'Express.js',
    imgSrc: '/images/tools/expressjs.svg',
  },
  {
    label: 'Mongodb',
    imgSrc: '/images/tools/mongodb.svg',
  },
];

const services: ServiceType[] = [
  {
    title: 'Brand Identity',
    desc: 'I craft modern visual identities that help brands stand out through strong typography, colors, and minimal design.',
    projects: 'projects still under development',
    icon: <Palette className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'UI/UX Design',
    desc: 'Designing clean, intuitive, and user-friendly interfaces that improve user experience and boost conversions.',
    projects: 'projects still under development',
    icon: <Layers className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Web Development',
    desc: 'Building high-performance, SEO-friendly websites using Next.js, Tailwind, and modern web technologies.',
    projects: 'projects still under development',
    icon: <Globe className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Mobile App Design',
    desc: 'Creating pixel-perfect app interfaces optimized for both iOS and Android devices with smooth usability using Flutter.',
    projects: 'projects still under development',
    icon: <Smartphone className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Product Launch Strategy',
    desc: 'Helping startups prepare their digital products for launch with design systems, marketing pages, and assets.',
    projects: 'projects still under development',
    icon: <Rocket className='h-6 w-6 text-green-400' />,
  },
];

const statsData: StatsType[] = [
  {
    number: '05+',
    label: 'Happy Clients',
  },
  {
    number: '02+',
    label: 'Years Of Experience',
  },
  {
    number: '15+',
    label: 'Projects still under development',
  },
];

const testimonials: TestimonialsType[] = [
  {
    name: 'Leonardo Barnes',
    role: 'Founder at Imbovane Business and strategy',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Working with Iverson was an absolute pleasure. His attention to detail, creative insights, and ability to translate complex ideas into stunning visuals truly set him apart. He consistently went above and beyond to ensure the project exceeded expectations.',
    link: '#',
  },
  {
    name: 'Nadia Benjamin',
    role: 'Founder at Ilhaams Flowers',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'Iverson brought my brand vision to life better than I could have imagined. He is not only professional and highly skilled but also incredibly responsive and collaborative. Every aspect of the project was handled with precision and creativity.',
    link: '#',
  },
  {
    name: 'Uzubenathi',
    role: 'CEO at U CAN FITNESS',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'From UI/UX design to front-end implementation, Iverson handled every detail flawlessly. His problem-solving skills, innovative approach, and dedication made the entire process smooth and enjoyable. I would highly recommend him for any design-driven project.',
    link: '#',
  },
];

export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,
  testimonials,
};
