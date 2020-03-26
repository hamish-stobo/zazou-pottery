import React from 'react'



const Dot = ({ active }) => {
    const dotStyle = {
        background: `${active ? 'black' : 'white'}`
    }
    return (
        <span 
            className="dot" 
            style={dotStyle}
        > </span>
    )
}
  
  const Dots = ({ slides, activeIndex }) => {
    return (
    <div className="dots-container">
      {slides.map((slide, i) => (
        <Dot key={slide} active={activeIndex === i} />
      ))} 
    </div>
      )
}
  

export default Dots
