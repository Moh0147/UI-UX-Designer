import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../common/Container";
import { GithubIcon, LinkedinIcon } from "../common/BrandIcons";
import { SITE } from "../../utils/constants";

const SOCIALS = [
  { label: "GitHub", href: SITE.githubUrl, icon: GithubIcon },
  { label: "LinkedIn", href: SITE.linkedinUrl, icon: LinkedinIcon },
  { label: "Email", href: `mailto:${SITE.email}`, icon: Mail },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-bg-soft">
      <Container className="py-12">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-text">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-accent text-sm font-bold text-white">
                M
              </span>
              <span className="font-semibold tracking-tight">{SITE.name}</span>
            </Link>
            <p className="mt-3 max-w-md text-sm text-text-muted">
              {SITE.role} based in {SITE.location}. Building reliable backend systems and full-stack
              applications.
            </p>
            <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-text-subtle">
              <MapPin size={14} aria-hidden /> {SITE.location}
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <ul className="flex items-center gap-2" aria-label="Social links">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-text-muted transition-colors hover:border-accent hover:text-accent"
                    aria-label={label}
                  >
                    <Icon size={18} aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs text-text-subtle">
              © {year} {SITE.name}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
