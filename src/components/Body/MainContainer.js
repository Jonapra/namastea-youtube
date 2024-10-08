import React, { useContext } from 'react';
import Sidebar from './Sidebar/Sidebar';
import SideMenu from './Sidebar/SideMenu';
import { SidebarContext } from '../../utils/UseSidebar'; 
import Carousel from './Carousel/Carousel';
import { Outlet } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const MainContainer = () => {
  const { isSidebarOpen } = useContext(SidebarContext);
  //Getting the params 
  const [searchParams] = useSearchParams();

  return (
    <div className='body-container flex bg-[#010000] mt-12'>
      {/* Sidebar hidden for smaller screens and for large screenblock */}
      <div className='sidebarSection fixed hidden lg:block z-50'>
        {isSidebarOpen ? (
          <Sidebar />
        ) : (
          <SideMenu />
        )}
      </div>
      {/* Main content section */}
      {/* Added margin-left when sidebar is open for main body section */}
      <div className={`contentSection w-full h-full bg-[#010000] ${isSidebarOpen && !searchParams.get('v')? 'lg:ml-44' : 'lg:ml-14'}`}>
        {/* if we have watch page it will show carousel  */}
        {!searchParams.get('v') && <Carousel />}
        <div className='child-container'>
          <Outlet /> {/* This is where child routes will be rendered */}
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
