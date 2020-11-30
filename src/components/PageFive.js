import React from 'react'
import styled from 'styled-components'
import Heading from './Heading'
import CardLinkConmponent from './CardLinkComponent'
import Collage from './Collage'
import { device } from './Breakpoints';



const PageFiveWrapper = styled.div `
  position: inherit; 
  background: #EDEFF1;
  width: 100%;
  height: 100%;

  padding-bottom: 18vh;

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

  @media ${device.laptop} { 
    padding-left: 50vh;
    padding-right: 29vh;
    height: 100%;
    width: auto;  
  }

  @media ${device.desktop} { 
    padding-left: 290px;
    padding-right: 0vh;
    max-height: 100%;
    width: auto;  
  }
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
      </PageFiveWrapper>
  )
}

export default PageFive

