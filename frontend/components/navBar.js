import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function NavBar(props) {
  const hideNav = (() => {
    setmenuBtn(bars)
    setNav("h-0")
    props.opacityHandler("opacity-100")
  })
  const showNav = (() => {
    setmenuBtn(close)
    setNav("h-fit")
    props.opacityHandler("opacity-60")

  })
  const [nav, setNav] = useState("h-0")
  const bars = <FontAwesomeIcon icon={faBars} className='cursor-pointer text-extralight' onClick={showNav} />
  const close = <FontAwesomeIcon icon={faClose} className='cursor-pointer text-extralight' onClick={hideNav} />
  const [menuBtn, setmenuBtn] = useState(bars)
  return (
    <div className='my-4'>
      {/* For Mobile */}
      <div className="flex lg:hidden justify-between px-4 lg:px-5">
        <div className='inline-flex gap-x-3 font-semibold text-xl items-center '>
          {menuBtn}Olufikayomi
        </div>
        <button className='font-semibold self-center bg-[#121212] hover:scale-105 px-5 py-2 text-sm rounded-lg text-white'>Contact Me</button>
      </div>
      <nav className={`${nav} lg:hidden border-b-2 border-slate-700 bg-white absolute z-20 my-2 w-full font-medium overflow-hidden  duration-300 `} >
        <ul className='my-3 space-y-2 text-xs px-5 text-slate-700 '>
          <li className='cursor-pointer hover:font-semibold hover:text-black duration-200'>About Me</li>
          <li className='cursor-pointer hover:font-semibold hover:text-black duration-200'>Skills</li>
          <li className='cursor-pointer hover:font-semibold hover:text-black duration-200'>Works</li>
          <li className='cursor-pointer duration-200 font-semibold border-t pt-2 hover:font-semibold hover:text-black'>Contact Me</li>
        </ul>
      </nav>

      {/* For Desktop */}
      <div className="lg:flex hidden justify-between px-4 lg:px-5">
        <div className='inline-flex gap-x-3 font-semibold text-xl items-center '>
          Olufikayomi Jetawo
        </div>
        <ul className='flex space-x-5 self-center text-md font-semibold'>
          <li>About</li>
          <li>Skills</li>
          <li>Works</li>
          <li>Blogs</li>
        </ul>
        <button className='font-semibold self-center bg-[#121212] hover:scale-105 px-5 py-2 text-sm rounded-lg text-white'>Contact Me</button>
      </div>
    </div>
  )
}

export default NavBar