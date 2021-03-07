const express = require('express');
const router = express.Router();
const DivBodyMenu = require('./tBody.js')
const exeJs = require('./exeJs.js')

router.get('/', (req, res) => {
    var koc = req.cookies.inb
    if(koc === undefined){
        res.redirect('/')
    } else {
        var fCk = exeJs.execuateJs(koc)
        if(fCk[0] == true){
            res.send(DivBodyMenu.tBody({ud : fCk[1] , un : fCk[2]}))
        } else {
            res.redirect('/')
        }
    }
})

module.exports = router;