import React, { useState } from 'react'
import SliderContent from './SliderContent'
import Slide from './Slide.jsx'

const images = [
    'https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1415&q=80',
    'https://images.unsplash.com/photo-1526304760382-3591d3840148?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
]

const Slider = () => {
    const getWidth = () => window.innerWidth
    const [state, setState] = useState({
        translate: 0,
        transition: 0.45
      })
    const { translate, transition } = state
    return (
        <div className="slider-wrapper">
            <SliderContent 
                translate={translate}
                transition={transition}
                width={getWidth() + images.length} 
            >
            {images.map((slide, idx) => (
                <Slide key={slide + idx} content={slide} />
            ))}
            </SliderContent>
        </div>
    )
}

export default Slider