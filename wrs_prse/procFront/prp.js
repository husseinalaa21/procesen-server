const express = require('express');
const router = express.Router();

router.get('/geQprocsEnt', (req, res) => {
    res.send(data)
    res.end();
})

router.get('/geWprocsEnt', (req, res) => {
    // procsses words
    res.send("ok")
})

module.exports = router;