import React, { useState, useRef, useEffect, useContext } from 'react';
import { SidebarContext } from '../../../utils/UseSidebar.js';

// List of categories to display in the navigation bar
const categories = [
  'All', 'Javascript', 'News', 'Live', 'Computer programming', 'React', 'AI', 'Machine Learning',
  'Strategies', 'Start Up', 'Music', 'Gaming', 'Mixes', 'Recruitment', 'Test', 
  'Sapce', 'Words', 'Gadgets', 'Cricket','AI', 'Movies', 'Games', 'Sports',
];

const NavigationBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
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
    <div 
      className="bg-[#010000] flex items-center w-[100%] navigation-bar fixed py-4 "
      style={{ 
        maxWidth: isSidebarOpen ? '1400px' : '1500px'
      }}
    >
      <button
        onClick={() => scroll('left')}
        className={`absolute left-0 bg-[#0f0f0f] text-white px-2 py-1 focus:outline-none z-10 rounded-sm hover:bg-[#3F3F3F] ${!showLeftButton && 'hidden'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div 
        ref={containerRef}
        className="flex overflow-x-auto whitespace-nowrap mx-8 w-full scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-3 py-1 mx-1 text-sm ${
              index === activeIndex ? 'bg-[#ffffff] text-[#0f0f0f]' : 'bg-[#272727] text-white'
            } rounded-lg whitespace-nowrap hover:bg-[#3f3f3f] focus:outline-none`}
          >
            {category}
          </button>
        ))}
      </div>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 bg-[#0f0f0f] text-white px-2 py-1 focus:outline-none rounded-sm hover:bg-[#3F3F3F]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default NavigationBar;