const express = require('express');
const router = express.Router();
const buffuJs = {
    "_dvBn" : [
        {"exdz" : '[0-9]' , "nam" : ' أرقام '},
        {"exdz":' ', "nam" : ' مسافات ' },
        {"exdz":'[\u0600-\u06FF]', "nam" : ' أحرف عربية '},
        {"exdz":'[a-zA-Z]', "nam" : ' أحرف انجليزية '},
        {"exdz":'[$-/:-?{-~!"^_`"#@]', "nam" : ' رموز و فواصل ' },
        {"exdz":'\n', "nam" : ' سطور ' },
        {"exdz":false,"nam" : ' معالجة الكلمات العربية ',"xc": false, "eo" : [['مرحبا', 'هاي'], ["العالم","الارض"]]},
        {"exdz":false,"nam" : ' معالجة الكلمات الانجليزية ',"xc":false , "eo":[['hello', 'hi'], ["word","earth"]]},
        {"exdz":false,"nam" : ' أزالة الاقتباسات ', "ex" : true,"eo":'[1]'},
        {"exdz":false,"nam" : ' تحويل الارقام العربية الى ارقام أنجليزية ',"ex":false, "eo" : [['1','2']]},
        {"exdz":false,"nam" : ' تحويل الارقام الانجليزية الى الارقام عربية ',"ex":false, "eo" : [['1','2']]}
    ]
}

const buffuJsEn = {
    "_dvBn" : [
        {"exdz" : '[0-9]' , "nam" : ' Numbers '},
        {"exdz":' ', "nam" : ' Spaces ' },
        {"exdz":'[\u0600-\u06FF]', "nam" : 'Letters Arabic'},
        {"exdz":'[a-zA-Z]', "nam" : ' Letters English '},
        {"exdz":'[$-/:-?{-~!"^_`"#@]', "nam" : ' Breaks and symbols ' },
        {"exdz":'\n', "nam" : ' Lins ' },
        {"exdz":false,"nam" : ' Arabic word processing '},
        {"exdz":false,"nam" : ' English word processing '},
        {"exdz":false,"nam" : ' Remove quotes '},
        {"exdz":false,"nam" : ' Converting Arabic letters into English letters '},
        {"exdz":false,"nam" : ' Converting English letters into Arabic letters '}
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