import React from 'react'
import styled from 'styled-components'
import { device } from './Breakpoints';
import CardLinkConmponent from './CardLinkComponent'





const ImagesWrapper = styled.div`
  width: 90%;
  position: relative;
  top: 0;
  left: 0;
`;
  
const Item = styled.img`
  vertical-align: text-top;

  @media ${device.laptop} { 
    max-width: 90%;
    height: auto;
  }

  @media ${device.desktop} { 
    max-width: 100%;
    height: auto;  
}
`;
 
  
const Row = styled.div`
  &::after {
  content: ""
  clear: both;
  width: 50%;
  display: flex;
  }
`
  
const Column = styled.div`
  float: left;
  color: #19293A;
  font-size: 21px;
  letter-spacing: 2.1px;
  display: grid;
`

const ItemWrapper = styled.div`
  padding-left: 27%;
  padding-top: 3%;
`

const LinkWrapper = styled.div ` 
  position: relative;
  width: 80%;
  
  a{
    padding-right: 50px;
  }

  @media ${device.laptop} { 
  padding-top: 10vh;
  text-align: right;
  }

  @media ${device.desktop} { 
    padding-top: 0vh;
    text-align: left;
}
` 



function Collage() {
    return (
    <ImagesWrapper>
        <Row>
            <Column span='1'>
                <Item src="office01.png" alt="office" />
            </Column>
            <Column span='2'>
                <Item src="office03.png" alt="office" />
                <ItemWrapper>
                <Item src="office04.png" alt="office" />
                </ItemWrapper>
            </Column>
            <Column span='2'>
                <Item src="office02.png" alt="office" />
            </Column>
        </Row>
        <LinkWrapper >
                <CardLinkConmponent link={"About"}/>
                <CardLinkConmponent link={"Careers"}/>
         </LinkWrapper >
    </ImagesWrapper>
    )
}

export default Collage

