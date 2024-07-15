import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: [], 
  },
  reducers: {
    searchedKey: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { searchedKey } = searchSlice.actions;
export default searchSlice.reducer;
