import React from 'react'
import {useSearchParams } from'react-router-dom';
import { useEffect,useState } from 'react';
import { YOUTUBE_VIDEO_API } from '../../utils/Constants.js';


const VideosContainer = ({data}) => {
   const [searchParams] = useSearchParams();
  console.log('This is watch received data', data);
  const videoId = searchParams.get('v');
  const filterVideo = data.filter(video => video.id === videoId);
  console.log('This is filter video', filterVideo);
  return (
    <div className='viewVideo-container'>
       <div className='video-container'>
           <iframe width="900" height="400" src={"https://www.youtube.com/embed/" + searchParams.get('v')} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
       </div>
     
    </div>
  )
}

export default VideosContainer