import React from 'react'
import ContactForm from './ContactForm.jsx'
import MapContainer from './map/MapContainer.jsx'

const Contact = ({message}) => {
    const address = {
        street: '10 Dale Street',
        suburb: 'Albert Town',
        city: 'Wanaka',
        postCode: '9382'
    }
    return (
        <div className="contact-wrapper" id="contact">
            <h4>Contact me!</h4>
            <ContactForm preFill={message} />
            <p>Phone: <a href='tel:+64211111111'>+64211111111</a></p>
            <a href="https://www.facebook.com/zazoupottery">Facebook</a>
            <MapContainer address={address}/>
        </div>
    )
}

export default Contact
