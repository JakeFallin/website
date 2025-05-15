"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const projects = [
  {
    title: "Stevens Shuttle System",
    period: "August 2019 – May 2020",
    githubUrl: "https://github.com/Stevens-Shuttles", // Add your GitHub URL here
    description: [
      "Worked on a student team to develop a smart scheduling system and interface for my Senior Design Project.",
      "Collected and stored 100+ GB of data from the bus API with AWS Lambda functions.",
      "Ran unsupervised machine learning models on the data in order to predict bus arrival time to within 2 minutes.",
      "Used React to create a cross platform application to view real time bus locations and arrival times.",
      "Recommended shuttle line improvements to the school based upon our findings."
    ]
  },
  {
    title: "Ridgewood High School Android Application",
    period: "November 2015 - May 2016",
    githubUrl: "https://github.com/JakeFallin/RhsApplication", // Add your GitHub URL here
    description: [
      "Led a team of 10 students on a Git managed project, which is still used by over 1500 students each year.",
      "Reported team progress to CS teacher, school principal, and school board.",
      "Implemented custom scheduling, absent teacher lists, and special announcements using Java, PHP, Python, and MySQL.",
      "Worked on a web application for analytics and internal editing using JavaScript and Ruby."
    ]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card rounded-lg p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${project.title} GitHub Repository`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>{project.period}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {project.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="text-muted-foreground"
                    >
                      • {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
} 