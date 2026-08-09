"use client";

import Image from "next/image";
import type {
  ProjectMediaGlow,
  ProjectMediaType,
  ProjectMediaVariant,
} from "@/types/portfolio";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500";

type ProjectMediaProps = {
  src: string;
  alt: string;
  mediaType: ProjectMediaType;
  variant?: ProjectMediaVariant;
  glow?: ProjectMediaGlow;
  secondarySrc?: string;
  secondaryAlt?: string;
  /** Card media stage vs featured split showcase. */
  size?: "card" | "featured";
  priority?: boolean;
  /** Opens the shared screenshot gallery when provided. */
  onOpenGallery?: () => void;
  reduceMotion?: boolean;
  showPlatformHint?: boolean;
};

/**
 * Reusable project preview with single / dual / featured compositions.
 * Portrait screenshots always use object-contain inside a CSS phone frame.
 */
export function ProjectMedia({
  src,
  alt,
  mediaType,
  variant = "single",
  glow = "neutral",
  secondarySrc,
  secondaryAlt,
  size = "card",
  priority = false,
  onOpenGallery,
  reduceMotion = false,
  showPlatformHint = true,
}: ProjectMediaProps) {
  const isInteractive = typeof onOpenGallery === "function";
  const canDual =
    Boolean(secondarySrc) &&
    secondarySrc !== src &&
    (variant === "dual" || variant === "featured");

  const resolvedVariant: ProjectMediaVariant = canDual
    ? variant === "featured"
      ? "featured"
      : "dual"
    : "single";

  const stageClass =
    size === "featured"
      ? "min-h-[min(400px,70vw)] py-8 sm:min-h-[440px] sm:py-10 lg:min-h-full lg:py-12"
      : "min-h-[clamp(360px,52vw,410px)] py-7 sm:py-8";

  const content =
    mediaType === "landscape" ? (
      <ProjectLandscapePreview
        src={src}
        alt={alt}
        size={size}
        priority={priority}
        reduceMotion={reduceMotion}
      />
    ) : resolvedVariant === "featured" || resolvedVariant === "dual" ? (
      <DualDeviceComposition
        primarySrc={src}
        primaryAlt={alt}
        secondarySrc={secondarySrc!}
        secondaryAlt={secondaryAlt ?? alt}
        featured={resolvedVariant === "featured"}
        size={size}
        priority={priority}
        reduceMotion={reduceMotion}
      />
    ) : (
      <SingleDeviceComposition
        src={src}
        alt={alt}
        size={size}
        priority={priority}
        reduceMotion={reduceMotion}
      />
    );

  const stage = (
    <div
      className={`relative flex items-center justify-center overflow-hidden px-5 sm:px-8 ${stageClass}`}
    >
      <MediaAtmosphere glow={glow} featured={size === "featured"} />

      {showPlatformHint && mediaType === "mobile" ? (
        <span className="absolute bottom-4 left-4 z-[2] rounded-full border border-white/20 bg-black/35 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm dark:bg-black/45">
          Mobile App
        </span>
      ) : null}

      <div className="relative z-[1] flex w-full items-center justify-center">
        {content}
      </div>
    </div>
  );

  if (!isInteractive) return stage;

  return (
    <button
      type="button"
      onClick={onOpenGallery}
      aria-label={`View screens for ${alt}`}
      className={`group/media block w-full cursor-pointer text-left ${focusRing} rounded-[inherit]`}
    >
      {stage}
    </button>
  );
}

function MediaAtmosphere({
  glow,
  featured,
}: {
  glow: ProjectMediaGlow;
  featured?: boolean;
}) {
  const tones: Record<
    ProjectMediaGlow,
    { wash: string; a: string; b: string; c: string }
  > = {
    cyan: {
      wash: "from-cyan-400/18 via-sky-300/10 to-blue-400/12 dark:from-cyan-400/14 dark:via-sky-400/8 dark:to-blue-500/10",
      a: "bg-cyan-300/25 dark:bg-cyan-400/18",
      b: "bg-sky-300/18 dark:bg-sky-400/12",
      c: "bg-blue-300/14 dark:bg-blue-400/10",
    },
    lavender: {
      wash: "from-violet-400/16 via-sky-300/10 to-cyan-300/12 dark:from-violet-400/12 dark:via-sky-400/8 dark:to-cyan-400/10",
      a: "bg-violet-300/22 dark:bg-violet-400/16",
      b: "bg-sky-300/16 dark:bg-sky-400/12",
      c: "bg-cyan-300/12 dark:bg-cyan-400/10",
    },
    mint: {
      wash: "from-emerald-300/16 via-cyan-300/10 to-violet-300/12 dark:from-emerald-400/12 dark:via-cyan-400/8 dark:to-violet-400/10",
      a: "bg-emerald-300/22 dark:bg-emerald-400/14",
      b: "bg-cyan-300/16 dark:bg-cyan-400/12",
      c: "bg-violet-300/14 dark:bg-violet-400/10",
    },
    cheers: {
      wash: "from-violet-300/14 via-white/20 to-emerald-300/14 dark:from-violet-400/12 dark:via-white/5 dark:to-emerald-400/12",
      a: "bg-violet-300/20 dark:bg-violet-400/14",
      b: "bg-emerald-300/18 dark:bg-emerald-400/12",
      c: "bg-white/25 dark:bg-white/10",
    },
    neutral: {
      wash: "from-cyan-400/12 via-emerald-300/8 to-violet-300/10 dark:from-cyan-400/10 dark:via-emerald-400/6 dark:to-violet-400/8",
      a: "bg-cyan-300/18 dark:bg-cyan-400/12",
      b: "bg-emerald-300/14 dark:bg-emerald-400/10",
      c: "bg-violet-300/12 dark:bg-violet-400/8",
    },
  };

  const tone = tones[glow];

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className={`absolute inset-0 bg-gradient-to-br ${tone.wash}`} />
      <div
        className={`absolute left-1/2 top-[42%] h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${tone.a} ${
          featured ? "h-64 w-64 opacity-90" : ""
        }`}
      />
      <div className={`absolute bottom-4 right-6 h-28 w-28 rounded-full blur-3xl ${tone.b}`} />
      <div className={`absolute left-5 top-6 h-20 w-20 rounded-full blur-2xl ${tone.c}`} />
    </div>
  );
}

function SingleDeviceComposition({
  src,
  alt,
  size,
  priority,
  reduceMotion,
}: {
  src: string;
  alt: string;
  size: "card" | "featured";
  priority?: boolean;
  reduceMotion: boolean;
}) {
  return (
    <div
      className={
        reduceMotion
          ? undefined
          : "transition duration-300 ease-out group-hover/media:-translate-y-1"
      }
    >
      <DeviceFrame src={src} alt={alt} size={size} priority={priority} layer="primary" />
    </div>
  );
}

function DualDeviceComposition({
  primarySrc,
  primaryAlt,
  secondarySrc,
  secondaryAlt,
  featured,
  size,
  priority,
  reduceMotion,
}: {
  primarySrc: string;
  primaryAlt: string;
  secondarySrc: string;
  secondaryAlt: string;
  featured: boolean;
  size: "card" | "featured";
  priority?: boolean;
  reduceMotion: boolean;
}) {
  const stageWidth = featured
    ? "w-[min(100%,280px)] sm:w-[min(100%,310px)]"
    : "w-[min(100%,250px)] sm:w-[min(100%,270px)]";

  return (
    <div
      className={`relative mx-auto flex h-[clamp(300px,78vw,360px)] items-end justify-center ${stageWidth}`}
    >
      {/* Secondary — hidden below sm to keep primary readable on narrow phones */}
      <div
        className={`absolute bottom-3 left-0 z-0 hidden sm:block ${
          featured ? "w-[48%]" : "w-[46%]"
        }`}
      >
        <div
          className={`origin-bottom ${
            reduceMotion
              ? "opacity-80"
              : "opacity-80 transition duration-300 ease-out group-hover/media:opacity-90"
          }`}
          style={{ transform: featured ? "rotate(-4deg)" : "rotate(-3.5deg)" }}
        >
          <div
            className={
              reduceMotion
                ? undefined
                : "transition duration-300 ease-out group-hover/media:translate-y-[2px] group-hover/media:translate-x-[-2px]"
            }
          >
            <DeviceFrame
              src={secondarySrc}
              alt={secondaryAlt}
              size={size}
              priority={false}
              layer="secondary"
              className="!w-full"
            />
          </div>
        </div>
      </div>

      <div
        className={`relative z-[1] ${featured ? "w-[60%]" : "w-[64%]"} sm:ml-[18%] ${
          reduceMotion
            ? ""
            : "transition duration-300 ease-out group-hover/media:-translate-y-1"
        }`}
      >
        <DeviceFrame
          src={primarySrc}
          alt={primaryAlt}
          size={size}
          priority={priority}
          layer="primary"
          className="!w-full"
        />
      </div>
    </div>
  );
}

function DeviceFrame({
  src,
  alt,
  size,
  priority,
  layer,
  className = "",
}: {
  src: string;
  alt: string;
  size: "card" | "featured";
  priority?: boolean;
  layer: "primary" | "secondary";
  className?: string;
}) {
  const isPrimary = layer === "primary";
  const widthClass =
    className ||
    (size === "featured"
      ? "w-[clamp(148px,34vw,176px)] max-w-[74%]"
      : "w-[clamp(148px,72%,176px)]");

  return (
    <div
      className={`relative aspect-[9/19.5] ${widthClass} rounded-[30px] border border-white/35 bg-neutral-950 p-[6px] ring-1 ring-inset ring-white/10 dark:border-white/12 ${
        isPrimary
          ? "shadow-[0_22px_48px_rgba(15,23,42,0.32)] dark:shadow-[0_22px_48px_rgba(0,0,0,0.5)]"
          : "shadow-[0_14px_36px_rgba(15,23,42,0.22)] dark:shadow-[0_14px_36px_rgba(0,0,0,0.4)]"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-[5px] rounded-[24px] ring-1 ring-white/8"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-[8px] z-[2] h-[11px] w-[64px] -translate-x-1/2 rounded-full bg-neutral-900 ring-1 ring-white/10"
        aria-hidden="true"
      />
      <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-neutral-950">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain object-center"
          sizes={
            size === "featured"
              ? "(min-width: 1024px) 180px, 42vw"
              : "(min-width: 768px) 180px, 70vw"
          }
          quality={isPrimary ? 85 : 75}
          priority={priority}
        />
      </div>
    </div>
  );
}

function ProjectLandscapePreview({
  src,
  alt,
  size,
  priority,
  reduceMotion,
}: {
  src: string;
  alt: string;
  size: "card" | "featured";
  priority?: boolean;
  reduceMotion: boolean;
}) {
  const frameClass =
    size === "featured"
      ? "w-full max-w-[min(100%,420px)]"
      : "w-[min(100%,92%)] max-w-[380px]";

  return (
    <div
      className={`${frameClass} overflow-hidden rounded-2xl border border-white/35 bg-neutral-950/90 shadow-[0_16px_40px_rgba(15,23,42,0.22)] dark:border-white/12 ${
        reduceMotion
          ? ""
          : "transition duration-300 ease-out group-hover/media:-translate-y-1"
      }`}
    >
      <div
        className="flex items-center gap-1.5 border-b border-white/10 bg-neutral-900/90 px-3 py-2"
        aria-hidden="true"
      >
        <span className="h-2 w-2 rounded-full bg-rose-400/80" />
        <span className="h-2 w-2 rounded-full bg-amber-300/80" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
        <span className="ml-2 h-2 flex-1 rounded-full bg-white/10" />
      </div>
      <div className="relative aspect-[16/10] w-full bg-neutral-950">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain object-center"
          sizes={
            size === "featured"
              ? "(min-width: 1024px) 40vw, 90vw"
              : "(min-width: 768px) 40vw, 90vw"
          }
          quality={85}
          priority={priority}
        />
      </div>
    </div>
  );
}
