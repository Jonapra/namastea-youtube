import React from 'react'
import Sidebar from './Sidebar'
import { useContext } from 'react';
import { SidebarContext } from '../../utils/UseSidebar';


const Body = () => {
  const activeSidebar = useContext(SidebarContext);
  // console.log('This is active sidebar', activeSidebar);
  return (
    <div className='body-container flex'>
      {activeSidebar.isSidebarOpen? <Sidebar /> : null}
      <div className='video-container'>
        Video
      </div>
    </div>
  )
}

export default Body