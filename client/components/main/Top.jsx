import React from 'react'
import Arrow from './Arrow.jsx'

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
            <Arrow name="About"/>
        </div>
    )
}

export default Top