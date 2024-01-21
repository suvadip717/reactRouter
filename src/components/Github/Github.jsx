import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/suvadip717')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])


  return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white p-5 text-3xl'>Github Followers:{data.followers} 
    </div>
    <img className='w-50 h-50 rounded-full mx-auto p-2' src={data.avatar_url} alt='Git Picture'/>
    </>
  )
}

export default Github

export const githubInfoLoder = async() => {
    const response = await fetch('https://api.github.com/users/suvadip717')
    return response.json()
}