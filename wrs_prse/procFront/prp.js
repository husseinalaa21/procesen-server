const express = require('express');
const router = express.Router();
const buffuJs = {
    "_dvBn" : [
        {"exdz" : '[0-9]' , "nam" : ' أرقام '},
        {"exdz":' ', "nam" : ' مسافات ' },
        {"exdz":'[\u0600-\u06FF]', "nam" : ' أحرف عربية '},
        {"exdz":'[a-zA-Z]', "nam" : ' أحرف انجليزية '},
        {"exdz":'[^\w]', "nam" : ' رموز و فواصل ' },
        {"exdz":'\n', "nam" : ' سطور ' },
        {"exdz":false,"nam" : ' أزالة الاقتباسات ', "ex" : true,"eo":'[\[+(?=0|1|2|3|4|5|6|7|8|9|٠|٩|٨|٧|٦|٥|٤|٣|٢|١)\]+]'},
        {"exdz":false,"nam" : ' ( العربية ) معالجة الكلمات ',"ex": false, "eo" : [['مرحبا', 'هاي'], ["كيف حالك","كيف هو حالك"]]},
        {"exdz":false,"nam" : ' ( العربية ) معالجة الجمل ',"ex":false , "eo":[['لا تحتوي', 'لا تمتلك'], ["لا يستطيع","لا يقدر"]]}
    ]
}
// if ex is true it's mean's delete element as area
const buffuJsEn = {
    "_dvBn" : [
        {"exdz" : '[0-9]' , "nam" : ' Numbers '},
        {"exdz":' ', "nam" : ' Spaces ' },
        {"exdz":'[\u0600-\u06FF]', "nam" : 'Letters Arabic'},
        {"exdz":'[a-zA-Z]', "nam" : ' Letters English '},
        {"exdz":`[^\w]`, "nam" : ' Breaks and symbols ' },
        {"exdz":'\n', "nam" : ' Lins ' },
        {"exdz":false,"nam" : ' Remove quotes ', "ex" : true,"eo":'[\[+(?=0|1|2|3|4|5|6|7|8|9|٠|٩|٨|٧|٦|٥|٤|٣|٢|١)\]+]'},
        {"exdz":false,"nam" : ' Word processing ( English ) ',"ex":false , "eo":[['Go', 'Run'], ["Trump","Biden"]]},
        {"exdz":false,"nam" : ' Sentences processing ( English ) ',"ex":false, "eo" : [['hello ,', 'hi ,'], ["how old are you","What is your age"]]}
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