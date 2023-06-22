import React, { useEffect , useState} from 'react'
import {YOUTUBE_FETCH_API} from '../utils/constants'
import VideoCard from './VideoCard'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'

const VideoContainer = () => {

  const [videos,setVideos] = useState([])
  useEffect(()=>{
    fetchYoutubeVideos();
  },[])

  const fetchYoutubeVideos = async () => {
    const data = await fetch(YOUTUBE_FETCH_API)
    const json = await data.json();
    setVideos(json.items)
  }
  if(videos.length === 0) return <Shimmer/>
  return (
    <div className='flex gap-3 p-10 flex-wrap'>
      {
        videos.map((video)=>{
          return <Link to={'/watch?v='+video.id} key={video.id}><VideoCard  info={video}/></Link>
        })
      }
    </div>
  )
}

export default VideoContainer
