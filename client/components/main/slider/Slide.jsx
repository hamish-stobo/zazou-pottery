import React from 'react'

const Slide = ({ content, width }) => {
    content = `url(${content})`
    width = `${width}px`
    return (
        <>
            <div style={{backgroundImage: content, width: width}} className="slidey">
            </div>
        </>
    )
}

export default Slide
