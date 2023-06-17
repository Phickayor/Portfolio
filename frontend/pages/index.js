import React, { useState } from 'react'
import Image from 'next/image'
import { Inter, Poppins } from 'next/font/google'
import AboutMe from '@/components/AboutMe'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Footer from '@/components/Footer'
import Head from 'next/head'
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

const poppins = Poppins({ weight: '400', subsets: ['latin'] })
export default function Home() {
  const [opacityValue, setOpacity] = useState("opacity-100")
  const [mode, setMode] = useState("bg-white")
  function setOpacityValue(value) {
    setOpacity(value)
  }
  function setModeValue(value) {
    setMode(value)
  }
  return (
    <div className={`${poppins.className} ${mode} `}>
      <Head>
        <title>Olufikayomi's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar opacityHandler={setOpacityValue} modeHandler={setModeValue} />
      <div className={`mx-auto lg:w-10/12 w-11/12 ${opacityValue}`}>
        <Hero />
        <AboutMe />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
