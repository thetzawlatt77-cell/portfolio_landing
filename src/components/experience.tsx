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
        title="Built through real delivery"
        description="More than five years shipping mobile products across fintech, marketplaces, streaming, internal tools, and client-led builds."
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
            className="relative rounded-2xl border border-neutral-900/10 bg-[#fffdf9]/70 px-4 py-4 shadow-[0_12px_34px_rgba(35,28,21,0.06)] backdrop-blur dark:border-white/10 dark:bg-[#191715]/70 sm:px-5"
          >
            <div
              className="accent-icon absolute -left-[29px] top-4 grid h-5 w-5 place-items-center rounded-full border border-white/50 text-[8px] font-semibold text-white dark:border-white/10 sm:-left-[33px] sm:h-6 sm:w-6 sm:text-[9px]"
              aria-hidden="true"
            >
              {exp.period.split("–")[0].trim().slice(0, 2)}
            </div>

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white sm:text-lg">
                  {exp.role}
                </h3>
                <p className="accent-text text-sm font-medium">
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
                    className="accent-dot mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
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
          className="accent-dot absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full shadow-[0_0_0_8px_var(--accent-soft)]"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
