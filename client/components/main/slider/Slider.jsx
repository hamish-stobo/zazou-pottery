import React, { useState, useEffect, useRef } from 'react'
import SliderContent from './SliderContent'
import Slide from './Slide.jsx'
import SliderArrow from './SliderArrow'
import Dots from './Dots.jsx'
import OrderIcon from './OrderIcon.jsx'
import slides from '../../../constants/imagesFilePaths'

const getWidth = () => window.innerWidth

const Slider = ({passIndex, passWinWidth}) => {

    const firstSlide = slides[0]
    const secondSlide = slides[1]
    const lastSlide = slides[slides.length - 1]

    passWinWidth(getWidth())

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
      passWinWidth(getWidth())
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

    const dragToScroll = width => {
      const windowWidth = getWidth()
      if(width > windowWidth / 3) {
        nextSlide()
      } else if(-width > windowWidth / 3) {
        prevSlide()
      }
    }
    return (
        <div className="slider-wrapper"
        >
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
            {
            getWidth() > 600 
            ?
            <>
              <SliderArrow direction="left" handleClick={prevSlide}/>
              <SliderArrow direction="right" handleClick={nextSlide} />
            </>
            : null
            }
            <OrderIcon i={activeSlide} filepath={slides[activeSlide]} passIndex={passIndex} />
            <Dots slides={slides} activeIndex={activeSlide} />
        </div>
    )
}

export default Slider