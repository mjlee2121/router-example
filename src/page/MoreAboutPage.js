import React from 'react'
import { useParams } from 'react-router-dom'

const MoreAboutPage = () => {
    const params = useParams()
    console.log('params', params)
  return (
    <div>
        <h1>This is more about page</h1>
    </div>
  )
}

export default MoreAboutPage