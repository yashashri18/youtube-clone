import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  const ismenuopen = useSelector((store)=> store.menubar.isMenuOpen)

  if(ismenuopen ===false ) return null
  return (
    <div className=' shadow-lg 2xl:w-[15%] py-5 hidden	sm:block w-[15%] sm:w-[30%] lg:w-[25%]	xl:w-[20%]'>
      <h1 className='font-bold p-2 pl-11'><Link to='/' >Home</Link></h1>
      <h1 className='font-bold p-2 pl-11'>Shorts </h1>
      <h1 className='font-bold p-2 pl-11'>Subscriptions </h1>
      <h1 className='font-bold p-2 pl-11'>Library</h1>
      <h1 className='font-bold p-2 pl-11'>History </h1>
      <h1 className='font-bold p-2 pl-11'>Watch Later </h1>
      <h1 className='font-bold p-2 pl-11'>Liked Videos </h1>
    </div>
  )
}

export default Sidebar
