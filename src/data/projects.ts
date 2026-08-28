import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "MoGlasses",
    slug: "moglasses",
    description:
      "An e-commerce platform for selling glasses, offering a smooth browsing and purchasing experience.",
    problem:
      "Customers shopping for glasses online need an intuitive, visually appealing storefront that makes it easy to browse, filter, and purchase eyewear.",
    solution:
      "Built a dedicated glasses e-commerce application with a clean product catalog, detailed product pages, and a streamlined checkout flow.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    frontend: ["React", "TypeScript", "Tailwind CSS"],
    features: [
      "Product catalog and filtering",
      "Detailed product pages",
      "Shopping cart functionality",
      "Responsive design across devices",
      "Clean and modern UI",
    ],
    githubUrl: "https://github.com/Moh0147/abode-assist-flow.git",
    liveUrl: undefined,
    image: "/projects/moglasses.svg",
    featured: true,
  },
  {
    id: 2,
    title: "DataWire",
    slug: "datawire",
    description:
      "A platform for data scientists to explore datasets and machine learning models in one place.",
    problem:
      "Data scientists need a unified environment to load, inspect, and interact with datasets and trained models without switching between multiple tools.",
    solution:
      "Built DataWire as an exploration-focused platform that lets data scientists browse datasets, visualize distributions, and interact with models through a clean interface.",
    technologies: ["Python", "React", "TypeScript", "Tailwind CSS"],
    backend: ["Python"],
    frontend: ["React", "TypeScript", "Tailwind CSS"],
    features: [
      "Dataset exploration and preview",
      "Model browsing and interaction",
      "Data visualization",
      "Clean and intuitive interface",
      "Responsive layout",
    ],
    githubUrl: "https://github.com/Moh0147/DatawireRepository.git",
    liveUrl: undefined,
    image: "/projects/datawire.svg",
    featured: true,
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    slug: "personal-portfolio-website",
    description:
      "A modern, responsive developer portfolio built with React, TypeScript, and Tailwind CSS.",
    problem:
      "A professional online presence is essential for recruiters, clients, and collaborators to evaluate backend and full-stack capability beyond a résumé.",
    solution:
      "Designed and built a fast, accessible portfolio with a clear information architecture, a project showcase, and a structured contact form ready to integrate with a backend later.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router", "Framer Motion"],
    frontend: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router", "Framer Motion"],
    database: [],
    features: [
      "Multi-page routing",
      "Dark and light theme",
      "Responsive across breakpoints",
      "Reusable component system",
      "Data-driven project showcase",
      "Accessible semantic markup",
    ],
    githubUrl: "[Add GitHub repository URL]",
    liveUrl: undefined,
    image: "/projects/portfolio.svg",
    featured: false,
  },
];

export const getFeaturedProjects = (): Project[] =>
  projects.filter((project) => project.featured);

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);
