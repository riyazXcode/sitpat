import {createSlice} from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState:{
        selectedItem:'View Student Database',
        isCollapsed:false,
    },
    reducers: {
        setSelectedItem: (state, action) => {
            state.selectedItem = action.payload;
        },
        toggleSidebar:(state)=>{
            state.isCollapsed=!state.isCollapsed;
        }
    }
});

export const {setSelectedItem,toggleSidebar} = sidebarSlice.actions;
export default sidebarSlice.reducer;