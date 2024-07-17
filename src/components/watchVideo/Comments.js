import React from 'react';

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
    console.log('This is data', data);
    const { name, text ,replies} = data;
    return (
        <div className="flex py-3 px-3 shadow-sm bg-gray-900 rounded-md">
            <img
                className="w-12 h-12"
                alt="User"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <div className="px-3">
                {replies && replies.length > 0 && (
                    <div className="">
                        <h3 className='font-bold'>Replied</h3>
                    </div>
                )}
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    );
};

const CommentsList = ({ comments }) => {
    return comments.map((item, index) => (
        <div key={index}>
            <CommentsDisplay data={item} />
            {/* Using recursion and passing the data of replies (if there are replies it will pass the data to the CommentsList component same component  ->  <CommentsDisplay data={item} /> and render the JSX) */}
            {item.replies && item.replies.length > 0 && (
                <div className='ml-9 border-l-2'>
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
