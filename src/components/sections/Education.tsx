"use client";

import { motion } from "framer-motion";

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-lg p-6 shadow-sm"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
            <div>
              <h3 className="text-xl font-semibold">Stevens Institute of Technology</h3>
              <p className="text-muted-foreground">Bachelor of Science in Computer Science</p>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>August 2016 – May 2020</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 