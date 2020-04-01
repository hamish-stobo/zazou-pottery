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
            <h2>Contact me!</h2>
            <ContactForm preFill={message} />
            <div className="icons-wrapper">
                <a href='tel:+64211111111'><img src="images/phone.svg" /></a>
                <a href="https://www.facebook.com/zazoupottery" target="_blank"><img src="images/facebook.svg" /></a>
            </div>
            <div className="address-wrapper">
                <h3>Address</h3>
                <ul className="address-ul">
                    <li>{address.street}</li>
                    <li>{address.suburb}</li>
                    <li>{`${address.city} ${address.postCode}`}</li>
                </ul>
            </div>
            <div className="map-wrapper">
                <MapContainer address={address}/>
            </div>
        </div>
    )
}

export default Contact
