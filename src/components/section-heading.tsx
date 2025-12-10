"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  eyebrow?: string;
  description?: string;
};

export function SectionHeading({ title, eyebrow, description }: Props) {
  return (
    <div className="mb-8 flex flex-col gap-3">
      {eyebrow ? (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600 dark:bg-neutral-900/60 dark:text-neutral-200"
        >
          {eyebrow}
        </motion.span>
      ) : null}

      <div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="text-3xl font-semibold text-neutral-900 dark:text-white sm:text-4xl"
        >
          {title}
        </motion.h2>
        {description ? (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="mt-3 max-w-2xl text-base text-neutral-700 dark:text-neutral-200"
          >
            {description}
          </motion.p>
        ) : null}
      </div>
    </div>
  );
}

