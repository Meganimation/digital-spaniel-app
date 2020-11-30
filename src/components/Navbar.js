import React, {useState} from 'react'
import styled from 'styled-components'
import CardLinkComponent from './CardLinkComponent'
import { device } from './Breakpoints';
import HamburgerMenu from './HamburgerMenu'
import { FaHamburger } from 'react-icons/fa';



let Ham = (<svg viewBox="0 0 100 80" width="40" height="40">
  <rect width="100" height="20"></rect>
  <rect y="30" width="100" height="20"></rect>
  <rect y="60" width="100" height="20"></rect>
</svg>)



const LogoWrapper = styled.div `
display: inline-block;

@media ${device.laptop} { 
    padding-left: 20vh;
    padding-top 3vh;
}


 @media ${device.desktop} { 
    padding-left: 300px;
    padding-top 34px;
    display: inline-block;
 }
` 

const NavbarWrapper = styled.div `

@media ${device.laptop} { 
    padding-right: 10vh;
}

@media ${device.desktop} { 
    padding-right: 150px;
 }

` 

const LogoImg = styled.img `
 max-height: 81px;
`

const Nav = styled.nav `
 float: right;
 padding-top 34px;
 text-align: center;
 width: 50%;



 @media ${device.laptop} { 


    section {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 999;
        border: 0px;
        padding-top: 3vh;
        padding-right: 10vh;
        fill: white;
    }

    a {
        position: absolute;
        z-index: -999;
        opacity: 0;
    }



 @media ${device.desktop} { 

    section {
        position: absolute;
        z-index: -999;
    }

    a {
        position: relative;
        opacity: 1;

        z-index: 0;
        margin: 4%;
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

     }



      
   }
`





const Button = styled.section`
background: none;

   &:hover{
       fill: darkGray;
       cursor: pointer;
   }
`


function Navbar() {

    const [menu, setMenu] = useState(false)

    const showMenu=()=>{
    if (menu == false) {
        return null
    }
    else return (
    <>
 <HamburgerMenu />
    </>)
    }


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


        <Button onClick={()=>[setMenu(!menu)]}>{Ham}</Button>  
        {showMenu()}

    </Nav>
</NavbarWrapper>
    )
}

export default Navbar
