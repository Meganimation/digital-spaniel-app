import React from 'react'
import styled from 'styled-components'




function CardLinkComponent(props) {

  const CardLink= styled.a`
 
  text-decoration: none;
  font-size: 20px;
  color: #19293A;
  line-height: 160%;
  padding-left: ${(props.padding ? "300px" : "0px")}; 
  display: inline-block;
  font: normal normal 600 20px/27px Open Sans;

&:after {
    text-decoration-color: red;
    border-bottom: solid 4px red;
    display: block;
    content: '';
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
    transform-origin:100% 50%;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin:0 50%;
  };
` 

    return (
    
        <>
                <CardLink href='#badLink'>{props.link}</CardLink>
        </>
    )
}

export default CardLinkComponent
