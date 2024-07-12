import React, { useEffect } from 'react';
import { useLocation,useSearchParams } from 'react-router-dom';
import {SidebarContext} from '../../utils/UseSidebar.js';
import { useContext } from'react';
import VideosContainer from './VideosContainer.js';

const WatchVideo = () => {
  const location = useLocation();
  const { setIsSidebarOpen } = useContext(SidebarContext);
  // search Params
  const [searchParams] = useSearchParams();
  console.log('This is searchParams', searchParams.get('v'));


  useEffect(() => {
    // Check if '/watch' is present in the pathname
    const isWatchPage = location.pathname.includes('/watch');

    // Set sidebar open/close based on the condition
    setIsSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className='h-[100vh] bg-white '>
      <VideosContainer/>

    </div>
  );
};

export default WatchVideo;
