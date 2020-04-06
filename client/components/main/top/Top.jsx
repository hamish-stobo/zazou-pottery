import React from 'react'
import Arrow from './Arrow.jsx'

const Top = ({selected}) => {
    return (
        <div className="top-wrapper" id="top-first-sect">
            <h1 className="top-header fade-in">Z<span className="top-header-text">AZOU</span> P<span className="top-header-text">OTTERY</span> S<span className="top-header-text">TUDIO</span></h1>
            <Arrow selected={selected}/>
            <div className="top-cover fade-in"> </div>
        </div>
    )
}

export default Top