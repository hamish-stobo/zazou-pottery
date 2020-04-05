import React, {useState, useEffect} from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

const Layout = props => {
    const [isMounted, setIsMounted] = useState(false)
    
    useEffect(() => setIsMounted(true))

    return (
        <>
            <Navbar isMounted={isMounted} selectedItem={props.selectedItem} />{props.children}<Footer />
        </>
    )
}

export default Layout
