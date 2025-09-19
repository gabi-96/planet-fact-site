import React from 'react';
import ButtonSidebar from './ButtonSidebar';

import mercury from '../assets/hamburgerMenu/mercuryDot.png';
import venus from '../assets/hamburgerMenu/venusDot.png';
import earth from '../assets/hamburgerMenu/earthDot.png';
import mars from '../assets/hamburgerMenu/marsDot.png';
import jupiter from '../assets/hamburgerMenu/jupiterDot.png';
import saturn from '../assets/hamburgerMenu/saturnDot.png';
import uranus from '../assets/hamburgerMenu/uranusDot.png';
import neptune from '../assets/hamburgerMenu/neptuneDot.png';
import arrow from '../assets/hamburgerMenu/rightArrow.svg';

const planets = [
  { name: 'Mercury', image: mercury },
  { name: 'Venus', image: venus },
  { name: 'Earth', image: earth },
  { name: 'Mars', image: mars },
  { name: 'Jupiter', image: jupiter },
  { name: 'Saturn', image: saturn },
  { name: 'Uranus', image: uranus },
  { name: 'Neptune', image: neptune },
];

const HamburgerMenuSidebar = ({ setIsSidebarOpen }) => {

  return (
  
    <div className="fixed top-17 right-0 z-1 h-full w-full px-6 py-6 bg-tab border-t border-white/20">

      {planets.map(({ name, image }) => (
        <ButtonSidebar key={name} image={image} name={name} arrow={arrow} setIsSidebarOpen={setIsSidebarOpen} />
      ))}

    </div>

  );
};

export default HamburgerMenuSidebar;
