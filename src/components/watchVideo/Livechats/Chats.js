import React from 'react'
import ChatsMessage from './ChatsMessage'

const Chats = () => {
  return (
    <div className='liveChats-container border-2 border-black w-[401px] h-[595px] rounded-lg '>
        <h2 className='font-bold px-2 py-2 border-b-2 border-black text-lg'>Top Chat</h2>
        <ChatsMessage name={'Ankit Pradhan'} message={"Hello this is a live chat message"} />
    </div>
  )
}

export default Chats