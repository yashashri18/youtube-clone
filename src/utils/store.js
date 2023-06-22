import { configureStore } from "@reduxjs/toolkit";
import MenuToggleSlice from './MenuToggleSlice'

const store = configureStore({
    reducer:{
        menubar:MenuToggleSlice,
    }
});
    
export default store;