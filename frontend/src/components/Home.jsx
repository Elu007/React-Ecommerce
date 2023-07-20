import React from 'react'
import axios from 'axios'
import styled from 'styled-components';
import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

const StyledHeading = styled.h1`
  text-align: center;
`;

const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get('/api/products/:id').then(
      response => {
        setProducts(response.data);
      }
    ).catch(error => {
      console.error(error);
    })
  }, [])

  return (
    <>
      <div>
        <StyledHeading>Products</StyledHeading>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {products?.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
