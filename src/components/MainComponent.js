import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from  './VideoContainer'

const MainComponent = () => {
  return (
    <div className=' w-[85%] 2xl:w-[85%] m-auto sm:w-[70%] lg:w-[75%] xl:w-[80%]'>
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
