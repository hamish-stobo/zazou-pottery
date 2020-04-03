import React, { useState } from 'react'
import About from './About.jsx'
import Services from './Services.jsx'
import Gallery from './Gallery.jsx'
import Contact from './contact/Contact.jsx'

const Main = ({selected}) => {
    const [state, setState] = useState({
        idx: '',
        filepath: ''
    })

    const passIndex = (i, filepath) => {
        i = i.toString()
        setState({...state, 
            idx: i,
            filepath})
    }

    return (
        <div className="main-wrapper">
            <About />
            <Services selected={selected} />
            <Gallery passIndex={passIndex} />
            <Contact message={state} />
        </div>
    )
}

export default Main