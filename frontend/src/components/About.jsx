import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const AboutHeading = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
`;

const AboutContent = styled.p`
  line-height: 1.6;
`;

const About = () => {
    return (
        <AboutContainer>
            <AboutHeading>About Us</AboutHeading>
            <AboutContent>
                Welcome to our new React eCommerce company! At our store, we are dedicated to delivering exceptional value to our customers. We take pride in curating a wide range of high-quality products, meticulously chosen to suit your needs and preferences. Our primary mission is to ensure customer satisfaction, offering products at a price that won't break the bank. With a passion for affordability and excellence, we aim to build lasting relationships with our valued patrons. Join us on this exciting journey as we redefine online shopping with exceptional value and top-notch service. Your satisfaction is our utmost priority, and we look forward to serving you with the best products at the best prices. Happy shopping!
            </AboutContent>
        </AboutContainer>
    );
};

export default About;
