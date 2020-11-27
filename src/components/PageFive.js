import React from 'react'
import styled from 'styled-components'
import Heading from './Heading'
import CardLinkConmponent from './CardLinkComponent'



const PageFiveWrapper = styled.div `

position: inherit; 
background: lightBlue;
width: 100%;
height: 100vh;
  ` 


const HeadingWrapper = styled.div `

padding-right: 50%;
background: white;
display: block;
` 


const LinkWrapper = styled.div `

padding-left: 300px;
` 

function PageFive() {
  return (<>
    <PageFiveWrapper > 
      <HeadingWrapper> 
       <Heading title={"What are we all about?"}/> ayyyy 
       </HeadingWrapper>
       <LinkWrapper >
       <CardLinkConmponent link={"About"}/>
       <CardLinkConmponent link={"Careers"}/>
       </ LinkWrapper >

       </PageFiveWrapper>
    </>
  )
}

export default PageFive

