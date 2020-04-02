import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'

const About = () => {
    return (
        <div className="about-wrapper" id="about">
            {/* <div id="about-trigger"/> */}
            <Controller>
            <Scene offset={-100} triggerElement="#about img" duration={700} classToggle={['.adefault', 'fade-mainEls-in']} reverse={true} indicators={true}>
                {() => (
                <img className="about-image adefault" src="http://zazoupottery.co.nz/highslide/images/large/25348280_1926057704101055_1206403772006483410_n.jpg" alt="Photo of studio"/>
            )}
            </Scene>
            <Scene offset={-100} triggerElement="#about h2" duration={700} classToggle={['.adefault1', 'fade-mainEls-in']} reverse={true} indicators={true}>
                {() => (
               <h2 className="adefault1">My Story</h2>
            )}
            </Scene>
            <Scene offset={-100} triggerElement="#about p" duration={700} classToggle={['.adefault3', 'fade-mainEls-in']} reverse={true} indicators={true}>
                {() => (
                <p className="adefault3">Zazou Pottery Studio was started in 808BC. 
                A labour of love, Jacou pours her passion and creativity into her work, 
                and with over 293 years of experience, she has perfected her craft. <br/>The studio, situated in beautiful Wanaka, New Zealand, houses many examples
                of Jacou's work. Blah blah blah good info about the studio give the readers
                a sense of authenticity.
                </p>
            )}
            </Scene>
            </Controller>
        </div>
    )
}

export default About
