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
    axios.get('/api/products').then(
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
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {products?.map((product) => (
            // Passing the data to the ProductCard component by passing the product props
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
