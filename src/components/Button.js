import React from 'react'
import {YOUTUBE_API_KEY} from '../utils/constants'
import {updateVideos} from '../utils/VideosSlice'
import {useDispatch} from 'react-redux'
import {YOUTUBE_GET_CATEGORIES_RESULTS_API} from '../utils/constants'

const Button = ({name}) => {

  const dispatch = useDispatch();
  const handleButtonClick = ()=> {
    console.log('btn is clicked - '+name)
    getCategoryVideos();
  }

  const getCategoryVideos = async() => {
    const data = await fetch(YOUTUBE_GET_CATEGORIES_RESULTS_API+name+"&safeSearch=moderate&key="+YOUTUBE_API_KEY)
    const json = await data.json();
    console.log('api call - show category wise results')
    dispatch(updateVideos(json.items))
  }
  
  return (
    <div className='shrink-0	'>
        <button onClick={()=>handleButtonClick()} className='border px-2 py-1 m-1 rounded-sm font-medium'>{name}</button>
    </div>
  )
}

export default Button
