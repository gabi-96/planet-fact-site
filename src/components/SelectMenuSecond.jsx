import React from 'react';

const SelectMenuSecond = ({ number, label, isActive, onClick, activeColor }) => {
  // Add a different style when active
  const baseStyle =
    'w-[281px] bg-transparent border px-5 py-2 spartan text-[9px] font-bold tracking-[1.93px] leading-[25px] text-left xl:w-[350px]';
  const activeStyle = 'text-white border-none';
  const inactiveStyle = 'text-white/50 border border-white/20 hover:text-white';

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}
      style={isActive && activeColor ? { backgroundColor: activeColor } : undefined}
      type="button"
    >
      {number}
      <span className="ml-4">{label}</span>
    </button>
  );
};

export default SelectMenuSecond;
