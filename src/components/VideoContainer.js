import React from 'react'
import VideoCard from './VideoCard'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import useGetVideos from '../utils/useGetVideos'

const VideoContainer = () => {


  const videos = useGetVideos()

  if(videos.length === 0) return <Shimmer/>
  return (
    <div className='flex gap-3 p-10 flex-wrap sm:justify-between justify-center'>
      {
        videos.map((video)=>{
          return <Link to={'/watch?v='+video.id} key={video.etag}><VideoCard  info={video}/></Link>
        })
      }
    </div>
  )
}

export default VideoContainer
