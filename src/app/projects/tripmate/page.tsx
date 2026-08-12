import type { Metadata } from "next";
import { ProductCaseStudy } from "@/components/product-case-study";

export const metadata: Metadata = {
  title: "TripMate Case Study | Thet Zaw Latt",
  description: "An AI-assisted, editable travel-planning product by Thet Zaw Latt.",
};

export default function TripMateCaseStudyPage() {
  return (
    <ProductCaseStudy
      eyebrow="Featured Product Build"
      title="TripMate"
      subtitle="AI-assisted planning that leaves the traveller in control."
      overview="TripMate creates a structured first draft from a traveller's destination, dates, pace, and interests. The generated plan remains editable, so AI accelerates the starting point without taking ownership away from the user."
      desktopImage="/projects/tripmate/desktop.png"
      mobileImage="/projects/tripmate/mobile.png"
      additionalDesktopImage="/projects/tripmate/plan-desktop.png"
      additionalMobileImage="/projects/tripmate/plan-mobile.png"
      stack={["Next.js", "TypeScript", "AI", "Supabase", "Open-Meteo", "PDF"]}
      capabilities={[
        "AI-generated day-by-day itinerary with real places and local food suggestions",
        "Editable days, places, costs, checklist items, and trip details",
        "Budget estimate and preparation checklist stored with the trip",
        "Maps and live weather context for the destination",
        "Public share-link view with a downloadable branded PDF",
      ]}
      note="The responsive web product is the current implementation. A Flutter mobile client is planned as a future companion, reusing the same product model and backend."
    />
  );
}
