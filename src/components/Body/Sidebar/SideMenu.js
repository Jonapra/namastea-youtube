import React from 'react';
import { HomeIcon, ShortsIcon, SubscriptionsIcon, YouIcon } from '../../../utils/Icons';

const SideMenu = () => {
  return (
    // Hide the side menu on medium and smaller devices using Tailwind responsive classes
    <div className="w-[72px] bg-[#0F0F0F] h-screen flex flex-col items-center mt-3 pt-4 space-y-6 hidden md:flex lg:flex">
      <nav>
        <ul className="flex flex-col items-center space-y-5">
          <li>
            <a href="#" className="flex flex-col items-center text-center text-white hover:bg-gray-800 rounded-lg p-2">
              <HomeIcon className="w-6 h-6" />
              <span className="text-[10px] mt-1">Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col items-center text-center text-white hover:bg-gray-800 rounded-lg p-2">
              <ShortsIcon className="w-6 h-6" />
              <span className="text-[10px] mt-1">Shorts</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col items-center text-center text-white hover:bg-gray-800 rounded-lg p-2">
              <SubscriptionsIcon className="w-6 h-6" />
              <span className="text-[10px] mt-1">Subs</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col items-center text-center text-white hover:bg-gray-800 rounded-lg p-2">
              <YouIcon className="w-6 h-6" />
              <span className="text-[10px] mt-1">You</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideMenu;
