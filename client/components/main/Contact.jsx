import React from 'react'
import ContactForm from './ContactForm.jsx'

const Contact = ({message}) => {
    return (
        <div className="contact-wrapper" id="contact">
            <h4>Contact me!</h4>
            <ContactForm preFill={message} />
            <p>Contact details for the Studio (phone number, address)</p>
        </div>
    )
}

export default Contact
