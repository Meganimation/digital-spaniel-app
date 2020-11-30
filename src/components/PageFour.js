import React from 'react'
import styled from 'styled-components'
import BodyText from './BodyText'
import Heading from './Heading'



const defaultProps = {
	slides : []
};



function PageFour(props) {


const PageFourWrapper = styled.div `
    position: inherit; 
    width: 100%;
` 
  
const TextHeader = styled.div `
    text-align: center;
    padding-top: 150px;
`
  
const TextWrapper = styled.div`
    padding-left: 605px;
    padding-right: 605px;
`
  
const CarouselWrapper = styled.div`
  max-height: 1200px;
  display: inline-grid;
  grid-auto-flow: column;
  grid-template-rows: auto;
  grid-template-columns: auto;
  grid-gap: 4vw;
  overflow-x: scroll;
  scroll-snap-type: x proximity;
  scrollbar-width: none;
  width: 100%;
  margin-bottom: 0;
  padding-bottom: 0;
  -ms-overflow-style: none;
   &::-webkit-scrollbar {
    display: none;
  }
`;
  
const CarouselItem = styled.div`
  height: 50%;
  padding: 10vw 23vw;
  background: url(${({src})=>src});
  background-size: 1000px 1000px;
  background-repeat: no-repeat;
  background-position: center center;
  
  &:hover{
    opacity: 0;
  }
`;
  

  return (
    <PageFourWrapper > 
        <TextHeader>
            <Heading title="Case Studies" /> 
              <TextWrapper >
                <BodyText text="Every project is different. We like to work collaboratively with our clients, tailoring each project to suit the needs of you and your business." />
              </TextWrapper>
        </TextHeader>
        <CarouselWrapper>
		          {props.slides.map((item, index) => <CarouselItem key={`slide-${index}`} src={item.src} alt={item.alt}></CarouselItem>)}
  	    </CarouselWrapper>
    </PageFourWrapper>
  )
}

export default PageFour

