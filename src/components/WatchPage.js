import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {closeMenu} from '../utils/MenuToggleSlice'

const WatchPage = () => {
  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  const v = urlParams.get('v');

  useEffect(()=>{
    dispatch(closeMenu())
  },[])

  return (
    <div className='p-6'>
      <iframe 
      width="1000" 
      height="600" 
      src={"https://www.youtube.com/embed/"+v}
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage
