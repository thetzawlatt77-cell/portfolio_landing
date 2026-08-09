"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects, galleryProjects } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";
import { SectionHeading } from "./section-heading";
import { ScreenshotModal } from "./screenshot-modal";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500";

export function Projects() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const reduceMotion = usePrefersReducedMotion();

  const featuredProjects = projects.filter((project) => project.featured);
  const gridProjects = projects.filter((project) => !project.featured);

  const getGalleryImages = (gallerySlug?: string) => {
    if (!gallerySlug) return [];
    const galleryProject = galleryProjects.find((gp) => gp.slug === gallerySlug);
    return galleryProject?.images || [];
  };

  const openScreens = (gallerySlug?: string) => {
    if (gallerySlug) setOpenModal(gallerySlug);
  };

  return (
    <section id="projects" className="space-y-6">
      <SectionHeading
        eyebrow="Projects"
        title="Featured Mobile Projects"
        description="Selected Flutter projects demonstrating production delivery, real-time experiences, API integrations, scalable UI, and mobile product engineering."
      />

      {featuredProjects.length > 0 ? (
        <div className="space-y-6">
          {featuredProjects.map((project, idx) => {
            const galleryImages = getGalleryImages(project.gallerySlug);
            return (
              <FeaturedProjectCard
                key={project.id}
                project={project}
                galleryImages={galleryImages}
                reduceMotion={!!reduceMotion}
                priority={idx === 0}
                onViewScreens={() => openScreens(project.gallerySlug)}
              />
            );
          })}
        </div>
      ) : null}

      <div className="grid gap-6 md:grid-cols-2">
        {gridProjects.map((project, idx) => {
          const galleryImages = getGalleryImages(project.gallerySlug);
          const hasScreenshots = galleryImages.length > 0;

          return (
            <motion.article
              key={project.id}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.35, delay: Math.min(idx * 0.05, 0.2) }
              }
              className="glass group flex h-full flex-col overflow-hidden rounded-3xl"
            >
              <div className="relative h-52 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className={`object-cover ${
                    reduceMotion
                      ? ""
                      : "transition duration-500 group-hover:scale-105"
                  }`}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  quality={75}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/5 dark:from-black/40"
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                  {project.date ? <span>{project.date}</span> : <span />}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    {project.label}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                    {project.title}
                  </h3>
                  {project.role ? (
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                      {project.role}
                    </p>
                  ) : null}
                </div>
                <p className="text-sm leading-6 text-neutral-700 dark:text-neutral-200">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="tag rounded-full px-3 py-1 text-xs font-semibold text-neutral-700 dark:text-neutral-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-col gap-3 pt-2">
                  <ProjectActions
                    project={project}
                    hasScreenshots={hasScreenshots}
                    screenshotCount={galleryImages.length}
                    onViewScreens={() => openScreens(project.gallerySlug)}
                  />
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {projects.map((project) => {
        const galleryImages = getGalleryImages(project.gallerySlug);
        if (!project.gallerySlug || galleryImages.length === 0) return null;

        return (
          <ScreenshotModal
            key={project.gallerySlug}
            isOpen={openModal === project.gallerySlug}
            onClose={() => setOpenModal(null)}
            title={project.title}
            images={galleryImages}
          />
        );
      })}
    </section>
  );
}

function FeaturedProjectCard({
  project,
  galleryImages,
  reduceMotion,
  priority,
  onViewScreens,
}: {
  project: Project;
  galleryImages: string[];
  reduceMotion: boolean;
  priority?: boolean;
  onViewScreens: () => void;
}) {
  const hasScreenshots = galleryImages.length > 0;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.4 }}
      className="glass group relative overflow-hidden rounded-3xl"
    >
      <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden="true">
        <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-emerald-400/15 blur-3xl" />
      </div>

      <div className="relative grid gap-0 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        <div className="relative min-h-[240px] overflow-hidden bg-neutral-100 dark:bg-neutral-800 sm:min-h-[340px] lg:min-h-full">
          <Image
            src={project.image}
            alt={`${project.title} app preview`}
            fill
            className={`object-cover object-top ${
              reduceMotion ? "" : "transition duration-500 group-hover:scale-[1.03]"
            }`}
            sizes="(min-width: 1024px) 50vw, 100vw"
            quality={75}
            priority={priority}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/10"
            aria-hidden="true"
          />
          <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/25 bg-black/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
            Featured
          </span>
        </div>

        <div className="relative flex flex-col gap-4 p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
              {project.label}
            </span>
            {project.date ? (
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                {project.date}
              </span>
            ) : null}
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">
              {project.title}
            </h3>
            {project.subtitle ? (
              <p className="mt-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 sm:text-base">
                {project.subtitle}
              </p>
            ) : null}
            {project.role ? (
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                {project.role}
              </p>
            ) : null}
          </div>

          <p className="text-sm leading-6 text-neutral-700 dark:text-neutral-200 sm:text-[15px]">
            {project.description}
          </p>

          {project.highlights && project.highlights.length > 0 ? (
            <ul className="space-y-2">
              {project.highlights.slice(0, 3).map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-200"
                >
                  <span
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="tag rounded-full px-3 py-1 text-xs font-semibold text-neutral-700 dark:text-neutral-100"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-2">
            <ProjectActions
              project={project}
              hasScreenshots={hasScreenshots}
              screenshotCount={galleryImages.length}
              onViewScreens={onViewScreens}
              prominent
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectActions({
  project,
  hasScreenshots,
  screenshotCount,
  onViewScreens,
  prominent = false,
}: {
  project: Project;
  hasScreenshots: boolean;
  screenshotCount: number;
  onViewScreens: () => void;
  prominent?: boolean;
}) {
  const primaryHref = project.caseStudyHref ?? project.projectUrl ?? project.repoUrl;
  const primaryLabel = project.caseStudyHref
    ? "View Case Study"
    : project.projectUrl
      ? "View Project"
      : project.repoUrl
        ? "View Project"
        : null;

  return (
    <div className={`flex flex-col gap-3 ${prominent ? "sm:flex-row sm:flex-wrap sm:items-center" : ""}`}>
      <div className="flex flex-wrap items-center gap-3">
        {primaryHref && primaryLabel ? (
          <Link
            href={primaryHref}
            target={primaryHref.startsWith("http") ? "_blank" : undefined}
            rel={primaryHref.startsWith("http") ? "noopener noreferrer" : undefined}
            className={
              prominent
                ? `inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 ${focusRing}`
                : `inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition hover:text-indigo-400 dark:text-indigo-300 ${focusRing} rounded-sm`
            }
          >
            {primaryLabel}
            <ArrowIcon className="h-4 w-4" />
          </Link>
        ) : (
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            Details available on request
          </span>
        )}
        {!prominent ? (
          <div
            className="ml-auto h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(52,211,153,0.12)]"
            aria-hidden="true"
          />
        ) : null}
      </div>
      {hasScreenshots ? (
        <button
          type="button"
          onClick={onViewScreens}
          aria-label={`View ${screenshotCount} screens for ${project.title}`}
          className={`inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300/70 bg-white/50 px-4 py-2.5 text-sm font-semibold text-neutral-800 transition hover:border-neutral-800 hover:bg-white/80 dark:border-white/20 dark:bg-neutral-900/50 dark:text-white dark:hover:border-white/50 dark:hover:bg-neutral-800/80 ${focusRing}`}
        >
          <ImageIcon className="h-4 w-4" />
          View Screens ({screenshotCount})
        </button>
      ) : null}
    </div>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function ImageIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}
