import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "School Management System",
    slug: "school-management-system",
    description:
      "A full-stack platform for managing students, teachers, courses, and results in a single integrated system.",
    problem:
      "Many schools still rely on fragmented spreadsheets and manual paperwork, leading to errors in student records, slow reporting, and difficulty tracking academic results across classes.",
    solution:
      "Built a centralized platform where administrators, teachers, and students interact with structured, role-based workflows backed by a REST API and a relational database.",
    technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL", "React", "TypeScript"],
    backend: ["Python", "Django", "Django REST Framework"],
    frontend: ["React", "TypeScript", "Tailwind CSS"],
    database: ["PostgreSQL"],
    features: [
      "Student and teacher management",
      "Course and class assignment",
      "Role-based access control",
      "Authentication and authorization",
      "Results recording and reporting",
      "REST API for frontend integration",
    ],
    githubUrl: "[Add GitHub repository URL]",
    liveUrl: undefined,
    image: "/projects/school-management.svg",
    featured: true,
  },
  {
    id: 2,
    title: "Inventory Management System",
    slug: "inventory-management-system",
    description:
      "A full-stack inventory and sales tracking system for small and medium businesses.",
    problem:
      "Small businesses often lose track of stock levels, sales, and supplier data, resulting in overstocking, understocking, and inaccurate reporting.",
    solution:
      "Designed a structured application that tracks products, stock movements, and sales in real time, exposing a clean REST API consumed by a React frontend dashboard.",
    technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL", "React", "TypeScript"],
    backend: ["Django", "Django REST Framework"],
    frontend: ["React", "TypeScript", "Tailwind CSS"],
    database: ["PostgreSQL"],
    features: [
      "Product and category management",
      "Stock movement tracking",
      "Sales recording and history",
      "Reporting dashboard",
      "API integration for external tools",
      "Responsive admin interface",
    ],
    githubUrl: "[Add GitHub repository URL]",
    liveUrl: undefined,
    image: "/projects/inventory.svg",
    featured: true,
  },
  {
    id: 3,
    title: "REST API Backend",
    slug: "rest-api-backend",
    description:
      "A production-style REST API backend with JWT authentication, permissions, and structured CRUD endpoints.",
    problem:
      "Demonstrating clean, secure, and well-documented API design requires a real backend with proper authentication, role-based permissions, and consistent error handling.",
    solution:
      "Built a Django REST Framework backend with JWT-based authentication, granular permissions, filtering, pagination, and auto-generated API documentation.",
    technologies: ["Python", "Django", "Django REST Framework", "JWT", "PostgreSQL"],
    backend: ["Django", "Django REST Framework", "Simple JWT"],
    database: ["PostgreSQL"],
    features: [
      "JWT-based authentication",
      "Role-based permissions",
      "Filtering, search, and pagination",
      "Standardized CRUD endpoints",
      "Structured error responses",
      "API documentation (OpenAPI / Swagger)",
    ],
    githubUrl: "[Add GitHub repository URL]",
    liveUrl: undefined,
    image: "/projects/rest-api.svg",
    featured: true,
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    slug: "personal-portfolio-website",
    description:
      "A modern, responsive developer portfolio built with React, TypeScript, and Tailwind CSS.",
    problem:
      "A professional online presence is essential for recruiters, clients, and collaborators to evaluate backend and full-stack capability beyond a résumé.",
    solution:
      "Designed and built a fast, accessible portfolio with a clear information architecture, a project showcase, and a structured contact form ready to integrate with a backend later.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router", "Framer Motion"],
    backend: [],
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
