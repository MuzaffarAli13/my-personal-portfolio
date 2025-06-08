import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import ScrollProgressIndicator from "@/components/scroll-progress-indicator"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgressIndicator />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  )
}
