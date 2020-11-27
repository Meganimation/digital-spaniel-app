import React from 'react'
import styled from 'styled-components'
import { FaBeer } from 'react-icons/fa';


LinkBlockComponent.defaultProps = {
    title: 'defaulttttt',
  }


  const Link = styled.a `
  color: #506473;

  span {
    opacity: 0%
}

}

  &:hover {
      color: #506493;

      span {
          opacity: 100%
      }
  }

  `


function LinkBlockComponent(props) {
    return (
        <div>
            <h3>{props.title}</h3>
    <a>{props.link.map((link) => {return <Link><p>{link}<span> <FaBeer/></span></p></Link>})}</a>
            
        </div>
    )
}

export default LinkBlockComponent
