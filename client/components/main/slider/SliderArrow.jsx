import React from 'react'

const Arrow = ({ direction, handleClick }) => {
  const arrowDivStyle = {
    right: '25px',
    left: '25px',
    transform: `translateX(${direction === 'left' ? '-2' : '2'}px)`
  }

  const displayRight = () => {
      return direction === 'right' ? delete arrowDivStyle.left : delete arrowDivStyle.right
  }
  displayRight()
  return (
    <div style={arrowDivStyle} className="slider-arrow" onClick={handleClick}>
        {direction === 'right' 
        ? <img src="images/sliderArrowLeft.svg" /> 
        : <img src="images/sliderArrowRight.svg" />
        }
    </div>
  )
}

export default Arrow