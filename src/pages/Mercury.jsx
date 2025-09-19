import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

// Images
import mercury from '../assets/planet images/overview/mercury.svg';
import mercuryStructure from '../assets/planet images/internal structure/mercuryStructure.svg';
import mercuryGeology from '../assets/planet images/surface geology/mercuryGeology.svg';

// Components
import PlanetDiv from '../components/planetDiv';
import WikiLink from '../components/WikiLink';
import PlanetInformation from '../components/PlanetInformation';
import SelectMenuSecond from '../components/selectMenuSecond';
import SelectMenu from '../components/selectMenu';

const Mercury = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });


  const [view, setView] = useState('overview');

  // Data based on selected view
  const planetData = {
    overview: {
      image: mercury,
      text: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
      source: "https://en.wikipedia.org/wiki/Mercury_(planet)"
    },
    internal: {
      image: mercuryStructure,
      text: "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core.",
      source: "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure"
    },
    geology: {
      image: mercury,
      geologyOverlay: mercuryGeology,
      text: "Mercury's surface is similar in appearance to the Moon, showing extensive mare-like plains and heavy cratering, indicating it has been geologically inactive for billions of years.",
      source: "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology"
    }
  };

  const current = planetData[view];
  const themeColor = '#419EBB';

  return (
    <div className="px-6 pb-12 xl:max-w-[1110px] xl:mx-auto">
      {/* Mobile top menu */}
      {isMobile && (
        <SelectMenu active={view} onSelect={setView} activeColor={themeColor} />
      )}
      <div className="xl:flex xl:items-center xl:mt-[126px] xl:mb-[87px]">
        <PlanetDiv
          planet={current.image}
          geology={view === 'geology' ? current.geologyOverlay : null}
        />

        <div className="md:flex md:justify-between items-center md:gap-17 mb-7 xl:flex-col xl:max-w-[350px]">
          <div>
            <h2 className="h2 text-white text-center mb-4 md:text-left capitalize">mercury</h2>

            <p className="h4 text-white text-center mb-8 md:text-left">
              {current.text}
            </p>

            <WikiLink url={current.source} />
          </div>

          {!isMobile && (
            <div className="flex flex-col gap-4 mt-6">
              <SelectMenuSecond
                number="01"
                type="overview"
                label="Overview"
                isActive={view === 'overview'}
                onClick={() => setView('overview')}
                activeColor={themeColor}
              />
              <SelectMenuSecond
                number="02"
                type="internal"
                label="Internal Structure"
                isActive={view === 'internal'}
                onClick={() => setView('internal')}
                activeColor={themeColor}
              />
              <SelectMenuSecond
                number="03"
                type="geology"
                label="Surface Geology"
                isActive={view === 'geology'}
                onClick={() => setView('geology')}
                activeColor={themeColor}
              />
            </div>
          )}
        </div>
      </div>

      {/* Planet stats */}
      <div className="flex flex-col gap-2 md:flex-row md:gap-0 md:justify-between">
        <PlanetInformation name="Rotation Time" data="58.6 days" />
        <PlanetInformation name="Revolution Time" data="87.97 days" />
        <PlanetInformation name="Radius" data="2,439.7 km" />
        <PlanetInformation name="Average Temp." data="430°c" />
      </div>
    </div>
  );
};

export default Mercury;
