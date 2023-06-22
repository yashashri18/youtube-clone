import React from 'react'
import Sidebar from './Sidebar'
import MainComponent from './MainComponent'
import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Body
