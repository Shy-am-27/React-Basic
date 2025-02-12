import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <h1 className='bg-orange-600 text-black py-5 text-center text-3xl'>User:{userId}</h1>
  )
}

export default User