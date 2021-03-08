const express = require('express');
const router = express.Router();
const DivBodyMenu = require('./tBody.js')
const exeJs = require('./exeJs.js')

router.get('/', (req, res) => {
    var koc = req.cookies.inb
    if (koc === undefined) {
        res.redirect('/')
    } else {
        var fCk = exeJs.execuateJs(koc)
        if (fCk == false) {
            res.redirect('/')
        } else {
            if (fCk.case === true) {
                var username = fCk.num
                var info = fCk.info
                res.send(DivBodyMenu.tBody({ inf: info, un: username }))
            } else {
                res.redirect('/')
            }
        }
    }
})

module.exports = router;