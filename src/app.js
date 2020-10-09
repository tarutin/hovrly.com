const config = require('./config')
const compression = require('compression')
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use('/static', express.static(__dirname + '/static'))
app.use(compression())

app.get('/', function (req, res) {
    res.render('index', { config: config, meta: null })
})

app.get('/donate', function (req, res) {
    res.render('donate', {
        config: config,
        meta: { title: 'Donate' }
    })
})

app.get('*', function (req, res) {
    res.render('404', {
        config: config,
        meta: { title: '404' }
    })
})


app.listen(port, () => {
    console.log(`Server on http://localhost:${port}`)
})
