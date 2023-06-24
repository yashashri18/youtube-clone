import { createSlice } from "@reduxjs/toolkit";
import {MAX_MSG_COUNT} from '../utils/constants'

const LiveChatSlice = createSlice({
    name:'chat',
    initialState:{
        LiveChatMessages:[],
    },
    reducers:{
        addMessage: (state, action)=>{
            state.LiveChatMessages.push(action.payload)
            // Delete extra elements from the start  
            if (state.LiveChatMessages.length > MAX_MSG_COUNT) {
                state.LiveChatMessages.splice(0, state.LiveChatMessages.length - MAX_MSG_COUNT); 
            }
        }
    }
})
export const {addMessage} = LiveChatSlice.actions
export default LiveChatSlice.reducer
