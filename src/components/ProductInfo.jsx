import React from "react";

const ProductInfo = () => {
  const products = [
    { id: 1, name: "Laptop", price: 1200, availability: "In stock" },
    { id: 2, name: "Phone", price: 800, availability: "Out of stock" },
    { id: 3, name: "Tablet", price: 600, availability: "In stock" },
  ];

  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      {/* mapping through an array */}
      <p>list of numbers:</p>
      {numbers.map((number) => (
        <ul key={number}>
          <li>{number}</li>
        </ul>
      ))}

      {/* this is for handling  multiple products in an object which has to stored in an array for mapping through */}
      <p>list of available products are:</p>
      {/* This is not a good practice it is unstable and inaccurate */}
      {/* {products.map((product)=> (
           <ul key={Math.random()}> */}

      {/* using index is the second best practice but it is not accurate if a product is removed. React might miss match */}
      {/* {products.map((product, index)=> ( */}
      {/* <ul key={index}> */}

      {/* using Id is the best practice, stable, usee unique key */}
      {/* {products.map((product) => (
        <ul key={product.id}>
          <li> {product.name}</li>
          <li> ${product.price}</li>
          <li> {product.availability}</li>
        </ul>
      ))} */}

      {/* destructing using the map function without using the unpacking array to avoid repetion */}
      {/* if there is no Id in the array of objects just add index, then index will be used as the key */}
      {/* {products.map(({id, name, price, availability}, index) => (
                            <ul key={index}>
                */}

      {products.map(({ id, name, price, availability }) => (
        <ul key={id}>
          <li> {name}</li>
          <li> ${price}</li>
          <li> {availability}</li>
        </ul>
      ))}

      {/*  This is for handling a single product <ul>
        <li> {product.name}</li>
        <li> ${product.price}</li>
        <li> {product.availability}</li>
      </ul> */}
    </div>
  );
};

export default ProductInfo;
