import { ArrowLeft, Terminal } from "lucide-react";
import { useEffect } from "react";
import { Container } from "../components/common/Container";
import { Button } from "../components/common/Button";
import { SITE } from "../utils/constants";

export function NotFoundPage() {
  useEffect(() => {
    document.title = `404 | ${SITE.name}`;
  }, []);

  return (
    <section className="section">
      <Container className="text-center">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-border bg-surface text-accent">
          <Terminal size={20} aria-hidden />
        </span>
        <p className="mt-6 font-mono text-sm text-text-subtle">Error 404 · Page not found</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          This page does not exist.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-text-muted">
          The page you are looking for has moved, or never existed. Let&apos;s get you back on
          track.
        </p>
        <div className="mt-8 flex justify-center">
          <Button as="link" to="/" icon={<ArrowLeft size={16} aria-hidden />}>
            Back to home
          </Button>
        </div>
      </Container>
    </section>
  );
}
