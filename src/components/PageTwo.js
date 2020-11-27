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

  const CardWrapper = styled.div`
  width: 50%;
  padding-top: 178px;
  `


  const Row = styled.div`
  padding-left: 77px;
  &::after {
  content: ""
  clear: both;
  width: 50%;
  display: table;
  }
  `

  const Column = styled.div`
  background: yellow;
  float: right;
  width: 25%;
  height: 75vh;

  `


function PageTwo(props) {
  return (
    <PageTwoWrapper>
    <NavColumns pageTwo={props.pageTwo}/>

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

