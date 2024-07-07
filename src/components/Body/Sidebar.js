import React from 'react';
import {
  HomeIcon,
  ShortsIcon,
  SubscriptionsIcon,
  ChannelIcon,
  HistoryIcon,
  PlaylistIcon,
  VideoIcon,
  WatchLaterIcon,
  LikeIcon
} from '../../utils/Icons';

const Sidebar = () => {
  return (
    <div className="fixed top-14 left-0 h-full w-64 bg-white overflow-y-auto transition-all duration-300 transform -translate-x-full sm:translate-x-0 z-30">
      <div className="px-3 py-4">
        <nav>
          <ul>
            <li className="mb-1">
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <HomeIcon className="w-5 h-5 mr-3" />
                <span>Home</span>
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <ShortsIcon className="w-5 h-5 mr-3" />
                <span>Shorts</span>
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <SubscriptionsIcon className="w-5 h-5 mr-3" />
                <span>Subscriptions</span>
              </a>
            </li>
          </ul>
          
          <div className="border-t border-gray-200 my-4"></div>
          
          <h3 className="px-2 mb-2 text-sm font-semibold text-gray-500">You</h3>
          <ul>
            <li className="mb-1">
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <ChannelIcon className="w-5 h-5 mr-3" />
                <span>Your channel</span>
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <HistoryIcon className="w-5 h-5 mr-3" />
                <span>History</span>
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <PlaylistIcon className="w-5 h-5 mr-3" />
                <span>Playlists</span>
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <VideoIcon className="w-5 h-5 mr-3" />
                <span>Your videos</span>
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <WatchLaterIcon className="w-5 h-5 mr-3" />
                <span>Watch later</span>
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <LikeIcon className="w-5 h-5 mr-3" />
                <span>Liked videos</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
