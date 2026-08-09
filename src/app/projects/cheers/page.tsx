import type { Metadata } from "next";
import Link from "next/link";
import { CheersCaseStudy } from "@/components/cheers-case-study";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Cheers! Flutter Case Study | Thet Zaw Latt",
  description:
    "Senior Flutter Developer case study covering a collaborative event-planning and shared-finance application built with Flutter, Firebase, Riverpod, and Firestore.",
  openGraph: {
    title: "Cheers! Flutter Case Study | Thet Zaw Latt",
    description:
      "Senior Flutter Developer case study covering a collaborative event-planning and shared-finance application built with Flutter, Firebase, Riverpod, and Firestore.",
    type: "article",
    images: [
      {
        url: "/projects/cheers/cover.jpg",
        width: 720,
        height: 1400,
        alt: "Cheers! Flutter app case study cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheers! Flutter Case Study | Thet Zaw Latt",
    description:
      "Senior Flutter Developer case study covering a collaborative event-planning and shared-finance application built with Flutter, Firebase, Riverpod, and Firestore.",
    images: ["/projects/cheers/cover.jpg"],
  },
};

export default function CheersCaseStudyPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-neutral-50 via-white to-neutral-100 text-neutral-900 transition-colors duration-300 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900">
      <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-60 blur-3xl" aria-hidden="true">
        <div className="absolute left-20 top-10 h-72 w-72 rounded-full bg-indigo-500/20" />
        <div className="absolute right-12 top-20 h-72 w-72 rounded-full bg-emerald-400/15" />
        <div className="absolute bottom-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-400/20" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-16 pt-6 sm:gap-12 sm:px-6 sm:pb-20 lg:px-0">
        <Navbar />
        <main className="min-w-0">
          <CheersCaseStudy />
        </main>
        <footer className="space-y-1 pb-6 text-center">
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            © {new Date().getFullYear()} Thet Zaw Latt
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            Built with Next.js, Tailwind CSS & Framer Motion ·{" "}
            <Link
              href="/"
              className="underline decoration-transparent underline-offset-4 transition hover:decoration-indigo-400"
            >
              Back to portfolio
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}
