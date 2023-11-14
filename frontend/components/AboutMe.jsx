import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'

function AboutMe() {
    useEffect(() => {
        Aos.init()
    })
    return (
      <div id="about">
        <h1
          data-aos="fade-right"
          data-aos-duration="1500"
          className="text-5xl font-semibold"
        >
         ABOUT ME
        </h1>
        <div className="flex flex-col md:flex-row justify-around gap-10 py-10">
          <img
            data-aos="fade-up"
            data-aos-duration="1500"
            src="/port.jpg"
            className="rounded-2xl self-center w-fit object-contain"
          />
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="self-center my-5 md:my-0 space-y-6"
          >
            <h1 className="font-semibold text-2xl border-b-2 inline-block border-purple-700">
              About
            </h1>
            <p className="md:text-md lg:text-lg font-light">
              Hello there! 👋 I'm Olufikayomi Jetawo, a skilled developer
              experienced in frontend and backend technologies. ✨ I love
              crafting captivating user interfaces using React/Next.js, and
              building robust backend solutions with Node.js. When I'm not
              coding 💻, you'll likely find me indulging in the world of movies
              🎬. Feel free to reach out for exciting projects or even a movie
              recommendation—I've got you covered! 🌟
            </p>
          </div>
        </div>
      </div>
    );
}

export default AboutMe