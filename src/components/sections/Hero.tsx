"use client";

import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/JakeFallin",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/jake-f-7a9a44100",
    icon: Linkedin,
  },
  {
    name: "Resume",
    href: "/resume.pdf",
    icon: FileText,
  },
  {
    name: "Email",
    href: "mailto:jakefallin@gmail.com",
    icon: Mail,
  },
];

export function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20 -z-10" />
      
      {/* Content */}
      <div className="container px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="text-primary">Jacob Fallin</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-[700px]">
            I&apos;m a passionate software engineer with expertise in full-stack development,
            specializing in React, Node.js, and cloud technologies.
          </p>
          <p className="mx-auto mt-2 text-sm text-muted-foreground">
            (201) 835-8030 • San Francisco • jakefallin@gmail.com
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <Button size="lg" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-4 mt-8"
        >
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-primary"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 