// ============================================
// SITE CONSTANTS & DATA
// ============================================

export const SITE_CONFIG = {
  name: "Ibtasam Ali",
  title: "Ibtasam Ali — Creative Developer & Designer",
  description:
    "Portfolio of Ibtasam Ali — a creative developer and designer specializing in frontend development, Linux, DevOps, and graphic design.",
  url: "https://ibtasamali.dev",
  email: "ibtasamali829@gmail.com",
  github: "https://github.com/Ibtasama829",
  linkedin: "https://linkedin.com/in/ibtasamali",
  instagram: "https://instagram.com/ibtasam.ali",
};

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS = {
  frontend: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "PHP",
    "Tailwind CSS",
  ],
  tools: ["Canva", "Adobe Illustrator", "Figma", "Adobe Photoshop"],
  cloud: ["Linux", "Docker", "Git", "GitHub", "CI/CD", "Cloud Computing"],
};

export const PROJECTS = [
  {
    id: 1,
    title: "Brand Identity System",
    category: "Graphic Design",
    description:
      "Complete brand identity design including logo, business cards, and brand guidelines for a modern startup. Focused on clean aesthetics and memorable visual language.",
    image: "/images/project-branding.png",
    tags: ["Illustrator", "Branding", "Identity"],
    year: "2025",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Freelance",
    description:
      "Full-stack e-commerce solution with modern UI, payment integration, and admin dashboard. Built with responsive design principles and optimized for conversion.",
    image: "/images/project-ecommerce.png",
    tags: ["Next.js", "PHP", "Tailwind"],
    year: "2025",
  },
  {
    id: 3,
    title: "Creative Poster Series",
    category: "Graphic Design",
    description:
      "A series of artistic event posters featuring bold typography and vibrant gradients. Designed for social media campaigns and large-format printing.",
    image: "/images/project-poster.png",
    tags: ["Canva", "Typography", "Print"],
    year: "2024",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    category: "Freelance",
    description:
      "Modern web application dashboard with real-time data visualization, glassmorphism design, and dark theme. Built for intuitive data exploration.",
    image: "/images/project-webapp.png",
    tags: ["React", "JavaScript", "CSS"],
    year: "2024",
  },
  {
    id: 5,
    title: "DevOps Infrastructure",
    category: "University",
    description:
      "Linux server administration and monitoring setup with automated CI/CD pipelines, container orchestration, and system health dashboards.",
    image: "/images/project-devops.png",
    tags: ["Linux", "Docker", "CI/CD"],
    year: "2024",
  },
  {
    id: 6,
    title: "Academic Research Portal",
    category: "University",
    description:
      "University research project featuring data visualization, academic paper management, and collaborative tools for research teams.",
    image: "/images/project-university.png",
    tags: ["HTML", "CSS", "JavaScript"],
    year: "2024",
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    year: "2025",
    title: "Freelance Developer & Designer",
    company: "Self-Employed",
    description:
      "Delivering end-to-end web solutions and graphic design for clients. Specializing in modern frontend development and brand identity design.",
    type: "freelance",
  },
  {
    id: 2,
    year: "2024",
    title: "Workshop Conductor",
    company: "University",
    description:
      "Conducted hands-on workshops on web development and design tools, helping fellow students learn modern frontend technologies.",
    type: "workshop",
  },
  {
    id: 3,
    year: "2024",
    title: "Frontend Developer",
    company: "University Projects",
    description:
      "Developed multiple web applications as part of university curriculum, focusing on responsive design, accessibility, and modern JavaScript frameworks.",
    type: "university",
  },
  {
    id: 4,
    year: "2023",
    title: "Graphic Designer",
    company: "Freelance",
    description:
      "Started freelancing in graphic design, creating social media content, posters, and brand materials for local businesses and events.",
    type: "freelance",
  },
];
