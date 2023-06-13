import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/navBar'
import AboutMe from '@/components/AboutMe'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NavBar />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}
