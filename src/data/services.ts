import type { Service } from "../types/service";

export const services: Service[] = [
  {
    id: 1,
    title: "Backend Development",
    description:
      "Development of reliable, secure, and maintainable server-side applications using Python and Django.",
    icon: "server",
    capabilities: [
      "Django application architecture",
      "Business logic and data modeling",
      "Background tasks and scheduled jobs",
      "Performance and reliability improvements",
    ],
  },
  {
    id: 2,
    title: "REST API Development",
    description:
      "Designing and building RESTful APIs for websites, mobile applications, and external integrations.",
    icon: "api",
    capabilities: [
      "Django REST Framework",
      "JWT and token-based authentication",
      "Role-based permissions and access control",
      "Filtering, pagination, and versioning",
      "OpenAPI / Swagger documentation",
    ],
  },
  {
    id: 3,
    title: "Database Design",
    description:
      "Designing structured relational databases that scale with the application and reflect real-world domain models.",
    icon: "database",
    capabilities: [
      "PostgreSQL, MySQL, and SQLite",
      "Schema design and migrations",
      "Indexes, constraints, and relationships",
      "Query optimization and profiling",
    ],
  },
  {
    id: 4,
    title: "Full-Stack Web Development",
    description:
      "Building complete applications using Django on the backend and React or Angular on the frontend.",
    icon: "layers",
    capabilities: [
      "End-to-end feature delivery",
      "API and frontend integration",
      "Authentication flows across the stack",
      "Deployment-ready project structure",
    ],
  },
  {
    id: 5,
    title: "API Integration",
    description:
      "Connecting applications with third-party services and external APIs in a clean, fault-tolerant way.",
    icon: "plug",
    capabilities: [
      "Payment and identity providers",
      "Email and notification services",
      "Webhooks and event-driven flows",
      "Resilient error handling and retries",
    ],
  },
  {
    id: 6,
    title: "Frontend Development",
    description:
      "Building modern, responsive, and accessible frontend interfaces using React, TypeScript, and Angular.",
    icon: "code",
    capabilities: [
      "React with TypeScript",
      "Angular applications",
      "Responsive layouts with Tailwind CSS",
      "Accessible, semantic component design",
    ],
  },
];
