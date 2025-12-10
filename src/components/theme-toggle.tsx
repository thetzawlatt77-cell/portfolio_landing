"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by using default until mounted
  const isDark = mounted ? theme === "dark" : true;

  if (!mounted) {
    return (
      <button
        type="button"
        className="relative h-11 w-11 rounded-full border border-white/10 bg-white/50 text-sm font-semibold text-neutral-700 shadow-md transition-colors duration-300 hover:bg-white/80 dark:border-white/5 dark:bg-neutral-900/60 dark:text-neutral-50 dark:hover:bg-neutral-800"
        aria-label="Toggle theme"
      >
        <span className="sr-only">Toggle theme</span>
        <div className="flex items-center justify-center">
          <MoonIcon className="h-5 w-5" />
        </div>
      </button>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="relative h-11 w-11 rounded-full border border-white/10 bg-white/50 text-sm font-semibold text-neutral-700 shadow-md transition-colors duration-300 hover:bg-white/80 dark:border-white/5 dark:bg-neutral-900/60 dark:text-neutral-50 dark:hover:bg-neutral-800"
    >
      <span className="sr-only">Toggle theme</span>
      <motion.div
        key={isDark ? "moon" : "sun"}
        initial={{ opacity: 0, rotate: -30, scale: 0.85 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <MoonIcon className="h-5 w-5" />
        ) : (
          <SunIcon className="h-5 w-5" />
        )}
      </motion.div>
    </motion.button>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  );
}

