import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
  const { id }= useParams()

  return (
    <div>
        <h1>More product details on id ${id}</h1>
    </div>
  )
}

export default ProductDetailPage