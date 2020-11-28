import React from 'react'
import styled from 'styled-components'





const ImagesWrapper = styled.div`
  width: 90%;
  background: red;
  position: relative;
  top: 0;
  left: 0;
`;
  
const Item = styled.img`
  vertical-align: text-top;
  max-width: 100%;
  height: auto;
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
  background: yellow;
  float: left;
  color: #19293A;
  font-size: 21px;
  letter-spacing: 2.1px;
  display: grid;
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
                <Item style={{paddingLeft: '27%'}} src="office04.png" alt="office" />
            </Column>
            <Column span='2'>
                <Item src="office02.png" alt="office" />
            </Column>
        </Row>
    </ImagesWrapper>
    )
}

export default Collage

