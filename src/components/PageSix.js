import React from 'react'
import styled from 'styled-components'
import Heading from './Heading'



const PageSixWrapper = styled.div `

position: inherit; 
background: red;
width: 100%;
height: 100vh;
  ` 

  const HeadingWrapper = styled.div `

padding-right: 50%;
` 


  

function PageSix() {
  return (<>
    <PageSixWrapper >  
    <HeadingWrapper> 
      <Heading title={"Kind words from our client"}/> 
      </HeadingWrapper> 
      </PageSixWrapper>
    </>
  )
}

export default PageSix

