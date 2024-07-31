import { createSlice } from '@reduxjs/toolkit';
import { LIVE_CHAT_COUNT } from './Constants';
const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
  },
  reducers: {
   addMessage: (state, action) => {
     // to remove the last message from the array and maintain the size of the array to 10
      state.messages.splice(LIVE_CHAT_COUNT,1)
      // to push the new message to the beginning of the array
      state.messages.unshift(action.payload);
   }
  },
});
export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;