import Image from "next/image";
import Link from "next/link";

type ProductCaseStudyProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  overview: string;
  desktopImage: string;
  mobileImage: string;
  additionalDesktopImage?: string;
  additionalMobileImage?: string;
  capabilities: string[];
  stack: string[];
  note?: string;
};

export function ProductCaseStudy({
  eyebrow,
  title,
  subtitle,
  overview,
  desktopImage,
  mobileImage,
  additionalDesktopImage,
  additionalMobileImage,
  capabilities,
  stack,
  note,
}: ProductCaseStudyProps) {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-5 py-10 sm:px-8 sm:py-16">
      <Link
        href="/#projects"
        className="inline-flex rounded-full border border-neutral-300/70 bg-white/50 px-4 py-2 text-sm font-semibold text-neutral-700 backdrop-blur transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-neutral-200 dark:hover:bg-white/10"
      >
        ← Back to projects
      </Link>

      <section className="mt-8 overflow-hidden rounded-[2rem] border border-white/15 bg-white/55 p-6 shadow-[0_24px_90px_rgba(15,23,42,0.14)] backdrop-blur-xl dark:bg-neutral-950/45 sm:p-10">
        <p className="accent-text text-xs font-bold uppercase tracking-[0.22em]">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-6xl">
          {title}
        </h1>
        <p className="mt-3 text-lg font-medium text-neutral-600 dark:text-neutral-300">
          {subtitle}
        </p>
        <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-700 dark:text-neutral-200">
          {overview}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="tag rounded-full px-3 py-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-100"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_250px]">
        <div className="glass overflow-hidden rounded-3xl p-3 sm:p-5">
          <div className="overflow-hidden rounded-2xl border border-white/15 bg-neutral-950">
            <Image
              src={desktopImage}
              alt={`${title} desktop experience`}
              width={1440}
              height={1000}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
        <div className="glass mx-auto w-full max-w-[250px] overflow-hidden rounded-[2rem] p-2">
          <Image
            src={mobileImage}
            alt={`${title} mobile experience`}
            width={390}
            height={844}
            className="h-auto w-full rounded-[1.55rem]"
          />
        </div>
      </section>

      {additionalDesktopImage && additionalMobileImage ? (
        <section className="mt-8">
          <div className="mb-5">
            <p className="accent-text text-xs font-bold uppercase tracking-[0.2em]">
              Inside the product
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-3xl">
              Beyond the landing screen
            </h2>
          </div>
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_250px]">
            <div className="glass overflow-hidden rounded-3xl p-3 sm:p-5">
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-neutral-950">
                <Image
                  src={additionalDesktopImage}
                  alt={`${title} inner desktop experience`}
                  width={1440}
                  height={1000}
                  className="h-auto w-full"
                />
              </div>
            </div>
            <div className="glass mx-auto w-full max-w-[250px] overflow-hidden rounded-[2rem] p-2">
              <Image
                src={additionalMobileImage}
                alt={`${title} inner mobile experience`}
                width={390}
                height={844}
                className="h-auto w-full rounded-[1.55rem]"
              />
            </div>
          </div>
        </section>
      ) : null}

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="glass rounded-3xl p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            Product capabilities
          </p>
          <ul className="mt-5 space-y-3">
            {capabilities.map((capability) => (
              <li
                key={capability}
                className="flex gap-3 text-sm leading-6 text-neutral-700 dark:text-neutral-200"
              >
                <span className="accent-dot mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                {capability}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass rounded-3xl p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            Product approach
          </p>
          <p className="mt-5 text-sm leading-7 text-neutral-700 dark:text-neutral-200">
            The interface is responsive by design: the same product flows stay clear on a wide browser and on a phone-sized screen, without losing the project&apos;s own visual identity.
          </p>
          {note ? (
            <p className="accent-badge mt-4 rounded-2xl p-4 text-sm leading-6">
              {note}
            </p>
          ) : null}
        </div>
      </section>
    </main>
  );
}
