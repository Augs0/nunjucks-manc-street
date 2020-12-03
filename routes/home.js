let express = require('express')
let router = express.Router()

router.get('/', async function (req, res, next) {
    let data = {
        message: 'Manchester Street Art!',
        layout: 'layout.njk',
        title: 'Manchester Street Art'
    }

    res.render('index.njk', data)
})

module.exports = router