import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import saturn from '../assets/planet images/overview/saturn.svg'
import saturnStructure from '../assets/planet images/internal structure/saturnStructure.svg';
import saturnGeology from '../assets/planet images/surface geology/saturnGeology.svg';
import PlanetDiv from '../components/planetDiv'
import WikiLink from '../components/WikiLink'
import PlanetInformation from '../components/PlanetInformation'
import SelectMenuSecond from '../components/selectMenuSecond'
import SelectMenu from '../components/selectMenu'

const Saturn = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [view, setView] = useState('overview');

  const planetData = {
    overview: {
      image: saturn,
      text: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System.",
      source: "https://en.wikipedia.org/wiki/Saturn"
    },
    internal: {
      image: saturnStructure,
      text: "Saturn likely has a core of rock and ice, surrounded by metallic hydrogen and layers of liquid and gaseous hydrogen.",
      source: "https://en.wikipedia.org/wiki/Saturn#Internal_structure"
    },
    geology: {
      image: saturnGeology,
      text: "Saturn, being a gas giant, lacks a solid surface; its features include banded clouds and long-lived storms.",
      source: "https://en.wikipedia.org/wiki/Atmosphere_of_Saturn"
    }
  };

  const current = planetData[view];
  const themeColor = '#CD5120';

  return (
    <div className='px-6 pb-12 xl:max-w-[1110px] xl:mx-auto'>
      {isMobile && (
        <SelectMenu active={view} onSelect={setView} activeColor={themeColor} />
      )}

        <div className='xl:flex xl:items-center xl:mt-[126px] xl:mb-[87px]'>
          <PlanetDiv planet={current.image} geology={view === 'geology' ? saturnGeology : null} />

        <div className='md:flex md:justify-between items-center md:gap-17 mb-7 xl:flex-col xl:max-w-[350px]'>
          
          <div>

          <h2 className='h2 text-white text-center mb-4 md:text-left capitalize'>saturn</h2>

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

        <PlanetInformation name='ROTATION TIME' data='10.8 hours' />

        <PlanetInformation name='REVOLUTION TIME' data='29.46 years' />

        <PlanetInformation name='radius' data='58,232 km' />

        <PlanetInformation name='AVERAGE TEMP.' data='-138°c' />

        </div>
    </div>
  )
}

export default Saturn