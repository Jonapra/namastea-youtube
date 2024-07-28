import React, { useState } from 'react';
import ChatsMessage from './ChatsMessage';
import { Picker } from 'emoji-mart';

const Chats = ({ messages }) => {
  const [input, setInput] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiSelect = (emoji) => {
    setInput(input + emoji.native);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  return (
    <div className="liveChats-container border-2 border-black w-[401px] h-[595px] rounded-lg flex flex-col">
      <h2 className="font-bold px-2 py-2 border-b-2 border-black text-lg">Top Chats</h2>
      <div className="flex-1 overflow-y-auto p-2">
        {messages.map((msg, index) => (
          <ChatsMessage key={index} name={msg.name} message={msg.message} />
        ))}
      </div>
      <div className="border-t-2 border-black p-2 flex items-center">
        <button onClick={toggleEmojiPicker} className="mr-2 p-1 border rounded">
          😀
        </button>
        {showEmojiPicker && (
          <div className="absolute bottom-12 left-2">
            <Picker onSelect={handleEmojiSelect} />
          </div>
        )}
        <input
          type="text"
          placeholder="Chat..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default Chats;
