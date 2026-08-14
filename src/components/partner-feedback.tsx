"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { SectionHeading } from "./section-heading";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500";

export function PartnerFeedback() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section id="feedback" className="space-y-6">
      <SectionHeading
        eyebrow="Partner Feedback"
        title="What it’s like to work with me"
        description="Direct feedback from a product partner after delivering the Cheers! Flutter rebuild."
      />

      <motion.figure
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.4 }}
        className="glass relative overflow-hidden rounded-3xl"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-orange-300/16 blur-3xl dark:bg-orange-700/8" />
          <div className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-amber-200/16 blur-3xl dark:bg-amber-700/6" />
        </div>

        <div className="relative grid lg:grid-cols-[minmax(0,0.68fr)_minmax(260px,0.32fr)]">
          <div className="flex flex-col justify-between gap-8 p-6 sm:p-9 lg:p-12">
            <div>
              <span
                className="accent-text block font-serif text-6xl leading-none sm:text-7xl"
                aria-hidden="true"
              >
                “
              </span>
              <blockquote className="-mt-3 max-w-3xl text-xl font-medium leading-relaxed tracking-tight text-neutral-900 dark:text-white sm:text-2xl lg:text-[1.75rem]">
                Thet did a very good job on the Cheers! rebuild. I was super
                impressed by the delivered app and how well the collaborative
                experience worked across multiple users. He’s a very capable
                and smart developer.
              </blockquote>
            </div>

            <figcaption className="flex flex-col gap-4 border-t border-neutral-900/10 pt-5 dark:border-white/10 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-base font-semibold text-neutral-900 dark:text-white">
                  Frank Kuo
                </p>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                  Founder · Duet Agency
                </p>
              </div>
              <Link
                href="https://www.duetagency.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`accent-text inline-flex w-fit items-center gap-2 rounded-sm text-sm font-semibold transition hover:opacity-70 ${focusRing}`}
                aria-label="Visit Duet Agency website (opens in a new tab)"
              >
                Visit Duet Agency
                <span aria-hidden="true">↗</span>
              </Link>
            </figcaption>
          </div>

          <div className="relative min-h-[320px] overflow-hidden border-t border-white/10 lg:min-h-full lg:border-l lg:border-t-0 dark:border-white/5">
            <Image
              src="/gallery/Cheers/Frank.avif"
              alt="Frank Kuo, founder of Duet Agency"
              fill
              sizes="(min-width: 1024px) 320px, 100vw"
              className="object-cover object-center grayscale-[15%]"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/35 via-transparent to-orange-100/5"
              aria-hidden="true"
            />
            <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-neutral-950/55 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
              Cheers! · Product Partner
            </div>
          </div>
        </div>
      </motion.figure>
    </section>
  );
}
