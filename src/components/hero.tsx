"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import Image from "next/image";
import Link from "next/link";
import { hero } from "@/data/portfolio";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500";

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
      <div className="relative overflow-hidden rounded-3xl border border-neutral-900/10 bg-[#fffdf9]/82 p-5 shadow-[0_24px_70px_rgba(35,28,21,0.10)] backdrop-blur-xl dark:border-white/10 dark:bg-[#191715]/84 sm:p-8 md:p-12">
        <div className="pointer-events-none absolute inset-0 opacity-80 blur-3xl" aria-hidden="true">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-orange-400/18 dark:bg-orange-500/12" />
        </div>
        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.42fr)] lg:items-stretch lg:gap-10">
          <div className="min-w-0 flex-1 space-y-5 sm:space-y-6">
            <motion.div
              {...(reduceMotion
                ? { initial: false, animate: { opacity: 1 } }
                : {
                    initial: { opacity: 0, scale: 0.9 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { duration: 0.4 },
                  })}
              className="flex items-center"
            >
              <motion.div
                {...fade(0.1, 12)}
                className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/20 bg-white/60 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-700 backdrop-blur dark:bg-neutral-900/70 dark:text-neutral-100 sm:text-xs sm:tracking-[0.18em]"
              >
                {hero.eyebrow}
                <span
                  className="accent-dot h-2 w-2 shrink-0 rounded-full"
                  aria-hidden="true"
                />
              </motion.div>
            </motion.div>

            <motion.h1
              id="hero-name"
              {...fade(0.05, 18)}
              className="max-w-3xl text-balance text-4xl font-semibold leading-tight text-neutral-900 dark:text-white sm:text-5xl xl:whitespace-nowrap xl:text-6xl"
            >
              {hero.name}
            </motion.h1>

            <motion.p
              {...fade(0.08, 16)}
              className="accent-text max-w-2xl text-balance text-xl font-medium tracking-tight sm:text-2xl"
            >
              {hero.title}
            </motion.p>

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
                className={`accent-shadow inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-orange-600 dark:bg-[#f3f0e9] dark:text-neutral-950 dark:hover:bg-orange-400 ${focusRing}`}
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
            className="relative min-h-[430px] overflow-hidden rounded-[1.75rem] border border-neutral-900/10 bg-[#efe4d8] shadow-[0_24px_70px_rgba(35,28,21,0.14)] dark:border-white/10 dark:bg-[#24201d] sm:min-h-[520px] lg:min-h-full"
          >
            <Image
              src="/profile-portrait.png"
              alt="Portrait of Thet Zaw Latt, Senior Flutter Developer and Product Engineer"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 380px, 100vw"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/24 via-transparent to-white/5"
              aria-hidden="true"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-neutral-950/50 px-4 py-3 text-white backdrop-blur-md">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                Based in Da Nang
              </p>
              <p className="mt-1 text-sm font-semibold">
                Building thoughtful mobile and product experiences
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fade(0.2, 14)}
          className="relative mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="Core capabilities"
        >
          {hero.highlights.map((item) => (
            <div
              key={item.label}
              className="relative overflow-hidden rounded-2xl border border-neutral-900/8 bg-white/55 p-4 text-sm text-neutral-800 shadow-[0_16px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-white/6 dark:text-neutral-50"
            >
              <div
                className="absolute right-3 top-3 h-10 w-10 rounded-full bg-orange-400/40 blur-2xl"
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
    </section>
  );
}
