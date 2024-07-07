import React, { useContext } from 'react';
import { SidebarContext } from '../../utils/UseSidebar';
import { MenuIcon, YouTubeLogo, SearchIcon, VideoIcon, NotificationIcon } from '../../utils/Icons';

const Navbar = () => {
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <div className='nav-container'>
      <nav className="flex items-center justify-between bg-white px-4 py-2">
        <div className="flex items-center">
          <button className="p-2 hover:bg-gray-100 rounded-full" onClick={toggleSidebar}>
            <MenuIcon />
          </button>
          <a href="/" className="ml-4 flex items-center">
            <YouTubeLogo />
          </a>
        </div>
        <div className="hidden sm:flex flex-grow max-w-2xl mx-4">
          <input type="text" placeholder="Search" className="w-full px-3 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500" />
          <button className="bg-gray-100 px-6 py-2 rounded-r-full border border-l-0 border-gray-300 hover:bg-gray-200">
            <SearchIcon />
          </button>
        </div>
        <div className="flex items-center">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <VideoIcon />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <NotificationIcon />
          </button>
          <button className="ml-2 w-8 h-8 rounded-full font-semibold bg-gray-400 text-gray-700 flex items-center justify-center">
            A
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;