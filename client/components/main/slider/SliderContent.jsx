import React from 'react'

const SliderContent = props => {
    return (
        <>
        <style>
        {`
        .slider-content  {
            transform: translateX(-${props.translate}px);
            transition: transform ease-out ${props.transition}s;
            width: ${props.width}px;
        }
        `}
        </style>
        <div className="slider-content">
            {props.children}
        </div>
        </>
    )
}

export default SliderContent