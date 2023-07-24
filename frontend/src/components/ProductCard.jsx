// ProductCard.js
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

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

const StyledButton = styled(Link)`
  display: inline-block;
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;


const ProductCard = ({ product }) => {
  return (
    <CardContainer>
      <ProductImage src={product.image} alt={product.image} />
      <ProductTitle>{product.name}</ProductTitle>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
      <ProductPrice>₹{product.price}</ProductPrice>
      <StyledButton to={`/api/products/${product.id}`}>More Info</StyledButton>
      </div>
    </CardContainer>
  );
};

export default ProductCard;
