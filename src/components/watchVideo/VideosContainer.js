import React from 'react'
import {useSearchParams } from'react-router-dom';


const VideosContainer = () => {
    const [searchParams] = useSearchParams();
  return (
    <div className='viewVideo-container'>
       <div className='video-container'>
           <iframe width="900" height="400" src={"https://www.youtube.com/embed/" + searchParams.get('v')} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
       </div>
    </div>
  )
}

export default VideosContainer