import React from 'react'
import Header from './components/Header'
import Featured from './components/Featured'
import mongooseConfig from './lib/mongoose'
import { Product } from './models/Product'
import NewProducts from './components/NewProducts'

const HomePage = ({featuredProduct, newProducts}) => {
  return (
    <div>
      <Header/>
      <Featured product={featuredProduct}/>
      <NewProducts products={newProducts}/>
      </div>
  )
}

export default HomePage;

export async function getServerSideProps() {
  const featuredProductId = '643ee5113bb1a94d7ad2218d';
  await mongooseConfig();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts))
    }
  };
}