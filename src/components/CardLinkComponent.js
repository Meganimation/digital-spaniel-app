import React from 'react'
import styled from 'styled-components'




function CardLinkComponent(props) {


    const CardLink= styled.a`
  font-family: Open Sans; 
  font-size: 20px;
  color: #19293A;
  line-height: 160%;
  text-decoration-color: red;
  padding-left: ${(props.padding ? "300px" : "0px")}; 

&:hover {
    text-decoration-color: black;
  }
` 

    return (
    
        <>
                <CardLink href='#badLink'>{props.link}</CardLink>
        </>
    )
}

export default CardLinkComponent
