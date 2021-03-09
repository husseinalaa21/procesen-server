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
    console.log(req.headers.origin)
    var cObj = req.query.obj
    var cs = req.query.cs
    var blo = req.query.blo
    try {
        if(req.headers.origin === "https://ar.procsent.com" || req.headers.origin === "https://server.procsent.com"){
            if(blo === true){
                //var nwda = proc.psc(cObj , cs)
                res.send(cs)
            } else {
                res.send(cs)
            }
        } else {
            res.send("false")
        }
    } catch(err) {
        res.send(cs)
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