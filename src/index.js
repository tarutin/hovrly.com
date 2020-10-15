import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as worker from './utils/worker'

ReactDOM.render(<App />, document.getElementById('root'))

worker.unregister()
