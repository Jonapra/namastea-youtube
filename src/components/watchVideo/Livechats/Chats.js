import React, { useEffect,useState } from 'react';
import ChatsMessage from './ChatsMessage';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../../utils/chatSlice';
import { generateRandomName } from '../../../utils/helper';
import { FaArrowRight } from "react-icons/fa";

const Chats = () => {
  const dispatch = useDispatch();
  const [realtimeChats, setRealtimeChats] = useState([]);
  // console.log('This is a realtime chats',realtimeChats);

  useEffect(() => {
    const livChats = setInterval(() => {
      dispatch(addMessage({name: generateRandomName(), message: 'This is a live chat message!!'}))
    }, 2000);

    return () => clearInterval(livChats);
  }, [dispatch]);

  return (
    <div className="liveChats-container border-[2px] border-[#222222] w-full lg:w-[401px] h-[595px] rounded-lg flex flex-col">
      <h2 className="font-bold px-2 py-2 border-b-[3px] border-[#222222] text-white text-lg">Top Chats</h2>
      
      {/* Added flex-col-reverse to reverse the order of the chats messages. It is a flexbox feature that allows you to reverse the order of the flex items. */}
      <div className="flex-1 overflow-y-auto flex flex-col-reverse">
        {/* Live chats */}
        <ChatsMessage />
      </div>
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          if (realtimeChats.trim()) {
            dispatch(addMessage({name: 'Ankit Pradhan', message: realtimeChats}));
            setRealtimeChats('');
          }
        }}
        className="liveChats-container border-t-2 border-[#272727] p-2 flex font-semibold"
      >
        <input
          type="text"
          placeholder="Chat..."
          className=" bg-[#272727] text-white  w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={realtimeChats}
          onChange={(e) => setRealtimeChats(e.target.value)}  
        />
        <button
          type="submit"
          className='flex justify-center align-middle items-center pl-3 cursor-pointer '
        >
          <FaArrowRight  className="text-white"/>
        </button>
      </form>
      
    </div>
  );
};
export default Chats;