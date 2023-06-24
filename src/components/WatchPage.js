import React, { useEffect , useState} from 'react'
import { useDispatch } from 'react-redux'
import {closeMenu} from '../utils/MenuToggleSlice'
import CommentsContainer from './CommentsContainer'
import LiveChatContainer from './LiveChatContainer'
import  {addMessage} from '../utils/LiveChatSlice'

const WatchPage = () => {
  const dispatch = useDispatch();;
  const [message, setMessage] = useState();
  const urlParams = new URLSearchParams(window.location.search);
  const v = urlParams.get('v');

  useEffect(()=>{
    dispatch(closeMenu())
  },[])

  const submitButtonHandler = ()=> {
    dispatch(addMessage({name:"Yashashri B.", message:message}))
    setMessage('')
  }

  return (
    <div className='flex w-full'>
      <div className='flex flex-col'>
          <div className='p-6'>
            <iframe 
            width="1200" 
            height="600" 
            src={"https://www.youtube.com/embed/"+v}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen></iframe>
          </div>
          <CommentsContainer/>
      </div>
      <div>
      <div className='w-full h-[600px] m-6 bg-gray-100 p-2 rounded-lg overflow-y-scroll flex flex-col-reverse'> 
        <LiveChatContainer/>
      </div>
      <div className=' m-6'>
        <input className="p-2 border w-[80%]" value={message} onChange={(e)=>(setMessage(e.target.value))} type='text'></input>
        <button className='p-2 bg-green-200 w-[20%]' onClick={()=>submitButtonHandler()}>Send</button>
      </div>
      </div>

    </div>
  )
}

export default WatchPage
