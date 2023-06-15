import { faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
    return (
        <div className='bg-slate-500 py-2 text-white flex justify-center text-3xl gap-6'>
            <a href="" className=' hover:text-purple-200   hover:scale-110 duration-300 '>
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="" className=' hover:text-purple-200   hover:scale-110 duration-300 '>
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="" className=' hover:text-purple-200   hover:scale-110 duration-300 '>
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="" className=' hover:text-purple-200   hover:scale-110 duration-300 '>
                <FontAwesomeIcon icon={faTwitter} />
            </a>
        </div>
    )
}

export default Footer