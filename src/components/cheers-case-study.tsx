"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import Link from "next/link";
import { useState } from "react";
import { cheersCaseStudy } from "@/data/cheers-case-study";
import { PhoneDeviceFrame, ProjectMedia } from "@/components/project-media";
import { SectionHeading } from "@/components/section-heading";
import { ScreenshotModal } from "@/components/screenshot-modal";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500";

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
          <div className="pointer-events-none absolute inset-0 opacity-80" aria-hidden="true">
            <div className="absolute -right-10 top-0 h-56 w-56 rounded-full bg-orange-400/14 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-amber-200/12 blur-3xl" />
            <div className="absolute left-1/3 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-white/20 blur-3xl dark:bg-white/8" />
          </div>

          <div className="relative grid gap-0 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)]">
            <div className="relative order-2 border-t border-white/10 lg:order-1 lg:border-r lg:border-t-0 lg:border-white/10 dark:border-white/5">
              <ProjectMedia
                src={cheersCaseStudy.coverImage}
                alt="Cheers! home screen"
                mediaType="mobile"
                variant="featured"
                glow="cheers"
                secondarySrc={cheersCaseStudy.secondaryCoverImage}
                secondaryAlt="Cheers! profile screen"
                size="featured"
                priority
                reduceMotion={!!reduceMotion}
                onOpenGallery={() => openGallery(0)}
              />
            </div>

            <div className="relative order-1 flex flex-col gap-5 p-6 sm:p-8 lg:order-2 lg:p-10">
              <span className="accent-badge inline-flex w-fit items-center rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]">
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
                  className="accent-icon grid h-10 w-10 shrink-0 place-items-center rounded-full text-xs font-semibold text-white"
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
                  className="accent-dot mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
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

      {/* Product Demo */}
      <section id="product-demo" className="scroll-mt-24 space-y-6">
        <SectionHeading
          eyebrow="Product Demo"
          title="See Cheers! in motion"
          description="A guided look at the delivered mobile experience and its core interaction flows."
        />
        <motion.div
          {...fade(0.05)}
          className="glass relative overflow-hidden rounded-3xl p-3 sm:p-5"
        >
          <div
            className="pointer-events-none absolute inset-x-12 top-0 h-36 rounded-full bg-orange-300/15 blur-3xl dark:bg-orange-700/8"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[1.35rem] border border-neutral-900/10 bg-neutral-950 shadow-[0_24px_70px_rgba(35,28,21,0.18)] dark:border-white/10">
            <video
              className="aspect-video w-full bg-neutral-950 object-contain"
              controls
              playsInline
              preload="metadata"
              poster={cheersCaseStudy.demoVideo.poster}
              aria-label="Cheers mobile application video demonstration"
            >
              <source src={cheersCaseStudy.demoVideo.src} type="video/mp4" />
              Your browser does not support embedded video playback.
            </video>
          </div>
          <div className="relative flex flex-col gap-2 px-2 pb-1 pt-4 sm:flex-row sm:items-center sm:justify-between sm:px-3">
            <div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                Cheers! product walkthrough
              </p>
              <p className="mt-1 text-xs leading-5 text-neutral-500 dark:text-neutral-400">
                Use the player controls to watch, pause, seek, or view full screen.
              </p>
            </div>
            <span className="accent-badge w-fit rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]">
              Video Demo
            </span>
          </div>
        </motion.div>
      </section>

      {/* Screens */}
      <section className="space-y-6">
        <SectionHeading
          eyebrow="Product Screens"
          title="Selected Screens"
          description="Real product screenshots from the delivered Cheers experience."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {cheersCaseStudy.screens.map((screen, idx) => (
            <motion.button
              key={screen.src}
              type="button"
              {...fade(Math.min(idx * 0.03, 0.12))}
              onClick={() => openGallery(idx)}
              className={`group overflow-hidden rounded-3xl border border-neutral-900/10 bg-[#fffdf9]/70 text-left shadow-[0_16px_42px_rgba(35,28,21,0.08)] backdrop-blur transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-[#191715]/70 ${focusRing}`}
              aria-label={`Enlarge ${screen.label} screenshot`}
            >
              <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden px-4 py-6 sm:min-h-[340px]">
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-200/14 via-amber-100/8 to-stone-200/12 dark:from-orange-700/8 dark:via-amber-800/4 dark:to-stone-700/7"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-300/16 blur-3xl dark:bg-orange-700/8"
                  aria-hidden="true"
                />
                <div
                  className={`relative z-[1] w-[clamp(118px,58%,148px)] ${
                    reduceMotion
                      ? ""
                      : "transition duration-300 group-hover:-translate-y-1"
                  }`}
                >
                  <PhoneDeviceFrame
                    src={screen.src}
                    alt={screen.alt}
                    size="card"
                    priority={idx < 2}
                    className="!w-full"
                  />
                </div>
              </div>
              <div className="relative border-t border-white/10 px-4 py-3 dark:border-white/5">
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
                  className="accent-dot h-2 w-2 rounded-full shadow-[0_0_0_6px_var(--accent-soft)]"
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
        mediaType="mobile"
      />
    </div>
  );
}
