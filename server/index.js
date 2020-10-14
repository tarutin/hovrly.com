const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
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
    res.send({s: '/pong'})
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
