import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--background)] text-neutral-900 transition-colors duration-300 dark:text-neutral-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-70 blur-3xl" aria-hidden="true">
        <div className="absolute -right-24 -top-20 h-96 w-96 rounded-full bg-orange-400/14 dark:bg-orange-500/10" />
        <div className="absolute -bottom-28 left-[-8rem] h-80 w-80 rounded-full bg-amber-200/18 dark:bg-amber-700/6" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col gap-12 px-4 pb-16 pt-6 sm:gap-16 sm:px-6 sm:pb-20 lg:px-0">
        <Navbar />
        <main className="flex min-w-0 flex-col gap-12 sm:gap-16">
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <footer className="space-y-1 pb-6 text-center">
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            © {new Date().getFullYear()} Thet Zaw Latt
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </footer>
      </div>
    </div>
  );
}
