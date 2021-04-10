const express = require('express');
const router = express.Router();
const psc = require('./buffuJs.js')
const pscar = require('./buffuJsAr.js')
const pro = require('./pro.js')

// Question Sections
router.get('/procsentArQues', (req, res) => {
    if (req.headers.referer === "https://ar.procsent.com/") {
        res.send([])
        res.end();
    } else {
        return false
    }
})
router.get('/procsentEnQues', (req, res) => {
    if (req.headers.referer === "https://procsent.com/" || req.headers.referer === "https://en.procsent.com/") {
        res.send([])
        res.end();
    } else {
        return false
    }
})
// END One

// Process Section
router.get('/procsentAr', (req, res) => {
    //console.log(`access once here ! from ${req.headers.origin} Or ${req.headers.referer}`)
    var coffeMain = pscar.buffuJs(true)
    res.send(coffeMain)
})

router.get('/procsentAr/sen/', (req, res) => {
    var coffeA = psc.buffuJs(false,true)
    var coffeB = psc.buffuJs(false,false)
    var tDe = JSON.parse(req.query.pr)
    var xs = tDe[0],
        arA = tDe[1],
        arB = tDe[2],
        trs = tDe[3],
        arBNew = tDe[4];

    const procesen = new Promise((res, rej) => {
        var swn = pro.sen({ xs, arA, arB, trs, arBNew , sysDatA : coffeA,sysDatB : coffeB})
        if (swn !== false) {
            res({ tex: swn[0], texs: swn[1] })
            rej({ tex: "err", texs: "err" })
        } else {
            rej({ tex: "err", texs: "err" })
        }
    })
    procesen.then(e => {
        res.send([e.tex, e.texs])
    }).catch(e => {
        res.send([e.tex, e.texs])
    })
})

router.get('/procsentEn', (req, res) => {
    //console.log(`access once here ! from ${req.headers.origin} Or ${req.headers.referer}`)
    var coffeMain = psc.buffuJs(true)
    res.send(coffeMain)
})
router.get('/procsentEn/sen/', (req, res) => {
    var coffeA = psc.buffuJs(false,true)
    var coffeB = psc.buffuJs(false,false)
    var tDe = JSON.parse(req.query.pr)
    var xs = tDe[0],
        arA = tDe[1],
        arB = tDe[2],
        trs = tDe[3],
        arBNew = tDe[4];

    const procesen = new Promise((res, rej) => {
        var swn = pro.sen({ xs, arA, arB, trs, arBNew , sysDatA : coffeA,sysDatB : coffeB})
        if (swn !== false) {
            res({ tex: swn[0], texs: swn[1] })
            rej({ tex: "obs", texs: "obs" })
        } else {
            rej({ tex: "err", texs: "err" })
        }
    })
    procesen.then(e => {
        res.send([e.tex, e.texs])
    }).catch(e => {
        res.send([e.tex, e.texs])
    })
})
// END Two

module.exports = router;