import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import config from '../../config'
import DonateCoin from '../../components/donatecoin'

function Donate() {

    useEffect(() => {
        document.title = `${config.title}. Support Us`
    })

    return (
        <div>
            <h1>Support Us</h1>
            <DonateCoin coin='btc' width='50%'/>
            <DonateCoin coin='eth' width='60%'/>
            <h1><Link to='/'>&larr;</Link></h1>
        </div>
    )
}

export default Donate
