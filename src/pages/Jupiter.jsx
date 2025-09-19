import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import jupiter from '../assets/planet images/overview/jupiter.svg'
import jupiterStructure from '../assets/planet images/internal structure/jupiterStructure.svg';
import jupiterGeology from '../assets/planet images/surface geology/jupiterGeology.svg';
import PlanetDiv from '../components/planetDiv'
import WikiLink from '../components/WikiLink'
import PlanetInformation from '../components/PlanetInformation'
import SelectMenuSecond from '../components/selectMenuSecond'
import SelectMenu from '../components/selectMenu'

const Jupiter = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [view, setView] = useState('overview');

  const planetData = {
    overview: {
      image: jupiter,
      text: "Jupiter is the fifth planet from the Sun and the largest in the Solar System.",
      source: "https://en.wikipedia.org/wiki/Jupiter"
    },
    internal: {
      image: jupiterStructure,
      text: "Jupiter likely has a dense core surrounded by a layer of liquid metallic hydrogen and a massive gaseous envelope.",
      source: "https://en.wikipedia.org/wiki/Jupiter#Internal_structure"
    },
    geology: {
      image: jupiterGeology,
      text: "Jupiter has no solid surface; its visible 'surface' is the top of its clouds featuring storms like the Great Red Spot.",
      source: "https://en.wikipedia.org/wiki/Atmosphere_of_Jupiter"
    }
  };

  const current = planetData[view];
  const themeColor = '#D83A34';

  return (
    <div className='px-6 pb-12 xl:max-w-[1110px] xl:mx-auto'>
      {isMobile && (
        <SelectMenu active={view} onSelect={setView} activeColor={themeColor} />
      )}

        <div className='xl:flex xl:items-center xl:mt-[126px] xl:mb-[87px]'>
          <PlanetDiv planet={current.image} geology={view === 'geology' ? jupiterGeology : null} />

        <div className='md:flex md:justify-between items-center md:gap-17 mb-7 xl:flex-col xl:max-w-[350px]'>
          
          <div>

          <h2 className='h2 text-white text-center mb-4 md:text-left capitalize'>jupiter</h2>

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

        <PlanetInformation name='ROTATION TIME' data='9.93 hours' />

        <PlanetInformation name='REVOLUTION TIME' data='11.86 years' />

        <PlanetInformation name='radius' data='69,911 km' />

        <PlanetInformation name='AVERAGE TEMP.' data='-108°c' />

        </div>
    </div>
  )
}

export default Jupiter