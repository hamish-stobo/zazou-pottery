import React from 'react'
import { Parallax } from 'react-skrollr'

const About = () => {
    return (
        <div className="about-wrapper" id="about">
             <Parallax data={{
                'data-95p': 'opacity: 1;',
                'data-bottom-top': 'opacity: 0.5;'
                }}>
                <img className="about-image" src="http://zazoupottery.co.nz/highslide/images/large/25348280_1926057704101055_1206403772006483410_n.jpg" alt="Photo of studio"/>
            </Parallax>
            <Parallax data={{
                'data-80p': 'transform: translateX(0);',
                'data-bottom-top': 'transform: translateX(-50vw);'
                }}>
            <h2>My Story</h2>
            </Parallax>
            <Parallax data={{
                'data-85p': 'transform: translateX(0);',
                'data-bottom-top': 'transform: translateX(50vw);'
                }}>
            <p>Zazou Pottery Studio was started in 808BC. 
                A labour of love, Jacou pours her passion and creativity into her work, 
                and with over 293 years of experience, she has perfected her craft. <br/>The studio, situated in beautiful Wanaka, New Zealand, houses many examples
                of Jacou's work. Blah blah blah good info about the studio give the readers
                a sense of authenticity.
            </p>
            </Parallax>
        </div>
    )
}

export default About
