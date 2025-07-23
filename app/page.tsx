import FloatingContactButtons from "@/components/floating-contact-buttons"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import FAQSection from "@/components/faq-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <FloatingContactButtons phone="0719659160" whatsapp="0719659160" />

      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </main>
  )
}
