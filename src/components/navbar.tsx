"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/#hero", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500";

export function Navbar() {
  const reduceMotion = usePrefersReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-6 z-40">
      <motion.nav
        {...(reduceMotion
          ? { initial: false, animate: { opacity: 1 } }
          : {
              initial: { opacity: 0, y: -12 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.35 },
            })}
        aria-label="Primary"
        className="glass relative mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full px-4 py-3 backdrop-blur sm:px-5"
      >
        <Link
          href="/#hero"
          className={`flex min-w-0 items-center gap-3 rounded-full ${focusRing}`}
          aria-label="Thet Zaw Latt — Senior Flutter Developer, go to About"
          onClick={() => setMobileOpen(false)}
        >
          <span
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-indigo-500 via-sky-400 to-emerald-400 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30"
            aria-hidden="true"
          >
            TZ
          </span>
          <div className="hidden min-w-0 sm:block">
            <p className="truncate text-xs uppercase tracking-[0.2em] text-neutral-600 dark:text-neutral-300">
              Senior Flutter Developer
            </p>
            <p className="truncate text-sm font-semibold text-neutral-900 dark:text-white">
              Thet Zaw Latt
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 text-sm font-medium text-neutral-700 dark:text-neutral-200 md:flex lg:gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-2.5 py-2 transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/5 lg:px-3 ${focusRing}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/Thet_Zaw_Latt_Senior_Flutter_CV.pdf"
            download
            aria-label="Download Thet Zaw Latt CV as PDF"
            className={`hidden rounded-full bg-neutral-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 md:inline-flex ${focusRing}`}
          >
            Download CV
          </Link>
          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/50 text-neutral-800 transition hover:bg-white/80 dark:border-white/5 dark:bg-neutral-900/60 dark:text-neutral-50 dark:hover:bg-neutral-800 md:hidden ${focusRing}`}
            aria-expanded={mobileOpen}
            aria-controls={menuId}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <MenuIcon open={mobileOpen} />
          </button>
          <ThemeToggle />
        </div>
      </motion.nav>

      {mobileOpen ? (
        <div
          id={menuId}
          className="glass absolute left-4 right-4 top-[calc(100%+0.75rem)] z-50 rounded-3xl p-3 shadow-xl sm:left-auto sm:right-4 sm:w-72"
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-2xl px-4 py-3 text-sm font-medium text-neutral-800 transition hover:bg-black/5 dark:text-neutral-100 dark:hover:bg-white/5 ${focusRing}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/Thet_Zaw_Latt_Senior_Flutter_CV.pdf"
              download
              aria-label="Download Thet Zaw Latt CV as PDF"
              className={`mt-1 rounded-2xl bg-neutral-900 px-4 py-3 text-center text-sm font-semibold text-white dark:bg-white dark:text-neutral-900 ${focusRing}`}
              onClick={() => setMobileOpen(false)}
            >
              Download CV
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}
