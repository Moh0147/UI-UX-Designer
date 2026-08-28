import { useEffect } from "react";
import { Hero } from "../components/home/Hero";
import { TechStack } from "../components/home/TechStack";
import { FeaturedProjects } from "../components/home/FeaturedProjects";
import { HomeServices } from "../components/home/HomeServices";
import { CallToAction } from "../components/home/CallToAction";
import { SITE } from "../utils/constants";

export function HomePage() {
  useEffect(() => {
    document.title = `${SITE.name} | ${SITE.role}`;
  }, []);

  return (
    <>
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <HomeServices />
      <CallToAction />
    </>
  );
}
