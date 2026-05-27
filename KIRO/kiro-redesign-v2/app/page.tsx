import { Hero } from "@/components/Hero";
import { BookingStrip } from "@/components/BookingStrip";
import { ExperienceCards } from "@/components/ExperienceCards";
import { StatsSection } from "@/components/StatsSection";
import { PricingSection } from "@/components/PricingSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { GroupsSection } from "@/components/GroupsSection";
import { SchoolSection } from "@/components/SchoolSection";
import { ContactSection } from "@/components/ContactSection";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <BookingStrip />
      <ExperienceCards />
      <StatsSection />
      <PricingSection />
      <ReviewsSection />
      <GroupsSection />
      <SchoolSection />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
