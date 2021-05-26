const { sleep } = require('../utils')
const fetch = require('node-fetch')
const config = require('../config')

module.exports = {

    getPong: (req, res, next) => {
        return res.send('/pong')
    },

    getVersion: async (req, res) => {
        // await sleep(10000)
        await fetch(config.appVersionUrl)
            .then(res => res.json())
            .then(json => {
                res.send({version: json.version})
            })
    },

    getDonateCoin: async (req, res) => {
        await sleep(1000);
        res.send(config.donate[req.params.coin])
    },
}
