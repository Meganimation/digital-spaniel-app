import React from 'react'


ImageCard.defaultProps = {
    imagesource: 'defaulttttt'
  }


function ImageCard(props) {
  
    return (
        <p>
            {props.imagesource.map((image) => {return <li><img src={image} alt={"test"} /></li>})}
        </p>
    )
}

export default ImageCard
