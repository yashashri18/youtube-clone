import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import {toggleMenu} from '../utils/MenuToggleSlice'
import {YOUTUBE_SEARCH_SUGGESTIONS_API} from '../utils/constants'
import SearchIcon from './SearchIcon'
import {addResults} from '../utils/SearchSuggestions'

const Header = () => {
  const dispatch = useDispatch();
  //subscribe to only required portion of store
  const cacheResults = useSelector(store => store.search.cacheresults)
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState('')
  
  useEffect(()=>{
    const timer = setTimeout(()=>{
      //if it is in cache -> setsuggestions from cache
      //else - make api call
      if(cacheResults[searchQuery]){
        setSuggestions(cacheResults[searchQuery]);
      }
      else{
        getSearchSuggestion();
      }
    },200)

    //clear timer when component is destroying
    return ()=>{clearTimeout(timer)}
    
  },[searchQuery])

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API+searchQuery)
    const json = await data.json();
    setSuggestions(json[1]);
    //dispatch action which adds cache with suggestions
    dispatch(addResults({[searchQuery]:json[1]}))
  }
 
  const handleToggleMenu = () => {
    //dispatch an anction 
    dispatch(toggleMenu())
  }

  return (
    <div className='flex items-center shadow-sm' >
      <div className='flex items-center w-[25%]'>
        <img 
            onClick={()=>handleToggleMenu()}
            className='w-6 h-6'
            alt="hamburger" 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADPz89LS0uWlpaPj4/4+PhfX1/29vawsLAdHR3b29v8/PzExMQzMzOEhIRzc3MPDw+hoaGysrLq6uo8PDwXFxfh4eFkZGRXV1fGxsZGRkaHh4fX19d6enqnp6e7u7sLhoRgAAAChUlEQVR4nO3di1LCQAyF4eWOCIgIqPWC7/+UWhm8jZNs2Z3JJP2/J8gZK+1u02xKAAAAAAAAAAAAAAAAABDfcjWZjfyYTVbLTvl2rwN/Nrv8gBPrYi80ycw33VtXerH9NCvgwbrOAoeciGvrKous9YA31jUWutEC3ltXWOxeSfhgXWCxBzng3Lq+CuZiwivr8iq4EhNurMurYCMm9H2rOJFvGNbVVdHzhJ6f2M4WYsJH6/IqeBQTel03/SSvoYbW5VUwFBOmW+v6it3KAdPRusBiRyVhWlhXWEj+JW29WJdY6EVN6PzhW71GW1vrKgtscwKm1FjXebEmL+DHOtjjhvDHskle+/7JOPa2abofd9jyPpleD/24ztoKBgAAAAAAAAAAPs2b49iPY9PlvVPrbWT9Lqmz0VuHfEOf7QoLpZPm27N1qRdT29hPZtZ1FpjlBPTdJiw3CH+6s66x0J0W0H+zvnbb8P7JzGDwLAdcWtdXgfyp5cq6vApWwS9S7ab4ZF1eBU9iQv8twlqTsHV1VfT8bxj//zD+b2n8+2GEZxoxoOfV75nyXBpgbaH20vr+GCFjfdiDNX4P9mk8/9povzJfwu+Xpvh73q3o7y0AAAAAAAAAAIAjwedE7cbeZiavO836mvt8050/r83vzD25WehL+LmJvme0Zsy+jD+/1GeTwjd1Bq3va7SlXaf+m4SVWdDx53nHn8kef65+hLMRDmJC6+qq6HlCb2um/8jnzPhcNv0mtwl77/JuyZ3e/lv11Q+Bw5+71oOz89x/25UxOML3DSPjDMsenEMa/yzZ5HcNlXsecHJ6pvNrtwMulo2zc7mbbudyAwAAAAAAAAAAAAAAAIBP7y86VZGfUH/eAAAAAElFTkSuQmCC"
        />
        <img 
            className='w-40'
            alt="logo"
            src="data:image/png;base64,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"
        />
        
      </div>
      <div className='w-[50%] text-center relative'>
        <div>
        <input 
            type="text"
            className='w-1/2 p-2 border border-gray-500 rounded-l-full w-[90%]'
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
        ></input>
        <button className='p-2 border border-gray-500 rounded-r-full w-[10%]'>Search</button>
        </div>
        {/* search results div  */}
        <div className='absolute left-0 right-0 m-auto bg-white shadow-lg rounded-lg'>
          <ul>
            {
              suggestions && suggestions.map((suggestion)=>{
                return <li key={suggestion} className='border-b p-2 text-left	'><SearchIcon/>{suggestion}</li>
              })
            }
            {/* <li className='border-b p-2 text-left	'><SearchIcon/>Iphone</li>
            <li className='border-b p-2 text-left	'><SearchIcon/>Iphone 13</li>
            <li className='border-b p-2 text-left	'><SearchIcon/>Iphone</li>
            <li className='border-b p-2 text-left	'><SearchIcon/>Iphone 13</li>
            <li className='border-b p-2 text-left	'><SearchIcon/>Iphone</li>
            <li className='border-b p-2 text-left	'><SearchIcon/>Iphone 13</li> */}
          </ul>
        </div>
      </div>
      <div className=' w-[20%]'>
        <img
            alt="user_iocn"
            className='w-8 h-8 ml-auto'
            src="data:image/png;base64,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"
        />
      </div>
    </div>
  )
}

export default Header
