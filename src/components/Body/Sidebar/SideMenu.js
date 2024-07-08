import React from 'react';

const SideMenu = () => {
  return (
    <div className="flex flex-col items-center h-screen p-4 space-y-6 bg-white shadow-lg w-16 md:w-48">
      <div className="flex flex-col items-center space-y-1">
        <img src="home-icon.png" alt="Home" className="w-8 h-8 md:w-10 md:h-10" />
        <span className="hidden md:block text-sm text-gray-700">Home</span>
      </div>
      <div className="flex flex-col items-center space-y-1">
        <img src="shorts-icon.png" alt="Shorts" className="w-8 h-8 md:w-10 md:h-10" />
        <span className="hidden md:block text-sm text-gray-700">Shorts</span>
      </div>
      <div className="flex flex-col items-center space-y-1">
        <img src="subscriptions-icon.png" alt="Subscriptions" className="w-8 h-8 md:w-10 md:h-10" />
        <span className="hidden md:block text-sm text-gray-700">Subscriptions</span>
      </div>
      <div className="flex flex-col items-center space-y-1">
        <img src="you-icon.png" alt="You" className="w-8 h-8 md:w-10 md:h-10" />
        <span className="hidden md:block text-sm text-gray-700">You</span>
      </div>
    </div>
  );
}

export default SideMenu;
