"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch current view count
    fetch("/api/views")
      .then((res) => res.json())
      .then((data) => {
        setViews(data.views);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });

    // Track a new view (only once per session)
    const hasViewed = sessionStorage.getItem("hasViewed");
    if (!hasViewed) {
      fetch("/api/views", { method: "POST" })
        .then((res) => res.json())
        .then((data) => {
          setViews(data.views);
          sessionStorage.setItem("hasViewed", "true");
        })
        .catch(() => {
          // Silently fail
        });
    }
  }, []);

  if (isLoading || views === null) {
    return (
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/50 px-4 py-2 text-sm font-medium text-neutral-600 backdrop-blur dark:bg-neutral-900/70 dark:text-neutral-200">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-neutral-400 border-t-transparent" />
        <span>Loading views...</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/50 px-4 py-2 text-sm font-medium text-neutral-600 backdrop-blur dark:bg-neutral-900/70 dark:text-neutral-200"
    >
      <svg
        className="h-4 w-4 text-emerald-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
      <span className="font-semibold">{views.toLocaleString()}</span>
      <span className="text-xs text-neutral-500">views</span>
    </motion.div>
  );
}

