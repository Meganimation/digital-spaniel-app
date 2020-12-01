import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle, css, keyframes } from 'styled-components'
import { device } from './Breakpoints';






function RefCard(props) {

const RefCardWrapper = styled.div`
    padding-left: 1%;
    margin-top: auto;
    margin-bottom: auto;
`

const borderAnimation = keyframes`
    50% {
    
    }
  
    100% {
        background: ${!props.active ? '#19293A' : '#E2E4E6'};
        height: ${!props.active ? '748px;' : '663px;'};
        width: ${!props.active ? '536px;' : '434px;'};

        p{
            
        }
  }
}
`


const textAnimation = keyframes`
    50% {
     
    }

    100% {
        color: ${!props.active ? '#E2E4E6' : '#19293A'};
        font-size: ${!props.active ? '30px;' : '26px;'};
        padding-top: ${!props.active ? '64px;' : '64px;'};
    }
}
`


const nameAnimation = keyframes`


    50% {
  
    }

    100% {
        color: ${!props.active ? 'white' : '#19293A'};
        font-size: ${props.active ? '19px' : '25px'};
        }
    }
}
`


const borderAnimationRule = css`
    ${borderAnimation} 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
`

const textAnimationRule = css`
    ${textAnimation} 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
`

const nameAnimationRule = css`
    ${nameAnimation} 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
`

const RefCardShape = styled.div`

@media ${device.laptop} { 

    padding: 1px;
    background: ${props.active ? '#19293A' : '#E2E4E6'};
    height: ${props.active ? '55vh;' : '53vh;'};
    width: ${props.active ? '45vh;' : '43vh;'};
    box-shadow: 0px 0px 20px #19293A80;
    border-radius: 10px;    
    margin-top: auto;
    margin-bottom: auto;

    p {
        font: italic normal 600 25px Open Sans;
        text-align: center;
        padding-left: 60px;
        padding-right: 60px;
        color: ${props.active ? '#E2E4E6' : '#19293A'};
        padding-top: ${props.active ? '64px;' : '64px;'};
        font-size: ${props.active ? '2.2vh;' : '2vh;'};
        letter-spacing: 0px;
    }

    img {
        padding-left: 40%;
        max-width: 20%;
    }

     &:hover{
        box-shadow: 0px 20px 40px #19293A80;
        cursor: pointer;
        animation: ${borderAnimationRule};

  p {
        animation: ${textAnimationRule};
  }

  h6 {
        animation: ${nameAnimationRule};
        color: ${props.active ? '#E2E4E6' : '#19293A'};
  }
}



  h6 {
    text-align: center;
    letter-spacing: 0px;
    color: ${props.active ? '#E2E4E6' : '#19293A'};
    font-size: ${!props.active ? '25px' : '19px'};
    font-weight: 100;
    font: normal normal 17px/38px Open Sans;
    line-height: 1.6;

    &:first-line {
        padding-top: 16px;
        font-weight: 800;
    }

}



@media ${device.desktop} { 
   padding: 1px;
   background: ${props.active ? '#19293A' : '#E2E4E6'};
   height: ${props.active ? '748px;' : '663px;'};
   width: ${props.active ? '536px;' : '434px;'};
   box-shadow: 0px 0px 20px #19293A80;
   border-radius: 10px;    
   margin-top: auto;
   margin-bottom: auto;

    p {
        font: italic normal 600 25px Open Sans;
        text-align: center;
        padding-left: 60px;
        padding-right: 60px;
        color: ${props.active ? '#E2E4E6' : '#19293A'};
        padding-top: ${props.active ? '64px;' : '64px;'};
        font-size: ${props.active ? '30px;' : '26px;'};
        letter-spacing: 0px;
    }

    img {
        padding-left: 40%;
        max-width: 20%;
    }

  &:hover{
        box-shadow: 0px 20px 40px #19293A80;
        cursor: pointer;
        animation: ${borderAnimationRule};

  p {
        animation: ${textAnimationRule};
  }

  h6 {
        animation: ${nameAnimationRule};
        color: ${props.active ? '#E2E4E6' : '#19293A'};
  }
}



  h6 {
    text-align: center;
    letter-spacing: 0px;
    color: ${props.active ? '#E2E4E6' : '#19293A'};
    font-size: ${!props.active ? '25px' : '19px'};
    font-weight: 100;
    font: normal normal 17px/38px Open Sans;
    line-height: 1.6;

    &:first-line {
        padding-top: 16px;
        font-weight: 800;
    }
}
`

const DisplayImage = styled.img`
`

const DisplayImageWrapper = styled.div`
    padding-left: 40%;
`


const NameWrapper = styled.h6`


`
    return (
        <RefCardWrapper>
            <RefCardShape onClick={(e)=>props.makeActive(e)}>
                    <p >{props.text}</p>

                    <DisplayImage src={props.image} alt="display-image" />

                <NameWrapper>{props.name}<br />{props.job}</NameWrapper>
            </RefCardShape>
    </RefCardWrapper>
    )
}

export default RefCard
