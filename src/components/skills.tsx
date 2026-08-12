"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function Skills() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section id="skills" className="space-y-6">
      <SectionHeading
        eyebrow="Skills"
        title="Mobile depth, product breadth"
        description="Senior Flutter delivery backed by the full-stack skills needed to take focused product ideas from concept to a working release."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, idx) => (
          <motion.article
            key={group.title}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.3, delay: Math.min(idx * 0.04, 0.16) }
            }
            className="glass flex flex-col gap-4 rounded-2xl p-5 text-neutral-800 dark:text-neutral-100"
          >
            <div className="flex items-center gap-3">
              <div
                className="accent-icon grid h-10 w-10 shrink-0 place-items-center rounded-full text-xs font-semibold text-white"
                aria-hidden="true"
              >
                {group.icon}
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-700 dark:text-neutral-200">
                {group.title}
              </h3>
            </div>

            <ul className="flex flex-wrap gap-2" aria-label={group.title}>
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="tag rounded-full px-3 py-1 text-xs font-semibold text-neutral-800 dark:text-neutral-100"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
