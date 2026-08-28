import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../common/Container";
import { SectionTitle } from "../common/SectionTitle";
import { Button } from "../common/Button";
import { GithubIcon } from "../common/BrandIcons";
import { getFeaturedProjects } from "../../data/projects";
import { Badge } from "../common/Badge";

export function FeaturedProjects() {
  const featured = getFeaturedProjects().slice(0, 3);

  return (
    <section className="section">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle
            eyebrow="Featured work"
            title="Projects focused on real engineering"
            description="A small selection of recent work. Each project emphasizes the problem, the solution, and the engineering decisions behind it."
          />
          <Button as="link" to="/projects" variant="outline" size="md" iconRight={<ArrowUpRight size={16} aria-hidden />}>
            All projects
          </Button>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                to={`/projects#${project.slug}`}
                className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-all hover:border-accent hover:shadow-glow"
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
                      onClick={(e) => e.stopPropagation()}
                      className="text-text-subtle transition-colors hover:text-accent"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <GithubIcon size={16} />
                    </a>
                  ) : null}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-text group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-text-muted">{project.description}</p>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <li key={tech}>
                      <Badge variant="outline">{tech}</Badge>
                    </li>
                  ))}
                </ul>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  View case study
                  <ArrowUpRight
                    size={14}
                    aria-hidden
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
