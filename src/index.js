import ReactDOM from 'react-dom'
import React from 'react'
import App from './components/app'

import './index.html'
import './firebase.js'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App />, document.getElementById('root'))
