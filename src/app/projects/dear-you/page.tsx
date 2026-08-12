import type { Metadata } from "next";
import { ProductCaseStudy } from "@/components/product-case-study";

export const metadata: Metadata = {
  title: "Dear You Case Study | Thet Zaw Latt",
  description: "A Burmese letter and song-request product by Thet Zaw Latt.",
};

export default function DearYouCaseStudyPage() {
  return (
    <ProductCaseStudy
      eyebrow="Creative Product Platform"
      title="Dear You"
      subtitle="A warm, mobile-first home for words left unsaid."
      overview="Dear You is a Burmese letter and song-request experience. It supports the path from a private submission to editorial review and, only when selected and permitted, a published letter on the public site or Dear You social channels."
      desktopImage="/projects/dear-you/desktop.png"
      mobileImage="/projects/dear-you/mobile.png"
      stack={["Next.js", "TypeScript", "Supabase", "Authentication", "Tailwind CSS"]}
      capabilities={[
        "Three-step letter submission with optional song title, artist, and link",
        "Google OAuth and email magic-link authentication",
        "My Letters views with status filtering and editing while submitted",
        "Admin queue with editorial copy, internal notes, and moderation states",
        "Permission-aware publication to public letter listing and detail pages",
      ]}
    />
  );
}
