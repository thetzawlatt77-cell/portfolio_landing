"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#hero", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-6 z-40">
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-5 py-3 backdrop-blur"
      >
        <Link href="#hero" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-indigo-500 via-sky-400 to-emerald-400 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30">
            TZ
          </span>
          <div className="hidden sm:block">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-300">
              Flutter Developer
            </p>
            <p className="text-sm font-semibold text-neutral-900 dark:text-white">
              Thet Zaw Latt
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-200 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/Thet_Zaw_Latt_cv.pdf"
            download
            className="hidden rounded-full bg-neutral-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 md:inline-flex"
          >
            Download CV
          </Link>
          <ThemeToggle />
        </div>
      </motion.nav>
    </header>
  );
}

