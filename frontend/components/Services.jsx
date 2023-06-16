import Aos from 'aos';
import 'aos/dist/aos.css'
import { Oswald } from 'next/font/google'
import React, { useEffect, useState } from 'react'
const oswald = Oswald({ weight: "700", subsets: ['latin'] })
function Services() {
    const [devClass, setDevClass] = useState("border-b-4 border-purple-500")
    const [mainClass, setMainClass] = useState("");
    const [appClass, setAppClass] = useState("")
    const [content, setContent] = useState("Web Development")
    const handleService = (e => {
        var service = e.target.value
        service == "" ? service = e.target.innerHTML : service = e.target.value
        setContent(service)
        if (service == "Web Development") {
            setDevClass("border-b-4 border-purple-500")
            setMainClass("")
            setAppClass("")
        }
        else if (service == "Web Applications") {
            setDevClass("")
            setAppClass("border-b-4 border-purple-500")
            setMainClass("")
        }
        else {
            setDevClass("")
            setAppClass("")
            setMainClass("border-b-4 border-purple-500")
        }


    })
    useEffect(() => {
        Aos.init()
    })
    return (
        <div id="services">
            <h1 data-aos="fade-left" data-aos-duration="1500"
                className={`opacity-50 text-6xl text-slate-500 ${oswald.className}`}>WHAT I DO</h1>
            <div className='my-10'>
                <ul className='hidden lg:flex text-xl rounded-xl px-10 gap-4 font-semibold py-4 w-fit text-black bg-slate-300'>
                    <li onClick={handleService} className={`cursor-pointer px-4 py-3 rounded-xl ${devClass}`}>Web Development</li>
                    <li onClick={handleService} className={`cursor-pointer px-4 py-3 rounded-xl ${mainClass}`}>Web Maintenance</li>
                    <li onClick={handleService} className={`cursor-pointer px-4 py-3 rounded-xl ${appClass}`}>Web Applications</li>
                </ul>
                {/* MOBILE SERVICE HEADER  */}
                <select onChange={handleService} className='flex lg:hidden outline-none text-purple-700 text-lg rounded-xl px-5  gap-4 font-semibold py-4 cursor-pointer bg-gray-300'>
                    <option className='text-black font-semibold hover:bg-purple-700'>Web Development</option>
                    <option className='text-black font-semibold hover:bg-purple-700'>Web Maintenance</option>
                    <option className='text-black font-semibold hover:bg-purple-700'>Web Applications</option>
                </select>
                <div className='py-5 mx-2 lg:mx-4 text-lg font-semibold '>
                    {content == "Web Development" ?
                        (
                            <p data-aos="fade-down" data-aos-duration="1500">
                                I specialize in creating professional and engaging websites that meet your unique requirements. From designing the layout to implementing interactive features, I ensure a seamless user experience that captivates your audience. With expertise in coding languages and modern web development frameworks, I bring your vision to life.
                            </p>
                        ) :
                        content == "Web Maintenance" ?
                            (
                                <p data-aos="fade-down" data-aos-duration="1500">
                                    Keeping your website up-to-date and running smoothly is essential for your online presence. I provide comprehensive web maintenance services to ensure your website remains secure, functional, and optimized for performance. From regular updates and backups to troubleshooting issues and fixing bugs, I take care of the technical aspects so you can focus on your core business.
                                </p>
                            ) :
                            (
                                <p data-aos="fade-down" data-aos-duration="1500" className="ease-in-out duration-300">
                                    Elevate your online presence with custom web applications tailored to your specific needs. I develop robust and scalable web applications that streamline your business processes, enhance user engagement, and drive growth. Using cutting-edge technologies and following best practices, I deliver intuitive and feature-rich web applications that empower your organization.
                                </p>
                            )
                    }
                </div>
            </div>
        </div >

    )
}

export default Services