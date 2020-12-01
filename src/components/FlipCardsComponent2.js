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

const Grid = styled.div`
  position: absolute;
  width: 100%;
  height: 80%;
  padding-left: 20vh;
  `

  const Row = styled.div`
  display: flex;
  background: yellow;
  width: 70%;
  height: 80%;
  `

  const TextContainer = styled.div`
  padding-left: 20%;
  padding-top: 20%;
  font-size: 30px;
  `


function FlipCardsComponent2() {
    return (
        <>
          <Grid>
            <Row>
              <TextContainer>
          This is a page accessed via the power of React-Router!
          </TextContainer>
            </Row>
          </Grid>
        </>
    )
}

export default FlipCardsComponent2
