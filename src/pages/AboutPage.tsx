import { useState } from "react";
import { useEffect } from "react";
import { Container } from "../components/common/Container";
import { SectionTitle } from "../components/common/SectionTitle";
import { AboutIntro } from "../components/about/AboutIntro";
import { AboutTabs, Skills } from "../components/about/Skills";
import { Experience } from "../components/about/Experience";
import { Education } from "../components/about/Education";
import { SITE } from "../utils/constants";

type TabId = "skills" | "experience" | "education";

export function AboutPage() {
  const [active, setActive] = useState<TabId>("skills");

  useEffect(() => {
    document.title = `About | ${SITE.name}`;
  }, []);

  return (
    <>
      <AboutIntro />

      <section className="section pt-0">
        <Container>
          <SectionTitle
            eyebrow="Details"
            title="Skills, experience, and education"
            description="A quick, structured view of what I do, where I have worked, and what I have studied."
          />
          <AboutTabs active={active} setActive={setActive} />

          {active === "skills" ? <Skills /> : null}
          {active === "experience" ? <Experience /> : null}
          {active === "education" ? <Education /> : null}
        </Container>
      </section>
    </>
  );
}
