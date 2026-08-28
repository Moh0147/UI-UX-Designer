import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../../data/experience";

export function Education() {
  return (
    <div className="space-y-4">
      {education.map((item, index) => (
        <motion.article
          key={item.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: index * 0.05 }}
          className="card p-6"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-bg-soft text-accent">
                <GraduationCap size={16} aria-hidden />
              </span>
              <div>
                <h3 className="text-base font-semibold text-text">{item.degree}</h3>
                <p className="text-sm text-text-muted">{item.institution}</p>
              </div>
            </div>
            <div className="text-right text-xs text-text-subtle">
              <p>
                {item.startDate} — {item.endDate}
              </p>
              <p>{item.location}</p>
            </div>
          </div>
          {item.description ? (
            <p className="mt-4 text-sm text-text-muted">{item.description}</p>
          ) : null}
        </motion.article>
      ))}
    </div>
  );
}
