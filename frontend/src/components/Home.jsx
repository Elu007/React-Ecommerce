import React from 'react'
import axios from 'axios'
import styled from 'styled-components';
import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

const StyledHeading = styled.h1`
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const [products, setProducts] = useState();
  const [search, setSearch] = useState('');

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
        {/* Easiest method used to search products via search form in react */}
        <Form>
          <input type="text" placeholder='Search products...' onChange={(e) => setSearch(e.target.value)}/>
        </Form>
        <StyledHeading>Products</StyledHeading>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {products?.filter((product) =>{
            return search.toLowerCase() === '' ? product : product.name.toLowerCase().includes(search);
          }).map((product) => (
            // Passing the data to the ProductCard component by passing the product props
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home