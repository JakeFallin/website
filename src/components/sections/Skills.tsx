"use client";

import { motion } from "framer-motion";

const skills = {
  "Languages": [
    "Python", "Java", "Kotlin", "TypeScript", "JavaScript (Node.JS, React.JS, Redux)",
    "SQL", "Perl", "OCaml"
  ],
  "Technologies & Frameworks": [
    "Linux", "Jenkins", "GitHub", "JUnit", "HTML/CSS", "Supabase", "AWS",
    "Kafka", "Bash", "Web3", "ML", "AI", "MongoDb", "MySQL", "PostgreSQL",
    "Cypress", "Docker", "Kubernetes", "Microservices", "CompTia A+"
  ]
};

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 