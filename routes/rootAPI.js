
const router = require('express').Router()
const path = require('path')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html", (err, data) => {
        if (err) throw new Error('File not found')
        else data
    }))
})

module.exports = router