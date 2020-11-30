import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import NavColumns from './NavColumns'




const PageTwoWrapper = styled.div `
  position: inherit;
  width: 100%;
  height: 75vh;
  background: #EDEFF1;
` 

const NavWrapper = styled.div`
padding-left: 20vh;
`



function PageTwo(props) {

const CardWrapper = styled.div`
  width: 50%;
  padding-top: 178px;
`

  return (
  <PageTwoWrapper>
    <NavWrapper >
    <NavColumns pageTwo={props.pageTwo} />
    </NavWrapper >
      <CardWrapper>
        <Card 
        title={props.title} 
        text={props.text}
        link={props.link}
        />
      </CardWrapper> 
  </PageTwoWrapper>
  )
}

export default PageTwo

