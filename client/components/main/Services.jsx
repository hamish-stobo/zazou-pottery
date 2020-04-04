import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'

const Services = ({selected}) => {
    return (
        <div className="services-wrapper" id="services">
            <Controller>
            <img className="services-img" src="https://images.unsplash.com/photo-1556707809-0c56f26b5dae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Woman making pottery"/>
            <Scene triggerHook={0.9} triggerElement="#services h2" duration={700} classToggle={['.sdefault1', 'fade-mainEls-in']} reverse={true} indicators={false}>
                {() => (
               <h2 className="sdefault1">Products & Services</h2>
            )}
            </Scene>
            <Scene triggerHook={0.9} triggerElement="#services p" duration={700} classToggle={['.sdefault2', 'fade-mainEls-in']} reverse={true} indicators={false}>
                {() => (
                <p className="sdefault2">
                Jacou makes beautiful, bespoke pottery. 
                Whether for your office, home or retail store, Jacou can craft something special for you.
                Pottery also makes for a thoughtful gift. Jacou can decorate your peice with custom messages, anniversary dates and unique themes to tailor your piece to your liking.
                <a onClick={() => selected('Contact')} href="#contact"> Contact Jacou</a> to request a custom piece, or pick something from the <a onClick={() => selected('Catalogue')} href="#catalogue">catalogue:</a> 
            </p>
            )}
            </Scene>
            </Controller>
        </div>
    )
}

export default Services
