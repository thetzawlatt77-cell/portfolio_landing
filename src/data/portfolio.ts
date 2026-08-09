import {
  ContactItem,
  Experience,
  GalleryProject,
  Project,
  SkillGroup,
} from "@/types/portfolio";

export const hero = {
  name: "Thet Zaw Latt",
  title: "Senior Flutter Developer",
  eyebrow: "Senior Flutter Developer • 5+ Years",
  description:
    "5+ years building and shipping production Flutter apps for iOS and Android across fintech, real-time systems, marketplaces, streaming, and consumer products.",
  secondaryDescription:
    "Focused on Flutter/Dart, Firebase and API integration, scalable application architecture, polished UI implementation, performance optimization, and store-ready delivery.",
  location:
    "Based in Da Nang, Vietnam • Open to Da Nang, HCMC, Hanoi, and remote Vietnam Flutter roles",
  highlights: [
    { label: "Mobile", value: "Flutter • iOS • Android" },
    { label: "Delivery", value: "App Store • Google Play • TestFlight" },
    { label: "Architecture", value: "Riverpod • Firebase • APIs" },
    {
      label: "Quality",
      value: "Testing • Debugging • Production Delivery",
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

/** Secondary / earlier-stack experience — not primary hiring signals. */
export const additionalSkills = ["PHP", "MSSQL", "SQL", "HTML5", "CSS", "Ionic"];

export const productivityTools = ["Cursor", "ChatGPT"];

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
    image: "/projects/cheers/screens/home.jpg",
    secondaryImage: "/projects/cheers/screens/profile.jpg",
    gallerySlug: "cheers",
    caseStudySlug: "cheers",
    caseStudyHref: "/projects/cheers",
  },
  {
    id: "soccer-score",
    title: "Soccer Score",
    date: "Oct 2024",
    label: "Real-time Mobile App",
    role: "Personal project",
    mediaType: "mobile",
    mediaVariant: "single",
    mediaGlow: "cyan",
    description:
      "Live football score app with multi-language support and API-driven score refresh for iOS and Android.",
    stack: ["Flutter", "REST APIs", "Internationalization", "State Management"],
    repoUrl: "https://github.com/Erihmar1259/soccer_score",
    image: "/projects/soccer-score.svg",
  },
  {
    id: "sport-fm",
    title: "Sport FM Radio App",
    date: "Sep 2024",
    label: "Audio Streaming",
    role: "Personal project",
    mediaType: "mobile",
    mediaVariant: "single",
    mediaGlow: "lavender",
    description:
      "Sports FM radio streaming app focused on reliable playback, clean architecture, and a lightweight listening experience.",
    stack: ["Flutter", "Audio Streaming", "Clean Architecture"],
    repoUrl: "https://github.com/Erihmar1259/sport_fm_radio",
    image: "/projects/sport-fm.svg",
  },
  {
    id: "sway-yeik-pon",
    title: "SwayYeikPon",
    date: "11/2025",
    label: "Multi-platform Product",
    role: "Product build",
    mediaType: "mobile",
    mediaVariant: "dual",
    mediaGlow: "mint",
    description:
      "Food and product ordering experience across Android, iOS, and Web, with a streamlined browse-to-checkout flow.",
    stack: ["Flutter", "Web", "Checkout UX", "Multiplatform"],
    projectUrl: "https://shop-landing-page-theta.vercel.app/",
    image: "/gallery/sway-yeik-pon/Screenshot_20251210_154113.png",
    secondaryImage: "/gallery/sway-yeik-pon/Screenshot_20251210_154153.png",
    gallerySlug: "sway-yeik-pon",
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
  {
    id: "four-in-a-row",
    title: "Four in a Row – Sport Style",
    date: "Aug 2024",
    label: "Custom UI",
    role: "Personal project",
    mediaType: "mobile",
    mediaVariant: "single",
    mediaGlow: "neutral",
    description:
      "Sport-inspired Connect Four game with single and two-player modes and custom Flutter animations.",
    stack: ["Flutter", "Custom UI", "Animations"],
    repoUrl: "https://github.com/Erihmar1259/four_in_a_row",
    image: "/projects/four-in-a-row.svg",
  },
];

export const galleryProjects: GalleryProject[] = [
  {
    title: "Cheers!",
    slug: "cheers",
    images: [
      "/projects/cheers/screens/home.jpg",
      "/projects/cheers/screens/profile.jpg",
      "/projects/cheers/screens/edit-profile.jpg",
      "/projects/cheers/screens/login.jpg",
      "/projects/cheers/screens/signup.jpg",
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
  {
    title: "SwayYeikPon",
    slug: "sway-yeik-pon",
    images: [
      "/gallery/sway-yeik-pon/Screenshot_20251210_154113.png",
      "/gallery/sway-yeik-pon/Screenshot_20251210_154153.png",
      "/gallery/sway-yeik-pon/Screenshot_20251210_154216.png",
      "/gallery/sway-yeik-pon/Screenshot_20251210_154224.png",
      "/gallery/sway-yeik-pon/Screenshot_20251210_154322.png",
      "/gallery/sway-yeik-pon/Screenshot_20251210_154332.png",
      "/gallery/sway-yeik-pon/Screenshot_20251210_154339.png",
      "/gallery/sway-yeik-pon/Screenshot_20251210_154348.png",
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

