"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const skills = {
  "Frontend": ["TypeScript", "React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  "Backend": ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
  "Tools": ["Git", "Docker", "AWS", "Figma", "VS Code"],
};

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* About Text */}
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate Full-Stack Developer with a keen eye for creating elegant solutions in the least amount of time. 
                  I specialize in building web applications using modern technologies like React, Next.js, and TypeScript.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  With a strong foundation in both frontend and backend development, I enjoy the entire process of creating 
                  applications from concept to deployment. I'm particularly interested in building performant, accessible, 
                  and user-friendly web experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                  or sharing my knowledge through technical writing.
                </p>
              </CardContent>
            </Card>

            {/* Skills */}
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 