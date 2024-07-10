import React, { useContext } from 'react';
import { SidebarContext } from '../../utils/UseSidebar';
import { MenuIcon, YouTubeLogo, SearchIcon, VideoIcon, NotificationIcon } from '../../utils/Icons';

const Navbar = () => {
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <div className='nav-container'>
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between bg-black px-4 py-2 z-50">
        <div className="flex items-center">
          <button className="p-2 hover:bg-gray-700 rounded-full" onClick={toggleSidebar}>
            <MenuIcon className="text-white" />
          </button>
          <a href="/" className="ml-4 flex items-center">
            <YouTubeLogo className="text-white" />
          </a>
        </div>
        <div className="hidden sm:flex flex-grow max-w-2xl mx-4">
          <input type="text" placeholder="Search" className="w-full px-3 py-2 border border-gray-700 bg-black text-white rounded-l-full focus:outline-none focus:border-blue-500" />
          <button className="bg-gray-700 px-6 py-2 rounded-r-full border border-l-0 border-gray-700 hover:bg-gray-600">
            <SearchIcon className="text-white" />
          </button>
        </div>
        <div className="flex items-center">
          <button className="p-2 hover:bg-gray-700 rounded-full">
            <VideoIcon className="text-white" />
          </button>
          <button className="p-2 hover:bg-gray-700 rounded-full">
            <NotificationIcon className="text-white" />
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
