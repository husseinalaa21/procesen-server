const express = require('express');
const router = express.Router();
const buffuJs = {
    "_dvBn" : [
        {"exdz" : '[0-9]' , "nam" : ' أرقام '},
        {"exdz":' ', "nam" : ' مسافات ' },
        {"exdz":'[\u0600-\u06FF]', "nam" : ' أحرف عربية '},
        {"exdz":'[a-zA-Z]', "nam" : ' أحرف انجليزية '},
        {"exdz":'[$-/:-?{-~!"^_`"#@]', "nam" : ' رموز و فواصل ' },
        {"exdz":false,"nam" : ' معالجة الكلمات العربية '},
        {"exdz":false,"nam" : ' معالجة الكلمات الانجليزية '},
        {"exdz":false,"nam" : ' أزالة الاقتباسات '},
        {"exdz":false,"nam" : ' تحويل الاحرف العربية الى احرف أنجليزية '},
        {"exdz":false,"nam" : ' تحويل الاحرف الانجليزية الى احرف عربية '}
    ]
}

const buffuJsEn = {
    "_dvBn" : [
        {"exdz" : '[0-9]' , "nam" : ' أرقام '},
        {"exdz":' ', "nam" : ' مسافات ' },
        {"exdz":'[\u0600-\u06FF]', "nam" : ' أحرف عربية '},
        {"exdz":'[a-zA-Z]', "nam" : ' أحرف انجليزية '},
        {"exdz":'[$-/:-?{-~!"^_`"#@]', "nam" : ' رموز و فواصل ' },
        {"exdz":false,"nam" : ' معالجة الكلمات العربية '},
        {"exdz":false,"nam" : ' معالجة الكلمات الانجليزية '},
        {"exdz":false,"nam" : ' أزالة الاقتباسات '},
        {"exdz":false,"nam" : ' تحويل الاحرف العربية الى احرف أنجليزية '},
        {"exdz":false,"nam" : ' تحويل الاحرف الانجليزية الى احرف عربية '}
    ]
}

// Question Sections
router.get('/procsentArQues', (req, res) => {
    if(req.headers.referer === "https://ar.procsent.com/"){
        res.send(data)
        res.end();
    } else {
        return false
    }
})
router.get('/procsentEnQues', (req, res) => {
    if(req.headers.referer === "https://procsent.com/" || req.headers.referer === "https://en.procsent.com/"){
        res.send(data)
        res.end();
    } else {
        return false
    }
})
// END One

// Process Section
router.get('/procsentAr', (req, res) => {
    //console.log(`access once here ! from ${req.headers.origin} Or ${req.headers.referer}`)
    res.send(buffuJs)
})

router.get('/procsentEn', (req, res) => {
    //console.log(`access once here ! from ${req.headers.origin} Or ${req.headers.referer}`)
    res.send(buffuJsEn)
})
// END Two

module.exports = router;