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
            <div>
                <h4>Address</h4>
                <ul className="address-ul">
                    <li>Street: {address.street}</li>
                    <li>Suburb: {address.suburb}</li>
                    <li>City: {address.city}</li>
                    <li>Postcode: {address.postCode}</li>
                </ul>
            </div>
            <MapContainer address={address}/>
        </div>
    )
}

export default Contact
