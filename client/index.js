import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import { ParallaxProvider } from 'react-skrollr'

ReactDOM.render(
    <ParallaxProvider
        init={{
          smoothScrollingDuration: 500,
          smoothScrolling: true,
          forceHeight: false
        }}
      ><App /></ParallaxProvider>
    , document.getElementById("app"))