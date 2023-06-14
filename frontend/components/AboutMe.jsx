import { Oswald } from 'next/font/google'
import React from 'react'
const oswald = Oswald({ weight: '700', subsets: ['latin'] })

function AboutMe() {
    return (
        <div>
            <h1 className={`opacity-50 text-6xl  ${oswald.className}`}>ABOUT ME</h1>
        </div>
    )
}

export default AboutMe