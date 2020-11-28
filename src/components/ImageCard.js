import React from 'react'


ImageCard.defaultProps = {
    imagesource: 'This is the ImageCard default prop.'
  }


function ImageCard(props) {
  
    return (
        <>
            {props.imagesource.map((image) => {return <li><img src={image} alt={"image-card"} /></li>})}
        </>
    )
}

export default ImageCard
