import React, { useContext } from 'react'
import Center from '../../components/Center'
import Header from '../../components/Header';
import mongooseConfig from '../../lib/mongoose';
import { Product } from '../../models/Product';
import styled from 'styled-components';
import ProductImages from '../../components/ProductImages';
import { CartContext } from '../../components/CartContext';
import Button from '../../components/Button';
import { CartIcon } from '../../components/Icons';
import ReactStars from "react-rating-stars-component";

const Title = styled.h1`
  font-size: 1.5em;
`;

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: .8fr 1.2fr;
  }
  gap: 40px;
  margin: 40px 0;
`;
const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Price = styled.span`
  font-size: 1.4rem;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;


const ProductPage = ({product}) => {
  const {addProduct} = useContext(CartContext);
  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <Box>
            <ProductImages photos={product.photos} />
          </Box>
          <div>
            <Title>{product.name}</Title>
            <p>{product.description}</p>
            <PriceRow>
              <div>
                <Price>Ks {product.price}</Price>
              </div>
              <div>
                <Button primary onClick={() => addProduct(product._id)}>
                  <CartIcon />Add to cart
                </Button>
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
      
      </Center>
    </>
  );
}

export default ProductPage


export async function getServerSideProps(context) {
    await mongooseConfig();
    const {id} = context.query;
    const product = await Product.findById(id);
    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
        }
    }
};