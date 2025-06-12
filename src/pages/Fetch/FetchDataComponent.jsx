import React from 'react';

const FetchDataComponent = ({post}) => {
    return (
        <div className='m-2 p-2 shadow-2xl bg-blue-300'>
            <p className='text-2xl font-bold'>{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default FetchDataComponent;