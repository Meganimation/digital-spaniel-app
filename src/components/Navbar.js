import React, {useState} from 'react'
import styled from 'styled-components'
import CardLinkComponent from './CardLinkComponent'
import { device } from './Breakpoints';
import HamburgerMenu from './HamburgerMenu'
import { FaHamburger } from 'react-icons/fa';
import $ from 'jquery'



let Ham = (<svg viewBox="50 0 50 80" width="80" height="40">
  <rect width="100" height="20"></rect>
  <rect y="30" width="100" height="20"></rect>
  <rect y="60" width="100" height="20"></rect>
</svg>)



const LogoWrapper = styled.div `
display: inline-block;

@media ${device.laptop} { 
    padding-left: 20vh;
    padding-top 3vh;
    opacity: 0;
}


 @media ${device.desktop} { 
    padding-left: 300px;
    padding-top 34px;
    display: inline-block;
    opacity: 1;
 }
` 



const Nav = styled.nav `
float: right;
padding-top 34px;
text-align: center;
width: 50%;



@media ${device.laptop} { 


   section {
       position: fixed;
       top: 0;
       right: 0;
       z-index: 999;
       border: 0px;
       padding-top: 3vh;
       padding-right: 1vh;
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


const LogoImg = styled.img `
 max-height: 81px;
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
    const [position, setPosition] = useState('fixed;')

    const NavbarWrapper = styled.div `
position: ${position};
top: 0;
width: 100%;


@media ${device.laptop} { 
    padding-right: 10vh;
}

@media ${device.desktop} { 
    padding-right: 150px;
    background-color:rgba(0, 0, 0, 0.1);
 }

` 

 

var lastScrollTop = 0;
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        var st = $(this).scrollTop();

        if ((st > '1300') && (menu == false)){
            return setPosition('relative;')

 
        } if ((st < lastScrollTop) && (menu == false)) {
            console.log(st)
            return setPosition('fixed;')
        }
        lastScrollTop = st;
    
    });


    const showMenu=()=>{
    if (menu == false) {
        return null
    }
    else return (
            <>
            <HamburgerMenu />
            </>
            )
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
