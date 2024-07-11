import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {SidebarContext} from '../../utils/UseSidebar.js';
import { useContext } from'react';

const WatchVideo = () => {
  const location = useLocation();
  const { setIsSidebarOpen } = useContext(SidebarContext);


  useEffect(() => {
    // Check if '/watch' is present in the pathname
    const isWatchPage = location.pathname.includes('/watch');

    // Set sidebar open/close based on the condition
    setIsSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div>
      <h1 className='text-white'>WnmkfdasnfsfbsAFafafa</h1>
    </div>
  );
};

export default WatchVideo;
