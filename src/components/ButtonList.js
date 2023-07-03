import React, { useEffect, useState } from 'react'
import Button from './Button'
import {YOUTUBE_GET_CATEGORIES_API} from '../utils/constants'
import ButtonListShimmer from './ButtonListShimmer'

const ButtonList = () => {
  const [categories,setCategories] = useState([])

  useEffect(()=>{
    getCategories()
  },[])

  const getCategories = async () => {
    const data = await fetch(YOUTUBE_GET_CATEGORIES_API);
    const json = await data.json();
    setCategories(json.items)
    console.log('api call - fetch categories')
  }

  if(categories.length === 0) return <ButtonListShimmer/>
  
  return (
    
    <div className='flex gap-4 px-10 py-5 overflow-y-scroll'>
        {
          categories.map((category)=>
          (
            <Button 
              key={category.id} 
              name={category.snippet.title}
            />
          ))
        }
    </div>
  )
}

export default ButtonList

