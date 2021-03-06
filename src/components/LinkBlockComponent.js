import React from 'react'
import styled from 'styled-components'
import { FaBeer } from 'react-icons/fa';
import { device } from './Breakpoints';


LinkBlockComponent.defaultProps = {
    title: 'defaulttttt',
  }


const Link = styled.a `
  color: #506473;
  @media ${device.laptop} { 
    font-size: 2vh;
    
  }

  @media ${device.desktop} { 
    font-size: 25px;
  }

  span {
    opacity: 0%;
    }
   
  &:hover {
      color: #506493;
      cursor: pointer;

      span {
          opacity: 100%
           }
    }
`

const LinkBlockHeading = styled.h3`
font-family: normal normal bold 21px/38px ITC Avant Garde Gothic Pro;
`

function LinkBlockComponent(props) {
    return (
        <>
            <LinkBlockHeading>{props.title}</LinkBlockHeading>
            <a>{props.link.map((link) => {return<p><Link>{link}<span> <FaBeer/></span></Link></p>})}</a>       
        </>
    )
}

export default LinkBlockComponent
