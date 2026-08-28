export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  backend?: string[];
  frontend?: string[];
  database?: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
}
