import React from 'react'
import ReactDOM from 'react-dom'
import './pages/_app/index.css'
import App from './pages/_app'
import * as worker from './utils/worker'

ReactDOM.render(<App/>, document.getElementById('root'))

worker.unregister()
