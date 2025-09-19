import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import mars from '../assets/planet images/overview/mars.svg'
import marsStructure from '../assets/planet images/internal structure/marsStructure.svg';
import marsGeology from '../assets/planet images/surface geology/marsGeology.svg';
import PlanetDiv from '../components/planetDiv'
import WikiLink from '../components/WikiLink'
import PlanetInformation from '../components/PlanetInformation'
import SelectMenuSecond from '../components/selectMenuSecond'
import SelectMenu from '../components/selectMenu'

const Mars = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [view, setView] = useState('overview');

  const planetData = {
    overview: {
      image: mars,
      text: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury.",
      source: "https://en.wikipedia.org/wiki/Mars"
    },
    internal: {
      image: marsStructure,
      text: "Mars has a core of iron, nickel and sulfur, a silicate mantle, and a crust mostly of basalt; it lacks active plate tectonics.",
      source: "https://en.wikipedia.org/wiki/Mars#Internal_structure"
    },
    geology: {
      image: marsGeology,
      text: "Mars' surface shows evidence of ancient floods and current wind erosion; volcanic features are prominent, including Olympus Mons.",
      source: "https://en.wikipedia.org/wiki/Geology_of_Mars"
    }
  };

  const current = planetData[view];
  const themeColor = '#D14C32';

  return (
    <div className='px-6 pb-12 xl:max-w-[1110px] xl:mx-auto'>
      {isMobile && (
        <SelectMenu active={view} onSelect={setView} activeColor={themeColor} />
      )}

        <div className='xl:flex xl:items-center xl:mt-[126px] xl:mb-[87px]'>
          <PlanetDiv planet={current.image} geology={view === 'geology' ? marsGeology : null} />

        <div className='md:flex md:justify-between items-center md:gap-17 mb-7 xl:flex-col xl:max-w-[350px]'>
          
          <div>

          <h2 className='h2 text-white text-center mb-4 md:text-left capitalize'>mars</h2>

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

        <PlanetInformation name='ROTATION TIME' data='1.03 days' />

        <PlanetInformation name='REVOLUTION TIME' data='1.88 years' />

        <PlanetInformation name='radius' data='3,389.5 km' />

        <PlanetInformation name='AVERAGE TEMP.' data='−28°c' />

        </div>
    </div>
  )
}

export default Mars