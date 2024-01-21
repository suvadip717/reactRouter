import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4 max-w-screen-xl mx-auto sm:px-6 lg:px-10'>User:{userid} </div>
  )
}

export default User

//relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8