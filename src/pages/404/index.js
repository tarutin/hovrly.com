import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'

function NotFound() {

    useEffect(() => {
        document.title = `${config.title}. 404`
    })

    return (
        <div>
            <h1>404</h1>
            <h1><Link to='/'>&larr;</Link></h1>
        </div>
    )
}

export default NotFound
