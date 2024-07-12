import React, { useEffect ,useState} from 'react';
import { useLocation,useSearchParams } from 'react-router-dom';
import {SidebarContext} from '../../utils/UseSidebar.js';
import { useContext } from'react';
import VideosContainer from './VideosContainer.js';
import { YOUTUBE_VIDEO_API } from '../../utils/Constants.js';

const WatchVideo = () => {
  const location = useLocation();
  const { setIsSidebarOpen } = useContext(SidebarContext);
  // search Params
  const [searchParams] = useSearchParams();
  // console.log('This is searchParams', searchParams.get('v'));


  useEffect(() => {
    // Check if '/watch' is present in the pathname
    const isWatchPage = location.pathname.includes('/watch');

    // Set sidebar open/close based on the condition
    setIsSidebarOpen(false);
  }, [location.pathname]);

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    // Calling getVideos ()
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEO_API);
    const data = await response.json();
    setVideos(data.items);
  };

  return (
    <div className='h-[100vh] bg-white '>
      <VideosContainer data={videos} />

    </div>
  );
};

export default WatchVideo;
