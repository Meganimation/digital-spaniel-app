import React from 'react'
import styled from 'styled-components'
import Heading from './Heading'
import CardLinkConmponent from './CardLinkComponent'
import Collage from './Collage'



const PageFiveWrapper = styled.div `
  position: inherit; 
  background: #EDEFF1;
  width: 100%;
  height: 80vh;

` 
  
  
const HeadingWrapper = styled.div `  
  padding-right: 50%;
  background: white;
  display: block;
` 
  
const ImageWrapper = styled.div `
  position: absolute;

    img:{
  padding-left: 400px;
  }
`
  
  
const LinkWrapper = styled.div ` 
  padding-left: 300px;
  position: relative;
  width: 20%;
  
  a{
    padding-right: 50px;
  }
` 
  
const CollageWrapper = styled.div `  
  padding-left: 290px;
  max-height: 100%;
  width: auto;  
` 






function PageFive() {
  return (
    <PageFiveWrapper > 
          <HeadingWrapper> 
                <Heading title={"What are // we all about?"}/> 
          </HeadingWrapper >
          <CollageWrapper >
                <Collage />
          </CollageWrapper >
          <LinkWrapper >
                <CardLinkConmponent link={"About"}/>
                <CardLinkConmponent link={"Careers"}/>
          </LinkWrapper >
      </PageFiveWrapper>
  )
}

export default PageFive

