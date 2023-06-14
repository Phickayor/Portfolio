import Aos from 'aos'
import 'aos/dist/aos.css'
import { Oswald } from 'next/font/google'
import React, { useEffect } from 'react'
const oswald = Oswald({ weight: '700', subsets: ['latin'] })

function AboutMe() {
    useEffect(() => {
        Aos.init()
    })
    return (
        <div id="about">
            <h1 data-aos="fade-left" data-aos-duration="1500"
                className={`opacity-50 text-slate-500 text-6xl  ${oswald.className}`}>ABOUT ME</h1>
            <div className='flex flex-col md:flex-row justify-around gap-10 py-10'>
                <img data-aos="fade-up" data-aos-duration="1500" src='/port.jpg' className='rounded-2xl self-center w-fit object-contain' />
                <div data-aos="fade-up" data-aos-duration="1500"
                    className='self-center my-5 md:my-0 space-y-6'>
                    <h1 className='font-semibold text-2xl border-b-2 inline-block border-purple-700'>About</h1>
                    <p className='md:text-md lg:text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut harum corporis fuga quos consequuntur molestiae nesciunt placeat sit, illo voluptate omnis, eaque quo illum in possimus voluptates odit reprehenderit iste!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe distinctio voluptatibus ad quasi earum fugit error nobis ea tenetur, assumenda aliquam officiis, repudiandae perspiciatis incidunt illum perferendis. Commodi, omnis deleniti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, sed fugit, quo adipisci vitae quis at autem debitis quod eum eos eveniet ea dolorum reiciendis? Illo accusantium saepe odio impedit.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe