import React from 'react'
import ContentLoader from 'react-content-loader'
import config from '../../config'

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
        const MyLoader = (props) => (
          <ContentLoader
            speed={2}
            height={30}
            backgroundColor="#2a2e33"
            foregroundColor="#546070"
            style={{ width: this.props.width, borderRadius: '20px' }}
            {...props}
          >
            <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
          </ContentLoader>
        )

        if(!this.state.loaded) {
            return (<p>{this.state.coin}<br/><MyLoader/></p>)
        }

        return (<p>{this.state.coin}<br/><small>{this.state.addr}</small></p>)
    }
}

export default DonateCoin;
