const express = require('express');
const router = express.Router();
const path = require('path')

router.get('/geQprocsEnt', (req, res) => {
    // ask people questions
    var data = [
        { nameQuestion: '  ', answers: [], another: false, idQ: 'dWc243df', },
        { nameQuestion: '  ', answers: [], another: true, idQ: 'dWc243df', }
    ]
    //var fullUrl = req.protocol + '://' + req.get('host');
    //data.push(fullUrl)
    //var ip = req.headers["x-real-ip"]
    //data.push(ip)
    //data.push(req.hostname) * will send procsent-server-husseinalaa.vercel.app { IMPORTANT }
    //data.push(req.originalUrl)
    //data.push(req.baseUrl) /* send null!!!!? whay mybe important ! */
    // data.push(req.path) same req.originalUrl he send /sendMeDataR just!
    // data.push(req.cookies) with cookie-parser we wanted 
    //data.push(req.body)
    //data.push(req.xhr)
    res.send(data)
    res.end();
})

router.get('/geWprocsEnt', (req, res) => {
    // procsses words 
    res.send("ok")
})

module.exports = router;