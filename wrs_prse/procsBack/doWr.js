var jBasicMain = require('../../cklom/jsUfp.js')
var procwrit = require('../process/buffar.js')
var infoData = []
var numAds = 0
var didSenn = false

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'procesen.server@gmail.com',
        pass: 'Procesen2020hussein'
    }
});

function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? ' مسائاً ' : ' صباحاً ',
        months = ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمير'],
        days = ['الاحد', 'الاثنين', 'الثلاثاء', 'الاربعاء', 'الخميس', 'الجمعه', 'السبت'];
    return days[d.getDay()] + '  , ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + ' | ' + hours + ':' + minutes + ampm;

}
function doWr(y) {
    try {
        var verInfo = jBasicMain.cecData("_bac21er", { us: y.na, id: y.id })
        if (verInfo === true) {
            var pove = procwrit.wrtoda(true, { nam: ' (العربية) معالجة الكلمات ', ty: y.ty, nx: y.nx, nn: y.nn })
            numAds++;
            infoData.push({ date: formatAMPM(), info: { nam: ' (العربية) معالجة الكلمات ', type: y.ty, xword: y.nx, newword: y.nn } })
            ccwss()
            return pove
        } else {
            return false
        }
    } catch {
        return false
    }
}
function doSen(y) {
    try {
        var verInfo = jBasicMain.cecData("_bac21er", { us: y.na, id: y.id })
        if (verInfo === true) {
            var pove = procwrit.wrtoda(true, { 'nam': ' (العربية) معالجة الجمل ', ty: y.ty, nx: y.nx, nn: y.nn })
            numAds++;
            infoData.push({ date: formatAMPM(), info: { nam: ' (العربية) معالجة الكلمات ', type: y.ty, xword: y.nx, newword: y.nn } })
            ccwss()
            return pove
        } else {
            return false
        }
    } catch {
        return false
    }
}
function ccwss() {
    if (numAds > 2) {
        if(didSenn === false){
            didSenn = true
            try {
                var bod = ""
                infoData.forEach(e=>{
                    var eD = "<div> <p> Date add : "+e.date+"</p>" + "<p> Name section : "+e.info.nam+"</p></div>"+ "<div> <p> Name section : "+e.info.nam+"</p> </div>"
                    bod.concat(eD)
                })
                setTimeout(() => {
                    console.log(bod)
                }, 1000);
                var mailOptions = {
                    from: 'procesen.server@gmail.com',
                    to: 'husseinalaa.ea@gmail.com',
                    subject: ' New data has been added ',
                    html: bod
                };
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        didSenn = false
                    } else {
                        didSenn = false
                        console.log('Email sent: ' + info.response);
                    }
                });
                numAds = 0
                infoData = []
            } catch {
                didSenn = false
            }
        }
    }
}
function reSend(y) {
    try {
        var verInfo = jBasicMain.cecData("_bac21er", { us: y.na, id: y.id })
        if (verInfo === true) {
            var pove = procwrit.xSendData(true)
            return pove
        } else {
            return false
        }
    } catch {
        return false
    }
}
function setUpData(y) {
    try {
        var verInfo = jBasicMain.cecData("_bac21er", { us: y.na, id: y.id })
        if (verInfo === true) {
            var pove = procwrit.setData(true)
            return pove
        } else {
            return false
        }
    } catch {
        return false
    }
}
module.exports = {
    doWr,
    doSen,
    setUpData,
    reSend
}