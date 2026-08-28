export const SITE = {
  name: "Mohamed",
  role: "Backend Software Developer",
  secondaryRole: "Full-Stack Developer",
  location: "Tanzania",
  email: "[Add email address]",
  githubUrl: "https://github.com/Moh0147",
  linkedinUrl: "https://linkedIn.com/Mohamed",
  twitterUrl: "[Add Twitter URL]",
  cvUrl: "/Mohamed-CV.pdf",
  tagline:
    "I build reliable, scalable, and maintainable web applications using Python, Django, REST APIs, databases, and modern frontend technologies.",
  shortIntro:
    "Backend-focused Software Developer from Tanzania working with Python, Django, and modern web technologies.",
  description:
    "Backend Software Developer specializing in Python, Django, REST APIs, PostgreSQL, React, TypeScript, and modern web application development.",
} as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "GitHub", href: SITE.githubUrl, icon: "github" },
  { label: "LinkedIn", href: SITE.linkedinUrl, icon: "linkedin" },
  { label: "Email", href: `mailto:${SITE.email}`, icon: "mail" },
] as const;
