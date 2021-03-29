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
        {"exdz":'[\[+(?=0|1|2|3|4|5|6|7|8|9|٠|٩|٨|٧|٦|٥|٤|٣|٢|١)\]+]',"nam" : ' أزالة الاقتباسات '},
        {"exdz":false,"nam" : ' معالجة الكلمات العربية ',"ex": false, "eo" : [['مرحبا', 'هاي'], ["العالم","الارض"]]},
        {"exdz":false,"nam" : ' معالجة الكلمات الانجليزية ',"ex":false , "eo":[['hello', 'hi'], ["word","earth"]]},
        {"exdz":false,"nam" : ' تحويل الارقام العربية الى ارقام أنجليزية ',"ex":false, "eo" : [['1','2']]},
        {"exdz":false,"nam" : ' تحويل الارقام الانجليزية الى الارقام عربية ',"ex":false, "eo" : [['1','2']]}
    ]
}
// if ex is true it's mean's delete element as area
const buffuJsEn = {
    "_dvBn" : [
        {"exdz" : '[0-9]' , "nam" : ' Numbers '},
        {"exdz":' ', "nam" : ' Spaces ' },
        {"exdz":'[\u0600-\u06FF]', "nam" : 'Letters Arabic'},
        {"exdz":'[a-zA-Z]', "nam" : ' Letters English '},
        {"exdz":'[$-/:-?{-~!"^_`"#@]', "nam" : ' Breaks and symbols ' },
        {"exdz":'\n', "nam" : ' Lins ' },
        {"exdz":'[\[+(?=0|1|2|3|4|5|6|7|8|9|٠|٩|٨|٧|٦|٥|٤|٣|٢|١)\]+]',"nam" : 'Remove quotes '},
        {"exdz":false,"nam" : ' Arabic word processing ',"ex": false, "eo" : [['مرحبا', 'هاي'], ["العالم","الارض"]]},
        {"exdz":false,"nam" : ' English word processing ',"ex":false , "eo":[['hello', 'hi'], ["word","earth"]]},
        {"exdz":false,"nam" : ' Converting Arabic letters into English letters ',"ex":false, "eo" : [['1','2']]},
        {"exdz":false,"nam" : ' Converting English letters into Arabic letters ',"ex":false, "eo" : [['1','2']]}
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