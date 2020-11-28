import React from 'react'
import styled from 'styled-components'
import { FaBeer } from 'react-icons/fa';


BodyText.defaultProps = {
    text: 'This is the default text.',
  }


function BodyText(props) {


const BodyTextWrapper= styled.p `
  padding-top: ${(props.padding ? "50px" : "0px")}; 
  font: Open Sans;
  font-size: 21px;
  color: #506473;
  line-height: 160%;
  padding-bottom: 62px;
` 

    return (
        <BodyTextWrapper>{props.text}</BodyTextWrapper>
    )
}

export default BodyText