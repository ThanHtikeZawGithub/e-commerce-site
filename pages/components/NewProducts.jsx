import React from 'react'
import styled from 'styled-components'
import Center from './Center';
import ProductCard from './ProductCard';


const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
  padding-top: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 30px 0 20px;
  font-weight: 600;
`

const NewProducts = ({products}) => {
  return (
    <Center>
      <Title>New Arrivals</Title>
    <ProductsGrid>
      {products?.length > 0 &&products.map(product => (
        <ProductCard {...product} />
      ))}
      </ProductsGrid>
      </Center>
  )
}

export default NewProducts