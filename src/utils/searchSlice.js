import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: 'search',
  initialState: {},
  reducers: {
    searchedResults: (state, action) => {
      // const state = Object.assign(state, action.payload);
      /*
      Why {...state, ...action.payload} needs a return:
      This creates a new object without modifying the original.
      Without a return, this new object is created but then discarded.
       */
      const newObj = { ...state, ...action.payload };
      return newObj; // we can directly return { ...state, ...action.payload }; as well
      // console.log('This is state received', state);
    },
  },
});

export const { searchedResults } = searchSlice.actions;
export default searchSlice.reducer;
