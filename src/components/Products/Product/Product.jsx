import React, { useEffect, useState } from "react";

import axios from "axios"
const Product = () => {

  const [prod,setProd] = useState([])
  // Note: this id should come from api

  //const product = { id: 1 };
  useEffect(()=>{
    axios.get("http://localhost:8080/products").then((res)=>{
      setProd( res.data)
      //console.log(res)
    })
  },[])
console.log(prod)
  return (
   <>
   {prod.map((e)=>{
     return(
      <div data-cy={`product-${e.id}`}>
      <h3 data-cy="product-name">{e.name}</h3>
      <h6 data-cy="product-description">{e.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add Item</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">Increment Count</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">Remove Item</button>
        <button data-cy="product-remove-cart-item-button">Decrement Item Count</button>
      </div>
    </div>
     )
   })}
    
    </>
  );
};

export default Product;
