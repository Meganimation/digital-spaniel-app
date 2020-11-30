import React from 'react'
import styled from 'styled-components'
import { device } from './Breakpoints';
import Heading from './Heading'
import BodyText from './BodyText'
import CardLinkConmponent from './CardLinkComponent'




Card.defaultProps = {
    title: 'This is the default title for the Card',
    text: 'This is the default text for the card',
    link: 'This is the default link for the card',
  }


const CardWrapper = styled.section `

@media ${device.laptop} { 
    padding-left: 20vh;
    padding-right: 20vh;
    position: relative;
  }

@media ${device.desktop} { 
    padding-left: 300px;
    padding-right: 241px;
    position: relative;
  }
` 




function Card(card) {
    return (
      <>
    <Heading title={card.title}/>
    <CardWrapper>
    <BodyText text={card.text} padding={true} />       
    <CardLinkConmponent link={card.link}/>
    </CardWrapper>
    </>
    )
}


  

export default Card
