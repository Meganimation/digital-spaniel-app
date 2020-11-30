import React, { useState, useRef } from "react";
import styled from 'styled-components'
import Heading from './Heading'
import RefCard from './RefCard'



const PageSixWrapper = styled.div `
  position: inherit; 
  width: 100%;
  height: 100vh;
  padding-right: 300px;
` 

const HeadingWrapper = styled.div `
  padding-right: 50%;
` 


const RefCardWrapper = styled.div `
  display: flex;
  padding-left: 226px;
` 

const ButtonWrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
` 



  
const PageSix= (props) => {


const [activeButton, setActiveButton] = React.useState([false, false, false])

const Button = styled.button `
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 0px 16px;
  height: 34px;
  width: 34px;
  border-radius: 20px;
  border: 2px darkGray;
  background: #C5CACE;

  &:hover{
    cursor: pointer;
    background: #19293A;
  }
` 


  return (<>
    <PageSixWrapper >  
    <HeadingWrapper> 
        <Heading 
        title={"Kind words // from our client"}/> 
        </HeadingWrapper> 
    <RefCardWrapper>
        <RefCard 
        active={activeButton[0]}
        activeButton={activeButton[0]}
        name={"Paul Simon"}
        job={"Founder, MegaCorp"}
        image={"testimonial_face03.png"}
        text={"Working with Digital Spaniel has been a breath of fresh air. Their approach and attitude kept me informed and included from the start. Super pleased with the end results too!"}
        /> 
        <RefCard 
        active={activeButton[1]}
        activeButton={activeButton[1]}
        name={"Johnny B. Goode"}
        job={"CEO, Getting Things Done"}
        image={"testimonial_face01.png"}
        text={"Advice and support from DigiSpan was second to none. Always willing to help and offer advice and solutions. A very good and rapid understanding of our requirements was key to this."}
        /> 
        <RefCard 
        active={activeButton[2]}
        activeButton={activeButton[2]}
        name={"Mary Jane"}
        job={"CEO, Design Matters"}
        image={"testimonial_face01.png"}
        text={"We needed a creative and unique brand which could compete against established products. Digital Spaniel delivered in spades and we’ve seen a huge response to the product launch."}
        /> 
    </RefCardWrapper >
    <ButtonWrapper >
        <Button onClick={()=>{setActiveButton([!activeButton[0], false, false])}}/> 
        <Button onClick={()=>{setActiveButton([false, !activeButton[1], false])}}/> 
        <Button onClick={()=>{setActiveButton([false, false, !activeButton[2]])}}/> 
    </ButtonWrapper >
  
      </PageSixWrapper>
    </>
  )
}

export default PageSix

