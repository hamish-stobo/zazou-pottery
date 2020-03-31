import React from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

const Layout = props => {
    return (
        <>
            <Navbar selectedItem={props.selectedItem} />{props.children}<Footer />
        </>
    )
}

export default Layout
