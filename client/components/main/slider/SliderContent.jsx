import React from 'react'

const SliderContent = ({ translate, transition, width, children, dragToScroll }) => {
    const divStyle = {
        transform: `translateX(-${translate}px)`,
        transition: `transform ease-out ${transition}s`,
        width: `${width}px`
    }


    return (
        <>
        <div style={divStyle} 
             className="slider-content"
             draggable="true" 
             onDrag={e => dragToScroll(e)}>
            {children}
        </div>
        </>
    )
}

export default SliderContent