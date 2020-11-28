import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle, css, keyframes } from 'styled-components'






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
    padding: 1px;
    background: ${props.active ? '#19293A' : '#E2E4E6'};
    height: ${props.active ? '748px;' : '663px;'};
    width: ${props.active ? '536px;' : '434px;'};
    box-shadow: 0px 0px 20px #19293A80;
    border-radius: 10px;    
    margin-top: auto;
    margin-bottom: auto;

  &:hover{
    box-shadow: 0px 20px 40px #19293A80;
      cursor: pointer;
      animation: ${borderAnimationRule};
  }

  p {
    color: ${props.active ? '#E2E4E6' : '#19293A'};
  }
`


const TextBox = styled.p`
    font: italic normal 600 30px Open Sans;
    color: ${props.active ? '#E2E4E6' : '#19293A'};
    font-size: ${props.active ? '30px;' : '25px;'};
    text-align: center;
    padding-left: 60px;
    padding-right: 60px;
    padding-top: ${props.active ? '64px;' : '64px;'};
    letter-spacing: 0px;

&:hover{
      animation: ${textAnimationRule};
    }
`

const DisplayImage = styled.img`
    padding-top: 31px;
    max-width: ${props.active ? 'none' : '35%'};
    max-height: ${props.active ? 'none' : '35%'};
`

const DisplayImageWrapper = styled.div`
    padding-left: 40%;
`


const NameWrapper = styled.p`

    text-align: center;
    letter-spacing: 0px;
    color: ${props.active ? '#E2E4E6' : '#19293A'};


    &:first-line {
        padding-top: 16px;
        font: normal normal bold 21px/38px Open Sans;
        color: ${props.active ? '#19293A' : '#E2E4E6'};
    
  }

    &:hover  {
        animation: ${nameAnimationRule};
    }
`


    return (
        <RefCardWrapper>
            <RefCardShape onClick={()=>{alert('clicked!')}}>
                    <TextBox >{props.text}</TextBox>
                <DisplayImageWrapper>
                    <DisplayImage src={props.image} alt="display-image" />
                </DisplayImageWrapper>
                <NameWrapper>{props.name}<br />{props.job}</NameWrapper>
            </RefCardShape>
    </RefCardWrapper>
    )
}

export default RefCard
