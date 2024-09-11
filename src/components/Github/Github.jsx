import React, { useState } from 'react'
import { useEffect } from 'react'
import { useActionData, useLoaderData } from 'react-router-dom'


function Github() {
    const data1 = useLoaderData();
    const [data,Setdata] = useState([]);

    useEffect(()=>{
        fetch('https://api.github.com/users/md-ibrahim25').then((response)=>response.json())
        .then((data)=>{
            Setdata(data);
        })

    },[])
    return (
        < >
        <div className='flex justify-center'>
        <div className='bg-gray-800 text-white text-center text-3xl inline-flex flex-col items-center'>
        <div className='m-3'><img src={data.avatar_url} alt="Image" /></div>
        <div className='mx-3'> Github Followers : {data1.followers}</div>
        </div>
        </div>
        </>
    )
}

export default Github

export const Githuninfo = async ()=>{
    const response= await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json(); 
    
}
