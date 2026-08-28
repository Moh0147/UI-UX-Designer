import { motion } from "framer-motion";
import { Container } from "../common/Container";

export function AboutIntro() {
  return (
    <section className="section pt-20 sm:pt-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">About</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              A software developer who treats the backend as the product.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5 text-base text-text-muted sm:text-lg"
          >
            <p>
              I am a Software Developer with a strong focus on backend development and building
              reliable web applications.
            </p>
            <p>
              My primary stack includes Python, Django, Django REST Framework, REST APIs, SQL
              databases, and backend architecture. I design APIs that are predictable, secure, and
              easy to consume from any client.
            </p>
            <p>
              I also have frontend development experience using React, TypeScript, Angular,
              JavaScript, HTML, and CSS, allowing me to understand and contribute across the full
              application stack.
            </p>
            <p>
              I enjoy transforming ideas and business requirements into structured, maintainable
              software solutions. I care about clean code, API design, database design, software
              architecture, maintainability, performance, security, problem solving, and continuous
              learning.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
