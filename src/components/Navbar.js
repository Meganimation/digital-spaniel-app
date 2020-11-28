import React from 'react'
import styled from 'styled-components'



const LogoWrapper = styled.div `
 padding-left: 20vh;
 padding-top 34px;
 display: inline-block;
` 

const NavbarWrapper = styled.div `
` 

const LogoImg = styled.img `
 max-height: 81px;
`

const Nav = styled.nav `
 float: right;
 padding-top: 63px;
 text-align: center;
 width: 50%;

 a {
    margin: 5%;
    color: white;
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
      }
      
      &:active {
        color: red;
      }
   }
`


function Navbar() {
    return (
<NavbarWrapper>
            <LogoWrapper>
                <LogoImg src="logo.png"  alt="logo"/> 
            </LogoWrapper>
    <Nav> 
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
    </Nav>
</NavbarWrapper>
    )
}

export default Navbar
