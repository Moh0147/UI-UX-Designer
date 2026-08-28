import { motion } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";
import { cn } from "../../utils/cn";
import profilePlaceholder from "../../assets/images/profile-placeholder.jpg";

interface HeroImageProps {
  name?: string;
  role?: string;
  stack?: string;
  className?: string;
}

export function HeroImage({
  name = "Mohamed",
  role = "Backend Software Developer",
  stack = "Django + React",
  className,
}: HeroImageProps) {
  return (
    <div className={cn("relative mx-auto w-full max-w-sm sm:max-w-md", className)}>
      <div className="relative aspect-square w-full">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-accent/30 via-fuchsia-400/20 to-transparent blur-2xl"
        />

        <div
          aria-hidden
          className="absolute -inset-6 -z-10 rounded-full border border-border/60"
        />
        <div
          aria-hidden
          className="absolute -inset-3 -z-10 rounded-full border border-dashed border-border/50"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative h-full w-full overflow-hidden rounded-full border border-border bg-surface p-1.5 shadow-glow"
        >
          <div
            aria-hidden
            className="absolute inset-3 rounded-full bg-gradient-to-br from-accent/10 via-transparent to-fuchsia-400/10"
          />
          <img
            src={profilePlaceholder}
            alt={`Portrait of ${name}`}
            loading="eager"
            decoding="async"
            className="relative h-full w-full rounded-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.55 }}
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 sm:bottom-2"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-3 py-1.5 text-xs font-medium text-text shadow-card backdrop-blur">
            <Code2 size={14} className="text-accent" aria-hidden />
            <span className="text-text">{role}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
          aria-hidden
          className="absolute -right-2 top-6 hidden sm:flex"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent-soft px-2.5 py-1 text-[11px] font-medium text-accent">
            <Sparkles size={12} />
            {stack}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
