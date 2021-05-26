const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const config = require('./config')


if(config.isDev) app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(function (req, res, next) {

    // res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
    // res.header('Expires', '-1')
    // res.header('Pragma', 'no-cache')
    
    res.set('Cache-Control', 'no-store')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})
app.use('/api', require('./routes/api'))

if(!config.isDev) {
    app.set('etag', false)
    app.use('/static', express.static(path.resolve(__dirname, '..', 'build', 'static')))
        
    app.get('*', function(req, res, next) {
        
        // app.use(express.static('/static', {
        //   etag: true, // Just being explicit about the default.
        //   lastModified: true,  // Just being explicit about the default.
        //   setHeaders: (res, path) => {
        //     const hashRegExp = new RegExp('\\.[0-9a-f]{8}\\.')
        // 
        //     if (path.endsWith('.html')) {
        //       // All of the project's HTML files end in .html
        //       res.setHeader('Cache-Control', 'no-cache')
        //     } else if (hashRegExp.test(path)) {
        //       // If the RegExp matched, then we have a versioned URL.
        //       res.setHeader('Cache-Control', 'max-age=31536000')
        //     }
        //   },
        // }))
        
        res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
    })
}

app.listen(config.port, () => {
    console.log(`server on http://localhost:${config.port}`)
})
