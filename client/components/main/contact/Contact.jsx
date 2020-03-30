import React from 'react'
import ContactForm from './ContactForm.jsx'
import MapContainer from './map/MapContainer.jsx'

const Contact = ({message}) => {
    return (
        <div className="contact-wrapper" id="contact">
            <h4>Contact me!</h4>
            <ContactForm preFill={message} />
            <p>Phone: <a href='tel:+64211111111'>+64211111111</a></p>
            <a href="https://www.facebook.com/zazoupottery">Facebook</a>
            <div className="map-wrapper">
                <MapContainer />
            </div>
        </div>
    )
}

export default Contact
