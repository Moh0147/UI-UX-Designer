import { motion } from "framer-motion";
import { skills } from "../../data/skills";

export function Skills() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {skills.map((group, groupIndex) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: groupIndex * 0.05 }}
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
  );
}

interface AboutTabsProps {
  active: "skills" | "experience" | "education";
  setActive: (tab: "skills" | "experience" | "education") => void;
}

export function AboutTabs({ active, setActive }: AboutTabsProps) {
  const tabs: { id: "skills" | "experience" | "education"; label: string }[] = [
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
  ];

  return (
    <div className="mb-8 inline-flex rounded-lg border border-border bg-surface p-1">
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            aria-pressed={isActive}
            className={`relative inline-flex h-9 items-center rounded-md px-4 text-sm font-medium transition-colors ${
              isActive ? "text-white" : "text-text-muted hover:text-text"
            }`}
          >
            {isActive ? (
              <motion.span
                layoutId="about-tab-bg"
                className="absolute inset-0 rounded-md bg-accent"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            ) : null}
            <span className="relative">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
