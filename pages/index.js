import React from 'react'
import Header from '../components/Header'
import Featured from '../components/Featured'
import mongooseConfig from '../lib/mongoose'
import { Product } from '../models/Product'
import NewProducts from '../components/NewProducts'
import CompanyCard from '@/components/CompanyCard'

const HomePage = ({featuredProduct, newProducts}) => {
  return (
    <div>
      <Header/>
      <Featured product={featuredProduct}/>
      <NewProducts products={newProducts}/>
      <CompanyCard/>
      </div>
  )
}

export default HomePage;

export async function getServerSideProps() {
  const featuredProductId = '645bba47ebbfa61d7318dfb8';
  await mongooseConfig();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:5});
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts))
    }
  };
}