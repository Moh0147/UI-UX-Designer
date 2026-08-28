import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  const isCenter = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "mb-12 max-w-2xl",
        isCenter && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold text-text sm:text-4xl text-balance">{title}</h2>
      {description ? (
        <p className="mt-4 text-base text-text-muted sm:text-lg text-balance">{description}</p>
      ) : null}
    </motion.div>
  );
}
