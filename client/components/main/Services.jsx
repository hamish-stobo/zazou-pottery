import React from 'react'

const Services = ({selected}) => {
    return (
        <div className="services-wrapper" id="services">
            <h2>Products & Services</h2>
            <p>
                Jacou makes beautiful, bespoke pottery. 
                Whether for your office, home or retail store, Jacou can craft something special for you.
                Pottery also makes for a thoughtful gift. Jacou can decorate your peice with custom messages,
                anniversary dates and unique themes to tailor your peice to your liking.
                <a onClick={() => selected('Contact')} href="#contact"> Contact Jacou</a> to request a custom peice, or pick something from the <a onClick={() => selected('Catalogue')} href="#catalogue">catalogue:</a> 
            </p>
        </div>
    )
}

export default Services
