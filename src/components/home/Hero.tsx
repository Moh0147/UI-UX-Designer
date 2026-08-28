import { motion } from "framer-motion";
import { ArrowRight, Mail, Download } from "lucide-react";
import { Button } from "../common/Button";
import { Container } from "../common/Container";
import { GithubIcon, LinkedinIcon } from "../common/BrandIcons";
import { HeroImage } from "./HeroImage";
import { SITE } from "../../utils/constants";
import { cn } from "../../utils/cn";

const STACK = ["Python", "Django", "PostgreSQL", "REST APIs", "React", "TypeScript"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-24 lg:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-fade opacity-70"
      />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text-muted"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to opportunities · {SITE.location}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
              className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl text-balance"
            >
              Hi, I&apos;m <span className="gradient-text">{SITE.name}</span>
              <br />
              <span className="text-text-muted">a {SITE.role}.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="mt-6 max-w-xl text-base text-text-muted sm:text-lg text-balance"
            >
              {SITE.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
              className="mt-3 max-w-xl text-sm text-text-subtle sm:text-base"
            >
              I also work with React, TypeScript, and Angular to build complete full-stack
              applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button as="link" to="/projects" icon={<ArrowRight size={16} aria-hidden />} iconRight>
                View Projects
              </Button>
              <Button
                as="link"
                to="/contact"
                variant="outline"
                icon={<Mail size={16} aria-hidden />}
              >
                Contact Me
              </Button>
              <Button
                as="a"
                href={SITE.cvUrl}
                download
                variant="ghost"
                icon={<Download size={16} aria-hidden />}
              >
                Download CV
              </Button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex items-center gap-2"
              aria-label="Social links"
            >
              {[
                { label: "GitHub", href: SITE.githubUrl, icon: GithubIcon },
                { label: "LinkedIn", href: SITE.linkedinUrl, icon: LinkedinIcon },
                { label: "Email", href: `mailto:${SITE.email}`, icon: Mail },
              ].map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                    className={cn(
                      "inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-text-muted transition-colors",
                      "hover:border-accent hover:text-accent",
                    )}
                    aria-label={label}
                  >
                    <Icon size={18} aria-hidden />
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
            className="relative mx-auto w-full lg:max-w-none"
          >
            <HeroImage
              name={SITE.name}
              role="Backend Software Developer"
              stack="Django + React"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-widest text-text-subtle sm:mt-24"
          aria-label="Primary stack"
        >
          <span className="text-text-muted">Primary stack</span>
          {STACK.map((tech) => (
            <span key={tech} className="inline-flex items-center gap-2">
              <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
              {tech}
            </span>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
