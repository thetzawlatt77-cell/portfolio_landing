"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section id="experience" className="space-y-6">
      <SectionHeading
        eyebrow="Experience"
        title="Delivering apps across industries"
        description="Hands-on Flutter delivery across fintech, education, productivity, and media — from design handoff to store publish."
      />
      <div className="relative space-y-8 border-l border-neutral-200/70 pl-6 dark:border-neutral-800">
        {experiences.map((exp, idx) => (
          <motion.div
            key={`${exp.company}-${exp.period}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, delay: idx * 0.04 }}
            className="relative rounded-2xl border border-white/10 bg-white/50 p-5 shadow-lg shadow-indigo-500/10 backdrop-blur dark:bg-neutral-900/60"
          >
            <div className="absolute -left-[41px] top-5 grid h-7 w-7 place-items-center rounded-full border border-white/40 bg-gradient-to-br from-indigo-500 to-emerald-400 text-[10px] font-semibold text-white shadow-lg dark:border-white/10">
              {exp.period.split("–")[0].trim().slice(0, 2)}
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                  {exp.period}
                </p>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                  {exp.company}
                </p>
              </div>
            </div>
            <ul className="mt-3 space-y-1 text-sm text-neutral-700 dark:text-neutral-200">
              {exp.projects.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
        <div className="absolute left-[-5px] top-0 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_10px_rgba(52,211,153,0.15)]" />
      </div>
    </section>
  );
}

