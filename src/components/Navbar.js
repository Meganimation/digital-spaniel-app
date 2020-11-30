import React from 'react'
import styled from 'styled-components'
import CardLinkComponent from './CardLinkComponent'



const LogoWrapper = styled.div `
 padding-left: 300px;
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
 padding-top 34px;
 text-align: center;
 width: 50%;

 a {
    margin: 5%;
    color: white;
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
    text-decoration: none;
      
      &:active {
        color: red;
      }

      &:after {
        text-decoration-color: white;
        border-bottom: solid 4px white;
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
        <CardLinkComponent href="#services" link="Services" /> 
        <CardLinkComponent href="#work" link="Work" /> 
        <CardLinkComponent href="#about" link="About" /> 
        <CardLinkComponent href="#blog" link="Blog" />
        <CardLinkComponent href="#contact" link="Contact" /> 
    </Nav>
</NavbarWrapper>
    )
}

export default Navbar
