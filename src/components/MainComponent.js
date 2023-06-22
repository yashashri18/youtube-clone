import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from  './VideoContainer'

const MainComponent = () => {
  return (
    <div className='w-[85%]'>
      <div>
        <ButtonList/>
      </div>
      <div>
        <VideoContainer/>
      </div>
    </div>
  )
}

export default MainComponent
