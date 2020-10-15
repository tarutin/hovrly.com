const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const fetch = require('node-fetch')
const config = require('./config')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})

// app.use('/api', require('./routes/user'))

app.get('/ping', (req, res) => {
    res.send('/pong')
})

app.get('/version', async (req, res) => {
    await sleep(1000)
    await fetch('https://raw.githubusercontent.com/tarutin/hovrly/master/package.json')
        .then(res => res.json())
        .then(json => {
            res.send({version: json.version})
        })
})


app.get('/donate/getcoin/:coin', async (req, res) => {
    await sleep(1000);
    res.send({addr: config.donate[req.params.coin]})
})

if(!config.isDev) {
    app.use('/static', express.static(path.resolve(__dirname, '..', 'build', 'static')))
    app.get('*', function(req, res, next) {
        res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
    })
}

app.listen(config.port, () => {
    console.log(`server on http://localhost:${config.port}`)
})

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}
