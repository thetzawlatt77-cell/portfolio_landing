"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { galleryProjects } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function Gallery() {
  return (
    <section id="gallery" className="space-y-6">
      <SectionHeading
        eyebrow="Gallery"
        title="Screenshots by project"
        description="Browse in-app views grouped by each shipped project."
      />

      <div className="space-y-10">
        {galleryProjects.map((project) => (
          <div key={project.slug} className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                {project.title}
              </h3>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                {project.images.length} shots
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.images.map((src, idx) => {
                const isPortrait = project.mixedMedia && src.includes("mobile");
                return (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.25, delay: Math.min(idx * 0.03, 0.15) }}
                className={`overflow-hidden rounded-2xl border border-white/10 bg-white/50 shadow-lg shadow-indigo-500/10 backdrop-blur dark:bg-neutral-900/60 ${
                  isPortrait ? "mx-auto w-full max-w-[240px]" : ""
                }`}
                >
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  width={900}
                  height={1900}
                  className="h-auto w-full object-contain bg-neutral-950/40"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  priority={idx < 2}
                />
                </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
