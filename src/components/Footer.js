import React, {useContext} from 'react'
import styled from 'styled-components'
import { TestContext } from '../App'


const FooterWrapper = styled.div `
position: inherit; 
background: black;
width: 100%;
height: 28px;

color: #50647380;
` 

function Footer() {

    const nameTest = useContext(TestContext)

    return (
        <FooterWrapper>
            Copyright © Digital Spaniel 2019. All rights reserved
        </FooterWrapper>
    )
}

export default Footer
