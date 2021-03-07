const express = require('express');
const router = express.Router();
const path = require('path')
const kcehcn = require('./maGet.js')
const xcehcn = require('./paGet.js')
const webLog = require('./webLog.js')
const DivBodyMenu = require('../pu@=inDiv/tBody.js')

router.get('/', (req, res) => {
    var uNs = req.query.username
    var pAs = req.query.pass
    if (uNs.length < 20 && uNs.length > 0) {
        if (pAs.length < 20 && pAs.length > 0) {

            var xNum = Math.floor(Math.random() * 20);
            try {
                //var cxreal = req.headers["x-real-ip"]
                var cxreal = '129.3121.001'
            } catch (err) {
                return res.redirect('/')
            }

            var usn = kcehcn.c_cT(uNs, pAs, xNum)
            var xusn = usn[0]
            // نشفر الكلمة و من ثم نفك تشفيرها للتأكد من عدم الاختراق
            var xnsu = usn[1]
            var rVerf = xcehcn.c_pT(xnsu, usn[2], usn[3], cxreal)
            if (xusn == true) {
                if (rVerf[0] == true) {
                    var webLoff = webLog.tPoData(rVerf[1] ,rVerf[3], rVerf[2])
                    console.log(rVerf[1])
                    if (webLoff == true) {
                        //res.sendFile(path.join(__dirname, '../pu@=inDiv/tBody.js'))
                        // return him to main page
                        res.send(DivBodyMenu.tBody(usn[2]))
                    } else {
                        console.log(webLoff)
                        return res.redirect('/?wxp=wtoacclg')
                    }
                } else {
                    console.log(webLoff)
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