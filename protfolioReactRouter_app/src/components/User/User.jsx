import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()//this state use for take the id of the user
    //it can be stirng also.we take dynamic data
  return (
    <div className='bg-gray-700 text-white text-3xl
    p-4'>User: {userid} </div>
  )
}

export default User