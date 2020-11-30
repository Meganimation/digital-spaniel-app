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
  width: 50%;
  padding-left: 300px;
  font-size: 20px;
  display: inline-block;
  text-align: center;
  padding-bottom: 25px;

  a{
    display: inline-block;
    margin-left: 5%;
    margin-right: 5%;
    text-decoration: none;
   color: #19293A;

  &:hover{
    font-weight:bold;
  }
}
` 

const Button = styled.button`
    font-family: Open Sans;
    font-size: 20px;
    width: 25%;
    text-align: center;
    background: white;
    text-decoration-color: lightGray;
    border: solid 0px white;
    border-bottom: solid 1px lightGray;

    &:hover{
      border-bottom: solid 1px red;
      pointer: cursor;
      font-weight: 600;
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


function PageThree() {
  return (
  <PageThreeWrapper> 
      <HeadingWrapper>
        <Heading title={'Some of our // recent projects'} />
      </HeadingWrapper>
    <PageThreeNav> 
        {/* <a href="#All">All</a>
        <a href="#Branding">Branding</a>
        <a href="#WebDesign">Web Design</a>
        <a href="#DigitalMarketing">Digital Marketing</a> */}
        <Button>All</Button>
        <Button>Branding</Button>
        <Button>Web Design</Button>
        <Button>Digital Marketing</Button>
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

