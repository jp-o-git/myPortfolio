import { Footer } from '@/components/Footer'
import { About } from '@/components/sections/about'
import AutomationsPage from '@/components/sections/automation'
import { Contact } from '@/components/sections/contact'
import { Experience } from '@/components/sections/experience'
import { Home } from '@/components/sections/home'
import { Projects } from '@/components/sections/projects'
import { Skills } from '@/components/sections/skills'

export default function HomePage() {
  return (
    <div className="min-h-full">
      <Home />
      <About />
      <Experience />
      <Skills />
      <AutomationsPage />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
