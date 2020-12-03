let express = require('express')
let router = express.Router()

router.get('/', async function (req, res, next) {
    let data = {
        message: 'About Manchester Street Art',
        layout: 'layout.njk',
        title: 'About Manchester Street Art'
    }

    res.render('about.njk', data)
})

module.exports = router