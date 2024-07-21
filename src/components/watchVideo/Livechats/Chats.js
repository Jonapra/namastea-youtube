import React from 'react'
import ChatsMessage from './ChatsMessage'

const Chats = () => {
  return (
    <div className='liveChats-container border-2 border-black w-[401px] h-[595px] rounded-lg'>
        <h2 className='font-bold'>Top Chats</h2>
        <ChatsMessage name={'Generic Name'} message={"This is a live chat message"} />
    </div>
  )
}

export default Chats