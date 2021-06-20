import React from 'react'
import config from '../../config'
import Loader from '../misc/loader'

class AppVersion extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            loaded: false,
            version: '',
        }
    }

    async componentDidMount() {
        try {
            let response = await fetch(`${config.api}/version`)
            let json = await response.json()

            this.setState({loaded: true, version: json.version})
        }
        catch(error) {
            console.log(error)
        }
    }


    render() {
        if(!this.state.loaded) {
            return (<Loader width='80px'/>)
        }

        return (
            <small>v{this.state.version}</small>
        )
    }
}

export default AppVersion;
