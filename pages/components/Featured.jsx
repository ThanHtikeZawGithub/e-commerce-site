import React, { useContext } from "react";
import Center from "./Center";
import styled from "styled-components";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import { CartIcon } from "./Icons";
import { CartContext } from "./CartContext";

const BackGround = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 3rem;
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8 rem;
`;

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 25px;
`;

const Featured = ({ product }) => {
  const { addProduct } = useContext(CartContext);

  function addFeaturedToCart() {
    addProduct(product._id);
  }

  return (
    <BackGround>
      <Center>
        <ColumnWrapper>
          <Column>
            <div>
              <Title>{product.name}</Title>
              <Desc>{product.description}</Desc>
              <ButtonWrapper>
                <ButtonLink
                  href={"/products/" + product._id}
                  white={1}
                  size="l"
                >
                  Read More
                </ButtonLink>
                <Button primary size="l" onClick={addFeaturedToCart}>
                  <CartIcon />
                  Add to cart
                </Button>
              </ButtonWrapper>
            </div>
          </Column>
          <Column>
            <img
              src="https://storage.googleapis.com/e-commerce-2cf40.appspot.com/1681840590318.png?GoogleAccessId=firebase-adminsdk-4h1na%40e-commerce-2cf40.iam.gserviceaccount.com&Expires=4102421400&Signature=kdUdGHiqS7l7exJv%2BoJawohbm6cBroWoRWzjygpyU%2F5%2FnoEHSTA8VS9UjVVhjy%2FFWn1BBN1ESXrKmHj7G75%2BKQQDonFNw0DYxzbxOF4wYQwZoPOowBJ5qBKsQ03bG2nJePSfDvLHDDjFPGu8Bbz7jMTcAoBD6agX2nmWfiyNCBR3oNewJh9w3v1vebE4YNkY%2FGGidBCCxwek6bgwEf1C%2B0z6HQfoVTWH7wcQDlh0pjZntBXAWgz%2BZ9c8%2F7EYsV6j4OqQqTra7pI%2FB7rVEl2iv2opDzLUmWJrETybr4XyoxydHAsVbyL9mLEVj3BZeU2pWvh8BTYgh5oCLC5z4rMVjA%3D%3D"
              alt="macbook"
            />
          </Column>
        </ColumnWrapper>
      </Center>
    </BackGround>
  );
};

export default Featured;
