import React from 'react'
import styled from 'styled-components'
import CardLinkComponent from './CardLinkComponent'
import Heading from './Heading'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import FlipCardsComponent from './FlipCardsComponent'
import FlipCardsComponent2 from './FlipCardsComponent2'



const PageThreeWrapper = styled.div `
  position: inherit; 
  z-index: -4;
  width: 100%;
  height: 100vh;
`

const HeadingWrapper = styled.div `
  width: 50%;
` 

const PageThreeNav = styled.nav `
  width: 25%;
  padding-left: 300px;
  font-size: 20px;
  text-align: center;
  padding-bottom: 25px;
  text-decoration: none;

  a{
    display: inline-block;
    margin-left: 5%;
    margin-right: 5%;
    text-decoration: none;
   color: #19293A;

  &:hover{
    font-weight:bold;
  }
}
` 

const Button = styled.button`
    font-family: Open Sans;
    font-size: 20px;
    width: 25%;
    text-align: center;
    background: white;
    border: solid 0px white;
    border-bottom: solid 1px lightGray;

    &:hover{
      border-bottom: solid 1px red;
      pointer: cursor;
      font-weight: 600;
    }
      }
`

const NavWrapper = styled.div`
padding-right: 300px;
padding-left: 300px;
`



function PageThree() {
  return (
  <PageThreeWrapper> 
      <HeadingWrapper>
        <Heading title={'Some of our // recent projects'} />
      </HeadingWrapper>
    <PageThreeNav />
    <br/>

        <Router>
      <>
      <NavWrapper>
      <Button> <Link to='/' style={{color: 'black', textDecoration: 'none'}}> All  </Link> </Button>
      <Button> <Link to='/otherPage' style={{color: 'black', textDecoration: 'none'}}> Branding  </Link> </Button>
      <Button> <Link to='/otherPage' style={{color: 'black', textDecoration: 'none'}}> Web Design  </Link> </Button>
      <Button> <Link to='/otherPage' style={{color: 'black', textDecoration: 'none'}}> Digital Marketing  </Link> </Button>
      </NavWrapper>
            <Switch>
              <Route exact path='/' component={FlipCardsComponent} />
              <Route exact path='/otherPage' component={FlipCardsComponent2}  />
            </Switch>
      </>
    </Router>
        <CardLinkComponent link={"See all work"} padding={true} />
  </PageThreeWrapper>
  )
}

export default PageThree

