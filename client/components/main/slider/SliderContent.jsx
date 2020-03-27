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
        // console.log('start', a, 'end', b)
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
            onTouchStart={e => {
                e.persist()
                setEntered(true)
                setStart(e.touches[0].clientX)
            }}
            onTouchEnd={e => {
                e.persist()
                setEntered(true)
                calcDifference(start, e.changedTouches[0].clientX)
               }}
             >
            {children}
        </div>
        </>
    )
}

export default SliderContent