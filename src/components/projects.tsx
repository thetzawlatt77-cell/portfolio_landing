"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <SectionHeading
        eyebrow="Projects"
        title="Recent builds shipped fast"
        description="Focused on speed, quality, and store-ready delivery with clear architecture and smooth UX."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            className="glass group flex h-full flex-col overflow-hidden rounded-3xl"
          >
            <div className="relative h-52 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority={idx === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/5 dark:from-black/40" />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                <span>{project.date}</span>
                <span className="text-emerald-500">{project.duration}</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm leading-6 text-neutral-700 dark:text-neutral-200">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="tag rounded-full px-3 py-1 text-xs font-semibold text-neutral-700 dark:text-neutral-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex items-center justify-between pt-2">
                <Link
                  href={project.repo}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition hover:text-indigo-400 dark:text-indigo-300"
                >
                  View Project
                  <ArrowIcon className="h-4 w-4" />
                </Link>
                <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(52,211,153,0.12)]" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

