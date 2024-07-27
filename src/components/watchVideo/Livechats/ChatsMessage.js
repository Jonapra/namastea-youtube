import React from 'react';

const ChatsMessage = ({ name, message }) => {
  return (
    <div className='flex items-start mt-2'>
      <div className='sub-logo items-center justify-center pt-1'>
        <button className="ml-2 w-5 h-5 rounded-full font-semibold bg-gray-400 text-gray-700 flex items-center justify-center">
          A
        </button>
      </div>
      <div className='ml-2'>
        <span className='font-bold  text-[#9C97A2]'>{name}</span>
        {/* The span with ml-1 break-words ensures that the message wraps under the name if it gets too long. */}
        <span className='ml-1 font-semibold'>{message}</span>
      </div>
    </div>
  );
}

export default ChatsMessage;
