const express = require('express');
const router = express.Router();
const proc = require('./process.js')

// Question Sections
router.get('/procsentArQues', (req, res) => {
    if(req.headers.referer === "https://ar.procsent.com/"){
        res.send(data)
        res.end();
    } else {
        return false
    }
})
router.get('/procsentEnQues', (req, res) => {
    if(req.headers.referer === "https://procsent.com/" || req.headers.referer === "https://en.procsent.com/"){
        res.send(data)
        res.end();
    } else {
        return false
    }
})
// END One

// Process Section
router.get('/procsentAr', (req, res) => {
    if(req.headers.referer === "https://ar.procsent.com/"){
        var cObj = req.query.obj
        var cs = req.query.cs
        var blo = req.query.blo
        if(blo === true){
            var nwda = proc.psc(cObj , cs)
            res.send(nwda)
        } else {
            res.send(cs)
        }
    } else {
        return false
    }
})

router.get('/procsentEn', (req, res) => {
    if(req.headers.referer === "https://procsent.com/" || req.headers.referer === "https://en.procsent.com/"){
        res.send(data)
        res.end();
    } else {
        return false
    }
})
// END Two

module.exports = router;