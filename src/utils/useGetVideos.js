import { useDispatch, useSelector } from 'react-redux'
import {updateVideos} from '../utils/VideosSlice'
import { useEffect } from 'react';
import {YOUTUBE_FETCH_API} from '../utils/constants'


const useGetVideos = () => {
    const dispatch = useDispatch();
    const videos1 = useSelector(store => store.videos.videoslist)
    useEffect(()=>{
        fetchYoutubeVideos();
    },[])
    const fetchYoutubeVideos = async () => {
        const data = await fetch(YOUTUBE_FETCH_API)
        const json = await data.json();
        dispatch(updateVideos(json.items))
        console.log('fetch api - popular videos at the start')
    }
    return videos1
}

export default useGetVideos
