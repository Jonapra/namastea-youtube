import React, { useState, useRef, useEffect } from 'react';
import { useContext } from 'react';
import { SidebarContext } from '../../../utils/UseSidebar.js';

const categories = [
  'All', 'Gaming', 'News', 'Live', 'Computer programming', 'Valorant', 'Wealth', 
  'Strategies', 'Colleges', 'Music', 'Debates', 'Mixes', 'Recruitment', 'Test', 
  'Aircrafts', 'Words', 'Gadgets', 'Cricket'
];

const NavigationBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const containerRef = useRef(null);
  //use context
  const { isSidebarOpen } = useContext(SidebarContext);
  const scroll = (direction) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = 200;
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount);
      
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  useEffect(() => {
    setShowLeftButton(scrollPosition > 0);
  }, [scrollPosition]);

  return (
    <div className="relative bg-[#0f0f0f] flex items-center w-full" style={{ maxWidth: isSidebarOpen ? '1380px' : '1580px' }}>
      <button
        onClick={() => scroll('left')}
        className={`absolute left-0 bg-[#0f0f0f] text-white px-2 py-1 focus:outline-none z-10 rounded-full hover:bg-[#3F3F3F] ${!showLeftButton && 'hidden'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div 
        ref={containerRef}
        className="flex overflow-hidden whitespace-nowrap mx-8 w-full"
        style={{ scrollBehavior: 'smooth' }}
      >
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-3 py-1 mx-1 text-sm ${
              index === 0 ? 'bg-[#ffffff] text-[#0f0f0f]' : 'bg-[#272727] text-white'
            } rounded-lg whitespace-nowrap hover:bg-[#3f3f3f] focus:outline-none`}
          >
            {category}
          </button>
        ))}
      </div>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 bg-[#0f0f0f] text-white px-2 py-1 focus:outline-none rounded-full hover:bg-[#3F3F3F]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default NavigationBar;
