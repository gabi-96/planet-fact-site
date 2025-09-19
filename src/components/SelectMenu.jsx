import React from 'react'

const SelectMenu = ({ active, onSelect, activeColor }) => {
  const items = [
    { key: 'overview', label: 'OVERVIEW' },
    { key: 'internal', label: 'STRUCTURE' },
    { key: 'geology', label: 'SURFACE' },
  ];

  const base = 'spartan font-bold text-[9px] tracking-[1.93px]';
  const activeStyle = 'text-white border-b-4 py-5';
  const inactiveStyle = 'text-white/50 border-b-4 border-b-transparent hover:text-white';

  return (
    <div className='flex justify-between -mx-6 px-6 border-b border-white/20'>
      {items.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onSelect && onSelect(key)}
          className={`${base} ${active === key ? activeStyle : inactiveStyle}`}
          style={active === key && activeColor ? { borderBottomColor: activeColor } : undefined}
          type="button"
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default SelectMenu