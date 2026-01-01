import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { FounderMessageSection } from "@/components/founder-message-section"
import { FounderProfileSection } from "@/components/founder-profile-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PhilosophySection />
        <PortfolioSection />
        <FounderMessageSection />
        <FounderProfileSection />
        <ContactSection />
        <Footer />
        </main>
    )
}