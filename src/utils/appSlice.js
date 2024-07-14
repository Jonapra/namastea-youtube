import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen : false,
    watchvideoApi : {}
  },
  reducers:{
    toggleMenu: (state) => {
      state.isMenuOpen =!state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  }
});
export const { toggleMenu, closeMenu,getWatchvideoApi } = appSlice.actions;
export default appSlice.reducer;