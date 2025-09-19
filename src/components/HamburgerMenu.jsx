import React from 'react'
import hamburgerMenu from '../assets/hamburgerMenu.png'

const HamburgerMenu = ({ onClick }) => {
  return <img onClick={onClick} className='w-6 h-4' src={hamburgerMenu} />
}

export default HamburgerMenu