"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import Link from "next/link";
import {
  contact,
  contactEmail,
  contactLocation,
} from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500";

export function Contact() {
  const reduceMotion = usePrefersReducedMotion();
  const primaryContacts = contact.filter((item) => !item.secondary);
  const secondaryContacts = contact.filter((item) => item.secondary);

  return (
    <section id="contact" className="space-y-6">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build a product that ships"
        description="Open to senior Flutter and mobile roles, product engineering opportunities, and selected contract projects in Vietnam or remotely."
      />

      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        {contactLocation}
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <Link
          href={contactEmail}
          className={`inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 ${focusRing}`}
        >
          Email Me
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {primaryContacts.map((item, idx) => (
          <motion.div
            key={item.label}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.3, delay: Math.min(idx * 0.05, 0.15) }
            }
          >
            <Link
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={`glass block rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-neutral-300/80 dark:hover:border-white/20 ${focusRing}`}
              aria-label={`${item.label}: ${item.value}`}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                {item.label}
              </p>
              <p className="mt-2 text-sm font-semibold text-neutral-900 dark:text-white">
                {item.value}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>

      {secondaryContacts.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {secondaryContacts.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-2xl border border-white/10 bg-white/30 px-4 py-3 transition hover:bg-white/50 dark:bg-neutral-900/30 dark:hover:bg-neutral-900/50 ${focusRing}`}
              aria-label={`${item.label}: ${item.value}`}
            >
              <p className="text-[10px] uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                {item.value}
              </p>
            </Link>
          ))}
        </div>
      ) : null}
    </section>
  );
}
