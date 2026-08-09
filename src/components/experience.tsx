"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { experiences } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function Experience() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section id="experience" className="space-y-6">
      <SectionHeading
        eyebrow="Experience"
        title="Professional Flutter delivery"
        description="Contract and full-time Flutter work across fintech, marketplaces, messaging, streaming, and enterprise products."
      />
      <div className="relative space-y-4 border-l border-neutral-200/70 pl-5 dark:border-neutral-800 sm:pl-6">
        {experiences.map((exp, idx) => (
          <motion.article
            key={`${exp.company}-${exp.period}`}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.25, delay: Math.min(idx * 0.02, 0.08) }
            }
            className="relative rounded-2xl border border-white/10 bg-white/50 px-4 py-4 shadow-md shadow-indigo-500/5 backdrop-blur dark:bg-neutral-900/60 sm:px-5"
          >
            <div
              className="absolute -left-[29px] top-4 grid h-5 w-5 place-items-center rounded-full border border-white/40 bg-gradient-to-br from-indigo-500 to-emerald-400 text-[8px] font-semibold text-white shadow-md dark:border-white/10 sm:-left-[33px] sm:h-6 sm:w-6 sm:text-[9px]"
              aria-hidden="true"
            >
              {exp.period.split("–")[0].trim().slice(0, 2)}
            </div>

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white sm:text-lg">
                  {exp.role}
                </h3>
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                  {exp.company}
                </p>
              </div>
              <p className="shrink-0 text-xs text-neutral-500 dark:text-neutral-400 sm:text-right">
                {exp.period}
              </p>
            </div>

            {exp.focusAreas && exp.focusAreas.length > 0 ? (
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {exp.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="tag rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-neutral-700 dark:text-neutral-100"
                  >
                    {area}
                  </span>
                ))}
              </div>
            ) : null}

            <ul className="mt-2.5 space-y-1 text-sm leading-5 text-neutral-700 dark:text-neutral-200">
              {exp.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {exp.secondaryNote ? (
              <p className="mt-2 text-xs leading-5 text-neutral-500 dark:text-neutral-400">
                {exp.secondaryNote}
              </p>
            ) : null}
          </motion.article>
        ))}
        <div
          className="absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_8px_rgba(52,211,153,0.12)]"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
