import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import Description from './Description';
import Comments from './Comments';
import Chats from './Livechats/Chats.js';
import { MdOutlineSubscriptions } from "react-icons/md";

const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num?.toString();
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

const VideosContainer = ({ data }) => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  const filterVideo = data.filter(video => video.id === videoId);
  const { channelTitle, title, publishedAt, description } = filterVideo[0]?.snippet || {};
  const { viewCount, likeCount, commentCount } = filterVideo[0]?.statistics || {};

  useEffect(() => {
    // Scroll to top when component is mounted
    window.scrollTo(0, 0);
  }, []);


  return (
   <div className='Mian-watchContiner mt-9 flex flex-1 bg-[#0f0f0f]'>
    <div className="sm:px-6  max-w-[1012px] w-full bg-[#0f0f0f] text-white">
      <div className="relative w-full flex" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
        <iframe 
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      
      <div className="mt-4 px-4 ">
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
              <MdOutlineSubscriptions />
            </div>
            <div>
              <p className="font-semibold">{channelTitle}</p>
              <p className="text-sm text-gray-400">{Math.floor(Math.random() * (40 - 9 + 1)) + 9}M  Subscribers</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
            <button className="bg-[#272727] hover:bg-[#3f3f3f] px-4 py-2 rounded-full text-sm flex items-center">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
              </svg>
              {formatNumber(likeCount)}
            </button>
            <button className="bg-[#272727] hover:bg-[#3f3f3f] px-4 py-2 rounded-full text-sm flex items-center">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"/>
              </svg>
              Share
            </button>
            <button className="bg-[#272727] hover:bg-[#3f3f3f] px-4 py-2 rounded-full text-sm flex items-center">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              Download
            </button>
            <button className="bg-[#272727] hover:bg-[#3f3f3f] px-4 py-2 rounded-full text-sm">
              ...
            </button>
          </div>
        </div>
      </div>
      
        {/* Live Chats */}
        <div className='liveChats-container mt-10 block sm:block md:block lg:hidden xl:hidden 2xl:hidden'>
          <Chats/>
        </div>
      <div className="bg-[#272727] p-4 rounded-lg mt-4">
        <div className='pulblish flex space-x-4'>
          <p className="text-sm text-gray-300">{formatNumber(viewCount)} views</p>
          <p className="text-sm text-gray-300">{getTimeDifference(publishedAt)}</p>
        </div>
        <div className="mt-2 "><Description description={description} /></div>
      </div>
     
      {/* Comments container */}
      <div className='comments-section '>
        <h1 className='text-2xl'>{commentCount} Comments</h1>
        <Comments/>
      </div>
    </div>
    {/* Live Chats */}
    <div className='liveChats-container ml-12 mt-3 hidden lg:flex'>
       <Chats/>
    </div>
  </div>
  )
}

export default VideosContainer