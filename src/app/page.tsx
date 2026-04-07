import HeroSection from "@/components/sections/HeroSection";
import ResearchSection from "@/components/sections/ResearchSection";
import EducationSection from "@/components/sections/EducationSection";
import EmploymentSection from "@/components/sections/EmploymentSection";
import PublicationsSection from "@/components/sections/PublicationsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ResearchSection />
      <EducationSection />
      <EmploymentSection />
      <PublicationsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
