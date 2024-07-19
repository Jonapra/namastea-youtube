import { Name } from 'ajv'
import React from 'react'

const ChatsMessage = ({name,message}) => {
  return (
    <div className='flex items-center space-x-2 mt-2'>
         <button className="ml-2 w-7 h-7 rounded-full font-semibold bg-gray-400 text-gray-700 flex items-center justify-center">
            A
          </button>
          <span className='font-bold '>{name}</span>
          <span>{message}</span>
    </div>
  )
}

export default ChatsMessage