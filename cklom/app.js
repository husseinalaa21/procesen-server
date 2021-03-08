const express = require('express');
const router = express.Router();
const jsUop = require('./jsUfp.js')

router.get('/', (req, res) => {
    var uNs = req.query.username
    var pAs = req.query.pass
    if (uNs.length < 20 && uNs.length > 0) {
        if (pAs.length < 20 && pAs.length > 0) {
            //var cxreal = req.headers["x-real-ip"]
            var cxreal = '129.3121.001'
            var usn = jsUop.uofpm("reqUspr", { nu: uNs, ps: pAs })
            if (usn[0] == true) {
                var rVerf = jsUop.uofpm("iopUs", { nus: usn[1], tNeId: usn[2], tLodId: usn[3], realIp: cxreal })
                if (rVerf[0] == true) {
                    var webLoff = jsUop.tPoData("_pos_ty12--#husUsUnIoJ", rVerf[1])
                    if (webLoff[0] == true) {
                        res.cookie('inb', webLoff[1]);
                        res.redirect('/home')
                    } else {
                        return res.redirect('/?wxp=wtoacclg')
                    }
                } else {
                    return res.redirect('/?wxp=wtoacclg')
                }
            } else {
                return res.redirect('/?wxp=wtoacclog')
            }
        } else {
            return res.redirect('/?wxp=wtoacclog')
        }
    } else {
        return res.redirect('/?wxp=wtoacclog')
    }
})

module.exports = router;