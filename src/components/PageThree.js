import React from 'react'
import styled from 'styled-components'
import CardLinkComponent from './CardLinkComponent'
import Heading from './Heading'



const PageThreeWrapper = styled.div `
  position: inherit; 
  z-index: -4;
  width: 100%;
  height: 100vh;
`

const HeadingWrapper = styled.div `
  width: 50%;
` 

const PageThreeNav = styled.nav `
  width: 70%;
  padding-left: 300px;
  font-size: 20px;
  text-decoration: underline;

  a{

  margin-right: 5%;

  &:hover{
    font-weight:bold;
    text-decoration-color: purple;
  }
}
` 

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

const ImageBack= styled.div`
  position: relative;
  z-index: -1;
  top: -455px;
  display: inline-block;
  background: red;
`


function PageThree() {
  return (
  <PageThreeWrapper> 
      <HeadingWrapper>
        <Heading title={'Some of our recent projects'} />
      </HeadingWrapper>
    <PageThreeNav> 
        <a href="#All">All</a>
        <a href="#Branding">Branding</a>
        <a href="#WebDesign">Web Design</a>
        <a href="#DigitalMarketing">Digital Marketing</a>
    </PageThreeNav>
    <RowOne>
        <Image src="whellies01.png" alt="whellies" />
        <Image src="newspaper02.png" alt="whellies" />  
        <Image src="makerek.png" alt="whellies" />
    </RowOne>
    <RowTwo>
        <Image src="newspaper.png" alt="whellies" />
        <Image src="rider01.png" alt="whellies" />
    </RowTwo>
        <CardLinkComponent link={"See all work"} padding={true} />
  </PageThreeWrapper>
  )
}

export default PageThree

