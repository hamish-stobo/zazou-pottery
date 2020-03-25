import React from 'react';
import Layout from "./layout/Layout.jsx"
import Main from "./main/Main.jsx"
import Top from "./main/Top.jsx"

const App = () => (
    <>
        <Top id="Top" />
        <Layout><Main /></Layout>
    </>
)

export default App;