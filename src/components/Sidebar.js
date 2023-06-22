import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  const ismenuopen = useSelector((store)=> store.menubar.isMenuOpen)

  if(ismenuopen ===false ) return null
  return (
    <div className=' shadow-lg w-[15%]'>
      <h1 className='font-bold p-2'><Link to='/' >Home</Link></h1>
      <h1 className='font-bold p-2'>Shorts </h1>
      <h1 className='font-bold p-2'>Subscriptions </h1>
      <h1 className='font-bold p-2'>Library</h1>
      <h1 className='font-bold p-2'>History </h1>
      <h1 className='font-bold p-2'>Watch Later </h1>
      <h1 className='font-bold p-2'>Liked Videos </h1>
    </div>
  )
}

export default Sidebar
