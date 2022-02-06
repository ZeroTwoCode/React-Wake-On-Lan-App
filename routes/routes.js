const express = require('express')
const router = express.Router()

router.post('/wake', require('./wol'))

module.exports = router