import React from 'react'
import styled from 'styled-components'
import { device } from './Breakpoints'


const FlipCardsComponentWrapper = styled.div`
`


const RowOne = styled.div`

    @media ${device.laptop} { 
    padding-top: 3vh;
    padding-left: 20vh;
    padding-right: 20vh;
   }

   @media ${device.desktop} { 
    padding-left: 300px;
   }

`

const RowTwo = styled.div`

@media ${device.laptop} { 
    padding-left: 20vh;
    padding-right: 20vh;
   }

   @media ${device.desktop} { 
    padding-left: 300px;
    padding-bottom: 78px;
}
`

const Image = styled.img`
   margin: 1vh;

   @media ${device.laptop} { 
    height: auto;
    width: 30%;
    vertical-align: top;
   }

   @media ${device.desktop} { 
    height: auto;
    width: auto;
    }

  &:hover{
    opacity: 20%;
  }
`




function FlipCardsComponent() {
    return (
        <FlipCardsComponentWrapper>
            <RowOne>
                <Image src="whellies01.png" alt="whellies" />
                <Image src="newspaper02.png" alt="whellies" />  
                <Image src="makerek.png" alt="whellies" />
            </RowOne>
            <RowTwo>
                <Image src="newspaper.png" alt="whellies" />
                <Image src="rider01.png" alt="whellies" />
            </RowTwo>
        </FlipCardsComponentWrapper>
    )
}

export default FlipCardsComponent
