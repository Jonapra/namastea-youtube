import React from 'react'


const commentsData = [
    {
        name:'Ankit Pradhan',
        text:'This is a typed commenst',
        replies:[
            
        ]
    },
    {
        name:'Ankit Pradhan',
        text:'This is a typed commenst',
        replies:[
            
        ]
    },
    {
        name:'Ankit Pradhan',
        text:'This is a typed commenst',
        replies:[
            
        ]
    },
    {
        name:'Ankit Pradhan',
        text:'This is a typed commenst',
        replies:[
            {
                name:'Ankit Pradhan',
                text:'This is a typed commenst',
                replies:[
                    
                ]
            },
            {
                name:'Ankit Pradhan',
                text:'This is a typed commenst',
                replies:[
                    {
                        name:'Ankit Pradhan',
                        text:'This is a typed commenst',
                        replies:[
                            
                        ]
                    },  {
                        name:'Ankit Pradhan',
                        text:'This is a typed commenst',
                        replies:[
                            
                        ]
                    },
                ]
            },
        ]
    },
]

const CommentsDisplay = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className="flex shadow-sm bg-gray-900">
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
    );
};

const Comments = () => {
    return (
        <div className='comments-container'>
            <CommentsDisplay data={commentsData[0]} />
        </div>
    );
};

export default Comments;