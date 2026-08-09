export type Skill = {
  name: string;
  experience: string;
};

export type SkillGroup = {
  title: string;
  /** Short label for the glass card icon circle (typically 2 characters). */
  icon: string;
  skills: string[];
};

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  date?: string;
  /** Capability / project-type badge shown in the card header (not a speed claim). */
  label: string;
  description: string;
  stack: string[];
  image: string;
  /** Short role/type line, e.g. "Personal project" or "Client Contract Project". */
  role?: string;
  /** Project engagement type for featured cards. */
  type?: string;
  /** Concise engineering highlights (featured cards). */
  highlights?: string[];
  featured?: boolean;
  gallerySlug?: string;
  caseStudySlug?: string;
  /** Public demo or landing URL. Omit when there is no public link. */
  projectUrl?: string;
  /** Public source repository. Only set when source is intentionally public. */
  repoUrl?: string;
  /** Internal case study route when available. */
  caseStudyHref?: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  /** Concise impact bullets shown under the role. */
  bullets: string[];
  /** Optional project/product focus chips. */
  focusAreas?: string[];
  /** Secondary note kept visually quieter than Flutter impact. */
  secondaryNote?: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
  /** When true, opens in a new tab with noopener noreferrer. */
  external?: boolean;
  /** Visually quieter treatment (e.g. phone). */
  secondary?: boolean;
};

export type GalleryProject = {
  title: string;
  slug: string;
  images: string[];
};
