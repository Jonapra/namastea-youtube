import React from 'react';
import { useContext } from 'react';
import { SidebarContext } from '../../../utils/UseSidebar';

const Video = ({ info }) => {
  const { snippet, statistics } = info || {};
  const { channelTitle, thumbnails, title, publishedAt } = snippet || {};
  const { viewCount } = statistics || {};

  const formatViews = (views) => {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + 'M';
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + 'K';
    }
    return views;
  };

  const truncateTitle = (str, numWords) => {
    const words = str?.split(' ');
    if (words?.length > numWords) {
      return words.slice(0, numWords).join(' ') + '...';
    }
    return str;
  };

  const getTimeDifference = (publishDate) => {
    const now = new Date();
    const published = new Date(publishDate);
    const diffInSeconds = Math.floor((now - published) / 1000);
    const diffInHours = Math.floor(diffInSeconds / 3600);
    
    if (diffInHours < 24) {
      return `${diffInHours} hr${diffInHours !== 1 ? 's' : ''} ago`;
    } else if (diffInHours < 168) { // 7 days
      const days = Math.floor(diffInHours / 24);
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else if (diffInHours < 720) { // 30 days
      const weeks = Math.floor(diffInHours / 168);
      return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
    } else if (diffInHours < 8760) { // 365 days
      const months = Math.floor(diffInHours / 720);
      return `${months} month${months !== 1 ? 's' : ''} ago`;
    } else {
      const years = Math.floor(diffInHours / 8760);
      return `${years} year${years !== 1 ? 's' : ''} ago`;
    }
  };
  // context 
  const { isSidebarOpen } = useContext(SidebarContext);

  return info?.length <= 0 ? null : (
    <div className={`text-white rounded-lg hover:bg-gray-900 transition-colors duration-300 cursor-pointer  
      ${isSidebarOpen ? 'w-full sm:w-[320px]' : 'w-full sm:w-[354px] '}`}>
      <div className='flex flex-col space-y-2'>
        <div className='w-full aspect-video rounded-lg overflow-hidden'>
          <img 
            alt='thumbnail' 
            src={thumbnails?.high?.url} 
            className='w-full h-full object-cover rounded-lg'
          />
        </div>
        <div className='px-2'>
          <h4 className='text-lg font-semibold mb-1 line-clamp-2'>
            {truncateTitle(title, 10)}
          </h4>
          <p className='text-sm text-gray-400 mt-1'>{channelTitle}</p>
          <div className='text-base text-gray-400'>
            <span>{formatViews(viewCount)} views</span>
            <span className='mx-1'>•</span>
            <span>{getTimeDifference(publishedAt)}</span>
          </div>
        </div>
      </div>
    </div>

  );
};

// Higher order component ->(It takes a existing component and return a modefied version ) taking this video card and adding border 
export const Addcomp = ({info}) => {
  return (
    <div className='flex flex-wrap  justify-around  gap-4 px-4 pt-16 border-2 border-red-700'>
          <Video info={info} />
    </div>
  );
};
export default Video;