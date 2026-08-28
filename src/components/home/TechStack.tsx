import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { SectionTitle } from "../common/SectionTitle";
import { skills } from "../../data/skills";

export function TechStack() {
  const groups = skills;

  return (
    <section className="section border-t border-border bg-bg-soft">
      <Container>
        <SectionTitle
          eyebrow="Tech Stack"
          title="What I work with"
          description="Backend is my foundation. Frontend is what I use to deliver complete, working products."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {groups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: groupIndex * 0.05 }}
              className="card p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-text">{group.category}</h3>
                <span className="font-mono text-xs text-text-subtle">
                  {String(groupIndex + 1).padStart(2, "0")}
                </span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="inline-flex items-center rounded-md border border-border bg-bg px-2.5 py-1 text-xs font-medium text-text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
