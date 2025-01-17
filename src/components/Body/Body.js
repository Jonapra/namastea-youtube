import React, { useState, useEffect } from 'react';
import Video from './VideoSection/Video';
import { YOUTUBE_VIDEO_API } from '../../utils/Constants';
import { Link } from'react-router-dom';
import ShimmerUI from './ShimmerUI';


const Body = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    // Calling getVideos ()
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEO_API);
    const data = await response.json();
    setVideos(data?.items);
    // console.log('This is data', data);
  };
  // Show ShimmerUI if videos array is empty or null
  if (!videos?.length) {
    return <ShimmerUI />;
  }
  return (
    <div className='videoSection w-full h-full bg-[#010000]'>
      {/* HOF form video testing */}
      {/* <Addcomp info={videos[0]} /> */}
      <div className='body-container flex flex-wrap  justify-around  gap-4 px-4 pt-16'>
        {videos.map(video => (
          <Link to={'/watch?v=' + video.id} key={video.id}>
            <Video info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
