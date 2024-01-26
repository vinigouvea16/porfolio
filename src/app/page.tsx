import { AboutMe } from '@/components/Aboutme/aboutme'
import Contact from '@/components/Contact/contact'
import { Header } from '@/components/Header/header'
import { Hero } from '@/components/Hero/hero'
import Parallax from '@/components/Parallax/parallax'
import Projects from '@/components/Projects/projects'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Parallax />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  )
}
