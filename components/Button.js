import React from 'react'
import styled, {css} from 'styled-components'


export const ButtonStyle = css`
    border: 0;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    svg{
    height: 16px;
    margin-right: 5px;
  }
    ${props => props.white && css`
        background-color: #fff;
        color: #000;
    `}
    ${props => props.primary && css`
        background-color: #5542F6;
        color: #fff;
    `}
    ${props => props.size === 'l' && css`
        font-size: 1.2rem;
        padding: 10px 20px;
    `}
`;


const StyledButton = styled.button`
   ${ButtonStyle}
`;

const Button = ({children, ...rest}) => {
  return (
    <StyledButton {...rest}>
        {children}
    </StyledButton>
  )
}

export default Button