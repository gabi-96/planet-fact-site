import React from 'react'
import { Link } from 'react-router'

const ButtonSidebar = ({ image, name, arrow, setIsSidebarOpen }) => {

    const btnClass = `flex items-center gap-6 w-full ${name !== "Neptune" ? 'border-b' : 'border-none'} border-white/20 py-5 text-white spartan font-bold text-[15px] tracking-[1.36px] leading-[25px]`;

  return (

    <Link to={name === "Mercury" ? "/" : `/${name.toLowerCase()}`} className={btnClass} onClick={() => setIsSidebarOpen(false)}>

        <img className='w-4 h-4' src={image}/>
        {name}
        <img className='ml-auto' src={arrow} />

    </Link>
  )
}

export default ButtonSidebar