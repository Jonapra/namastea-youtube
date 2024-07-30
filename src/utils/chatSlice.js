import { createSlice } from '@reduxjs/toolkit';
const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
  },
  reducers: {
   addMessage: (state, action) => {
    // to push the new message to the beginning of the array
    state.messages.unshift(action.payload);
   }
  },
});
export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;