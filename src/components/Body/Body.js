import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import SideMenu from './Sidebar/SideMenu';
import Video from './VideoSection/Video';
import { useContext } from 'react';
import { SidebarContext } from '../../utils/UseSidebar';


const Body = () => {
  const { isSidebarOpen } = useContext(SidebarContext);
  // console.log('This is active sidebar', activeSidebar);
  return (
    <div className='body-container flex border-2 border-gray-300 bg-[#0F0F0F]'>
      {/* Sidebar */}
      <div className='sidebarSection '> 
        {isSidebarOpen? <Sidebar /> : <SideMenu/>}  
      </div>
      {/* Main video body section */}
      <div className='videoSection mt-5  border-2 border-red-700  w-[100%]'>
        <Video />
      </div>
    </div>
  )
}

export default Body