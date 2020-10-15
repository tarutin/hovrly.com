import React from 'react'
import ContentLoader from 'react-content-loader'

class Loader extends React.Component {
    render() {
        return (
            <ContentLoader
                speed={2}
                height={20}
                backgroundColor="#2a2e33"
                foregroundColor="#546070"
                style={{ width: this.props.width, borderRadius: '0px' }}
                {...this.props}
            >
                <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
            </ContentLoader>
        )
    }
}

export default Loader
