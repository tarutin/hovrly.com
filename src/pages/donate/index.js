import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import config from '../../config'

function Donate() {

    useEffect(() => {
        document.title = `${config.title}. Support Us`
    })

    return (
        <div>
            <h1>Support Us</h1>
            <p>BTC — 16xoW1BcBF6KeSCE1B54dWSpU1QifK4Ew2</p>
            <p>ETH — 0xf3a9f3ec48715880e54146bddf8d3e8e338e0bde</p>
            <h1><Link to='/'>&larr;</Link></h1>
        </div>
    )

}

export default Donate
