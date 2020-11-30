import React from 'react'
import styled from 'styled-components'
import { device } from './Breakpoints';


BodyText.defaultProps = {
    text: 'This is the default text.',
  }


function BodyText(props) {


const BodyTextWrapper= styled.section `
  padding-top: ${(props.padding ? "20px" : "0px")}; 
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