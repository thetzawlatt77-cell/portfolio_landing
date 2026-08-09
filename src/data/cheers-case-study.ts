export type CaseStudyCapability = {
  title: string;
  description: string;
};

export type CaseStudyScreen = {
  label: string;
  src: string;
  alt: string;
};

export type CaseStudyMeta = {
  role: string;
  platform: string;
  projectType: string;
  coreStack: string;
};

export const cheersCaseStudy = {
  title: "Cheers!",
  subtitle: "Collaborative Event Planning & Shared Finance App",
  badge: "Client Contract Project",
  overview:
    "A Flutter rebuild of an existing MVP focused on real-time collaboration, shared planning, budgeting, task management, and a polished mobile experience.",
  coverImage: "/projects/cheers/screens/home.jpg",
  secondaryCoverImage: "/projects/cheers/screens/profile.jpg",
  meta: {
    role: "Senior Flutter Developer / Full Product Implementation",
    platform: "iOS & Android",
    projectType: "Client Contract",
    coreStack: "Flutter • Dart • Firebase • Riverpod • Firestore",
  } satisfies CaseStudyMeta,
  challenge: {
    heading: "The Challenge",
    paragraphs: [
      "The product existed as an MVP and required a Flutter rebuild with improved performance, maintainable architecture, and a more polished mobile experience.",
      "The application also required multiple interconnected workflows including collaborative experiences, member permissions, tasks, budgets, shared expenses, notifications, and profile/media management.",
    ],
  },
  capabilities: [
    {
      title: "Experience Management",
      description:
        "Create and manage shared experiences including event information, invitation codes, collaborators, cover imagery, and event details.",
    },
    {
      title: "Task Management",
      description:
        "Task creation, deadlines, progress states, assignment-related workflows, and completion tracking.",
    },
    {
      title: "Budget & Expenses",
      description:
        "Budget tracking, expense entry, payments, and calculated balance states such as “You owe” and “Others owe you”.",
    },
    {
      title: "Real-time Collaboration",
      description:
        "Firestore-backed synchronization for experience-related data across collaborators.",
    },
    {
      title: "Group Chat",
      description:
        "In-experience messaging with conversation views, member context, and collaborative communication flows.",
    },
    {
      title: "Notifications",
      description:
        "Application notification flows and notification-navigation handling into relevant product screens.",
    },
    {
      title: "Profile & Media",
      description:
        "Authentication, profile management, and Firebase-backed media handling for covers, avatars, and related assets.",
    },
  ] satisfies CaseStudyCapability[],
  architecture: {
    heading: "Built for Maintainability",
    layers: [
      "Presentation Layer",
      "Riverpod / State Management",
      "Repositories & Domain Logic",
      "Firebase Services",
      "Authentication / Firestore / Storage",
    ],
    bullets: [
      "Feature-first project organization",
      "Riverpod-based state management",
      "Reusable design system and shared UI building blocks",
      "Repository separation between UI and data sources",
      "Centralized Firebase error-message handling",
      "Isolated, testable business logic for tasks, permissions, and balances",
    ],
  },
  testing: {
    heading: "Tested Business Logic",
    /** Verified by counting `test` / `testWidgets` cases under cheers/test (Aug 2026). */
    testCount: 122,
    summary:
      "The delivered Cheers project includes a Flutter test suite focused on domain rules, permissions, finance calculations, routing, and Firebase error handling.",
    coverage: [
      "Task completion, overdue, and progress logic",
      "Collaborator permissions and budget visibility",
      "Budget snapshots and balance calculations",
      "Notification route mapping",
      "Firebase error-message behavior",
    ],
  },
  screens: [
    {
      label: "Home",
      src: "/projects/cheers/screens/home.jpg",
      alt: "Cheers home screen with next-up experience and quick actions",
    },
    {
      label: "Profile",
      src: "/projects/cheers/screens/profile.jpg",
      alt: "Cheers profile screen with account settings",
    },
    {
      label: "Edit Profile",
      src: "/projects/cheers/screens/edit-profile.jpg",
      alt: "Cheers edit profile sheet for name and email updates",
    },
    {
      label: "Log In",
      src: "/projects/cheers/screens/login.jpg",
      alt: "Cheers login screen with email and Apple sign-in",
    },
    {
      label: "Sign Up",
      src: "/projects/cheers/screens/signup.jpg",
      alt: "Cheers sign-up screen with account creation flow",
    },
  ] satisfies CaseStudyScreen[],
  engineeringFocus: [
    "Performance-focused UI",
    "Reactive state updates",
    "Firebase integration",
    "Error handling",
    "Reusable components",
    "Responsive layouts",
    "Business-rule testing",
  ],
  delivery: {
    heading: "Delivery",
    body: "Successfully completed and delivered as a client contract project, covering the core Flutter product experience, Firebase integrations, collaborative workflows, business logic, and testing.",
  },
  nextProject: {
    title: "Soccer Score",
    href: "/#projects",
    description: "Real-time mobile score app",
  },
} as const;
