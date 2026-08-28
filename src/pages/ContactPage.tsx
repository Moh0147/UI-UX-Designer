import { useEffect, useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "../components/common/Container";
import { SectionTitle } from "../components/common/SectionTitle";
import { Button } from "../components/common/Button";
import { GithubIcon, LinkedinIcon } from "../components/common/BrandIcons";
import { SITE } from "../utils/constants";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const initial: FormState = { name: "", email: "", subject: "", message: "" };

function validate(state: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!state.name.trim()) errors.name = "Please enter your name.";
  if (!state.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!state.subject.trim()) errors.subject = "Please add a subject.";
  if (!state.message.trim() || state.message.trim().length < 10) {
    errors.message = "Please write a short message (at least 10 characters).";
  }
  return errors;
}

const CONTACT_LINKS = [
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: SITE.githubUrl,
    href: SITE.githubUrl,
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: SITE.linkedinUrl,
    href: SITE.linkedinUrl,
    icon: LinkedinIcon,
  },
];

export function ContactPage() {
  const [state, setState] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    document.title = `Contact | ${SITE.name}`;
  }, []);

  const handleChange = (key: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState((prev) => ({ ...prev, [key]: event.target.value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(state);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setSending(true);
    // Mocked submission. Wire this to Formspree / Web3Forms / EmailJS / a Django endpoint as needed.
    window.setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setState(initial);
    }, 600);
  };

  return (
    <section className="section pt-20 sm:pt-28">
      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Let&apos;s build something reliable"
          description="Open to backend roles, full-stack roles, internships, and freelance work. The fastest way to reach me is by email."
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            noValidate
            className="card p-6 sm:p-8"
            aria-label="Contact form"
          >
            {submitted ? (
              <div className="mb-6 flex items-start gap-3 rounded-md border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 size={18} aria-hidden className="mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">Message received.</p>
                  <p className="mt-0.5 text-emerald-700/80 dark:text-emerald-300/80">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              </div>
            ) : null}

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                id="name"
                label="Name"
                value={state.name}
                onChange={handleChange("name")}
                error={errors.name}
                placeholder="Your full name"
                autoComplete="name"
              />
              <Field
                id="email"
                label="Email"
                type="email"
                value={state.email}
                onChange={handleChange("email")}
                error={errors.email}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
            <div className="mt-5">
              <Field
                id="subject"
                label="Subject"
                value={state.subject}
                onChange={handleChange("subject")}
                error={errors.subject}
                placeholder="What is this about?"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={state.message}
                onChange={handleChange("message")}
                aria-invalid={Boolean(errors.message) || undefined}
                aria-describedby={errors.message ? "message-error" : undefined}
                placeholder="Tell me about your project, role, or question..."
                className="w-full resize-y rounded-md border border-border bg-bg px-3 py-2 text-sm text-text placeholder:text-text-subtle focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
              {errors.message ? (
                <p id="message-error" className="mt-1.5 text-xs text-red-500">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-text-subtle">
                This form is currently mocked. Wire it to a backend or third-party service later.
              </p>
              <Button type="submit" disabled={sending} icon={<Send size={16} aria-hidden />}>
                {sending ? "Sending..." : "Send message"}
              </Button>
            </div>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-4"
            aria-label="Direct contact"
          >
            <div className="card p-6">
              <h3 className="text-base font-semibold text-text">Direct</h3>
              <p className="mt-1 text-sm text-text-muted">
                Prefer email or social? Reach me directly.
              </p>
              <ul className="mt-5 space-y-4">
                {CONTACT_LINKS.map(({ label, value, href, icon: Icon }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-bg-soft text-accent">
                      <Icon size={16} aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-text-subtle">{label}</p>
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                        className="text-sm text-text hover:text-accent"
                      >
                        {value}
                      </a>
                    </div>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-bg-soft text-accent">
                    <MapPin size={16} aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-text-subtle">Location</p>
                    <p className="text-sm text-text">{SITE.location}</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  error?: string;
  autoComplete?: string;
}

function Field({ id, label, value, onChange, placeholder, type = "text", error, autoComplete }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-text">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full rounded-md border border-border bg-bg px-3 py-2 text-sm text-text placeholder:text-text-subtle focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-500">
          {error}
        </p>
      ) : null}
    </div>
  );
}
