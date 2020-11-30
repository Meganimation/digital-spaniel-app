import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { device } from './Breakpoints';



const RedText= styled.p `

    @media ${device.laptop} { 
    padding-left: 20vh;
    }

    @media ${device.desktop} { 
    padding-left: 300px;
    }
` 


const PageOneWrapper = styled.div `
    height: 100vh;
` 

const LeftSide = styled.div `
    position: absolute;
    top:0;
    left: 50%;
    background: blue;
    width: 50%;
    height: 100vh;
    z-index: -1;

     img{
         height: 100%;
         width: 100%;
        }
` 

const RightSide = styled.div `
    position: absolute;
    top:0;
    right: 50%;
    width: 50%;
    height: 100vh;
    z-index: 1;
` 

const CardWrapper = styled.div `

  @media ${device.laptop} { 
    padding-top: 30vh;
  }

  @media ${device.desktop} { 
    padding-top: 381px;
    }  
` 

      


function PageOne() {

    return (
    <>
        <PageOneWrapper>
            <RightSide>
                <CardWrapper>
                <RedText style = {{color: 'red'}}> BRAND, DEV, ECOM, MARKETING </RedText>
                    <Card
                    title={'We unleash business potential'} 
                    text={'We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance.'}
                    link={"Let's talk"}
                    />
                </CardWrapper>
            </RightSide>

            <LeftSide>
            <img src="SpanielLQ.png"  alt="spanielimage" /> 
            </LeftSide>
        </PageOneWrapper>
    </>
    )
}

export default PageOne
