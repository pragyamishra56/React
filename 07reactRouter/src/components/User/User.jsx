import React from 'react'
import { useParams } from 'react-router'

function User() {
  const {userid} = useParams()
  return (
    <div className='bg-blue-300 p-4 text-3xl text-black'>User: {userid}</div>
  )
}

export default User