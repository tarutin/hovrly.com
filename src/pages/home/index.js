import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'
import AppVersion from '../../components/appversion'

function Home() {

    useEffect(() => {
        document.title = config.title
    })

    return (
        <div>
            <h1>
                Hovrly —<br/>
                best partner for disctributed teams
            </h1>
            <p>
                <a href='https://app.hovrly.com/download/mac'>Download for MacOS</a> <AppVersion/>
            </p>
            <p>
                <Link to='/donate'>Donate</Link>
            </p>
        </div>
    )
}

export default Home;
