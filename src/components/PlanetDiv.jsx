import React from 'react';

const PlanetDiv = ({ planet, geology }) => {
  const imageToShow = geology || planet;
  return (
    <div className="flex justify-center items-center h-76 xl:w-full md:mt-[96px] md:mb-[79px]">
      <img
        className="w-[170px] h-[170px] md:w-[285px] md:h-[285px] xl:w-[450px] xl:h-[450px]"
        src={imageToShow}
        alt="Planet"
      />
    </div>
  );
};

export default PlanetDiv;
