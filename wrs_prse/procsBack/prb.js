const express = require('express');
const router = express.Router();

router.get('/procesenBkWords', (req, res) => {
    // ask people questions
    res.send("ok")
})

router.get('/procesenBkSent', (req, res) => {
    // procsses words
    res.send("ok")
})

module.exports = router;