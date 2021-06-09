import React from 'react'
import './index.css'

class Footer extends React.Component {

    nowYear() {
        return new Date().getFullYear();
    }

    render() {
        return (
            <footer>
                <span>&copy; Treasy OU, 2018—{this.nowYear()}</span>
                <a href='https://github.com/tarutin/hovrly' target='_blank' rel='noopener noreferrer'>GitHub</a>
            </footer>
        )
    }
}

export default Footer;
