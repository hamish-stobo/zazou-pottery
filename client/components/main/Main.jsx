import React from 'react'
import Top from './Top.jsx'
import About from './About.jsx'
import Services from './Services.jsx'
import Gallery from './Gallery.jsx'
import Contact from './Contact.jsx'

const Main = () => {
    return (
        <div>
            <Top id="Top" />
            <About id="About"/>
            <Services id="Services"/>
            <Gallery id="Gallery"/>
            <Contact id="Contact"/>
        </div>
    )
}

export default Main