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
  @media screen and (min-width: 768px) {
    font-size:3rem;
  }
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8 rem;
`;

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img{
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img{
      max-width: 100%;
    }
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
              src="https://storage.googleapis.com/e-commerce-2cf40.appspot.com/1683733021164.png?GoogleAccessId=firebase-adminsdk-4h1na%40e-commerce-2cf40.iam.gserviceaccount.com&Expires=4102421400&Signature=KLe%2FY3Ox%2F2j4RvyAQ3iLslXRdmh8MN%2BFdsfQrahm%2BrUaugnUomorGYtJQoFrNVI4xDB8bOSfE52GfwrzgkH90NAYTtdKk8TjFntue%2BWB4wnjZEoYsBcehSQaEhNO7sDcCEYF%2F1N9MO3vbKEy3dexVS5QHfACEXJpcl8lJLbHlgag2njvMur8%2FW4t4UXVnryBe3lMk3Pjuhf%2FnbcpUSiFzk4UvuFmEgsuWw%2Bnf34Z4jYFSbB3kYTOdaE%2F%2BaTwALNE7s49uhxLaOckcrpaNc9zc6ee%2F2T7Fw4EPdsYXXq1R3y%2Bsd1qcE27QNvisRD35Ui1Yu6feNoIlzeixb62EG8QmQ%3D%3D"
              alt="macbook"
            />
          </Column>
        </ColumnWrapper>
      </Center>
    </BackGround>
  );
};

export default Featured;
