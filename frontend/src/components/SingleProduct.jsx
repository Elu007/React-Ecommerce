import React from 'react'
import { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

const SingleProduct = () => {
  const { productId } = useParams();
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get(`/api/products/${productId}`).then(
      response => {
        setProducts(response.data);
      }
    ).catch(error => {
      console.error(error);
    })
  }, [productId])

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={products.image} alt="productImage" />
      <h2>{products.name}</h2>
      <p>{products.description}</p>
      <Link to="/">Back to products</Link>
    </div>
  )
}

export default SingleProduct
