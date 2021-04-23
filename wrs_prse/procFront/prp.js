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
    var coffeA = pscar.buffuJs(false, true)
    var coffeB = pscar.buffuJs(false, false)
    try {
        var tDe = JSON.parse(req.query.pr)
        var xs = tDe[0].replace(/0S1/g, '£').replace(/0D8/g, '$').replace(/0W1/g, '&').replace(/0X6/g, '#').replace(/0G2/g, '%'),
            arA = tDe[1],
            arB = tDe[2],
            trs = tDe[3],
            arBNew = tDe[4];

        var procesen = new Promise((res, rej) => {
            var swn = pro.sen({ xs, arA, arB, trs, arBNew, sysDatA: coffeA, sysDatB: coffeB })
            if (swn !== false) {
                res({ tex: swn[0].replace(/\u00A3/g, '0S1').replace(/\$/g, '0D8').replace(/\&/g, '0W1').replace(/\#/g, '0X6').replace(/\%/g, '0G2'), texs: swn[1].replace(/\u00A3/g, '0S1').replace(/\$/g, '0D8').replace(/\&/g, '0W1').replace(/\#/g, '0X6').replace(/\%/g, '0G2').replace(/\*/g, '7H0') })
                // Proplem from weting processein function
                rej({ tex: false })
            } else {
                // Proplem from processing function
                rej({ tex: false })
            }
        })
        procesen.then(e => {
            res.send([e.tex, e.texs])
        }).catch(e => {
            res.send([e.tex])
        })
    } catch (err) {
        // Proplem with array from user
        res.send([false])
    }
})

router.get('/procsentEn', (req, res) => {
    //console.log(`access once here ! from ${req.headers.origin} Or ${req.headers.referer}`)
    var coffeMain = psc.buffuJs(true)
    res.send(coffeMain)
})
router.get('/procsentEn/sen/', (req, res) => {
    var coffeA = psc.buffuJs(false, true)
    var coffeB = psc.buffuJs(false, false)
    try {
        var tDe = JSON.parse(req.query.pr)
        var xs = tDe[0].replace(/0S1/g, '£').replace(/0D8/g, '$').replace(/0W1/g, '&').replace(/0X6/g, '#').replace(/0G2/g, '%'),
            arA = tDe[1],
            arB = tDe[2],
            trs = tDe[3],
            arBNew = tDe[4];

        var procesen = new Promise((res, rej) => {
            var swn = pro.sen({ xs, arA, arB, trs, arBNew, sysDatA: coffeA, sysDatB: coffeB })
            if (swn !== false) {
                res({ tex: swn[0].replace(/\u00A3/g, '0S1').replace(/\$/g, '0D8').replace(/\&/g, '0W1').replace(/\#/g, '0X6').replace(/\%/g, '0G2'), texs: swn[1].replace(/\u00A3/g, '0S1').replace(/\$/g, '0D8').replace(/\&/g, '0W1').replace(/\#/g, '0X6').replace(/\%/g, '0G2').replace(/\*/g, '7H0') })
                // Proplem from weting processein function
                rej({ tex: false })
            } else {
                // Proplem from processing function
                rej({ tex: false })
            }
        })
        procesen.then(e => {
            res.send([e.tex, e.texs])
        }).catch(e => {
            res.send([e.tex])
        })
    } catch {
        // Proplem with array from user
        res.send([false])
    }
})
// END Two

module.exports = router;