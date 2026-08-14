import {
  ContactItem,
  Experience,
  GalleryProject,
  Project,
  SkillGroup,
} from "@/types/portfolio";

export const hero = {
  name: "Thet Zaw Latt",
  title: "Senior Flutter Developer & Product Engineer",
  eyebrow: "Mobile-first product builder • 5+ years",
  description:
    "I build production mobile apps and turn product ideas into polished, working experiences—from Flutter clients to AI-assisted web products.",
  secondaryDescription:
    "My core strength is Flutter delivery, supported by hands-on product engineering with Next.js, Supabase, Firebase, APIs, and AI workflows.",
  location:
    "Based in Da Nang, Vietnam • Open to senior mobile roles, product engineering opportunities, and selected contract work",
  highlights: [
    { label: "Mobile", value: "Flutter · iOS · Android" },
    { label: "Product", value: "Next.js · Supabase · AI" },
    { label: "Systems", value: "Riverpod · Firebase · APIs" },
    {
      label: "Delivery",
      value: "Architecture · Testing · Release",
    },
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Mobile Engineering",
    icon: "ME",
    skills: ["Flutter", "Dart", "iOS", "Android", "Responsive Mobile UI"],
  },
  {
    title: "Architecture & State",
    icon: "AS",
    skills: [
      "Riverpod",
      "Provider",
      "GetX",
      "Feature-first Architecture",
      "Clean Architecture",
      "Reusable Components",
    ],
  },
  {
    title: "Backend & Integration",
    icon: "BI",
    skills: [
      "Firebase",
      "REST APIs",
      "Socket",
      "Node.js",
      "MongoDB",
      "Real-time Data Integration",
    ],
  },
  {
    title: "Product & Web",
    icon: "PW",
    skills: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Responsive Web",
      "AI Workflows",
      "Product UX",
    ],
  },
  {
    title: "Quality & Performance",
    icon: "QP",
    skills: [
      "Unit Testing",
      "Flutter Testing",
      "Debugging",
      "Performance Optimization",
      "Error Handling",
    ],
  },
  {
    title: "Delivery & Tools",
    icon: "DT",
    skills: [
      "App Store",
      "Google Play",
      "TestFlight",
      "Huawei AppGallery",
      "Git / GitHub",
      "Figma",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "cheers",
    title: "Cheers!",
    subtitle: "Collaborative Event Planning & Shared Finance App",
    label: "Featured Contract Project",
    role: "Client Contract Project",
    type: "Client Contract Project",
    featured: true,
    mediaType: "mobile",
    mediaVariant: "featured",
    mediaGlow: "cheers",
    description:
      "A Flutter rebuild of an existing MVP focused on scalable architecture, real-time collaboration, shared planning, budgeting, task management, and a polished mobile experience.",
    stack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Cloud Firestore",
      "Firebase Authentication",
      "Riverpod",
    ],
    highlights: [
      "Real-time collaborative experiences",
      "Tasks, budgets, and shared expense workflows",
      "Tested business logic and Firebase-backed data flows",
    ],
    image: "/gallery/Cheers/cheers1.avif",
    secondaryImage: "/gallery/Cheers/cheers2.avif",
    gallerySlug: "cheers",
    caseStudySlug: "cheers",
    caseStudyHref: "/projects/cheers",
    demoHref: "/projects/cheers#product-demo",
  },
  {
    id: "tripmate",
    title: "TripMate",
    subtitle: "AI-assisted, editable travel planning",
    label: "Featured Product Build",
    role: "Full-stack product build",
    type: "Featured Product Build",
    featured: true,
    mediaType: "landscape",
    mediaVariant: "featured",
    mediaGlow: "mint",
    description:
      "A responsive travel planner that turns a traveller's basics into an editable first draft, then keeps every day, place, checklist item, and cost under the user's control.",
    stack: ["Next.js", "TypeScript", "AI", "Supabase", "Open-Meteo"],
    highlights: [
      "AI-generated itinerary, checklist, and budget estimate",
      "Editable day plans with places, maps, weather, and costs",
      "Public share links and downloadable trip PDF",
    ],
    image: "/projects/tripmate/desktop.png",
    secondaryImage: "/projects/tripmate/mobile.png",
    gallerySlug: "tripmate",
    caseStudySlug: "tripmate",
    caseStudyHref: "/projects/tripmate",
  },
  {
    id: "dear-you",
    title: "Dear You",
    subtitle: "A Burmese letter and song-request experience",
    label: "Creative Product Platform",
    role: "Full-stack product build",
    type: "Creative Product Platform",
    featured: true,
    mediaType: "landscape",
    mediaVariant: "featured",
    mediaGlow: "lavender",
    description:
      "A mobile-first platform for sharing words left unsaid, with an editorial workflow that can bring selected letters to Dear You's public website and social channels.",
    stack: ["Next.js", "TypeScript", "Supabase", "Authentication", "Tailwind CSS"],
    highlights: [
      "Three-step letter submission with optional song details",
      "Google and magic-link sign-in with owner status tracking",
      "Admin moderation, editorial copy, and public published letters",
    ],
    image: "/projects/dear-you/desktop.png",
    secondaryImage: "/projects/dear-you/mobile.png",
    gallerySlug: "dear-you",
    caseStudySlug: "dear-you",
    caseStudyHref: "/projects/dear-you",
  },
  {
    id: "quiz-rush",
    title: "QuizRush",
    date: "11/2025",
    label: "Full Product Delivery",
    role: "Product build",
    mediaType: "mobile",
    mediaVariant: "dual",
    mediaGlow: "cyan",
    description:
      "Quiz product spanning a Flutter mobile client, admin panel, and backend API with gamified learning flows.",
    stack: ["Flutter", "Admin Panel", "Backend API", "Gamification", "Multiplatform"],
    projectUrl: "https://landing-page-quiz-eight.vercel.app/",
    image: "/gallery/quiz-rush/Screenshot_20251210_154603.png",
    secondaryImage: "/gallery/quiz-rush/Screenshot_20251210_154633.png",
    gallerySlug: "quiz-rush",
  },
];

export const galleryProjects: GalleryProject[] = [
  {
    title: "Cheers!",
    slug: "cheers",
    images: [
      "/gallery/Cheers/cheers1.avif",
      "/gallery/Cheers/cheers2.avif",
      "/gallery/Cheers/cheers3.avif",
      "/gallery/Cheers/cheers4.avif",
      "/gallery/Cheers/cheers5.avif",
    ],
  },
  {
    title: "TripMate",
    slug: "tripmate",
    mixedMedia: true,
    images: [
      "/projects/tripmate/desktop.png",
      "/projects/tripmate/mobile.png",
      "/projects/tripmate/plan-desktop.png",
      "/projects/tripmate/plan-mobile.png",
    ],
  },
  {
    title: "Dear You",
    slug: "dear-you",
    mixedMedia: true,
    images: [
      "/projects/dear-you/desktop.png",
      "/projects/dear-you/mobile.png",
      "/projects/dear-you/letters-desktop.png",
      "/projects/dear-you/letters-mobile.png",
    ],
  },
  {
    title: "QuizRush",
    slug: "quiz-rush",
    images: [
      "/gallery/quiz-rush/Screenshot_20251210_154603.png",
      "/gallery/quiz-rush/Screenshot_20251210_154633.png",
      "/gallery/quiz-rush/Screenshot_20251210_154649.png",
      "/gallery/quiz-rush/Screenshot_20251210_154710.png",
      "/gallery/quiz-rush/Screenshot_20251210_154732.png",
      "/gallery/quiz-rush/Screenshot_20251210_154745.png",
      "/gallery/quiz-rush/Screenshot_20251210_154804.png",
      "/gallery/quiz-rush/Screenshot_20251210_154902.png",
      "/gallery/quiz-rush/Screenshot_20251210_154921.png",
      "/gallery/quiz-rush/Screenshot_20251210_154935.png",
      "/gallery/quiz-rush/Screenshot_20251210_154943.png",
      "/gallery/quiz-rush/Screenshot_20251210_154957.png",
      "/gallery/quiz-rush/Screenshot_20251210_155018.png",
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "Senior Flutter Developer — Contract Projects",
    company: "Freelance",
    period: "06/2024 – Now",
    bullets: [
      "Delivered contract-based Flutter applications from UI implementation through production-ready delivery.",
      "Built and integrated Firebase and REST-backed mobile workflows.",
      "Owned feature implementation, debugging, testing, and release preparation.",
      "Completed the Cheers! Flutter rebuild as a client contract project.",
    ],
    secondaryNote:
      "Additional full-stack delivery using Node.js, MongoDB, and Next.js.",
  },
  {
    role: "Senior Flutter Developer",
    company: "Myanmar Impact Technologies",
    period: "02/2024 – 06/2024",
    bullets: [
      "Developed a Flutter marketplace application for rice sellers and buyers.",
      "Translated high-fidelity Figma designs into production-ready Flutter UI.",
      "Focused on smooth performance across Android and iOS devices.",
      "Coordinated with backend and QA teams for sprint delivery.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "Etrade Myanmar",
    period: "06/2023 – 09/2023",
    bullets: [
      "Developed mobile functionality for a movie-streaming application.",
      "Implemented complex Figma-based UI.",
      "Worked with GetX/Provider and API-driven application state.",
      "Supported commercial app publishing.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "Partner Associates Int’l",
    period: "03/2022 – 05/2023",
    focusAreas: ["Authenticator App", "Office ERP", "Education App"],
    bullets: [
      "Delivered Flutter applications across authenticator, office ERP, and education product areas.",
      "Implemented production mobile UI and feature workflows for internal business use cases.",
      "Collaborated with stakeholders to ship maintainable, release-ready mobile experiences.",
    ],
  },
  {
    role: "Ionic / Flutter Developer",
    company: "Myanmar Information Technology",
    period: "11/2019 – 03/2022",
    focusAreas: ["Mobile Banking", "Digital Wallet", "Agent Application"],
    bullets: [
      "Developed and maintained mobile applications for banking and wallet-related workflows.",
      "Worked with secure API communication and data-handling requirements.",
      "Collaborated within a large professional development environment.",
    ],
  },
];

export const contact: ContactItem[] = [
  {
    label: "Email",
    value: "thetzawlatt46@gmail.com",
    href: "mailto:thetzawlatt46@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/thet-zaw-latt-57b848412",
    href: "https://www.linkedin.com/in/thet-zaw-latt-57b848412/",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/thetzawlatt77-cell",
    href: "https://github.com/thetzawlatt77-cell",
    external: true,
  },
  {
    label: "Phone",
    value: "0942686025",
    href: "tel:0942686025",
    secondary: true,
  },
];

export const contactEmail = "mailto:thetzawlatt46@gmail.com";
export const contactLocation = "Based in Da Nang, Vietnam";
