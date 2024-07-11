import React from 'react';
import { useContext } from 'react';
import { Link } from'react-router-dom';
import {
  HomeIcon,
  ShortsIcon,
  SubscriptionsIcon,
  ChannelIcon,
  HistoryIcon,
  PlaylistIcon,
  WatchLaterIcon,
  LikeIcon,
  TrendingIcon,
  ShoppingIcon,
  MusicIcon,
  MoviesIcon,
  LiveIcon,
  GamingIcon,
  NewsIcon,
} from '../../../utils/Icons';
import { SidebarContext } from '../../../utils/UseSidebar';

const Sidebar = () => {
  const { isSidebarOpen } = useContext(SidebarContext);

  return (
    <div
      className={`fixed top-14  h-[calc(100vh-56px)] bg-[#0F0F0F] text-white transition-all duration-300 z-40 
                  
                  sm:w-44 sm:static overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 custom-scrollbar`}
    >
      <div className="px-3 py-4">
        <nav>
          <ul>
            <li className="mb-1">
              <Link to={'/'} className="flex items-center p-2 text-white rounded-lg hover:bg-gray-800">
                <HomeIcon className="w-5 h-5 mr-3" />
                <span>Home</span>
              </Link>
            </li>
            <li className="mb-1">
              <a href="#" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-800">
                <ShortsIcon className="w-5 h-5 mr-3" />
                <span>Shorts</span>
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-800">
                <SubscriptionsIcon className="w-5 h-5 mr-3" />
                <span>Subscriptions</span>
              </a>
            </li>
          </ul>

          <div className="border-t border-gray-700 my-4"></div>

          <h3 className="px-2 mb-2 text-sm font-semibold text-gray-400">You</h3>
          <ul>
            <li className="mb-1">
              <a href="#" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-800">
                <ChannelIcon className="w-5 h-5 mr-3" />
                <span>Your channel</span>
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-800">
                <HistoryIcon className="w-5 h-5 mr-3" />
                <span>History</span>
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-800">
                <PlaylistIcon className="w-5 h-5 mr-3" />
                <span>Playlists</span>
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-800">
                <WatchLaterIcon className="w-5 h-5 mr-3" />
                <span>Watch later</span>
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-800">
                <LikeIcon className="w-5 h-5 mr-3" />
                <span>Liked videos</span>
              </a>
            </li>
          </ul>

          <div className="border-t border-gray-700 my-4"></div>

          <h3 className="px-2 mb-2 text-sm font-semibold text-gray-400">Explore</h3>
          <ul>
            <li className="mb-1">
              <a href="#" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-800">
                <TrendingIcon className="w-5 h-5 mr-3" />
                <span>Trending</span>
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-800">
                <ShoppingIcon className="w-5 h-5 mr-3" />
                <span>Shopping</span>
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-800">
                <MusicIcon className="w-5 h-5 mr-3" />
                <span>Music</span>
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-800">
                <MoviesIcon className="w-5 h-5 mr-3" />
                <span>Movies</span>
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-800">
                <LiveIcon className="w-5 h-5 mr-3" />
                <span>Live</span>
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-800">
                <GamingIcon className="w-5 h-5 mr-3" />
                <span>Gaming</span>
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-800">
                <NewsIcon className="w-5 h-5 mr-3" />
                <span>News</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;