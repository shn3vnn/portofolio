import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portofolio-section"
import { SkillsSection } from "@/components/skills-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <main className="lg:ml-20">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <Footer />
      </main>
    </div>
  )
}
