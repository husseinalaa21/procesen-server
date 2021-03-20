const express = require('express');
const app = express();
const path = require('path')
var cookieParser = require('cookie-parser')
app.use(cookieParser())
var cors = require('cors');
app.use(cors({
    origin: ['https://procesen.com', 'https://server.procesen.com','https://ar.procesen.com' , 'https://en.procesen.com', 'http://localhost:3000', 'https://callus.procesen.com/callus-ar/index.html','https://callus.procesen.com/callus-en/index.html']
}));

const loginBody = require('./public/divLogin.js')

var cklom = require('./cklom/app.js');
var procfront = require('./wrs_prse/procFront/prp.js')
var procback = require('./wrs_prse/procsBack/prb.js')
var httoJs = require('./pu@=inDiv/app.js')
var mesFu = require('./feedMessage/app.js')

app.use(express.static(path.join(__dirname, 'public')));

app.use('/doLogin', cklom);
app.use('/pc', procfront);
app.use('/bc', procback)
app.use('/home', httoJs)
app.use('/FeedMessage', mesFu)

//req.headers.origin
//req.headers.referer

app.get('/', (req, res) => {
    var verinf = req.query.wxp
    try {
        if (verinf === 'wtoacclog') {
            return res.send(loginBody.tBody(
                `<div id="alertWarnning" >
                <div class="wrongAcess">
                    <div onclick="hshWar()" class="wrongAcess_log"> <img src="./styleMain/times-solid.svg" width="16px" class="ccloosWarn"></i> </div>
                    <div class="wrongAcess_text"> The password or username is invalid . </div>
                </div>
            </div>`
            ))
        } else if (verinf === 'wtoacclg') {
            return res.send(loginBody.tBody(
                `
            <div id="alertWarnning" >
                <div class="wrongAcess">
                    <div onclick="hshWar()" class="wrongAcess_log"> <img src="./styleMain/times-solid.svg" width="16px" class="ccloosWarn"></i> </div>
                    <div class="wrongAcess_text"> The password or username is invalid </div>
                </div>
            </div>`
            ))
        } else if (verinf.length > 0) {
            return res.send(loginBody.tBody(
                `
            <div id="alertWarnning" >
                <div class="wrongAcess">
                    <div class="wrongAcess_text"> [404] Error  </div>
                </div>
            </div>`
            ))
        } else {
            res.send(loginBody.tBody(''))
        }
    } catch (err) {
        res.send(loginBody.tBody(''))
    }
});

const port = process.env.PORT || 4200;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));