import React, {createContext} from 'react'
import './App.css';
import styled from 'styled-components'
import { createGlobalStyle, css, keyframes } from 'styled-components'
import Navbar from './components/Navbar'
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import PageThree from './components/PageThree'
import PageFour from './components/PageFour'
import PageFive from './components/PageFive'
import PageSix from './components/PageSix'
import Footer from './components/Footer'
import { CarouselData }from './components/CarouselData';



export const TestContext = createContext()



const GlobalStyle = createGlobalStyle`

  body {
    font-family: 'Open Sans', sans-serif;
  }

  h1:first-line {
    font-weight: 500;
    font-size: 48px
    font: ITC Avant Garde Gothic Pro, Bold;
    color: #19293A;
  }

  h1 {
    font-weight: 500;
    font-size: 48px
    font-family: Avant Garde Gothic Pro;
    color: #506473;
    line-height: 1.0;
  }
  `



const AppWrapper = styled.div `
  overflow-x: hidden;
` 



function App(name) {



  return (
    <AppWrapper>
    <GlobalStyle />
    <TestContext.Provider value={name} >
        <Navbar />
            <PageOne/>
            <PageTwo title={"What are // we capable of"} 
            text={'By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement.'}
            link={"Our Process"} 
            pageTwo={true}
            />
            <PageThree />
            <PageFour slides={CarouselData}/>
            <PageFive />
            <PageSix />
            <PageTwo title="We’re a brands best friend" text={false} link="Let's Talk" pageTwo={false} />
            <Footer />
    </TestContext.Provider>
    </AppWrapper>
  );
}


App.defaultProps = {
  name: 'user'
}

export default App;
