import { createSlice } from "@reduxjs/toolkit";

const MenuToggleSlice = createSlice({
    name: 'menubar',
    initialState:{
        isMenuOpen :true
    },
    reducers:{
        toggleMenu : (state)=>{
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu : (state)=>{
            state.isMenuOpen = false
        }
    }
})

export const {toggleMenu,closeMenu} = MenuToggleSlice.actions
export default MenuToggleSlice.reducer