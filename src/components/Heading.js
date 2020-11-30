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

font-size: 48px;
` 


function checkHeading(heading) {
  function splitHeading(heading) {
    let x = heading.split(" // ")
    let y = x[0] + <br /> + x[1]
    return (
      <>
      {x[0]} <br />
      {x[1]}
      </>
      
    )
  }
  
 return heading.includes("//") ? splitHeading(heading) : heading
}


function Heading(heading) {
    return (
    <HeadingWrapper>
      <HeadingTitle>{checkHeading(heading.title)}</HeadingTitle>
    </HeadingWrapper>
    )
}




  

export default Heading
