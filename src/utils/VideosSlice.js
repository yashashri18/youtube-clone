import { createSlice } from "@reduxjs/toolkit";

const VideoSlice = createSlice({
    name: 'videos',
    initialState:{
        videoslist : []
    },
    reducers:{
        updateVideos : (state, action)=>{
            state.videoslist = action.payload
        }
    }
})

export const {updateVideos} = VideoSlice.actions
export default VideoSlice.reducer