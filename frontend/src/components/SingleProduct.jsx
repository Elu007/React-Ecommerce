import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';


// Styled components
const ProductContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProductTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const ProductPrice = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;


const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loader = styled.div`
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spinAnimation} 2s linear infinite;
`;

const SingleProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/products/${productId}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // axios.get(`/api/products/${productId}`).then(
    //   response => {
    //     setProduct(response.data);
    //   }
    // ).catch(error => {
    //   console.error(error);
    // })
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  if (!product) {
    return <LoadingContainer>
      <Loader />
    </LoadingContainer>
  }

  return (
    <ProductContainer>
      <ProductImage src={product.image} alt="product image" />
      <ProductTitle>{product.name}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>₹{product.price}</ProductPrice>
    </ProductContainer>
  )
}

export default SingleProduct
