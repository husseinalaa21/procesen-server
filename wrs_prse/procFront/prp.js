const express = require('express');
const router = express.Router();
const proc = [
    {"hello world" : "fuck me" },{"elon musk" : " mars and elon like maya khalefa and johne sence ! "}
]

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
    /*try {
        if(req.headers.referer === "http://localhost:3000" || req.headers.origin === "http://localhost:3000"){
            console.log("access once here !")
            res.send(proc)
        } else {
            res.send("false")
        }
    } catch(err) {
        res.send("false")
    }*/
    console.log(`access once here ! from ${req.headers.origin} Or ${req.headers.referer}`)
    res.send(proc)
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