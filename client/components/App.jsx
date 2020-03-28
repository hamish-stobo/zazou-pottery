import React from 'react';
import Layout from "./layout/Layout.jsx"
import Main from "./main/Main.jsx"
import Top from "./main/top/Top.jsx"

const App = () => (
    <>
        <Top id="Top" />
        <Layout><Main /></Layout>
    </>
)

export default App;