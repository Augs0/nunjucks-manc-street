let express = require('express')
let router = express.Router()

router.get('/', async function (req, res, next) {
    let data = {
        message: 'About Manchester Artists',
        layout: 'layout.njk',
        title: 'About Manchester Artists'
    }

    res.render('artists.njk', data)
})

module.exports = router