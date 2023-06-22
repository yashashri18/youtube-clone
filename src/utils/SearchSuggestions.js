import { createSlice } from "@reduxjs/toolkit";

const SearchSuggestions = createSlice({
    name:'search',
    initialState:{
        cacheresults:{}
    },
    reducers:{
        addResults: (state, action)=>{
            state.cacheresults = {...state.cacheresults, ...action.payload}
        }
    }
})

export const {addResults} = SearchSuggestions.actions
export default SearchSuggestions.reducer

