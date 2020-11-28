import React from 'react'
import styled from 'styled-components'
import { device } from './Breakpoints';



Heading.defaultProps = {
    title: 'This is the default title for the Heading'
  }


const HeadingWrapper = styled.div `
@media ${device.laptop} { 
    padding-left: 20vh;
    padding-right: 20vh;
    position: relative;
  }


@media ${device.desktop} { 
    padding-left: 300px;
    padding-right: 241px;
    position: relative;
  }
` 

const HeadingTitle = styled.h1 `
  font: ITC Avant Garde Gothic Pro, Bold;
  font-size: 48px;
` 





function Heading(heading) {
    return (
    <HeadingWrapper>
      <HeadingTitle>{heading.title}</HeadingTitle>
    </HeadingWrapper>
    )
}




  

export default Heading
