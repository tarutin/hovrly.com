import config from '../../config'

export default {

    get: () => {
        let hours = new Date().getHours()
        return hours >= config.nightAt.end && hours < config.nightAt.start ? 'light' : 'dark'
    },

}
