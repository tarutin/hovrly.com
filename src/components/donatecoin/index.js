import React from 'react'
import ContentLoader from 'react-content-loader'
import config from '../../config'
import Loader from '../misc/loader'

class DonateCoin extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            loaded: false,
            coin: props.coin.toUpperCase(),
            addr: '',
        }
    }

    async componentDidMount() {
        try {
            let response = await fetch(`${config.api}/donate/getcoin/${this.props.coin}`)
            let json = await response.json()

            this.setState({loaded: true, addr: json.addr})
        }
        catch(error) {
            console.log(error)
        }
    }


    render() {
        if(!this.state.loaded) {
            return (
                <p>
                    {this.state.coin}<br/>
                    <Loader width={this.props.loaderwidth}/>
                </p>
            )
        }

        return (
            <p>
                {this.state.coin}<br/>
                <small>{this.state.addr}</small>
            </p>
        )
    }
}

export default DonateCoin;
