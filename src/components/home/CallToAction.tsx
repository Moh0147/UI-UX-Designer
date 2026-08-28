import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "../common/Container";
import { Button } from "../common/Button";

export function CallToAction() {
  return (
    <section className="section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="card relative overflow-hidden p-8 sm:p-12"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl"
          />

          <div className="relative">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Let&apos;s work together
            </p>
            <h2 className="mt-3 text-3xl font-bold text-text sm:text-4xl text-balance">
              Have a backend problem, an API to design, or a full-stack product to ship?
            </h2>
            <p className="mt-4 max-w-2xl text-base text-text-muted sm:text-lg">
              I&apos;m open to full-time roles, internships, and freelance engagements. Let&apos;s
              discuss how I can help.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button as="link" to="/contact" icon={<Mail size={16} aria-hidden />} iconRight>
                Get in touch
              </Button>
              <Button as="link" to="/projects" variant="outline" iconRight={<ArrowRight size={16} aria-hidden />}>
                See my work
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
