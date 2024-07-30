import React from 'react';
import { useSelector } from 'react-redux';

const ChatsMessage = () => {
  const chats = useSelector(state => state.chat.messages);

  return (
    <>
      {chats.map((chat, index) => (
        <div key={index} className="flex items-start p-2">
          <div className="flex-shrink-0">
            <button className="w-6 h-6 rounded-full font-semibold bg-gray-400 text-gray-700 flex items-center justify-center">
              A
            </button>
          </div>
          <div className="ml-2 flex-grow">
            <span className="font-bold text-[#9C97A2]">{chat.name}</span>
            <span className="ml-1 font-semibold break-words">{chat.message}</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default ChatsMessage;