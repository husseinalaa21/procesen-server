const express = require('express');
const router = express.Router();
var doWr = require('./doWr.js')

router.get('/procesenBkWords', (req, res) => {
    // ask people questions
    try {
        var ty = req.query.ty
        var nam = req.query.na
        var isd = req.query.isdW
        var xword = req.query.xwor
        var nword = req.query.nwor
        var lan = req.query.lan
        var pe = doWr.doWr({na : nam , id : isd ,ty : ty , nx : xword ,nn : nword , lan})
        if(pe === false){
            res.send('false')
        } else {
            res.send(pe)
        }
    } catch {
        res.send("false")
    }
})

router.get('/procesenBkSent', (req, res) => {
    try {
        var ty = req.query.ty
        var nam = req.query.na
        var isd = req.query.isdW
        var xword = req.query.xwor
        var nword = req.query.nwor
        var lan = req.query.lan
        var pe = doWr.doSen({na : nam , id : isd ,ty : ty , nx : xword ,nn : nword , lan})
        if(pe === false){
            res.send('false')
        } else {
            res.send(pe)
        }
    } catch {
        res.send("false")
    }
})

router.get('/procesenBkSetUp', (req, res) => {
    try {
        var nam = req.query.na
        var isd = req.query.isdW
        var pe = doWr.setUpData({na : nam , id : isd})
        if(pe === false){
            res.send('false')
        } else {
            res.send(pe)
        }
    } catch {
        res.send("false")
    }
})

module.exports = router;