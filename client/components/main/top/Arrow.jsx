import React from 'react'

const Arrow = ({selected}) => {
    console.log('selected in arrow component, ', selected)
    return (
        <div className="section-scroll fade-in">
            <a href="#about">
                <img onClick={() => selected('About')} src="images/arrow.svg" className="scroll-arrow"/>
            </a>
        </div>
    )
}

export default Arrow
