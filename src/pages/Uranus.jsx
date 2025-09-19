import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import uranus from '../assets/planet images/overview/uranus.svg'
import uranusStructure from '../assets/planet images/internal structure/uranusStructure.svg';
import uranusGeology from '../assets/planet images/surface geology/uranusGeology.svg';
import PlanetDiv from '../components/planetDiv'
import WikiLink from '../components/WikiLink'
import PlanetInformation from '../components/PlanetInformation'
import SelectMenuSecond from '../components/selectMenuSecond'
import SelectMenu from '../components/selectMenu'

const Uranus = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [view, setView] = useState('overview');

  const planetData = {
    overview: {
      image: uranus,
      text: "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
      source: "https://en.wikipedia.org/wiki/Uranus"
    },
    internal: {
      image: uranusStructure,
      text: "Uranus likely has a small rocky core surrounded by an icy mantle of water, ammonia and methane, and an outer gaseous envelope.",
      source: "https://en.wikipedia.org/wiki/Uranus#Internal_structure"
    },
    geology: {
      image: uranusGeology,
      text: "Uranus, an ice giant, lacks a well-defined solid surface; its atmosphere features methane clouds giving it a blue-green color.",
      source: "https://en.wikipedia.org/wiki/Atmosphere_of_Uranus"
    }
  };

  const current = planetData[view];
  const themeColor = '#1EC1A2';

  return (
    <div className='px-6 pb-12 xl:max-w-[1110px] xl:mx-auto'>
      {isMobile && (
        <SelectMenu active={view} onSelect={setView} activeColor={themeColor} />
      )}

        <div className='xl:flex xl:items-center xl:mt-[126px] xl:mb-[87px]'>
          <PlanetDiv planet={current.image} geology={view === 'geology' ? uranusGeology : null} />

        <div className='md:flex md:justify-between items-center md:gap-17 mb-7 xl:flex-col xl:max-w-[350px]'>
          
          <div>

          <h2 className='h2 text-white text-center mb-4 md:text-left capitalize'>uranus</h2>

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

        <PlanetInformation name='ROTATION TIME' data='17.2 hours' />

        <PlanetInformation name='REVOLUTION TIME' data='84 years' />

        <PlanetInformation name='radius' data='25,362 km' />

        <PlanetInformation name='AVERAGE TEMP.' data='-195°c' />

        </div>
    </div>
  )
}

export default Uranus