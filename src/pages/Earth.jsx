import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import earth from '../assets/planet images/overview/earth.svg'
import earthStructure from '../assets/planet images/internal structure/earthStructure.svg'
import earthGeology from '../assets/planet images/surface geology/earthGeology.svg'

import PlanetDiv from '../components/planetDiv'
import WikiLink from '../components/WikiLink'
import PlanetInformation from '../components/PlanetInformation'
import SelectMenuSecond from '../components/selectMenuSecond'
import SelectMenu from '../components/selectMenu'


const Earth = () => {

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [view, setView] = useState('overview');

  const planetData = {
    overview: {
      image: earth,
      text: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with the remaining 70.8% covered with water.",
      source: "https://en.wikipedia.org/wiki/Earth"
    },
    internal: {
      image: earthStructure,
      text: "Earth has a solid inner core, a liquid outer core, a viscous mantle, and a solid crust divided into tectonic plates.",
      source: "https://en.wikipedia.org/wiki/Structure_of_the_Earth"
    },
    geology: {
      image: earthGeology,
      text: "Earth's surface is shaped by plate tectonics, erosion, volcanism, and impacts; continents and ocean basins evolve over geologic time.",
      source: "https://en.wikipedia.org/wiki/Geology_of_Earth"
    }
  };

  const themeColor = '#6D2ED5';

  const current = planetData[view];

  return (
    <div className='px-6 pb-12 xl:max-w-[1110px] xl:mx-auto'>
        {isMobile && (
          <SelectMenu active={view} onSelect={setView} activeColor={themeColor} />
        )}

        <div className='xl:flex xl:items-center xl:mt-[126px] xl:mb-[87px]'>
          <PlanetDiv planet={current.image} geology={view === 'geology' ? earthGeology : null} />

          <div className='md:flex md:justify-between items-center md:gap-17 mb-7 xl:flex-col xl:max-w-[350px]'>

            <div>
              <h2 className='h2 text-white text-center mb-4 md:text-left capitalize'>earth</h2>

              <p className='h4 text-white text-center mb-8 md:text-left'>{current.text}</p>
          
              <WikiLink url={current.source} />
            </div>

            {!isMobile && (
              <div className='flex flex-col gap-4 mt-6'>
                <SelectMenuSecond number="01" label="Overview" isActive={view === 'overview'} onClick={() => setView('overview')} activeColor={themeColor} />
                <SelectMenuSecond number="02" label="Internal Structure" isActive={view === 'internal'} onClick={() => setView('internal')} activeColor={themeColor} />
                <SelectMenuSecond number="03" label="Surface Geology" isActive={view === 'geology'} onClick={() => setView('geology')} activeColor={themeColor} />
              </div>
            )}

          </div>
        </div> 

        <div className='flex flex-col gap-2 md:flex-row md:gap-0 md:justify-between'>
          <PlanetInformation name='ROTATION TIME' data='0.99 days' />
          <PlanetInformation name='REVOLUTION TIME' data='365.26 days' />
          <PlanetInformation name='radius' data='6,371 km' />
          <PlanetInformation name='AVERAGE TEMP.' data='16°c' />
        </div>
    </div>
  )
}

export default Earth