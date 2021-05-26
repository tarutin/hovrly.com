import React from 'react'
import config from '../../config'
import Loader from '../misc/loader'

class DonateCoin extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            loaded: false,
            coin: props.coin.toUpperCase(),
            address: '',
            network: '',
        }
    }

    async componentDidMount() {
        try {
            let response = await fetch(`${config.api}/donate/getcoin/${this.props.coin}`)
            let json = await response.json()

            this.setState({
                loaded: true,
                address: json.address,
                network: json.network
            })
        }
        catch(error) {
            console.log(error)
        }
    }


    render() {
        if(!this.state.loaded) {
            return (
                <p>
                    {this.state.coin} <Loader width='20%'/><br/>
                    <Loader width={this.props.loaderwidth}/>
                </p>
            )
        }

        return (
            <p>
                {this.state.coin} <small>(Network: {this.state.network})</small><br/>
                <small>{this.state.address}</small>
            </p>
        )
    }
}

export default DonateCoin;
