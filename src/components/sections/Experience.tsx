"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Freelance Software Consultant",
    company: "Software Engineer",
    location: "Franklin, NJ/San Francisco, California",
    period: "October 2021 - Current",
    description: [
      "Co-founded and currently developing Kryptools, a cryptocurrency tax platform for retail and small business in Norway. Built with Next.JS, TypeScript, Tailwind, Supabase.",
      "Managed Curated, a retail and interior decoration consulting platform, implementing a full-stack e-commerce solution with React and MongoDB for inventory and logistics management.",
      "Designed Web3-based solutions including building an NFT generator with Python, working with the Solana blockchain to mint digital assets using the Metaplex protocol.",
      "Tutored students in Java and Python Programming, providing over 40 students with customized learning plans."
    ]
  },
  {
    title: "Software Engineer",
    company: "American Express",
    location: "New York, NY",
    period: "August 2020 - September 2021",
    description: [
      "Developed backend payment systems in Java, handling millions of transactions and integrating Kafka for event-driven architecture.",
      "Implemented performance testing with JUnit, creating test scenarios to simulate thousands of user requests.",
      "Enhanced the frontend of commercial payment applications using React, Redux, and Hooks.",
      "Automated CI/CD pipelines using Jenkins and integrated with Docker containers for efficient code deployment."
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "American Express",
    location: "New York, NY",
    period: "June 2019 - August 2019",
    description: [
      "Restructured asynchronous multithreaded HTTP requests, speeding up data exportation by over 50%.",
      "Developed RESTful APIs with the Katharsis framework, integrating over 100 internal projects.",
      "Built a model of end to end tests using the Cypress framework, increasing test coverage to 100%."
    ]
  },
  {
    title: "Summer Analyst",
    company: "Citigroup",
    location: "New York, NY",
    period: "June 2018 - August 2018",
    description: [
      "Wrote Python and VBA scripts to automate management of CMBS data for over $20B of live and historic deals.",
      "Built financial models for over $3B of properties in Excel to determine EBITDA, LTV ratio, and Net Cash Flow.",
      "Automated data aggregation for the underwriting process, created credit committee memos and pitch decks."
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "Tipevo",
    location: "Ridgefield, CT",
    period: "April 2017 - August 2017",
    description: [
      "Created web scraping and filtering tools to gather comprehensive data on 20,000+ youth sports clubs.",
      "Wrote API's with Perl for internal company tools to interact with SQL tables for data storage and manipulation.",
      "Developed an Android application to set up a MVC architecture and implement beta functionality."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>{exp.location}</p>
                  <p>{exp.period}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground">• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 