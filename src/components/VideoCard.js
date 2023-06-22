import React from 'react'

const VideoCard = ({info }) => {
  const {snippet,statistics} = info;
  const {title,channelTitle , thumbnails} = snippet;
  const {viewCount} = statistics;

  return (
    <div className='shadow-sm w-60 rounded-md'>
      <img className="rounded" alt="thumbnail" src={thumbnails.medium.url}/>
      <div className='py-2'>
        <h1 className='py-1 font-bold'>{title}</h1>
        <h1>{channelTitle}</h1>  
        <h1>{viewCount}</h1>  
      </div>  
    </div>
  )
}

export default VideoCard
