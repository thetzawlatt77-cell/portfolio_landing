"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import Image from "next/image";
import Link from "next/link";
import { hero } from "@/data/portfolio";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500";

export function Hero() {
  const reduceMotion = usePrefersReducedMotion();

  const fade = (delay = 0, y = 12) =>
    reduceMotion
      ? { initial: false as const, animate: { opacity: 1 }, transition: { duration: 0 } }
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.45, delay },
        };

  return (
    <section id="hero" className="pt-6 sm:pt-10" aria-labelledby="hero-name">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/70 via-white/40 to-white/20 p-5 shadow-lg shadow-indigo-500/10 dark:from-neutral-900/70 dark:via-neutral-900/40 dark:to-neutral-900/30 sm:p-8 md:p-12">
        <div className="pointer-events-none absolute inset-0 opacity-70 blur-3xl" aria-hidden="true">
          <div className="absolute -left-24 -top-10 h-60 w-60 rounded-full bg-indigo-500/30" />
          <div className="absolute -bottom-14 right-0 h-60 w-60 rounded-full bg-emerald-400/25" />
        </div>
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="min-w-0 flex-1 space-y-5 sm:space-y-6">
            <motion.div
              {...(reduceMotion
                ? { initial: false, animate: { opacity: 1 } }
                : {
                    initial: { opacity: 0, scale: 0.9 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { duration: 0.4 },
                  })}
              className="flex items-center gap-4 sm:gap-6"
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-white/50 shadow-xl ring-4 ring-indigo-500/20 dark:border-neutral-800/50 sm:h-32 sm:w-32">
                <Image
                  src="/pp.png"
                  alt="Portrait of Thet Zaw Latt, Senior Flutter Developer"
                  fill
                  className="object-cover"
                  sizes="128px"
                  priority
                />
              </div>
              <div className="min-w-0 flex-1">
                <motion.div
                  {...fade(0.1, 12)}
                  className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/20 bg-white/60 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-700 backdrop-blur dark:bg-neutral-900/70 dark:text-neutral-100 sm:text-xs sm:tracking-[0.18em]"
                >
                  {hero.eyebrow}
                  <span
                    className="h-2 w-2 shrink-0 rounded-full bg-emerald-400"
                    aria-hidden="true"
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.h1
              id="hero-name"
              {...fade(0.05, 18)}
              className="max-w-3xl text-balance text-4xl font-semibold leading-tight text-neutral-900 dark:text-white sm:text-5xl xl:whitespace-nowrap xl:text-6xl"
            >
              {hero.name}
            </motion.h1>

            <motion.div {...fade(0.1, 18)} className="max-w-2xl space-y-3">
              <p className="text-base leading-relaxed text-neutral-800 dark:text-neutral-100 sm:text-lg">
                {hero.description}
              </p>
              <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-200 sm:text-base">
                {hero.secondaryDescription}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {hero.location}
              </p>
            </motion.div>

            <motion.div
              {...fade(0.15, 16)}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <Link
                href="/#projects"
                className={`inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 ${focusRing}`}
              >
                View Projects
              </Link>
              <Link
                href="/Thet_Zaw_Latt_Senior_Flutter_CV.pdf"
                download
                aria-label="Download Thet Zaw Latt CV as PDF"
                className={`inline-flex items-center gap-2 rounded-full border border-neutral-300/70 bg-white/50 px-5 py-3 text-sm font-semibold text-neutral-800 transition hover:-translate-y-0.5 hover:border-neutral-800 dark:border-white/20 dark:bg-neutral-900/40 dark:text-white dark:hover:border-white/50 ${focusRing}`}
              >
                Download CV
              </Link>
              <Link
                href="/#contact"
                className={`text-sm font-medium text-neutral-600 underline decoration-neutral-400/60 underline-offset-4 transition hover:text-neutral-900 hover:decoration-indigo-400 dark:text-neutral-300 dark:hover:text-white ${focusRing} rounded-sm`}
              >
                Contact Me
              </Link>
            </motion.div>
          </div>

          <motion.div
            {...(reduceMotion
              ? { initial: false, animate: { opacity: 1 } }
              : {
                  initial: { opacity: 0, scale: 0.95 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.45, delay: 0.12 },
                })}
            className="grid w-full gap-4 sm:grid-cols-2 lg:max-w-md lg:shrink-0"
            aria-label="Core capabilities"
          >
            {hero.highlights.map((item) => (
              <div
                key={item.label}
                className="glass relative overflow-hidden rounded-2xl p-4 text-sm text-neutral-800 shadow-lg dark:text-neutral-50"
              >
                <div
                  className="absolute right-3 top-3 h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500/70 to-sky-400/80 blur-2xl"
                  aria-hidden="true"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600 dark:text-neutral-300">
                  {item.label}
                </p>
                <p className="mt-2 font-semibold text-neutral-900 dark:text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
