import React, { useState, useEffect } from 'react'

const Footer = () => {
    const [year, setYear] = useState('')
    useEffect(() => {
        const date = new Date().getFullYear()
        setYear(date)
    })

    return (
        <div className="bottom-nav footer">
            <a href="https://www.linkedin.com/in/hamishstobo/" target="_blank"><span>&copy; <span>{`Hamish Stobo ${year}`}</span></span></a>
            <p>Icons made by
                <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons"> Those Icons</a>, 
                <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons"> Smashicons</a> and 
                <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect"> Pixel perfect</a> from  
                <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
            </p>
        </div>
    )
}

export default Footer
