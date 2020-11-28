import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import LinkBlockComponent from './LinkBlockComponent'

import NavColumns from './NavColumns'



const PageTwoWrapper = styled.div `
position: inherit;
background: red;
width: 100%;
height: 75vh;
  ` 






function PageTwo(props) {

  const CardWrapper = styled.div`
  width: 50%;
  padding-top: 178px;
  padding-top: ${props.pageTwo ? '178px' : '0'};
  `

  return (
    <PageTwoWrapper>
    <NavColumns pageTwo={props.pageTwo}  />

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

