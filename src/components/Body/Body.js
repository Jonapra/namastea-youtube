import React from 'react'
import Sidebar from './Sidebar'
import Video from './VideoSection/Video';
import { useContext } from 'react';
import { SidebarContext } from '../../utils/UseSidebar';


const Body = () => {
  const activeSidebar = useContext(SidebarContext);
  // console.log('This is active sidebar', activeSidebar);
  return (
    <div className='body-container flex border-2 border-gray-300'>
      {/* Sidebar */}
      <div className='sidebarSection '>
        {activeSidebar.isSidebarOpen? <Sidebar /> : null}  
      </div>
      {/* Main video body section */}
      <div className='videoSection mt-3'>
        <Video />
      </div>
    </div>
  )
}

export default Body