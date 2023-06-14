import React, { useState } from 'react'
import Image from 'next/image'
import { Inter, Poppins } from 'next/font/google'
import AboutMe from '@/components/AboutMe'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight: '400', subsets: ['latin'] })
export default function Home() {
  const [opacityValue, setOpacity] = useState("opacity-100")
  function setOpacityValue(value) {
    setOpacity(value)
  }
  return (
    <div className={`${poppins.className}`}>
      <NavBar opacityHandler={setOpacityValue} />

      <div className={`mx-auto lg:w-10/12 w-11/12 ${opacityValue}`}>
        <Hero />
        <AboutMe />
        {/*<Projects />
      <Skills />
      <Contact /> */}
      </div>

    </div>
  )
}
