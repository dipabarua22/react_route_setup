//First Way Api connection

import React, { useEffect, useState } from 'react';
import FetchDataComponent from './FetchDataComponent';

const FetchData = () => {
    const[post,setPost] = useState([]);
    //console.log(post);
    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await response.json();
                setPost(data)

            }catch(error){
                console.log(error);
            }
        }
        fetchData();
    },[])
    return (
        <div>
        {
            post.map(post=>(
                <FetchDataComponent post={post} key={post.id}/>
            ))
        }
        </div>
    );
};

export default FetchData;



//fetchdata(post)
//fetchdatacompo