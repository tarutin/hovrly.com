import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import config from '../../config'
import Footer from '../../components/footer'
import DonateCoin from '../../components/donatecoin'

function Donate() {

    useEffect(() => {
        document.title = `${config.title}. Support Us`
    })

    return (
        <>
            <main>
                <h1>Support Us</h1>
                <DonateCoin coin='btc' loaderwidth='50%'/>
                <DonateCoin coin='eth' loaderwidth='60%'/>
                <h1><Link to='/'>&larr;</Link></h1>
            </main>
            <Footer/>
        </>
    )
}

export default Donate
