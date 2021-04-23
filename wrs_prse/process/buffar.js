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
    { "exdz": false, "nam": ' (العربية) معالجة الكلمات ', "ex": false, "xvy" : true, "eo": [['مرحبا', 'هاي'], ["كيف حالك", "كيف هو حالك"]] },
    { "exdz": false, "nam": ' (العربية) معالجة الجمل ', "ex": false, "xvy" : true, "eo": [['لا تحتوي', 'لا تمتلك'], ["لا يستطيع", "لا يقدر"]] },
    { "exdz": false, "nam": ' تحويل الاحرف العربية الى احرف أنجليزية ', "ex": false, "xvy" : true, "eo": [['٠','0'],['١','1'],['٢','2'],['٣','3'],['٤','4'],['٥','5'],['٦','6'],['٧','7'],['٨','8'],['٩','9']] }
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
                    if (r[0] === y.nx|| r[0] ===  y.nn || r[1] === y.nx|| r[1] ===  y.nn) {
                        noSam = true
                    }
                })
                if (noSam === true) {
                    return '  موجودة بالفعل '
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
                    if (y.nx === arIt[de][0] || y.nx === arIt[de][1]) {
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
                    if (arIt[u][0] === y.nx || arIt[u][0] === y.nn || arIt[u][1] === y.nx || arIt[u][1] === y.nn) {
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
function xSendData(x) {
    if (x === true) {
        var eu = []
        for(var eq = 0; eq < _bData.length ; eq++){
            if(_bData[eq].exdz === false){
                eu.push({'nam': _bData[eq].nam , 'con' : _bData[eq].eo})
            }
        }
        return eu
    }
}

module.exports = {
    bofpof,
    wrtoda,
    xSendData
}