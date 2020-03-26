import React from 'react'



const Dot = ({ active, handleClick, i }) => {
    const dotStyle = {
        background: `${active ? 'black' : 'white'}`
    }
    
    return (
        <span 
            className="dot" 
            style={dotStyle}
            onClick={() => handleClick(i)}
        > </span>
    )
}
  
  const Dots = ({ slides, activeIndex, handleClick }) => {
    return (
    <div className="dots-container">
      {slides.map((slide, i) => (
        <Dot key={slide} active={activeIndex === i} handleClick={handleClick} i={i}/>
      ))} 
    </div>
      )
}
  

export default Dots
