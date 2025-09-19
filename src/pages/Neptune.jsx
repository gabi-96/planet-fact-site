import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import neptune from '../assets/planet images/overview/neptune.svg'
import neptuneStructure from '../assets/planet images/internal structure/neptuneStructure.svg';
import neptuneGeology from '../assets/planet images/surface geology/neptuneGeology.svg';
import PlanetDiv from '../components/planetDiv'
import WikiLink from '../components/WikiLink'
import PlanetInformation from '../components/PlanetInformation'
import SelectMenuSecond from '../components/selectMenuSecond'
import SelectMenu from '../components/selectMenu'

const Neptune = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [view, setView] = useState('overview');

  const planetData = {
    overview: {
      image: neptune,
      text: "Neptune is the eighth and farthest-known Solar planet from the Sun.",
      source: "https://en.wikipedia.org/wiki/Neptune"
    },
    internal: {
      image: neptuneStructure,
      text: "Neptune likely has a small rocky core surrounded by a mantle of water, ammonia, and methane ices, with an atmosphere of hydrogen, helium, and methane.",
      source: "https://en.wikipedia.org/wiki/Neptune#Internal_structure"
    },
    geology: {
      image: neptuneGeology,
      text: "As an ice giant, Neptune lacks a solid surface; its atmosphere shows dynamic storms and high-speed winds.",
      source: "https://en.wikipedia.org/wiki/Neptune#Atmosphere"
    }
  };

  const current = planetData[view];
  const themeColor = '#2D68F0';

  return (
    <div className='px-6 pb-12 xl:max-w-[1110px] xl:mx-auto'>
      {isMobile && (
        <SelectMenu active={view} onSelect={setView} activeColor={themeColor} />
      )}

        <div className='xl:flex xl:items-center xl:mt-[126px] xl:mb-[87px]'>
          <PlanetDiv planet={current.image} geology={view === 'geology' ? neptuneGeology : null} />

        <div className='md:flex md:justify-between items-center md:gap-17 mb-7 xl:flex-col xl:max-w-[350px]'>
          
          <div>

          <h2 className='h2 text-white text-center mb-4 md:text-left capitalize'>neptune</h2>

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

        <PlanetInformation name='ROTATION TIME' data='16.08 hours' />

        <PlanetInformation name='REVOLUTION TIME' data='164.79 years' />

        <PlanetInformation name='radius' data='24,622 km' />

        <PlanetInformation name='AVERAGE TEMP.' data='-201°c' />

        </div>
    </div>
  )
}

export default Neptune