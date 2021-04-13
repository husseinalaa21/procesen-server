var jBasicMain = require('../../cklom/jsUfp.js')
var procwrit = require('../process/buffar.js')

function doWr(x,y) {
    if(x === true){
        // mean words
        try {
            var verInfo = jBasicMain.cecData("_bac21er", {us: y.na, id: y.id})
            if(verInfo === true){
                var pove = procwrit.wrtoda(true,{nam : ' (العربية) معالجة الكلمات ',ty : y.ty , nx : y.nx , nn : y.nn})
                return pove
            } else {
                return false
            }
        } catch {
            return false
        }
    } else {
        // mean sentences
        try {
            var verInfo = jBasicMain.cecData("_bac21er", {us: y.na, id: y.id})
            if(verInfo === true){
                procwrit.wrtoda(true,{nam : ' (العربية) معالجة الجمل '})
            } else {
                return false
            }
        } catch {
            return false
        }
    }
}
module.exports = {
    doWr
}