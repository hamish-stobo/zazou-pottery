import React from 'react'
import About from './About.jsx'
import Services from './Services.jsx'
import Gallery from './Gallery.jsx'
import Contact from './Contact.jsx'

const Main = () => {
    return (
        <div className="main-wrapper">
            <About />
            <Services />
            <Gallery />
            <Contact />
        </div>
    )
}

export default Main