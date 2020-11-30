import React from 'react'
import LinkBlockComponent from './LinkBlockComponent'
import styled from 'styled-components'
import { device } from './Breakpoints';

function NavColumns(props) {


const Row = styled.div`

  @media ${device.laptop} { 
    padding-left: 1vh;
    padding-right: 30vh; 
    line-height: 1.3;
  }

  @media ${device.desktop} { 
    padding-left: 77px;
    padding-right: 228px; 
    line-height: 1.5;
}

  &::after {
  content: ""
  clear: both;
  width: 50%;
  display: table;
  }
`
  
const Column = styled.div`
  float: right;
  width ${(props.pageTwo ? "25%" : "17%")}; 

  color: #19293A;
  font-size: 21px;
  letter-spacing: 2.1px;

  @media ${device.laptop} { 
    padding-top: 10vh;
  }

  @media ${device.desktop} { 
    padding-top: 200px;
  }
`

    if (props.pageTwo) {
    return (
    <Row>
        <Column span='1'>
            <LinkBlockComponent title={"MARKETING"} link={["Digital", "Market Research"]} />
        </Column>
        <Column span='2'>
            <LinkBlockComponent title={"BRAND"} link={["Brand Strategy Logo", "Name Identity",  "Collateral"]} />
            <LinkBlockComponent title={"DEVELOPMENT"} link={["eCommerce Web", "Development", "Mobile Apps"]} />
        </Column>
    </Row>
    )
    }

    else return (
    <Row>
        <Column span='3'>
            <LinkBlockComponent title={"QUESTIONS?"} link={["Call Us", "0121 345 678", "Email Us", "info@digitalspaniel.co.uk"]} />
        </Column>
        <Column span='1'>
            <LinkBlockComponent title={"SERVICES"} link={["Brand", "Development",  "Marketing"]} />
        </Column>
        <Column span='2'>
            <LinkBlockComponent title={"EXPLORE"} link={["Services", "Work", "About", "Blog", "Career"]} />
        </Column>
    </Row>
    )
}

export default NavColumns
