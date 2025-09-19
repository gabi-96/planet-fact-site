import React from 'react'

const PlanetInformation = ({name, data}) => {
  return (
    <div className='flex justify-between px-6 py-3 items-center border border-white/20 md:w-[164px] md:flex-col md:items-start md:px-4 md:pt-4 md:pb-5 xl:w-[255px]'>
        <p className='text-white opacity-50 spartan font-bold text-[8px] leading-[16px]'>{name}</p>
        <p className='text-white antonio font-medium text-[20px] spacing-[-0.75px] md:text-[24px]'>{data}</p>
    </div>
  )
}

export default PlanetInformation