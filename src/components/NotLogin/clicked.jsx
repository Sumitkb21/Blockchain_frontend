import React from 'react'

import "./home.css"

const Clicked = ({clickedImage}) => {
  return (
    <div>
        <div className="image-box" key={clickedImage._id}>
        <img src={clickedImage.image.url} alt={clickedImage.name} />
      </div>
      
    </div>
  )
}

export default Clicked
