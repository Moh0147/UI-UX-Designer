import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "../../data/experience";

export function Experience() {
  return (
    <div className="space-y-4">
      {experiences.map((exp, index) => (
        <motion.article
          key={exp.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: index * 0.05 }}
          className="card p-6"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-bg-soft text-accent">
                <Briefcase size={16} aria-hidden />
              </span>
              <div>
                <h3 className="text-base font-semibold text-text">{exp.role}</h3>
                <p className="text-sm text-text-muted">
                  {exp.company}
                  {exp.companyUrl ? (
                    <>
                      {" · "}
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-accent hover:underline"
                      >
                        Website
                      </a>
                    </>
                  ) : null}
                </p>
              </div>
            </div>
            <div className="text-right text-xs text-text-subtle">
              <p>
                {exp.startDate} — {exp.endDate}
              </p>
              <p>{exp.location}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-text-muted">{exp.description}</p>
          {exp.highlights.length > 0 ? (
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-text-muted">
              {exp.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          ) : null}
        </motion.article>
      ))}
    </div>
  );
}
