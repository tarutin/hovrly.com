const router = require('express').Router()
const api = require('../controllers/api')

router.get('/ping', api.getPong)
router.get('/version', api.getVersion)
router.get('/donate/getcoin/:coin', api.getDonateCoin)

module.exports = router
