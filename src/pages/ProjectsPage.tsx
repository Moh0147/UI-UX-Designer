import { useEffect, useState } from "react";
import { Container } from "../components/common/Container";
import { SectionTitle } from "../components/common/SectionTitle";
import { CallToAction } from "../components/home/CallToAction";
import { ProjectGrid } from "../components/projects/ProjectGrid";
import { projects } from "../data/projects";
import { SITE } from "../utils/constants";
import { cn } from "../utils/cn";

type Filter = "all" | "backend" | "fullstack";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full-stack" },
];

function matchesFilter(project: (typeof projects)[number], filter: Filter): boolean {
  if (filter === "all") return true;
  const hasBackend = (project.backend?.length ?? 0) > 0;
  const hasFrontend = (project.frontend?.length ?? 0) > 0;
  if (filter === "backend") return hasBackend;
  if (filter === "fullstack") return hasBackend && hasFrontend;
  return true;
}

export function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    document.title = `Projects | ${SITE.name}`;
  }, []);

  const visible = projects.filter((project) => matchesFilter(project, filter));

  return (
    <>
      <section className="section pt-20 sm:pt-28">
        <Container>
          <SectionTitle
            eyebrow="Projects"
            title="Selected work, focused on backend engineering"
            description="Each project below shows the problem, the solution, the stack, and the key features. Replace the placeholder content with your real projects anytime."
          />

          <div className="mb-8 inline-flex rounded-lg border border-border bg-surface p-1" role="tablist" aria-label="Filter projects">
            {FILTERS.map((item) => {
              const isActive = filter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilter(item.id)}
                  className={cn(
                    "inline-flex h-9 items-center rounded-md px-4 text-sm font-medium transition-colors",
                    isActive ? "bg-accent text-white" : "text-text-muted hover:text-text",
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {visible.length > 0 ? (
            <ProjectGrid projects={visible} />
          ) : (
            <p className="rounded-lg border border-dashed border-border bg-bg-soft p-8 text-center text-text-muted">
              No projects in this filter yet.
            </p>
          )}
        </Container>
      </section>

      <CallToAction />
    </>
  );
}
