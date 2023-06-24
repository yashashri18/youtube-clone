import React, { useEffect } from 'react'
import LiveChatMessage from './LiveChatMessage'
import { useSelector, useDispatch } from 'react-redux'
import {addMessage} from '../utils/LiveChatSlice'
import { userNameGenerator,userCommentGenerator } from '../utils/helper'

const LiveChatContainer = () => {

    const dispatch = useDispatch();

    const LiveChatMessages1 = useSelector(store => store.chat.LiveChatMessages)

    useEffect(()=>{
        const interval = setInterval(()=>{
            const msgobj = {
                name:userNameGenerator(),
                message :userCommentGenerator(20)
            }
            dispatch(addMessage(msgobj))
        },1500)

        //clear data
        return () => clearInterval(interval);
    },[])

  return (
    <div  className=''>
        {
            LiveChatMessages1.map((msg, index)=>(<LiveChatMessage key={index} {...msg}/>))
        }
    </div>
  )
}

export default LiveChatContainer
