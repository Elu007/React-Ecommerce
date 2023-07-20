// ProductCard.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 8px;
  box-shadow: 0 9px 4px rgba(0, 0, 0, 0.5);
  padding: 16px;
  width: 300px;
  margin: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const ProductTitle = styled.h3`
  font-size: 18px;
  margin: 0;
  margin-bottom: 8px;
`;

const ProductPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

const ProductCard = ({ product }) => {
  return (
    <CardContainer>
      <ProductImage src={product.image} alt={product.image} />
      <ProductTitle>{product.name}</ProductTitle>
      <ProductPrice>₹{product.price}</ProductPrice>
    </CardContainer>
  );
};

export default ProductCard;
