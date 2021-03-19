const express = require('express');
const router = express.Router();
const feedMessages = require('./Feed.js')
router.get('/', (req, res) => {
    try {
        var message = req.query.mess
        var formNum = req.query.formNum
        var email = req.query.email
        var username = req.query.name
        var sec = req.query.sec
        feedMessages.getFeed({mess : message , formNum : formNum , email : email , username : username , sec : sec})
        res.sendStatus(200)
    } catch {
        return false
    }
})

module.exports = router;