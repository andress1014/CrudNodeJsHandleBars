const express = require('express')
const router = express.Router()


router.get('/nosotros', (req, res) => {
    res.send('nosotros')
})

module.exports = router