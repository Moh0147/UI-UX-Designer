import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "../common/Container";
import { SectionTitle } from "../common/SectionTitle";
import { Button } from "../common/Button";
import { services } from "../../data/services";

export function HomeServices() {
  const preview = services.slice(0, 4);

  return (
    <section className="section border-t border-border bg-bg-soft">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle
            eyebrow="Services"
            title="What I can deliver"
            description="From backend APIs to full-stack features, I help teams ship reliable software end to end."
          />
          <Button as="link" to="/services" variant="outline" iconRight={<ArrowRight size={16} aria-hidden />}>
            See all services
          </Button>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {preview.map((service, index) => (
            <motion.li
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="card p-6"
            >
              <h3 className="text-base font-semibold text-text">{service.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{service.description}</p>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
