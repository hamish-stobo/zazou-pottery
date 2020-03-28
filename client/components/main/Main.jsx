import React, { useState } from 'react'
import About from './About.jsx'
import Services from './Services.jsx'
import Gallery from './Gallery.jsx'
import Contact from './contact/Contact.jsx'

const Main = () => {
    const [message, setMessage] = useState('')

    const passIndex = i => {
        i = i.toString()
        setMessage(i)
    }

    return (
        <div className="main-wrapper">
            <About />
            <Services />
            <Gallery passIndex={passIndex} />
            <Contact message={message} />
        </div>
    )
}

export default Main