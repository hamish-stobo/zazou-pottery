import React from 'react'
import About from './About.jsx'
import Services from "./Services.jsx"
import Gallery from "./Gallery.jsx"
import Contact from "./Contact.jsx"

const Main = () => {
    return (
        <div>
            <About id="About"/>
            <Services id="Services"/>
            <Gallery id="Gallery"/>
            <Contact id="Contact"/>
        </div>
    )
}

export default Main