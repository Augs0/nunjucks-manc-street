let express = require('express')
let router = express.Router()

router.get('/', async function (req, res, next) {
    let data = {
        message: 'Manchester Locations!',
        layout: 'layout.njk',
        title: 'Manchester Locations'
    }

    res.render('locations.njk', data)
})

module.exports = router