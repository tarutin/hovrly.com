import React from 'react'
import ContentLoader from 'react-content-loader'
import Theme from '../../components/misc/theme'

class Loader extends React.Component {
    render() {
        return (
            <ContentLoader
                speed={2}
                height={20}
                backgroundColor={ Theme.get() === 'dark' ? '#2a2e33' : '#f5f6f7' }
                foregroundColor={ Theme.get() === 'dark' ? '#546070' : '#eee' }
                style={{ width: this.props.width, borderRadius: '0px' }}
                {...this.props}
            >
                <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
            </ContentLoader>
        )
    }
}

export default Loader
