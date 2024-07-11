import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import SideMenu from './Sidebar/SideMenu';
import Video from './VideoSection/Video';
import { useContext } from 'react';
import { SidebarContext } from '../../utils/UseSidebar'; 
import {useState, useEffect } from 'react';
import {YOUTUBE_VIDEO_API} from '.././../utils/Constants';
import Carousel from './Carousel/Carousel.js' 

const Body = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    // Calling getVideo ()
    getVideos()
  }, [])

  const getVideos =async()=>{
    const response = await fetch(YOUTUBE_VIDEO_API);
    const data = await response.json();
    setVideos(data.items);
    console.log('This is data', data);
  }


  const { isSidebarOpen } = useContext(SidebarContext);
  // console.log('This is active sidebar', activeSidebar);
  return (
    <div className='body-container flex  bg-[#010000] mt-12'>
      {/* Sidebar */}
      <div className='sidebarSection fixed hidden lg:block'>
        {isSidebarOpen ? <Sidebar /> : <SideMenu />}
      </div>
      {/* Main video body section */}
      {/* Added margin-left when sidebar is open */}
      <div className={`videoSection w-full h-full bg-[#010000] ${isSidebarOpen ? 'lg:ml-44' : 'lg:ml-14'}`}>
        <Carousel />
       <div className='pt-20 flex flex-wrap justify-between gap-4 px-4'>
          {
            videos.map(video => <Video info={video} key={video.id} />)
          }
       </div>
      </div>
    </div>
  )
}

export default Body