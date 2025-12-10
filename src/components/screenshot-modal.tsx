"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

interface ScreenshotModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: string[];
}

export function ScreenshotModal({
  isOpen,
  onClose,
  title,
  images,
}: ScreenshotModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/95 shadow-2xl dark:bg-neutral-900/95"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-neutral-200/50 p-6 dark:border-neutral-800/50">
                <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className="rounded-full p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-white"
                  aria-label="Close modal"
                >
                  <CloseIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Images Grid */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {images.map((src, idx) => (
                    <motion.div
                      key={src}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="overflow-hidden rounded-2xl border border-white/10 bg-white/50 shadow-lg shadow-indigo-500/10 backdrop-blur dark:bg-neutral-900/60"
                    >
                      <Image
                        src={src}
                        alt={`${title} screenshot ${idx + 1}`}
                        width={900}
                        height={1900}
                        className="h-auto w-full object-contain bg-neutral-950/40"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-neutral-200/50 p-4 text-center text-sm text-neutral-500 dark:border-neutral-800/50 dark:text-neutral-400">
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
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

