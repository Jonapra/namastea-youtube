import React from 'react';
import { useState } from 'react';

const commentsData = [
    {
        name: 'Ankit Pradhan',
        text: 'This is a typed comment',
        replies: [],
    },
    {
        name: 'Ankit Pradhan',
        text: 'This is a typed comment',
        replies: [],
    },
    {
        name: 'Ankit Pradhan',
        text: 'This is a typed comment',
        replies: [],
    },
    {
        name: 'Ankit Pradhan',
        text: 'This is a typed comment',
        replies: [
            {
                name: 'Ankit Pradhan',
                text: 'This is a typed comment',
                replies: [
                    {
                        name: 'Ankit Pradhank',
                        text: 'This is a Nested comment',
                        replies: [
                            {
                                name: 'Ankit Pradhan',
                                text: 'This is a Nested comment',
                                replies: [
                                    {
                                        name: 'Ankit Pradhan',
                                        text: 'This is a Nested comment',
                                        replies: [
                                            {
                                                name: 'Ankit Pradhan',
                                                text: 'This is a Nested comment',
                                                replies: [
                                                    {
                                                        name: 'Ankit Pradhan',
                                                        text: 'This is a Nested comment',
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            
        ],
    },
    {
        name: 'Ankit Pradhan',
        text: 'This is a typed comment',
        replies: [],
    }
];

const CommentsDisplay = ({ data }) => {
    // console.log('This is data', data);
    const { name, text } = data;
    return (
        <div className='flex justify-between'>
            <div className="flex py-3 px-3 shadow-sm bg-[#0F0F0F] rounded-md">
                <img
                    className="w-12 h-12"
                    alt="User"
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                />
                <div className="px-3">
                    <p className="font-bold">{name}</p>
                    <p>{text}</p>
                </div>
                
            </div>
            <button className='font-bold text-lg flex flex-row items-center '>...</button>
        </div>
    );
};

const CommentsList = ({ comments }) => {
    const [repliesActive, setRepliesActive] = useState(false);
    return comments.map((item, index) => (
        <div key={index}>
            <CommentsDisplay data={item} />
            {item?.replies?.length > 0 ? (
                <button 
                    className='cursor-pointer pl-8 text-blue-700' 
                    onClick={() => setRepliesActive(prevState => !prevState)}
                >
                Replies 
                </button>
            ) : null}
             {/* Using recursion and passing the data of replies (if there are replies it will pass the data to the CommentsList component same component  ->  <CommentsDisplay data={item} /> and render the JSX) */}
            {repliesActive ===true && item.replies && item.replies.length > 0 &&   (
                <div className="ml-4 md:ml-9 border-l-2 ">
                    <CommentsList comments={item.replies} />
                </div>
            )}
        </div>
    ));
};

const Comments = () => {
    return (
        <div className='comments-container flex flex-col mt-4 gap-7'>
            <CommentsList comments={commentsData} />
        </div>
    );
};

export default Comments;
