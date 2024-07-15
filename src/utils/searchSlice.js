import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: 'search',
  initialState: [],
  reducers: {
    searchedResults: (state, action) => {
      const maxEntries = 10;
      const stateEntries = Object.entries(state);
      const newEntries = Object.entries(action.payload);
      
      let updatedEntries = [...stateEntries, ...newEntries];
      
      // If we have more than 5 entries, remove the oldest ones pop out the 1st entry one 
      //This effectively removes the oldest entries from the top and retains only the latest 10 entries(keeps the last 10 entries).
      if (updatedEntries.length > maxEntries) {
        updatedEntries = updatedEntries.slice(-maxEntries);
      }
      
      return Object.fromEntries(updatedEntries);
    },
  },
});

export const { searchedResults } = searchSlice.actions;
export default searchSlice.reducer;
