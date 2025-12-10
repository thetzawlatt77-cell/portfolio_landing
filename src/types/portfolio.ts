export type Skill = {
  name: string;
  experience: string;
};

export type Project = {
  title: string;
  date: string;
  duration: string;
  description: string;
  stack: string[];
  repo: string;
  image: string;
  gallerySlug?: string; // Optional slug to match with galleryProjects
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  projects: string[];
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
};

export type GalleryProject = {
  title: string;
  slug: string;
  images: string[];
};

