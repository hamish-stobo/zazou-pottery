import React from 'react'

const Top = () => {
    return (
        <div className="top-wrapper">
            <h1 className="top-header fade-in">Zazou Pottery</h1>
            <ul class="slideshow">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className="section-scroll">
                <span className="section-name fade-in">About Us</span>
                <a className="scroll-arrow" data-scroll-arrow="" href="#about">
                    <img src="images/arrow.svg" />
                </a>
            </div>
        </div>
    )
}

export default Top