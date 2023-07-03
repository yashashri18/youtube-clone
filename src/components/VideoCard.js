import React from 'react'

const VideoCard = ({info }) => {
  
  const {snippet} = info;
  const {title,channelTitle , thumbnails} = snippet;
 
  return (
    <div className='shadow-sm sm:w-60 rounded-md width-full hover:shadow-lg hover:scale-105 transition-transform duration-200'>
      <img className="rounded w-full sm:w-auto" alt="thumbnail" src={thumbnails.medium.url}/>
      <div className='p-2'>
        <h1 className='py-1 font-bold'>{title}</h1>
        <h1>{channelTitle}</h1>  
      </div>  
    </div>
  )
}

export default VideoCard
