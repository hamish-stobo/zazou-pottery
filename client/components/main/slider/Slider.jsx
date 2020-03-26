import React, { useState } from 'react'
import SliderContent from './SliderContent'
import Slide from './Slide.jsx'
import SliderArrow from './SliderArrow'

const slides = [
    'https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1415&q=80',
    'https://images.unsplash.com/photo-1526304760382-3591d3840148?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
]

const getWidth = () => window.innerWidth

const Slider = () => {
    const [state, setState] = useState({
        activeSlide: 0,
        translate: 0,
        transition: 0.45
      })
    const { activeSlide, translate, transition } = state

    const nextSlide = () => {
        if (activeSlide === slides.length - 1) {
          return setState({
            ...state,
            translate: 0,
            activeSlide: 0
          })
        }
    
        setState({
          ...state,
          activeSlide: activeSlide + 1,
          translate: (activeSlide + 1) * getWidth()
        })
      }
    
      const prevSlide = () => {
        if (activeSlide === 0) {
          return setState({
            ...state,
            translate: (slides.length - 1) * getWidth(),
            activeSlide: slides.length - 1
          })
        }
    
        setState({
          ...state,
          activeSlide: activeSlide - 1,
          translate: (activeSlide - 1) * getWidth()
        })
      }
    return (
        <div className="slider-wrapper">
            <SliderContent 
                translate={translate}
                transition={transition}
                width={getWidth() * slides.length} 
            >
            {slides.map((slide, idx) => (
                <Slide width={getWidth()} key={slide + idx} content={slide} />
            ))}
            </SliderContent>
            <SliderArrow direction="left" handleClick={prevSlide}/>
            <SliderArrow direction="right" handleClick={nextSlide} />
        </div>
    )
}

export default Slider