import React from 'react'
import styled,{ keyframes } from 'styled-components'



const fade = keyframes `
0% {
  opacity: 0%
}

100% {
  opacity: 100%
}
`

const Square = styled.div`
position: absolute;
top: 0;
right: 0;
width: 300px;
height: 300px;
background: red;
animation: ${fade}  0.5s linear; 


a {
 
        z-index: 999;
        opacity: 1;
    }
`


function HamburgerMenu() {
    return (
        <Square>
            HELLOOOO
            <a as="link"  href="#test" >testestesss</a>
            <a href="#test"> testststststs</a>
        </Square>
    )
}

export default HamburgerMenu
