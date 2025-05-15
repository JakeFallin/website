"use client";

import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </Layout>
  );
}
