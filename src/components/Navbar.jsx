import React, { useState } from 'react'
import HamburgerMenu from "./HamburgerMenu"
import PlanetsSelection from './PlanetsSelection'
import { useMediaQuery } from 'react-responsive';
import HamburgerMenuSidebar from './HamburgerMenuSidebar'


const Navbar = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='flex justify-between items-center py-4 px-6 border-b border-white/20 md:flex-col md:gap-10 xl:flex-row'>

      <h1 className='antonio font-medium text-3xl tracking-[-1.05px] text-white'>THE PLANETS</h1>

      {isMobile ? <HamburgerMenu onClick={() => isSidebarOpen ? setIsSidebarOpen(false) : setIsSidebarOpen(true)} /> : <PlanetsSelection /> }
      {isSidebarOpen ? <HamburgerMenuSidebar setIsSidebarOpen={setIsSidebarOpen} /> : null}

    </div>
  )
}

export default Navbar