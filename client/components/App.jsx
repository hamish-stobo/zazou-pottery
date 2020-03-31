import React, { useState } from 'react';
import Layout from "./layout/Layout.jsx"
import Main from "./main/Main.jsx"
import Top from "./main/top/Top.jsx"

const App = () => {
    const [selectedNavItem, setSelectedNavItem] = useState('')
    const selected = navItem => {
        setSelectedNavItem(navItem)
    }

    return (
    <>
        <Top selected={selected} id="Top" />
        <Layout selectedItem={selectedNavItem}><Main selected={selected}/></Layout>
    </>
    )
}

export default App;