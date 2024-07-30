import React, { useEffect } from 'react';
import ChatsMessage from './ChatsMessage';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../../utils/chatSlice';
import { generateRandomName } from '../../../utils/helper';

const Chats = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const livChats = setInterval(() => {
      dispatch(addMessage({name: generateRandomName(), message: 'This is a live chat message!!'}))
    }, 1000);

    return () => clearInterval(livChats);
  }, [dispatch]);

  return (
    <div className="liveChats-container border-2 border-black w-[401px] h-[595px] rounded-lg flex flex-col">
      <h2 className="font-bold px-2 py-2 border-b-2 border-black text-lg">Top Chats</h2>
      
      {/* Added flex-col-reverse to reverse the order of the chats messages. It is a flexbox feature that allows you to reverse the order of the flex items. */}
      <div className="flex-1 overflow-y-auto flex flex-col-reverse">
        {/* Live chats */}
        <ChatsMessage />
      </div>
      <div className="border-t-2 border-black p-2">
        <input
          type="text"
          placeholder="Chat..."
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};
export default Chats;