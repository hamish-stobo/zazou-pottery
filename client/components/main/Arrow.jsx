import React from 'react'

const Arrow = ({name}) => {
    return (
        <div>
            <div className="section-scroll">
                <span className="section-name fade-in">{name}</span>
                 <a href="#about">
                    <img src="images/arrow.svg" className="scroll-arrow"/>
                </a>
            </div>
        </div>
    )
}

export default Arrow
