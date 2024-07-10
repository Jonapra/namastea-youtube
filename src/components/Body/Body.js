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
    <div className='body-container flex border-2 border-gray-300 bg-[#0F0F0F] mt-12'>
      {/* Sidebar */}
      {/* Try here fixed 1st  */}
      <div className='sidebarSection '> 
        {isSidebarOpen? <Sidebar /> : <SideMenu/>}  
      </div>

      {/* Main video body section */}
      <div className='videoSection   w-[100%] h-full bg-[#0F0F0F] flex flex-wrap justify-between mt-6 px-4 '>
        {/* <Carousel /> */}
        {
          videos.map(videos=><Video info={videos} key={videos.id} />)
        }
      </div>
    </div>
  )
}

export default Body