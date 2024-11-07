import React, { useEffect, useState } from 'react'
// import { useLoaderData } from 'react-router-dom'


function Github() {
    // const data = useLoaderData()
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/ali-hossain-nayan')
     .then(response => response.json())
     .then(data => {
        // console.log(data);
        setData(data)
     })
    }, [])
   //https://github.com/ali-hossain-nayan 
  return (
    <div className="text-center m-4 bg-gray-700 text-white p-8 rounded-lg text-3xl">
    <p className="mb-4">GitHub Followers: {data.followers}</p>
    <img
      src={data.avatar_url}
      alt="GitHub Avatar"
      className="rounded-full mx-auto"
      width={300}
    />
  </div>
  
  )
}

export default Github

