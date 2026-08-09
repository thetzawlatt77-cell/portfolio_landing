"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import {
  additionalSkills,
  productivityTools,
  skillGroups,
} from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function Skills() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section id="skills" className="space-y-6">
      <SectionHeading
        eyebrow="Skills"
        title="Core mobile engineering capabilities"
        description="Production Flutter expertise across architecture, integrations, testing, performance, and app delivery."
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
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-indigo-500/80 to-sky-400/80 text-xs font-semibold text-white shadow-lg"
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

      <div className="space-y-1 px-1 text-xs text-neutral-500 dark:text-neutral-400">
        <p>
          <span className="font-medium text-neutral-600 dark:text-neutral-300">
            Additional experience:
          </span>{" "}
          {additionalSkills.join(" · ")}
        </p>
        <p className="text-neutral-400 dark:text-neutral-500">
          Productivity tools: {productivityTools.join(", ")}
        </p>
      </div>
    </section>
  );
}
