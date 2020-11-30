import React from 'react'
import styled,{ keyframes } from 'styled-components'



const slideIn = keyframes `
0% {
  opacity: 0%
  right: 0vh;
  width: 0vh;
}

100% {
  opacity: 90%
  right: 00px;  
  width: 30vw;
}
`

const HamburgerMenuWrapper = styled.div`
opacity: 90%;
  position: fixed;
  top: 0vh;
  right: 00px;
  width: 30vw;
  height: 100%;
  background: #19293A;
  color: ##E2E4E6;
  animation: ${slideIn}  0.2s linear; 
  
  
  ul a {
          position: relative;
          color: #E2E4E6;
          text-decoration: none;
          font: normal normal 600 38px/58px Open Sans;
          display: inline-block;
          line-height: 10vh;
          top: 8vh;
          z-index: 999;
          opacity: 1;
  
          &:hover{
              color: white;
              font-weight: 800;
          }
  
          &:active{
              color: darkGray;
              font-weight: 800;
          }
  
          &:active:after{
              color: blue;
              font-weight: 100;
          }
      }
`

const LinkWrapper = styled.div`

`

const Item = styled.img`
max-width: 50%;
height: auto;
padding-top: 10vh;
`


function HamburgerMenu() {
    return (
        <HamburgerMenuWrapper>
            <Item src="logo.png" alt='logo' />
            <LinkWrapper >
            <ul><a href="#test"> Services </a></ul>
            <ul> <a href="#test"> Work </a></ul>
            <ul> <a href="#test"> About </a></ul>
            <ul> <a href="#test"> Blog</a></ul>
            <ul> <a href="#test"> Contact</a></ul>
            </LinkWrapper>
        </HamburgerMenuWrapper>
    )
}

export default HamburgerMenu
