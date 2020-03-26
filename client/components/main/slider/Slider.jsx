import React, { useState, useEffect, useRef } from 'react'
import SliderContent from './SliderContent'
import Slide from './Slide.jsx'
import SliderArrow from './SliderArrow'
import Dots from './Dots.jsx'

const slides = [
    'https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1415&q=80',
    'https://images.unsplash.com/photo-1526304760382-3591d3840148?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1519233181562-35b0b8bb2b1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1553523292-1140e57d4f87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1552344284-834039a82932?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1576873866239-7d7fd7402e1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
    'https://images.unsplash.com/photo-1583655446990-0e21c2bfb7f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'
]

const getWidth = () => window.innerWidth

const Slider = () => {

    const firstSlide = slides[0]
    const secondSlide = slides[1]
    const lastSlide = slides[slides.length - 1]

    const [state, setState] = useState({
        activeSlide: 0,
        translate: getWidth(),
        transition: 0.45,
        _slides: [lastSlide, firstSlide, secondSlide]
      })

    const { activeSlide, translate, transition, _slides } = state

    const transitionRef = useRef()
    const resizeRef = useRef()

    useEffect(() => {
      transitionRef.current = smoothTransition
      resizeRef.current = handleResize
    })

    useEffect(() => {

      const smooth = e => {
        if (e.target.className.includes('slider-content')) {
          transitionRef.current()
        }
      }

      const resize = () => {
        resizeRef.current()
      }

      const transitionEnd = window.addEventListener('transitionend', smooth)
      const onResize = window.addEventListener('resize', resize)

      return () => {
        window.removeEventListener('transitionend', transitionEnd)
        window.removeEventListener('resize', onResize)
      }
    }, [])

    useEffect(() => {
      if (transition === 0) setState({ ...state, transition: 0.45 })
    }, [transition])
  
    const handleResize = () => {
      setState({ ...state, translate: getWidth(), transition: 0 })
    }
  
    const smoothTransition = () => {
      let _slides = []
  
      // We're at the last slide.
      if (activeSlide === slides.length - 1)
        _slides = [slides[slides.length - 2], lastSlide, firstSlide]
      // We're back at the first slide. Just reset to how it was on initial render
      else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide]
      // Create an array of the previous last slide, and the next two slides that follow it.
      else _slides = slides.slice(activeSlide - 1, activeSlide + 2)
  
      setState({
        ...state,
        _slides,
        transition: 0,
        translate: getWidth()
      })
    }
    
    const nextSlide = () =>
    setState({
      ...state,
      translate: translate + getWidth(),
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
    })

  const prevSlide = () =>
    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
    })

    const dragToScroll = e =>{
      console.log('event ', e.clientX)
      setState({
        ...state,
        translate: translate * activeSlide + e.clientX
      })
    }
    console.log(state)
    return (
        <div className="slider-wrapper">
            <SliderContent 
                translate={translate}
                transition={transition}
                width={getWidth() * _slides.length} 
                dragToScroll={dragToScroll}
            >
            {_slides.map((slide, idx) => (
                <Slide width={getWidth()} key={slide + idx} content={slide} />
            ))}
            </SliderContent>
            <SliderArrow direction="left" handleClick={prevSlide}/>
            <SliderArrow direction="right" handleClick={nextSlide} />

            <Dots slides={slides} activeIndex={activeSlide} />
        </div>
    )
}

export default Slider