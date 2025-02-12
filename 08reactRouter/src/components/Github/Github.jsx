import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
   
function Github() {

  const data = useLoaderData()  
// const [data,setData] = React.useState([])

// useEffect(() =>{
//   fetch("https://api.github.com/users/Shy-am-27")
//   .then((resolve) => resolve.json())
//   .then(data =>{
//     console.log(data);
//     setData(data)
//   } )
// },[])

  return (
    <div className='bg-gray-500 text-center text-3xl text-white py-2'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="" className='w-52'/>
    </div>
  )
}

export default Github

{/*For preloading the data based on the hover effect to increase the efficency */}
export const GithubpreLoader = async() => {
  const response = await fetch("https://api.github.com/users/Shy-am-27")
  return response.json()
}