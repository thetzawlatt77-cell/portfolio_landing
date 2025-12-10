"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { hero } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="hero" className="pt-10">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/70 via-white/40 to-white/20 p-8 shadow-lg shadow-indigo-500/10 dark:from-neutral-900/70 dark:via-neutral-900/40 dark:to-neutral-900/30 md:p-12">
        <div className="pointer-events-none absolute inset-0 opacity-70 blur-3xl">
          <div className="absolute -left-24 -top-10 h-60 w-60 rounded-full bg-indigo-500/30" />
          <div className="absolute -bottom-14 right-0 h-60 w-60 rounded-full bg-emerald-400/25" />
        </div>
        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-6"
            >
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white/50 shadow-xl ring-4 ring-indigo-500/20 dark:border-neutral-800/50 sm:h-32 sm:w-32">
                <Image
                  src="/pp.png"
                  alt="Thet Zaw Latt"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600 backdrop-blur dark:bg-neutral-900/70 dark:text-neutral-200"
                >
                  Flutter Developer • 5+ Years
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </motion.div>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="max-w-3xl text-4xl font-semibold leading-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl"
            >
              {hero.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-2xl text-lg leading-relaxed text-neutral-700 dark:text-neutral-200"
            >
              {hero.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/Thet_Zaw_Latt_cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                Download CV
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300/70 px-5 py-3 text-sm font-semibold text-neutral-800 transition hover:-translate-y-0.5 hover:border-neutral-800 dark:border-white/20 dark:text-white dark:hover:border-white/50"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {[
              { label: "Platforms", value: "Android • iOS " },
              { label: "Publishing", value: "Play Store • App Store • TestFlight • Huawei App Gallery • ApkPure" },
              { label: "UI/UX", value: "Figma-driven, polished handoff" },
              { label: "Speed", value: "F1 Driver" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass relative overflow-hidden rounded-2xl p-4 text-sm text-neutral-800 shadow-lg dark:text-neutral-50"
              >
                <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500/70 to-sky-400/80 blur-2xl" />
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                  {item.label}
                </p>
                <p className="mt-2 font-semibold">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

