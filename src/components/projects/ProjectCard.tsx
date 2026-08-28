import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../types/project";
import { Badge } from "../common/Badge";
import { GithubIcon } from "../common/BrandIcons";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      id={project.slug}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="card flex flex-col p-6 sm:p-7"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-text-subtle">
          {String(index + 1).padStart(2, "0")}
        </span>
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 text-xs text-text-subtle transition-colors hover:text-accent"
            aria-label={`${project.title} GitHub repository`}
          >
            <GithubIcon size={14} /> Repo
          </a>
        ) : null}
      </div>

      <h3 className="mt-3 text-lg font-semibold text-text">{project.title}</h3>
      <p className="mt-2 text-sm text-text-muted">{project.description}</p>

      <dl className="mt-5 space-y-4 text-sm">
        <div>
          <dt className="text-xs font-medium uppercase tracking-widest text-text-subtle">Problem</dt>
          <dd className="mt-1 text-text-muted">{project.problem}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-widest text-text-subtle">Solution</dt>
          <dd className="mt-1 text-text-muted">{project.solution}</dd>
        </div>
      </dl>

      {(project.backend?.length ?? 0) + (project.frontend?.length ?? 0) + (project.database?.length ?? 0) >
      0 ? (
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {project.backend && project.backend.length > 0 ? (
            <StackColumn label="Backend" items={project.backend} />
          ) : null}
          {project.frontend && project.frontend.length > 0 ? (
            <StackColumn label="Frontend" items={project.frontend} />
          ) : null}
          {project.database && project.database.length > 0 ? (
            <StackColumn label="Database" items={project.database} />
          ) : null}
        </div>
      ) : null}

      <div className="mt-5">
        <p className="text-xs font-medium uppercase tracking-widest text-text-subtle">Key features</p>
        <ul className="mt-2 space-y-1.5 text-sm text-text-muted">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <Badge key={tech} variant="outline">
            {tech}
          </Badge>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2 pt-4">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex h-9 items-center gap-1.5 rounded-md bg-accent px-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Live demo
            <ArrowUpRight size={14} aria-hidden />
          </a>
        ) : null}
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border bg-surface px-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon size={14} /> GitHub
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}

function StackColumn({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-widest text-text-subtle">{label}</p>
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {items.map((item) => (
          <li key={item}>
            <Badge variant="accent">{item}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}
