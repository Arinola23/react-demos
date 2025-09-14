import React from 'react'

const Product = ({name, price}) => {
  return (
    <div>
      <p>these are the products in stock {name} for ${price}</p>
    </div>
  )
}

export default Product
