const express = require('express');
const app = express();
const path = require('path')
var cookieParser = require('cookie-parser')
app.use(cookieParser())

const http = require('http').Server(app);
const io = require('socket.io')(http);

const loginBody = require('./public/divLogin.js')

var cklom = require('./cklom/app.js');
var procfront = require('./wrs_prse/procFront/prp.js')
var procback = require('./wrs_prse/procsBack/prb.js')
var httoJs = require('./pu@=inDiv/app.js')

app.use(express.static(path.join(__dirname, 'public')));

app.use('/doLogin', cklom);
app.use('/pc', procfront);
app.use('/bc', procback)
app.use('/home', httoJs)

//req.headers.origin
//req.headers.referer

app.get('/', (req, res) => {
    var verinf = req.query.wxp
    try {
        if(verinf === 'wtoacclog') {
            return res.send(loginBody.tBody(
                `<div id="alertWarnning" >
                <div class="wrongAcess">
                    <div onclick="hshWar()" class="wrongAcess_log"> <img src="./styleMain/times-solid.svg" width="16px" class="ccloosWarn"></i> </div>
                    <div class="wrongAcess_text"> The password or username is invalid . </div>
                </div>
            </div>`
            ))
        }else if(verinf === 'wtoacclg') {
            return res.send(loginBody.tBody(
                `
            <div id="alertWarnning" >
                <div class="wrongAcess">
                    <div onclick="hshWar()" class="wrongAcess_log"> <img src="./styleMain/times-solid.svg" width="16px" class="ccloosWarn"></i> </div>
                    <div class="wrongAcess_text"> The password or username is invalid </div>
                </div>
            </div>`
            ))
        }else if(verinf.length > 0){
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

io.on('connection', socket => {
    console.log(" say hello to my litter frinde ! ");
    socket.on('processAr',e=>{
        socket.emit("processAr-re",'Done!')
    })

})

const port = process.env.PORT || 4200;

http.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));