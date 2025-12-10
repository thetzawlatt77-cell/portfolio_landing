"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { contact } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function Contact() {
  return (
    <section id="contact" className="space-y-6">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build your next app"
        description="Reach out for Flutter projects, UI/UX collaboration, or mobile publishing support."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contact.map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="glass rounded-2xl p-4"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
              {item.label}
            </p>
            <Link
              href={item.href}
              className="mt-2 block text-sm font-semibold text-neutral-900 underline decoration-transparent decoration-2 underline-offset-4 transition hover:decoration-indigo-400 dark:text-white"
            >
              {item.value}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

