import React from 'react'
import LinkBlockComponent from './LinkBlockComponent'
import styled from 'styled-components'






function NavColumns(props) {


    const Row = styled.div`
padding-left: 77px;
&::after {
content: ""
clear: both;
width: 50%;
display: table;
}
`

const Column = styled.div`
background: yellow;
float: right;
width ${(props.pageTwo ? "25%" : "17%")}; 
height: 75vh;
`

    if (props.pageTwo) {
    return (
    <Row>
      <Column span='1'>
        <LinkBlockComponent title={"MARKETING"} link={["Digtal", "Market Research"]} />
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
        <LinkBlockComponent title={"QUESTIONS?"} link={["Call Us", "Email Us"]} />
        </Column>
        <Column span='1'>
          <LinkBlockComponent title={"EXPLORE"} link={["Sevices", "Work", "About", "Blog", "Career"]} />
        </Column>
        <Column span='2'>
        <LinkBlockComponent title={"SERVICES"} link={["Brand", "Development",  "Marketing"]} />
        </Column>
        </Row>

    )
}

export default NavColumns
