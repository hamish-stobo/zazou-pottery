import React, { useState } from 'react'

const SliderContent = ({ translate, transition, width, children, dragToScroll }) => {
    const divStyle = {
        transform: `translateX(-${translate}px)`,
        transition: `transform ease-out ${transition}s`,
        width: `${width}px`
    }

    const [entered, setEntered] = useState(false)
    const [start, setStart] = useState(null)

    const calcDifference = (a, b) => {
        if(!entered) { return }

        else {
        dragToScroll(a - b)
    }
}

    return (
        <>
        <div style={divStyle} 
             className="slider-content"
             draggable='false'
             onDragStart={() => false}
             onMouseEnter={() => setEntered(true)}
             onMouseLeave={() => setEntered(false)}
             onMouseDown={e => setStart(e.clientX)}
             onMouseUp={e => {
                 calcDifference(start, e.clientX)
                }}
             >
            {children}
        </div>
        </>
    )
}

export default SliderContent