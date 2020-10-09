const compression = require('compression')
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.use('/static', express.static(__dirname + '/static'))
app.use(compression())

app.get('/', function (req, res) {
    res.render('index')
})

app.get('/donate', function (req, res) {
    res.render('donate')
})

app.get('*', function (req, res) {
    res.render('404')
})


app.listen(port, () => {
    console.log(`Server on http://localhost:${port}`)
})
