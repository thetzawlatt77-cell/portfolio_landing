"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import type { ProjectMediaType } from "@/types/portfolio";

interface ScreenshotModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: string[];
  mediaType?: ProjectMediaType;
}

export function ScreenshotModal({
  isOpen,
  onClose,
  title,
  images,
  mediaType = "mobile",
}: ScreenshotModalProps) {
  const reduceMotion = usePrefersReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const isMobileGallery = mediaType === "mobile";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      closeRef.current?.focus();
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            aria-hidden="true"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={title}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/95 shadow-2xl dark:bg-neutral-900/95"
            >
              <div className="flex items-center justify-between gap-3 border-b border-neutral-200/50 p-4 sm:p-6 dark:border-neutral-800/50">
                <h2 className="min-w-0 truncate text-lg font-semibold text-neutral-900 dark:text-white sm:text-2xl">
                  {title}
                </h2>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  className="rounded-full p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                  aria-label="Close screenshot gallery"
                >
                  <CloseIcon className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6">
                <div
                  className={
                    isMobileGallery
                      ? "grid grid-cols-2 justify-items-center gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
                      : "grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
                  }
                >
                  {images.map((src, idx) => (
                    <div
                      key={`${src}-${idx}`}
                      className={
                        isMobileGallery
                          ? "flex w-full max-w-[180px] items-center justify-center overflow-hidden rounded-[1.35rem] border border-white/10 bg-neutral-950/70 p-1.5 shadow-lg shadow-cyan-500/10 sm:max-w-[200px]"
                          : "overflow-hidden rounded-2xl border border-white/10 bg-white/50 shadow-lg shadow-indigo-500/10 backdrop-blur dark:bg-neutral-900/60"
                      }
                    >
                      <Image
                        src={src}
                        alt={`${title} screenshot ${idx + 1}`}
                        width={isMobileGallery ? 395 : 1280}
                        height={isMobileGallery ? 900 : 800}
                        className={
                          isMobileGallery
                            ? "h-auto max-h-[min(62vh,720px)] w-full rounded-[1.1rem] object-contain"
                            : "h-auto max-h-[min(70vh,820px)] w-full object-contain bg-neutral-950/40"
                        }
                        sizes={
                          isMobileGallery
                            ? "(min-width: 1024px) 200px, (min-width: 640px) 28vw, 42vw"
                            : "(min-width: 1024px) 28vw, (min-width: 640px) 42vw, 90vw"
                        }
                        quality={75}
                        loading={idx < 3 ? "eager" : "lazy"}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-neutral-200/50 p-3 text-center text-sm text-neutral-500 dark:border-neutral-800/50 dark:text-neutral-400 sm:p-4">
                {images.length} screenshot{images.length !== 1 ? "s" : ""}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

function CloseIcon({ className }: { className?: string }) {
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
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}
