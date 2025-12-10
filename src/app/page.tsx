import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-100 text-neutral-900 transition-colors duration-300 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900">
      <div className="pointer-events-none fixed inset-0 opacity-60 blur-3xl">
        <div className="absolute left-20 top-10 h-72 w-72 rounded-full bg-indigo-500/20" />
        <div className="absolute right-12 top-20 h-72 w-72 rounded-full bg-emerald-400/15" />
        <div className="absolute bottom-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-400/20" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col gap-16 px-4 pb-20 pt-6 sm:px-6 lg:px-0">
        <Navbar />
        <main className="flex flex-col gap-16">
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <footer className="pb-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} Thet Zaw Latt — Built with Next.js, Tailwind, and Framer Motion.
        </footer>
      </div>
    </div>
  );
}
