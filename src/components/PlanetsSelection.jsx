import React from 'react'
import { Link } from 'react-router';

const PlanetsSelection = () => {

    const linkStyle = "spartan text-[11px] leading-[25px] tracking-[1px] text-white font-bold";

    const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];


  return (
    <div className='flex justify-between w-full xl:w-fit xl:gap-[33px]'>
        {planets.map((planet) => (
            <Link key={planet} className={linkStyle} to={planet === "mercury" ? "/" : `/${planet}`}>{planet}</Link>
        ))}
    </div>
  )
}

export default PlanetsSelection