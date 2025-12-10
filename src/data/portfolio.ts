import {
  ContactItem,
  Experience,
  GalleryProject,
  Project,
  Skill,
} from "@/types/portfolio";

export const hero = {
  name: "Thet Zaw Latt",
  title: "Flutter Developer (5+ years experience)",
  description:
    "Experienced Flutter developer with strong UI/UX (Figma), skilled in building visually appealing mobile apps for Android/iOS with publishing experience across Google Play, Apple App Store, TestFlight, and Huawei App Gallery.",
};

export const skills: Skill[] = [
  { name: "Dart", experience: "5 yrs" },
  { name: "Flutter", experience: "5 yrs" },
  { name: "OOP", experience: "5 yrs" },
  { name: "REST API integration", experience: "5 yrs" },
  { name: "Apple Store Publish", experience: "5 yrs" },
  { name: "Play Store Publish", experience: "5 yrs" },
  { name: "GitHub", experience: "5 yrs" },
  { name: "Provider State Management", experience: "4 yrs" },
  { name: "GetX State Management", experience: "3 yrs" },
  { name: "App Publishing to Huawei App Gallery", experience: "3 yrs" },
  { name: "CSS", experience: "3 yrs" },
  { name: "Figma", experience: "3 yrs" },
  { name: "Firebase", experience: "3 yrs" },
  { name: "HTML5", experience: "3 yrs" },
  { name: "SQL", experience: "3 yrs" },
  { name: "Ionic", experience: "<1 yr" },
  { name: "MSSQL", experience: "<1 yr" },
  { name: "PHP", experience: "<1 yr" },
];

export const projects: Project[] = [
  {
    title: "Soccer Score",
    date: "Oct 2024",
    duration: "Built within 1 week",
    description: "Live score app with 4 language support and fast refresh UX.",
    stack: ["Flutter", "REST API integration", "Internationalization", "State Management"],
    repo: "https://github.com/Erihmar1259/soccer_score",
    image: "/projects/soccer-score.svg",
  },
  {
    title: "Sport FM Radio App",
    date: "Sep 2024",
    duration: "Built within 1 week",
    description:
      "Lightweight sports FM radio streaming app optimized for low latency playback.",
    stack: ["Flutter", "Audio Streaming", "Clean Architecture"],
    repo: "https://github.com/Erihmar1259/sport_fm_radio",
    image: "/projects/sport-fm.svg",
  },
  {
    title: "Four in a Row – Sport Style",
    date: "Aug 2024",
    duration: "Built in 3 days",
    description:
      "Sport-inspired game with single and two-player modes, polished animations.",
    stack: ["Flutter", "Custom UI", "Animations"],
    repo: "https://github.com/Erihmar1259/four_in_a_row",
    image: "/projects/four-in-a-row.svg",
  },
  {
    title: "QuizRush",
    date: "11/2025",
    duration: "Built within 1 week",
    description:
      "Ultimate quiz app with fun, learning, and rewards. Shipped web + admin, backend API, and mobile app in under a week.",
    stack: ["Flutter", "Admin Panel", "Backend API", "Gamification", "Multiplatform"],
    repo: "https://landing-page-quiz-eight.vercel.app/",
    image: "/gallery/quiz-rush/Screenshot_20251210_154603.png",
    gallerySlug: "quiz-rush",
  },
  {
    title: "SwayYeikPon",
    date: "11/2025",
    duration: "Rapid launch",
    description:
      "Food and product ordering experience available on Android, iOS, and Web with streamlined checkout.",
    stack: ["Flutter", "Web", "Payments", "Delivery UX"],
    repo: "https://shop-landing-page-theta.vercel.app/",
    image: "/gallery/sway-yeik-pon/Screenshot_20251210_154113.png",
    gallerySlug: "sway-yeik-pon",
  },
  {
    title: "Shwe Soe San",
    date: "09/2025 – 12/2025",
    duration: "Full product build",
    description:
      "Myanmar betting platform with bilingual support, secure transactions, and real-time updates across admin, backend, and mobile.",
    stack: ["Flutter", "Admin Panel", "Backend API", "Security", "Realtime"],
    repo: "https://landing-page-seven-alpha-o2hev3kvjn.vercel.app/",
    image: "/gallery/shwe-soe-san/Screenshot_20251210_153501.png",
    gallerySlug: "shwe-soe-san",
  },
];

export const galleryProjects: GalleryProject[] = [
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
  {
    title: "Shwe Soe San",
    slug: "shwe-soe-san",
    images: [
      "/gallery/shwe-soe-san/Screenshot_20251210_153501.png",
      "/gallery/shwe-soe-san/Screenshot_20251210_153535.png",
      "/gallery/shwe-soe-san/Screenshot_20251210_153601.png",
      "/gallery/shwe-soe-san/Screenshot_20251210_153613.png",
      "/gallery/shwe-soe-san/Screenshot_20251210_153627.png",
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "Flutter Developer",
    company: "Freelancer",
    period: "06/2024 – Now",
    projects: ["Delivered bespoke Flutter apps with store-ready polish."],
  },
  {
    role: "Senior Flutter Developer",
    company: "Myanmar Impact Technologies",
    period: "02/2024 – 06/2024",
    projects: ["Rice seller & buyer app"],
  },
  {
    role: "Flutter Developer",
    company: "Win Corker",
    period: "10/2023 – 12/2023",
    projects: ["Chat app (WeChat-like)"],
  },
  {
    role: "Flutter Developer",
    company: "Etrade Myanmar",
    period: "06/2023 – 09/2023",
    projects: ["Movie streaming app"],
  },
  {
    role: "Flutter Developer",
    company: "Partner Associates Int’l",
    period: "03/2022 – 05/2023",
    projects: ["Authenticator app", "Office ERP", "Edu app"],
  },
  {
    role: "Ionic/Flutter Developer",
    company: "Myanmar Information Technology",
    period: "11/2019 – 03/2022",
    projects: ["Mobile banking app", "Wallet app", "Agent app"],
  },
];

export const contact: ContactItem[] = [
  { label: "Phone", value: "0942686025", href: "tel:0942686025" },
  { label: "Email", value: "thetzawlatt46@gmail.com", href: "mailto:thetzawlatt46@gmail.com" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/thet-zaw-la-966580253",
    href: "https://www.linkedin.com/in/thet-zaw-la-966580253",
  },
  {
    label: "GitHub",
    value: "github.com/thetzawlatt77-cell",
    href: "https://github.com/thetzawlatt77-cell",
  },
];

