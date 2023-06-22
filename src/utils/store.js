import { configureStore } from "@reduxjs/toolkit";
import MenuToggleSlice from './MenuToggleSlice'
import SearchSuggestions from "./SearchSuggestions";
const store = configureStore({
    reducer:{
        menubar:MenuToggleSlice,
        search:SearchSuggestions,
    }
});
    
export default store;