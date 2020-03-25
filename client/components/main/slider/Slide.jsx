import React from 'react'

const Slide = ({ content }) => {
    content = `url(${content})`
    return (
        <>
            <div style={{backgroundImage: content}} className="slidey">
            </div>
        </>
    )
}

export default Slide
