import { Code, Database, Layers, Plug, Server, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "../components/common/Container";
import { SectionTitle } from "../components/common/SectionTitle";
import { CallToAction } from "../components/home/CallToAction";
import { services } from "../data/services";
import type { Service } from "../types/service";
import { SITE } from "../utils/constants";
import { useEffect } from "react";

const ICONS: Record<string, typeof Server> = {
  server: Server,
  api: Workflow,
  database: Database,
  layers: Layers,
  plug: Plug,
  code: Code,
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = ICONS[service.icon] ?? Server;
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="card p-6"
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-bg-soft text-accent">
          <Icon size={18} aria-hidden />
        </span>
        <h3 className="text-base font-semibold text-text">{service.title}</h3>
      </div>
      <p className="mt-3 text-sm text-text-muted">{service.description}</p>
      {service.capabilities.length > 0 ? (
        <ul className="mt-4 space-y-1.5 text-sm text-text-muted">
          {service.capabilities.map((capability) => (
            <li key={capability} className="flex items-start gap-2">
              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{capability}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </motion.article>
  );
}

export function ServicesPage() {
  useEffect(() => {
    document.title = `Services | ${SITE.name}`;
  }, []);

  return (
    <>
      <section className="section pt-20 sm:pt-28">
        <Container>
          <SectionTitle
            eyebrow="Services"
            title="Capabilities focused on backend and full-stack delivery"
            description="I help teams design, build, and ship reliable software — from database design to REST APIs to complete web applications."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <CallToAction />
    </>
  );
}
