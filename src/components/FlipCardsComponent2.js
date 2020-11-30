import React from 'react'
import styled from 'styled-components'


const RowOne = styled.div`
  padding-left: 300px;
`

const RowTwo = styled.div`
  padding-left: 300px;
  padding-bottom: 78px;
`

const Image = styled.img`
   margin: 1vh;

  &:hover{
    opacity: 20%;
  }
`


function FlipCardsComponent2() {
    return (
        <>
                <RowOne>
                <Image src="makerek.png" alt="whellies" />
        <Image src="whellies01.png" alt="whellies" />
  
   
    </RowOne>
    <RowTwo>
    <Image src="newspaper02.png" alt="whellies" />  
        <Image src="newspaper.png" alt="whellies" />
        <Image src="rider01.png" alt="whellies" />
    </RowTwo>
        </>
    )
}

export default FlipCardsComponent2
