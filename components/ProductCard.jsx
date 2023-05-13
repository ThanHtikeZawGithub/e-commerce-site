import React, { useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import { CartIcon } from "./Icons";
import Link from "next/link";
import { CartContext } from "./CartContext";
import ReactStars from "react-rating-stars-component";

const ImageWrapper = styled(Link)`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 150px;
  }
`;
const Card = styled.div`
  margin: 0;
  background-color: #fff;
  padding: 5px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  transition: box-shadow 0.3s ease-in-out;
  max-width: 250px;
  
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;
const Title = styled(Link)`
  font-weight: 600;
  color: inherit;
  text-decoration: none;
  font-size: 1rem;
  margin: 0;
  text-align: left;
`;

const TitleWrapper = styled.div`
  height: 50px;
`;

const InfoCard = styled.div`
  margin: 20px 10px;
`;
const Price = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const IconWrapper = styled.div`
  top: 5%;
  right: 20px;
  position: absolute;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconLink = styled(Link)`
  margin: 5px 0;
`

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
        <TitleWrapper>
          <Title href={url}>
            {name}
          </Title>
        </TitleWrapper>
        <ReactStars
          count={5}
          //onChange={ratingChanged}
          size={24}
          edit={false}
          value={4}
          activeColor="#ffd700"
        />
        <PriceRow>
          <Price>Ks {price}</Price>
          <div>
            <Button onClick={() => addProduct(_id)} primary>
              <CartIcon />
            </Button>
          </div>
        </PriceRow>
      </InfoCard>
      <IconWrapper>
        <Icon>
      <IconLink href={'/'}>
        <img src="/assets/wish.svg" alt="wish" />
      </IconLink>
      <IconLink href={'/'}>
        <img src="/assets/view.svg" alt="view" />
      </IconLink>
      <IconLink href={'/'}>
        <img src="/assets/compare.svg" alt="wish" />
      </IconLink>
        </Icon>
      </IconWrapper>
    </Card>
  );
};

export default ProductCard;
