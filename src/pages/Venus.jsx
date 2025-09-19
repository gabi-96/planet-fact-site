import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import venus from '../assets/planet images/overview/venus.svg';
import venusStructure from '../assets/planet images/internal structure/venusStructure.svg';
import venusGeology from '../assets/planet images/surface geology/venusGeology.svg';

import PlanetDiv from '../components/planetDiv';
import WikiLink from '../components/WikiLink';
import PlanetInformation from '../components/PlanetInformation';
import SelectMenuSecond from '../components/selectMenuSecond';
import SelectMenu from '../components/selectMenu';

const Venus = () => {
  const [view, setView] = useState('overview');
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const planetData = {
    overview: {
      image: venus,  // overview image here
      text: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
      source: "https://en.wikipedia.org/wiki/Venus"
    },
    internal: {
      image: venusStructure,
      text: "Venus has a central iron core and a rocky mantle, similar to the composition of Earth. However, its crust is thinner and lacks tectonic plates, contributing to its volcanic surface.",
      source: "https://en.wikipedia.org/wiki/Venus#Internal_structure"
    },
    geology: {
      image: venusGeology,  // **Important: this must be the geology image**
      text: "Much of Venus’s surface appears to have been shaped by volcanic activity. It has more volcanoes than any other planet in the Solar System — over 1,600 major volcanoes, though many are inactive.",
      source: "https://en.wikipedia.org/wiki/Venus#Surface_geology"
    }
  };

  const current = planetData[view];
  const themeColor = '#EDA249';

  return (
    <div className="px-6 pb-12 xl:max-w-[1110px] xl:mx-auto">
      {/* Mobile top menu */}
      {isMobile && (
        <SelectMenu active={view} onSelect={setView} activeColor={themeColor} />
      )}

      {/* Planet Image and Info */}
      <div className="xl:flex xl:items-center xl:mt-[126px] xl:mb-[87px]">
        <PlanetDiv planet={current.image} />

        <div className="md:flex md:justify-between items-center md:gap-17 mb-7 xl:flex-col xl:max-w-[350px]">
          <div>
            <h2 className="h2 text-white text-center mb-4 md:text-left capitalize">Venus</h2>

            <p className="h4 text-white text-center mb-8 md:text-left">
              {current.text}
            </p>

            <WikiLink url={current.source} />
          </div>

          {!isMobile && (
            <div className="flex flex-col gap-4 mt-6">
              <SelectMenuSecond
                number="01"
                label="Overview"
                isActive={view === 'overview'}
                onClick={() => setView('overview')}
                activeColor={themeColor}
              />
              <SelectMenuSecond
                number="02"
                label="Internal Structure"
                isActive={view === 'internal'}
                onClick={() => setView('internal')}
                activeColor={themeColor}
              />
              <SelectMenuSecond
                number="03"
                label="Surface Geology"
                isActive={view === 'geology'}
                onClick={() => setView('geology')}
                activeColor={themeColor}
              />
            </div>
          )}
        </div>
      </div>

      {/* Planet Stats */}
      <div className="flex flex-col gap-2 md:flex-row md:gap-0 md:justify-between">
        <PlanetInformation name="Rotation Time" data="243 days" />
        <PlanetInformation name="Revolution Time" data="224.7 days" />
        <PlanetInformation name="Radius" data="6,051.8 km" />
        <PlanetInformation name="Average Temp." data="471°c" />
      </div>
    </div>
  );
};

export default Venus;
