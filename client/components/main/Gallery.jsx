import React from 'react'
import Slider from './slider/Slider.jsx'

const Gallery = ({passIndex}) => {
    return (
        <div className="gallery-wrapper" id="catalogue">
        <h2 className="gdefault">Catalogue</h2>
        <Slider passIndex={passIndex} />
        </div>
    )
}

export default Gallery
