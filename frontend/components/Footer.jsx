import { faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
    return (
        <div className='bg-slate-900 py-4 text-white flex justify-center text-3xl gap-6'>
            <a href="https://github.com/Phickayor" className=' hover:text-purple-200   hover:scale-110 duration-300 '>
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/olufikayomi-jetawo/" className=' hover:text-purple-200   hover:scale-110 duration-300 '>
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://instagram.com/web___craft" className=' hover:text-purple-200   hover:scale-110 duration-300 '>
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com/determined_dev" className=' hover:text-purple-200   hover:scale-110 duration-300 '>
                <FontAwesomeIcon icon={faTwitter} />
            </a>
        </div>
    )
}

export default Footer



















