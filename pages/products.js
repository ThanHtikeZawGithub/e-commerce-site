import React from 'react'
import Header from '../components/Header'
import mongooseConfig from '../lib/mongoose'
import styled from 'styled-components'
import { Product } from '../models/Product'
import Center from '../components/Center'
import ProductsGrid from '../components/ProductGrid'


const Title = styled.h1`
  font-size: 1.5em;
`;

const ProductsPage = ({products}) => {
  return (
    <>
    <Header />
    <Center>
      <Title>All products</Title>
      <ProductsGrid products={products} />
    </Center>
  </>
  )
}

export default ProductsPage;



export async function getServerSideProps() {
    await mongooseConfig();
    const products = await Product.find({}, null, {sort:{'_id':-1}});
  return {
    props:{
      products: JSON.parse(JSON.stringify(products)),
    }
  };
}