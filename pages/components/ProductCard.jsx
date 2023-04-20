import React, { useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import { CartIcon } from "./Icons";
import Link from "next/link";
import { CartContext } from "./CartContext";

const ImageWrapper = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 80px;
  }
`;
const Card = styled.div`
    margin: 0;
`;
const Title = styled(Link)`
  font-weight: 600;
  color: inherit;
  text-decoration: none;
  font-size: 1rem;
  margin: 0;
`;
const InfoCard = styled.div`
  margin-top: 10px;
`;
const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;

const ProductCard = ({ _id, name, description, price, photos }) => {
  const url = "/products/" + _id;
  const { addProduct } = useContext(CartContext);
  return (
    <Card>
      <ImageWrapper href={url}>
        <div>
          <img src={photos[0]} alt="products" />
        </div>
      </ImageWrapper>
      <InfoCard>
        <Title href={url}>
            {name}
        </Title>
        <PriceRow>
          <Price>${price}</Price>
          <div>
            <Button onClick={() => addProduct(_id)} primary>
              <CartIcon />
            </Button>
          </div>
        </PriceRow>
      </InfoCard>
    </Card>
  );
};

export default ProductCard;
