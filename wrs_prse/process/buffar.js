var _bData = [
    { "exdz": '[0-9]', "nam": ' أرقام ' },
    { "exdz": ' ', "nam": ' مسافات ' },
    { "exdz": '[\u0600-\u06FF]', "nam": ' أحرف عربية ' },
    { "exdz": '[a-zA-Z]', "nam": ' أحرف انجليزية ' },
    { "exdz": '[@|#|$|%|=|&|*|(|)|{|}|:|/|\\>|\<]', "nam": ' رموز و فواصل ' },
    { "exdz": `[.]`, "nam": ' نقطة فاصل ' },
    { "exdz": `[?]`, "nam": ' علامة استفهام ' },
    { "exdz": `[']`, "nam": " علامة اقتباس [ ' ]" },
    { "exdz": `["]`, "nam": ' علامة اقتباس [ " ]' },
    { "exdz": '[`]', "nam": ' علامة اقتباس [ ` ]' },
    { "exdz": '[,]', "nam": ' فاصلة [ , ] ' },
    { "exdz": '[!]', "nam": ' علامة تعجب ' },
    { "exdz": '[;]', "nam": ' فاصلة منقوطة [ ; ]' },
    { "exdz": '[+]', "nam": ' علامة جمع ' },
    { "exdz": '[-]', "nam": ' علامة ناقص ' },
    { "exdz": '[\\]|\[]', "nam": ' أقواس مربعة ' },
    { "exdz": '\n', "nam": ' سطور ' },
    { "exdz": false, "nam": ' أزالة الاقتباسات ', "ex": true, "eo": '[\[+(?=0|1|2|3|4|5|6|7|8|9|٠|٩|٨|٧|٦|٥|٤|٣|٢|١)\]+]' },
    { "exdz": false, "nam": ' (العربية) معالجة الكلمات ', "ex": false, "eo": [['مرحبا', 'هاي'], ["كيف حالك", "كيف هو حالك"]] },
    { "exdz": false, "nam": ' (العربية) معالجة الجمل ', "ex": false, "eo": [['لا تحتوي', 'لا تمتلك'], ["لا يستطيع", "لا يقدر"]] }
]
function bofpof(x) {
    if (x === true) {
        // meam get data
        return _bData
    }
}
function wrtoda(x, y) {
    if (x === true) {
        let numin = y.nam
        let didFon = false
        let numFon = 0
        for (var et = 0; et < _bData.length; et++) {
            if (_bData[et].nam === numin) {
                didFon = true
                numFon = et
            }
        }
        if (didFon === true) {
            if (y.ty === 'ad') {
                // add new
                var arIt = _bData[numFon].eo
                let noSam = false
                arIt.forEach(r => {
                    if (r[0] === y.nx) {
                        noSam = true
                    }
                })
                if (noSam === true) {
                    return ' الكلمة موجودة بالفعل '
                } else {
                    var drDo = _bData[numFon].eo
                    drDo.push([y.nx, y.nn])
                    _bData[numFon].eo = drDo
                    return ' Added successfully! '
                }
            } else if (y.ty === 'de') {
                // delete 
                var arIt = _bData[numFon].eo
                let don = false
                let ton = 0
                for (var de = 0; de < arIt.length; de++) {
                    if (y.nx === arIt[de][0]) {
                        don = true
                        ton = de
                    }
                }
                if (don === true) {
                    arIt.splice(ton, 1)
                    _bData[numFon].eo = arIt
                    return ' تم الحذف  '
                } else {
                    return ' لا يوجد تطابق '
                }
            } else if (y.ty === 'up') {
                // update
                var arIt = _bData[numFon].eo
                let upon = false
                let son = 0
                for (var u = 0; u < arIt.length; u++) {
                    if (arIt[u][0] === y.nx) {
                        upon = true
                        son = u
                    }
                }
                if(upon === true){
                    arIt[son][0] = y.nx
                    arIt[son][1] = y.nn
                    _bData[numFon].eo = arIt
                    return " تم التحديث بنجاح  "
                } else {
                    return " لا يوجد تطابق ليتم التحديث  "
                }
            } else {
                return 'خطء في نوع الادخال'
            }
        } else {
            return false
        }
    }
}

module.exports = {
    bofpof,
    wrtoda
}