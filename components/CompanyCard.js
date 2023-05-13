import React from 'react'
import styled from 'styled-components'
import Marquee from "react-fast-marquee";
import Center from './Center';


const StyledDiv = styled.div`
    margin : 0 50px;
    width : 100px;
    padding-top : 10px;
`;

const CompanyCard = () => {
  return (
    <Center>
        <Marquee>
              <StyledDiv>
                <img src='assets/brand-01.png' alt='brand'/>
                </StyledDiv>
                <StyledDiv>
                <img src='assets/brand-03.png' alt='brand'/>
                </StyledDiv>
                <StyledDiv>
                <img src='assets/brand-04.png' alt='brand'/>
                </StyledDiv>
                <StyledDiv>
                <img src='assets/brand-05.png' alt='brand'/>
                </StyledDiv>
                <StyledDiv>
                <img src='assets/brand-06.png' alt='brand'/>
                </StyledDiv>
                <StyledDiv>
                <img src='assets/brand-07.png' alt='brand'/>
                </StyledDiv>
        </Marquee>
    </Center>
  )
}

export default CompanyCard
