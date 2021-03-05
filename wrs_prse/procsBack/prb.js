const express = require('express');
const router = express.Router();
const path = require('path')

router.get('/geQprocsEnt', (req, res) => {
    // ask people questions 
    res.send("ok")
})

router.get('/geWprocsEnt', (req, res) => {
    // procsses words
    res.send("ok")
})

module.exports = router;