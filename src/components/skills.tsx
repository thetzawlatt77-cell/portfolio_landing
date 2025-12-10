"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section id="skills" className="space-y-6">
      <SectionHeading
        eyebrow="Skills"
        title="Core capabilities that ship polished apps"
        description="Production-ready Flutter expertise across app delivery, UI/UX, publishing, and performance."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.3, delay: idx * 0.02 }}
            className="glass flex items-center justify-between rounded-2xl px-4 py-4 text-neutral-800 dark:text-neutral-100"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-indigo-500/80 to-sky-400/80 text-sm font-semibold text-white shadow-lg">
                {skill.name.slice(0, 2).toUpperCase()}
              </div>
              <p className="font-semibold">{skill.name}</p>
            </div>
            <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-neutral-600 dark:bg-white/10 dark:text-neutral-100">
              {skill.experience}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

