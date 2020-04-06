import React, { useState, useEffect } from 'react';
import Layout from "./layout/Layout.jsx"
import Main from "./main/Main.jsx"
import Top from "./main/top/Top.jsx"

const App = () => {
    const [selectedNavItem, setSelectedNavItem] = useState('')
    const [winWidth, setWinWidth] = useState(null)

    const selected = navItem => {
        setSelectedNavItem(navItem)
    }

    const getWinWidth = width => {
        setWinWidth(width)
    }

    return (
    <>
        <Top selected={selected} id="Top" />
        <Layout winWidth={winWidth} selectedItem={selectedNavItem}><Main passWinWidth={getWinWidth} selected={selected}/></Layout>
    </>
    )
}

export default App;