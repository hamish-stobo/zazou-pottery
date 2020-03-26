import React from 'react'
import leftArrow from 'images/sliderArrowLeft.svg'
import rightArrow from 'images/sliderArrowRight.svg'

const Arrow = ({ direction, handleClick }) => (
  const arrowStyle = {
    display: flex;
    position: absolute;
    top: 50%;
    ${direction === 'right' ? `right: 25px` : `left: 25px`};
    height: 50px;
    width: 50px;
    justify-content: center;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    align-items: center;
    transition: transform ease-in 0.1s;
    &:hover {
      transform: scale(1.1);
    }
    img {
      transform: translateX(${direction === 'left' ? '-2' : '2'}px);
      &:focus {
        outline: 0;
      }
  }
  <div
    onClick={handleClick}
  >
    {direction === 'right' ? <img src={rightArrow} /> : <img src={leftArrow} />}
  </div>
)

export default Arrow