import { configureStore } from "@reduxjs/toolkit";
import MenuToggleSlice from './MenuToggleSlice'
import SearchSuggestions from "./SearchSuggestions";
import LiveChatSlice from "./LiveChatSlice";
import VideosSlice from "./VideosSlice";
const store = configureStore({
    reducer:{
        menubar:MenuToggleSlice,
        search:SearchSuggestions,
        chat:LiveChatSlice,
        videos:VideosSlice
    }
});
    
export default store;