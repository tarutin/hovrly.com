import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'
import Footer from '../../components/footer'

function NotFound() {

    useEffect(() => {
        document.title = `${config.title}. 404`
    })

    return (
        <>
            <main>
                <h1>404</h1>
                <h1><Link to='/'>&larr;</Link></h1>
            </main>
            <Footer/>
        </>
    )
}

export default NotFound
