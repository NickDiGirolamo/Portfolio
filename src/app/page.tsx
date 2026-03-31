import { BadgesStrip } from "@/components/sections/badges-strip";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ResultsSection } from "@/components/sections/results-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteNav } from "@/components/sections/site-nav";
import { StrengthsSection } from "@/components/sections/strengths-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WinsSection } from "@/components/sections/wins-section";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="relative overflow-hidden">
        <HeroSection />
        <BadgesStrip />
        <ResultsSection />
        <ExperienceSection />
        <WinsSection />
        <StrengthsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
