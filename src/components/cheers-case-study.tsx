"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cheersCaseStudy } from "@/data/cheers-case-study";
import { SectionHeading } from "@/components/section-heading";
import { ScreenshotModal } from "@/components/screenshot-modal";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500";

export function CheersCaseStudy() {
  const reduceMotion = usePrefersReducedMotion();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openGallery = (index: number) => {
    setActiveImageIndex(index);
    setGalleryOpen(true);
  };

  const fade = (delay = 0) =>
    reduceMotion
      ? { initial: false as const, animate: { opacity: 1 }, transition: { duration: 0 } }
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.35, delay },
        };

  const galleryImages = cheersCaseStudy.screens.map((screen) => screen.src);
  const orderedGalleryImages = [
    ...galleryImages.slice(activeImageIndex),
    ...galleryImages.slice(0, activeImageIndex),
  ];

  return (
    <div className="flex flex-col gap-16">
      {/* Hero */}
      <section aria-labelledby="cheers-title" className="pt-4">
        <motion.div
          {...(reduceMotion
            ? { initial: false, animate: { opacity: 1 } }
            : {
                initial: { opacity: 0, y: 18 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.4 },
              })}
          className="glass relative overflow-hidden rounded-3xl"
        >
          <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden="true">
            <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-emerald-400/15 blur-3xl" />
          </div>

          <div className="relative grid gap-0 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div className="relative min-h-[280px] overflow-hidden bg-neutral-100 dark:bg-neutral-800 sm:min-h-[360px]">
              <Image
                src={cheersCaseStudy.coverImage}
                alt="Cheers! app home screen preview"
                fill
                priority
                className="object-cover object-top"
                sizes="(min-width: 1024px) 45vw, 100vw"
                quality={75}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"
                aria-hidden="true"
              />
            </div>

            <div className="relative flex flex-col gap-5 p-6 sm:p-8 lg:p-10">
              <span className="inline-flex w-fit items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
                {cheersCaseStudy.badge}
              </span>
              <div>
                <h1
                  id="cheers-title"
                  className="text-3xl font-semibold text-neutral-900 dark:text-white sm:text-4xl lg:text-5xl"
                >
                  {cheersCaseStudy.title}
                </h1>
                <p className="mt-3 text-base font-medium text-neutral-600 dark:text-neutral-300 sm:text-lg">
                  {cheersCaseStudy.subtitle}
                </p>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-neutral-700 dark:text-neutral-200 sm:text-base">
                {cheersCaseStudy.overview}
              </p>

              <dl className="grid gap-3 sm:grid-cols-2">
                {(
                  [
                    ["Role", cheersCaseStudy.meta.role],
                    ["Platform", cheersCaseStudy.meta.platform],
                    ["Project Type", cheersCaseStudy.meta.projectType],
                    ["Core Stack", cheersCaseStudy.meta.coreStack],
                  ] as const
                ).map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/40 p-4 dark:bg-neutral-950/30"
                  >
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                      {label}
                    </dt>
                    <dd className="mt-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Challenge */}
      <section className="space-y-6">
        <SectionHeading eyebrow="Context" title={cheersCaseStudy.challenge.heading} />
        <motion.div
          {...fade(0.05)}
          className="glass space-y-4 rounded-3xl p-6 text-sm leading-7 text-neutral-700 dark:text-neutral-200 sm:p-8 sm:text-base"
        >
          {cheersCaseStudy.challenge.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </motion.div>
      </section>

      {/* What I Built */}
      <section className="space-y-6">
        <SectionHeading
          eyebrow="Capabilities"
          title="What I Built"
          description="Verified product areas delivered in the Flutter rebuild."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {cheersCaseStudy.capabilities.map((item, idx) => (
            <motion.article
              key={item.title}
              {...fade(Math.min(idx * 0.03, 0.15))}
              className="glass rounded-3xl p-5"
            >
              <div className="flex items-center gap-3">
                <div
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-indigo-500/80 to-sky-400/80 text-xs font-semibold text-white shadow-lg"
                  aria-hidden="true"
                >
                  {item.title.slice(0, 2).toUpperCase()}
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-700 dark:text-neutral-200">
                  {item.title}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-neutral-700 dark:text-neutral-200">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section className="space-y-6">
        <SectionHeading
          eyebrow="Architecture"
          title={cheersCaseStudy.architecture.heading}
          description="A maintainable Flutter structure with clear separation between UI, state, domain logic, and Firebase services."
        />
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <motion.div {...fade(0.05)} className="glass rounded-3xl p-6 sm:p-8">
            <ol className="space-y-0">
              {cheersCaseStudy.architecture.layers.map((layer, idx) => (
                <li key={layer} className="flex flex-col items-center text-center">
                  <div className="w-full rounded-2xl border border-white/10 bg-white/50 px-4 py-3 text-sm font-semibold text-neutral-900 dark:bg-neutral-950/40 dark:text-white">
                    {layer}
                  </div>
                  {idx < cheersCaseStudy.architecture.layers.length - 1 ? (
                    <span
                      className="py-2 text-neutral-400 dark:text-neutral-500"
                      aria-hidden="true"
                    >
                      ↓
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.ul
            {...fade(0.08)}
            className="glass space-y-3 rounded-3xl p-6 sm:p-8"
          >
            {cheersCaseStudy.architecture.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-200"
              >
                <span
                  className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"
                  aria-hidden="true"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Testing */}
      <section className="space-y-6">
        <SectionHeading eyebrow="Quality" title={cheersCaseStudy.testing.heading} />
        <motion.div {...fade(0.05)} className="glass overflow-hidden rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                Automated Flutter Tests
              </p>
              <p className="mt-2 text-5xl font-semibold text-neutral-900 dark:text-white">
                {cheersCaseStudy.testing.testCount}
              </p>
            </div>
            <p className="max-w-xl text-sm leading-6 text-neutral-700 dark:text-neutral-200">
              {cheersCaseStudy.testing.summary}
            </p>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {cheersCaseStudy.testing.coverage.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-white/40 px-4 py-3 text-sm text-neutral-700 dark:bg-neutral-950/30 dark:text-neutral-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Screens */}
      <section className="space-y-6">
        <SectionHeading
          eyebrow="Product Screens"
          title="Selected Screens"
          description="Real product screenshots from the delivered Cheers experience."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cheersCaseStudy.screens.map((screen, idx) => (
            <motion.button
              key={screen.src}
              type="button"
              {...fade(Math.min(idx * 0.03, 0.12))}
              onClick={() => openGallery(idx)}
              className={`group overflow-hidden rounded-3xl border border-white/10 bg-white/50 text-left shadow-lg shadow-indigo-500/10 backdrop-blur transition hover:-translate-y-0.5 dark:bg-neutral-900/60 ${focusRing}`}
              aria-label={`Enlarge ${screen.label} screenshot`}
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-neutral-950/40">
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  fill
                  className={`object-contain ${
                    reduceMotion ? "" : "transition duration-500 group-hover:scale-[1.02]"
                  }`}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  quality={70}
                  loading={idx < 2 ? "eager" : "lazy"}
                />
              </div>
              <div className="px-4 py-3">
                <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                  {screen.label}
                </p>
                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                  Tap to enlarge
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Engineering Focus */}
      <section className="space-y-6">
        <SectionHeading eyebrow="Approach" title="Engineering Focus" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cheersCaseStudy.engineeringFocus.map((item, idx) => (
            <motion.div
              key={item}
              {...fade(Math.min(idx * 0.03, 0.12))}
              className="glass rounded-2xl px-4 py-5 text-sm font-semibold text-neutral-800 dark:text-neutral-100"
            >
              <div className="flex items-center gap-3">
                <span
                  className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(52,211,153,0.12)]"
                  aria-hidden="true"
                />
                {item}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Delivery */}
      <section className="space-y-6">
        <SectionHeading eyebrow="Outcome" title={cheersCaseStudy.delivery.heading} />
        <motion.div
          {...fade(0.05)}
          className="glass rounded-3xl p-6 text-sm leading-7 text-neutral-700 dark:text-neutral-200 sm:p-8 sm:text-base"
        >
          <p>{cheersCaseStudy.delivery.body}</p>
        </motion.div>
      </section>

      {/* Navigation */}
      <nav
        aria-label="Case study navigation"
        className="flex flex-col gap-4 border-t border-neutral-200/70 pt-8 dark:border-neutral-800 sm:flex-row sm:items-center sm:justify-between"
      >
        <Link
          href="/#projects"
          className={`inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 transition hover:text-neutral-950 dark:text-neutral-200 dark:hover:text-white ${focusRing} rounded-sm`}
        >
          <span aria-hidden="true">←</span>
          Back to Projects
        </Link>
        <Link
          href={cheersCaseStudy.nextProject.href}
          className={`inline-flex items-center gap-2 rounded-full border border-neutral-300/70 bg-white/50 px-4 py-2 text-sm font-semibold text-neutral-800 transition hover:border-neutral-800 dark:border-white/20 dark:bg-neutral-900/50 dark:text-white dark:hover:border-white/50 ${focusRing}`}
        >
          Next Project: {cheersCaseStudy.nextProject.title}
          <span aria-hidden="true">→</span>
        </Link>
      </nav>

      <ScreenshotModal
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        title={`${cheersCaseStudy.title} — ${cheersCaseStudy.screens[activeImageIndex]?.label ?? "Screens"}`}
        images={orderedGalleryImages}
      />
    </div>
  );
}
